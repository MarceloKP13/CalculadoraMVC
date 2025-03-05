const controller = {
    expression: "",  // Almacena la expresión que el usuario ingresa

    // Agrega un número o símbolo a la pantalla
    addToScreen: function(value) {
        this.expression += value;
        document.getElementById('screen').value = this.expression;
    },

    // Calcula el resultado
    calculateResult: function() {
        const result = model.calculate(this.expression);
        document.getElementById('screen').value = result;
        this.expression = "";  // Resetea la expresión después de calcular
    },

    // Borra la pantalla
    clearScreen: function() {
        this.expression = "";
        document.getElementById('screen').value = "";
    }
};