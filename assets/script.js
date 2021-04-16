// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown(); 
//variable for showing station name
var stationNameFound; 
//variable for local storage
var count=0;
//names of trains
var trainNames=[
  'Metro Center',
'McPherson Square',
'Farragut West',
'Foggy Bottom-GWU',
'Rosslyn',
'Arlington Cemetery',
'Pentagon',
'Pentagon City',
'Crystal City',
'Ronald Reagan Washington National Airport',
'Braddock Road',
'King St-Old Town',
'Federal Triangle',
'Smithsonian',
'L’Enfant Plaza',
'Federal Center SW',
'Capitol South',
'Eastern Market',
'Potomac Ave',
'Stadium Armory',
'Benning Road',
'Capitol Heights',
'Addison Road-Seat Pleasant',
'Morgan Boulevard',
'Largo Town Center',
'Van Dorn Street',
'Franconia-Springfield',
]
//local storage variable
var t=0
trainMin=null;
for (var y=0;y<trainNames.length;y++)
Savedlist(trainNames[y],JSON.stringify(t));
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
                if (trainFound.min=='---'){
                  populateFail(stationNameFound)
                }
                populateList(stationNameFound,trainFound.Min);
                trainMin=trainFound.Min
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
    var testData= {
      statname:stationName,
      arrive:isArrivingOrBoarding(TrainMinutes),
    }
    function StoreData(key,data){
      return localStorage.setItem(key,data);
    }
    function GetData(key,data){
     return localStorage.getItem(key,data);
    }
    var stateName={
      name:[]
    }
    var arrival={
      name:[]
    }
    count++
    //pushes data to local storage
    stateName.name.push(stationName);
      arrival.name.push(JSON.stringify(t));
    StoreData(stateName.name,JSON.stringify(testData.statname));
    testData1=JSON.parse(GetData(stateName.name,testData));
    StoreData(arrival.name,JSON.stringify(testData.arrive));
    testData2=JSON.parse(GetData(arrival.name,testData));
    testData3=testData1+' '+testData2;
      var saveData = $(
        `
        <li class="li-styling"
        color: var(--secondary-color)">${testData1}</li>
          <li class="li-styling"
        color: var(--secondary-color)">${testData2}</li>
      `
      );
        $('#data-entry-area').append(saveData); 
        t++;
}
function populateFail(stationName){
  // $('#data-entry-area').html(
    
    var saveData = $(
    `
      <li class="li-styling"
      color: var(--secondary-color)">${stationName}</li>
        <li class="li-styling"
        color: var(--secondary-color)">Train is not running.</li>
    );
    

  `
      
    );
    $('#data-entry-area').append(saveData);
}
//pushes local storage data to page
function Savedlist(stationName,TrainMinutes){
  function GetData(key,data){
   return localStorage.getItem(key,data);
  }
  var testData= {
    statname:stationName,
    arrive:isArrivingOrBoarding(TrainMinutes),
  }
  stateName=stationName;
  var stateName={
    name:[

    ]
  }
  count=TrainMinutes
  testData1=JSON.parse(GetData(stationName,testData));
  testData2=JSON.parse(GetData(TrainMinutes,testData));
  if(testData1!=null){
  testData3=testData1+' '+testData2;
    t++;
    var saveData = $(
      `
      <li class="li-styling"
      color: var(--secondary-color)">${testData1}</li>
        <li class="li-styling"
      color: var(--secondary-color)">${testData2}</li>
    `
    );
      $('#data-entry-area').append(saveData); 
    }
} 