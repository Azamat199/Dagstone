$(document).ready(function() {
$('.header__burger').click(function(event){
	$('.header__burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});
$('.about-interactive__click').click(function(){
	$('.about-interactive__text').toggle();
	$('.about-interactive__click').toggleClass('interactive__click');
	
});
$('.about-interactive__click-1').click(function(){
	$('.about-interactive__text-1').toggle();
	$('.about-interactive__click-1').toggleClass('interactive__click');
});
$('.about-interactive__click-2').click(function(){
	$('.about-interactive__text-2').toggle();
	$('.about-interactive__click-2').toggleClass('interactive__click');
});
$('.fa-magnifying-glass').click(function(){
	$('search__input').toggle();
	
});
$('.fa-magnifying-glass').click(function(){
	$('.search__input').toggleClass('search-block');
	$('.magnifying-glass-closed').toggleClass('magnifying-glass-open');
});
});


// Scroll
window.addEventListener('scroll', e => {
	let header = document.getElementById('header').classList;
	let active_class = "header__scrolled";

	if(pageYOffset > 500) header.add(active_class)
	else header.remove(active_class)
 })

