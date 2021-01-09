// Go to https://www.coindesk.com/masthead in your browser, paste all JavaScript code below in your DevTools' Console tab and hit Enter to run.
// In a few seconds, it will generate coindeskstaff.tsv file in your Downloads folder, which you can open in Excel, Google sheets, etc.
function coindesk(){
var q = document.querySelectorAll(".author-component.undefined"), i=0, j=0, link=[], tw='', li='', tg='', insta='';
var email="", socials="", bio="", image="", title="", name="", arr = new Array;
var strings = "Name"+'\t'+"Title"+'\t'+"BioURL"+'\t'+"LinkedIn"+'\t'+"Twitter"+'\t'+"Telegram"+'\t'+"Instagram"+'\t'+"Image URL"+"\r\n";
for (i = 0; i < q.length; i++) {
  image = q[i].getElementsByClassName("img-block")[0].getElementsByTagName("a")[0].style.backgroundImage.split('"')[1];
  bio = q[i].getElementsByClassName("img-block")[0].getElementsByTagName("a")[0].href;
  name = q[i].getElementsByClassName("name")[0].getElementsByTagName("a")[0].textContent;
  title = q[i].getElementsByClassName("title")[0].textContent;
  socials =  q[i].getElementsByClassName("socials")[0];
  try {
    for (j = 0; j < socials.getElementsByTagName("li").length; j++) {
      link[j] =  socials.getElementsByTagName("li")[j].getElementsByTagName("a")[0].href;
      if (link[j].includes("twitter")) {tw = link[j]}
      else if (link[j].includes("linkedin")) {li = link[j]}
      else if (link[j].includes("mailto:")) {email = link[j]}
      else if (link[j].includes("t.me")) {tg = link[j]}
      else if (link[j].includes("instagram")) {insta = link[j]};
    }
  }
  catch(error) {
console.error("Some missing social links on person (starts w/0, add 1 to number)" + i +": " + error);
  }  
  arr[i] = name+'\t'+title+'\t'+bio+'\t'+li+'\t'+tw+'\t'+tg+'\t'+insta+'\t'+image;
  strings += arr[i]+'\r\n';
  tw=''; li=''; tg=''; insta='';
}
var pom = document.createElement('a');
var csvContent=strings; // load our csv/tsv data 
var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'coindeskstaff.tsv');
pom.click();
}
coindesk()
