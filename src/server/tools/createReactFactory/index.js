import { createFactory } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Create a React factory for server side rendering using a React container
 * as a parameter to set it up.
 * @param  {React.Component} App - React container component.
 * @return {Function} - The factory.
 */
const createReactFactory = function (App) {

  const AppFactory = createFactory(App);

  return function (props) {
    const AppInstance = AppFactory(props);
    return renderToStaticMarkup(AppInstance);
  };
};

export default createReactFactory;
