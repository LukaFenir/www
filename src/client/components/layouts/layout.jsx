import React from 'react';

export default ({ children }) => (
    <div className='layout'>
      <header />
      {children}
      <footer />
    </div>
);
