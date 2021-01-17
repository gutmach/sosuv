// below downloads a .tsv file of the current members table of any chapter linked from https://recruiting.work/chapters/
function RecruitingWorkList(){
let t = document.getElementsByTagName("table")[3];
let rows = t.rows, arr=new Array, strings='Name'+'\t'+'LinkedIn URL'+'\t'+'Job Title'+'\t'+'Company'+'\r\n';
for (var i = 1; i < rows.length; i++) {
	let nametd = rows[i].cells[0];
	let name = nametd.getElementsByTagName('a')[0].textContent;
	let url = nametd.getElementsByTagName('a')[0].href;
	let titletd = rows[i].cells[1];
	let title = titletd.textContent;
	let companytd = rows[i].cells[2];
	let company = companytd.textContent;
	arr[i] = name+'\t'+url+'\t'+title+'\t'+company;
	strings += arr[i]+'\r\n';
}
console.log(strings);
var pom = document.createElement('a');
var csvContent=strings;
var blob = new Blob([csvContent],{type: 'text/tsv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'recruitingworklist.tsv');
pom.click();
}
RecruitingWorkList()
