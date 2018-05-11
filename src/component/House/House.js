import React from 'react';

export default function House(props){
    return(
        <div>House
        <p>{props.propertyName}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zipcode}</p>
            
        </div>
    )
}