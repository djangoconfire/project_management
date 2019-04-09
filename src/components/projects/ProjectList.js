import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects, deleteProject}) => {
    return (
        <div className="project_list section">
            {
                projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} deleteProject={deleteProject} key={project.id}/>
                    )
                })
            }
        </div>
    )
}

export default ProjectList