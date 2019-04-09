import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project_summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by RituRaj</p>
                <p className="grey-text">Posted on 9 April,  19</p>
            </div>
        </div>
    )
}

export default ProjectSummary