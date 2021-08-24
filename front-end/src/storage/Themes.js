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
        iconcart: "icons8-shopping-cart-dark.png",
        iconheart: "icons8-heart-dark.png",
        navbtnlogin: "",

    },
    dark: {

        background: "#404040",
        colorhighlight: "#FFFFFF",
        borderhighlight: "#FFFFFF",
        shadowhighlight: "#FFFFFF",

        // Nav
        navcolor: "#181818",
        navshadow: "#282828",
        navborder: "#FFFFFF",
        fontcolor: "#B3B3B3",

        // icons
        iconcart: "icons8-shopping-cart-light.png",
        iconheart: "icons8-heart-light.png",
        navbtnlogin: "",

    }
}

const ThemeContext = createContext(Themes.dark);
export default ThemeContext