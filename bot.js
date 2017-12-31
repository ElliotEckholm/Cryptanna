(function($) {

  "use_strict";

  var ccxt = require ('ccxt');
  var numExchanges = Object.keys(ccxt.exchanges).length;

  var boxList = new Array(numExchanges);

  for (var i = 0; i < numExchanges; i++){

      boxList[i] = document.createElement('input');
      boxList[i].type = "checkbox";
      boxList[i].id = JSON.stringify(ccxt.exchanges[i]);
      boxList[i].value = JSON.stringify(ccxt.exchanges[i]);


  }

  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '10%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < numExchanges; i++) {
      var tr = document.createElement('tr');

      for (var j = 0; j < 1; j++) {


            //  var checkbox = document.createElement('input');
            //  checkbox.type = "checkbox";
            //  checkbox.id = "checkbox";
            //  checkbox.onclick = function() { check() };

              var td = document.createElement('td');
              var exchangeList = JSON.stringify(ccxt.exchanges[i]);
              exchangeList = exchangeList.replace(/["@]/g, "");
              exchangeList = exchangeList.replace(/[_@]/g, "");
              td.appendChild(document.createTextNode(exchangeList));
              td.appendChild(boxList[i]);
              i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
              tr.appendChild(td);

      }
      tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);

  // This array will store the values of the "checked" vehicle checkboxes
  //var cboxArray = [];

  // Check if the vehicle value has already been added to the array and if not - add it
  function itemExistsChecker(cboxValue) {

    var len = boxList.length;

    if (len > 0) {
      for (var i = 0; i < len; i++) {
        if (boxList[i] == cboxValue) {
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
        var cboxValueIndex = boxList.indexOf(cboxValue);

        if (cboxValueIndex >= 0) {
          boxList.splice( cboxValueIndex, 1 );
        }

      }

      console.log(boxList);

    });

  });

  console.log(boxList);

})(jQuery);


/*



window.blah = function() {


    (async () => {
        let gdax = new ccxt.gdax ();
        let markets = await gdax.load_markets ();
        console.log (gdax.id, markets);

        for (var i = 0; i <  Object.keys(ccxt.exchanges).length; i++){

          document.getElementById("result").innerHTML =  Object.keys(ccxt.exchanges[i]).toString();

        }
      //  document.getElementById("result").innerHTML =  JSON.stringify(ccxt.exchanges[0]);


      //document.getElementById("result").innerHTML =  Object.keys(ccxt.exchanges).length.toString();

    }) ()



}






// window.check = function(i) {
//
//
//     // Get the output text
//     var text = document.getElementById("text");
//
//     text.appendChild(document.createTextNode("Hello"));
//
//     document.getElementById("-").innerHTML = "true";
//
//     if (boxList[i].checked == true){
//         text.style.display = "block";
//         document.getElementById("-").innerHTML = "true";
//     } else {
//         text.style.display = "none";
//         document.getElementById("-").innerHTML = "false";
//     }
//
//
//
// }
*/
