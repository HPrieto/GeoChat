import superagent from 'superagent';

/* Export HTTP methods */
export default {
	/* HTTP GET method */
	get: (url, params, callback) => {
		/* 
			Using superagent library to make a GET request:
				get:   GET request url
				query: any url parameters
				set:   what kind of data we're expecting
				end:   callback function from superagent
		*/
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
				callback({message: res.body.message}, null);
				return
			}
			// output get request response
			callback(null, res.body);
		})
	},
	/* HTTP POST method */
	post: (url, body, callback) => {
		/*
			Using superagent library to make a POST request:
				post: POST request url
				send: sending the package to the server
				set:  what kind of data we're expecting
				end:  callback function from superagent
		*/
		superagent
		.post(url)
		.send(body)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (err) {
				callback(err, null)
				return
			}
			const confirmation = res.body.confirmation
			if (confirmation != 'success') {
				callback({message: res.body.message}, null)
				return
			}
			callback(null, res.body)
		})
	},
	/* HTTP PUT method */
	put: () => {

	},
	/* HTTP DELETE method */
	delete: () => {

	}
}