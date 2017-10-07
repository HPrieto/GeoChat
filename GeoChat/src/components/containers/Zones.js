import React, { Component } from 'react';
import Zone from '../presentation/Zone.js';

class Zones extends Component {
	constructor() {
		super();
		this.state = {
			zone: {
				name: '',
				zipCode: ''
			},
			zones: []
		}
	}

	/* onChange listener updates zone name and/or zipCode */
	updateZone(event) {
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[event.target.id] = event.target.value
		this.setState({
			zone: updatedZone
		})
	}

	/* onClick listener that adds new zone onto zones */
	submitZone() {
		let updatedZones = Object.assign([], this.state.zones)
		updatedZones.push(this.state.zone)
		this.setState({
			zones: updatedZones
		})
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
				<input id='name'    onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Name' /><br />
				<input id='zipCode' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zip Code' /><br />
				<button onClick={this.submitZone.bind(this)} className='btn btn-danger'>Add Zone</button>
			</div>
		)
	}
}
export default Zones;