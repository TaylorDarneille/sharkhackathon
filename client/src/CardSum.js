import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CardSum extends Component{
	render(){
		return(
			<div class="summary">
				<h1>Summary</h1>
				<div>
					<h3>1 Month Free Trial</h3><h4>Free <span class="price">$9.99</span></h4>
					<h3>Total:</h3><h4><span class="price">$0.00</span></h4>
				</div>
			</div>
		)
	}
}

export default CardSum;