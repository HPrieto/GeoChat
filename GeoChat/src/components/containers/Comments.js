import React, { Component } from 'react';
import styles from './styles.js';
import Comment from '../presentation/Comment.js';

class Comments extends Component {
	constructor() {
		super()
		this.state = {
			list: [
				{body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
				{body: 'comment 2', username: 'HClint', timestamp: '11:30'},
				{body: 'comment 3', username: 'PRyan' , timestamp: '12:30'},
				{body: 'comment 4', username: 'Bernie', timestamp: '01:30'}
			]
		}
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
					<input className='form-control' type='text' placeholder='Username' /><br />
					<input className='form-control' type='text' placeholder='Comment' /><br />
					<button className='btn btn-info' onClick={this.submitComment.bind(this)}>Submit Comment</button>
				</div>
			</div>
		)
	}
}
export default Comments;