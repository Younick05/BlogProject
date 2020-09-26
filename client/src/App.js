import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './containers/Home';
import Header from './components/Headers';
import Hero from './components/Hero';
// eslint-disable-next-line
import{BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import Post from './containers/Post';
import Health from './containers/Health';
import Admindashboard from './containers/Admin';
import Login from './components/Login';
import Logout from './components/logoutpannel';
import Admintest from './components/admintest';
import Form from './components/Form';
import AddTutorial from './components/addTutorial';
import Tutorial from './components/Tutorial';
import TutorialsList from './components/TutorialList';
import Vigyapan from './containers/Vigyapan';


function App() {
  return (
   <Router>
      <div className="App">
        <Header></Header>
        <Hero></Hero>

        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/postmessage"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/postmessage"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/postmessage/:id" component={Tutorial} />
        </Switch>
      </div>

        <Route path="/" exact component={Home}/>
        <Route path="/health/:postId" component={Health}/>
        <Route path="/post/:postId" component={Post}/>
        <Route path="/admin" component={Admindashboard}/> 
        <Route path="/logintoadmin" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/alluser" component={Admintest}/>
        <Route path="/add-details" component={Form}/>
        <Route path="vigyapan" component={Vigyapan}></Route>
      </div>
   </Router>
  );
}

export default App;
