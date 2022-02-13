/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'Jon Lanenga';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerText = name;

// Step 3: declare and instantiate a variable to hold the current year
const currentyear = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentyear

// Step 5: declare and instantiate a variable to hold the name of your picture
const mypic = 'images/JonLanenga1.jpg';

// Step 6: copy your image into the "images" folder
        
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute('src', mypic);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = ['Candy', 'Candy Canes', 'Candy Corn'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = foods

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherfood = 'Syrup';

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(anotherfood);


// Step 5: repeat Step 2
document.querySelector('#food').textContent = foods


// Step 6: remove the first element in the favorite foods array
let first = foods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foods


// Step 8: remove the last element in the favorite foods array
let last = foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foods



