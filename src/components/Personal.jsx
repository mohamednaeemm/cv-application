import React, { useState } from "react";

const Personal = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section personal">
      {isEditing ? (
        // Form Mode
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn:</label>
            <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="github">GitHub:</label>
            <input type="url" id="github" name="github" value={formData.github} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="portfolio">Portfolio:</label>
            <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        // Display Mode (Submitted Data)
        <div className="submitted-data">
            <div>
                <p>
                    <strong>
                        eferrer">Portfolio</a>
                    </strong>
                </p>
          </div>
            <hr />
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Personal;
