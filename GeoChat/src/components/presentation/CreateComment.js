import React, { Component } from 'react';
import styles from './styles.js';

class CreateComment extends Component {
	constructor() {
		super()
		this.state = {
			comment: {
				username: '',
				body: ''
			}
		}
	}

	/* Update component state onChange */
	updateComment(event) {
		const updatedComment = Object.assign({}, this.state.comment)
		updatedComment[event.target.id] = event.target.value
		this.setState({
			comment: updatedComment
		})
	}

	/* Send data to container component */
	submitComment() {
		this.props.onCreate(this.state.comment)
	}

	render() {
		return (
			<div>
				<input onChange={this.updateComment.bind(this)} id='username' className='form-control' type='text' placeholder='Username'  /><br />
				<input onChange={this.updateComment.bind(this)} id='body' className='form-control' type='text' placeholder='Comment'   /><br />
				<button onClick={this.submitComment.bind(this)} className='btn btn-info'>Submit Comment</button>
			</div>
		)
	}
}
export default CreateComment;