import React, { Component } from 'react';
import Zone from '../presentation/Zone.js';
import superagent from 'superagent';
import styles from './styles.js';

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

	/* lifecycle method called when component shows up on the DOM */
	componentDidMount() {
		/* 
			Using superagent library to make a GET request:
				get:   GET request url
				query: any url parameters
				set:   what kind of data we're expecting
				end:   callback function from superagent
		*/
		superagent
		.get('/api/zone')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (err) {
				alert('Error: ' + err)
				return
			}
			// output get request response
			console.log(JSON.stringify(res.body.results))
			let results = res.body.results
			this.setState({
				zones: results
			})
		})
	}

	render() {
		const zoneStyle = styles.zone;
		const zonesListStyle = zoneStyle.zonesList;
		const zonesList = this.state.zones.map((zone, index) => {
			return (
				<li key={index}><Zone currentZone={zone}/></li>
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