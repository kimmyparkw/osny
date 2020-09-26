import React, { useState, useEffect } from 'react'
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
                    <h2>Welcome to your profile, {data.name}</h2>
                    <p>Here are you favorite items!</p>
                </>
            ) : <h1>Loading...</h1>}
        </div>
    )
}


export default Profile