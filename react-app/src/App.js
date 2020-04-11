import React from 'react';
import routes from './routes'
import {
  BrowserRouter as Router,
  Route
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
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
          />
        ))
      }
    </Router>
  );
}

export default App;
