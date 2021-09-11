import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardItem = ({ theme, img }) => {
    const [isView, setIsView] = useState(false)
    return (
        <CardBox theme={theme}>
            <img className="item-img" src={img} />
            <div className="btn-options">
                <img src="./img/icons/icons8-heart-light.png" alt="" />
                <img src="./img/icons/icons8-shopping-cart-light.png" alt="" />
                <Link to="/item=1">
                    <img
                        src="./img/icons/icons8-view-more.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="item-detail-box">
                <div>
                    <p>Black Item long hand</p>
                    <p>Price: 150 coins</p>
                    <p>Merchant: Maria Osawa</p>
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

    a{
        width: 100%;
        img{
            width: 30%;
        }
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
