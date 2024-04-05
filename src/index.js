import home from "./components/home";
import "./style.css";

const contentMain = document.querySelector("main");

function loadHome() {
    clearMain();
    contentMain.appendChild(home());
}

function clearMain() {
    while (contentMain.firstChild) {
        contentMain.removeChild(contentMain.firstChild);
    }
}

document
    .querySelector("#home-button")
    .addEventListener("click", () => loadHome());

document
    .querySelector("#menu-button")
    .addEventListener("click", () => clearMain());

document
    .querySelector("#about-button")
    .addEventListener("click", () => clearMain());

window.addEventListener("load", () => loadHome());
