import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser, uploadProductImage } from '../../api/api'
import ThemeContext, { Themes } from "../../context/Themes";

const MerchantMode = () => {
    const [themes, setThemes] = useContext(ThemeContext)
    const [merchantData, setMerchantData] = useState()
    const [imageFile, setImageFile] = useState()

    const getMerchant = new Promise((resolve, reject)=>{
        try{
            const result = getUser()
            resolve(result)
        }catch(err){
            console.log(err)
        }
    })

    useEffect(() => {
        getMerchant.then(res => {
            setMerchantData(res.data.data)
        })
    }, [])

    const upload = async(evt) => {
        evt.preventDefault()
        console.log(imageFile)
        try{
            const res = await uploadProductImage(imageFile)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <MenagementPage theme={themes}>
            <h1>{`${merchantData?`${merchantData.name}'s`:''}`} Stock Management</h1>
            <form onSubmit={evt=>upload(evt)}>
                {/* <label htmlFor="Product name">Name </label><br />
                <input type="text" /><br />

                <label htmlFor="Product price">Price </label><br />
                <input type="number" /><br />

                <label htmlFor="Product type">Type</label><br />
                <input type="text" /><br />

                <label htmlFor="Product description">Description </label><br />
                <textarea name="description" id="" cols="30" rows="10" /><br /> */}

                <label htmlFor="Product Image"></label><br />
                <input type="file" onChange={evt => setImageFile(evt.target.value)} multiple />
                {/* <input type="file" />
                <input type="file" />
                <br /><br /> */}

                <button type="submit">Insert</button>
            </form>
        </MenagementPage>
    )
}

const MenagementPage = styled.div`

padding: 5px;
width: 100%;
height: 100%;
color: black;
background: ${props => props.theme.navcolor};
border-radius: 8px;

`

export default MerchantMode
