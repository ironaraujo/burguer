import React from 'react'
import PropTypes from 'prop-types'
import './Backdrop.css'

const BackDrop = props => {
    return (
        props.show ? <div className='Backdrop' onClick={props.clicked}></div>:null
    )
}

BackDrop.propTypes = {

}

export default BackDrop
