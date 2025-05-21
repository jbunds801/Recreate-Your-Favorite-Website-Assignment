/* THIS WILL PREVENT THE FROM FROM BEING SENT WITHOUT THE EMAIL BEING FILLED OUT */
function validateForm() {
  let x = document.forms["form"]["fname"].value;
  if (x == "") {
    alert("email required");
    return false;
  }
}

/* THIS ONE WOULD PREVENT THE FORM FROM BEING SENT WITHOUT THE MESSAGE FILLED OUT */
function validateForm() {
  let x = document.forms["form"]["fname"].value;
  if (x == "") {
    alert("email required");
    return false;
  }
}

/* THIS WILL INSURE THAT THE EMAIL ADDRESS ENTERED IS THE CORRECT FORMAT */
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

/* THIS WILL ALLOW THE FORM TO BE SENT */
function myFunction() {
  document.getElementById("form").submit();
}

/* THIS WILL CALCULATE SHIPPING BASED OFF DISTANCE */
let zipCode = input
  
function getShipping() {
  return shipping((zip code, type) => shipping, );
}
console.log(`Shipping: $${getShipping()}`);
