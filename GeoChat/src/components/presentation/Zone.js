import React, { Component } from 'react';
import styles from './styles.js';

class Zone extends Component {

	zoneSelected(event) {
		event.preventDefault()
		this.props.onSelect(this.props.id)
	}

	render() {
		// console.log('ZipCodes: ' + JSON.stringify(this.props))
		const zoneStyle = styles.zone;
		const zipCodes = this.props.currentZone.zipCodes[0]
		const title = (this.props.isSelected) ? <a style={zoneStyle.title} href='#'>{this.props.currentZone.name}</a> : <a href='#'>{this.props.currentZone.name}</a>
		return (
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header} onClick={this.zoneSelected.bind(this)}>
					{title}
				</h2>
				<span className="detail">{zipCodes}</span><br />
				<span className="detail">{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
}
export default Zone;