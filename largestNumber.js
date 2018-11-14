/* Find largest number from given number */

/* Input: 989, Output: 998 */
var input = 989;

function findLargestNumber(input){
  var n, largestNum = 0, k = 0, m =0;
  n = input.toString(10).split('').map(Number);

  for (var i = 0;i < n.length; i++) {
    for (var j = i;j < n.length; j++) {
      if(n[i] < n[j]){
        var temp = n[j];
        n[j] = n[i];
        n[i] = temp;
      }

     }
  }
  k = n.length -1;

  while(k >= 0 ){
    largestNum += Math.pow(10, k)*n[m];
    k--;
    m++;
  }
  
  return largestNum;
}

console.log(findLargestNumber(input));
