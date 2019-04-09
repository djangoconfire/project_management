import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class Project extends Component {
    state = {
        title : '',
        content : '',
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

  render() {
      console.log(this.props)
    return (
      <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
            <div className="input-field">
                <label htmlFor="email">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Content</label>
                <input type="text" id="content" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(() => {} ,mapDispatchToProps)(Project)
