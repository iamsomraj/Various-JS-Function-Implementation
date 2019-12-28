const startBtn = document.getElementById('start-game-btn');

const ADDITION = 'ADDITION';
const SUBTRACTION = 'SUBTRACTION';

const determine = (resultDisplay, operation, ...numbers) => { 
  let calculatedValue = 0;
  for (element of numbers) {
    if (operation === ADDITION) {
      calculatedValue += element;
    } else {
      calculatedValue -= element;
    }
  }
  resultDisplay(calculatedValue); 
  // this arguement is the 2nd arguement
  // 1st arguement is passed through bind() function
};

const resultDisplay = (operation, calculatedValue) => {
  let operationDescription = 'Operation is ';
  if (operation === ADDITION) {
    operationDescription += ADDITION;
  } else {
    operationDescription += SUBTRACTION;
  }

  operationDescription += '\nThe result is : ' + calculatedValue;
  alert(operationDescription);
};

startBtn.addEventListener('click', () => {
  determine(
    // determine function has a callback function named resultDisplay
    resultDisplay.bind(this, ADDITION), // the bind arguement is the 1st arguement in reality
    ADDITION,
    15,
    56,
    96,
    85,
    85,
    64,
    96,
    85,
    85,
    64,
    96,
    85,
    85,
    64,
    74
  );
  determine(
    resultDisplay.bind(this, SUBTRACTION),
    SUBTRACTION,
    15,
    56,
    96,
    85,
    85,
    64,
    74,
    85,
    85,
    64,
    74
  );
});
