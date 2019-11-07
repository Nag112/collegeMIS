import React,{Component} from 'react';
import './style.css';
import axios from 'axios';
class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={          
                userid:'123456789',
                password:'' ,
                error:'',
                user:false,
                load:false               
        }
    }
    valueChange =(e)=>
    {     
        this.setState({[e.target.name]:e.target.value})
    }
    verifyUser = (e)=>
    {
        e.preventDefault();  
        this.setState({load:true})             
       if(this.state.userid!==''&&this.state.password!=='')
       {
           axios.post('https://misback.herokuapp.com/verifyuser/',
           {userid:`${this.state.userid}`,password:`${this.state.password}`})
       .then((res)=>
       {
         if(res.data===null||res.data===undefined)
          {
            this.setState({error:"* Userid/Password is incorrect",load:false   });
           }
         else
           {                                     
            if(res.data.designation===undefined||res.data.designation===null)
            {
              this.setState({error:"* Userid/Password is incorrect",load:false   });
            }
            else
            {
            localStorage.setItem('auth-token',res.data.token);
            localStorage.setItem('uid',res.data.uid);
            localStorage.setItem('designation',res.data.designation)
            this.props.history.push('/timeline')
            }
           }
        }
      
      )
       .catch(err =>{this.setState({error:'caught error',load:false   });console.log(err);});
      }
    
      else{
        this.setState({error:"*Please fill the required details",load:false});
      }
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
        <img className="img-circle" src={`${window.location.origin}/assets/clg.jpg`} alt="logo"/>
      </span>
      <div className="wrap-input">
        <input className="form-control" type="text" name="userid" placeholder="User ID" onChange={this.valueChange}/>
        </div>
      <div className="wrap-input mb-2">
        <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.valueChange}/>
      </div>
      <h6 className="error text-light mx-3">{this.state.error}</h6>
      <div className="login-form-btn text-center">
        <button className="btn btn-light" disabled={this.state.load}>
         {this.state.load?<i className="fa fa-spinner"><span>Please wait</span></i>:'Login'}
        </button>
      </div>
      <div className="text-center mt-2">
        <a className="text-light forgotpassword" href='/'>
          Forgot Password?
        </a>
      </div>
    </form>
			</div>
		</div>
  </div> 
    )
  

  }
  }


export default Login;
