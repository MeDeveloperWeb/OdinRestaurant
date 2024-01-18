import htmlEl from "../utils/render";
import stew from "../media/narcistic-stew.png";
import omelette from "../media/omelette.png";
import pie from "../media/procras-pie.jpeg";

const resources = {
    "Procrastination Pie": {
        image: pie,
        link: "https://medeveloperweb.github.io/OdinRecipe/recipes/pro-pie.html"
    },
    "Self-Reflection Savory Stew": {
        image: stew,
        link: "https://medeveloperweb.github.io/OdinRecipe/recipes/savory-stew.html"
    },
    "Traffic Jam Omelette": {
        image: omelette,
        link: "https://medeveloperweb.github.io/OdinRecipe/recipes/traffic-omelette.html"
    }
};



export default function recipes () {
    const recipes = htmlEl({
        tag: "div",
        children: [
            recipeEl("Procrastination Pie"),
            recipeEl("Self-Reflection Savory Stew"),
            recipeEl("Traffic Jam Omelette")
        ]
    });

    return htmlEl({
        tag: "div",
        id: "recipe",
        children: [recipes]
    })
}

function recipeEl (name) {
    const anchor = htmlEl({
        tag: "a",
        props: {
            href: resources[name].link,
            target: "_blank"
        },
        children: [
            recipeImage(name),
            htmlEl({
                tag: "span",
                text: name
            })
        ]
    });

    return htmlEl({
        tag: "div",
        classList: ["recipe"],
        children: [anchor]
    })
}

function recipeImage (name) {
    return htmlEl({
        tag: "img",
        classList: ["recipe-img"],
        props: {
            src: resources[name].image,
            alt: name,
            width: "100%"
        }
    })
}