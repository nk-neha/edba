import React from 'react';

const ChildComponent = ({ userDetails }) => {
  return (
    <div className="child-container">
      <h3>Child Component</h3>
      <div>Name: {userDetails.name}</div>
      <div>Age: {userDetails.age}</div>
      <div>Phone: {userDetails.phone}</div>
      <div>Email: {userDetails.email}</div>
      <div>Address: {userDetails.address}</div>
    </div>
  );
};

export default ChildComponent;
