import { createContext } from "react"

export const Themes = {
    light: {

        background: "#FFFFFF",
        colorhighlight: "#121212",
        borderhighlight: "#121212",
        shadowhighlight: "#121212",

        // Nav
        navcolor: "#FFFFFF",
        navshadow: "#B3B3B3",
        navborder: "#FFFFFF",
        fontcolor: "#404040",

        // icons
        backgroundicon: "#B3B3B3",
        iconcart: "icons8-shopping-cart-dark.png",
        iconheart: "icons8-heart-dark.png",
        iconhamberger: "icons8-squared-menu-dark.png",

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
        fontcolor: "#C9D1D9",

        // icons
        iconcart: "icons8-shopping-cart-light.png",
        iconheart: "icons8-heart-light.png",
        iconhamberger: "icons8-squared-menu-light.png",

        // Content
        contentbackground: "#0d1117",
        contentborder: "#2b3138",

    }
}

const ThemeContext = createContext(Themes.dark);
export default ThemeContext