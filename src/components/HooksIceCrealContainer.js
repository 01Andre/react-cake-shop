import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyIceCream} from '../redux'
function HooksIceCrealContainer() {
const numberOfIceCreams = useSelector(state => state.iceCream.iceCream);
const dispatch = useDispatch()
    return (
        <div>
            <h2>Nombre de glaces : {numberOfIceCreams}</h2>
            <button onClick = {()=>dispatch(buyIceCream())}>Acheter une glace</button>
        </div>
    )
}

export default HooksIceCrealContainer
