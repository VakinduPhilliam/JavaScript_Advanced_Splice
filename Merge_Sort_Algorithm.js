/* JUST INCASE: THIS BONUS FUNCTION RE-ARRANGES THE ELEMENTS OF AN ARRAY IN ASCENDING ORDER. */
/* The function is written in Vanilla JavaScript. */ 
/* This Function uses Merge Sort Algorithm to sort the elements of an array in ascending order. */
/* Written in Entirety by Vakindu Philliam. */

function mergesort(list){

if(list.length<=1){

return list;

}

//Partition array

var middle=(list.length)/2

var left=list.slice(0,middle);
var right=list.slice(middle);

//Return partitioned array

return merge(mergesort(left),mergesort(right));

}

//Expand merge function

function merge(left,right){

//Declare comparison variables

var result=[];
var indexLeft=0;
var indexRight=0;

//Check length of left and right array to determine if partitioning is complete

while(indexLeft<left.length && indexRight<right.length){

//Compare elements of left and right array

if(left[indexLeft]<right[indexRight]){

result.push(left[indexLeft]);

indexLeft++;

} else {

result.push(right[indexRight]);

indexRight++;

   }
}

return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

}

//Run function

var array =[56,2,1,17,34,6,78,23,11,23,33,33,23,44,67,77,45,44,89,1,12,34,45,78,12,69,90,45,67,34,32,12,11];

console.log(mergesort(array));
