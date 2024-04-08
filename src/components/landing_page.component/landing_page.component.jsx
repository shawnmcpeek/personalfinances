import React from "react";
import settingsIcon from "../../icons/icons8-settings-48.png";
import receiptsIcon from "../../icons/icons8-receipt-48 (1).png";
import importIcon from "../../icons/icons8-input-48.png";
import incomeIcon from "../../icons/icons8-income-48.png";
import balanceIcon from "../../icons/icons8-cashbook-48.png";
import budgetIcon from "../../icons/icons8-budget-48.png";

const LandingPage = () => {
  return (
    <p>
      It is time to manage your finances.
      <br />
      To start, you'll want to customize your finances. Click on the "Settings"{" "}
      <img src={settingsIcon} alt="Settings" /> button to start. You can add
      your account names, income sources, expense categories, and more.
      <br />
      Once you have customized your finances, click on the "Receipts"{" "}
      <img src={receiptsIcon} alt="Receipts" /> button to start entering
      receipts.
      <br />
      After you have entered all your receipts, click on the "Import"{" "}
      <img src={importIcon} alt="Import" /> button to import the PDF of your
      credit card and/or bank statement.
      <br />
      Click on the "Income" <img src={incomeIcon} alt="Income" /> button to
      start entering your income.
      <br />
      Once you have entered all of your receipts and income, click on the
      "Balance" <img src={balanceIcon} alt="Balance" /> button to see your
      correct/add any missing transactions and ensure accuracy.
      <br />
      To see your budget, click on the "Budget"{" "}
      <img src={budgetIcon} alt="Budget" /> button. Here you can see how you are
      doing, which categories you spend the most on, and how much you can save.
    </p>
  );
};

export default LandingPage;
