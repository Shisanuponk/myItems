import React from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
width: 216px;
height: 335px;
background: #010409;
align-items: center;
position: relative;

img{
    width: 100%;
    height: 100%;
    transition: .25s;
}
.btn-options{
    width: 45px;
    display: none;
    position: absolute;
    top: 40%;
    left: 30%;
}
.item-detail-box{
    width: 100%;
    color: #C9D1D9;
    text-align: center;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    display: none;
}
:hover{
    img{
        opacity: 0.5;
    }
    .item-detail-box{
        display: block;
    }
    .btn-options{
        display: flex;
        img{
            opacity: .5;
            :hover{
                opacity: 1;
            }
        }
    }
    transition: .25s;
}

`

const CardItem = ({theme, img}) => {
    return (
        <CardBox theme={theme}>
            <img src={img} />
            <div className="btn-options">
                    <img src="./img/icons/icons8-heart-light.png" alt="" />
                    <img src="./img/icons/icons8-shopping-cart-light.png" alt="" />
                </div>
            <div className="item-detail-box">
                
                <div>
                    <p>Black Item loing hand</p>
                    <p>price 150 coins</p>
                </div>
            </div>
        </CardBox>
    )
}

export default CardItem
