import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SettingsComponent from "../settings.component/settings.component";
//import ReceiptsComponent from "../receipts.component/receipts.component";
//import ImportComponent from "../import.component/import.component";
//import IncomeComponent from "../income.component/income.component";
//import BalanceComponent from "../balance.component/balance.component";
//import BudgetComponent from "../budget.component/budget.component";
import settingsIcon from "../../icons/icons8-settings-48.png";
import receiptsIcon from "../../icons/icons8-receipt-48 (1).png";
import importIcon from "../../icons/icons8-input-48.png";
import incomeIcon from "../../icons/icons8-income-48.png";
import balanceIcon from "../../icons/icons8-cashbook-48.png";
import budgetIcon from "../../icons/icons8-budget-48.png";

function VerticalButtonGroup({ onButtonClick }) {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    switch (componentName) {
      case "settings":
        setActiveComponent(<SettingsComponent />);
        break;
      // Uncomment these when corresponding components are implemented
      /*
      case "receipts":
        setActiveComponent(<ReceiptsComponent />);
        break;
      case "import":
        setActiveComponent(<ImportComponent />);
        break;
      case "income":
        setActiveComponent(<IncomeComponent />);
        break;
      case "balance":
        setActiveComponent(<BalanceComponent />);
        break;
      case "budget":
        setActiveComponent(<BudgetComponent />);
        break;
      */
      default:
        setActiveComponent(null);
    }
    onButtonClick && onButtonClick(activeComponent);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 auto" }}>
        <ButtonGroup vertical>
          <Button onClick={() => handleButtonClick("receipts")}>
            <img
              src={receiptsIcon}
              alt="Receipts"
              style={{ marginRight: "5px" }}
            />{" "}
            Receipts
          </Button>
          <Button onClick={() => handleButtonClick("income")}>
            <img src={incomeIcon} alt="Income" style={{ marginRight: "5px" }} />{" "}
            Income
          </Button>
          <Button onClick={() => handleButtonClick("import")}>
            <img src={importIcon} alt="Import" style={{ marginRight: "5px" }} />{" "}
            Import
          </Button>
          <Button onClick={() => handleButtonClick("balance")}>
            <img
              src={balanceIcon}
              alt="Balance"
              style={{ marginRight: "5px" }}
            />{" "}
            Balance
          </Button>
          <Button onClick={() => handleButtonClick("budget")}>
            <img src={budgetIcon} alt="Budget" style={{ marginRight: "5px" }} />{" "}
            Budget
          </Button>
          <Button onClick={() => handleButtonClick("settings")}>
            <img
              src={settingsIcon}
              alt="Settings"
              style={{ marginRight: "5px" }}
            />{" "}
            Settings
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ flex: "1", marginLeft: "20px" }}>{activeComponent}</div>
    </div>
  );
}

export default VerticalButtonGroup;
