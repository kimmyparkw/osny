import React from 'react'
import UserForm from './UserForm'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = ({
            route: '/login',
        })
    }

    render() {
        return (
            <div className='userform'>
                <h3>Welcome back! Log in below.</h3>
                <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} currentPage={this.props.currentPage} />
                <p>Don't have an account? Register <Link to='/register'>here</Link></p>
            </div>
        )
    }
}

export default Login