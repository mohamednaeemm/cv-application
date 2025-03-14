import React, { useState } from 'react';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isEditing, setIsEditing] = useState(true);

    const newProjectTemplate = {
        name: '',
        link: '',
        technologies: '',
        description: '',
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        
        updatedProjects[index] = {
            ...updatedProjects[index],
            [name]: value
        };
        
        setProjects(updatedProjects);
    };

    const addProject = () => {
        setProjects([newProjectTemplate, ...projects]);
    };

    const deleteProject = (index) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        // Filter out empty projects and validate
        const validprojects = projects.filter(project => project.name.trim() !== '');
        setProjects(validprojects);
        setIsEditing(false);
    };

    return (
        <div className="section projects">
            <h2>Projects</h2>
            <hr />
            {isEditing ? (
                <div className="editpro-mode">
                    <button className="add-project-button" onClick={addProject}>
                        Add Project
                    </button>
                    {projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="project-form">
                            <input
                                type="text"
                                name="name"
                                value={project.name}
                                onChange={(e) => handleInputChange(projectIndex, e)}
                                placeholder="Project Name"
                                required
                            />
                            <input
                                type="url"
                                name="link"
                                value={project.link}
                                onChange={(e) => handleInputChange(projectIndex, e)}
                                placeholder="Project Link"
                            />
                            <input
                                type="text"
                                name="technologies"
                                value={project.technologies}
                                onChange={(e) => handleInputChange(projectIndex, e)}
                                placeholder="technologies"
                            />
                            <textarea
                                name="description"
                                value={project.description}
                                onChange={(e) => handleInputChange(projectIndex, e)}
                                placeholder="Project Description"
                            />
                            
                            <button 
                                className="delete-project"
                                onClick={() => deleteProject(projectIndex)}
                            >
                                Delete Project
                            </button>
                        </div>
                    ))}
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            ) : (
                <div className="displayproject-mode">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item"><div className='project-item-content'>
                            <h4>-{project.name}</h4> | 
                            <p><a href={project.link} target='_blank' rel='noreferrer'>live</a></p>
                            </div>
                            <p><strong>Technologies:</strong> {project.technologies}</p>
                            <p><strong>Description:</strong> {project.description}</p>
                        </div>
                    ))}
                    <button 
                        className="edit-button"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects
