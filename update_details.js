    let saveFile = () => {

        // Get the data from each element on the form.
    	const first_name = document.getElementById('username');
        const last_name = document.getElementById('username2');
        const Address = document.getElementById('address');
        const phone_no = document.getElementById('phne');
        const Email= document.getElementById('email');

        // This variable stores all the data.
        let data =
        '\r Name: ' + first_name.value + ' \r\n ' +
        'lastname: ' + last_name.value + ' \r\n ' +
        'password: ' + Address.value + ' \r\n ' +
        'confirmed password: ' + phone_no.value + ' \r\n ' +
        'email: ' + Email.value;
        // Convert the text to BLOB.
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

        newLink.click(); }
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
      