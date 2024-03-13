const Laptop = function (manufacturer, model, operatingSysytem){
    this.manufacturer=manufacturer;
    this.model=model;
    this.operatingSysytem = operatingSysytem;
}

Laptop.prototype.install = function(program){
    console.log(`Installing ${program} on ${this.manufacturer} ${this.model}`);
}

export default Laptop;