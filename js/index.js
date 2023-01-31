let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const buttonSubmit = document.querySelector('.form__submit');

buttonSubmit.addEventListener('click',  e => {
    e.preventDefault();
    let email = document.querySelector('.form__email');
    if(!validEmail.test(email.value) || email.value == '') {
        email.classList.toggle('form__email-error');
        email.placeholder = 'Please provide a valid email address';
        setTimeout(() => {
            email.classList.toggle('form__email-error');
            email.placeholder = 'Your email address...';
        }, 2000)
    }else {
        document.querySelector('.form__modal').classList.toggle('form__modal-show');
        setTimeout(() => {
            email.value = '';
            document.querySelector('.form__modal').classList.toggle('form__modal-show');
        }, 2500);
    }
});
AOS.init();