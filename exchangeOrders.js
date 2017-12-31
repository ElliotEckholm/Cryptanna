(function($) {

  "use_strict";



  var ccxt = require ('ccxt');
  var numExchanges = Object.keys(ccxt.exchanges).length;

  var boxList = new Array(numExchanges);


  //var body = document.getElementsByClassName('order');
    var div = document.getElementById('2');
  div.style.textAlign = "center";


      if (numExchanges > 0) {
        for (var i = 0; i < numExchanges; i++) {

          var exchange = JSON.stringify(ccxt.exchanges[i]);
          exchange = exchange.replace(/["@]/g, "");
          exchange = exchange.replace(/[_@]/g, "");

          var linebreak = document.createElement("br");
          var label = document.createElement('label');
          label.innerHTML = exchange;



          div.appendChild(label);

          div.appendChild(linebreak);


        }
      }


})(jQuery);
