const contactForm = document.querySelector(".contact-form");
let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        subject: subject.value,
        message: message.value

    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
            alert("Email sent");
            firstname.value = "";
            lastname.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        }else{
            alert("something went wrong!")
        }
    }
    
    xhr.send(JSON.stringify(formData));
})