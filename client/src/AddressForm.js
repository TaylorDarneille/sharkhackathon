import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddressForm extends Component {
  render() {
    return (
      <div>
          <div className="add-dog-form">
            <div class="form-style-3">
              <form>
              <fieldset>
              <label for="name"><span>Name<span class="required">*</span></span><input type="text" name="name"/></label>
              <label for="field2"><span>Address 1<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
              <label for="field3"><span>Address 2<span class="required">*</span></span><input type="text" class="input-field" name="field3" value=""/></label>
              <label for="field2"><span>City<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
              <label for="field2"><span>State<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
              <label for="field2"><span>Zip<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
              </fieldset>
              <Link to="/cardform">Next</Link> 
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressForm;
