'use strict';

$(document).ready(function(){

    importio.init({
      'auth': {
        'userGuid': '5d43f67e-5f34-4f00-9341-204a2d7c1fc4',
        'apiKey': '7GNyLXZr3WzVGshcARcILdZvZOTQNE6VBuIFziH4AtK24CSV9+XRTz0QXbQyZBtOma+OinI8Uw+9LCJdZJ011A=='
      },
      'host': 'import.io'
    });

    // Data and done callbacks
    var dataCallback = function(data) {
      //console.log("Data received", data);
      //for (var i = 0; i < data.length; i++) {
      //var d = data[i];
    //for (var k in d.data) {
      //document.write("<i>" + k + "</i>: " + d.data[k] + "<br />");
    //}
    //document.write("<hr>");
    //}
    var textItem = data[0].data.status;
    var textItem2 = data[0].data.points_record;
    console.log(textItem);
    console.log(textItem2);

      // get percent data
      var newPer = textItem.match(/\d\d.\d%/);
      //alert(newPer);
      $('#playoffChances').text(newPer);

      // get record indicator
      var newRecord = textItem2.match(/\d{1,2}.\d{1,2}-\d{1,2}/);
      $('#playoffRecord').text(newRecord);

      var newPoints = textItem2.match(/\d{1,3}/);
      $('#seasonPoints').text(newPoints);


    };


    var doneCallback = function(data) {
      //console.log("Done, all data:", data);
      //document.write("<b>Done</b><hr>");
    };

// 3. Do the query (when the function is called)
    var doQuery = function() {
      // Query for tile stars-status
      importio.query({
        'connectorGuids': [
          'c26cd2f9-5b7f-47f3-bb53-2dbfbe48adf5'
        ],
        'input': {
          'webpage/url': 'http://www.sportsclubstats.com/NHL/Western/Central/Dallas.html'
        }
      }, { 'data': dataCallback, 'done': doneCallback });
    };

    $(document).ready(doQuery());


});