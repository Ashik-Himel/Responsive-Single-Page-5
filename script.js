// Nav Hide
const navLink = document.querySelectorAll('.nav-item')
function linkAction(){
    const navMenu = document.getElementById('navbarSupportedContent')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// PreLoader
document.querySelector('body').onload = function() {
    document.querySelector('.loading').style.display = 'none';
}
// AOS JS
AOS.init({
    duration: 1000
})
// CounterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// Isotope
$('.tab-content').isotope({
    itemSelector: '.tab-item',
    masonry: {}
});
$('.tab-titles span').click(function(){
    $('.tab-titles span').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.tab-content').isotope({
        filter:selector
    });
    return false;
});