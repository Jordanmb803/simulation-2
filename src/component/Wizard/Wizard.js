import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';
import { cancelEntry } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Wizard extends Component {



    render() {
        return (
            <div className='mainBody'>
                <div className='wizard_subHeader'>
                    <h2 className='wizHeader'>Add New Listing</h2>
                    <Link className='wizButton' to='/'><button className='cancelButton' onClick={() => this.props.cancelEntry()}>Cancel</button></Link>
                </div>
                <Route path='/wizard/step1' component={WizardOne} />
                <Route path='/wizard/step2' component={WizardTwo} />
                <Route path='/wizard/step3' component={WizardThree} />
            </div>
        )
    }
}

export default connect(null, { cancelEntry })(Wizard);