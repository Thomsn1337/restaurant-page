export default function home() {
    const content = document.createElement("div");
    content.classList.add("content");

    content.innerHTML = `
            <h2>
                Morbi imperdiet diam eu justo tempor hendrerit
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi
                a mauris auctor tempor. Donec non lorem nec elit vulputate volutpat.
                Cras semper dignissim dignissim. Nam tempor, nibh sed mattis congue,
                dolor metus facilisis elit, eu dictum dolor erat id ligula. Ut tempus
                diam quis magna rutrum molestie. Donec quis tortor in nisi varius
                malesuada vel et urna. Ut semper ante at ornare auctor. Sed vel
                euismod enim, a volutpat purus. Vestibulum sit amet arcu ut neque
                consectetur laoreet vitae ac erat. Donec pharetra ut mauris sit amet
                placerat. Mauris dictum rutrum mollis.
            </p>
            <h2>
                Aenean laoreet felis erat, eget malesuada justo congue
            </h2>
            <p>
                Vestibulum at ante ultrices, interdum ipsum pellentesque, scelerisque
                ex. Sed vel sagittis leo, eu egestas ante. Quisque efficitur pharetra
                velit. Fusce euismod iaculis tempor. Sed lobortis odio massa, ut
                ultricies eros egestas at. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Suspendisse ullamcorper erat et dui bibendum scelerisque. Nam
                purus nisl, iaculis a orci scelerisque, elementum pellentesque tellus.
                Suspendisse accumsan viverra est vitae lacinia. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Cras eget ullamcorper nunc.
                Nulla et mollis justo. Vivamus et tortor metus.
            </p>
        `;

    return content;
}
