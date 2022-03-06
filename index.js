function getName() {
  var fullDate = document.getElementById("dateborn").value;
  var year = fullDate.substring(0, 4);
  var month = fullDate.substring(5, 7);
  var day = fullDate.substring(8, 10);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var output = document.getElementById("akan");
  var CC = parseInt(year.substring(0, 2));
  var YY = parseInt(year.substring(2, 4));
  var MM = parseInt(month);
  var DD = parseInt(day);
  var formulaWeekDay =
    (Math.floor(CC / 4) -
      2 * CC -
      1 +
      5 * Math.floor(YY / 4) +
      26 * Math.floor((MM + 1) / 10) +
      DD) %
    7;
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (gender == "male") {
    output.innerText =
      "The day of the week you were born is" +
      " " +
      weekDay[formulaWeekDay] +
      " " +
      "hence your akan name is" +
      " " +
      female[formulaWeekDay];
  } else if (gender == "female") {
    output.innerText =
      "The day of the week you were born is" +
      " " +
      weekDay[formulaWeekDay] +
      " " +
      "your akan name is" +
      " " +
      male[formulaWeekDay];
  }
}
