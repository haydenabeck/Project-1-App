// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
$(document).ready(function(){
  $('.Clickme').on('click', function(e){
    var thetrain=e.target.id;
    $(function() { 
    var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "LineCode":"BL",
    }
    $.ajax({
        url: "https://api.wmata.com/Rail.svc/json/jStations?" + $.param(params),
        type: "GET",
    })
    .then(function(data) {
      var found=data.Stations.find(Stations => {
        return Stations.Code == thetrain;
      });
      $('h4').text(found.Name);
    })
    .fail(function() {
        alert("error");
    })
  });
  $(function() {
    var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "Line": "BL",
    };
    
    $.ajax({
        url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" +thetrain+'?'+ $.param(params),
        type: "GET",
    })
    .then(function(data) {
      var found=data.Trains.find(Trains=>{
      return Trains
      })
      $('#data-entry-area').text(found.Min);
      if(found.Min=='ARR'){
        $('#data-entry-area').text("Arriving");
      }
      else if(found.Min=='BRD'){
        $('#data-entry-area').text("Boarding")
      }
    })
    .fail(function() {
        alert("error");
    })
  })
})
})