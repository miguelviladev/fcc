function calculateCashInDrawer(cid) {
    let total = 0;
    for (let i = 0; i < cid.length; i++) {
      total += cid[i][1];
    }
    return total.toFixed(2);
  }
  
  function currencyUnitAmount(cid) {
    const unitValue = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
    };
    let unitAmount = [];
    for (let i = 0; i < cid.length; i++) {
      unitAmount.push((cid[i][1] / unitValue[cid[i][0]]).toFixed(0));
    }
    return unitAmount.reverse();
  }
  
  function checkCashRegister(price, cash, cid) {
    const unitsValues = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    const unitNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
    let total = calculateCashInDrawer(cid);
    let changeLab = cash - price;
    let units = currencyUnitAmount(cid);
    let change = {};
    let changeArr = [];
    //Check if there is't enough money in drawer
    if (changeLab > total) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    //Check if the money in drawer equals the change
    if (changeLab == total) {
      return {status: "CLOSED", change: cid};
    }
    //Calculate the change
    for (let i = 0; i < unitsValues.length; i++) {
      if(units[i] != 0) {
        if((changeLab - unitsValues[i]) >= 0){
          if (!change.hasOwnProperty(unitNames[i])) {
            change[unitNames[i]] = 0;
          }
          change[unitNames[i]] += unitsValues[i];
          units[i]--;
          changeLab = changeLab.toFixed(2) - unitsValues[i];
          i--;
          if(changeLab == 0) {
            break;
          }
        }
      }
    }
    //Check if cannot return the exact change
    if (changeLab != 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    //Organize output data
    for (var prop in change) {
      if (Object.prototype.hasOwnProperty.call(change, prop)) {
        changeArr.push([prop, change[prop]]);
      }
    }
    return {status: "OPEN", change: changeArr}
  }
  
  checkCashRegister(10, 33, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])