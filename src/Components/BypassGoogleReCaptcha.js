// API key
// https://2captcha.com/enterpage
const API_KEY = "XXXX";

// Find site key of a website
const googleSiteKey = document
  .getElementsByClassName("g-recaptcha")[0]
  .getAttribute("data-sitekey");

// Helper parsing function
const extractTextFromResponse = (response) =>
  response.status === 200 ? response.text().then((text) => text) : false;

// Helper delay function
const delay = (value) => new Promise((res) => setTimeout(res, value));

// Function for sending captcha we want to solve to the API
async function sendCaptcha() {
  const captchaDataString = [
    "key=" + API_KEY,
    "method=userrecaptcha",
    "googlekey=" + googleSiteKey,
    "pageurl=" + window.location.href,
  ].join("&");
  return await fetch("https://2captcha.com/in.php?" + captchaDataString)
    .then((payload) => extractTextFromResponse(payload))
    .then((payload) => {
      if (!payload || payload.substr(0, 2) !== "OK") {
        console.error("Payload is not okay", payload);
        return false;
      }
      return payload.substr(3);
    })
    .catch((error) => {
      console.error("Something went wrong", error);
      return false;
    });
}

// Function that waits for a response
async function poolResponse(
  requestId,
  counter = 0,
  counterLimit = 3,
  waitTime = 20000,
  decrementWaitTimeBy = 5000
) {
  if (counter === counterLimit || waitTime < 0) {
    console.error("Captcha was not solved in time.");
    return false;
  }
  await delay(waitTime - decrementWaitTimeBy); // Wait some time
  const dataStringRes = [
    "key=" + API_KEY,
    "action=GET",
    "id=" + requestId,
    "json=0",
  ].join("&");
  return fetch("https://2captcha.com/res.php?" + dataStringRes)
    .then((payload) => extractTextFromResponse(payload))
    .catch((error) => {
      console.error("Something went wrong", error);
      reject(false);
    });
}

// Start function
(async function () {
  // Get request id of current captcha
  const requestId = await sendCaptcha();
  if (!requestId) {
    return false;
  } // Wait for somebody to solve your captcha
  const counterLimit = 3;
  for (let i = 0; i < counterLimit; i++) {
    const payload = await poolResponse(requestId, i, counterLimit);
    if (payload === "CAPCHA_NOT_READY") {
      continue;
    }
    if (!payload || payload.substr(0, 2) !== "OK") {
      console.error("Captcha was not solved.", payload);
      return false;
    } // Save
    document.getElementById("g-recaptcha-response").innerHTML = payload;
    break;
  }
})();
