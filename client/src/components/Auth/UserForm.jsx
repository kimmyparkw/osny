import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: '',
            email: '',
            username: '',
            password: '',
        })
        if (props.currentPage === 'new') {
            this.state.buttonName = 'Register'
        } else if (props.currentPage === 'login') {
            this.state.buttonName = 'Login'
        } 
    }


    handleFormChanges = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
        
    }

    clearForm = (e) => {
        const name = e.target.name
        this.setState({
            [name]: '',
        })
    }

    render() {
        return(
            <form onSubmit={(evt) => this.props.handleFormSubmit(evt, this.props.state.route, this.state)}>
                {this.props.currentPage === ('new') && <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleFormChanges} />}
                {this.props.currentPage === ('new') && <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleFormChanges} />}
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleFormChanges} required />
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleFormChanges} required />
                <input type="submit" value={this.state.buttonName} />
            </form>
        )
    }
}

export default UserForm