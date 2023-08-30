
$(function () {
  $(function () {
    // Add a click event listener to all elements with the class "saveBtn"
    $(".saveBtn").on("click", function () {
      // Get the ID of the parent time-block
      var blockId = $(this).closest(".time-block").attr("id");

      // Get the user input from the textarea within the clicked time-block
      var userInput = $(this).siblings(".description").val();

      // Save the user input in local storage using the blockId as the key
      localStorage.setItem(blockId, userInput);
    });
  });

  $(function () {
    // Get the current hour using Day.js
    var currentHour = dayjs().hour();

    // Loop through each time block
    $(".time-block").each(function () {
      // Get the hour from the block's ID
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Compare blockHour with currentHour and apply the appropriate class
      if (blockHour < currentHour) {
        console.log(`${blockHour} is less than ${currentHour}`)
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        console.log(`${blockHour} is equal to ${currentHour}`)
        $(this).addClass("present");
      } else {
        console.log(`${blockHour} is greater than ${currentHour}`)
        $(this).addClass("future");
      }
    });
  });

  $(function () {
    // Loop through each time block
    $(".time-block").each(function () {
      // Get the ID of the current time-block
      var blockId = $(this).attr("id");

      // Retrieve user input from local storage based on the blockId
      var savedInput = localStorage.getItem(blockId);

      // Set the value of the textarea to the saved input
      $(this).find(".description").val(savedInput);
    });
  });

  $(function () {
    // Get the current date using Day.js and format it
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");

    // Set the text of the element with the ID "currentDay" to the current date
    $("#currentDay").text(currentDate);
  });
});

