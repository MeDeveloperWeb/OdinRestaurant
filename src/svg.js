import htmlEl from "./utils/render";

function home(size="24") {
    /**
     *  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
     */
    return htmlEl({
        tag: "svg",
        children: [
            htmlEl({
                tag: "path",
                props: {
                    d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                },
                svg: true
            }),
            htmlEl({
                tag: "polyline",
                props: {
                    points:"9 22 9 12 15 12 15 22"
                },
                svg: true
            })
        ],
        props: {
            viewBox: `0 0 24 24`,
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round",
            width: size,
            height: size,
            fill:"none",
            stroke:"currentColor"
        },
        svg: true
    })
}

function contact(size="24") {
    /**
     * <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     *  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
     *  <circle cx="12" cy="10" r="3"></circle>
     * </svg>
     */
    return htmlEl({
        tag: "svg",
        children: [
            htmlEl({
                tag: "path",
                props: {
                    d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                },
                svg: true
            }),
            htmlEl({
                tag: "circle",
                props: {
                    cx:"12",
                    cy:"10",
                    r:"3"
                },
                svg: true
            })
        ],
        props: {
            viewBox: `0 0 24 24`,
            "stroke-width":"2",
            "stroke-linecap":"round",
            "stroke-linejoin":"round",
            width: size,
            height: size,
            fill:"none",
            stroke:"currentColor"
        },
        svg: true
    })
}

function recipe(size="24") {
    /**
     * <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
        </svg>
     */
    return htmlEl({
        tag: "svg",
        children: [
            htmlEl({
                tag: "title",
                text: "Recipe"
            }),
            htmlEl({
                tag: "path",
                props: {
                    d:"M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z",
                    fill: "currentColor"
                },
                svg: true

            })
        ],
        props: {
            viewBox: "0 0 448 512",
            width: size,
            height: size,
        },
        svg: true
    })
}

export default {home, contact, recipe};