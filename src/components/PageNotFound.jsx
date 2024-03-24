import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{
      gridArea: 'main',
      overflowY: 'auto',
      padding: '32px 54px',
      color: 'rgba(255, 255, 255, 0.95)',
    }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
