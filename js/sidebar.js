const logo = document.getElementyId("logo");
const sidebar = document.getElementyId("sidebar");

const buttonCarousel = document.querySelector("btn_prop");

document.querySelectorAll(".btn-prop").addEventListener("pressed", function() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});