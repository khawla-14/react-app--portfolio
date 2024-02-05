import React from 'react'
import './project.css';


const Project = (props) => {
    const projects = props.projects;
    return (

        <div className="projects-card">

            {projects.map((project) => (
                <div className='project-card' key={projects.id}>
                    <img src={project.image} alt={`${project.title} Image`} className="project-image" />
                    <div className='project-text-side'>
                        <h1 className="pproject-title">
                            {project.title}
                        </h1>
                        <h4 className="clien-name">
                            {project.clien}
                        </h4>
                        <p className="project-description">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}



        </div>


    )
}

export default Project
