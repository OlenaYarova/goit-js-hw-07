const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", handleInput);

function handleInput(event) {
    const name = event.target.value.trim();
    if (name === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = name;
  }
        
    }

