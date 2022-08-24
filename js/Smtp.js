function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "obotijason@gmail.com",
    Password : "5BDF998FE80E42E116B502CEE4B0EF7DA552",
    To: 'obotijason@gmail.com.',
    From: document.getElementById("email").value,
    Subject: "Contact",
    Body: 
      "firstName: " +
      document.getElementById("fname").value +
      "<br/> lastName: " +
      document.getElementById("lname").value +
      "<br/> Email: " +
      document.getElementById("email").value +
      "<br/> Subject: " +
      document.getElementById("subject").value +
      "<br/> Message: " +
      document.getElementById("message").value
  }).then((message) => alert(message));
}
