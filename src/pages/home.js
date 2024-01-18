import htmlEl from "../utils/render"
import whyUs from "../media/whyUs.txt"

export default function home() {
    const ques = htmlEl({
        tag: "div",
        classList: ["why"],
        children: [
            htmlEl({
                tag: "span",
                text: "Why Us"
            }),
            htmlEl({
                tag: "span",
                text: "?"
            })
        ]
    })

    const ans = htmlEl({
        tag: "div",
        classList: ["desc"],
        text: whyUs
    })

    const desc = htmlEl({
        tag: "div",
        classList: ["desc-cont"],
        children: [ques, ans]
    })

    const home = htmlEl({
        tag: "div",
        children: [
            desc
        ]
    });

    return htmlEl({
        tag: "div",
        id: "home",
        children: [
            home
        ]
    });
}