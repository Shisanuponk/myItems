import styled from "styled-components"

const HomePage = styled.div`

width: 100%;
height: 100%;

${props => `
background: ${props.theme.background};
color: ${props.theme.color };
`}

/* background: ${ props => props.theme.background };
color: ${props => props.theme.color };

background: ${ props => props.theme.background};
color: ${props => props.theme.color}; */


/* Header title */
.header-title {
    text-align: center;
}

`

export default HomePage
