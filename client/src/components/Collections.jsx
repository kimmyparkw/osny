import React from 'react'

class Collections extends React.Component {
    render(props) {
        return (
            <main className='collections-container'>
                {this.props.allCollectionData.map((collection, i) => {
                        return <div key={i} className='collection'>
                            <h1>{collection.title}</h1>
                        </div>
                })}
            </main>
        )
    }
}

export default Collections