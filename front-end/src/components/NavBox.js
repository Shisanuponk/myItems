import styled from "styled-components"

// NavBox Style
const NavBox = styled.div`
padding: 0 10px;
height: 55px;
position: sticky;
top: 0;
display: flex;
justify-content: space-between;

${ props => `
background: ${props.theme.navcolor};
border-bottom: 1px solid ${props.theme.navborder};
box-shadow: 0 5px 5px ${props.theme.navshadow};
`
}

.nav-logo{
    margin: 0;
    padding: 10px 20px;
    color: ${props => props.theme.colorheadhighlight};
    display: flex;
    > * {
        margin: 0;
        padding: 0 10px;
    }
}

.nav-items {
    padding: 0px 10px;
    ul{
        margin: 0;
        padding: 10px 0px;
        list-style: none;
        display: flex;

        *{
            text-decoration: none;
        }

        li{
            padding: 10px;
            font-size: 1rem;
            /* font-weight: bold; */
            color: ${props => props.theme.colorhighlight};
            transition: .25s;

            :hover {
                color: ${ props => props.theme.colorheadhighlight};
                transition: .25s;
            }
        }
        .nav-menu-active {
            li{
                color: ${ props => props.theme.colorheadhighlight};
            }
        }

        .nav-icon{
            padding: 0 10px;
        }

        img{
            width: 40px;
            border: 1px solid none;
            border-radius: 50%;
        }
        .nav-icon-active > img {
            padding: 5px;
            width: 30px;
            background: ${props => props.theme.background};
            border: 1px solid ${props => props.theme.borderhighlight};
        }
        button{
            padding: 10px 20px;
            background: none;
            ${ props => `
                color: ${props.theme.colorhighlight};
                border: 2px solid ${props.theme.borderhighlight};
            `
            }
            border-radius: 45px;
            transition: .25s;
            :hover{
                ${
                    props => `
                        color: ${props.theme.colorhighlight};
                        box-shadow: 0 0 5px ${props.theme.shadowhighlight};
                    `
                }
                transition: .25s;
            }
        }

        .nav-hamberger {
            display: none;
            img {
            width: 40px;
            border-radius: 0px;
            }
        }

    }
}

@media (max-width: 870px){
    .nav-menu-router {
        display: none;
    }
    .nav-hamberger {
        display: block;
    }
}

@media (max-width: 768px){
    .nav-menu-user {
        display: none;
    }
}

`

export default NavBox
