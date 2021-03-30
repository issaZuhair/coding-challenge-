'use strict';
let minimum=0;
let numericArray=[];
for(let i=0;i<5;i++){
  numericArray[i]=parseInt(prompt('enter a number'));
  if(i===4){
    minimum=Math.min(numericArray[i-4],numericArray[i-3],numericArray[i-2],numericArray[i-1],numericArray[i]);
  }
}
alert(minimum);
console.log(typeof(numericArray));
