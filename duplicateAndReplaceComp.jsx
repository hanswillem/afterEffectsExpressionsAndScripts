/*
Duplicate comp layer
Copyright: Hans Willem Gijzel (hanswillemgijzel@gmail.com)
After Effects 2017.0 release / version 14.0.0.207
---
duplicates the source comp of the selected layer, and replaces the old one with the new one
*/

var lyr_cmp = app.project.activeItem.selectedLayers[0];
var dupcmd = lyr_cmp.source.duplicate();

app.project.activeItem.layers.add(dupcmd);

cmp.remove();
