(function(window) {
  "use strict";
  var Trefoil = function() {  
  
   console.log("hello Trefoil");
   this.turnOnOffBound = this.turnOnOff.bind(this);
  
    //for demo
    this.turnOnOffBound();
  };

  Trefoil.prototype.turnOnOff = function() {
  
  };

  window.Trefoil = new Trefoil;

})(window);
