// AOS JS
AOS.init();
AOS.init({
    duration: 1000,
})

// PreLoader
document.querySelector('body').onload = function() {
    document.querySelector('.loading').style.display = 'none';
}

// CouterUp
$(document).ready(function() {
    $("counter").counterUp({
        delay: 10,
        time: 1500,
    })
});
