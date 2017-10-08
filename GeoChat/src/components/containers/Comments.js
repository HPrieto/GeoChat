import React, { Component } from 'react';
import styles from './styles.js';
import { Comment, CreateComment } from '../presentation';
import { APIManager } from '../../utils';

class Comments extends Component {
	constructor() {
		super()
		this.state = {
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

	/* submit a new comment */
	submitComment(comment) {
		let updatedComment = Object.assign({}, comment)
		APIManager.post('/api/comment', updatedComment, (err, res) => {
			if (err) {
				alert('ERROR: ' + err)
				return
			}
			let updatedList = Object.assign([], this.state.list)
			updatedList.push(res.result)
			this.setState({
				list: updatedList
			})
		})
	}

	/* Lifecycle method call when component is mounted onto DOM */
	componentDidMount() {
		// APIManager(route, error, callback)
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
				<li key={ index }><Comment currentComment={ comment }/></li>
			)
		});
		return (
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={ commentsBox }>
					<ul style={ commentsList }>
						{ commentList }
					</ul>
					<CreateComment onCreate={this.submitComment.bind(this)}/>
				</div>
			</div>
		)
	}
}
export default Comments;