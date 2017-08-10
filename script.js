"use strict";
function myBurger() {
	var x = document.getElementById("myTopnav");
	var mytitle = document.getElementById("myTitle");
	if (x.className === "topnav") {
		x.className += " responsive";
		mytitle.style.visibility = 'visible'
	} else {
		x.className = "topnav";
		mytitle.style.visibility = "hidden"
	}
}

window.onscroll = function(){myScroll()};

function myScroll() {
	var x = document.getElementById('myAside').clientHeight;
	var y = document.getElementById("myTitle");
	
	if (document.body.scrollTop > x) {
		y.style.visibility = 'visible'
	} else {
		y.style.visibility = 'hidden'
	}
}