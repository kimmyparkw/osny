import React from 'react'
import UserForm from'./UserForm'

class Register extends React.Component {
    constructor() {
        super()
        this.state = ({
            route: '/auth/register',
        })
    }

    render() {
        return (
            <div className='userform'>
                <h3>Welcome!<br/>Register below.</h3>
                <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} currentPage={this.props.currentPage} />
            </div>
        )
    }
}


export default Register