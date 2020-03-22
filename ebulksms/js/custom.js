// Select all elements of interest...

const txtMessage = document.getElementById('txtMessage');
const txtFeedback = document.getElementById('pageCount');

txtMessage.addEventListener('keypress', countCharacters);

//Define the event handler function,..
// console.log(txtMessage)
function countCharacters() {
  // Get message typed in textarea
  let message = txtMessage.value;

  //Sanitize the retrieved message by taken away repeated spaces and replacing a single spaces.
  message = message.replace(/\s+/g, '');


  //Split sanitized message into word pieces
  let characterPieces = message.split('');

   // Count the total number of words in wordpieces
   let numCharacters = characterPieces.length;

   let characterRemaining = eval(160 - numCharacters);
   let page = eval(charactersRemaining/160)

   



   if (characterRemaining > 1) {
      pageCount.innerHTML = "Sorry, you have exceeded the maximum number of words allowed!"

   } else {
    pageCount.innerHTML =  `you have  ${charactersRemaining} remaining...`;

}
}