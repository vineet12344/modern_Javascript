// if-else

if (5 < 3) {
  console.log(true);
} else if (5 < 1) {
  console.log(true);
} else {
  console.log(false);
}

// switch statement

var day = "friday";

switch (day) {
  case "monady":
    console.log("Timings: 10:00 - 5:00");
    break;
  case "tuesday":
    console.log("Timings: 9:00 - 5:00");
    break;

  case "wednesday":
    console.log("Timings: 10:00 - 9:00");
    break;

  case "thursday":
    console.log("Timings: 10:00 - 5:00");
    break;

  case "friday":
    console.log("Timings: 9:00 - 5:00");
    break;
  case "saturday":
    console.log("Timings: 10:00 - 5:00");
    break;

  case "sunday":
    console.log("Timings: 10:00 - 12:00");
    break;
  default:
        console.log("invalid");
    break;
}
