import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addMortRent } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardThree extends Component {
   constructor(){
       super()
       this.state = {
           monMortAmount: '',
           desMonRent: ''
       }
   }
   
   componentDidMount(){
       this.setState({
           monMortAmount: this.props.monMortAmount,
           desMonRent: this.props.desMonRent
       })
   }

    createProperty() {
        const { propertyName, address, city, state, zipcode, imageUrl } = this.props
        const {monMortAmount, desMonRent} = this.state
        axios.post('/api/property', { propertyName, address, city, state, zipcode, imageUrl, monMortAmount, desMonRent }).then(res => {
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>W3
                <input value={this.state.monMortAmount} onChange={e=> this.setState({monMortAmount: e.target.value})}/>
                <input value={this.state.desMonRent} onChange={e=> this.setState({desMonRent: e.target.value})}/>
                <Link to='/wizard/step2'><button onClick={()=>this.props.addMortRent(this.state.monMortAmount,this.state.desMonRent)}>Previous</button></Link>
                <Link to='/'><button onClick={() => this.createProperty()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        states: state.states,
        zipcode: state.zipcode,
        imageUrl: state.imgUrl,
        monMortAmount: state.monMortAmount,
        desMonRent: state.desMonRent
    }
}

export default connect(mapStateToProps, { addMortRent })(WizardThree);