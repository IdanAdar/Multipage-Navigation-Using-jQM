function wlCommonInit(){
	$(':mobile-pagecontainer').pagecontainer('change','pages/mainpage.html');
}

function changeToPage1() {
	$(':mobile-pagecontainer').pagecontainer('change','page1.html');
}

function changeToPage2() {
	$(':mobile-pagecontainer').pagecontainer('change','page2.html');
}

function backToMainPage() {
	$(':mobile-pagecontainer').pagecontainer('change','mainpage.html');
}