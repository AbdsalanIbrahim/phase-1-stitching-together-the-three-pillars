// We use the Objects below to control toggling like / unlike status 
const glyphStates = {
    "♡": "♥",  // Empty heart to filled heart
    "♥": "♡"   // Filled heart to empty heart
  };
  
  const colorStates = {
    "red": "",  // Red heart to no color
    "": "red"   // No color to red heart
  };
  
  // Select all the hearts (like buttons)
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    const heart = e.target; // The clicked heart
    mimicServerCall()
      .then(function(serverMessage){
        // Successfully notified server, now toggle the heart
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        // Notify the user if there was a problem
        alert("Error! Unable to like this post.");
      });
  }
  
  // Attach event listeners to all heart elements
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  
  // Mock server call function to simulate interaction with a backend
  function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // Simulate success or failure (80% success rate)
        const isSuccess = Math.random() > 0.2;
        if (isSuccess) {
          resolve("Pretend remote server notified of action!");
        } else {
          reject("Error: Server is unavailable.");
        }
      }, 300); // Simulated delay of 300ms
    });
  }
  