import React from 'react';
import './index.css';
import Welcome from './welcome';
export default class Form extends React.Component {

state= {
welcomepage:false,              // state holds the value it reflect to render function
 Username:"",
 password:"",
 isError:false,
}
change =e =>{             //e refers event
   this.setState({
       [e.target.name]:e.target.value
   });
};

onSubmit1 = e =>{
    
    // http://127.0.0.1:8080/learners

    fetch("http://localhost:8080/learners",{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    }).then(response=>{
        console.log(response)
        response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error);
    });


  //this.setState({welcomepage:true});
  e.preventDefault();  // hide the value(data) in the url
  // console.log(this.state);
}

render(){
   const {isError} =this.state;
   if(this.state.welcomepage===false){
   return (

   <form  onSubmit={this.onLogin}>
       {isError ?
       <div role="alert">
           <p>UserName or PassWord is InCorrect !!!</p>
       </div>
       :''
       }
       
       <label id='a'>UserName </label>
       <input
       className="bb"
       name="Username" 
       placeholder="Username"
       value={this.state.Username} 
       onChange={e =>this.change(e)}           //setState({Username: e.target.value})}
       /> <br/>
       <label id='a'>PassWord  </label>
       <input
       className="bb"
       name="password"
       placeholder="password"
       type="password"
       value={this.state.password} 
       onChange={e =>this.change(e)}           //setState({password: e.target.value})}
       /><br/>
       <button id='c'onClick={e =>this.onSubmit1(e)}>Submit</button>
       </form>
   
   );
   }else{
       return(<Welcome/>);
       
   }
}
}