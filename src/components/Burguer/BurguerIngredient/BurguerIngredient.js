import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './BurguerIngredient.css'

class BurguerIngredient extends Component {
    
    render() {
        return <div className={this.props.type}></div>    
    }
}


BurguerIngredient.propTypes={
    type: PropTypes.string.isRequired
}



export default BurguerIngredient