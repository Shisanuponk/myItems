import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UploadImageProduct = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/api')
            setData(response.data)
        }
        fetchData()
        // return () => { }
    }, [])
    
    return (
        <div>
            <p>Upload Product here</p>
            <h3>{data.message}</h3>
            <div>
                { data.users && data.users.map(user =>
                    <p>{user.name}</p>
                )}
            </div>
        </div>
    )
}

export default UploadImageProduct
