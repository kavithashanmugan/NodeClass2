var average = 6;
var studentAverage = 4;
var points = average - studentAverage;
console.log("This student has a greater or equal average required to pass:",studentAverage > average || studentAverage == average);
console.log(`This student is missing ${points} to pass`)