import React, { Component } from 'react';
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends Component {
    state = {}
    render() {
        return (
            <div >
                <Burguer />
                <div>Build Controls</div>
            </div>);
    }



}

export default BurguerBuilder;