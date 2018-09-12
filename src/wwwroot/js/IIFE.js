// Immediately Invoked Function Expression  (IIFE)
(function(target){
    
    var internalProcessor = function(name){
        return name + ' is working';
    };

    var Employee = function(name) {
        this.name = name;
    };

    Employee.prototype = {
        doWork: function(){
            return internalProcessor(this.name);
        }
    }

    target.Employee = Employee;

}(window));