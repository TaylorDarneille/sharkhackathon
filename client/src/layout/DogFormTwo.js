import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DogFormTwo extends Component{
	render(){
		return(
			<div class="add-dog-form">
				<h1>Great! Now, what does *insert dog name* like?</h1>
				<form>
					<label>Treats</label>
					<input name="treats"  placeholder="Type of treats" />
					<label>Nutrition</label>
					<input name="nutrition" placeholder="Nutritional options" />
					<label>Health Goals</label>
					<input name="goals" placeholder="Health goals" />
					<label>Flavors</label>
					<input name="flavors" placeholder="Favorite flavors" />
          			<Link to="/addressform">Next</Link>
				</form>
			</div>
		)
	}
}

export default DogFormTwo;