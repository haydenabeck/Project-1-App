// Dropdown functionality
var dropdown1 = $('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();
var StationIDS1=[
  $('train1'),$('#train2'),$('#train3'),$('#train4'),
  $('#train5'),$('#train6'),$('#train7'),$('#train8'),
  $('#train9'),$('#train10'),$('#train11'),$('#train12'),
  $('#train13'),$('#train14'),$('#train15'),$('#train16'),
  $('#train17'),$('#train18'),$('#train19'),$('#train20'),
  $('#train21'),$('#train22'),$('#train23'),$('#train24'),
  $('#train25'),$('#train26'),$('#train27'),
];
var trainsSelected= [
    
];
var StationIDS=[
  train1=0,train2=1,train3=2,train4=3,
  train5=4,train6=5,train7=6,train8=7,
  train9=8,train10=9,train11=10,train12=11,
  train13=12,train14=13,train15=14,train16=15,
  train17=16,train18=17,train19=18,train20=19,
  train21=20,train22=21,train23=22,train24=23,
  train25=24,train26=25,train27=26,
];
var StationName=$('#train');
var stationCodes=[
  'C01','C02','C03','C04','C05','C06','C07','C08','C09','C10','C12','C13',
  'D01','D02','D03','D04','D05','D06','D07','D08',
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
  StatIDS:StationIDS,
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
      for (var yo=0;yo<Stations.StatIDS.length;yo++){
      // Stations.StatCodes[Stations.StatIDS[yo]]
        // console.log(Stations.StatCodes[Stations.StatIDS[yo]]);
      }
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
      console.log(data);
    })
    .fail(function() {
        alert("error");
    })
  })
})
})