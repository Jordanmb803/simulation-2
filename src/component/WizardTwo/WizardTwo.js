import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addImgUrl } from '../../ducks/reducer';

class WizardTwo extends Component {
    constructor() {
        super()
        this.state = {
            imageUrl: '',
        }
    }
    
    componentDidMount(){
        this.setState({
            imageUrl: this.props.imgUrl
        })
    }

    render() {
        console.log(this.props.imgUrl)
        return (
            <div>W2
                <h3>Image URL</h3>
                <input value={this.state.imageUrl} onChange={e => this.setState({ imageUrl: e.target.value })} />
                <Link to='/wizard/step1'><button onClick={()=> this.props.addImgUrl(this.state.imageUrl)}>Previous</button></Link>
                <Link to='/wizard/step3'><button onClick={()=> this.props.addImgUrl(this.state.imageUrl)}>Next</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgUrl: state.imgUrl
    }
}

export default connect(mapStateToProps, { addImgUrl })(WizardTwo)