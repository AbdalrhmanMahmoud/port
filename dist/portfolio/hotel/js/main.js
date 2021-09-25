let header = document.querySelector(".header");
let mobMenu = document.querySelector(".mob-menu");

window.addEventListener("scroll", function () {
    let windoPosition = window.scrollY > 0;
    header.classList.toggle("active", windoPosition)
    console.log(windoPosition)
})
mobMenu.addEventListener("click", function(){
    header.classList.toggle("open");
    console.log("o1")
})