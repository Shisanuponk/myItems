import styled from "styled-components"

const HomePage = styled.div`

width: 100%;
height: 100%;
<<<<<<< HEAD
${props => `
background: ${props.theme.background};
color: ${props.theme.color };
`}
=======
background: ${ props => props.theme.background };
color: ${props => props.theme.color };
>>>>>>> e77b8c38235f146d1827442ebe1e383f9f57a676

/* Header title */
.header-title {
    text-align: center;
}

`

export default HomePage
