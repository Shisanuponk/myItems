import React, { useContext } from 'react'
import styled from 'styled-components'

import ThemeContext, { Themes } from "../storage/Themes";

const MerchantMode = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    return (
        <MenagementPage theme={themes}>
            <p>Merchant Mode</p>
        </MenagementPage>
    )
}

const MenagementPage = styled.div`

padding: 5px;
width: 100%;
height: 100%;
background: ${props => props.theme.navcolor};
border-radius: 8px;

`

export default MerchantMode
