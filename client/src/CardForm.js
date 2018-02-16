import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CardForm extends Component{
	render(){
		return(
			<div class="add-dog-form">
				<h2>This trial is free!</h2>
				<p>But we will need your card on file in case you want more treats!</p>
				<form>
					<label>CC Information</label>
					<input name="name"  placeholder="Cardholder Name" />
					<input name="number" placeholder="Card Number" />
					<input name="expiration" placeholder="Expiration Date" />
					<input name="cvv" placeholder="CVV" />
					<label>Billing Address same as Shipping</label>
					<input type="checkbox" />
          			<Link to="/cardsum">Next</Link>
				</form>
			</div>
		)
	}
}

export default CardForm;