const signUpButton = document.getElementById('signUp').addEventListener('click',() => {
    container.classList.add('right-panel-active');
});
const signInButton = document.getElementById('signIn').addEventListener('click',() => {
    container.classList.remove('right-panel-active');
});
const container = document.getElementById('container');