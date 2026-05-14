const form = document.getElementById('contactForm');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const details = document.getElementById('details');
    const successMessage = document.getElementById('successMessage');

    let valid = true;

    document.querySelectorAll('.error').forEach(error => error.innerText = '');

    if(name.value.trim() === '') {
      name.nextElementSibling.innerText = 'Name is required';
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.value.match(emailPattern)) {
      email.nextElementSibling.innerText = 'Enter valid email';
      valid = false;
    }

    const phonePattern = /^[0-9]{10}$/;

    if(!phone.value.match(phonePattern)) {
      phone.nextElementSibling.innerText = 'Phone must be 10 digits';
      valid = false;
    }

    if(details.value.trim() === '') {
      details.nextElementSibling.innerText = 'Project details required';
      valid = false;
    }

    if(valid) {
      successMessage.innerText = 'Thank you! We will contact you within 24 hours.';
      form.reset();
    }
  });
}