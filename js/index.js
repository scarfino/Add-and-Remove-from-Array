/*
Add and Remove an item from a list
@scarfino 2018
*/

let newYearsResolutions = ['First Thing','Second Thing','Third Thing',]; // items in array

// the first item in an array is always identified by using 0, not 1

newYearsResolutions[3] = "Fourth Thing"; // unlisted 4th element in array

newYearsResolutions.push('Fifth Thing', 'Sixth Thing') // add two new elements to end of array

newYearsResolutions.pop(); // remove last element from an array

console.log(newYearsResolutions); // Output array elements into console
