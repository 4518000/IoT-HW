var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.log(b);
    debugger;
    console.dir(inner);
  };
  inner();
};
outer();