/* single-line bookmarklet version of JS below that you can save in your bookmarks/favorites bar or folder */
javascript:function getAttendees(){ var result = prompt('You must be at a URL of the format https://dataaisummit.com/_get-attendees/?letter=A&view to run this script.'+'\r\n'+'- Press OK if ready to run on the current URL (generates Excel-compatible .tsv file in your Downloads folder), or'+'\r\n'+'-Type a different letter of alphabet to go to that subset of surnames, and hit Enter/click OK (then run this bookmarklet again), or'+'\r\n'+'-Press Cancel if you are not on the desired URL yet (and do not know which you want)'); if (result.trim().match(/^[a-z]$/i)) { location.href="https://dataaisummit.com/_get-attendees/?letter="+result.trim()+"&view";} else if (result === null) { return;} else if (result === '') { var arr = new Array, i, company, firstName, lastName, name, title; var strings='First Name'+'\t'+'Last Name'+'\t'+'Company'+'\t'+'Title'+'\t'+'URL'+'\r\n'; var tq = document.querySelectorAll('.attendee'), url; for (i = 0; i < tq.length; i++) {  url = tq[i].getElementsByTagName('a')[0].href;  name = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('h5')[0].innerText.trim();  try {  company = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('p')[0].innerText.trim();  }  catch(error) {  console.error("No company/first p for " + name + ", element " + i +": " + error); company = "";  }  try {  title = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('p')[1].innerText.trim();   }  catch(error) {  console.error("No title/second p for " + name + ", element " + i +": " + error); title = "";  }  name = name.split(', '); firstName=name[1]; lastName=name[0];    arr[i] =firstName+'\t'+lastName+'\t'+company+'\t'+title+'\t'+url;    strings += arr[i]+'\r\n';   } console.log(strings); var pom = document.createElement('a'); var csvContent=strings; var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'}); var url = URL.createObjectURL(blob); pom.href = url; pom.setAttribute('download', 'DataAIsummitAttendees.tsv'); pom.click(); } else { return;} } getAttendees()

function getAttendees(){
var result = prompt('You must be at a URL of the format https://dataaisummit.com/_get-attendees/?letter=A&view to run this script.'+'\r\n'+'- Press OK if ready to run on the current URL (generates Excel-compatible .tsv file in your Downloads folder), or'+'\r\n'+'-Type a different letter of alphabet to go to that subset of surnames, and hit Enter/click OK (then run this bookmarklet again), or'+'\r\n'+'-Press Cancel if you are not on the desired URL yet (and do not know which you want)');
if (result.trim().match(/^[a-z]$/i)) { location.href="https://dataaisummit.com/_get-attendees/?letter="+result.trim()+"&view";}
else if (result === null) { return;}
else if (result === '') {
var arr = new Array, i, company, firstName, lastName, name, title;
var strings='First Name'+'\t'+'Last Name'+'\t'+'Company'+'\t'+'Title'+'\t'+'URL'+'\r\n';
var tq = document.querySelectorAll('.attendee'), url;
for (i = 0; i < tq.length; i++) {
	url = tq[i].getElementsByTagName('a')[0].href;
	name = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('h5')[0].innerText.trim();
	try {
	company = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('p')[0].innerText.trim();
	}
	catch(error) {
	console.error("No company/first p for " + name + ", element " + i +": " + error); company = "";
	}
	try {
	title = tq[i].getElementsByClassName('centerit')[0].getElementsByTagName('p')[1].innerText.trim();	
	}
	catch(error) {
	console.error("No title/second p for " + name + ", element " + i +": " + error); title = "";
	}
	name = name.split(', '); firstName=name[1]; lastName=name[0];
  	arr[i] =firstName+'\t'+lastName+'\t'+company+'\t'+title+'\t'+url;
  	strings += arr[i]+'\r\n';
  }
console.log(strings);
var pom = document.createElement('a');
var csvContent=strings;
var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'DataAIsummitAttendees.tsv');
pom.click();
}
else { return;}
}
getAttendees()
