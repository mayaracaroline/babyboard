class Teste extends BBHTMLElement {
  constructor() {
    super()
    const h1 = document.createElement('h1');
    const text = document.createTextNode('BabyBoard')
    h1.appendChild(text)
  }
}
window.customElements.define('bb-teste', Teste)