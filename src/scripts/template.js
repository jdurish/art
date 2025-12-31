
const header = document.querySelector("header");

const nav = document.createElement("nav");
header.appendChild(nav);

const fileNameOf = (doc) => doc.toLowerCase().replace(" ", "-");

const docs = [
    "Drawings",
    "Digital Art",
    "Miniatures",
    "Smithing",
    "About",
    "Contact",
];

const homeAnchor = document.createElement("a");
nav.appendChild(homeAnchor);

homeAnchor.href = `/`;
homeAnchor.innerText = "Home";

for (const doc of docs) {
    const anchor = document.createElement("a");
    nav.appendChild(anchor);

    anchor.href = `/${fileNameOf(doc)}`;
    anchor.innerText = doc;
}