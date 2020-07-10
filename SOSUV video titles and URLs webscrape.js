/* once you are on the SOSUV 2020 Vimeo collection page and logged in,
run this in the console on each page to generate the list of video titles, presenter names and URLs */
var g = document.getElementsByClassName("sc-AykKC hGLFLH sc-AykKG fSdOAW sc-LzNsK eRXEKm");
var tag = /(Day \d)([\s|-]+)/;
var ftitle='', loc='', titlename='', match, day='', arr = new Array(), fulltitle = new Array();
var strings ='Day'+'\t'+'VideoTitle'+'\t'+'URL'+'\t'+'Presenter'+'\r\n';
for (i = 0; i < g.length; i++) {
  try {
ftitle = g[i].getElementsByTagName("a")[0].textContent;
loc = g[i].getElementsByTagName("a")[0].href;
titlename = ftitle.substr(7);
match = tag.exec(titlename);
day = match[1];
fulltitle = titlename.split(match[0]);
titlename = fulltitle[1];
}
   catch(error) {
console.error("Problem on row " + i + ": " + error);}

arr[i] = day+'\t'+titlename+'\t'+loc;
strings += arr[i]+'\r\n';
}
console.log(strings);