//profil

let profil = document.querySelector(".navigator li:nth-child(1)"); 
let vacancies = document.querySelector(".navigator li:nth-child(4)"); 

vacancies.addEventListener("click", switching);
profil.addEventListener("click", switching2);

function switching() {
	let vac = document.getElementById("block4").style.display = "block";
	let pro = document.getElementById("block1").style.display = "none";
	let navProf = document.querySelector(".navigator li:nth-child(1)").classList.remove('highlight');
	let navVac = document.querySelector(".navigator li:nth-child(4)").classList.add('highlight');
	
	
}

function switching2() {
	let pro = document.getElementById("block1").style.display = "block";
	let vac = document.getElementById("block4").style.display = "none";
	let navProf = document.querySelector(".navigator li:nth-child(4)").classList.remove('highlight');
	let navVac = document.querySelector(".navigator li:nth-child(1)").classList.add('highlight');
}


