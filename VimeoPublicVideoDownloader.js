/*
1) EFFICIENT VERSION (but it wipes out the current webpage - see SAFE version below to write to new window):
If you want to download a public video on Vimeo, it's not obvious how. If the URL is, say, https://vimeo.com/548847228 then you can go to https://player.vimeo.com/video/548847228/config and find the mp4 links hidden in the code, but here's a bookmarklet to parse those choices and make them clickable instantly. */

// A) single-line bookmarklet to save as a favorite/bookmark in your browser immediately below:

javascript:function getVimeoVid(){ if (window.location.hostname == 'vimeo.com' && window.location.pathname.slice(-7).match( /[0-9]+/ )) {  alert('Taking you to the view/download options page but you will need to run this bookmarklet again');  window.location.href = 'https://player.vimeo.com/video' + window.location.pathname + '/config';  } else if (window.location.hostname == 'player.vimeo.com') { var json = document.body.textContent; json = JSON.parse(json); var items = json.request.files.progressive; var text = "1) Click on the hyperlink of the quality version of the video you want, then 2) click the vertical triple-dot button at bottom right of video window and select Download: "; for (let x in items) {  text += '<a href="' + items[x].url + '">' + items[x].quality + '</a> | '; } document.body.innerHTML = text; } else { alert('You need to go to the Vimeo URL containing the desired public video'); } } getVimeoVid()

// B) More readable JS code version to run in your browser's Dev Tools console tab (Ctrl + Shift + j):

if (window.location.hostname == 'vimeo.com' && window.location.pathname.slice(-7).match( /[0-9]+/ )) {
	alert('Taking you to the view/download options page but you will need to run this bookmarklet again');
	window.location.href = 'https://player.vimeo.com/video' + window.location.pathname + '/config';
 }
else if (window.location.hostname == 'player.vimeo.com') {
var json = document.body.textContent; json = JSON.parse(json);
var items = json.request.files.progressive;
var text = "1) Click on the hyperlink of the quality version of the video you want, then 2) click the vertical triple-dot button at bottom right of video window and select Download: ";
for (let x in items) { text += '<a href="' + items[x].url + '">' + items[x].quality + '</a> | '; }
document.body.innerHTML = text;
}
else { alert('You need to go to the Vimeo URL containing the desired public video'); }

/*
2) SAFE VERSION which opens video options in a separate popup window:
  A) single-line bookmarklet to save as a favorite/bookmark in your browser immediately below */

javascript:function getVimeoVid(){if (window.location.hostname == 'vimeo.com' && window.location.pathname.slice(-7).match( /[0-9]+/ )) {  alert('Taking you to the view/download options page but you will need to run this bookmarklet again');  window.location.href = 'https://player.vimeo.com/video' + window.location.pathname + '/config';  } else if (window.location.hostname == 'player.vimeo.com') { var json = document.body.textContent; json = JSON.parse(json); var items = json.request.files.progressive; var text = "1) Click on the hyperlink of the quality version of the video you want, then 2) click the vertical triple-dot button at bottom right of video window and select Download"; var w = window.open('','_blank','width=500,height=400,resizable=1,location=1,menubar=0,toolbar=0,personalbar=0,scrollbar=1,status=0'); w.document.write('<html><head><title>Vimeo public video download options</tit' + 'le>'); w.document.write('</he' + 'ad><body>'); w.document.write(text+'<br><br>'); for (let x in items) { w.document.write('<a href="' + items[x].url + '">' + items[x].quality + '</a> | '); } w.document.write('</bo' + 'dy></ht' + 'ml>'); w.document.close(); w.focus(); } else { alert('You need to go to the Vimeo URL containing the desired public video'); } } getVimeoVid()

// B) More readable JS code version to run in your browser's Dev Tools console tab (Ctrl + Shift + j):

if (window.location.hostname == 'vimeo.com' && window.location.pathname.slice(-7).match( /[0-9]+/ )) {
	alert('Taking you to the view/download options page but you will need to run this bookmarklet again');
	window.location.href = 'https://player.vimeo.com/video' + window.location.pathname + '/config';
 }
else if (window.location.hostname == 'player.vimeo.com') {
var json = document.body.textContent; json = JSON.parse(json);
var items = json.request.files.progressive;
var text = "1) Click on the hyperlink of the quality version of the video you want, then 2) click the vertical triple-dot button at bottom right of video window and select Download";
var w = window.open('','_blank','width=500,height=400,resizable=1,location=1,menubar=0,toolbar=0,personalbar=0,scrollbar=1,status=0');
w.document.write('<html><head><title>Vimeo public video download options</tit' + 'le>');
w.document.write('</he' + 'ad><body>');
w.document.write(text+'<br><br>');
for (let x in items) { w.document.write('<a href="' + items[x].url + '">' + items[x].quality + '</a> | '); }
w.document.write('</bo' + 'dy></ht' + 'ml>'); w.document.close(); w.focus();
}
else { alert('You need to go to the Vimeo URL containing the desired public video'); }
