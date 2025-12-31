
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
    "Contact",
];

const homeAnchor = document.createElement("a");
nav.appendChild(homeAnchor);

homeAnchor.href = "/";
homeAnchor.innerText = "Home";

for (const doc of docs) {
    const anchor = document.createElement("a");
    nav.appendChild(anchor);

    anchor.href = `/${fileNameOf(doc)}`;
    anchor.innerText = doc;
}