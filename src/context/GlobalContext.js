import React, { createContext, useState, useReducer } from "react";
import g from '../global'
import combineReducers from './combineReducers'

export const Context = createContext({});

const counterReducer = function(state, action) {
  return g.which(action.type, {
    'COUNTER_DECREMENT': Object.assign({}, state, {
      count: state.count - 1,
    }),
    'COUNTER_INCREMENT': Object.assign({}, state, {
      count: state.count + 1,
    }),
  }, state);
}


const debugReducer = function(state, action) {
  return g.which(action.type, {
    'DEBUG_TOGGLE_MAXIMIZED': Object.assign({}, state, {
      isMaximized: !state.isMaximized,
    })
  }, state);  
}

export const reducer = combineReducers({
  counter: counterReducer,
  debug: debugReducer,
})

  // switch (action.type) {
  //   case 'TOOGLE_MAXIMIZED':
  //     // console.log('REDUCERERERER', state);
  //     return state;
  //     // return Object.assign({}, state, {
  //     //   debug: {
  //     //     ...state.debug,
  //     //     maximized: !state.debug.maximized,
  //     //   }
  //     // });
  //   default:
  //     throw new Error();
  // }



export const Provider = props => {

  // Initial values are obtained from the props
  // const {
  //   state: initialState,
  //   children
  // } = props;

  // Use State to keep the values

  // const [state, dispatch] = useReducer(reducer, {
	// 	debug: { maximized:true },
	// 	app: { width:0, height:0, widthHeigh:'', },
	// 	appHeader: { height:0, },
	// 	dashboardBridge: { height:0, activeTab:'tasks'},
	// 	page: { activePage:'default', activeTab:'default', },
	// 	user: { id:4, alias:'user', email:'user@u.com', },
	// 	dashboardContent: { height:0, },
	// });


  const [state, dispatch] = useReducer(reducer, {
    counter: {
      count:11,
    },
    debug: {
      isMaximized:true,
    },
  });

  // pass the value in provider and return
  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
};

export const { Consumer } = Context;
