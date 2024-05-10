function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value.trim(); // Get value of name input
    let email = document.getElementById('email').value.trim(); // Get value of email input
    let age = document.getElementById('age').value.trim(); // Get value of age input
    let membership = document.getElementById('membership').value; // Get selected membership type

    if (name === '' || email === '' || age === '' || membership === '') {
        alert('Please fill in all fields'); // Alert if any field is empty
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert('Age must be a number and 18 or above'); // Alert if age is not a number or less than 18
        return false;
    }

    // If all validations pass, show success message
    alert('You have successfully signed up!');
}
