import React from 'react';
import './index.css';
import Welcome from './welcome';
import New from './New';
export default class Form extends React.Component {

   
state= {
welcomepage:false,              // state holds the value it reflect to render function
 Username:"",
 password:"",
 loginError:false,
 newPage:false
}

change =e =>{             //e refers event
   this.setState({
       [e.target.name]:e.target.value
   });
};
goToNewpage=()=>{
this.setState({newPage:true});
}

onSubmit1 = e =>{
    
    // http://127.0.0.1:8080/learners
    //this.setState({welcomepage:true});
    const url=new URL("http://localhost:8888/api/login");
    const params={
        username: this.state.Username,
        password: this.state.password 
    }
    Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
    //console.log(url);
    fetch(url,{

        method: 'POST',
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
        if(success)
        {
            this.setState({welcomepage:true});
        }else{
            this.setState({loginError:true});
            alert("Invalid Login Details")
        }
    }).catch(error=>{
        console.log(error);
    });
  e.preventDefault();  // hide the value(data) in the url
}

render(){
   // console.log(this.state);
   if(this.state.newPage===true) {
       return(<New/>);
   }else{
    if(this.state.welcomepage===false){
    return (
    <form>        
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
        <button id='c'onClick={()=>this.goToNewpage()}>Sign_up</button>
        </form>
    
    );
    }else {
        return(<Welcome/>);
    }
}
}
}
