function checkEmpty(){
    var w = document.forms["signup"]["email"].value;
    var x = document.forms["signup"]["user"].value;
    var y = document.forms["signup"]["pass"].value;
    var z = document.forms["signup"]["confirm"].value;
    if (w == "" || x == "" || y == "" || z == "") {
      alert("One of the required boxes is empty");
      return false;
    }
  }

  function checkPass(){
    var x = document.forms["signup"]["pass"].value;
    var y = document.forms["signup"]["confirm"].value;
    if (x!==y) {
      alert("The passwords do not match");
      return false;
    }
  }

  function passLen(){
    var x = document.forms["signup"]["pass"].value;  
    if (x.length !==8) {
      alert("Password must be 8 characters");
      return false;
    }
  }

  function emailLen(){
    var x = document.forms["signup"]["email"].value;  
    if (x.length > 60) {
      alert("Email is too long");
      return false;
    }
  }

  function userLen(){
    var x = document.forms["signup"]["user"].value;  
    if (x.length > 40) {
      alert("Username is too long");
      return false;
    }
  }

  function showUser(){
    var w = document.forms["signup"]["email"].value;  
    var x = document.forms["signup"]["user"].value; 
    var y = document.forms["signup"]["pass"].value;   
    if (checkEmpty,checkPass,passLen,userLen,emailLen !== false) {
      alert("Email is " + w + "\nUsername is " + x + "\nPassword is " + y);
      return false;
    }
  }