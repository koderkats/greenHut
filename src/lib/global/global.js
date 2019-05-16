export function hello() {
	console.log('world');
}

export function which(key, obj, def) {
	function isFunction(x) { return (typeof x === 'function'); }
	function defined(x) { return (typeof x !== 'undefined'); }
	const value = obj[key];
	if (typeof value !== 'undefined') return isFunction(value) ? value() : value;
	if (typeof def !== 'undefined') return isFunction(def) ? def() : def;
	return null;
}
