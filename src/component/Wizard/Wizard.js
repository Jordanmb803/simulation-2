import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import routes from '../../routes';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.createProperty = this.createProperty.bind(this)
    }

    createProperty(){
       const {propertyName, address, city, state, zipcode} = this.state
        axios.post('/api/property', {propertyName, address, city, state, zipcode}).then(res => {
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>Wizard
                <Link to='/'><button>Cancel</button></Link>
                <h3>Property Name</h3>
                <input onChange={(e)=>this.setState({propertyName: e.target.value})}/>
                <h3>Address</h3>
                <input onChange={(e)=>this.setState({address: e.target.value})}/>
                <h3>City</h3>
                <input onChange={(e)=>this.setState({city: e.target.value})}/>
                <h3>State</h3>
                <input onChange={e=> this.setState({state: e.target.value})}/>
                <h3>Zip</h3>
                <input onChange={e=> this.setState({zipcode: e.target.value})}/>
                <Link to='/'><button onClick={()=> this.createProperty()}>Complete</button></Link>
            </div>
        )
    }
}