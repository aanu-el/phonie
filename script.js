let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone");

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
    //Get the phone number entered by the user and store it in a variable
    let userPhoneNumber = e.target.value;

    //Get the prefix of the phone number and store in a variable
    let userPhoneNumberPrefix = userPhoneNumber.substring(1, 4);

    //Display an error message on the form if the user enters an invalid phone number

    if (userPhoneNumber.length != 11) {
      document.querySelector(".error-msg").style.display = "block";
    } else {
      document.querySelector(".error-msg").style.display = "";
    }

    // Get the prefix of the phone number that the user enters and check each array of network providers for a match. If it matches, display the logo of the network provider

    if (
      mtnPrefixes.includes(userPhoneNumberPrefix) &&
      userPhoneNumber.length == 11
    ) {
      phoneNumber.classList.add("mtn");
    } else {
      phoneNumber.classList.remove("mtn");
    }

    if (
      gloPrefixes.includes(userPhoneNumberPrefix) &&
      userPhoneNumber.length == 11
    ) {
      phoneNumber.classList.add("glo");
    } else {
      phoneNumber.classList.remove("glo");
    }

    if (
      airtelPrefixes.includes(userPhoneNumberPrefix) &&
      userPhoneNumber.length == 11
    ) {
      phoneNumber.classList.add("airtel");
    } else {
      phoneNumber.classList.remove("airtel");
    }

    if (
      nineMobilePrefixes.includes(userPhoneNumberPrefix) &&
      userPhoneNumber.length == 11
    ) {
      phoneNumber.classList.add("nine-mobile");
    } else {
      phoneNumber.classList.remove("nine-mobile");
    }
  });
}

validatePhoneNumber();
