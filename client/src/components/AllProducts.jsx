import React from 'react'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {
    render() {
        return (
                this.props.allProductsData.map((product, i) => {
                    return <div className='product' key={i}>
                                <Link to={`/shop/product/${product.id}`}><h3>{product.title}</h3></Link>
                                <p>{product.description}</p>
                                <p>${product.price} + shipping</p>
                            </div>
                })
        )
    }
}

export default AllProducts