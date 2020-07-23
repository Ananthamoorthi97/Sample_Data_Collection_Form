var btn = document.getElementById("btn");
btn.addEventListener("click",  () => {
    // Get the data from each element on the form.
    const name_2 = document.getElementById('name');
    const lastname = document.getElementById('name2');
    const password = document.getElementById('pw');
    const Email= document.getElementById('email');

    // This variable stores all the data.
    let data =
    '\r Name: ' + name_2.value + ' \r\n ' +
    'lastname: ' + lastname.value + ' \r\n ' +
    'password: ' + password.value + ' \r\n ' +
    'email: ' + Email.value;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Signup_details.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); });
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();