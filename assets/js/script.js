//creates a variable to store current date
var now = moment().format("dddd, MMMM Do, YYYY");

//adds current day to the page
$("#currentDay").append("<p class='body'>" + now + "</p>");

