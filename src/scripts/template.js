
const pageTag = document.querySelector("meta[data-title]");

const pageTitle = pageTag.dataset.title;

const header = document.querySelector("header");

const logo = document.createElement("a");
header.appendChild(logo);

logo.href = "/";
logo.className = "logo";

const nav = document.createElement("nav");
header.appendChild(nav);

const fileNameOf = (doc) => doc.toLowerCase().replace(" ", "-");

const docs = [
    "2D Art",
    "Minis",
    "Smithing",
    "About",
    "Sales",
    "Contact",
    "Community",
];

const homeAnchor = document.createElement("a");
nav.appendChild(homeAnchor);

homeAnchor.href = "/";
homeAnchor.innerText = "Home";

if (pageTitle === "home") {
    homeAnchor.className = "current-page";
}

for (const doc of docs) {
    const anchor = document.createElement("a");
    nav.appendChild(anchor);

    anchor.href = `/${fileNameOf(doc)}`;
    anchor.innerText = doc;

    if (pageTitle === fileNameOf(doc)) {
        anchor.className = "current-page";
    }
}

const menu = document.createElement("button");
nav.before(menu);

menu.className = "menu";

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.classList.toggle("open");
});

document.body.addEventListener("click", (event) => {
    if (event.target === menu) {
        return;
    }

    nav.classList.remove("open");
    menu.classList.remove("open");
});

const galleryImages = document.querySelectorAll(".gallery img");

for (const image of galleryImages) {
    image.addEventListener("click", (event) => {
        const dialog = document.createElement("dialog");
        document.body.appendChild(dialog);

        dialog.appendChild(image.cloneNode());

        dialog.showModal();

        dialog.addEventListener("close", () => {
            dialog.remove();
        });

        document.addEventListener("click", (innerEvent) => {
            if (innerEvent === event) {
                return;
            }

            dialog.close();
        });
    });
}

const iframes = document.querySelectorAll("iframe");

for (const iframe of iframes) {
    iframe.addEventListener("load", () => {
        iframe.classList.remove("loading");
    });
}