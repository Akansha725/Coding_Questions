/* Find valid Direction from provided Direction Array

Input1: ['North', 'South', 'East', 'West', 'West']
Expected Ouput1: ["West"]

Input2:['North', 'East', 'West', 'South', 'West', 'West']
Expected Ouput2: ["West", "West"]
*/

var input1 = ['North', 'South', 'East', 'West', 'West'];

var input2= ['North', 'East', 'West', 'South', 'West', 'West'];

function getValidDirections(input){
  var k = 0, len = input.length;
  
  while(k < len){
    for(var i = 0; i< input.length; i++){
       if((input[i] === 'North' && input[i+1] === 'South') || (input[i] === 'South' && input[i+1] === 'North')){
          input.splice(i, 2);
          k = 0;
       } else if((input[i] === 'East' && input[i+1] === 'West') || (input[i] === 'West' && input[i+1] === 'East')){
          input.splice(i, 2);
          k = 0;
       }
       if(len != input.length){
           len = input.length;
       } else {
           k++;
       }
    }
  }
  
  return input;
} 

console.log(getValidDirections(input1));
