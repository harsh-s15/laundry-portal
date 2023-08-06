import firebase from './config.js'
const rollno = localStorage.userid

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var FirstName = getElementVal("FirstName");
    var LastName = getElementVal("LastName");
    var RollNo = getElementVal("RollNo");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");


    saveMessages(FirstName, LastName, RollNo, emailid, msgContent);

    //   enable alert
    alert("Complaint sent!")

    //   remove the alert
    // setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    // }, 3000);

    //   reset the form
    // document.getElementById("contactForm").reset();

    window.location.href = "SubmissionPage.html"; 
}

const saveMessages = (FirstName, LastName, RollNo, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        FirstName: FirstName,
        LastName: LastName,
        RollNo: RollNo,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

