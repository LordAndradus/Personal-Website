function submitForm()
{
    alert("Message sent!");
}

const contactForm = document.querySelector(".contact.form");
const firstName = document.querySelector('.first-name-input');
const lastName = document.querySelector('.last-name-input');
const phoneInput = document.querySelector('.phone-input');
const emailInput = document.querySelector('.email-input');

console.log("Garnered contact form: " + contactForm);
console.log(phoneInput);

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(phoneInput.value.length != phoneInput.getAttribute('minlength'))
    {
        alert("Phone number must be 10 digits in length!");
        return;
    }

    alert("Form submitted. Thank you!");
})

//Auto format to (###) ###-####
phoneInput.addEventListener('input', function() {
    let value = phoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length > 3) 
    {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    if (value.length > 9) 
    {
        value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }
    phoneInput.value = value;
});