import React, { Component } from 'react';
import styles from './styles.js';

import Zones from './Zones';
import Comments from './Comments';

class Home extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'><Zones /></div>
					<div className='col-md-8'><Comments /></div>
				</div>
			</div>
		)
	}
} // 1:30 Part 2
export default Home;