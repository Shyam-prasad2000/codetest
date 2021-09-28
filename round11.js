//1st question
const myArr = [101,201,301,401,501];
const arrTwo = myArr.splice(0,5).slice(0,2);
arrTwo[0] = "001";
console.log(arrTwo);

//output-['001','201']
//In this splice and slice keywords are used splice will get the numbers given in the peranthasis and slice will remove the items from the array
//And the 0th index is replaced by 001,thus the output is ['001','201'] 