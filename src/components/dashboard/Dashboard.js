import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from '../dashboard/Notification'
import { connect } from  'react-redux'
import { deleteProject } from '../../store/actions/projectActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    const { projects } = this.props
    return (
        <div className="dashboard container">
            <div className="row">
                {/* project list down here   */}
                <div className="col s12 m6">
                    <ProjectList projects={projects} deleteProject={this.props.deleteProject} />
                </div>
                {/* Notiifications goes here  */}
                <div className="col s12 m5 offet-m1">
                    <Notification/>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        projects : state.firestore.ordered.projects
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteProject : (id) => dispatch(deleteProject(id))
//     }
// }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects' }
    ])
)(Dashboard)
