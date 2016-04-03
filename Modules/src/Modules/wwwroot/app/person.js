System.register([], function(exports_1) {
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(fn, ln) {
                    this.firstName = fn;
                    this.lastName = ln;
                }
                Person.prototype.speak = function () {
                    return "My name is " + this.firstName + " " + this.lastName + " ";
                };
                return Person;
            })();
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=person.js.map