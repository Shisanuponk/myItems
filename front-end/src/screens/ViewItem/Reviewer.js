import React from 'react'

import {Reviewer as ReviewerBox} from './ViewPageStyled'
const Reviewer = () => {
    return (
        <ReviewerBox>
            <div className="viewer-profile">
                <img src="./img/user-img2.jpg" alt="" />
                <h5>Elicia Miagu</h5>
            </div>
        </ReviewerBox>
    )
}

export default Reviewer
