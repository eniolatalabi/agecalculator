window.onload = function () {
  //inputs
  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const btn = document.querySelector(".submit");
  //input classes for error warning
  const dayWarning = document.querySelector(".day-error");
  const monthWarning = document.querySelector(".month-error");
  const yearWarning = document.querySelector(".year-error");
  //label classes for error warning
  const dayLabel = document.querySelector(".day-label");
  const monthLabel = document.querySelector(".month-label");
  const yearLabel = document.querySelector(".year-label");
  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  //result

  const resultDay = document.querySelector("#day-res");
  const resultMonth = document.querySelector("#month-res");
  const resultYear = document.querySelector("#year-res");
  const daysInMonth = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];

btn.addEventListener("click", formatDate);

  function validate() {
    const validateInput = (
      inputValue,
      maxValue,
      label,
      warning,
      inputField
    ) => {
      let inputFlag = false;
      if (!inputValue || parseInt(inputValue) > maxValue) {
        label.classList.add("label-error");
        warning.classList.remove("hide");
        inputField.classList.add("input-error");
        inputFlag = false;
      } else {
        label.classList.remove("label-error");
        warning.classList.add("hide");
        inputField.classList.remove("input-error");
        inputFlag = true;
      }
      return inputFlag;
    };

    const dayFlag = validateInput(day.value, 31, dayLabel, dayWarning, day);
    const monthFlag = validateInput(
      month.value,
      12,
      monthLabel,
      monthWarning,
      month
    );
    const yearFlag = validateInput(
      year.value,
      currentYear,
      yearLabel,
      yearWarning,
      year
    );

    return dayFlag && monthFlag && yearFlag;
  }
  function formatDate() {
    if (validate()) {
      var getDay, getMonth, getYear;
      if (day.value > currentDay) {
        currentDay = currentDay + daysInMonth[currentMonth - 1];
        currentMonth = currentMonth - 1;
      }
      if (month.value > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
      }
      getDay = currentDay - day.value;
      getMonth = currentMonth - month.value;
      getYear = currentYear - year.value;
      
      
      
      document.querySelector(".result-container").innerHTML = `You are ${getYear} year(s) ${getMonth} month(s) ${getDay} day(s) old.`;
      let status;
      if (getYear > 27) {
        status = "Team DevPros regrets to inform you that you are above the required age for this program."
      }
      else if (getYear < 23) {
        status = "Team DevPros regrets to inform you that are below the required age for this program."
      }
      else {
        status = "Congratulations! Team DevPros welcome you to SAIL."
      }
      document.querySelector(".qualify").innerHTML = status 
    }
  }
};
