/* How to webscrape Instagram search results
1) In your Chrome browser, go to instagram.com and click the icon of yourself at upper right to go to your Instagram homepage (for me, it's instagram.com/gutmach) and in the top search box, type your keywords (e.g., I typed sourcer).
2) Do not press Enter. You should already see a list of matching results that display
3) Right click the webpage and select Inspect. A new Elements pane just appeared in your browser. You'll see in the source code there that the search result links are of the format:
<div role="none">
<a class="-qQT3" href="/sourcerwhocode/" tabindex="0"></div>
Note that websites change their format periodically, so if -qQT3 ever changes to another value, modify that in the script below.
4) Click the Console tab in the browser window pane (just to the right of the Elements tab you're on). Copy the following code starting with var arr and ending with pom.click();
5) Make sure to click just after the > prompt at the bottom of Console before you hit paste (Ctrl+v), then hit the Enter key
6) In a few seconds, you will see the file instagram-search-result-urls.tsv appear in your Downloads folder (usually at bottom left corner of your screen). Double-click it to open it in Excel and you'll see the links to all the matching profiles (I got 54)!
Copy starting below this line /*

var arr = new Array, links, strings='';
links = document.querySelectorAll('.-qQT3'); 
for (i = 0; i < links.length; i++) {
  try {
    url = links[i].href;
     arr[i] = url;
      strings += arr[i]+'\r\n';
    }
    catch(error) {
      console.error('no URL on record ' + i + ': ' + error);
    }
}
pom = document.createElement('a');
var csvContent=strings; 
var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'instagram-search-result-urls.tsv');
pom.click();
