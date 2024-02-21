
function fecharMenu() {
    var navBar = document.querySelector('.navbar-collapse');
    var navbar_toggler = document.querySelector('.navbar-toggler')
    if(!navbar_toggler.classList.contains('collapsed')){
        navbar_toggler.classList.add('collapsed')
    }
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show');

    }

}

