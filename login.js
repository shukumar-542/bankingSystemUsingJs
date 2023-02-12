document.getElementById('btn-submit').addEventListener('click',()=>{
    const email =  document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value
    // console.log(emailField,passwordField);

    if(email === 'sh@gmail.com' && password === 'strong'){
        location.href = 'bank.html'
    }else{
        alert('Enter Valid Password')
    }
})