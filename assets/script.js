// Dropdown functionality
$('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();



// Variables 
var button = document.querySelector('.button')
// DATA TEST BUTTON
button.addEventListener('click',function(){
    
  $(function() {
    var params = {
        "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
        "LineCode":"BL",
    };
    $.ajax({
        url: "https://api.wmata.com/Rail.svc/json/jStations?" + $.param(params),
        type: "GET",
    })
    .done(function(data) {
      console.log(data);
      for(var i=0;i<data.Stations.length;i++){
      console.log(data.Stations[i]);
      }
    })
    .fail(function() {
        alert("error");
    });
  });
  // $(function() {
  //   var params = {
  //       "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
  //   };
    
  //   $.ajax({
  //       url: "https://api.wmata.com/Rail.svc/Lines" + $.param(params),
  //       type: "GET",
  //   })
  //   .then(function(data) {
  //       console.log(data);
  //   })
  //   .fail(function() {
  //       alert("error");
  //   });
  // });
});
