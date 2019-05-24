import './BuildControls.css'
import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'Salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' },
]

const buildControls = (props) => {
    return (
        <div className='BuildControls'>
            <p>Current Price: <strong>{props.burguerPrice.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className='OrderButton' 
            disabled={!props.purchasable} 
            onClick={props.ordered}>ORDER NOW</button>

        </div>
    )
}

export default buildControls
