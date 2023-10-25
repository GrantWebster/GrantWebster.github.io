const dialog = document.getElementById("greeting-dialog");
dialog.showModal();

let getUserName = document.getElementById('get-user-name');
let userName = document.getElementById('user-name');
const submitButton = document.getElementById('submit-button');

//This records any new input made and sets the submitbutton value to that input
getUserName.addEventListener("change", (e) => {
  submitButton.value = getUserName.value
})

//This sets the conditional for the userName to either be the default value or the user inputted value
dialog.addEventListener("close", (e) => {
  userName.innerText = dialog.returnValue !== "default" ? dialog.returnValue : userName.innerText;
})

//This prevents the form from submitting and reloading the page
//When the dialog closes, it will grab whatever value is stored in the submit button (which should be the user input) and return that value
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close(submitButton.value);
})