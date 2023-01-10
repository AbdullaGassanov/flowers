"use strict";

let indicator = true;
const backGround = document.querySelector("#hiding");

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		backGround.classList.remove("showBackground");
		document.body.style.overflow = "auto";
	}, 2000);
});
