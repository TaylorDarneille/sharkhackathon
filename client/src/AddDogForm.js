import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cloud from './Cloud';

class AddDogForm extends Component {

  render() {
    return (
      <div className="add-dog-form">
        <div class="form-style-3">
          <form>
            <fieldset>{/*<legend>Personal</legend>*/}
              <label for="name">
                <span className="form-field">What is his/her name?</span>
                <input type="text" name="name"/>
              </label>
              <label for="age">
                <span className="form-field">Age?<span class="required">*</span></span>
                <input type="number" name="age"/>
              </label>
{/*              <label for="field2">
                <span className="form-field">
                  Age?
                  <span class="required">*</span>
                </span>
                <input type="text" name="field2"/>
              </label>*/}
              <label for="field3">
                <span className="form-field">
                  Weight?
                  <span class="required">*</span>
                </span>
                <select name="field3" class="select-field">
                  <option value="0-8">0-8 lbs</option>
                  <option value="9-15">9-15 lbs</option>
                  <option value="16-25">16-25 lbs</option>
                  <option value="26-40">26-40 lbs</option>
                  <option value="41-60">41-60 lbs</option>
                  <option value="61-120">61-120 lbs</option>
                </select>
              </label>
              <label for="field4">
                <span className="form-field">
                  Gender
                </span>
                <select name="field4" class="select-field">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non-Binary">Non-Binary</option>
                </select>
              </label>
              <label for="field5">
                <span className="form-field">Breed</span>
                <select name="field5" class="select-field">
                  <option value="Mutt">Mutt</option>
                  <option value="Great Dane">Great Dane</option>
                  <option value="Chihuahua">Chihuahua</option>
                </select>
              </label>
            </fieldset>
          </form>
      </div>
      <Cloud />
    <Link to="/funform">Next</Link>       
    </div>
    );
  }
}

export default AddDogForm;
