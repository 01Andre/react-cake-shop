import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes : {numberOfCakes}</h2>
    {/*Buycake est l'action importée de index.js dans le redux/index.js*/}
            <button onClick = {()=>dispatch(buyCake())}>acheter</button>
        </div>
    )
}

export default HooksCakeContainer
