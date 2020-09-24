import React from 'react'

class AllProducts extends React.Component {
    render(props) {
        return (
                this.props.allProductsData.map((product) => {
                    return <div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>${product.price} + shipping</p>
                            </div>
                })
        )
    }
}

export default AllProducts