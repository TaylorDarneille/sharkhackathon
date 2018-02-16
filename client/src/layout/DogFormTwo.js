import React, {Component} from 'react';

class DogFormTwo extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		treats = '',
	// 		nutrition = '',
	// 		goals = '',
	// 		flavors = ''
	// 	}
	// }
	render(){
		return(
			<div class="add-dog-form">
				<h2>Great! Now, what does *insert dog name* like?</h2>
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