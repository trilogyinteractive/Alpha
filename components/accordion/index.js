class CWDSAccordion extends window.HTMLElement {
  connectedCallback () {
    this.state = 'closed';
    this.container = this.querySelector('.accordion');
    this.expandTarget = this.querySelector('.card-container');
    this.activateButton = this.querySelector('.card-header');
    this.activateButton.addEventListener('click', this.listen.bind(this));
  }

  listen () {
    if (this.state === 'open') {
      this.expandTarget.setAttribute('aria-hidden', 'true');
      this.container.classList.remove('accordion-open');
      this.activateButton.setAttribute('aria-expanded', 'false');
      this.state = 'closed';
    } else {
      this.expandTarget.setAttribute('aria-hidden', 'false');
      this.container.classList.add('accordion-open');
      this.activateButton.setAttribute('aria-expanded', 'true');
      this.state = 'open';
    }
  }
}
window.customElements.define('cwds-accordion', CWDSAccordion);
