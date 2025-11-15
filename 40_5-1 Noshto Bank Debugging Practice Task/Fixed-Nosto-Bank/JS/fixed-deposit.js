/*                      40_5-1 Noshto Bank debugging practice task */
document.getElementById("btn-deposit").addEventListener("click", function () {

  const newDepositAmount = getInputFieldValueById("deposit-field");

  const previousDepositTotal = getTextElementValueById("deposit-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);

  //  ERROR: misspelled function name: getextElementValueById
  //  FIX: corrected to getTextElementValueById
  const previousBalanceTotal = getTextElementValueById("balance-total");

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);

}); //  ERROR: missing curly brace before )  →  FIXED
console.log('Checking its working properly');

