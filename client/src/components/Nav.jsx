import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <div className="color"></div>
            <div className="navbar">
                <Link to='/' className='home'>OSNY</Link>
                <div className="navlinks">
                    <Link to='/about'>About</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    )
}


export default Nav