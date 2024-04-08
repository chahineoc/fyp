import React from 'react';
import './CreateApp.css'; 

const CreateApp: React.FC = () => {
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission goes here
  };

  return (
    <div className="create-application">
      <main className="application-content">
        <h1>Create new application</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="appName">Application Name</label>
          <input type="text" id="appName" name="appName" required />

          <label htmlFor="sectionNumber">Section Number</label>
          <input type="number" id="sectionNumber" name="sectionNumber" required />

          <label htmlFor="fileUpload">Please upload:عقد بيع ممسوح بالقسم موضوع البيع</label>
          <input type="file" id="fileUpload" name="fileUpload" required />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default CreateApp;
