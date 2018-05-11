import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addMortRent } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardThree extends Component {
    createProperty() {
        const { propertyName, address, city, state, zipcode } = this.state
        axios.post('/api/property', { propertyName, address, city, state, zipcode }).then(res => {
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>W3
                <input />
                <input />
                <Link to='/wizard/step2'><button>Previous</button></Link>
                <Link to='/'><button onClick={() => this.createProperty()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        monMortAmount: state.monMortAmount,
        desMonRent: state.desMonRent
    }
}

export default connect(mapStateToProps, { addMortRent })(WizardThree);