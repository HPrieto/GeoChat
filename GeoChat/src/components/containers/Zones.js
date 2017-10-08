import React, { Component } from 'react';
import styles from './styles.js';
import { Zone, CreateZone } from '../presentation';
import { APIManager } from '../../utils';

class Zones extends Component {
	constructor() {
		super();
		this.state = {
			zones: []
		}
	}

	/* onClick listener that adds new zone onto zones */
	submitZone(zone) {
		APIManager.post('/api/zone', zone, (err, res) => {
			if (err) {
				alert('ERROR: ' + err.message)
				return
			}
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
		// APIManager(route, error, callback) 
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
				<CreateZone onCreate={this.submitZone.bind(this)}/>
			</div>
		)
	}
}
export default Zones;