


// SENDING EMAILS
function sendEmail() {
   Email.send({
      Host: "smtp.gmail.com",
      Username: "ericghowell834@gmail.com",
      Password: "jyqpaobncgdmavrw",
      To: 'ericghowell834@gmail.com',
      From: "e_howell@live.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
   })
      .then(function (message) {
         alert("mail sent successfully")
      });
}