Blockly.Blocks['conv2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Conv 2D")
        .appendField("Size")
        .appendField(new Blockly.FieldNumber(0, 0), "filter_size");
    this.appendDummyInput()
        .appendField("Row Size")
        .appendField(new Blockly.FieldNumber(0, 0), "row")
        .appendField("Col Size")
        .appendField(new Blockly.FieldNumber(0, 0), "col")
        .appendField("Border")
        .appendField(new Blockly.FieldDropdown([["same", "same"], ["valid", "valid"], ["", ""]]), "border");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
