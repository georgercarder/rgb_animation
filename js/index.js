(function(window) {
  "use strict";
  var RGBAnim = function() {  
  
   console.log("hello RGBAnim");
   this.turnOnBound = this.turnOn.bind(this);
   this.turnOffBound = this.turnOnOff.bind(this);
    //for demo
  };

  RGBAnim.prototype.turnOn = function() {
  
  };

  RGBAnim.prototype.turnOff = function() {
  
  };

  window.RGBAnim = new RGBAnim;

})(window);
