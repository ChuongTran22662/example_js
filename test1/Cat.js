function Cat(){
    console.log('This is test commit');
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}

module.exports = Cat;