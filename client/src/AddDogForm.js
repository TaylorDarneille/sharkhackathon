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
          <label for="name"><span>What is his/her name?</span><input type="text" name="name"/></label>
          <label for="field2"><span>Age? <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
          <label for="field3"><span>Weight?<span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
          <label for="field4"><span>Gender</span>
          <select name="field4" class="select-field">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
          </select></label>
          <label for="field4"><span>Breed</span>
          <select name="field4" class="select-field">
            <option value="Mutt">Mutt</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Chihuahua">Chihuahua</option>
          </select></label>
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
