// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
var stationNameFound;
var trainFound;
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
          var stationName = data.Stations.find(Stations => {
            return Stations.Code == thetrain;
          });
          $('h4').text(stationName.Name);
          stationNameFound=stationName.Name;
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
          trainFound = data.Trains.find(Trains => {
            return Trains
          })
          populateList(stationNameFound,trainFound.Min);
          // $('#data-entry-area').html(
          //   `
          //     <li>Train Name: ${stationNameFound}</li>
          //     <li>${isArrivingOrBoarding(JSON.stringify(trainFound.Min))}</li>
          //     <li>Filler4</li>
          // `
          // );
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
  else{
    return "Train is arriving in "+string+" minutes.";
  }
}
function populateList(stationName,TrainMinutes){
  $('#data-entry-area').html(
    `
      <li>Train Name: ${stationName}</li>
      <li>${isArrivingOrBoarding(TrainMinutes)}</li>
      <li>Filler4</li>
  `
  );
}