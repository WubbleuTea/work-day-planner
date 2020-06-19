//creates a variable to store current date
var now = moment().format("dddd, MMMM Do, YYYY");

//adds current day to the page
$("#currentDay").append("<p class='body'>" + now + "</p>");

//on click of text field
$(".hour-group").on("click", ".textarea", function(){
    console.log("Clicked on where the text area should go")
    
  
  });

  $(".hour-group").on("blur", ".textarea", function(){
      console.log("this has been blurred")
 
      
  });
//save button functionality
$(".hour-group").on("click", ".saveBtn", function(){
    console.log("Clicked on saveBtn")


  });

  //need jquery to test every time to see if the current time is past the time we currently on?
    // data ids? data-hour = #?
  