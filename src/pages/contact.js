import htmlEl from "../utils/render"
import contactUs from "../media/contactUs.txt"
import svg from "../svg"

export default function contact() {
    const img = htmlEl({
        tag: "div",
        classList: ["title"],
        children: [svg["contact"](6*32)]
    })

    const content = htmlEl({
        tag: "div",
        classList: ["desc"],
        text: contactUs
    })

    const desc = htmlEl({
        tag: "div",
        classList: ["desc-cont"],
        children: [img, content]
    })

    const contact = htmlEl({
        tag: "div",
        children: [
            desc
        ]
    });

    return htmlEl({
        tag: "div",
        id: "contact",
        children: [
            contact
        ]
    });
}