(function($) {

  "use_strict";



  var ccxt = require ('ccxt');
  var numExchanges = Object.keys(ccxt.exchanges).length;

  var boxList = new Array(numExchanges);


  var body = document.getElementsByTagName('body')[0];
  body.style.textAlign = "center";



    if (numExchanges > 0) {
      for (var i = 0; i < numExchanges; i++) {

        var exchange = JSON.stringify(ccxt.exchanges[i]);
        exchange = exchange.replace(/["@]/g, "");
        exchange = exchange.replace(/[_@]/g, "");

        var linebreak = document.createElement("br");
        var label = document.createElement('label');
        label.innerHTML = exchange;

        boxList[i] = document.createElement('input');
        boxList[i].type = "checkbox";

        boxList[i].id = exchange;
        boxList[i].value = exchange;
        boxList[i].name = "Exchanges[]";

        body.appendChild(label);
        body.appendChild(boxList[i]);
        body.appendChild(linebreak);


      }
    }

  // This array will store the values of the "checked" vehicle checkboxes
  var cboxArray = [];

  // Check if the vehicle value has already been added to the array and if not - add it
  function itemExistsChecker(cboxValue) {

    var len = cboxArray.length;

    if (len > 0) {
      for (var i = 0; i < len; i++) {
        if (cboxArray[i] == cboxValue) {
          return true;
        }
      }
    }

    cboxArray.push(cboxValue);
  }





  $('input[type="checkbox"]').each(function() {

    var cboxValue = $(this).val();
    var cboxChecked = localStorage.getItem(cboxValue) == 'true' ? true : false;

    // On page load check if any of the checkboxes has previously been selected and mark it as "checked"
    if (cboxChecked) {

      $(this).prop('checked', true);
      itemExistsChecker(cboxValue);

    }

    // On checkbox change add/remove the vehicle value from the array based on the choice
    $(this).change(function() {

      localStorage.setItem(cboxValue, $(this).is(':checked'));

      if ($(this).is(':checked')) {

        itemExistsChecker(cboxValue);

      } else {

        // Delete the vehicle value from the array if its checkbox is unchecked
        var cboxValueIndex = cboxArray.indexOf(cboxValue);

        if (cboxValueIndex >= 0) {
          cboxArray.splice( cboxValueIndex, 1 );
        }

      }

      console.log(cboxArray);

    });

  });

  console.log(cboxArray);

})(jQuery);
