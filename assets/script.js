// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
var stationName;
$(document).ready(function () {
  $('.Clickme').on('click', function (e) {
    var thetrain = e.target.id;
    $(function () {
      var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "LineCode": "BL",
      }
      $.ajax({
        url: "https://api.wmata.com/Rail.svc/json/jStations?" + $.param(params),
        type: "GET",
      })
        .then(function (data) {
          stationName = data.Stations.find(Stations => {
            return Stations.Code == thetrain;
          });
          $('h4').text(stationName.Name);
        })
        .fail(function () {
          alert("error");
        })
    });
    $(function () {
      var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "Line": "BL",
      };

      $.ajax({
        url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" + thetrain + '?' + $.param(params),
        type: "GET",
      })
        .then(function (data) {
          var TrainFound = data.Trains.find(Trains => {
            return Trains
          })

          $('#data-entry-area').html(
            `<div class="data-display">
          <h4 class="z-depth-2 trains-styling" >Trains</h4>
          <ul id="data-entry-area" class="z-depth-4 data-entry-area">
              <li>Train Name: ${stationName.Name}</li>
              <li>${isArrivingOrBoarding(TrainFound.Min)}</li>
              <li>${TrainFound.Address}</li>
              <li>Filler4</li>
          </ul>
      </div>
          `
          );
        })
        .fail(function () {
          alert("error");
        })
    })
  })
})

//utility we built tofigure out what the boarding situation is
function isArrivingOrBoarding(string) {
  if (string == "ARR") {
    return "Arriving";
  } else if (string == "BRD") {
    return "Boarding";
  } else if (string == "") {
    return "Not Available";
  }
}