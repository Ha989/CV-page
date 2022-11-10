
const skills = document.querySelector("#skills");
const education = document.querySelector("#education");
const experience = document.querySelector("#experience");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-link");




function defaultPage() {
    skills.style.display = "block";
    education.style.display ="none";
    experience.style.display ="none";
 }



function showDetail(value) {
   
    if(skills === value && skills.style.display === "none") {
        skills.style.display ="block";
    } else {
        skills.style.display ="none";
    }
    if(education === value && education.style.display === "none") {
        education.style.display ="block"; 
    } 
    else {
        education.style.display ="none";
    }
    if(experience === value && experience.style.display === "none") {
        experience.style.display ="block"; 
    } else {
        experience.style.display ="none";
    }
}


defaultPage();
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});