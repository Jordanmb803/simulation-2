import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProperty} from '../../ducks/reducer';

class WizardOne extends Component {
    constructor() {
        super()
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            states: '',
            zipcode: ''
        }
    }

    componentDidMount(){
        this.setState({
            propertyName: this.props.propertyName,
            address: this.props.address,
            city: this.props.city,
            states: this.props.states,
            zipcode: this.props.zipcode
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>W1
                <h3>Property Name</h3>
                <input value={this.state.propertyName} onChange={(e) => this.setState({propertyName: e.target.value})} />
                <h3>Address</h3>
                <input value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} />
                <h3>City</h3>
                <input value={this.state.city} onChange={(e) => this.setState({city: e.target.value})} />
                <h3>State</h3>
                <input value={this.state.states} onChange={e => this.setState({states: e.target.value})} />
                <h3>Zip</h3>
                <input value={this.state.zipcode} onChange={e => this.setState({zipcode: e.target.value})} />

                <Link to='/wizard/step2'><button onClick={()=>this.props.addProperty(
                    this.state.propertyName,
                    this.state.address,
                    this.state.city,
                    this.state.states,
                    this.state.zipcode)}>Next</button></Link>
            </div>
        )
    }
}

function mapToStateToProps(state) {
    return {
        propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        states: state.states,
        zipcode: state.zipcode
    }
}


export default connect(mapToStateToProps, {addProperty})(WizardOne);
