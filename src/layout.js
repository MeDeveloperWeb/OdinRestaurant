import htmlEl from "./utils/render";
import setRoute from "./utils/router";
import svg from "./svg";

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
    return htmlEl({
        tag: "nav",
        classList: ["main-nav"],
        children: [htmlEl({
                    tag: "ul",
                    children: [
                        navEl("home"),
                        navEl("recipe"),
                        navEl("contact")
                    ]
                })]
    });
}

function navEl(route) {
    const li = htmlEl({
        tag: "li",
        children: [svg[route]()],
        props: {
            "data-href": route,
        }
    });

    li.addEventListener("click", () => setRoute(li.dataset.href));

    return li;
}