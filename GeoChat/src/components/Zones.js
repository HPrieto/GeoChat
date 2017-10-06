import React, { Component } from 'react';

// Zone component
import Zone from './Zone.js';

class Zones extends Component {
	render() {
		return (
			<div>
				<ol>
					<li><Zone name='Zone 1' zipCode="10012" numComments={7}/></li>
					<li><Zone name='Zone 2' zipCode="10013"/></li>
					<li><Zone name='Zone 3' zipCode="10014"/></li>
					<li><Zone name='Zone 4' zipCode="10015"/></li>
					<li><Zone name='Zone 5' zipCode="10016"/></li>
				</ol>
			</div>
		)
	}
}
export default Zones;