class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Pérez Monroy Diane Paola. IC-52M`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
