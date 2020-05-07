// const Coffee = function(){}; 
// Coffee.prototype.boilWater = function(){ 
//  console.log( '把水煮沸' ); 
// }; 
// Coffee.prototype.brewCoffeeGriends = function(){ 
//  console.log( '用沸水冲泡咖啡' ); 
// }; 
// Coffee.prototype.pourInCup = function(){ 
//  console.log( '把咖啡倒进杯子' ); 
// }; 
// Coffee.prototype.addSugarAndMilk = function(){ 
//  console.log( '加糖和牛奶' ); 
// }; 
// Coffee.prototype.init = function(){ 
//  this.boilWater(); 
//  this.brewCoffeeGriends(); 
//  this.pourInCup(); 
//  this.addSugarAndMilk(); 
// }; 
// const coffee = new Coffee(); 
// coffee.init();

// const Tea = function(){}; 
// Tea.prototype.boilWater = function(){ 
//  console.log( '把水煮沸' ); 
// }; 
// Tea.prototype.steepTeaBag = function(){ 
//  console.log( '用沸水浸泡茶叶' ); 
// }; 
// Tea.prototype.pourInCup = function(){ 
//  console.log( '把茶水倒进杯子' ); 
// }; 
// Tea.prototype.addLemon = function(){ 
//  console.log( '加柠檬' ); 
// }; 
// Tea.prototype.init = function(){ 
//  this.boilWater(); 
//  this.steepTeaBag(); 
//  this.pourInCup(); 
//  this.addLemon(); 
// }; 
// const tea = new Tea(); 
// tea.init();

const Beverage = function () {}

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸')
}

Beverage.prototype.brew = function () {}

Beverage.prototype.pourInCup = function () {}

Beverage.prototype.addCondiments = function () {}

Beverage.prototype.init = function () {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
}

const Coffee = function () {}

Coffee.prototype = new Beverage()

Coffee.prototype.brew = function () {
    console.log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进辈子')
}

Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶')
}

const coffee = new Coffee()
coffee.init()
