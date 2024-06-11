const password1 = "⊳x⊳୮Ĺo";
const password2 = "p2";
const password3 = "p3";

const languages = document.querySelectorAll('.language');
let languageInfoBox = document.getElementsByClassName("outer-language-info-box")[0]; // There's only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

// Hide all tabs initially
languages.forEach((language, index) => {
  if (index > 0) {
    language.style.display = 'none';
  }
});

let currentLanguageIndex = 0;

function setLanguageInfo(language) {
  let passwordInputId = `password-${language.getElementsByTagName("p")[1].textContent}`;
  let buttonId = `button-${language.getElementsByTagName("p")[1].textContent}`;
  
  switch (language.getElementsByTagName("p")[1].textContent) {

    case "Inception":
      languageInfoBox.innerHTML = `
      <div class="form-fields-text">
          <p class="language-description">
            Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
      </div>
      `;
      document.getElementById(buttonId).addEventListener("click", function (event){
        event.preventDefault();
        const inputPassword = document.getElementById(passwordInputId).value;
        if (inputPassword === password1) { 
          languages[currentLanguageIndex].style.display = 'none';
          currentLanguageIndex++;
          languages[currentLanguageIndex].style.display = 'block';
        } else {
          alert("Incorrect password!");
        }
      });
      break;

    case "King of Skies":
      languageInfoBox.innerHTML = `
      <div class="form-fields-text">
          <p class="language-description">
            Have you had enough yet??<br>No? Well I'm sure you will quit now. Refer back to the page you were sent to... Thats all I can give you for now.
          </p>
          <div class="container">
            <h1 class="container-h1">Enter what you've found here...</h1>
            <input type="text" placeholder="Enter Password" id="${passwordInputId}">
            <button type="button" class="button11" id="${buttonId}">Test your fate</button>
          </div>
      </div>
      `;
      document.getElementById(buttonId).addEventListener("click", function (event){
        event.preventDefault();
        const inputPassword = document.getElementById(passwordInputId).value;
        if (inputPassword === password2) { 
          languages[currentLanguageIndex].style.display = 'none';
          currentLanguageIndex++;
          languages[currentLanguageIndex].style.display = 'block';
        } else {
          alert("Incorrect password!");
        }
      });
      break;

    case "Worst Nightmare":
      languageInfoBox.innerHTML = `
        <div class="form-fields-text">
            <p class="language-description">
              Throughout your journey you will face many tricks and twists, be prepared to go through and escape. What is your mothers mother?
            </p>
            <div class="container">
              <h1 class="container-h1">Enter what you've found here...</h1>
              <input type="text" placeholder="Enter Password" id="${passwordInputId}">
              <button type="button" class="button11" id="${buttonId}">Test your fate</button>
            </div>
        </div>
      `;
      document.getElementById(buttonId).addEventListener("click", function (event){
        event.preventDefault();
        const inputPassword = document.getElementById(passwordInputId).value;
        if (inputPassword === password3) { 
          languages[currentLanguageIndex].style.display = 'none';
          currentLanguageIndex++;
          languages[currentLanguageIndex].style.display = 'block';
        } else {
          alert("Incorrect password!");
        }
      });
      break;
  }
}
  
  // Add event listeners to each language tab
  languages.forEach((language, index) => {
    language.addEventListener("click", () => {
      selectLanguage(language);
    });
  });