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