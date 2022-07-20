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
    let userPhoneNumber = e.target.value;

    let userPhoneNumberPrefix = userPhoneNumber.substring(1, 4);

    if (
      userPhoneNumber.length == 11 &&
      mtnPrefixes.includes(userPhoneNumberPrefix) == true
    ) {
      phoneNumber.classList.add("mtn");
    } else if (
      userPhoneNumber.length == 11 &&
      gloPrefixes.includes(userPhoneNumberPrefix) == true
    ) {
      phoneNumber.classList.add("glo");
    } else if (
      userPhoneNumber.length == 11 &&
      airtelPrefixes.includes(userPhoneNumberPrefix) == true
    ) {
      phoneNumber.classList.add("airtel");
    } else if (
      userPhoneNumber.length == 11 &&
      nineMobilePrefixes.includes(userPhoneNumberPrefix) == true
    ) {
      phoneNumber.classList.add("nine-mobile");
    } else {
      return;
    }
  });
}

validatePhoneNumber();
