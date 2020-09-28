import React from 'react'
import { Link } from 'react-router-dom'

class Collections extends React.Component {
    render() {
        return (
                this.props.allCollectionData.map((collection, i) => {
                        return <div className='collection-container' key={i}>
                            <div className='collection-image'><img src={collection.image} alt='background'/></div>
                            <div className='collection'>
                                <Link to={`/shop/collection/${collection.id}/products`}>
                                    <h1 className='collection-title'>{collection.title}</h1>
                                    <h1 className='shop-now'>Shop now</h1>
                                </Link>
                            </div>
                            
                            </div>
 
                })
        )
    }
}

export default Collections