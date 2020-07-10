/* Since 1673 companies total & shows 16 at a time, this clicks button 104 more times after initial 16 display */
let i = 0; 
while (i < 104) { 
  task(i); 
   i++; 
} 
function task(i) { 
  setTimeout(function() { 
      document.getElementsByClassName("btn-capsule center-block")[0].click(); 
  }, 4000 * i); 

 /* then run this to scrape the data from all companies */
var strings ='Company Name'+'\t'+'Location'+'\t'+'Co Profile URL'+'\t'+'Recruiter Count'+'\r\n';
var purl='', coname='', loc='', rcount='', arr = new Array();
var g = document.getElementsByClassName("col-xs-12 col-sm-6 col-md-3");
var h = document.getElementsByClassName('header__info');
var f = document.getElementsByClassName("location");
var j = document.getElementsByClassName("recruiters__count");
for (i = 0; i < g.length; i++) {
purl = g[i].getElementsByTagName("a")[0].href;
coname = h[i].getElementsByTagName("span")[0].textContent;
loc = f[i].getElementsByTagName("span")[0].textContent;
rcount = j[i].innerText;
arr[i] = coname+'\t'+loc.trim()+'\t'+purl+'\t'+rcount;
console.log(arr[i]);
strings += arr[i]+'\r\n';
}
/* download result to .tsv - Excel/Google sheets-compatible format */
var pom = document.createElement('a');
var csvContent=strings;
var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'clearancecompanies.tsv');
pom.click();