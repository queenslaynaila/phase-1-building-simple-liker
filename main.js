// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const heart = document.querySelectorAll(".like-glyph");
for (const like of heart) {
  const like = e.targrt;
  like.addEventListener("click", (e) => {
    mimicServerCall("https://moringaschool.instructure.com/login/canvas")
      .then(() => {
        if (like.innerText === EMPTY_HEART) {
          like.innerText = FULL_HEART;
          like.className = "";
        } else {
          like.innerText = EMPTY_HEART;
          like.className = "activated-heart";
        }
      })
      .catch((error) => {
        const modal = document.getElementById("modal");
        modal.className = "";
        modal.innerText = error;
        setTimeout(() => (modal.className = "hidden"), 3000);
      });
  });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
