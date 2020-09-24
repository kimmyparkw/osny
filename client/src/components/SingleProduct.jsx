import React from 'react'

class SingleProduct extends React.Component {
    render(props) {
        return (
            <main className='single-product-container'>
                <h3>{this.props.singleProductData.title}</h3>
                <p>{this.props.singleProductData.description}</p>
                <p>${this.props.singleProductData.price}</p>
            </main>
        )
    }
}

export default SingleProduct