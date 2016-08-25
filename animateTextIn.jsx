/*
Animate text in
Copyright: Hans Willem Gijzel (hanswillemgijzel@gmail.com)
After Effects 2015.3 release / version 13.8.0.144
---
turns the selected text layer in a schape layer, explodes the layer to shape layers with
individual characters and offsets the layers one frame
*/


var sl = app.project.activeItem.selectedLayers[0];
txt = sl.sourceText.value;
txt = String(txt);
txt = removeSpaces(txt);
lcount = txt.length;


//make shape layer from selected text layer
cmdID = app.findMenuCommandId("Create Shapes from Text");
app.executeCommand(cmdID);


//explode shapelayer and offset
dup(lcount);
removeChars(lcount);
offsetLayers(lcount);


//removes characters from layers 1 through n
function removeChars(n) {
    for (var lyr = 1; lyr < (n + 1); lyr ++) {
        for (var i = n; i > 0 ; i--) {
            if (i !== lyr) {
                app.project.activeItem.layer(lyr).content(i).remove();
            }
        }
    }
}


//duplicates layer n times
function dup(n) {
    for (var i = 1; i < n; i++) {
        app.project.activeItem.layer(1).duplicate();
    }
}


//offsets layers 1 through n 1 frame
function offsetLayers(n) {
    var off = 0;
    for (var lyr = 1; lyr < n + 1; lyr++) {
        app.project.activeItem.layer(lyr).startTime += off;
        off += 0.04;
    }
}


// removes spaces from string
function removeSpaces(str) {
    l = str.split(' ');
    txt = '';
    for (var i = 0; i < l.length; i++) {
        txt += l[i];
    }
    return txt;
}
