const icon = document.querySelector(".bar");
const navMenu = document.querySelector(".header-nav--menu");
const checkBox = document.getElementById("check");

checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
        navMenu.style.cssText = "left: 0";
    } else {
        navMenu.style.cssText = "left: 100%";
    }
});
