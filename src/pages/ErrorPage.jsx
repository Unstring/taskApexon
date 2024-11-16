// src/pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! Something went wrong!</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist or there was an error.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default ErrorPage;
