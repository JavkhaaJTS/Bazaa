document.querySelector('.send-btn').addEventListener('click', function(){
    const name = document.querySelector('input[placeholder="Your name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const phone = document.querySelector('input[placeholder="Your phone"]').value;
    const message = document.querySelector('textarea').value;
   if (name === '' || email === '' || phone === '' || message === '') {
        alert('Та бүх талбаруудыг бөглөнө үү!');
    }
    else{
            alert('Амжилттай илгээгдлээ');
    }
}
);