import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter , Switch , Route } from 'react-router-dom'

// Components
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Project from './components/projects/CreateProject'
import ProjectDetail from './components/projects/ProjectDetail'

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
              <Route path="/project:id" component={ProjectDetail}/> 
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
