const contactForm = document.getElementById("contact_form");
const visitorName = document.getElementById("visitor_name");
const visitorEmail = document.getElementById("visitor_email");
const visitorPhone = document.getElementById("visitor_phone");
const visitorSubject = document.getElementById("visitor_subject");
const visitorMessage = document.getElementById("visitor_message");
const nameError = document.getElementById("invalid_feedback_name");
const emailError = document.getElementById("invalid_feedback_email");
const phoneError = document.getElementById("invalid_feedback_phone");
const subjectError = document.getElementById("invalid_feedback_subject");
const messageError = document.getElementById("invalid_feedback_message");
const formResponseDiv = document.getElementById("from_submission_msg");
const successResponseCard = document.getElementById("success_response_card");
const failedResponseCard = document.getElementById("failed_response_card");
const btnClosedSmm = document.getElementById("btn_closed_smm");
const btnClosedFmm = document.getElementById("btn_closed_fmm");

btnClosedSmm.addEventListener("click", ()=>{formResponseDiv.style.display="none"})
btnClosedFmm.addEventListener("click", ()=>{formResponseDiv.style.display="none"})
const buttonPressed = () => {
  formResponseDiv.classList.toggle("toggle_response_div");
  console.log("pressed")
};

const formValidData = (event) => {
  event.preventDefault();
  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{11}$/;
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";
  subjectError.innerHTML = "";
  messageError.innerHTML = "";
  let errorMessage = "";

  if (!namePattern.test(visitorName.value)) {
    errorMessage += "Name should only contain letters.\n";
    nameError.innerHTML = "Please enter a valid name";
  }

  if (!emailPattern.test(visitorEmail.value)) {
    errorMessage += "Please enter a valid email address.\n";
    emailError.innerHTML = "Please enter a valid email address";
  }

  if (!phonePattern.test(visitorPhone.value)) {
    errorMessage += "Phone number should be exactly 12 digits.\n";
    phoneError.innerHTML = "Please enter a valid phone number";
  }

  if (visitorSubject.value.length < 3) {
    errorMessage += "Subject should have at least 3 characters.\n";
    subjectError.innerHTML = "Subject should have at least 3 characters";
  }

  const messageWordCount = visitorMessage.value.trim().split(/\s+/).length;
  if (messageWordCount < 3 || messageWordCount > 140) {
    errorMessage += "Message should have 3 to 140 words.\n";
    messageError.innerHTML = "Your message should have 3 to 140 word.";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
  } else {
    alert(visitorName.value + " your form has been submitted");
    sendMail();
    visitorName.value = "";
    visitorEmail.value = "";
    visitorPhone.value = "";
    visitorSubject.value = "";
    visitorMessage.value = "";
  }
};
contactForm.addEventListener("submit", formValidData);
const sendMail = async () => {
  var formData = {
    visitor_name: visitorName.value,
    visitor_email: visitorEmail.value,
    visitor_phone: visitorPhone.value,
    visitor_subject: visitorSubject.value,
    visitor_message: visitorMessage.value,
  };
  const serviceID = "service_hos5esb";
  const templateID = "template_d5xotza";
  try {
    const request = await emailjs.send(serviceID, templateID, formData);
    formResponseDiv.style.display = "flex";
    failedResponseCard.style.display = "none";
    successResponseCard.style.display = "block";
    console.log(request);
  } catch (response_error) {
    formResponseDiv.style.display = "flex";
    failedResponseCard.style.display = "block";
    successResponseCard.style.display = "none";
    console.log(response_error);
  }
};
