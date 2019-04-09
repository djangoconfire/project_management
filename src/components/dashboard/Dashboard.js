import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from  'react-redux'
import { deleteProject } from '../../store/actions/projectActions'

class Dashboard extends Component {
  render() {
    const { projects } = this.props.projects
    return (
        <div className="dashboard container">
            <div className="row">
                {/* project goes here  */}
                <div className="col s12 m6">
                    <ProjectList projects={projects} deleteProject={this.props.deleteProject} />
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

const mapStateToProps = (state) => {
    return {
        projects : state.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject : (id) => dispatch(deleteProject(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
