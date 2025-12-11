import React from 'react';

const Title = ({ title, children }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Title;
