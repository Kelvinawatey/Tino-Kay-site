// Booking Form

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for your booking request. Mizter_Awatey will contact you soon."
);

this.reset();

});


// Animated Counters

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});


// Scroll Animation

window.addEventListener("scroll", reveal);

function reveal(){

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach(section=>{

const windowHeight =
window.innerHeight;

const revealTop =
section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

section.classList.add("active");

}

});

}

reveal();