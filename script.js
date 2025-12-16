// Chapter 14-16

// Chapter 14-16 / (Q:1)
// Declare an empty array
let studentNames = [];
console.log("Empty array:", studentNames);

// Chapter 14-16 / (Q:2)
// Declare an empty array using Array constructor
let studentAges = new Array();
console.log("Empty array using Array constructor:", studentAges);

// Chapter 14-16 / (Q:3)
// Declare and initialize an array of strings
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Array of strings:", colors);

// Chapter 14-16 / (Q:4)
// Declare and initialize an array of numbers
let numbers = [10, 20, 30, 40, 50];
console.log("Array of numbers:", numbers);

// Chapter 14-16 / (Q:5)
// Declare and initialize an array of booleans
let booleanArray = [true, false, true, false];
console.log("Array of booleans:", booleanArray);

// Chapter 14-16 / (Q:6)
// Declare and initialize a mixed array
let mixedArray = ["Hello", 42, true, 3.14, "World"];
console.log("Mixed array:", mixedArray);

// Chapter 14-16 / (Q:7)
// Declare and initialize an array of qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualifications array:", qualifications);

// Chapter 14-16 / (Q:8)
// Displaying student names and scores
let studentNamesQ8 = ["Alice", "Bob", "Charlie"];
let studentScores = [85, 92, 78];
for (let i = 0; i < studentNamesQ8.length; i++) {
    let percentage = (studentScores[i] / 100) * 100;
    console.log(`Score of ${studentNamesQ8[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
}

// Chapter 14-16 / (Q:9)
// Color array manipulation
let colorArray = ["Red", "Green", "Blue"];
console.log("Initial colors:", colorArray);

// a. Add color to the beginning
let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddBeginning);
console.log("After adding to beginning:", colorArray);

// b. Add color to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddEnd);
console.log("After adding to end:", colorArray);

// c. Add two more colors to the beginning
colorArray.unshift("Yellow", "Purple");
console.log("After adding two colors to beginning:", colorArray);

// d. Remove the first color
colorArray.shift();
console.log("After removing the first color:", colorArray);

// e. Remove the last color
colorArray.pop();
console.log("After removing the last color:", colorArray);

// f. Add color at a specific index
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colorArray.splice(indexToAdd, 0, colorToAddAtIndex);
console.log("After adding color at index:", colorArray);

// g. Remove color(s) from a specific index
let indexToRemove = parseInt(prompt("Enter the index to remove color(s) from:"));
let numberOfColorsToRemove = parseInt(prompt("Enter the number of colors to remove:"));
colorArray.splice(indexToRemove, numberOfColorsToRemove);
console.log("After removing color(s) from index:", colorArray);

// Chapter 14-16 / (Q:10)
// Sorting student scores
let studentScoresQ10 = [320, 230, 480, 120];
console.log("Scores of students:", studentScoresQ10);
studentScoresQ10.sort((a, b) => a - b);
console.log("Ordered scores of students:", studentScoresQ10);

// Chapter 14-16 / (Q:11)
// Selecting cities from an array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log("Cities list:", cities);
let selectedCities = cities.slice(2, 4);
console.log("Selected cities list:", selectedCities);

// Chapter 14-16 / (Q:12)
// Joining array elements into a string
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join(" ");
console.log("Array:", arr);
console.log("String:", joinedString);

// Chapter 14-16 / (Q:13)
// FIFO using array
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
console.log("FIFO array:", fifoArray);
console.log("First item removed:", fifoArray.shift());
console.log("FIFO array after removal:", fifoArray);
console.log("Second item removed:", fifoArray.shift());
console.log("FIFO array after removal:", fifoArray);
console.log("Third item removed:", fifoArray.shift());
console.log("FIFO array after removal:", fifoArray);

// Chapter 14-16 / (Q:14)
// LIFO using array
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
console.log("LIFO array:", lifoArray);
console.log("Last item removed:", lifoArray.pop());
console.log("LIFO array after removal:", lifoArray);
console.log("Second item removed:", lifoArray.pop());
console.log("LIFO array after removal:", lifoArray);
console.log("First item removed:", lifoArray.pop());
console.log("LIFO array after removal:", lifoArray);

// Chapter 14-16 / (Q:15)
// Creating a dropdown menu from an array
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let dropdown = '<select>\n';
for (let i = 0; i < manufacturers.length; i++) {
    dropdown += `  <option value="${manufacturers[i]}">${manufacturers[i]}</option>\n`;
}
dropdown += '</select>';
document.write("Dropdown menu HTML:\n", dropdown);