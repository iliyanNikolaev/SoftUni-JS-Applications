import { viewHomePage } from "./home.js";
const loginPage = document.getElementById('login-page');
const form = loginPage.querySelector('.text-center.border.border-light.p-5')

export function viewLoginPage(){

    loginPage.style.display = 'block';
}

form.addEventListener('submit', onLogin);

async function onLogin(e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const body = {
        email,
        password
    }

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if(response.ok != true){
            const error = await response.json();
    
            throw new Error(error.message);
        }
    
        const data = await response.json();
        sessionStorage.setItem('userData', JSON.stringify(data));

        loginPage.style.display = 'none';
        viewHomePage();

    } catch (error) {
        alert(error.message);
    }
}
