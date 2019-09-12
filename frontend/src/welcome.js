import React , { Component } from 'react';
import './index1.css'
class Welcome extends Component {
    state ={
        addbutton:true,
        modifybutton:true
    }
    goPlayer=()=>{
        const url=new URL("http://localhost:8888/api/players");
        fetch(url,{

            method:'POST',
            mode: 'cors',
           
            headers : { 
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',         //each browers will have the different type of headers...
                'Accept': 'application/json'
               }
                }).then(response=>{
                    return response.json();
                }).then(data=>{
                    let success=data.success;
                 console.log(data);
                })
                .catch(error=>{
                    console.log(error);
                })
    }
    render(){
        console.log(this.props);
        return(
            <div>
        <h3 id="a">Welcome to the game foosball!!!</h3>
        <button id="game-button"onClick={()=>this.goPlayer()}>START THE GAME</button><br/>
        <button hidden={this.state.addbutton} id="modify-button">MODIFY</button><br/>
        <button hidden={this.state.modifybutton} id="team-button">ADD</button>

        </div>
        )
    }
}
export default Welcome;
