let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    let NameEl = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let PsYes = document.getElementById("PsYes").checked;
    let PsNo = document.getElementById("PsNO").checked;
    let FcYes = document.getElementById("FcYes").checked;
    let FcNo = document.getElementById("FcNo").checked;
    let Satisfaction = document.querySelector('input[name="Satisfaction"]:checked').value;

    // Perform validation (you can add more validation logic as needed)
    if (NameEl === "" || email === "" || mobile === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare form data
    let formData = {
        Name: NameEl,
        Email: email,
        Mobile: mobile,
        IsFirstTimeUser: PsYes ? "Yes" : "No",
        WouldRecommend: FcYes ? "Yes" : "No",
        Satisfaction: Satisfaction
    };

    Send form data to server (you need to specify the API endpoint)
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
     })
     .then(response => response.json())
     .then(data => {
         // Handle server response if needed
         console.log(data);
         alert("Form submitted successfully!");
         myFormEl.reset();
     })
     .catch(error => {
         console.error('Error:', error);
         alert("Failed to submit the form. Please try again later.");
     });
});
