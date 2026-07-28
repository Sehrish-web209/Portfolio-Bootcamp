// DARK MODE

const darkBtn = document.getElementById("darkBtn");
const body = document.body;

darkBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode(){

    body.classList.toggle("dark-mode");

   if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

}
const images = [
    "images/slider1.jpeg",
    "images/slider2.jpeg",
    "images/slider3.jpeg"
];

let currentImage = 0;
const sliderImage = document.getElementById("sliderImage");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function () {
    currentImage++;
    if(currentImage >= images.length){
        currentImage = 0;
    }
    sliderImage.src = images[currentImage];
});

prevBtn.addEventListener("click", function(){
    currentImage--;
    if(currentImage < 0){

        currentImage = images.length - 1;

    }
    sliderImage.src = images[currentImage];
});