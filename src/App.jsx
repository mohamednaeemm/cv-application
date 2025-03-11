import './App.css';
import React from 'react';
import Personal from './components/Personal';
import Summary from './components/Summary';


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
            </div>
        </div>

    </div>
  )
    
}

export default App
