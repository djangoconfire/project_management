import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


const ProjectList = ({ projects, deleteProject}) => {
    return (
        <div className="project_list section">
            {
                projects && projects.map(project => {
                    return (
                        <Link to={'/project/' + project.id} key={project.id}>
                            <ProjectSummary project={project} deleteProject={deleteProject}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectList