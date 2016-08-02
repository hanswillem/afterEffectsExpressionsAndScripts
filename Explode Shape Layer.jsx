/* ﻿
Explode selected shape layer
Copyright: Hans Willem Gijzel (hanswillemgijzel@gmail.com)
After Effects 2015.3 release / version 13.8.0.144
*/


//explodes the shape layer
function explodeShapeLayer() {
    var comp = app.project.activeItem;
    var lyr = comp.selectedLayers[0];
    var contentCount = lyr.property("ADBE Root Vectors Group").numProperties;
    var dupLyrArr = [];


    dup(contentCount);
    removeAllButOne();


    //duplicates layer n times
    function dup(n) {
        for (var i = 0; i < n; i++) {
            var dupLyr = lyr.duplicate();
            dupLyrArr.push(dupLyr);
        }
        lyr.enabled = false;
    }


    //removes all but one shape from each layer
    function removeAllButOne() {
        for (var i = 0; i < dupLyrArr.length; i++) {
            for (var j = contentCount; j > 0; j--) {
                if (i + 1 !== j) {
                    dupLyrArr[i].content(j).remove();
                }
            }
        }
    }
}


explodeShapeLayer();
