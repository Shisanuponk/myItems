import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Import Components
// import ViewItem from './ViewItem'

const CardItem = ({ theme, img }) => {
    const [isView, setIsView] = useState(false)
    return (
        <CardBox theme={theme}>
            <img className="item-img" src={img} />
            <img className="event" src="./img/icons/icons8-sale.png" />
            <div className="btn-options">
                <img src="./img/icons/icons8-heart-light.png" alt="" />
                <img src="./img/icons/icons8-shopping-cart-light.png" alt="" />
                <img
                    src="./img/icons/icons8-view-more.png"
                    alt=""
                />
            </div>
            <div className="item-detail-box">
                <div>
                    <p>Black Item long hand</p>
                    <p>Price: 150 coins</p>
                    {/* <div className="star-point">
                        <img src="./img/icons/star-active.png" />
                        <img src="./img/icons/star-active.png" />
                        <img src="./img/icons/star-active.png" />
                        <img src="./img/icons/star-active.png" />
                        <img src="./img/icons/star-active.png" />
                    </div> */}
                </div>
            </div>
        </CardBox>
    )
}

const CardBox = styled.div`
margin: auto;
width: 100%;
height: 100%;
background: #010409;
align-items: center;
display: block;
position: relative;

.event{
    width: 20%;
    height: 20%;
    position: absolute;
    top: 0;
    right: 0;
}

img{
    width: 100%;
    height: 100%;
    transition: .25s;
}
.btn-options{
    width: 100%;
    display: none;
    position: absolute;
    top: 40%;
    left: 20%;

    img{
        width: 20%;
    }
}
.item-detail-box{
    padding: 5%;
    width: 100%;
    color: #C9D1D9;
    font-size: 90%;
    text-align: left;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    display: none;

    /* div > .star-point{
        display: flex;
        img{
            width: 10%;
        }
    } */
}
:hover{
    .item-img{
        opacity: 0.3;
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

export default CardItem
