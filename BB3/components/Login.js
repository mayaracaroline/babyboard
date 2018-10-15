class Login extends BBHTMLElement {
  constructor() {
    super()
    console.log('login')
    const div = document.createElement('div');
    div.classList.add('login-wrapper');
    const username = document.createElement('input');
    username.setAttribute('type', 'text');
    username.setAttribute('placeholder','login')
    div.appendChild(username); 
  }
}

window.customElements.define('bb-login', Login)