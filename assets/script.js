// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown(); 
//variable for showing station name
var stationNameFound; 


//Click function to grab API INFO
$(document).ready(function () {
  $('.Clickme').on('click', function (e) {
    var thetrain = e.target.id;
    $(function () {
      var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "LineCode": "BL",
      }
      //Parameters for API
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
          $(function () {
            var params = {
              "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
              "Line": "BL",
            };
            //parameters for API
            $.ajax({
              url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" + thetrain + '?' + $.param(params),
              type: "GET",
            })
              .then(function (data) {
                var trainFound = data.Trains.find(Trains => {
                  return Trains
                })
                populateList(stationNameFound,trainFound.Min);
              })
              .fail(function () {
                populateFail(stationNameFound);
              })
          })
        })
        .fail(function () {
        })
    });
  })
})
//
//utility we built to figure out what the boarding situation is
function isArrivingOrBoarding(string) {
  if (string == "ARR") {
    return "The train is  now arriving!";
  } else if (string == "BRD") {
    return "The train is now boarding!";
  } else if (string == "") {
    return "Not Available";
  }
  else{
    return "Train is arriving in "+string+" minutes!";
  }
}
//Populates HTML list
function populateList(stationName,TrainMinutes){
  $('#data-entry-area').html(
    `
      <li class="li-styling"
    color: var(--secondary-color)">${stationName}</li>
      <li class="li-styling"
    color: var(--secondary-color)">${isArrivingOrBoarding(TrainMinutes)}</li>

  `
  );
}
function populateFail(stationName){
  $('#data-entry-area').html(
    `
      <li class="li-styling"
    color: var(--secondary-color)">${stationName}</li>
      <li class="li-styling"
    color: var(--secondary-color)">Train is not running.</li>

  `
  );
}