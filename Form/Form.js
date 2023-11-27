function validateForm() {
    
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';

    s
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    if (name === '') {
      document.getElementById('nameError').innerHTML = 'Name is required';
      return false;
    }

   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = 'Valid email is required';
      return false;
    }

  
    if (message === '') {
      document.getElementById('messageError').innerHTML = 'Message is required';
      return false;
    }

 
    alert('Form submitted successfully!');
    return true;
  }