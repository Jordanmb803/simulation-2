import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addMortRent } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { cancelEntry } from '../../ducks/reducer';

class WizardThree extends Component {
   constructor(){
       super()
       this.state = {
           monMortAmount: '',
           desMonRent: '',
           redirect: false
       }
       this.createProperty = this.createProperty.bind(this)
   }
   
   componentDidMount(){
       this.setState({
           monMortAmount: this.props.monMortAmount,
           desMonRent: this.props.desMonRent
       })
   }

    createProperty() {
        const { propertyName, address, city, states, zipcode, imageUrl } = this.props
        const {monMortAmount, desMonRent} = this.state
        axios.post('/api/property', { propertyName, address, city, states, zipcode, imageUrl, monMortAmount, desMonRent }).then( () => {
            this.props.cancelEntry()
            this.setState({
                redirect: true
            });
        })
    }

    render() {
        if (this.state.redirect){
            return <Redirect to = "/"/>
        }
        console.log(this.props)
        return (
            <div>
                <input value={this.state.monMortAmount} onChange={e=> this.setState({monMortAmount: e.target.value})}/>
                <input value={this.state.desMonRent} onChange={e=> this.setState({desMonRent: e.target.value})}/>
                <Link to='/wizard/step2'><button className='previousButton' onClick={()=>this.props.addMortRent(this.state.monMortAmount,this.state.desMonRent)}>Previous</button></Link>
                <button onClick={() => this.createProperty()}>Complete</button>
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

export default connect(mapStateToProps, { addMortRent, cancelEntry })(WizardThree);