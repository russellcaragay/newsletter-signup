
//Initializing Variables
var hours = new Date().getHours(); //For getting the hours
//Document Queries
var slider= document.querySelector("#themeSlider");
var theme = document.querySelector("body");

//Changing the theme based on time
if (hours >= 6 && hours <= 18){
    theme.setAttribute("data-bs-theme","light");
    document.querySelector("#themeSlider").checked = false;
} else {
    theme.setAttribute("data-bs-theme","dark");
    document.querySelector("#themeSlider").checked = true;
};

// Event Listener
slider.addEventListener('change', function() {
    if (this.checked) {
        theme.setAttribute("data-bs-theme","dark");
    } else {
        theme.setAttribute("data-bs-theme","light");
    }
});



