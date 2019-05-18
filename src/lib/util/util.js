import g, { which } from '../../global'

const thisFile = 'util.js'

const Util = function() {
  const thisFunc = 'Util'
  g.func(false, thisFile, thisFunc, arguments);

	let me = {}
	me.mergeComponentStyles = function(props, styleFunc) {
		g.func(false, thisFile, thisFunc + ':mergeComponentsStyles', arguments);

		return {...styleFunc(props), ...props.s};
	}
	return me;
}

export default Util()
