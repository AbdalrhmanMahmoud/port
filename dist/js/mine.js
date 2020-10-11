let mainColors = localStorage.getItem("color_option")
console.log(mainColors)

if (mainColors !== null) {
// console.log(mainColors)
document.documentElement.style.setProperty('--main-color', mainColors)

    document.querySelectorAll(".color-o li").forEach(element =>{

        element.classList.remove("active");
        if (element.dataset.color === mainColors){
            element.classList.add('active')
            console.log(element)
        }
    })


}
// setting-box
// change fa-gear to span untel we gt conection 
let gear = document.querySelector(" .toggle-setting span");
    gear.onclick = function (){

    // this.classList.toggle('fa-spin');

    document.querySelector(".setting-box").classList.toggle('open');
}
// switch color 
const colorsList = document.querySelectorAll(".color-o li");

colorsList.forEach(li => {
    li.addEventListener("click", (e) =>{
        console.log( e.target.dataset.color)

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color_option",  e.target.dataset.color)

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")

            e.target.classList.add("active")
        })
    })
})


// // select the main page
// let page =document.querySelector(".mainxxx");

// // images arry
// let imageArray = ["01.jpg","02.jpg","03.jpg"];

// // set the time 
// setInterval(() => {
//     // genirate the number 
//     let randomN = Math.floor(Math.random() * imageArray.length);
    
//     page.style.backgroundImage = 'url("imgs/'+imageArray[randomN]+'")';
    
// }, 100000)
// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let myImg =  ['01.jpg', '02.jpg']

// let bgOPtion = true
// function randomImg(){
//     if (bgOPtion = true) {
        
//         setInterval(() => {
//             const bgRandom = document.querySelectorAll(".randowm-bg span");

// bgRandom.forEach(span => {
//     span.addEventListener("click", (e) =>{



//         e.target.parentElement.querySelectorAll(".active").forEach(element => {
//             element.classList.remove("active")
//         })

//             e.target.classList.add("active")
//     })
// })

//         }, 100);
//     }
// }

// // switch bg 
// randomImg()
// 00000000000000000000000000000

// gallery 

let gallery = document.querySelectorAll(".gallery img")
    gallery.forEach(img => {
    img.addEventListener('click', (e) => {

        let overlay = document.createElement("div");
        overlay.className = "overlay-class";
        document.body.appendChild(overlay)

        let popupBox = document.createElement("div");
        popupBox.className = "popupBox";

        let popupImg = document.createElement("img")
        popupImg.src = img.src;

        popupBox.appendChild(popupImg)

        document.body.appendChild(popupBox)

        if (img.alt !== null) {
            let imgHead = document.createElement("h4")
            let imgText = document.createTextNode(img.alt)
            imgHead.appendChild(imgText)
            popupBox.appendChild(imgText)
        }

        let closepop = document.createElement("span")
        let closepopText = document.createTextNode("X")
        closepop.appendChild(closepopText)
        closepop.className = ("closepop")
        popupBox.appendChild(closepop)

    });

});

document.addEventListener('click', (e) => {
    if (e.target.className == "closepop") {
        e.target.parentNode.remove()
    document.querySelector(".overlay-class").remove()
        
    }



})