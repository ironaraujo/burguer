import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurguerIngredient.css'

export default class BurguerIngredient extends Component {
    state = {}


    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div> className={classes.Seeds1}</div>
                    <div> className={classes.Seeds2}</div>
                </div>
                break;
            case ('meat'):
                ingredient = <div className={classes.meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.bacon}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.salad}></div>
                break;
            default: ingredient = null;

        }

        ingredient = <div className={this.props.type}></div>
        return ingredient

    }
}


BurguerIngredient.propTypes={
    type: PropTypes.string.isRequired
}
