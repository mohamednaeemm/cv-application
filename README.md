# CV Generator

[**Live Demo**](https://your-live-demo-url.com) <!-- Replace with your actual live URL -->

A React-based web application to create and download a professional CV as a PDF. Users can input personal information, a summary, technical skills, and projects, then generate a printable CV without edit buttons in the final PDF.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features
- Input sections for:
  - Personal Information (name, address, email, LinkedIn, GitHub, portfolio)
  - Summary
  - Technical Skills
  - Projects
- Edit and save functionality for each section
- Download CV as a PDF with edit buttons hidden
- Responsive design with clean, professional styling
- Print-ready layout using `react-to-print`

## Technologies
- **React**: Front-end framework
- **react-to-print**: For PDF generation
- **CSS**: Custom styling with print media queries
- **JavaScript (ES6+)**: Core logic and state management

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/cv-generator.git
   cd cv-generator
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
   This installs `react`, `react-dom`, `react-to-print`, and other dependencies listed in `package.json`.

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

