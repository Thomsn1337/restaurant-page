export default function menuItem() {
    const container = document.createElement("div");
    container.classList.add("container");

    const image = document.createElement("div");
    image.classList.add("image");
    image.innerText = "Coming soon";
    container.appendChild(image);

    const paragraph = document.createElement("p");
    paragraph.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in convallis ligula. Sed sed leo pretium, venenatis nisi in, suscipit eros. Pellentesque facilisis libero mauris. Nullam a facilisis ipsum. Curabitur.";
    container.appendChild(paragraph);

    return container;
}
