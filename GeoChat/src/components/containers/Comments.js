import React, { Component } from 'react';
import styles from './styles.js';
import Comment from '../presentation/Comment.js';

class Comments extends Component {
	constructor() {
		super()
		this.state = {
			comment: {
				username: '',
				body: ''
			},
			list: [
				{body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
				{body: 'comment 2', username: 'HClint', timestamp: '11:30'},
				{body: 'comment 3', username: 'PRyan' , timestamp: '12:30'},
				{body: 'comment 4', username: 'Bernie', timestamp: '01:30'}
			]
		}
	}

	updateComment(event) {
		console.log('update comment: ' + event.target.value)
		let comment = event.target.value
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['comment'] = comment
		this.setState({
			comment: updatedComment
		})
	}

	updateUsername(event) {
		console.log('update username: ' + event.target.value)

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

	submitComment() {
		console.log('SubmitComment')
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
					<input onChange={this.updateUsername.bind(this)} className='form-control' type='text' placeholder='Username' /><br />
					<input onChange={this.updateComment.bind(this)}  className='form-control' type='text' placeholder='Comment' /><br />
					<button className='btn btn-info' onClick={this.submitComment.bind(this)}>Submit Comment</button>
				</div>
			</div>
		)
	}
}
export default Comments;