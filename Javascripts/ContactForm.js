function submitForm()
{
    const fName = document.getElementById("First-Name").value;
    const lName = document.getElementById("Last-Name").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;
    const message = document.getElementById("Message").value;

    console.log("Collected data");
    console.log("First name: " + fName);
    console.log("Last name: " + lName);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Message: " + message);

    alert("Message sent successfully");
    
    Email.send({
        SecureToken : "",
        To : "LordAndradus@gmail.com",
        From : email,
        Subject : "",
        Body : message
    }).then(
        message => alert("Email sent")
    );
    
    console.log("Form submitted!");
}