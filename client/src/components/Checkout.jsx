import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
    render() {
        return (
            <StripeProvider apkiKey="pk_test_51HVkiOK4H4g8C88dJatdwW2xhsUdlQyJg3aySFB2TlqCG79dhSXN09bH84fsDrY0kLpZSMHioixOpkbw9BHUKr5l00uXetARMS" >
                <div className='example'>
                    <h1>React stripe element example</h1>
                    <Elements>
                        <CheckoutForm orderId={this.props.orderId} total={this.props.total}/>
                    </Elements>
                </div>
            </StripeProvider>
        )
    }
}

export default Checkout