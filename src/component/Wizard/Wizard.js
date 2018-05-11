import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';


export default class Wizard extends Component {
    
  

    render(){
        console.log(this.state)
        return(
            <div>Wizard
                <Route path='/wizard/step1' component={WizardOne}/>
                <Route path='/wizard/step2' component={WizardTwo}/>
                <Route path='/wizard/step3' component={WizardThree}/>
            </div>
        )
    }
}