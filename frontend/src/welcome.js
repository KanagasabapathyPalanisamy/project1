import React , { Component } from 'react';
import './index1.css'

class Welcome extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
        <h3 id="a">Welcome to the game foosball!!!</h3>
        <button id="game-button">START THE GAME</button>
        <button id="modify-button">MODIFY</button>
        <button id="team-button">ADD</button>
        </div>
        )
    }
}


export default Welcome;
