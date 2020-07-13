/* Phil changed the layout post-conference, so this works better */
var g = document.getElementsByClassName("sc-AykKC hGLFLH sc-AykKG fSdOAW sc-LzNsK eRXEKm");
var fulltitle='', loc='', titlename='', parsetitle='', parseTest, presenter='', arr = new Array();
var strings ='VideoTitle'+'\t'+'Presenter'+'\t'+'URL'+'\r\n';
for (i = 0; i < g.length; i++) {
fulltitle = g[i].getElementsByTagName("a")[0].textContent;
loc = g[i].getElementsByTagName("a")[0].href;
if(fulltitle.match(/_(.+)/)) {
parsetitle = fulltitle.split(/_(.+)/);
presenter = parsetitle[0];
titlename = parsetitle[1];
} else {
presenter = fulltitle;
titlename = fulltitle;
j=i+1;
console.log('non-standard video title format in video #' + j + ' of '+g.length);
}
arr[i] = titlename+'\t'+presenter+'\t'+loc;
strings += arr[i]+'\r\n';
}
console.log(strings);
