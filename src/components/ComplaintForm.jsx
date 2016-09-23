import React from 'react';

const ComplaintForm = () => {
  return (
    <div id="input-form">
      <h1>this is being rendered from the ComplaintForm component</h1>
      <form>
        <input type="text" name="recipient" id="recipient-input" placeholder="Who's got you miffed?" />
        <br />
        <input type="text" name="complaint" id="complaint-input" placeholder="What should they know?" />
        <br />
        <input type="submit" name="submit" id="submit" placeholder="Make Complaint" />
        <br />
      </form>
    </div>
  );
};

export default ComplaintForm;
