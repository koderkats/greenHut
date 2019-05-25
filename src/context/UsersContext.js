import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {

  // Initial values are obtained from the props
  const {
    state: initialState,
    children
  } = props;

  // Use State to keep the values
  const [state, setState] = useState(initialState);

  // Make the context object:
  const globalContext = {
    state,
    setState
  };

  // pass the value in provider and return
  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
