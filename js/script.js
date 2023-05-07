const navbarMenu = document.querySelector('.navbar-container');

function navbarLinkClick(event) {
    if (navbarMenu.classList.contains('slide')) {
        menuToggle.click();
    }
};

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.profil').offset().top - 280) {
        $('.profil .card').each(function(i) {
            setTimeout(function() {
                $('.profil .card').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
});