
// const result= document.getElementById('result');
const current = Date.now();
const olympicTime = new Date(2026,7,14).getTime();
let timer = olympicTime - currentTime;

// millisecond
const day = (timer)/(1000*60*60*24);
timer %= 1000 * 60 * 60 * 24;