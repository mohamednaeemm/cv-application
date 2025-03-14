import './App.css';
import React from 'react';
import Personal from './components/Personal';
import Summary from './components/Summary';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';

function App() {

  return (
    <div className="container">
        <div className="container-header">
            <h1>CV Generator</h1>
            <button className="downloadPDF">Download As PDf</button>
        </div>
        <div className="container-body">
            <div className="container-body-cv">
                <Personal />
                <Summary />
                <TechnicalSkills />
                <Experience />
            </div>
        </div>

    </div>
  )
    
}

export default App
