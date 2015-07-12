seedRandom(1, true);
dur = random(0.5, 1.5);
minVal = 0;
maxVal = 360

seed = Math.floor(time/dur);
segStart = seed*dur;
seedRandom(seed,true);
startVal =  random(minVal,maxVal);
seedRandom(seed+1,true);
endVal = random(minVal,maxVal);
ease(time,segStart,segStart + ((dur/5) * 4), startVal, endVal);	
