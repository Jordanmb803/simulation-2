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
        this.deleteProperty = this.deleteProperty.bind(this)
    }

    componentDidMount() {
        axios.get('/api/properties').then(res => {
            this.setState({ properties: res.data })
            console.log('refreshed')
        })
    }

    deleteProperty(id){
        axios.delete(`/api/property/${id}`).then(res => {
            console.log(`${id}deleted`)
            this.componentDidMount()
        })
    }
    render() {
        console.log(this.state.properties)
        return (
            <div className='mainBody'>
                <div className='dash_subHeader'>
                <h2>Dashboard</h2>
                <Link className='addProperty' to='/wizard/step1'><button className='addPropButton'>Add New Property</button></Link>
                </div>
                {this.state.properties.map((prop, i) => {
                    return (
                        <div key={i}>
                            {console.log(prop)}
                            <House 
                                img={prop.image}
                                id={prop.id}
                                propertyName={prop.propertyname}
                                address={prop.address}
                                city={prop.city}
                                state={prop.state}
                                zipcode={prop.zipcode}
                                mma={prop.monthly_mortage_amount}
                                desRent={prop.desired_rent}
                               
                            />
                            <button onClick={()=> this.deleteProperty(prop.id)}>delete</button>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}