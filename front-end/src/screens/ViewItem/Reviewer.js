import React from 'react'

import {Reviewer as ReviewerBox} from './ViewPageStyled'
const Reviewer = (props) => {
    return (
        <ReviewerBox theme={props.theme}>
            <div className="viewer-profile">
                <img src="./img/user-img2.jpg" alt="" />
                <div className="reviewer-info">
                    <h5>Elicia Miagu</h5>
                    <h6>2021-08-29 14:01</h6>
                </div>
            </div>
            <div className="review-comment">
                <div className="comment-box">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet dignissimos facilis at atque facere beatae architecto necessitatibus debitis culpa quod reprehenderit dolores, tempora mollitia? Cum consequatur amet quasi facere velit repellat saepe corrupti veniam iste vitae dolorem nostrum facilis earum similique sed dicta beatae asperiores, officiis eveniet rem commodi. Tempora suscipit adipisci consequatur debitis iusto. Beatae sequi asperiores quas, laudantium adipisci impedit! Rem similique architecto nihil? Temporibus neque dolorem veritatis esse, id reiciendis dolores eligendi molestiae corrupti facilis consectetur accusantium dolore, corporis ad aliquid fugit obcaecati vitae ullam commodi facere quas repellendus doloribus, perferendis alias! Neque vero delectus ad?
                </div>
            </div>
        </ReviewerBox>
    )
}

export default Reviewer
