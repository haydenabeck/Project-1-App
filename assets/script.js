// Dropdown functionality
$('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
var stationCodes=[
  'C01','C03','C04','C05','C06','C07','C08','C09','C10','C13',
  'D01','D02','D03','D04','D05','D06','D07',
  'G01','G02','G03','G04','G05',
  'J02','J03',
];


// Variables 
var button = document.querySelector('.button')
// DATA TEST BUTTON
button.addEventListener('click',function(){
    
  // $(function() {
  //   var params = {
  //       "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
  //       "LineCode":"BL",
  //   };
  //   $.ajax({
  //       url: "https://api.wmata.com/Rail.svc/json/jStations?" + $.param(params),
  //       type: "GET",
  //   })
  //   .done(function(data) {
  //     console.log(data);
  //     for(var i=0;i<data.Stations.length;i++){
  //     console.log(data.Stations[i]);
  //     }
  //   })
  //   .fail(function() {
  //       alert("error");
  //   });
  // });
  $(function() {
    var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "Line": "BL",
    };
    
    $.ajax({
        url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" +stationCodes+'?'+ $.param(params),
        type: "GET",
    })
    .then(function(data) {
        console.log(data);
        for(var i=0;i<data.Trains.length;i++){
          console.log(data.Trains[i]);
          console.log(data.Trains[i].Min);
          }
    })
    .fail(function() {
        alert("error");
    });
  });
});
