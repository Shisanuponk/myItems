import { createContext } from "react"

export const Themes = {
    light: {

        background: "#F0F2F5",
        color: "#6C6D71",
        colorhighlight: "#050505",
        // Highlight
        colorheadhighlight: "#050505",
        borderhighlight: "#D4D6D9",
        shadowhighlight: "#DEDFE0",
        

        // Nav
        navcolor: "#FFFFFF",
        navshadow: "#DEDFE0",
        navborder: "#D4D6D9",

        // icons
        iconcart: "icons8-shopping-cart-dark.png",
        iconheart: "icons8-heart-dark.png",
        iconhamberger: "icons8-squared-menu-dark.png",
        iconfacebook: "icons8-facebook.png",
        icongoogle: "icons8-google.png",
        icontwitter: "icons8-line.png",
        iconline: "icons8-twitter.png",

        // Content
        contentbackground: "#0d1117",
        contentborder: "#2b3138",

    },
    dark: {

        background: "#010409",
        color: "#7e929e",
        colorhighlight: "#C9D1D9",
        // Highlight
        colorheadhighlight: "#EFF2DC",
        borderhighlight: "#FFFFFF",
        shadowhighlight: "#FFFFFF",
        

        // Nav
        navcolor: "#161B22",
        navshadow: "#0D1117",
        navborder: "#2b3138",

        // icons
        iconcart: "icons8-shopping-cart-light.png",
        iconheart: "icons8-heart-light.png",
        iconhamberger: "icons8-squared-menu-light.png",
        iconfacebook: "icons8-facebook.png",
        icongoogle: "icons8-google.png",
        icontwitter: "icons8-line.png",
        iconline: "icons8-twitter.png",

        // Content
        contentbackground: "#0d1117",
        contentborder: "#2b3138",

    }
}

const ThemeContext = createContext(Themes.dark);
export default ThemeContext