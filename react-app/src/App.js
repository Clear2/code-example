import React from 'react';
import routes from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      {
        routes.map((route, i) => (
          <Route
            key={route.path}
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes}></route.component>
            )}
          />
        ))
      }
    </Router>
  );
}

export default App;
