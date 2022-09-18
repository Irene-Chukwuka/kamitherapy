import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './navbarComponent';
import HomeComponent from './home';
import ReviewComponent from './reviewComponent';
import LoginComponent from './loginComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
  

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavbarComponent />
        </header>
        <Switch>
          <Route exact path="/">
            <HomeComponent/>
           </Route>
        </Switch>
        <Switch>
          <Route exact path="/reviewComponent">
            <ReviewComponent/>
           </Route>
        </Switch>
        <Switch>
          <Route exact path="/login">
            <LoginComponent/>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
