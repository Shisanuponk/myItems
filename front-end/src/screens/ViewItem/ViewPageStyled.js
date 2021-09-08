import styled from 'styled-components'

// Styled Components Design

const ItemPage = styled.div`
padding: 10px 0px;
width: 100%;
height: 100%;
background: ${props => props.theme.navcolor};
border-radius: 8px;
`

const ItemShow = styled.div`
width: 100%;
height: 100%;
display: flex;
`

const ItemImgBox = styled.div`
padding: 0 5px;
width: 40%;
display: block;
border-right: 1px solid gray;
`

const ItemImgMain = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
overflow: hidden;
img{
    height: 100%;
}
`

const ItemImgSelect = styled.div`
margin-top: 5px;
width: 100%;
height: 80px;
display: flex;
overflow: auto;
img{
    margin: 0 1px;
}

::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar{
    height: 10px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
`

const ItemInfo = styled.div`

padding: 10px;
width: 100%;

.item-info{
    width: 100%;
    height: 50%;
    position: relative;
    *{
        margin: 0;
    }
    .item-detail-detail{
        background: ${props => props.theme.background};
        h3{
            margin: 3px;
            text-align: left;
            font-size: 100%;
            color: ${props => props.theme.color};
        }
    }
    
    .item-name{
        font-size: 150%;
        margin-bottom: 20px;
        text-overflow: ellipsis;
        color: ${props => props.theme.colorhighlight};
    }
    .add-to-cart{
        margin-top: 20px;
        display: flex;
        justify-content: left;
        .btn-inp{
            margin-bottom: 5px;
            padding: 0;
            width: 50px;
            height: 35px;
            background: ${props => props.theme.navcolor};
            border: 2px solid ${props => props.theme.colorheadhighlight};
            border-radius: 8px;
            font-weight: bold;
            color: ${props => props.theme.colorhighlight};

            :active{
                border-color: ${props => props.theme.navborder};
            }
        }
        input{
            margin: 3px 5px;
            width: 50px;
            height: 25px;
            font-size: 25px;
            text-align: right;
        }
    }
    .btn-add-item{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: auto;
        bottom: 5px;
        .btn-add{
            width: 30%;
            display: flex;
            background: ${props => props.theme.navcolor};
            border: 2px solid ${props => props.theme.colorheadhighlight};
            border-radius: 8px;
            align-items: center;
            justify-content: center;
            :active{
                border-color: ${props => props.theme.navborder};
            }
            text{
                padding: 10px 5px;
                font-size: 150%;
                font-weight: bold;
                color: ${props => props.theme.colorheadhighlight};
            }
            img{
                padding: 5px;
                width: 20%;
            }
        }
    }
}

.item-detail{
    height: 50%;
    border-top: 1px solid gray;
    color: ${props => props.theme.colorhighlight};
    display: grid;
    grid-template-rows: auto 1fr;
    textarea{
        width: 100%;
        height: 100%;
        background: ${props => props.theme.navcolor};
        color: ${props => props.theme.color};
        overflow: auto;
        
        ::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }
        ::-webkit-scrollbar{
            width: 4px;
            background-color: #F5F5F5;
        }
        ::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #555;
        }
    }
}

@media (max-width: 1624px){
    .item-info{
        h3{
            font-size: 90%;
        }
        .item-name{
            font-size: 120%;
        }
        .btn-add-item{
            .btn-add{
                text{
                    font-size: 100%;
                }
            }
        }
    }
}
@media (max-width: 1424px){
    .item-info{
        .btn-add-item{
            .btn-add{
                text{
                    font-size: 90%;
                }
            }
        }
    }
}
@media (max-width: 1350px){
    .item-info{
        .btn-add-item{
            .btn-add{
                text{
                    font-size: 70%;
                }
            }
        }
    }
}
@media (max-width: 1258px){
    .item-info{
        .btn-add-item{
            .btn-add{
                text{
                    
                    font-size: 60%;
                }
            }
        }
    }
}

`

const Reviews = styled.div`

padding: 10px 5%;
text-align: center;
display: block;
h3{
    color: ${props => props.theme.colorhighlight};
}

`
const Reviewer = styled.div`
width: 100%;
min-height: 100px;
border-bottom: 1px solid gray;
text-align: left;
.viewer-profile{
    margin: 10px;
    display: flex;
    img{
        width: 45px;
        height: 45px;
        border-radius: 50px;
    }
}

`

export { ItemPage, ItemShow, ItemImgBox, ItemImgMain, ItemImgSelect, ItemInfo, Reviews, Reviewer }