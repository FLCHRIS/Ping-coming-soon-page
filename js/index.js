const button = document.querySelector('.message-button');
const submit = document.querySelector('.form-submit');

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


submit.addEventListener('click', e => {
    e.preventDefault();

    const email = document.querySelector('.form-email');
    const alert = document.querySelector('.form__message');
    
	if(email.value === ''){
        document.querySelector('.message-paragraph').innerHTML = 'Empty fields';
        document.querySelector('.form-panel').classList.toggle('form-show');
        alert.classList.toggle('form-show');
    }else {
        if(validEmail.test(email.value)){
            document.querySelector('.message-paragraph').innerHTML = 'Check your email please.';
        }else{
            document.querySelector('.message-paragraph').innerHTML = 'Please Provide a valid email address.';
        }
        document.querySelector('.form-panel').classList.toggle('form-show');
        alert.classList.toggle('form-show');
    }
})

button.addEventListener('click', () => {
    const alert = document.querySelector('.form__message');
    document.querySelector('.form-panel').classList.toggle('form-show');
    alert.classList.toggle('form-show');
})

