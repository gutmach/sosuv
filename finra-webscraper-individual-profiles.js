/*
source https://github.com/andrebradshaw/WebScraper_finra_org/blob/master/searchResultsScraper.js?fbclid=IwAR2aY2FFU5n7fa91Vw4VljxYiSRoUte_p7cF7LKQ9dyeAMCwHHd0kl1Fb2s
This is a specific search for zipcode 85225. You would need to alter the URL on line 83 if you wish to use this on something else. Output file goes to your default downloads folder as a .tsv file but will open in Excel
*/

var reg = (o, n) => o ? o[n] : '';
var rando = (n) => Math.round(Math.random() * n);
var unq = (arr) => arr.filter((e, p, a) => a.indexOf(e) == p);
var delay = (ms) => new Promise(res => setTimeout(res, ms));

var fixCase = (s) => s ? s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) : null;

function toTable(arr) {
  var table = [
    ['id', 'First Name', 'Middle Name', 'Last Name', 'Date', 'Years of Exp', 'iaScope', 'Employer1', 'City1', 'State1', 'Zip1', 'iaOnly1', 'iaSecNum1', 'bdSecNum1', 'Employer2', 'City2', 'State2', 'Zip2', 'iaOnly2', 'iaSecNum2', 'bdSecNum2']
  ];
  var tbod = arr.map(el => {
    var emp1 = el.employment && el.employment[0] ? [el.employment[0].name, el.employment[0].city, el.employment[0].state, el.employment[0].zip, el.employment[0].iaOnly, el.employment[0].iasecNum, el.employment[0].bdsecNum] : [];
    var emp2 = el.employment && el.employment[1] ? [el.employment[1].name, el.employment[1].city, el.employment[1].state, el.employment[1].zip, el.employment[1].iaOnly, el.employment[1].iasecNum, el.employment[1].bdsecNum] : [];
    var employment = emp1.concat(emp2);
    var row = [el.id, el.firstName, el.middleName, el.lastName, el.calDate, el.years, el.iaScope].concat(employment);
    return row;
  });
  return table.concat(tbod);
}

function downloadr(arr2D, filename) {
  var data = /\.json$|.js$/.test(filename) ? JSON.stringify(arr2D) : arr2D.map(el => el.reduce((a, b) => a + '\t' + b)).reduce((a, b) => a + '\r' + b);
  var type = /\.json$|.js$/.test(filename) ? 'data:application/json;charset=utf-8,' : 'data:text/plain;charset=utf-8,';
  var file = new Blob([data], {
    type: type
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, filename);
  } else {
    var a = document.createElement('a'),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 10);
  }
}

function parseJdata(obj) {
  var employment = obj._source.ind_current_employments ? obj._source.ind_current_employments.map(el => {
    return {
      city: el.branch_city ? fixCase(el.branch_city) : '',
      state: el.branch_state ? el.branch_state : '',
      zip: el.branch_zip ? el.branch_zip : '',
      bdsecNum: el.firm_bd_full_sec_number ? el.firm_bd_full_sec_number : '',
      iasecNum: el.firm_ia_full_sec_number ? el.firm_ia_full_sec_number : '',
      id: el.firm_id ? el.firm_id : '',
      name: el.firm_name ? fixCase(el.firm_name) : '',
      iaOnly: el.ia_only ? el.ia_only : '',
    }
  }) : [];

  var days = obj._source.ind_industry_days ? obj._source.ind_industry_days : 0;
  var exp1 = days ? Math.round((days / 360) * 100) / 100 : 0;
  var start = obj._source.ind_industry_cal_date ? obj._source.ind_industry_cal_date : 0;
  var yearsOfExp = start ? Math.round((Math.round(new Date(start).getTime() / 8.64e+7) / 360) * 100) / 100 : exp1;


  var out = {
    firstName: obj._source.ind_firstname ? fixCase(obj._source.ind_firstname) : '',
    lastName: obj._source.ind_lastname ? fixCase(obj._source.ind_lastname) : '',
    middleName: obj._source.ind_middlename ? fixCase(obj._source.ind_middlename) : '',
    calDate: start ? start : '',
    years: yearsOfExp ? yearsOfExp : '',
    iaScope: obj._source.ind_ia_scope ? obj._source.ind_ia_scope : '',
    id: obj._source.ind_source_id ? obj._source.ind_source_id : '',
    employment: employment
  }
  return out;
}

async function getFinra(offset) {
  var res = await fetch("https://api.brokercheck.finra.org/individual?filter=broker%3Dtrue,ia%3Dtrue,brokeria%3Dtrue,active%3Dtrue,prev%3Dtrue,bar%3Dtrue,experience%3D0-2189&hl=true&includePrevious=true&json.wrf=angular.callbacks._5&lat=33.663643&lon=-111.8085&nrows=100&r=25&sort=score+desc&start=" + offset + "&wt=json");
  var text = await res.text();
  var d = JSON.parse(text.replace(/.+callbacks\._5\(/, '').replace(/\);/, ''));
  return d;
}

async function looper() {
  var containArr = [];
  var check = await getFinra(0);
  var total = check.hits.total;
  for (var i = 0; i < total; i = i + 100) {
    var res = await getFinra(i);
    var hits = res.hits.hits;
    hits.forEach(el => containArr.push(parseJdata(el)));
    await delay(rando(944));
  }
  downloadr(toTable(containArr).filter(el => el[0]), 'finra_.tsv');
}

looper()