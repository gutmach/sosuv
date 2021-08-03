// version 1: paste and run in your browser Console
function LIvideoeventchatters(){
var arr = new Array, i=0, j=0, divs, name, headline, imgsrc, imgalt, profileurl;
var strings='Chatter name'+'\t'+'profile headline'+'\t'+'profile URL'+'\t'+'image URL'+'\r\n';
var divs = document.querySelectorAll('.comments-comment-item__post-meta');
for (i = 0; i < divs.length; i++) {
	name = divs[i].getElementsByClassName('comments-post-meta__name-text')[0].textContent.trim();
	headline = divs[i].getElementsByClassName('comments-post-meta__headline')[0].textContent.trim();
	profileurl = divs[i].getElementsByTagName('a')[0].href;
	imgsrc = divs[i].getElementsByTagName('img')[0].getAttribute('src');
	arr[i] = name+'\t'+headline+'\t'+profileurl+'\t'+imgsrc;
  		strings += arr[i]+'\r\n';
}
var pom = document.createElement('a');
var csvContent=strings;
var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'LIchatters.tsv');
pom.click();
}
LIvideoeventchatters()

// version 2: single-line bookmarklet you can store as a bookmark/favorite in your browser
javascript:function LIvideoeventchatters(){ var arr = new Array, i=0, j=0, divs, name, headline, imgsrc, imgalt, profileurl; var strings='Chatter name'+'\t'+'profile headline'+'\t'+'profile URL'+'\t'+'image URL'+'\r\n'; var divs = document.querySelectorAll('.comments-comment-item__post-meta'); for (i = 0; i < divs.length; i++) {  name = divs[i].getElementsByClassName('comments-post-meta__name-text')[0].textContent.trim();  headline = divs[i].getElementsByClassName('comments-post-meta__headline')[0].textContent.trim();  profileurl = divs[i].getElementsByTagName('a')[0].href;  imgsrc = divs[i].getElementsByTagName('img')[0].getAttribute('src');  arr[i] = name+'\t'+headline+'\t'+profileurl+'\t'+imgsrc;     strings += arr[i]+'\r\n'; } var pom = document.createElement('a'); var csvContent=strings; var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'}); var url = URL.createObjectURL(blob); pom.href = url; pom.setAttribute('download', 'LIchatters.tsv'); pom.click(); } LIvideoeventchatters()
