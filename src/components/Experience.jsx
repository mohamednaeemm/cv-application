import React, { useState } from 'react';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [isEditing, setIsEditing] = useState(true);

    const newExperienceTemplate = {
        companyName: '',
        location: '',
        startYear: '',
        endYear: '',
        isPresent: false,
        achievements: ['']
    };

    const handleInputChange = (index, e, achIndex) => {
        const { name, value, type, checked } = e.target;
        const updatedExperiences = [...experiences];
        
        if (name === 'achievements') {
            updatedExperiences[index].achievements[achIndex] = value;
        } else {
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                [name]: type === 'checkbox' ? checked : value,
                ...(name === 'isPresent' && checked ? { endYear: 'Present' } : {}),
                ...(name === 'endYear' && value === '' ? { isPresent: true } : {})
            };
        }
        setExperiences(updatedExperiences);
    };

    const addAchievement = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].achievements.push('');
        setExperiences(updatedExperiences);
    };

    const removeAchievement = (expIndex, achIndex) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[expIndex].achievements = 
            updatedExperiences[expIndex].achievements.filter((_, i) => i !== achIndex);
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        setExperiences([newExperienceTemplate, ...experiences]);
    };

    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        // Filter out empty experiences and validate
        const validExperiences = experiences.filter(exp => exp.companyName.trim() !== '');
        setExperiences(validExperiences);
        setIsEditing(false);
    };

    return (
        <div className="section experience">
            <h2>Work Experience</h2>
            <hr />
            {isEditing ? (
                <div className="editexp-mode">
                    <button className="add-experience-button" onClick={addExperience}>
                        Add Experience
                    </button>
                    {experiences.map((exp, expIndex) => (
                        <div key={expIndex} className="experience-form">
                            <input
                                type="text"
                                name="companyName"
                                value={exp.companyName}
                                onChange={(e) => handleInputChange(expIndex, e)}
                                placeholder="Company Name"
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                value={exp.location}
                                onChange={(e) => handleInputChange(expIndex, e)}
                                placeholder="Location"
                            />
                            <input
                                type="number"
                                name="startYear"
                                value={exp.startYear}
                                onChange={(e) => handleInputChange(expIndex, e)}
                                placeholder="Start Year"
                                min="1900"
                                max={new Date().getFullYear()}
                            />
                            <input
                                type="text"
                                name="endYear"
                                value={exp.isPresent ? 'Present' : exp.endYear}
                                onChange={(e) => handleInputChange(expIndex, e)}
                                placeholder="End Year (or leave blank for Present)"
                                disabled={exp.isPresent}
                            />
                            <label className="present-checkbox">
                                <input
                                    type="checkbox"
                                    name="isPresent"
                                    checked={exp.isPresent}
                                    onChange={(e) => handleInputChange(expIndex, e)}
                                />
                                Till Now
                            </label>
                            {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="achievement-item">
                                    <input
                                        type="text"
                                        name="achievements"
                                        value={achievement}
                                        onChange={(e) => handleInputChange(expIndex, e, achIndex)}
                                        placeholder="Achievement"
                                    />
                                    <span 
                                        className="remove-achievement"
                                        onClick={() => removeAchievement(expIndex, achIndex)}
                                    >
                                        ×
                                    </span>
                                </div>
                            ))}
                            <button 
                                className="add-achievement"
                                onClick={() => addAchievement(expIndex)}
                            >
                                Add Achievement
                            </button>
                            <button 
                                className="delete-experience"
                                onClick={() => deleteExperience(expIndex)}
                            >
                                Delete Experience
                            </button>
                        </div>
                    ))}
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            ) : (
                <div className="displayexp-mode">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item"><div className='experience-item-content'><div>
                            <h3>-{exp.companyName.trim()},</h3>
                            <p>{exp.location}</p>
                            </div>
                            <div>
                            <p>{exp.startYear} - {exp.isPresent ? 'Present' : exp.endYear}</p>
                            </div>
                            </div>
                            <ul>
                                {exp.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
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

export default Experience;