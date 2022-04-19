import React, { useReducer } from 'react';

export default (reducer, action, inintialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inintialState);
    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};
