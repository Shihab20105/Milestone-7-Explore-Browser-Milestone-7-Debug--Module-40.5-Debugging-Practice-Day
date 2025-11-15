/*                      40_5-1 Noshto Bank debugging practice task */
document.getElementById("btn-withdraw").addEventListener("click", function () {

  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  //  ERROR: ID had a SPACE → "withdraw-total "
  //  FIX: remove space
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  //  ERROR: withdraw - total (invalid variable, syntax error)
  //  FIX: correct string id
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);

});
console.log('its continuing checking is it working ?');
