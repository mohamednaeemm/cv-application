import React, { useState } from 'react';

const TechnicalSkills = () => {
    const [skills, setSkills] = useState([]);
    const [isEditing, setIsEditing] = useState(true);
    const [inputValue, setInputValue] = useState('');

    // Handle input change
    const appendSkill = (skill) => {
        // Remove special characters and capitalize the first letter
        const sanitizedSkill = skill.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().replace(/\b\w/, char => char.toUpperCase());

        // Check for duplicates
        if (!skills.includes(sanitizedSkill) && sanitizedSkill.trim() !== '') {
            setSkills([...skills, sanitizedSkill]);
            setInputValue(''); // Clear the input field
        } else {
            alert('Skill already exists or is empty');
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="section technical-skills">
            <h2>Technical Skills</h2>
            <hr />
            {isEditing ? (
                // Edit Mode
                <>
                    
                    <div className="skill-content">
                        <input
                            type="text"
                            id="skill-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} placeholder='Enter a skill'
                        />
                        <button className="add-skill" onClick={() => appendSkill(inputValue)}>Add a Skill</button>
                    </div>
                    <button className='save-button' onClick={handleSubmit}>Save</button>
                </>
            ) : (
                // Display Mode (Submitted Data)
                <div className="skills-content">
                    <div>
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-item">{skill}{(index !== skills.length - 1 ) && ","}</span>
                    ))}
                    </div>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default TechnicalSkills;