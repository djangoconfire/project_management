import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter , Switch , Route } from 'react-router-dom'

// Components
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Project from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch> 
              <Route exact path="/" component={Dashboard}/> 
              <Route path="/signin" component={SignIn}/> 
              <Route path="/signup" component={SignUp}/> 
              <Route path="/create" component={Project}/> 
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
