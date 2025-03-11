// JavaScript for the main page

const menuButton = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

function toggleMenu() {
    navLinks.classList.toggle("hide");
    console.log("toggled succesfully");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove("hide");
        console.log("hide removed");
    } else {
        navLinks.classList.add("hide");
        console.log("hide added");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

// modal viewer functions and queries
function viewerTemplate(pic, alt) {
    console.log("img viewer html returned");
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.src.replace("-sm", "-full");
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, event.target.alt));
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        console.log("img viewer injected");
    }
    console.log("gallery clickes but no html injected");
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
