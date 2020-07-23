var btn = document.getElementById("btn");
btn.addEventListener("click",myFunction);

function myFunction() {
    var name = document.forms["myform"]["username"];               
    var lastname = document.forms["myform"]["username2"];    
    var password = document.forms["myform"]["pass"];  
    var password2 =  document.forms["myform"]["pass2"];  
    var email = document.forms["myform"]["email"];  
    
  
    if (name.value == "")                                  
    { 
        alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (lastname.value == "")                               
    { 
        alert("Please enter your Lastname."); 
        lastname.focus(); 
        return false; 
    } 
       
    if (password.value == "")                                   
    { 
        alert("Please enter a valid password."); 
        password.focus(); 
        return false; 
    } 
   
    if (password2.value == "")                           
    { 
        alert("Please enter your confrim password."); 
        password2.focus(); 
        return false; 
    } 
   
    if (email.value == "")                        
    { 
        alert("Please enter your valid Email Id"); 
        email.focus(); 
        return false; 
    } 
   
   
   
    var x = document.getElementById("msg");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
        return true;

}

