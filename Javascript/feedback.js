// Function to create a tooltip error message
function showTooltip(element, message) {
  element.setCustomValidity(message);
  element.reportValidity();
}

// Function to clear tooltip error message
function clearTooltip(element) {
  element.setCustomValidity("");
}

// Function to disable all fields except the current one
function disableOtherFields(currentElement) {
  const fields = document.querySelectorAll("#feedbackForm input, #feedbackForm select, #feedbackForm textarea");
  fields.forEach((field) => {
    if (field !== currentElement) {
      field.disabled = true;
    }
  });
}

// Function to enable all fields
function enableAllFields() {
  const fields = document.querySelectorAll("#feedbackForm input, #feedbackForm select, #feedbackForm textarea");
  fields.forEach((field) => {
    field.disabled = false;
  });
}

// Validation functions (same as before)
function validateName() {
  const name = document.getElementById("name");
  const nameRegex = /^[A-Za-z\s]{2,}$/;

  if (!nameRegex.test(name.value)) {
    showTooltip(name, "Please enter a valid name with at least 2 characters.");
    return false;
  } else {
    clearTooltip(name);
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    showTooltip(email, "Please include an '@' in the email address.");
    return false;
  } else {
    clearTooltip(email);
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone.value)) {
    showTooltip(phone, "Please enter a valid 10-digit phone number.");
    return false;
  } else {
    clearTooltip(phone);
    return true;
  }
}

function validateFeedback() {
  const feedback = document.getElementById("feedback");

  if (feedback.value.length > 400) {
    showTooltip(feedback, "Your feedback must be within 400 characters.");
    return false;
  } else {
    clearTooltip(feedback);
    return true;
  }
}

function validateRating() {
  const rating = document.getElementById("rating");

  if (rating.value === "") {
    showTooltip(rating, "Please select a rating.");
    return false;
  } else {
    clearTooltip(rating);
    return true;
  }
}

function validateAwareness() {
  const awareness = document.getElementById("awareness");

  if (awareness.value === "") {
    showTooltip(awareness, "Please rate your awareness of recycling programs.");
    return false;
  } else {
    clearTooltip(awareness);
    return true;
  }
}

function validateParticipation() {
  const participation = document.getElementById("participation");

  if (participation.value === "") {
    showTooltip(participation, "Please indicate your likelihood to participate.");
    return false;
  } else {
    clearTooltip(participation);
    return true;
  }
}

function validateFacilityAccess() {
  const facilityYes = document.getElementById("facility-yes");
  const facilityNo = document.getElementById("facility-no");

  if (!facilityYes.checked && !facilityNo.checked) {
    showTooltip(facilityYes, "Please answer whether recycling bins are accessible.");
    return false;
  } else {
    clearTooltip(facilityYes);
    clearTooltip(facilityNo);
    return true;
  }
}

function validateSuggestions() {
  const suggestions = document.getElementById("suggestions");

  if (suggestions.value.length > 400) {
    showTooltip(suggestions, "Your suggestions must be within 400 characters.");
    return false;
  } else {
    clearTooltip(suggestions);
    return true;
  }
}

function validateIncentives() {
  const rewardInterest = document.getElementById("reward-interest");

  if (rewardInterest.value === "") {
    showTooltip(rewardInterest, "Please indicate if incentives would encourage you to recycle.");
    return false;
  } else {
    clearTooltip(rewardInterest);
    return true;
  }
}

function validateEducation() {
  const learnRecycling = document.getElementById("learn-recycling");
  const collaborate = document.getElementById("collaborate");

  if (learnRecycling.value === "") {
    showTooltip(learnRecycling, "Please select how you prefer to learn about recycling.");
    return false;
  } else {
    clearTooltip(learnRecycling);
  }

  if (collaborate.value === "") {
    showTooltip(collaborate, "Please indicate if you'd be willing to collaborate.");
    return false;
  } else {
    clearTooltip(collaborate);
  }

  return true;
}

// Final form validation on submit
document.querySelector(".submit-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Validate all fields
  const isValid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateFeedback() &&
    validateRating() &&
    validateAwareness() &&
    validateParticipation() &&
    validateFacilityAccess() &&
    validateSuggestions() &&
    validateIncentives() &&
    validateEducation();

  if (isValid) {
    // If all validations pass, display thank you message with return button
    document.querySelector(".container").innerHTML = `
      <h2>Thank you for your feedback!</h2>
      <p>We appreciate your input and will use it to improve our services.</p>
      <button class="return-home-btn" onclick="window.location.href='../index.html'">Return to Home Page</button>
    `;
  }
});

// Event listeners for enabling fields based on focus and validation
const fields = document.querySelectorAll("#feedbackForm input, #feedbackForm select, #feedbackForm textarea");

fields.forEach((field) => {
  field.addEventListener("focus", () => {
    disableOtherFields(field); // Disable other fields when focused
  });

  field.addEventListener("blur", () => {
    switch (field.id) {
      case "name":
        validateName();
        break;
      case "email":
        validateEmail();
        break;
      case "phone":
        validatePhone();
        break;
      case "feedback":
        validateFeedback();
        break;
      case "rating":
        validateRating();
        break;
      case "awareness":
        validateAwareness();
        break;
      case "participation":
        validateParticipation();
        break;
      case "facility-yes":
      case "facility-no":
        validateFacilityAccess();
        break;
      case "suggestions":
        validateSuggestions();
        break;
      case "reward-interest":
        validateIncentives();
        break;
      case "learn-recycling":
      case "collaborate":
        validateEducation();
        break;
      default:
        break;
    }

    // After each blur event, enable fields again if the current field is valid
    if (field.checkValidity()) {
      enableAllFields();
    }
  });
});
