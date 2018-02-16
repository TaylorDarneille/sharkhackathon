import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DogFormTwo extends Component{
	render(){
		return(
		<div className="add-dog-form">
      <div class="form-style-3">
        <form>
          <fieldset>
	          <div id="dropdowns">
		          <label for="treats"><span>What Type of Treats?</span>
		          <select name="treats" class="select-field">
		            <option value="Training Treats">Training Treats</option>
		            <option value="Biscuits & Crunchy Treats">Biscuits & Crunchy Treats</option>
		            <option value="Dental Chews">Dental Chews</option>
		            <option value="Jerky & Meat Treats">Jerky & Meat Treats</option>
		            <option value="Pill Pockets">Pill Pockets</option>
		            <option value="Bully Sticks">Bully Sticks</option>
		            <option value="Puppy Tough Bones">Puppy Tough Bones</option>   
		          </select></label>
		          <br />
			          <label for="nutrition"><span>Nutritional Guidelines</span>
			          <select name="nutrition" class="select-field">
			            <option value="Gluten Free">Gluten Free</option>
			            <option value="Grain Free">Grain Free</option>
			            <option value="Non-GMO">Non-GMO</option>
			            <option value="Raw">Raw</option>
			            <option value="Organic">Organic</option>
			            <option value="Joint Issues">Joint Issues</option>
			            <option value="Chicken-Free">Chicken-Free</option>  
			            <option value="Dairy-Free">Dairy-Free</option>
			            <option value="Lamb-Free">Lamb-Free</option>   
			          </select></label>
			         <br />
			        <label for="goals"><span>Preventative Care</span>
			          <select name="goals" class="select-field">
			            <option value="Bone Development">Bone Development</option>
			            <option value="Brain Development">Brain Development</option>
			            <option value="Heart Healthy">Heart Healthy</option>
			            <option value="Dental Care">Dental Care</option>
			            <option value="Digestive Care">Digestive Care</option>
			          </select></label>
			        <br />
			          <label for="goals"><span>Preventative Care</span>
			          <select name="goals" class="select-field">
			            <option value="Beef">Beef</option>
			            <option value="Chicken">Chicken</option>
			            <option value="Duck">Duck</option>
			            <option value="Fish">Fish</option>
			            <option value="Lamb">Lamb</option>
			            <option value="Pork">Pork</option>
			          </select></label>
	       	 		</div>
          </fieldset>
          <Link to="/cardform">Next</Link> 
          </form>
      </div>
    </div>
		)
	}
}

export default DogFormTwo;