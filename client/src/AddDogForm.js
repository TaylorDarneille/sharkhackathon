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
        <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
        <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
        <label for="field4"><span>Subject</span><select name="field4" class="select-field">
        <option value="Appointment">Appointment</option>
        <option value="Interview">Interview</option>
        <option value="Regarding a post">Regarding a post</option>
        </select></label>
        </fieldset>
        <fieldset><legend>Message</legend>
        <label for="field6"><span>Message <span class="required">*</span></span><textarea name="field6" class="textarea-field"></textarea></label>
        <label><span>&nbsp;</span><input type="submit" value="Submit" /></label>
        </fieldset>
        </form>
      </div>


      <div>
        <h1>Tell Us About Your Pup!</h1>
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

    </div>
    );
  }
}

export default AddDogForm;
