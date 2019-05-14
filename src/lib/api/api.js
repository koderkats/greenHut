const Api = function() {
	let me = {}

	me.getUser = function(id) {
		let user = {}
		if 	(id === 0) {
			user = { id:0, alias:'ann', email:'ann@a.com' }
		} else if (id === 1) {
			user = { id:1, alias:'bob', email:'bob@b.com' }
		} else if (id === 2) {
			user = { id:2, alias:'cat', email:'cat@c.com' }
		}

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(user);
			}, Math.random() * 5000);	
		});

	}

	return me;
}

export default Api()