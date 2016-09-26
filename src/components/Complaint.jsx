import React from 'react';

const propTypes = {
  recipient: React.PropTypes.string, // TODO: if i make these required, i get a warning. figure it out.
  complaint: React.PropTypes.string,
};

const Complaint = ({ recipient, complaint }) => {
  return (
    <div>
      <p>Hey { recipient }, { complaint }.</p>
    </div>
  );
};

Complaint.propTypes = propTypes;

export default Complaint;


// this needs the props from ComplaintForm: recipient and complaint
