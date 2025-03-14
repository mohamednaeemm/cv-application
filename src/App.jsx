import './App.css';
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Personal from './components/Personal';
import Summary from './components/Summary';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';

function App() {
  const componentRef = useRef(null);

  const handlePrint = async () => {
    if (!componentRef.current) {
      console.error('Error: componentRef is null');
      return;
    }

    try {
      // Hide header and edit buttons
      const header = document.querySelector('.container-header');
      const editButtons = document.querySelectorAll('.edit-button');
      if (header) header.style.display = 'none';
      editButtons.forEach((button) => (button.style.display = 'none'));

      const canvas = await html2canvas(componentRef.current, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('My_CV.pdf');

      // Restore visibility
      if (header) header.style.display = 'flex';
      editButtons.forEach((button) => (button.style.display = ''));
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="container">
      <div className="container-header">
        <h1>CV Generator</h1>
        <button className="downloadPDF" onClick={handlePrint}>
          Download As PDF
        </button>
      </div>
      <div className="container-body">
        <div ref={componentRef} className="container-body-cv">
          <Personal />
          <Summary />
          <TechnicalSkills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;