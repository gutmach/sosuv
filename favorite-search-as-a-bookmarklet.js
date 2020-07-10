/* enter below in a tool like https://mrcoles.com/bookmarklet/ to wrap in a 
function before dragging bookmarklet into your bookmarks/favorites bar */
var s; if (window.getSelection) {
    s = window.getSelection().toString(); } else {
 s = document.selection.createRange().text;}
var t = prompt('Enter additional keywords for location, job title, etc.', s);
if (t) { t = t.trim();
    location = 'https://www.google.com/search?newwindow=1&num=100&filter=0&q=' + t + '+%28intitle%3Aalumni+OR+intitle%3Apeople+OR+intitle%3Astaff+OR+intitle%3Aabout+OR+intitle%3Abio+OR+intitle%3Aprofile+OR+intitle%3Ateam+OR+intitle%3Aour+OR+inurl%3Aabout+OR+inurl%3Abio+OR+inurl%3Aprofile+OR+inurl%3Aour+OR+inurl%3Ateam+OR+inurl%3Aalumni+OR+inurl%3Apeople+OR+inurl%3Astaff%29+-site%3Alinkedin.com+-intitle%3Avacancies+-intitle%3Ajobs'
}