window.onscroll = function () { 
    let navBarTop = window.pageYOffset || document.documentElement.scrollTop, navBar = document.querySelectorAll('.navbar')[0],  topBar = document.querySelectorAll('.topbar')[0];
    if (navBarTop >= navBar.clientHeight + topBar.clientHeight + 50) {
        navBar.classList.add('navbar--fixed');
    } else if (navBarTop < navBar.clientHeight + topBar.clientHeight + 50) {
        navBar.classList.remove('navbar--fixed');
    }
}