// Dropdown functionality
$('.dropdown-trigger1').dropdown();
$('.dropdown-trigger2').dropdown();



// Variables 
var button = document.querySelector('.button')

// DATA TEST BUTTON
button.addEventListener('click', async function(){
    
    $.ajax({
        url: "http://lapi.transitchicago.com/api/1.0/ttfollow.aspx?key=bc18ac117906420fa9ac92103915f09d&runnumber=830&outputType=JSON",
        type: "GET",  
      }).then(function(data) {
      alert("Got some data!");
      console.log(data);
      })
});