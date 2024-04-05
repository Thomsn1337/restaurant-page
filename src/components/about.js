export default function about() {
    const content = document.createElement("div");
    content.classList.add("content");

    content.innerHTML = `
            <h2>This is not a real page</h2>
            <p>
                The purpose of this page is to learn how to use Webpack and ES6
                modules to create webpages and how to load content dynamically by
                using JavaScript.
            </p>
            <p>
                This page was created as a part of the Odin Project curriculum in
                2024. It's part of the advanced JavaScript course.
            </p>
            <p>
                Credits go to
                <a href="https://unsplash.com/@ninjason">Jason Leung on Unsplash</a>
                for the background image.
            </p>
        `;

    return content;
}
