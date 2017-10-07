import React, { Component } from 'react';

// Bring React code to the dom, renders code to dom
import ReactDOM from 'react-dom';

// import components
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<div>
				<Home />
			</div>
		)
	}
}

// Only point where react will hit/interface with the DOM
ReactDOM.render(<App />, document.getElementById('root'));