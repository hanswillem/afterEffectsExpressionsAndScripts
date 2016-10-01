// get the position keyframes of the selected layer
function getKeyframes() {
    p = [];
    var comp = app.project.activeItem;
    var lyr = comp.selectedLayers[0];
    var maxFrames = comp.duration * 30;

    for (var frame = 0; frame < maxFrames; frame++) {
        var pos = lyr.transform.position.valueAtTime(1 / 30 * frame, true);
        posx = pos[0];
        posy = pos[1];
        p.push([posx, posy, '*']);
    }

    return p;
}


// save the keyframes to a .txt file
function saveKeyframes(c) {
    var doc = new File("~/Desktop/keyframes.txt");
    doc.open("w");
    doc.write(c);
    doc.close();
}


var keys = getKeyframes();
saveKeyframes(keys);
