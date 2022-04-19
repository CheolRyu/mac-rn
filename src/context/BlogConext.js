import React from 'react';

const BlogContext = React.createContext(); // a custom component that will accept data as children so that we can pass it to many components.

export const BlogProvider = ({ children }) => {
  {
    children;
  }
  return <BlogContext.Provider />;
};
