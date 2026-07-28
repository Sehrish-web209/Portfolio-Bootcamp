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

    if(sliderImage && nextBtn && prevBtn){
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
}
// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
            
        if(fullName === ""){
            nameError.textContent = "❌ Full Name is required.";
            nameError.className = "error-message";
        }
        
        else if(fullName.length < 3){
            nameError.textContent = "❌ Name must be at least 3 characters.";
            nameError.className = "error-message";
        }

        else{
            nameError.textContent = "✅ Looks good!";
            nameError.className = "success-message";
        }

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email === ""){
            emailError.textContent = "❌ Email is required.";
            emailError.className = "error-message";
        }
        else if(emailPattern.test(email)){
            emailError.textContent = "✅ Valid Email.";
            emailError.className = "success-message";
        }
        else{

            emailError.textContent = "❌ Invalid Email.";
            emailError.className = "error-message";

        }
    });
}