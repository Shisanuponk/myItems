import React, { useContext } from 'react'
import styled from 'styled-components'

const SearchStyle = styled.div`

padding: 10px;
background: ${props => props.theme.navcolor};
border-bottom: 1px solid ${props => props.theme.navborder};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
text-align: center;

div{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    img{
        margin: 0 2%;
        width: 35px;
    }
}

input{
    width: 60%;
    height: 30px;
    background: ${props => props.theme.navborder};
    text-align: center;
    border: 1px solid ${props => props.theme.navborder};
    border-radius: 8px;
}

`

const Search = ({ theme }) => {

    return (
        <SearchStyle theme={theme}>
            <div>
                <img src={`./img/icons/${theme.iconfilter}`} alt="" />
                <input type="text" placeholder="Searching Items..." />
                <img src={`./img/icons/${theme.iconsearch}`} alt="" />
            </div>
        </SearchStyle>
    )
}

export default Search
