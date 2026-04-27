// your code here
const name=document.getElementById("name")
const year=document.getElementById("year")
const submt=document.getElementById("button")
const url=document.getElementById("url")

submt.addEventListener('click', function() {
	const name_n=name.value
	const year_n=year.value
	let new_url=`https://localhost:8080/?name=${name_n}`
	if(year_n!=""){
		new_url+=`&year=${year_n}`
	}
	url.innerText=new_url;
})