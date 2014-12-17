(function() {

	var openMenu = document.querySelectorAll(".js-menu-open");
	var mobileMenu = document.querySelectorAll(".mobile-menu");
	var header = document.querySelectorAll(".page-header__logo");

	openMenu[0].addEventListener("click", function(event){
		if ((getComputedStyle(mobileMenu[0]).display) === "none") {
			mobileMenu[0].style.display = "block";
			header[0].style.backgroundColor = "#283645";
			header[0].style.borderBottom = "1px solid #000";
		}
		else {
			mobileMenu[0].style.display = "none";
			header[0].style.backgroundColor = "rgba(0,0,0,.3)";
			header[0].style.borderBottom = "none";
		}
	})
	
})();