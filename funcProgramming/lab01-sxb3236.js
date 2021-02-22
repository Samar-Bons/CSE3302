/*
    Samarjit Singh Bons
    1001623236

*/

//const { sum } = require("ramda");


// 1.

const inputtable = [1,2,3,4,5,6,7,8,9,10];


// 2.

const fiveTable = inputtable.map(x => x*5);

console.log("\n2.a \nfiveTable: "+fiveTable);


const thirteenTable = inputtable.map(y => y*13);

console.log("\n2.b\nthirteenTable: "+thirteenTable);

const squaresTable = inputtable.map(z => z*z);

console.log("\n2.c\nthirteenTable: "+squaresTable);


// 4.

function sumEvenMultiplesof7(accumulator, low, high)
{
    if(high < low)
    {
        return accumulator;
    
    }

    if(high%7 == 0 && high%2 == 0)
    {
        return sumEvenMultiplesof7(accumulator+high,low,high-1);
    }
    else
    {
        return sumEvenMultiplesof7(accumulator,low,high-1);
    }
}

const a = sumEvenMultiplesof7(0,1,100);

console.log("\n4.\n"+a);


// 5.

function cylinder_volume(r)
{
    return function(h)
    {
        return 3.14 * r * r * h;
    }
}

// Use r = 5 and h = 10 to call your curried function

var x = cylinder_volume(5)(10);

console.log("\n5.\n"+x);


// 6.


makeTag = function(beginTag, endTag){
    return function(textcontent){
        return beginTag +textcontent +endTag;
    }
        }

const fName1 = makeTag("<td>","</td>\n")("Samar"); 


const lName1 = makeTag("<td>","</td>\n")("Bons");

const age1 = makeTag("<td>","</td>\n")("20");


const row1 = makeTag("<tr>\n","</tr>\n")(fName1+lName1+age1);

const table = makeTag("<table>\n","</table>\n")(row1);


console.log("\n6.\n"+table);


// 7.
// 8.
// hardcoding the array containing numbers between 1 and 100

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

function findMultiples(multiple,Even,array)
{
    return array.filter(num=>)
}