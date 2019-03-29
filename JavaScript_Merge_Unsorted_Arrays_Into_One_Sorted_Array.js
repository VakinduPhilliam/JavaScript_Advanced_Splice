
/* This script is written to demonstrate the process of adding an unsorted array into a sorted array using JavaScript. */
/* This function in particular can receieve multiple arrays in sequence and automatically sort them. */
/* The function then stores the sorted array and continues to automatically re-admit new unsorted arrays; re-distributing them according to their size. */
/* The script basically merges multiple unsorted arrays into a one large sorted array. */
/* The script begins with an empty array, then periodically adds sorted elements into the array. */
/* Written by Vakindu Philliam */

//Declare already sorted list

var sortedArray=[];

//Declare auto sorting function

function autoSort(list,newList){

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

//Declare unsorted array 1

var unsortedArray1=[3,756,9,678,23,9,11,35,9,3,14,3,1,234,9,8];

//Add unsorted array 1 to the sorted list

autoSort(sortedArray,unsortedArray1);

//Declare unsorted array 2

var unsortedArray2=[67,23,63,867,13,6,3,45,78,21,3];

//Add unsorted array 2 to the sorted list

autoSort(sortedArray,unsortedArray2);

//Declare unsorted array 3

var unsortedArray3=[3,689,1,1,975,7,5,3,8,9,790,3,2];

//Add unsorted array 3 to the sorted list

autoSort(sortedArray,unsortedArray3);

//Declare unsorted array 4

var unsortedArray4=[45,4,55,12,890,32,56,89,6,12,33];

//Add unsorted array 4 to the sorted list

autoSort(sortedArray,unsortedArray4);

//PrintOut sorted array

document.write(sortedArray);

//Output: 1,1,1,2,3,3,3,3,3,3,3,3,4,5,6,6,7,8,8,9,9,9,9,9,11,12,12,13,14,21,23,23,32,33,35,45,45,55,56,63,67,78,89,234,678,689,756,790,867,890,975 
