// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

function likeEvent(e) {
  const hearty = e.target;
  mimicServerCall()
    .then(() => {
      if (like.innerText === EMPTY_HEART) {
        like.innerText = FULL_HEART;
        like.className = "activated-heart";
      } else {
        like.innerText = EMPTY_HEART;
        like.className = "";
      }
    })
    .catch((error) => {
      let modalClass = document.getElementById("modal");
      modalClass.className = " ";
      modalClass.textContent = error;
      setTimeout(() => {
        (modalClass.className = "hidden"), 3000;
      });
    });
}

for (const like of hearts) {
  glyph.addEventListener("click", likeEvent);
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
