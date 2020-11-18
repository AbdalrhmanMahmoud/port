// alert("fuck you");
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