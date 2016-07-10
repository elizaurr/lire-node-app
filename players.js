var inquirer = require('inquirer');
var coinFlip = true;
var starters = [];
var subs = [];
console.log(subs);

function Player(name, position, offense, defense){
  this.name = name,
  this.position = position,
  this.offense = offense,
  this.defense = defense;
  this.GoodGame = function(){
    if(coinFlip === true){
      this.offense++;
    }
    else{
      this.defense++;
    }
  },
  this.BadGame = function(){
    if(coinFlip === false){
      this.offense--;
    }
    else{
      this.defense--;
    }
  }

};

Player.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    console.log("---------------");
};
var tammer = new Player("tam", "dope", 100, 100);

