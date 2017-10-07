import React, { Component } from 'react';
import Zone from '../presentation/Zone.js';

class Zones extends Component {
	constructor() {
		super();
		this.state = {
			zones: [
				{name: 'Zone 1', zipCode:'10012', numComments:9},
				{name: 'Zone 2', zipCode:'10013', numComments:3},
				{name: 'Zone 3', zipCode:'10014', numComments:12},
				{name: 'Zone 4', zipCode:'10015', numComments:13},
				{name: 'Zone 5', zipCode:'10016', numComments:1}
			]
		}
	}
	render() {
		const zonesList = this.state.zones.map((zone, index) => {
			return (
				<li key={index}><Zone zone={zone}/></li>
			)
		});
		return (
			<div>
				<ol>{zonesList}</ol>
			</div>
		)
	}
}
export default Zones;