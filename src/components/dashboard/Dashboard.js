import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'

export class Dashboard extends Component {
    state = {
        projects : [
            {id : 1 , title : "Fill Rate Intelligence" , content : 'blah blah blah'},
            {id : 2 , title : "Fleet Health Intelligence" , content : 'blah blah blah'},
            {id : 3 , title : "Asset Health Intelligence" , content : 'blah blah blah'}
        ]
    }
  render() {
    return (
        <div className="dashboard container">
            <div className="row">
                {/* project goes here  */}
                <div className="col s12 m6">
                    <ProjectList projects={this.state.projects}/>
                </div>
                {/* Notiifications goes here  */}
                <div className="col s12 m5 offet-m1">
                    Notifications here ..
                </div>
            </div>
        </div>
    )
  }
}

export default Dashboard
