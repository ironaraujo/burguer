import React from 'react'
import './BuildControl.css'

const buildControls = (props) => {
    return (
        <div className='BuildControl'>            
            <div className='BuildControl'>{props.label}</div>
            <button className='BuildControl Less' onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className='BuildControl More' onClick={props.added}>More</button>
        </div>
    )
}

export default buildControls
