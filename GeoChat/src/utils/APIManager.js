import superagent from 'superagent';

/* Export HTTP methods */
export default {
	/* HTTP GET method */
	get: (url, params, callback) => {
		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (err) {
				callback(err, null);
				return
			}
			// Be considerate of API failures
			const confirmation = res.body.confirmation
			// Check for successful response but failed api
			if (confirmation != 'success') {
				// Create an error object
				callback({message: response.body.message}, null);
				return
			}
			// output get request response
			callback(null, res.body);
		})
	},
	/* HTTP POST method */
	post: () => {

	},
	/* HTTP PUT method */
	put: () => {

	},
	/* HTTP DELETE method */
	delete: () => {

	}
}