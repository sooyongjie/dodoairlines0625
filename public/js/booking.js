// clear summary div by deleting all nodes
clear = () => {
  right.querySelectorAll("*").forEach((n) => {
    if (n.className != "summary") n.remove();
  });
};

// append error msg to summary div
displayErr = (errMsg) => {
  clear();
  summary.innerHTML = "Note";
  let txt = document.createElement("h4");
  txt.className = "summary-text"; // give element a class for styling
  txt.innerHTML = errMsg;
  right.appendChild(txt);
};

// identification validation
checkID = (input) => {
  if(input.value.match(/[0-9]{8}/) && input.value.length >= 9) {
    input.style.borderColor = "white";
    return false
  } else {
    input.style.borderColor = "red";
    displayErr("ID or Passport Number invalid.")
    return true
  }
}

// phone number validation
checkTel = (input) => {
  if (input.value.match(/^\d{10}$/) || input.value.match(/^\d{11}$/)) { // if input matches the required characters
    input.style.borderColor = "white";
    return false
  } else { // invalid input
    input.style.borderColor = "red";
    return true
  }
}

// email validation
checkEmail = (input) => {
  if (input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { // if input doesn't match the required characters
    input.style.borderColor = "white";
    return false
  } else { // invalid input
    input.style.borderColor = "red";
    return true
  }
}

// date validation
checkDate = (input) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  currentDate = `${yyyy}-${mm}-${dd}`;
  if(input.value < currentDate) { // if selected date is earlier than current date
    input.style.borderColor = "red";
    return true;
  } else { // valid input
    input.style.borderColor = "white";
    return false;
  }
}

// calculate total price of tickets
priceCalcultion = (price) => {
  let adultTicket = document.getElementById("Adult Ticket");
  let childTicket = document.getElementById("Child Ticket");
  let infantTicket = document.getElementById("Infant Ticket");
  let totalVal = (price * adultTicket.value) + (price * 0.8 * childTicket.value) + (price * 0.5 * infantTicket.value)

  if(adultTicket.value < 0 || childTicket.value < 0 || infantTicket.value < 0) { // if input(s) are negative values 
    displayErr( "Enter the correct ticket quantity") 
  }
  else if(totalVal == 0) { // if input for tickets are 0
    displayErr("Enter ticket quantity")
  }
  else { // valid ticket input
    let total = `Total: ${totalVal}`
    let txt = document.createElement("h3");
    txt.innerHTML = total;
    right.appendChild(txt);
  }
};

// display summary information function
displaySummary = () => {
  let hr = document.createElement("hr");
  right.appendChild(hr);
  let depature = document.getElementById("Depature");
  let destination = document.getElementById("Destination");
  if (destination.value == "Photopia") {
    priceCalcultion(250);
  } else if (destination.value == "Isabelle's Cottage") {
    priceCalcultion(200);
  } else if (destination.value == "Nook Family") {
    priceCalcultion(300);
  }
}

// function to read input form
getFormData = () => {
  clear(); // clear summary div content
  let index = document.getElementById("Depature").selectedIndex;
  let form = document.forms["flight"]; // get form element
  let err = false;
  let total = 0;
  form.querySelectorAll("*").forEach((input) => {
    if (input.nodeName == "INPUT" || input.nodeName == "SELECT") { // exclude <option> 
      if (input.id == "Identification")
        err = checkID(input)
      if (input.id == "Tel") // phone number input
        err = checkTel(input)
      else if (input.id == "Email") // email input
        err = checkEmail(input)
      else if(input.id == "Date") // date input
        err = checkDate(input)
      else if (input.className == "ticket" && input.value == "")  // ticket input
        input.value = "0";  // set value to 0 as user does not need to enter 0 for each ticket field
      else if (input.value == "") { // if input is empty
        displayErr("Please complete the form with the correct information.");
        input.style.borderColor = "red";
        err = true;
      }
      if (err == false) { // if input field is valid
        input.style.borderColor = "#f3f3f3";
        summary.innerHTML = "Summary";
        let txt = document.createElement("h4");
        txt.className = "summary-text";
        txt.innerHTML = `${input.id}: ${input.value}`;
        right.appendChild(txt);
      }
    }
  });
  if (err == false) { // if all input fields are valid
    displaySummary()
  }
};

const btn = document
  .querySelector(".submit")
  .addEventListener("click", getFormData);
const summary = document.querySelector(".summary");
const right = document.querySelector(".right");