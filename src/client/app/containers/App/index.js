import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="app-routes">
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;