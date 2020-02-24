import React from 'react';
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Nombre de gâteaux : {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Acheter</button>
        </div>
    )
}
//pour récupérer le state, et le mettre dans les props
const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}
//pour modifier le state : penser à importer les actions : ici buycake

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}


//le connect permet de connecter les fonctions à notre container
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
