
function calculateDays() {

    const birthdayDate = document.getElementById('birthdayDate').value;
  
    const today = new Date();
  
    const birthday = new Date(birthdayDate);
  
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  
  
    const daysLeft = Math.ceil((birthday - today) / oneDay);
  
    const resultElement = document.getElementById('result');
  
    
  
    if (daysLeft < 0) {
  
      resultElement.textContent = "Your birthday has already passed!";
  
    } else if (daysLeft === 0) {
  
      resultElement.textContent = "Happy Birthday!";
  
    } else {
  
      resultElement.textContent = `There are ${daysLeft} days left until your birthday.`;
  
    }
  
  }
  
  