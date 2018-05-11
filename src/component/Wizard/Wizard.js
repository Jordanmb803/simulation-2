import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';
import {cancelEntry} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Wizard extends Component {

  

    render(){
        return(
            <div>Wizard
                <Link to='/'><button onClick={()=> this.props.cancelEntry()}>Cancel</button></Link>
                <Route path='/wizard/step1' component={WizardOne}/>
                <Route path='/wizard/step2' component={WizardTwo}/>
                <Route path='/wizard/step3' component={WizardThree}/>
            </div>
        )
    }
}

export default connect(null, {cancelEntry})(Wizard);