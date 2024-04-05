import menuItem from "./menu_item";

export default function menu() {
    const content = document.createElement("div");
    content.classList.add("content");

    content.appendChild(menuItem());
    content.appendChild(menuItem());
    content.appendChild(menuItem());

    return content;
}
