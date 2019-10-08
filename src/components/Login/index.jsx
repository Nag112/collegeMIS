import React,{Component} from 'react';
import './style.css';
//import axios from 'axios';
import Logo from '../../assets/clg.jpg'
class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={          
                userid:'123456789',
                password:'' ,
                error:'',
                user:false,               
        }
    }
    valueChange =(e)=>
    {     
        this.setState({[e.target.name]:e.target.value})
    }
    verifyUser = (e)=>
    {
        e.preventDefault(); 
        this.props.history.push('/timeline');        
         localStorage.setItem('auth-token','123456798dhajskhdkjashdjahsdk');
      //  if(this.state.userid!==''&&this.state.password!=='')
      //  {
      //      axios.post('https://misback.herokuapp.com/verifyuser/',
      //      {userid:`${this.state.userid}`,password:`${this.state.password}`})
      //  .then((res)=>
      //  {
      //    if(res.data===null||res.data===undefined)
      //     {
      //       this.setState({error:"* Userid/Password is incorrect"});
      //      }
      //    else
      //      {                                     
      //       if(res.data.designation===undefined||res.data.designation===null)
      //       {
      //         this.setState({error:"* Userid/Password is incorrect"});
      //       }
      //       else
      //       {
      //       localStorage.setItem('auth-token',res.data.token);
      //       localStorage.setItem('uid',res.data.uid);
      //       this.props.history.push('/timeline')
      //       }
      //      }
      //   }
      
      // )
      //  .catch(err =>{this.setState({error:'caught error'});console.log(err);});
      // }
    
      // else{
      //   this.setState({error:"*Please fill the required details"});
      // }
    }
  render() {
    return (<div className="limiter">
		<div className="container-login">
			<div className="wrap-login">
        <form className="login-form form-group" onSubmit={this.verifyUser}>
        <span className="login-form-title mb-3">
        <h3><u>Log in</u></h3>
      </span>
      <span className="login-form-logo mt-3 mb-3">
        <img className="img-circle" src={Logo} alt="logo"/>
      </span>
      <div className="wrap-input">
        <input className="form-control" type="text" name="userid" placeholder="User ID" onChange={this.valueChange}/>
        </div>
      <div className="wrap-input mb-0">
        <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.valueChange}/>
      </div>
      <h6 className="error text-light mb-3">{this.state.error}</h6>
      <div className="login-form-btn text-center">
        <button className="btn btn-light">
          Login
        </button>
      </div>
      <div className="text-center p-t-90">
        <p className="text-light">
          Forgot Password?
        </p>
      </div>
    </form>
			</div>
		</div>
  </div> 
    )
  

  }
  }


export default Login;
