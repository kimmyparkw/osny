import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
            <div className="color"></div>
            <div className="navbar">
                <Link to='/' className='home'>OS//NY</Link>
                <div className="navlinks">
                    <Link to='/about'>About</Link>
                    <Link to='/shop'>Shop</Link>
                    {props.auth && <Link to='/profile'>Profile</Link>}
                    {props.auth
                        ? <Link to='/logout' onClick={props.logout}>Logout</Link>
                        : <Link to='/login'>Login</Link>
                    }  
                </div>
            </div>
        </nav>
    )
}


export default Nav