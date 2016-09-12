// Add three nuls called 'start', 'end', and 'mover'.
// Add a text layer, and parent it to the 'mover' null.
// Add the following to the 'source text' property.

var start = thisComp.layer("start").transform.position[0];
var end = thisComp.layer("end").transform.position[0];
var w = end - start;
var pos = thisComp.layer("mover").transform.position[0] - start;
var year = 1918 + (pos / w) * (1939 - 1918);
year = Math.round(year);

[year]
