import React, { useContext } from 'react'
import styled from 'styled-components'

const SearchStyle = styled.div`

padding: 10px;
background: ${props => props.theme.navcolor};
border-bottom: 1px solid ${props => props.theme.navborder};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
text-align: center;

input{
    width: 60%;
    height: 30px;
    background: ${props => props.theme.navborder};
    text-align: center;
    border: 1px solid ${props => props.theme.navborder};
    border-radius: 8px;
}

`

const Search = ({theme}) => {

    return (
        <SearchStyle theme={theme}>
            <input type="text" placeholder="Searching Items..." />
        </SearchStyle>
    )
}

export default Search
