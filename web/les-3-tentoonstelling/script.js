const myImage = document.getElementById('myImage')
const myTitle = document.getElementById('myTitle')
let paintings = [
    "assets/painting0.jpg",
    "assets/painting1.jpg",
    "assets/painting2.jpg",
    "assets/painting3.jpg",
    "assets/painting4.jpg",
    "assets/painting5.jpg",
]
let titles = [
    "De schrilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen", 
    "Boerderij in de Provence"
]

function changeImage(index){
    myImage.src = paintings[index];
    myTitle.innerHTML = titles[index];
}
