import React, { Component } from 'react';
import styles from './styles.js';
import Comment from '../presentation/Comment.js';
import { APIManager } from '../../utils';

class Comments extends Component {
	constructor() {
		super()
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: ''
			},
			list: []
		}
	}

	/* Update comment body state */
	updateBody(event) {
		let body = event.target.value
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['body'] = body
		this.setState({
			comment: updatedComment
		})
	}

	/* Update comment username state */
	updateUsername(event) {
		// username from input field
		let username = event.target.value
		// Create copy of comment from state before updating
		let updatedComment = Object.assign({}, this.state.comment)
		// Update copied state
		updatedComment['username'] = username
		// Update state
		this.setState({
			comment: updatedComment
		})
	}

	/* Update comment timestamp state */
	updateTimestamp(event) {
		let timestamp = event.target.value;
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['timestamp'] = timestamp
		this.setState({
			comment: updatedComment
		})
	}

	/* submit a new comment */
	submitComment() {
		// Copy list array
		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.comment)
		this.setState({
			list: updatedList
		})
	}

	/* Lifecycle method call when component is mounted onto DOM */
	componentDidMount() {
		/*
			APIManager(route, error, callback)
		*/
		APIManager.get('/api/comment', null, (err, res) => {
			if (err) {
				alert('ERROR: ' + err.message)
				return
			}
			this.setState({
				list: res.results
			})
		})
	}

	render() {
		const commentsBox  = styles.comment.commentsBox;
		const commentsList = styles.comment.commentsList;
		const commentList  = this.state.list.map((comment, index) => {
			return (
				<li key={index}><Comment currentComment={comment}/></li>
			)
		});
		return (
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={commentsBox}>
					<ul style={commentsList}>
						{ commentList }
					</ul>
					<input onChange={this.updateUsername.bind(this)}  className='form-control' type='text' placeholder='Username'  /><br />
					<input onChange={this.updateBody.bind(this)}      className='form-control' type='text' placeholder='Comment'   /><br />
					<input onChange={this.updateTimestamp.bind(this)} className='form-control' type='text' placeholder='Timestamp' /><br />
					<button className='btn btn-info' onClick={this.submitComment.bind(this)}>Submit Comment</button>
				</div>
			</div>
		)
	}
}
export default Comments;