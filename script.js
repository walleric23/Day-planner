// event listener for save button
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").text();
  localStorage.setItem(time, value);
});
// value for local storage of hours of the work day 9am-5pm
$(".hour-9").val(localStorage.getItem("9AM"));
$(".hour-10").val(localStorage.getItem("10AM"));
$(".hour-11").val(localStorage.getItem("11AM"));
$(".hour-12").val(localStorage.getItem("12PM"));
$(".hour-1").val(localStorage.getItem("1PM"));
$(".hour-2").val(localStorage.getItem("2PM"));
$(".hour-3").val(localStorage.getItem("3PM"));
$(".hour-4").val(localStorage.getItem("4PM"));
$(".hour-5").val(localStorage.getItem("5PM"));
// format to display current date at top of page
$("#currentDay").text(moment().format("MMM Do YY"));
// functions and else statement for adding class of past,present,future based on real time
$(".row").each(function () {
  var block = parseInt($(this).attr("id"));
  var currentHour = parseInt(moment().format("HH"));
  if (currentHour > block) {
    // add past of current hour is greater than block time
    $(this).addClass("past");
  } else if (currentHour === block) {
    // adds class of present of current time is equal to block time
    $(this).addClass("present");
    // adds future class otherwise
  } else {
    $(this).addClass("future");
  }
});
