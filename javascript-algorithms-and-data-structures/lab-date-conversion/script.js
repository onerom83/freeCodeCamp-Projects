const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
}

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
}
console.log(formatDateLong(currentDate));