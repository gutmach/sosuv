/* get company names from https://appexchange.salesforce.com/consulting/top
filter list of search results however you want, then use an infinite scroll tool or repeatedly click Show more button at bottom of results page
*/
var arr = new Array, rowcount, f, strings='';
f = document.querySelectorAll('.appx-tile-feature-title'); 
for (i = 0; i < f.length; i++) {
  try {
     arr[i] = f[i].innerText;
      strings += arr[i]+'\r\n';
    }
    catch(error) {
      console.error('no company name on record ' + i + ': ' + error);
    }
}
pom = document.createElement('a');
var csvContent=strings; 
var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'salesforcetopfirms.tsv');
pom.click();
