import React, { Component } from 'react';
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                Salad: 0,
                Bacon: 0,
                Cheese: 0,
                Meat: 0,
            }
        }
    }

    render() {
        return (
            <div >
                <Burguer ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </div>);
    }



}

export default BurguerBuilder;