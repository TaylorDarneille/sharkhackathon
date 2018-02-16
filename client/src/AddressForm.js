import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddressForm extends Component {
  render() {
    return (
      <div className="add-dog-form">
        <h2>Where should we send it?</h2>
        <form>
          <div>
            <label>Address</label>
            <input type="text" name="address-name" placeholder="Your Name"/>
            <input type="text" name="street-address-1" placeholder="Address1"/>
            <input type="text" name="street-address-2" placeholder="Address2"/>
            <input type="text" name="city" placeholder="City/Town"/>
            <input type="text" name="state" placeholder="State"/>
            <input type="text" name="zip" placeholder="Zip Code"/>
          </div>
          <Link to="/cardform">Next</Link>
        </form>
      </div>
    );
  }
}

export default AddressForm;
