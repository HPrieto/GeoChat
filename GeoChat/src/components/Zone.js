import React, { Component } from 'react';

class Zone extends Component {
	render() {
		return (
			<div style={{padding: 15, background: '#E5ECF0', marginTop: 10, borderRadius: 0}}>
				<h2 style={{marginBottom: 5}}>
					<a style={{textDecoration: 'none', color: 'red'}} href="#">{this.props.zone.name}</a>
				</h2>
				<span>{this.props.zone.zipCode}</span><br />
				<span>{this.props.zone.numComments} comments</span>
			</div>
		)
	}
}
export default Zone;