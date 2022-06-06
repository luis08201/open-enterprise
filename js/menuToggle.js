let menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    let nav = document.getElementById("nav");
    nav.classList.toggle("active");
})