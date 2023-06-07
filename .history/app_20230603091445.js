const lightMode = document.querySelector(".light-mode");
const header = document.querySelector(".header");
const headerCircle = document.querySelector(".header-circle");
const allLightMode = document.querySelectorAll(".all-light-mode");
const allLightMode2 = document.querySelectorAll(".all-light-mode-2");
const title = document.querySelectorAll(".title");
const desc = document.querySelectorAll(".desc");
console.log(allLightMode);
lightMode.addEventListener("click", function (e) {
    lightMode.classList.toggle("fa-moon");
    lightMode.classList.toggle("fa-sun");
    header.classList.toggle("bgl");
    header.classList.toggle("bgd");
    headerCircle.classList.toggle("header-circle-light");
    headerCircle.classList.toggle("header-circle-dark");
    allLightMode.forEach(function (item) {
        item.classList.toggle("all-light-mode");
        item.classList.toggle("all-dark-mode");
    });
    allLightMode2.forEach(function (item) {
        item.classList.toggle("all-light-mode-2");
        item.classList.toggle("all-dark-mode-2");
    });
    title.forEach(function (item) {
        item.classList.toggle("title");
        item.classList.toggle("title-dark");
    });
    desc.forEach(function (item) {
        item.classList.toggle("desc");
        item.classList.toggle("desc-dark");
    });
});
// menu
const sections = document.querySelectorAll(".section");
const headerNav = document.querySelectorAll(".header__nav-item");
headerNav.forEach(function (item) {
    item.addEventListener("click", function (e) {
        headerNav.forEach((i) =>
            i.classList.remove("header__nav-item--active")
        );
        e.target.classList.add("header__nav-item--active");
        sections.forEach(function (item) {
            if (
                item.getAttribute("data-Scroll") ===
                e.target.getAttribute("data-NavScroll")
            ) {
                let scrollNav = item.offsetTop;
                window.scrollTo(0, scrollNav);
            }
        });
    });
});

// name
let myName = document.querySelector(".myName").textContent;
let index = 0;
setInterval(displayName, 500);
function displayName() {
    let newMyName = myName.slice(0, index);
    index++;
    document.querySelector(".myName").textContent = newMyName;
    if (index > myName.length) {
        index = 0;
    }
}

const tabProject = document.querySelectorAll(".Projects__menu__item");
const Projects = document.querySelectorAll(".Project__item-wrap");
tabProject.forEach(function (item) {
    item.addEventListener("click", function (e) {
        tabProject.forEach((item) =>
            item.classList.remove("Projects__menu__item--active")
        );
        item.classList.add("Projects__menu__item--active");
        Projects.forEach(function (item) {
            item.classList.remove("Project__item__-wrap--active");
            if (
                item.getAttribute("data-project") ===
                e.target.getAttribute("data-tabProject")
            ) {
                item.classList.add("Project__item__-wrap--active");
            }
        });
    });
});
// social
const socialShow = document.querySelector(".social__more--show");
const socialItem = document.querySelector(".social__items--hidden");
socialShow.addEventListener("click", function (e) {
    e.target.classList.toggle("social__more--hidden");
    socialItem.classList.toggle("social__items--show");
});
const body = document.body;
body.addEventListener("click", function (e) {
    console.log(e.target);
    if (
        !e.target.matches(".social__more--show") &&
        !e.target.matches(".socical__link") &&
        !e.target.matches(".bx") &&
        !e.target.matches(".social__items--show")
    ) {
        socialItem.classList.remove("social__items--show");
        socialShow.classList.remove("social__more--hidden");
    }
});
//auto scroll active
sections.forEach(function (item) {
    let { top } = item.getBoundingClientRect();
    let dataScroll = item.getAttribute("data-Scroll");
    window.addEventListener("scroll", function (e) {
        if (window.scrollY > top + this.screenY / 2) {
            headerNav.forEach((i) =>
                i.classList.remove("header__nav-item--active")
            );
            headerNav.forEach(function (item) {
                if (item.getAttribute("data-NavScroll") === dataScroll) {
                    item.classList.add("header__nav-item--active");
                }
            });
        }
    });
});

const menuShow = document.querySelector(".menu__drawer__show");
const menuWrapList = document.querySelector(".menu__drawer__list-wrap");
const menuList = document.querySelector(".menu__drawer-list");
menuShow.addEventListener("click", function (e) {
    menuShow.classList.add("menu__drawer--active");
    menuWrapList.classList.add("menu__drawer__list-wrap--active");
    menuList.classList.add("menu__drawer-list--active");
});
const menuDrawerItem = document.querySelectorAll(".menu__drawer-item");
menuDrawerItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
        menuDrawerItem.forEach((i) =>
            i.classList.remove("menu__drawer-item--active")
        );
        item.classList.add("menu__drawer-item--active");
        menuShow.classList.remove("menu__drawer--active");
        menuWrapList.classList.remove("menu__drawer__list-wrap--active");
        menuList.classList.remove("menu__drawer-list--active");
        sections.forEach(function (item) {
            if (
                item.getAttribute("data-Scroll") ===
                e.target.getAttribute("data-MenuScroll")
            ) {
                let scrollNav = item.offsetTop;
                window.scrollTo(0, scrollNav);
            }
        });
    });
});

menuWrapList.addEventListener("click", function (e) {
    console.log(e.target);
    if (
        e.target.matches(".menu__drawer__close") ||
        e.target.matches(".menu__drawer__cover")
    ) {
        menuShow.classList.remove("menu__drawer--active");
        menuWrapList.classList.remove("menu__drawer__list-wrap--active");
        menuList.classList.remove("menu__drawer-list--active");
    }
});
