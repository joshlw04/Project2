import React from 'react';
import ComplaintForm from './ComplaintForm.jsx';
import ComplaintList from './ComplaintList.jsx';

const Home = () => {
  return (
    <div>
      <ComplaintList />
      <ComplaintForm />
    </div>
  );
};

export default Home;

// stateless component that just renders the complaints in their various forms
