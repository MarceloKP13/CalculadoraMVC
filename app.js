class CalculatorController {
    constructor() {
      this.model = new CalculatorModel();
      this.screen = document.getElementById('screen');
      this.currentInput = '';
    }
  
    addToScreen(value) {
      this.currentInput += value;
      this.screen.value = this.currentInput;
    }
  
    clearScreen() {
      this.currentInput = '';
      this.screen.value = '';
    }
  
    calculateResult() {
      try {
        this.currentInput = eval(this.currentInput).toString(); // eval para evaluar la expresión
        this.screen.value = this.currentInput;
      } catch (error) {
        this.screen.value = 'Error';
      }
    }
  }
  
  const controller = new CalculatorController();
  