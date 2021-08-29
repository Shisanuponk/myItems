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

        // Card
        backgroundcard: "#010409",
        colorcard: "#C9D1D9",

        // icons
        iconcart: "icons8-shopping-cart-dark.png",
        iconheart: "icons8-heart-dark.png",
        iconhamberger: "icons8-squared-menu-dark.png",
        iconfacebook: "icons8-facebook.png",
        icongoogle: "icons8-google.png",
        icontwitter: "icons8-line.png",
        iconline: "icons8-twitter.png",
        iconcoin: "icons8-coin-dark.png",
        iconprofile: "icons8-male-user-dark.png",
        iconbill: "icons8-bill-dark.png",
        iconstore: "icons8-store-dark.png",
        iconlogout: "icons8-logout-dark.png",
        iconsearch: "icons8-search-dark.png",
        iconfilter: "icons8-filter-dark.png",

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

        backgroundcard: "#F0F2F5",
        colorcard: "#050505",

        // icons
        iconcart: "icons8-shopping-cart-light.png",
        iconheart: "icons8-heart-light.png",
        iconfacebook: "icons8-facebook.png",
        icongoogle: "icons8-google.png",
        icontwitter: "icons8-line.png",
        iconline: "icons8-twitter.png",
        iconcoin: "icons8-coin-light.png",
        iconprofile: "icons8-male-user-light.png",
        iconbill: "icons8-bill-light.png",
        iconstore: "icons8-store-light.png",
        iconlogout: "icons8-logout-light.png",
        iconsearch: "icons8-search-light.png",
        iconfilter: "icons8-filter-light.png",

        // Content
        contentbackground: "#0d1117",
        contentborder: "#2b3138",

    }
}

const ThemeContext = createContext(Themes.dark);
export default ThemeContext