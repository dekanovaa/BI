// Handle Login
// document.getElementById('login-form').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const username = document.getElementById('login__username').value;
//     const password = document.getElementById('login__password').value;

//     const loginData = { username, password };
//     fetch('https://digitalplatformforsmes.onrender.com/api/v1/auth', {
//         method: 'POST',
//         mode: 'no-cors', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     })
//     .then(response => {
//         console.log('Request sent');
//         window.location.href = 'dashboard.html'
//     })
//     .catch(error => console.error('Error:', error));
// })    

// ****Handle Registration******//
// document.getElementById('register').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const username = document.getElementById('register-username').value;
//     const password = document.getElementById('register-password').value;

//     const registerData = { username, password };

//     fetch('YOUR_API_ENDPOINT/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(registerData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             window.location.href = 'dashboard.html';
           
//         } else {
//             alert('Registration failed: ' + data.message);
//         }
//     })
//     .catch(error => console.error('Error:', error));
// });


// Static login
const username = document.getElementById('login__username');
const password = document.getElementById('login__password');

document.getElementById('login-form').addEventListener('submit', function(e){
  e.preventDefault();
  if(localStorage.getItem("username") === username.value  && localStorage.getItem("password") === password.value ){
    alert("Welcome");
    window.location.href = 'dashboard.html';
} 
else{
    
    alert("Error!")
}
})


// Satatic registr
const regusername = document.getElementById('registr__username');
const regpassword = document.getElementById('registr__password');
const regemail = document.getElementById('registr__email');

document.getElementById('registr-form').addEventListener("submit", function(event){
    event.preventDefault();
    if(localStorage.getItem("username") !== regusername.value && localStorage.getItem("password") !== regpassword.value){
    localStorage.setItem("username" , regusername.value);
    localStorage.setItem("email" , regemail.value);
    localStorage.setItem("password" , regpassword.value);
    alert("Tabriklaymiz ro'yxatdan o'tdingiz")
    window.location.href = 'dashboard.html';
    }
    else{

        alert("Ushbu foydalanuvchi mavjud")
    }
})




