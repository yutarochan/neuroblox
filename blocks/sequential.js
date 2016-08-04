Blockly.Blocks['sequential'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Sequential")
            .appendField(new Blockly.FieldTextInput("My Model"), "modelName");
        this.appendStatementInput("Sequential")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("Optimizer")
            .appendField(new Blockly.FieldDropdown([["Adadelta", "adadelta"], ["Categorical Crossentropy", "Categorical Crossentropy"]]), "optimizer");
        this.appendDummyInput()
            .appendField("Loss")
            .appendField(new Blockly.FieldDropdown([["MSE", "mse"], ["MAE", "mae"], ["MAPE", "mape"], ["Accuracy", "accuracy"]]), "loss_func");
        this.appendValueInput("metrics")
            .setCheck(null)
            .appendField("Metrics");
        this.setColour(275);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
