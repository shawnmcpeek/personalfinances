import React from "react";

import IncomeSourcesComponent from "./income_sources.component";
//import ExpenseCategoriesComponent from './expense_categories.component';
//import AccountNamesComponent from './account_names.component';
//import LoginLogoutComponent from './login_logout.component';

const SettingsComponent = () => {
  return (
    <div>
      <h2>Settings</h2>
      <IncomeSourcesComponent />
      {/* <ExpenseCategoriesComponent /> */}
      {/* <AccountNamesComponent /> */}
      {/* <LoginLogoutComponent /> */}
    </div>
  );
};

export default SettingsComponent;
