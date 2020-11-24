import './App.css';
import Header from './components/header/Header';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import Category from './components/category/Category';
import StateProvider from './StateProvider';
import reducer, { initialState } from './reducer';

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to='/'>
        <button className='btn text-decoration-underline'>Go to Home</button>
      </Link>
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/'>
              <Header />
              <Home />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/category'>
              <Category />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </StateProvider >

    </div >

  );
}

export default App;
