function sendEmail() {
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  Email.send({
    SecureToken: "b9b2cfe3-c9e8-4efb-9e3b-e782a0fc31d8",
    To: "jasonoboti@gmail.com",
    From: "obotijason@gmail.com",
    Subject: "My Port-folio Contact Form",
    Body: `Firstname: ${firstName.value} <br/> Lastname: ${lastName.value} <br/> Email: ${email.value} <br/> Subject: ${subject.value}
        <br/>Message: ${message.value}`,
  }).then((message) => alert("Message Sent Successfully"));
}
