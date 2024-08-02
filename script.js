document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const generatedPasswordDisplay =
    document.getElementById("generated-password");
  const inputDisplay = document.getElementById("input-display");
  const backspaceBtn = document.getElementById("backspace-btn");
  const clearBtn = document.getElementById("clear-btn");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("feedback");
  let generatedPassword = "";
  let userInput = "";

  // Generate a new password and display it
  generateBtn.addEventListener("click", () => {
    generatedPassword = Math.floor(100000 + Math.random() * 900000).toString();
    generatedPasswordDisplay.textContent = generatedPassword;
    feedback.textContent = "";
    inputDisplay.textContent = "";
    userInput = "";
  });

  // Append digit to the input display
  document.querySelectorAll(".keypad-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (userInput.length < 6) {
        userInput += button.textContent;
        inputDisplay.textContent = userInput;
      }
    });
  });

  // Delete the last digit entered
  backspaceBtn.addEventListener("click", () => {
    userInput = userInput.slice(0, -1);
    inputDisplay.textContent = userInput;
  });

  clearBtn.addEventListener("click", () => {
    userInput = "";
    inputDisplay.textContent = userInput;
  });

  submitBtn.addEventListener("click", () => {
    if (userInput === generatedPassword) {
      feedback.innerHTML =
        '<span style="color: green;">Success! Password matched! &#x2714;</span>';
    } else {
      feedback.innerHTML =
        '<span style="color: red;">Error! Password did not match. &#x2716;</span>';
    }
  });
});
