import htmlEl from "./render";
import showSection from "./router";
import { home, map, recipe } from "./svg";

export function header () {
    const logo = htmlEl({tag:'h1', text:"Heavenly Restaurant", classList:["logo"]});
    
    return htmlEl({
        tag: "header",
        children: [
            logo,
            nav()
        ]
    })
}


export function footer () {
    return htmlEl({
        tag: "footer",
        text: "© Copyright Heavenly Restaurant",
    })
}

function nav () {
    const liEl = [
        htmlEl({
            tag: "li",
            children: [home()],
            props: {
                "data-href": "home",
            }
        }),
        htmlEl({
            tag: "li",
            children: [recipe()],
            props: {
                "data-href": "menu",
            }
        }),
        htmlEl({
            tag: "li",
            children: [map()],
            props: {
                "data-href": "contact",
            }
        })
    ];
    for (let li of liEl) {
        li.addEventListener('click', () => showSection(li.dataset.href));
    }
    return htmlEl({
        tag: "nav",
        classList: ["main-nav"],
        children: [
            htmlEl(
                {
                    tag: "ul",
                    children: liEl
                }
            )
        ]
    });
}