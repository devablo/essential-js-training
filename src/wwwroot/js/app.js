(function(){
    
    class Greeter {
        constructor(message) {
            this.message = message;
        }
    
        greet() {
            var element = document.querySelector('#message');
            element.innerHTML = "Developer: " + this.message;
        }
    };
    
    var greeter = new Greeter(employee.Name);
    greeter.greet();
}(window));