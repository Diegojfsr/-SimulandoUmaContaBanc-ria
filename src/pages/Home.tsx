import React from 'react';
import { Link } from 'react-router-dom';
import '../PageStyles.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
