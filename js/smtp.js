function sendEmail() {
    const firstName = document.getElementById("fname")
    const lastName = document.getElementById("lname")
    const email = document.getElementById("email")
    const subject = document.getElementById("subject")
    const message = document.getElementById("message")

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "obotijason@gmail.com",
        Password : "5BDF998FE80E42E116B502CEE4B0EF7DA552",
        To : 'jasonoboti@gmail.com',
        From : 'obotijason@gmail.com',
        Subject : "My Port-folio Contact Form",
        Body : `Firstname: ${firstName.value} <br/> Lastname: ${lastName.value} <br/> Email: ${email.value} <br/> Subject: ${subject.value}
        <br/>Message: ${message.value}`
    }).then(
      message => alert("Message Sent")
    );
}