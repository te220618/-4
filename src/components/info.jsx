import React from 'react';

const Info = ({ info, children }) => {
  return (
    <div className="info">
      <p>{info}</p>
      {children}
    </div>
  );
};

export default Info;
