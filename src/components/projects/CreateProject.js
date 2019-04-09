import React, { Component } from 'react'

class Project extends Component {
    state = {
        title : '',
        content : '',
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

  render() {
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

export default Project
