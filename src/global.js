import React, {useContext} from 'react'

export default (function Global() {

	let me = {}

	me.isDev = true
	me.isProd = !me.isDev
	me.isDebug = me.isDev
	me.logFunc = true
	me.logLog = true
	me.logDir = true
 
	// me.state = {
	// 	app: { width:0, height:0, widthHeigh:'', },
	// 	page: { activePage:'default', activeTab:'default', },
	// 	user: { id:4, alias:'user', email:'user@u.com', },
	// 	dashboardBridge: { activeTab:'default', },
	// 	dashboard: { height:100, }
	// 	// dashboardBridge: { activeTab:'updates' },
	// }

	me.state = {
		app: { width:0, height:0, widthHeigh:'', },
		appHeader: { height:0, },
		dashboardBridge: { height:0, activeTab:'tasks'},
		page: { activePage:'default', activeTab:'default', },
		user: { id:4, alias:'user', email:'user@u.com', },
		dashboardContent: { height:0, }
	}

	// me.GlobalContext = React.createContext(me.state);

	// me.GlobalContext = React.createContext(me.state);
	// const {Provider: ColorProvider, Consumer: ColorConsumer} = React.createContext();

	// me.StateComp = function(props) {
	// 	const [state, setState] = useContext(me.GlobalContext);
	// 	return (
	// 		<div>{`${JSON.stringify(state)}`}</div>
	// 	);
	// }

	me.shortTime = function() {
		return Math.floor(new Date()).toString().split('').slice(-5).join('');
	}

	me.func = function(file, func, msg) {
		if (me.isDebug && me.logFunc && arguments[0]!=false){
			const {color, weight} = {color:'blue', weight: 'bold'}
			console.group(`${func}`);
			console.groupEnd();
			console.log(`%c    ${me.shortTime()} [FUNC] ${file} ${func} `, `color: ${color}; font-weight: ${weight};`, msg ? msg : '');
		}
	}
	
	me.log = function(file, func, msg) {
		if (me.isDebug && me.logLog, arguments[0]!=false){
			const {color, weight} = {color:'green', weight: 'none'}
			console.log(`%c        ${me.shortTime()} [LOG ] ${file} ${func} `, `color: ${color}; font-weight: ${weight};`, msg ? msg : '');
		}
	}
	
	me.dir = function(file, func, obj, msg) {
		if (me.isDebug && me.logDir, arguments[0]!=false){
			const {color, weight} = {color:'purple', weight: 'bold'}
			console.log(`%c        ${me.shortTime()} [DIR ] ${file} ${func} %c ${msg ? msg : ''}`, `color: ${color}; font-weight: ${weight};`, `color:fuchsia; font-weight:none`);
			console.dir(obj);
		}
	}

	me.toUpperCase = function(s, position) {
		if (position === 'first') return s.charAt(0).toUpperCase() + s.substring(1);
	}

	me.cn = function(prefix) {
		return function(classNames) {
			return classNames.split(' ').map( function(item){return `${prefix} ${item} ${prefix}__${item}`;} ).join(' ');
		}
	}

	me.style = function(props, styleFunc, thisFunc) {
		return {...styleFunc(props), ...props.s};
	}
	me.styler = function(componentStyle, state, prefix) {	
		return componentStyle(state, prefix).split('}').map(function(line){
			const thisClass = line.split('{')[0] ? line.split('{')[0].trim() : ''
			const thisStyles = line.split('{')[1] ? line.split('{')[1].trim() : ''
			if (thisClass[0] === '.') {
				return `.${prefix}__${thisClass[0] !== '.' ? thisClass : thisClass.split('').slice(1).join('')} { ${thisStyles} }\n`
			} else {
				return `${thisClass} { ${thisStyles} }\n`
			}
		}).slice(0,-1).join('');
	}
	

	me.themeStyle = function(state) {
		return JSON.stringify(state);
	}

	me.which = which;
	me.switch = which;
	return me;
})();

export function which(key, obj, def) {
	function isFunction(x) { return (typeof x === 'function'); }
	function defined(x) { return (typeof x !== 'undefined'); }
	const value = obj[key];
	if (typeof value !== 'undefined') return isFunction(value) ? value() : value;
	if (typeof def !== 'undefined') return isFunction(def) ? def() : def;
	return null;
}
