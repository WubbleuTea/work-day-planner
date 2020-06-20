//creates a variable to store current date
var now = moment().format("dddd, MMMM Do, YYYY");

var updateHour = function() {
  $('time-block').each(function(hour) {
    var blockHour = hour.id.split('-')[1]
    console.log(blockHour)
    if (blockHour < currentHour) {
      hour.addClass('past')
    } else if (blockHour === currentHour) {
     hour.removeClass('past')
     hour.addClass('present')
    } else {
      hour.removeClass('past')
      hour.removeClass('present')
      hour.addClass('future')
    };
  })
  };

//adds current day to the page
$("#currentDay").append("<p class='body'>" + now + "</p>");

//on click of text field
$(".hour-group").on("click", "textarea", function(){
    console.log("Clicked on where the text area should go")
    
  
  });

  // $(".hour-group").on("blur", "textarea", function(){
  //     console.log("this has been blurred")
 
      
  // });
//save button functionality
$(".saveBtn").on("click", function() {
  var currentButton = $(this)[0];
  console.log(currentButton);

    var value = $(this)
    .siblings('.description')
    .val();

    var time = $(this)
      .parent()
      .attr("id");

    localStorage.setItem(time, value)
  });

 
    
  // });

  //need jquery to test every time to see if the current time is past the time we currently on?
    // data ids? data-hour = #?


  // This all goes together.  
    //$(document).ready(function(){
      //Need to get current time using moment but only hours
        //for loop 
        //split at dash 
          //array of times at grabbing at index 1 because index 0 is hour
      //$("#time-block") if {check for time past} else if {check for time now} else {future}
   // }) 


  // on the .ready function it needs to check localStorage to 
  for (var i = 9; i<= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour- ${i}`))
  }