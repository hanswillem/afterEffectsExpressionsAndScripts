// Expression to transform a 3d position and rotaion to 2d screen space.
// Put the expression on the 2d layer and reference the 3d layer

l = thisComp.layer("My3DLayer");
l.toComp(l.anchorPoint);
