import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        axios.get('/api/properties').then(res => {
            this.setState({ properties: res.data })
        })
    }

    render() {
        console.log(this.state.properties)
        return (
            <div>Dashboard
                <Link to='/wizard'><button>Add Property</button></Link>
                {this.state.properties.map((prop, i) => {
                    return (
                        <div key={i}>
                            <House
                                propertyName={prop.propertyname}
                                address={prop.address}
                                city={prop.city}
                                state={prop.state}
                                zipcode={prop.zipcode}
                            />
                            <button>delete</button>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}