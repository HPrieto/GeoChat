import React, { Component } from 'react';
import Zone from '../presentation/Zone.js';
import styles from './styles.js';
import { APIManager } from '../../utils';

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
		let updatedZone = Object.assign({}, this.state.zone)
		console.log('UpdatedZone: ' + JSON.stringify(updatedZone))
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
		APIManager.post('/api/zone', updatedZone, (err, res) => {
			if (err) {
				alert('ERROR: ' + err.message)
				return
			}
			console.log('ZONE CREATED: ' + JSON.stringify(res.result))
			// Add response result to Zones state
			let updatedZones = Object.assign([], this.state.zones)
			updatedZones.push(res.result)
			this.setState({
				zones: updatedZones
			})
		})
	}

	/* lifecycle method called when component shows up on the DOM */
	componentDidMount() {
		/*
			APIManager(route, error, callback)
		*/
		APIManager.get('/api/zone', null, (err, res) => {
			if (err) {
				alert('ERROR: ' + err.message)
				return
			}
			console.log('RES RESULTS: ' + JSON.stringify(res.results))
			this.setState({
				zones: res.results
			})
		})
	}

	render() {
		const zoneStyle = styles.zone;
		const zonesListStyle = zoneStyle.zonesList;
		const zonesList = this.state.zones.map((currentZone, index) => {
			return (
				<li key={index}><Zone currentZone={currentZone}/></li>
			)
		});
		return (
			<div>
				<ol style={zonesListStyle}>{zonesList}</ol>
				<input id='name'    onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Name' /><br />
				<input id='zipCode' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zip Code' /><br />
				<button onClick={this.submitZone.bind(this)} className='btn btn-danger'>Add Zone</button>
			</div>
		)
	}
}
export default Zones;