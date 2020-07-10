/* off-the-shelf scraper software did not work on https://script.google.com/macros/s/AKfycbycGK_GyPdNJ6_67JhLwiXgc9E8DFkNmR-Why0Vr10nQRAhfCWy/exec but this will.
Note the use of console.log() to output the data to the browser console at the end,
from where you can copy/paste into Excel or a Google sheet */
var g = document.getElementsByClassName("card-body");
var pname='', jtitle='', loc='', bio='', LIurl='', arr = new Array();
var strings ='Name'+'\t'+'JobTitle'+'\t'+'Location'+'\t'+'Bio'+'\t'+'ResumeURL'+'\t'+'Email'+'\t'+'LinkedIn'+'\t'+'link2'+'\t'+'link3'+'\r\n';
for (i = 0; i < g.length; i++) {
pname = g[i].getElementsByTagName("b")[0].textContent;
jtitle = g[i].getElementsByTagName("h4")[0].textContent;
loc = g[i].getElementsByTagName("h6")[0].textContent;
loc = loc.trim();
bio = g[i].querySelector(".card-text.text-muted").textContent;
arr[i] = pname+'\t'+LIurl+'\t'+jtitle+'\t'+loc+'\t'+bio+'\t';
  for (q = 0; q<g[i].getElementsByTagName('a').length; q++){
  arr[i] += g[i].getElementsByTagName('a')[q].href + '\t';
  }
strings += arr[i]+'\r\n';
console.log(strings);
}