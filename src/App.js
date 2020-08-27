import React from 'react';

// routers
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products/:id' component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
