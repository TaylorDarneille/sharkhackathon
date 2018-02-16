import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CardForm extends Component{
	render(){
		return(
			<div>
		      <div className="add-dog-form">
		        <div class="form-style-3">
		          <form>
		          <fieldset>
		          <label for="name"><span>Cardholder Name<span class="required">*</span></span><input type="text" name="name"/></label>
		          <label for="field2"><span>Card Number<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
		          <label for="field3"><span>Expiration Date<span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" placeholder="MM/YY" /></label>
		          <label for="field2"><span>CVV<span class="required">*</span></span><input type="number" class="input-field" name="field2" value="" /></label>
		          </fieldset>
		          <Link to="/finish">Next</Link> 
		          </form>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default CardForm;