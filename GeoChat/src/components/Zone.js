import React, { Component } from 'react';

class Zone extends Component {
	render() {
		return (
			<div>
				<h2><a href="#">{this.props.name}</a></h2>
				<span>{this.props.zipCode}</span><br />
				<span>10 comments</span>
			</div>
		)
	}
}
export default Zone;