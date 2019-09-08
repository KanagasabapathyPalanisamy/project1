import React , { Component } from 'react';
import './index1.css'

class Welcome extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h3 id="a">Welcome User!!!</h3>
            </div>
        )
    }
}


export default Welcome;
