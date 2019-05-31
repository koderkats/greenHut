import g from '../../global'

const thisFile = 'util.js'

const Util = function() {
  const thisFunc = 'Util'
  g.func(false, thisFile, thisFunc, arguments);

	let me = {}
	me.hello = function(props) {
		g.func(false, thisFile, thisFunc + ':hello', arguments);
		console.log('world');
	}
	return me;
}

export default Util()
