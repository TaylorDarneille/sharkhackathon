import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cloud from './Cloud';

class AddDogForm extends Component {

  render() {
    return (
      <div className="add-dog-form">
        <h1>Healty Wags</h1>
        <h2>Tell Us About Your Pup!</h2>
        <form>
          <div>
            <label>What is his/her name?</label>
            <input type="text" name="name"/>
          </div>
          <div>
            <label>What kind of breed?</label>
            <select name="breed">
              <option>Mutt</option>
              <option>Great Dane</option>
              <option>Chihuahua</option>
            </select>
          </div>
          <div>
            <label>Age?</label>
            <input name="age"/>
            <label>Weight?</label>
            <input name="weight"/>
            <label>Gender?</label>
            <input name="gender"/>
          </div>
          <h3>[insert photo stuff here]</h3>
          <Link to="/funform">Next</Link>
        </form>
      </div>
    );
  }
}

export default AddDogForm;
