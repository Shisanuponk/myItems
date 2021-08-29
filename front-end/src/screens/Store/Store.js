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

.show-items{
    /* padding: 10px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 15px;
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
                
            </div>
        </StoreStyle>
    )
}

export default Store
