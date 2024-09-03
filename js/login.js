                // user email
document.getElementById('submit-buttton').addEventListener('click',function(){      
const userInput = document.getElementById('user-email');
const userEmail = userInput.value;
        
        console.log(userEmail);

     
                // user email
const userInputPassword = document.getElementById('user-password');
const userPassword = userInputPassword.value;

    if(userEmail == 'masum@gmail.com' && userPassword == '123456'){
        alert('Login Successfull');
        window.location.href = 'banking.html'
    }
    else if(userEmail != 'masum@gmail.com' || userPassword != '123456'){
        alert('usermane or password is not valid')
    }
        
})