class BBHTMLElement extends HTMLElement {
  constructor() {
   // this.render()
    console.log('oi')
    console.log(this)
    document.body.appendChild(this);
  }
}