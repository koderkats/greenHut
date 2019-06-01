import g from '../global'

const thisFile = 'api.js'

const Api = function() {
  const thisFunc = 'Api'
  g.func(false, thisFile, thisFunc, arguments);

	let me = {}

	me.getUser = function(id) {
		g.func(thisFile, thisFunc + ':getUser', arguments);
		
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
				g.func(thisFile, thisFunc + ':getUser:resolving', user);
				resolve(user);
			}, Math.random() * 7000);	
		});
	}

	me.getTaskList = function(id) {
		g.func(thisFile, thisFunc + ':getTaskList', arguments);

		let taskList = [
			{pid:0, done:false, details:'task 0' },
			{pid:1, done:false, details:'task 1' },
			{pid:2, done:false, details:'task 2' },
			{pid:3, done:false, details:'task 3' }
		];

		return new Promise((resolve) => {
			setTimeout(() => {
				g.func(thisFile, thisFunc + ':getTaskList:resolving', taskList);
				resolve(taskList);
			}, Math.random() * 5000);	
		});
	}


	return me;
}

export default Api()