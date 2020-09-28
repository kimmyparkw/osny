import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../modules/Auth'

const Profile = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
        .then(res => res.json())
        .then(res => {
            setData(res.user)
        })
    }, [])

    return (
        <div className='profile-container'>
            {data ? (
                <>
                    <h2>Welcome to OSNY, {data.name}!</h2>
                    <div className='shop-button-container'>
                        <Link to='/shop/collection' className='shop-button'>Shop by collection</Link>
                        <Link to='/shop/all' className='shop-button'>Shop all products</Link>
                    </div>
                </>
            ) : <h1>Loading...</h1>}
        </div>
    )
}


export default Profile