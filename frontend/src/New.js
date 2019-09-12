import React from 'react';
import './index.css';
import Form from './form';
export default class New extends React.Component {

  state={
    Username:"",
    password:"",
    welcomePage:false
  }
change =e =>{            //e refers event
  this.setState({
      [e.target.name]:e.target.value
  });
};

  onSubmit=e=>{
    const url=new URL("http://localhost:8888/api/create");
    const params={
        username: this.state.Username,
        password: this.state.password 
    }
    Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
    console.log(url);
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
      let success=data.signup;
      if(success)
      {
          this.setState({welcomePage:true});
       
      }else{
          alert("sorry!!Not created");
      }
  }).catch(error=>{
      console.log(error);
  });
     e.preventDefault();                              // hide the value(data) in the url
}
  
  render() {
  
    if(this.state.welcomePage===true) {
      return(<Form/>);
  } 
  else{
    return(
    <div>
        <form>
        <label id='a'>UserName </label>
        <input
        className="ab"
        name="Username" 
        placeholder="Enter the Username"
        value={this.state.Username} 
        onChange={e =>this.change(e)}               //setState({Username: e.target.value})}
        /> <br/>
        <label id='a'>Password </label>
        <input
        className="ab"
        name="password"
        type="password"
        placeholder="Enter the Password"
        value={this.state.password} 
        onChange={e =>this.change(e)}           
        /> <br/>

        <button id='c'onClick={e =>this.onSubmit(e)}>Create</button>
        </form>
    </div>
  
  );
  }
}
  
}