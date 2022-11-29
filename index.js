const imgs = document.getElementsByTagName("img")

function generateRandomFloatInRange(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min)
}

function hideAll(){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].hidden = true
    }
}


function changeImage(){
    hideAll()

    imgs[generateRandomFloatInRange(0, imgs.length-2)].hidden = true
    console.log("Hello world")
}

changeImage()