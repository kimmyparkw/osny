import React from "react";
import { CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            complete: false,
        }
    }

    handleSubmit = async () => {
        let {token} = await this.componentWillReceiveProps.stripe.createToken({name: 'Name'})
        let response = await fetch('/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            },
            body: JSON.stringify({
                token: token.id,
                orderId: this.props.orderId,
                amount: this.props.total
            })
        })

        if (response.ok) {
            this.setState({
                complete: true,
            })
        }
    }


    render() {
        {this.state.complete && <h2>Thank you for your purchase!</h2>}
        return (
            <div className='checkout-container'>
                <h3>Ready to checkout?</h3>
                <CardElement />
                <button onClick={this.handleSubmit}>Purchase</button>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm)