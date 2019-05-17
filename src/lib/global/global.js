export const isDev = true
export const isDebug = isDev
const logFunc = true
const logLog = true
const logDir = true

export function func(file, func, msg) {
  if (isDebug && logFunc){
		console.log('[func]', file, func, msg ? msg : '');
	}
}

export function log(file, func, msg) {
  if (isDebug && logLog){
		console.log('[log]', file, func, msg);
	}
}

export function dir(file, func, obj, msg) {
  if (isDebug && logDir){
		console.log('[dir]', file, func, msg ? msg + ' DIR:' : 'DIR:');
		console.dir(obj);
	}
}

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

