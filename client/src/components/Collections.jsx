import React from 'react'
import { Link } from 'react-router-dom'

class Collections extends React.Component {
    render(props) {
        return (
                this.props.allCollectionData.map((collection, i) => {
                        return <div className='collection'><Link key={i} to='/collection/products'>
                            <h1>{collection.title}</h1>
                            </Link></div>
                })
        )
    }
}

export default Collections