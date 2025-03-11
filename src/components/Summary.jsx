import React, { useState } from 'react'

const Summary = () => {
    
  const [summary, setSummary] = useState("");

  const [isEditing, setIsEditing] = useState(true);

  // Handle input change
  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section summary">
      {isEditing ? (
        // Edit Mode
        <>
            <textarea
            value={summary}
            onChange={handleChange}
            placeholder="Enter a summary"
            ></textarea>
            <button className='save-button' onClick={handleSubmit}>Save</button>
        </>
          
      ) : (
        // Display Mode (Submitted Data)
        <div className="summary-content">
                <p>
                    {summary }
                </p>
                <hr />
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit
                </button>
        </div>
      )}
    </div>
  );
}

export default Summary
