import home from "./components/home";
import menu from "./components/menu";
import "./style.css";

const contentMain = document.querySelector("main");

function loadHome() {
    clearMain();
    contentMain.appendChild(home());
}

function loadMenu() {
    clearMain();
    contentMain.appendChild(menu());
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
    .addEventListener("click", () => loadMenu());

document
    .querySelector("#about-button")
    .addEventListener("click", () => clearMain());

window.addEventListener("load", () => loadHome());
