
const darkBtn = document.getElementById("darkBtn");
const body = document.body;

const toggleDarkMode = () => {

    body.classList.toggle("dark-mode");

   if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

};
if(darkBtn){
    darkBtn.addEventListener("click", toggleDarkMode);
}
const portfolio = {
    owner: "Sehrish Maqbool",
    role: "BSIT Student",
    university: "University"
};

console.log(portfolio.owner);
const images = [
    "images/Slider1.jpeg",
    "images/Slider2.jpeg",
    "images/Slider3.jpeg"
];
for(let i = 0; i < images.length; i++){
    console.log(images[i]);
}

let currentImage = 0;
const sliderImage = document.getElementById("sliderImage");
if(sliderImage){
    sliderImage.style.transition = "0.4s ease";
}
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
        let isValid = true;
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
            

        if(fullName === ""){
            nameError.textContent = "❌ Full Name is required.";
            nameError.className = "error-message";
            isValid = false;
        }
        else if(fullName.length < 3){
            nameError.textContent = "❌ Name must be at least 3 characters.";
            nameError.className = "error-message";
            isValid = false;
        }
        else{
            nameError.textContent = "✅ Looks good!";
            nameError.className = "success-message";
        }

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       
        if(email === ""){
            emailError.textContent = "❌ Email is required.";
            emailError.className = "error-message";
            isValid = false;
        }
        else if(!emailPattern.test(email)){
            emailError.textContent = "❌ Invalid Email.";
            emailError.className = "error-message";
            isValid = false;
        }
        else{
            emailError.textContent = "✅ Valid Email.";
            emailError.className = "success-message";
        }
        console.log(isValid);
        if(!isValid){
            event.preventDefault();
        }
    });
}