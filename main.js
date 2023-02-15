// Add Class Active to Links at Nav-Links
let navLinks = document.querySelector(".nav-links")
navLinks.addEventListener("click", (e) => {
    let links = e.target.parentElement;
    if (links.classList.contains("link")) {
        navLinks.querySelector(".active").classList.remove("active")
        links.classList.add("active")
    }
})

// Add Class Active to the Links Before the Link
let forYou = document.querySelector(".for-you")
let following = document.querySelector(".following")

forYou.addEventListener('click', (e) => {
    forYou.classList.add('active');
    following.classList.remove('active');
});

following.addEventListener('click', (e) => {
    following.classList.add('active');
    forYou.classList.remove('active');
});