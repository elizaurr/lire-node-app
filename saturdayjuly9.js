function Programmer(option){
  this.name: option.name;
  this.posititon: option.posititon;
  this.age: option.age;
  this.language: option.language;
  this.printInfo = function(){
    console.log("name: " + this.name + "\nPostion: " + this.posititon + "\nAge: " + this.age + "\nLanguages: " + this.language)
  }
}


var eli = new Programmer ({'elizaur', 'developer', 27,'Javascript'});

eli.printInfo();