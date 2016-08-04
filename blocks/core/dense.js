Blockly.Blocks['dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dense")
        .appendField("Output")
        .appendField(new Blockly.FieldNumber(0, 0), "output");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setOutput(false, null);
    this.setColour(175);

    this.setHelpUrl('http://www.example.com/');
  }
};
