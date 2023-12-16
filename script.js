function findMaxNumber(arr) {
    if (arr.length === 0) {
      return null; // Return null for an empty array
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  function findMax() {
    const numbersInput = document.getElementById('numbers');
    const resultElement = document.getElementById('result');
  
    const numbersString = numbersInput.value;
    const numbersArray = numbersString.split(',');
    const numericArray = numbersArray.map(Number);
  
    const maxNumber = findMaxNumber(numericArray);
  
    if (maxNumber !== null) {
      resultElement.textContent = `Maximum Number: ${maxNumber}`;
    } else {
      resultElement.textContent = 'Please enter valid numbers';
    }
  }
  
  document.getElementById('calculate').addEventListener('click', findMax);
  