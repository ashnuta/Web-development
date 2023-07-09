//object creation
// let rectangle = {
//     length : 1,
//     breadth: 2,

//adding behaviour using draw function (here method)
//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function

// function createRectangle(){
//     //create
//     // let rectangle = {
//         return rectangle ={ //another way
//         length : 1,
//         breadth: 2,

//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
//     // return rectangle; // return 
// }
// let rectangleObj1= createRectangle();

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();


//apne ko saare ke length breadth 1,2 nhi chahiye toh input parameters
// function createRectangle(length, breadth){
// function createRectangle(len, br){
//     //create
//     // let rectangle = {
//         return rectangle ={ //another way
//         // length : length,
//         // breadth:breadth, or

//         // length,
//         // breadth, or

//         length : len,
//         breadth: br,



//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
//     // return rectangle; // return 
// }
// let rectangleObj1 = createRectangle(5, 4);


// function createRectangle(len, br){

//     return rectangle ={
//         length: len,
//         breadth: br,

//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1 = createRectangle(5, 4); //har baar factor function ko call kar rhe hain
// let rectangleObj2 = createRectangle(3, 2);
// let rectangleObj3 = createRectangle(1, 4);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is capital -> NumberOfStudents
//constructor function -> prop/methods ko -> initialise/ define kar rha hai
//i.e return nhi kara

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}
//object creation/ calling using constructor function
let rectangleObject = new Rectangle(5,1);
//here Rectangle(5,1) is a constructor

//dynamic nature of object

//addition
rectangleObject.color = 'yellow'; 
console.log(rectangleObject);

//deletion
delete rectangleObject.color; 
console.log(rectangleObject);