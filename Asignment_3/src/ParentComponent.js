import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const userDetails = {
    name: 'Alisha Jain',
    age: 20,
    phone: '7855802126',
    email: 'a1isha@gmail.com',
    address: '145 Main Street'
  };

  return (
    <div className="parent-container">
      <h2>Parent Component</h2>
      <ChildComponent userDetails={userDetails} />
    </div>
  );
};

export default ParentComponent;
