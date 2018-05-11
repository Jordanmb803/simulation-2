import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    render(){
        console.log(this.state)
        return(
            <div>Wizard
                <Link to='/'><button>Cancel</button></Link>
                <h3>Property Name</h3>
                <input onChange={(e)=>this.setState({name: e.target.value})}/>
                <h3>Address</h3>
                <input onChange={(e)=>this.setState({address: e.target.value})}/>
                <h3>City</h3>
                <input onChange={(e)=>this.setState({city: e.target.value})}/>
                <h3>State</h3>
                <input onChange={e=> this.setState({state: e.target.value})}/>
                <h3>Zip</h3>
                <input onChange={e=> this.setState({zipcode: e.target.value})}/>
            </div>
        )
    }
}