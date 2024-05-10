// JavaScript for full-width slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Previous and next controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// JavaScript for calendar
const openingHours = {
    "Monday": "9:00 AM - 5:00 PM",
    "Tuesday": "9:00 AM - 5:00 PM",
    "Wednesday": "9:00 AM - 5:00 PM",
    "Thursday": "9:00 AM - 5:00 PM",
    "Friday": "9:00 AM - 5:00 PM",
    "Saturday": "10:00 AM - 3:00 PM",
    "Sunday": "Closed"
};

const timesContainer = document.querySelector('.times');

for (let day in openingHours) {
    const timeDiv = document.createElement('div');
    timeDiv.textContent = openingHours[day];
    timesContainer.appendChild(timeDiv);
}



