import React, { Component } from 'react';
import styles from './styles.js';

class Zone extends Component {
	render() {
		const zoneStyle = styles.zone;
		return (
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header}>
					<a style={zoneStyle.name} href="#">{this.props.zone.name}</a>
				</h2>
				<span className="detail">{this.props.zone.zipCode}</span><br />
				<span className="detail">{this.props.zone.numComments} comments</span>
			</div>
		)
	}
}

export default Zone;