const model = {
  calculate: function(expression) {
      try {
          return eval(expression);  // Usamos eval para evaluar la expresión matemática.
      } catch (error) {
          return "Error";  // Si hay error, muestra "Error".
      }
  }
};