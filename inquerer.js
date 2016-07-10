var inquirer = require ('inquirer');

function Programmer(name, position, age, language){
  this.name: name,
  this.position: position,
  this.age: age,
  this.language: language;
  this.printInfo = function(){
    console.log("name: " + this.name + "\nPostion: " + this.posititon + "\nAge: " + this.age + "\nLanguages: " + this.language)
  }
}
var count = 0;

var askQuestion = function(){
  if(count < 5){
    console.log("NEW PROGRAMMER")
  }
    inquirer.prompt([{
        name: "name",
        message: "what is your name?"
    }, {
        name: "position",
        message: "what is your position?"
    }, {
        name: "age",
        message: "what is your age?"
    }, {
        name: "language",
        message: "what is your favorite language?"
    }]).then
}
