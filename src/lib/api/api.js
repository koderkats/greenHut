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
			}, Math.random() * 7000);	
		});
	}

	me.getTaskList = function(id) {
		let taskList = [
			{pid:0, done:false, details:'task 0' },
			{pid:1, done:false, details:'task 1' },
			{pid:2, done:false, details:'task 2' },
			{pid:3, done:false, details:'task 3' }
		]
		// if 	(id === 0) {
		// 	taskList = { id:0, alias:'ann', email:'ann@a.com' }
		// } else if (id === 1) {
		// 	taskList = { id:1, alias:'bob', email:'bob@b.com' }
		// } else if (id === 2) {
		// 	taskList = { id:2, alias:'cat', email:'cat@c.com' }
		// }
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(taskList);
			}, Math.random() * 7000);	
		});
	}


	return me;
}

export default Api()