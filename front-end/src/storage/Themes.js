import { createContext } from "react"

export const Themes = {
    light: {

        background: "#404040",
        colorhighlight: "#121212",
        borderhighlight: "#181818",
        shadowhighlight: "#121212",

        // Nav
        navcolor: "#FFFFFF",
        navshadow: "#B3B3B3",
        navborder: "#FFFFFF",
        fontcolor: "#181818",

        // icons
        iconcart: "icons8-shopping-cart-dark.png",
        iconheart: "icons8-heart-dark.png",
        navbtnlogin: "",

        // Footer
        footerbackground: "#232323",
        footerfontcolor: "#FFFFFF",
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

        // Footer
        footerbackground: "#232323",
        footerfontcolor: "#FFFFFF",
    }
}

const ThemeContext = createContext(Themes.dark);
export default ThemeContext