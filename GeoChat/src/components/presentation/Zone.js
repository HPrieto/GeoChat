import React, { Component } from 'react';
import styles from './styles.js';

class Zone extends Component {
	render() {
		// console.log('ZipCodes: ' + JSON.stringify(this.props))
		const zoneStyle = styles.zone;
		const zipCodes = this.props.currentZone.zipCodes[0]
		return (
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header}>
					<a style={zoneStyle.name} href="#">{this.props.currentZone.name}</a>
				</h2>
				<span className="detail">{zipCodes}</span><br />
				<span className="detail">{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
}

export default Zone;