import React from 'react'

function CakeContainer(props) {
    console.log(props.numberOfCakes)
    return (
        <div>
            <h2>Nombre de gâteaux</h2>
            <button>Acheter</button>
        </div>
    )
}

export default CakeContainer
