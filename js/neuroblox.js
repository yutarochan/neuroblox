/*
 * Neuroblox - Deep Learning Toolkit
 * Author: Yuya Jeremy Ong (yuyajeremyong@gmail.com)
 */
/* Workspace & Toolbox Configuration */
var toolbox = document.getElementById('toolbox');
var workspace = Blockly.inject('blocklyDiv', { 'toolbox': toolbox,
    zoom: {
        controls: true,
        wheel: false,
        startScale: 0.8,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
});

/* Event Handler */
function onFirstComment(event) {
    /* Block Select Event */
    if (Blockly.selected) {
        console.log(Blockly.selected.type);
        document.getElementById("block_type").value = Blockly.selected.type
        document.getElementById("block_type").innerHTML = Blockly.selected.type
    }
}
workspace.addChangeListener(onFirstComment);

/* Panel */
