var u=document.URL;
var parts = u.split("/");
var lastname= parts[parts.length-2];
var firstname = parts[parts.length-3];
fullname = firstname+'%20'+lastname;
const [em, street, city, state, zip] = ['email', 'streetAddress', 'addressLocality', 'addressRegion', 'postalCode'].map(
  val => document.querySelector(`span[itemprop="${val}"]`).textContent
);
var q = document.getElementsByClassName("h3 text-primary")[0].innerHTML;
var regex = /<h1>(.+?(?=\s\|))/g;
var r=regex.exec(q);
var wx = document.getElementsByClassName("col-md-6")[0];
var yz = wx.getElementsByClassName("h3")[0].innerHTML;
var regx = />\s+(\S+)/g;
var cn=regx.exec(yz);
var rs = document.getElementsByClassName("social-links")[0];
var coURL = rs.getElementsByClassName("no-underline")[0].href;
var mn = document.getElementsByClassName("col-md-5")[0];
var op = mn.getElementsByTagName("a")[0].innerHTML;

var empartone ='';
if (firstname.length == em.indexOf("@") && firstname.charAt(0) == em.charAt(0) ){empartone = firstname} 
else if (lastname.length + 1 == em.indexOf("@") && firstname.charAt(0) == em.charAt(0) ){empartone = firstname.charAt(0) + lastname}
else if (firstname.length + lastname.length + 1 == em.indexOf("@") && firstname.charAt(0) == em.charAt(0) ){empartone = firstname + '.' + lastname}
else if (firstname.length + lastname.length == em.indexOf("@") && firstname.charAt(0) == em.charAt(0) ){empartone = firstname + lastname}
else if (firstname.length + lastname.length + 1 == em.indexOf("@") && lastname.charAt(0) == em.charAt(0) ){empartone = lastname + '.' + firstname}
else if (firstname.length + lastname.length == em.indexOf("@") && lastname.charAt(0) == em.charAt(0) ){empartone = lastname + firstname}

var emparttwo = '';
var coparts = coURL.split('//www.');
var co = coparts[1];
var lastChar = co.substr(-1);
if (lastChar == '/') {co = co.substring(0,co.length-1)}
var part2len = em.length - em.indexOf("@") - 1;
if (co.length != part2len) {emparttwo = 'Website Domain Does Not Match Email Domain on Winmo - check company website or another source to verify format'} else {emparttwo = co}; 

var w = window.open('','_blank','width=500,height=400,resizable=1,location=1,menubar=0,toolbar=0,personalbar=0,scrollbar=1,status=0');
w.document.write('<html><head><title>Winmo find contact info</tit' + 'le>');
w.document.write('</he' + 'ad><body>');
w.document.write(r[1]+'<br><br>');
w.document.write('main company phone: '+op+'<br><br>');
w.document.write('main address: '+street+', '+city+', '+state+' '+zip+'<br><br>');
w.document.write('hidden email provided: '+em+'<br><br>');
w.document.write('likely email to test: '+empartone+'@'+emparttwo+'<br><br>');
w.document.write('website and likely email domain: <a target=_blank'+' href='+coURL+'>'+coURL+'</a><br><br>');
w.document.write('<a target=_blank'+' href=https://www.google.com/search?q=site:rocketreach.co+%22'+cn[1]+'%22+%22'+fullname+'%22&newwindow=1&filter=0>find email format and contact info via RocketReach</a>');
w.document.write('<br><br><i>Remember to close this popup when done and before running next search!</i>');
w.document.write('</bo' + 'dy></ht' + 'ml>');
w.document.close();
w.focus();
