import React from 'react'
import './project.css';



const Project = () => {
    return (

        <div className="ag-courses_item">

            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                    Deveoped the Fund Landing page for "iradaa Arabia"
                    in :
                </div>

                <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                        2022
                    </span>
                </div>
            </a>

            <a href="#" className="ag-courses-item_link" >
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                    Deveoped & designed the "i-startec" start-up platform
                    in :
                </div>

                <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                        2023
                    </span>
                </div>
            </a>
        </div>



        // const Project = (props) => {
        //     const projects = props.projects;
        //     return (

        //         <div className="projects-card">

        //             {projects.map((project) => (
        //                 <div className='project-card' key={projects.id}>
        //                     <img src={project.image} alt={`${project.title} Image`} className="project-image" />
        //                     <div className='project-text-side'>
        //                         <h1 className="pproject-title">
        //                             {project.title}
        //                         </h1>
        //                         <h4 className="clien-name">
        //                             {project.clien}
        //                         </h4>
        //                         <p className="project-description">
        //                             {project.description}
        //                         </p>
        //                     </div>
        //                 </div>
        //             ))}



        //         </div>


        //     )
        // }
    )
}
export default Project
