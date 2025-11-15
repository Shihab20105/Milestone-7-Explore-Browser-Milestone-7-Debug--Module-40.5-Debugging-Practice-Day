/*                      40_5-1 Noshto Bank debugging practice task */
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputField.value);

  //  ERROR: inputField.value = "" was AFTER return (never executed)
  //  FIX: moved before return
  inputField.value = "";

  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;

  //  ERROR: No return value (function always returned undefined)
  //  FIX: convert to number & return properly
  return parseFloat(textElementValueString);
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);

  //  ERROR: used .value (wrong for spans/divs)
  //  FIX: use innerText
  textElement.innerText = newValue;
}
console.log('i am checking its working properly or not');
