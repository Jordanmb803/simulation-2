import React from 'react';
import axios from 'axios';

export default function House(props) {

    return (
        <div className='houseBox'>
            <img src={props.img} />
            <div className='houseC2'>
                <p>Property Name: {props.propertyName}</p>
                <p>Address: {props.address}</p>
                <p>City: {props.city}</p>
                <p>State: {props.state}</p>
                <p>Zip: {props.zipcode}</p>
            </div>
            <div className='houseC3'>
                <p>Monthly Mortage Amount: {props.mma}</p>
                <p>Desired Monthly Rent: {props.desRent}</p>
            </div>
        </div>

    )
}