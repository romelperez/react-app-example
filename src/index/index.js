import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h2>Index Application</h2>
    <p>This is the most amazing application ever!</p>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
