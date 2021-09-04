import React, { useContext } from 'react'
import styled from 'styled-components'
import Search from './Search'

// Import Theme
import ThemeContext, { Themes } from "../../storage/Themes";

// Import Components
import CardItem from '../../components/Item/CardItem';


const StoreStyle = styled.div`

min-height: 50rem;
border: 1px solid ${props => props.theme.navborder};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
z-index: 0;
.show-items{
    height: 100%;
    padding: .5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    overflow: hidden;
}

@media (max-width: 1400px){
    .show-items{
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
@media (max-width: 1024px){
    .show-items{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
@media (max-width: 768px){
    .show-items{
        grid-template-columns: 1fr 1fr 1fr;
    }
}

`


const Store = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    return (
        <StoreStyle theme={themes}>
            <Search theme={themes} />
            <div className="show-items">
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                <CardItem img="./img/item1.webp" theme={themes} />
                <CardItem img="./img/item2.webp" theme={themes} />
                
            </div>
        </StoreStyle>
    )
}

export default Store
