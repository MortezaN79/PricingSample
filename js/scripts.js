const input = document.getElementById("range-bar")
const min = input.min;
const max = input.max;
const value = input.value;

input.style.background = `linear-gradient(to right, purple 0%, purple ${(value-min)/(max-min)*100}%, grey ${(value-min)/(max-min)*100}%, grey 100%)`

input.oninput = function (){
    this.style.background = `linear-gradient(to right, purple 0%, purple ${(this.value-this.min)/(this.max-this.min)*100}%, grey ${(this.value-this.min)/(this.max-this.min)*100}%, grey 100% )`
}