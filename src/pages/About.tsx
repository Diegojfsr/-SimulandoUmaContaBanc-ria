import React from 'react';
import { Link } from 'react-router-dom';
import '../PageStyles.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About Page</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default About;
