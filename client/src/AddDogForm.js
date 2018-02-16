import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class AddDogForm extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: '',
  //     password: ''
  //   }
  // }

  // handleEmailChange = (e) => {
  //   this.setState({email: e.target.value});
  // }

  // handlePasswordChange = (e) => {
  //   this.setState({password: e.target.value});
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('/auth/login', {
  //     email: this.state.email,
  //     password: this.state.password
  //   }).then((result) => {
  //     localStorage.setItem('mernToken', result.data.token);
  //     this.setState({ success: true });
  //     this.props.updateUser();
  //   }).catch((error) => {
  //     console.log('error returned', error.response);
  //     this.props.setFlash('error', 'Invalid Credentials');
  //   });
  // }

  render() {
    return(<h1>Add Dog Form goes here</h1>);
  }
}

export default AddDogForm;
