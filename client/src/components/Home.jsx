import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
            <h1>Old Souls || New You</h1>
            <p>Giving clothes a second chance</p>
            <Link to='/shop' className='shop-button'>Shop</Link>
        </main>
    )
}

export default Home