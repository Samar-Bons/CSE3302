/*
    Samarjit Singh Bons
    1001623236
    3/3/2021

*/




// 1.

const inputtable = [1,2,3,4,5,6,7,8,9,10];

// Printing the starting array
console.log("1.\ninputtable: "+inputtable); 


// 2.

// a

// Using the Array.prototype.map() to functionally 
//filter the required elements from the given array. 
const fiveTable = inputtable.map(x => x*5); 


// Printing the result which is a new array
console.log("\n2.a \nfiveTable: "+fiveTable); 

// b
// Using the Array.prototype.map() to functionally 
//filter the required elements from the given array. 
const thirteenTable = inputtable.map(y => y*13); 

// Printing the result which is a new array
console.log("\n2.b\nthirteenTable: "+thirteenTable); 

// c

// Using the Array.prototype.map() to functionally 
//filter the required elements from the given array.
const squaresTable = inputtable.map(z => z*z);  

// Printing the result which is a new array
console.log("\n2.c\nthirteenTable: "+squaresTable); 




// 3.

// Hardcoding an array from 1 to 100
const numSet = [1,2,3,4,5,6,7,8,9,10,  
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,
    71,72,73,74,75,76,77,78,79,80,
    81,82,83,84,85,86,87,88,89,90,
    91,92,93,94,95,96,97,98,99,100];

// Using the Array.prototype.filter() to functionally 
//filter the required elements from the given array.
const oddMultiplesFive = numSet.filter(x => x%5 == 0 && x%2 != 0); 

// Printing the result which is a new array
console.log("\n3.\noddMultiplesFive: "+oddMultiplesFive); 



// 4.

// A recursive function which returns the sum of all Even multiples of 7 between low and high.
// The running sum is stored as the accumulator parameter but no variable is ever muted. 

function sumEvenMultiplesof7(accumulator, low, high)
{
    if(high < low)
    {
        return accumulator;
    }

    // if the number fulfill our needs we add it to the accumulator
    if(high%7 == 0 && high%2 == 0)
    {
        return sumEvenMultiplesof7(accumulator+high,low,high-1);
    }

    // Else we dont. 
    else
    {
        return sumEvenMultiplesof7(accumulator,low,high-1);
    }
}

// Calling the function
const a = sumEvenMultiplesof7(0,1,100); 

// Printing the unmutable variable that stores the result
console.log("\n4.\nSum of even multiples between 1-100: "+a); 



// 5.
// A curried function that will calculate the volume of a cylinder with given radius and height.

function cylinder_volume(r) //first parameter
{
    return function(h) // second parameter
    {
        return 3.14 * r * r * h;
    }
}

var x = cylinder_volume(5)(10); // Calling it with r = 5 and h = 10

console.log("\n5.\nVolume of Cylinder: "+x); // Printing the result




// 6.

// Function provided for the assignment which wraps content with HTML tags. 

makeTag = function(beginTag, endTag)
{
    return function(textcontent)
    {
        return beginTag + textcontent + endTag;
    }
}

// Calling the function to wrap my first name with <td></td> tags         
const fName1 = makeTag("<td>","</td>\n")("Samar"); 

// Calling the function to wrap my last name with <td></td> tags
const lName1 = makeTag("<td>","</td>\n")("Bons");  

// Calling the function to wrap my age with <td></td> tags
const age1 = makeTag("<td>","</td>\n")("20");  

// Calling the function to wrap the previously obtained content with <tr></tr> tags
const row1 = makeTag("<tr>\n","</tr>\n")(fName1+lName1+age1);  

// Calling the function to wrap the previously obtained content with <table></table> tags
const table = makeTag("<table>\n","</table>\n")(row1);  

// Printing the table. 
console.log("\n6.\n"+table); 



// 7.


// 8.

// Generic function to find odd or even multiples of any number froma given array and plae it in a new array functionally. 
// The parameter "odd" can either be integers '1' or '0' --> 1 for when we need odd multiples and 0 for when we need even.
// parameter multiple can be any integer whose multiples we seek
// array is the integer array where we are looking for these values. 

function findMultiples(odd,multiple,array)
{
    //  Using the Array.prototype.filter() to functionally 
    // filter the required elements from the given array. 

    return array.filter(num => num % multiple == 0 && num % 2 == odd); 
}


// A simple function which will later be used in the Array.prototype.reduce() method
// to return the Sum of all the values in an array functionally

function getSum(total, num)
{
    return total + num;
}


// Calling the generic functions to demonstrate questions 3. and 4.
const genericOddFive = findMultiples(1,5,numSet);

const genericEvenSeven = findMultiples(0,7,numSet);

// Calling the Array.prototype.reduce() method with the getSum() function
// to obtain the sum of all the values inside the array.
const genericSumEvenSeven = genericEvenSeven.reduce(getSum, 0);

// Printing the resulting new array and sum respectively for Q3 and Q4
console.log("\n8.\ngenericOddFive: "+genericOddFive+"\n\ngenericSumEvenSeven: "+  
genericSumEvenSeven);


// Thank you. 