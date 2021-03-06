import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', 'Failure message here');
    })
  }

  render() {
    let form = '';
    if(this.props.user && this.props.user.email){
      console.log(this.props.user);
      return (<Redirect to="/adddog" />);
    }
    else {
      return (
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            {/*<div>
              <input name="Name"
                   placeholder="What is your first name?"
                   value={this.state.name}
                   onChange={this.handleNameChange}
              />
            </div>*/}
            <div>
              <h2>Sign Up For Free Trial</h2>
              <h5 className="shipping">(+free shipping)</h5>
              <input name="Email"
                   placeholder="Enter Email Here"
                   value={this.state.email}
                   onChange={this.handleEmailChange} />
           </div>
           <div>
              <input name="Password"
                 placeholder="Create Password"
                 type="password"
                 value={this.state.password}
                 onChange={this.handlePasswordChange} />
             </div>
             <input type="submit" value="Create Account" className="btn-primary" />
          </form>
          <h3>Already a member?</h3>
          <h3 className="login-link"><Link to="/login">Login</Link></h3>
        </div>
      );
    }
  }
}

export default Signup;
