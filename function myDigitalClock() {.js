function myDigitalClock() {
    function addZero(num) {
      return num < 10 ? '0' + num : num;
    }
  
    function getMeridiem(hours) {
      return hours >= 12 ? 'PM' : 'AM';
    }
  
    function updateClock() {
      var currentDate = new Date();
      var hours = currentDate.getHours(); // 0 - 23
      var minutes = currentDate.getMinutes(); // 0 - 59
      var seconds = currentDate.getSeconds(); // 0 - 59
      var meridiem = getMeridiem(hours);
  
      // Convert to 12-hour format
      hours = hours % 12 || 12;
  
      // Add leading zeros to hours, minutes, and seconds
      hours = addZero(hours);
      minutes = addZero(minutes);
      seconds = addZero(seconds);
  
      // Display the time in your preferred format
      var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
      console.log(currentTime); // You can replace this with updating an HTML element
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
  }
  
  // Call the function to start the digital clock
  myDigitalClock();
  