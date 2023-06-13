var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };

  //var person1 = new Person('Kevin');
 // console.log(person1.getName());