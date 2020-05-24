var menuToggle = document.querySelector(".main-nav__menu--opened");
var siteList = document.querySelector(".site-list");
var userList = document.querySelector(".user-list");

siteList.classList.remove('site-list--no-js');
userList.classList.remove('user-list--no-js');

menuToggle.addEventListener("click", function () {
    if (menuToggle.classList.contains('main-nav__menu--opened')) {
      menuToggle.classList.remove('main-nav__menu--opened');
      menuToggle.classList.add('main-nav__menu--closed');
    } else {
      menuToggle.classList.add('main-nav__menu--opened');
      menuToggle.classList.remove('main-nav__menu--closed');
    }

    if (siteList.classList.contains('site-list--closed')) {
      siteList.classList.remove('site-list--closed');
      siteList.classList.add('site-list--opened');
    } else {
      siteList.classList.add('site-list--closed');
      siteList.classList.remove('site-list--opened');
    }

  if (userList.classList.contains('user-list--closed')) {
      userList.classList.remove('user-list--closed');
      userList.classList.add('user-list--opened');
    } else {
      userList.classList.add('user-list--closed');
      userList.classList.remove('user-list--opened');
    }
  });
