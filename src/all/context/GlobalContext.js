import React, { createContext, useState, useReducer } from "react";
import g from '../global'
import combineReducers from './combineReducers'
import reducers from '../reducers/all'
import initialState from './initialState'

export const Context = createContext({});
export const reducer = combineReducers(reducers)

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
};

export const { Consumer } = Context;
