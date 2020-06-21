//creates a variable to store current date
var now = moment().format("dddd, MMMM Do, YYYY");

//creates a variable to store current hour
var currentHour = moment().format("HH");

//appends current date to page
$("#currentDay").append("<p class='body'>" + now + "</p>");

//updates the color on the page every 5 minutes
setInterval(function() {
  $(".description").each(function (colors) {
    updateHour(colors);
  });
}, (1000 * 60) * 5);


// updates the text area classes when called
var updateHour = function() {
  $('.time-block').each(function() {
    var scheduleHour = $(this).attr("id").split('-')[1]
    if (scheduleHour < currentHour) {
      $(this).removeClass('future')
      $(this).removeClass('present')
      $(this).addClass('past')
    } else if (scheduleHour === currentHour) {
      $(this).removeClass('past')
      $(this).removeClass('future')
      $(this).addClass('present')
    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    };
  })
};

// when page is called text isput back into the text field if in local storage
var reloadPage = function() {
  for (var i = 09; i<= 17; i++) {
    // beacuse of military time (in id) it was not reloading 9 so created a conditional to get that to load
    if (i === 9) {
      $(`#hour-09 .description`).val(localStorage.getItem(`hour-09`))
    } 
    //updates all other text fields
    else {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
    }
    updateHour();
  };
};


//save button functionality
$(".saveBtn").on("click", function() {
    var time = $(this)
      .parent()
      .attr("id");

    var value = $(this)
      .siblings('.description')
      .val();

    localStorage.setItem(time, value)
    updateHour();
  });

 reloadPage();
 