export default function showSection (section) {
    hideAll(section);
    const currSection = document.querySelector(`#${section}`);
    currSection.style.visibility = "visible";
    currSection.style.maxHeight = "initial";
}

function hideAll (section) {
    const els = document.querySelector(`#${section}`).parentElement.children;

    for (let el of els) {
        el.style.visibility = "hidden";
        el.style.maxHeight = 0;
    }
}