
/* This script is written to demonstrate the process of adding a new array into an already sorted array using JavaScript. */
/* This function in particular adds an unsorted array to an already existing sorted array */
/* Written by Vakindu Philliam */

//Declare already sorted list

var sortedArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

//Declare auto sorting function

var m = function autoSort(list,newList){

//Capture each new element of the new unsorted List

$.each(newList,function(element){
 
 //Capture current element of list

  var current = newList[element];

	sortList(list,current);
	
});

//Run each element of newList through sorting function that finds out where the new element fits in the already sorted list

function sortList(array,j){

//Capture length of list 

var length =list.length;

//Capture the last element of sorted array

var largest=list.slice(length-1,length);

//Compare the largest element of sorted array to the new value 
	 
if(j>largest) {

//If new value is greater than the largest element of array, append new value as the largest in the array
	 
	 list.push(j);
	 	
}	

//Iterate through list

for(var i=0;i<length;i++){

//Compare each element of array to new value

if(j<list[i]){

//If value is greater than list element, add new element just before it 

list.splice(i,0,j);

//Break loop

break;

   }	
  }
}

return list;

}

//Run function

//Declare unsorted array

var unsortedArray=[9,678,23,9,11,35,9,3,14,3,1,234,9,8];

//Declare value to add to the list

document.write(m(sortedArray,unsortedArray));

//Outputs: 1,1,2,3,3,3,4,5,6,7,8,8,9,9,9,9,9,10,11,11,12,13,14,14,15,16,17,18,19,20,21,22,23,23,24,25,35,234,678
