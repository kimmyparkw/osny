import React from 'react'

class SingleProduct extends React.Component {
    render() {
        return (
            <main className='single-product-container'>
                <div>product image will go here</div>
                <div className='product-details'>
                    <h3>{this.props.singleProductData.title}</h3>
                    <p>{this.props.singleProductData.description}</p>
                    <p>${this.props.singleProductData.price}</p>
                    <button onClick={() => this.props.userOrders(this.props.singleProductData.id)}>Add to cart</button>
                </div>
            </main>
        )
    }
}

export default SingleProduct