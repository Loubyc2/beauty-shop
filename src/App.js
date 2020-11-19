import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div >

  );
}

export default App;
