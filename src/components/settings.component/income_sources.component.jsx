import React from "react";

const IncomeSourcesComponent = () => {
  return (
    <div>
      <h3>Income Sources</h3>
      <div>You currently have no income sources.</div>
      <div>
        <p>You will be able to add income sources later.</p>
        <button
          onClick={() => {
            /* Add functionality to navigate to the add income source page */
          }}
        >
          Add Income Source
        </button>
      </div>
    </div>
  );
};

export default IncomeSourcesComponent;
