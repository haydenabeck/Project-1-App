// Image click to expand

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});


// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
var StationIDS=[
  $('train1'),$('#train2'),$('#train3'),$('#train4'),
  $('#train5'),$('#train6'),$('#train7'),$('#train8'),
  $('#train9'),$('#train10'),$('#train11'),$('#train12'),
  $('#train13'),$('#train14'),$('#train15'),$('#train16'),
  $('#train17'),$('#train18'),$('#train19'),$('#train20'),
  $('#train21'),$('#train22'),$('#train23'),$('#train24'),
  $('#train25'),$('#train26'),$('#train27'),
]

var StationName=$('#train');
var stationCodes=[
  'C01','C02','C03','C04','C05','C06','C07','C08','C09','C10','C13',
  'D01','D02','D03','D04','D05','D06','D07',
  'G01','G02','G03','G04','G05',
  'J02','J03',
];
// function clickEvent(e){
//   console.log(e.target)
// }
// $(document).ready(function(){
//   $('.Clickme').on('click', function(){
//     console.log(e.target.getAttribute('name'));
//     //run the function to call the api with then if successful, then display the name on the right
    
//     //getApiInfo(e.target.name)
//     //call that function
//     //if (e.target.name )
//   })
// })
var Stations={
  StatName:StationName,
 StatCodes:stationCodes,
}

// function getApiInfo(name){

// }
// Variables 
// var button = document.querySelector('.button')
// DATA TEST BUTTON
  //each element clicked
  //put thisin a function
    //StationIDS.click(function(){
$(document).ready(function(){
  $('.Clickme').on('click', function(){
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
      console.log(data);
      for(var i=0;i<data.Stations.length;i++){
      // console.log(data.Stations[i].Name);
      // console.log(data.Stations[i].Code);
      if(data.Stations[i].Code===stationCodes[i]){
        // $(StationIDS[i]).text(data[i].Name.value);
        // console.log("working");
      }
     }
    })
    .fail(function() {
        alert("error");
    })
  });
  // $(function() {
  //   var params = {
  //       "api_key": "3125fa36e79d4814832e6a60e9f0a0a0",
  //       "Line": "BL",
  //   };
    
  //   $.ajax({
  //       url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" +stationCodes+'?'+ $.param(params),
  //       type: "GET",
  //   })
  //   .then(function(data) {
  //       console.log(data);
  //       for(var i=0;i<data.Trains.length;i++){
  //         console.log(data.Trains[i]);
  //         console.log(data.Trains[i].Min);
  //         }
  //   })
  //   .fail(function() {
  //       alert("error");
  //   })
  // })
})
})