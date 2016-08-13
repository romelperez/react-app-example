import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const App = () => (
  <MuiThemeProvider>
    <div>
      <h2>Index Application</h2>
      <CircularProgress size={2} />
      <p>This is the most amazing application ever!</p>
      <RaisedButton>My God!</RaisedButton>
      <p>This is the most amazing application ever!</p>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
