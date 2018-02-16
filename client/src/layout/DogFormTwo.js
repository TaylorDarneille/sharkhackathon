import React, {Component} from 'react';

class DogFormTwo extends Component{
	render(){
		return(
			<div class="add-dog-form">
				<h1>Great! Now, what does *insert dog name* like?</h1>
				<form>
					<input name="treats"  placeholder="Type of treats" />
					<input name="nutrition" placeholder="Nutritional options" />
					<input name="goals" placeholder="Health goals" />
					<input name="flavors" placeholder="Favorite flavors" />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default DogFormTwo;