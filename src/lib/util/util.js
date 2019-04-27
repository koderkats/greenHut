const Util = function() {
	let me = {}
	me.mergeComponentStyles = function(props, styleFunc) {
		return {...styleFunc(props), ...props.s};
	}
	return me;
}

export default Util()