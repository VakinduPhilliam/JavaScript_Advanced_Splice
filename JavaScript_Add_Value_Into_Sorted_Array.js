
/* This script is written to demonstrate the process of adding a new value into an already sorted array using JavaScript. */
/* This function in particular only adds one value to the array at a time. */
/* Written by Vakindu Philliam */


var m = function sortList(list,somevalue){

//Capture length of list 

var length =list.length;

//Capture the last element of sorted array

var largest=list.slice(length-1,length);

//Compare the largest element of sorted array to the new value 
	 
if(somevalue>largest) {

//If new value is greater than the largest element of array, append new value as the largest in the array
	 
	 list.push(somevalue);
	 	
}	

//Iterate through list

for(var i=0;i<length;i++){

//Compare each element of array to new value

if(somevalue<list[i]){

//If value is greater than list element, add new element just before it 

list.splice(i,0,somevalue);

//Break loop

break;

  }
	
}

//Return value

return list;

}

//Run function

//As an example, run the function upon an already sorted array

var array=[1,2,3,4,5,6];

//Declare value to add to the list

var newValue=3;

document.write(m(array,newValue));

//Outputs: 1,2,3,3,4,5,6 


//Adding another value that is bigger than all current elements to the list

var newValue2=7;

document.write(m(array,newValue2));

//Outputs: 1,2,3,3,4,5,6,7 