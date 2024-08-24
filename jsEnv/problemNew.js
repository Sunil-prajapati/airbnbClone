
function isValidMonthAndYear(expirationDate) {
    const [month, year] = expirationDate.split('/').map(Number);
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Extract last two digits
  
    // Check if the year is greater than the current year
    if (year < currentYear) {
      return false;
    }
  
    // Check if the month is valid (between 1 and 12)
    if (month < 1 || month > 12) {
      return false;
    }
  
    // If the year is the same as the current year, check if the month is in the future
    if (year === currentYear && month <= currentDate.getMonth() + 1) {
      return false;
    }
  
    // If all checks pass, the month and year are valid
    return true;
  }
  
  // Example usage
  const expirationDate = '32/24';
  
  const result = isValidMonthAndYear(expirationDate);
  console.log(result); // Output: true or false
  