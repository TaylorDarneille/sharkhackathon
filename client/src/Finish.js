import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Finish extends Component{
	render(){
		return(
			<div class="summary">
				<h2>Congrats!</h2>
				<p>Expect a special treat in...</p>
				<h3>3 Days!</h3>
				<div id="pic">
               	</div>
			</div>
		)
	}
}

export default Finish;