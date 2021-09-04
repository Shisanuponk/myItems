import React from 'react'
import styled from 'styled-components'

const ViewItem = () => {
    return (
        <ViewItemPage>
            <ImgItem>
                <ImgMain>
                    <img src="./img/item1.webp" alt="" />
                </ImgMain>
                <ImgBox>
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                    <img src="./img/item1.webp" alt="" />
                </ImgBox>
            </ImgItem>
        </ViewItemPage>
    )
}

const ViewItemPage = styled.div`

width: 100%;
height: 100%;
border: 1px solid black;

`

const ImgItem = styled.div`

width: 30%;
height: 100%;

`
const ImgMain = styled.div`
img{
    width: 100%;
}

`

const ImgBox = styled.div`
width: 100%;
display: flex;
overflow-x: auto;

img{
    width: 50px;
}

`

export default ViewItem
