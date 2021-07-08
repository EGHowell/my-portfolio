// PROJECT HOVER

document.querySelector(".proj1").addEventListener('mouseover', mouseOver);
document.querySelector(".proj1").addEventListener('mouseout', mouseOut)

function mouseOver() {
   document.querySelector(".id1").style.display = "block";
}
function mouseOut() {
   document.querySelector(".id1").style.display = "none";
}

document.querySelector(".proj2").addEventListener('mouseover', mouseOver2);
document.querySelector(".proj2").addEventListener('mouseout', mouseOut2)
function mouseOver2() {
   document.querySelector(".id2").style.display = "block";
}
function mouseOut2() {
   document.querySelector(".id2").style.display = "none";
}

document.querySelector(".proj3").addEventListener('mouseover', mouseOver3);
document.querySelector(".proj3").addEventListener('mouseout', mouseOut3)
function mouseOver3() {
   document.querySelector(".id3").style.display = "block";
}
function mouseOut3() {
   document.querySelector(".id3").style.display = "none";
}

document.querySelector(".proj4").addEventListener('mouseover', mouseOver4);
document.querySelector(".proj4").addEventListener('mouseout', mouseOut4)
function mouseOver4() {
   document.querySelector(".id4").style.display = "block";
}
function mouseOut4() {
   document.querySelector(".id4").style.display = "none";
}

document.querySelector(".proj5").addEventListener('mouseover', mouseOver5);
document.querySelector(".proj5").addEventListener('mouseout', mouseOut5)
function mouseOver5() {
   document.querySelector(".id5").style.display = "block";
}
function mouseOut5() {
   document.querySelector(".id5").style.display = "none";
}

document.querySelector(".proj6").addEventListener('mouseover', mouseOver6);
document.querySelector(".proj6").addEventListener('mouseout', mouseOut6)
function mouseOver6() {
   document.querySelector(".id6").style.display = "block";
}
function mouseOut6() {
   document.querySelector(".id6").style.display = "none";
}



//BIO SWITCHING

document.querySelector('#eric-button').addEventListener('click', show)
function show() {
   document.querySelector('.about-eric').style.display = "block"
   document.querySelector('.education').style.display = "none"
   document.querySelector('.soft-skills').style.display = "none"
}

document.querySelector('#edu-button').addEventListener('click', show2)
function show2() {
   document.querySelector('.education').style.display = "block"
   document.querySelector('.about-eric').style.
      display = "none";
   document.querySelector('.soft-skills').style.display = "none"
}

document.querySelector("#soft-button").addEventListener('click', show3)
function show3() {
   document.querySelector('.soft-skills').style.display = "block"
   document.querySelector('.education').style.display = "none"
   document.querySelector('.about-eric').style.
      display = "none";

}

// SENDING EMAILS
document.querySelector(".contact-form").addEventListener('submit', submitForm);

function submitForm(e) {
   e.preventDefault();
   let name = document.querySelector("#name").value;
   let email = document.querySelector("#email").value;
   let message = document.querySelector("#message").value;

   document.querySelector(".contact-form").reset();

   sendEmail(name, email, message);
   console.log(submitForm)
}

function sendEmail(name, email, message) {
   Email.send({
      Host: "smtp.gmail.com",
      Username: "ericghowell834@gmail.com",
      Password: "jyqpaobncgdmavrw",
      To: 'ericghowell834@gmail.com',
      From: "ericghowell834@gmail.com",
      Subject: `${name} sent you a message`,
      Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
   })
      .then(function (message) {
         alert("mail sent successfully")
      });
}