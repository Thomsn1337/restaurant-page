export default function home() {
    const content = document.createElement("div");
    content.classList.add("content");

    content.innerHTML = `
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
            <p>
                Vestibulum pharetra maximus nibh sit amet interdum. Donec vel
                dignissim massa, vitae pulvinar ante. In ultricies ultricies
                porttitor. Mauris diam tortor, ultricies ac tristique vel, bibendum eu
                quam. Etiam auctor, risus nec egestas eleifend, augue augue imperdiet
                justo, id ultrices arcu tortor quis lorem. Nunc porttitor vestibulum
                varius. Mauris semper enim metus, id malesuada ante faucibus sit amet.
                Nunc mollis ligula tellus, at egestas ex consectetur nec. Aliquam
                pretium accumsan tellus, vel varius tortor ultrices a. Mauris non
                egestas nibh. Ut scelerisque, nibh ac sollicitudin pretium, turpis
                nunc pharetra eros, nec ultricies quam lorem et est. Integer a luctus
                magna.
            </p>
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
            <p>
                Integer semper bibendum est. Vestibulum a dapibus arcu. Quisque ac
                malesuada lectus, ut varius leo. Donec finibus lorem euismod,
                ullamcorper nisi bibendum, euismod metus. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae; Donec at
                risus velit. Cras id neque ut dolor tincidunt dignissim. Donec vitae
                lacus sed felis pellentesque dignissim.
            </p>
        `;

    return content;
}
