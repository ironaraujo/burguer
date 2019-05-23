import React, { Component, withStyles } from 'react';
import PropTypes from 'prop-types';
import './BurguerIngredient.css'


const styles = () => (
    {
        BreadTop : {
            height: '20%',
            width: '80%',
            background: 'linear-gradient(#bc581e, #e27b36)',
            borderRadius: '50% 50% 0 0',
            boxShadow: 'inset -15px 0 #c15711',
            margin: '2% auto',
            position: 'relative',
        }
    }
)

class BurguerIngredient extends Component {
    
    render() {
        return <div className={this.props.type}></div>    
    }
}


BurguerIngredient.propTypes={
    type: PropTypes.string.isRequired
}



export default BurguerIngredient