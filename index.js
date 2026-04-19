function showSection(section) {

    // hide all sections
    document.getElementById("skill-info").style.display = "none";
    document.getElementById("experience-info").style.display = "none";
    document.getElementById("education-info").style.display = "none";

    // show selected section
    if (section === "skills") {
        document.getElementById("skill-info").style.display = "block";
    }

    if (section === "experience") {
        document.getElementById("experience-info").style.display = "block";
    }

    if (section === "education") {
        document.getElementById("education-info").style.display = "block";
    }
}

    function changeSlide(button, direction){
        // find the slider container
    let slider = button.parentElement;
    let slides = slider.querySelectorAll(".slide");

    let currentIndex = 0;

        // find current active slide
    slides.forEach((slide, index) => {
        if(slide.classList.contains("active")){
            currentIndex = index;
            slide.classList.remove("active");
        }
    });

        // calculate next index
    let nextIndex = currentIndex + direction;

    if(nextIndex < 0){
        nextIndex = slides.length - 1;
    }

    if(nextIndex >= slides.length){
        nextIndex = 0;
    }

    slides[nextIndex].classList.add("active");
}