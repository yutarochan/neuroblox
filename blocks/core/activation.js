Blockly.Blocks['activation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Activation")
        .appendField(new Blockly.FieldDropdown([["ReLU", "relu"], ["sigmoid", "sigmoid"], ["option", "OPTIONNAME"]]), "activation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
