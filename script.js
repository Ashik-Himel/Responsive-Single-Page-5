// AOS JS
AOS.init({
    duration: 1000
})

// PreLoader
document.querySelector('body').onload = function() {
    document.querySelector('.loading').style.display = 'none';
}

// CouterUp
$('.counter').counterUp({
    delay: 500,
    time: 1500
});
