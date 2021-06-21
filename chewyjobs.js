/* scrape and download all open jobs to Excel compatible .tsv file from https://www.chewy.com/jobs/
Run this script when you are viewing that URL in your browser. It will generate the ChewyJobs.tsv in your
Downloads folder a few seconds later containing 4 column headings in first spreadsheet row and then the 1000+ jobs in rows below.
Immediately below is a single-line bookmarklet you can save to your bookmarks/favorites bar and select it,
further down is the code block you can paste into your browser console at Ctrl + Shift + j */

javascript: function getChewyJobs(){ var arr = new Array, i=0, j=0, depts, deptname, jobs, jobtitle, loc, joburl; var strings='JobTitle'+'\t'+'Location'+'\t'+'Dept. Name'+'\t'+'URL'+'\r\n'; var depts = document.querySelectorAll('.department'); for (i = 0; i < depts.length; i++) {  deptname = depts[i].getElementsByTagName('h3')[0].innerText;  jobs = depts[i].querySelectorAll('li');  for (j = 0; j < jobs.length; j++) {   joburl = jobs[j].getElementsByTagName('a')[0].href;   jobtitle = jobs[j].getElementsByTagName('a')[0].innerText;   loc = jobs[j].innerHTML.split('span>'); loc = loc[2];   arr[i] = jobtitle+'\t'+loc+'\t'+deptname+'\t'+joburl;     strings += arr[i]+'\r\n';  } } var pom = document.createElement('a'); var csvContent=strings; var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'}); var url = URL.createObjectURL(blob); pom.href = url; pom.setAttribute('download', 'ChewyJobs.tsv'); pom.click(); } getChewyJobs()

function getChewyJobs(){
var arr = new Array, i=0, j=0, depts, deptname, jobs, jobtitle, loc, joburl;
var strings='JobTitle'+'\t'+'Location'+'\t'+'Dept. Name'+'\t'+'URL'+'\r\n';
var depts = document.querySelectorAll('.department');
for (i = 0; i < depts.length; i++) {
	deptname = depts[i].getElementsByTagName('h3')[0].innerText;
	jobs = depts[i].querySelectorAll('li');
	for (j = 0; j < jobs.length; j++) {
		joburl = jobs[j].getElementsByTagName('a')[0].href;
		jobtitle = jobs[j].getElementsByTagName('a')[0].innerText;
		loc = jobs[j].innerHTML.split('span>'); loc = loc[2];
		arr[i] = jobtitle+'\t'+loc+'\t'+deptname+'\t'+joburl;
  		strings += arr[i]+'\r\n';
	}
}
var pom = document.createElement('a');
var csvContent=strings;
var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'ChewyJobs.tsv');
pom.click();
}
getChewyJobs()
