let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone");
let submitButton = document.querySelector(".btn-submit");

const countryCode = "+234";
const allPrefixes = [
  "703",
  "706",
  "803",
  "806",
  "813",
  "816",
  "810",
  "814",
  "903",
  "906",
  "913",
  "916",
  "805",
  "705",
  "807",
  "811",
  "815",
  "905",
  "915",
  "802",
  "808",
  "708",
  "812",
  "701",
  "902",
  "901",
  "907",
  "912",
  "917",
  "809",
  "818",
  "817",
  "908",
  "909",
];
const mtnPrefixes = [
  "703",
  "706",
  "803",
  "806",
  "813",
  "816",
  "810",
  "814",
  "903",
  "906",
  "913",
  "916",
];
const gloPrefixes = ["805", "705", "807", "811", "815", "905", "915"];
const airtelPrefixes = [
  "802",
  "808",
  "708",
  "812",
  "701",
  "902",
  "901",
  "907",
  "912",
  "917",
];
const nineMobilePrefixes = ["809", "818", "817", "908", "909"];

function validatePhoneNumber() {
  phoneNumber.addEventListener("input", (e) => {
    /* Get the phone number entered by the user and store it in a variable. */
    let userPhoneNumber = e.target.value;
    let userPhoneNumberPrefix = "";

    getPrefix(userPhoneNumber);

    displayErrorMessage();

    displayLogo();

    /* Below are the Blocks of Functions Used */

    function getPrefix(userPhoneNumber) {
      //Get the prefix of the phone number and store in a variable
      if (userPhoneNumber.substring(0, 4) == countryCode) {
        userPhoneNumberPrefix = userPhoneNumber.substring(4, 7);
        return userPhoneNumberPrefix;
      } else {
        userPhoneNumberPrefix = userPhoneNumber.substring(1, 4);
        return userPhoneNumberPrefix;
      }
    }

    function displayErrorMessage() {
      //Display an error message on the form if the user enters an invalid phone number by checking the country code and the length of the phone number entered.
      if (
        (userPhoneNumber[0] == 0 &&
          userPhoneNumber.length == 11 &&
          allPrefixes.includes(userPhoneNumberPrefix) == true) ||
        (userPhoneNumber.substring(0, 4) == countryCode &&
          userPhoneNumber.length == 14 &&
          allPrefixes.includes(userPhoneNumberPrefix) == true)
      ) {
        return (document.querySelector(".error-msg").style.display = "");
      } else {
        return (document.querySelector(".error-msg").style.display = "block");
      }
    }

    function displayLogo() {
      // Check the length of the user input. Get the prefix of the phone number that the user enters and check each array of network providers for a match. If it matches, display the logo of the network provider.

      // for mtn
      if (
        (mtnPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 11) ||
        (mtnPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 14)
      ) {
        phoneNumber.classList.add("mtn");
      } else {
        phoneNumber.classList.remove("mtn");
      }

      // for Glo
      if (
        (gloPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 11) ||
        (gloPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 14)
      ) {
        phoneNumber.classList.add("glo");
      } else {
        phoneNumber.classList.remove("glo");
      }

      // for airtel
      if (
        (airtelPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 11) ||
        (airtelPrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 14)
      ) {
        phoneNumber.classList.add("airtel");
      } else {
        phoneNumber.classList.remove("airtel");
      }

      // for 9mobile
      if (
        (nineMobilePrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 11) ||
        (nineMobilePrefixes.includes(userPhoneNumberPrefix) &&
          userPhoneNumber.length == 14)
      ) {
        phoneNumber.classList.add("nine-mobile");
      } else {
        phoneNumber.classList.remove("nine-mobile");
      }
    }
  });
}

/* form validation */
