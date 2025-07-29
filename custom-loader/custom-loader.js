import { customLoaderTemplate } from './custom-loader-template.js';

class CustomLoader extends HTMLElement {
  static get observedAttributes() {
    return ['percent', 'animated', 'hidden'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(customLoaderTemplate.content.cloneNode(true));

    this.bgCircle = this.shadowRoot.querySelectorAll('circle')[0];
    this.fgCircle = this.shadowRoot.querySelectorAll('circle')[1];
    this.svg = this.shadowRoot.querySelector('svg');

    this.dasharray = 2 * Math.PI * this.bgCircle.r.baseVal.value;
    this.fgCircle.style.strokeDasharray = this.dasharray;
    this.fgCircle.style.strokeDashoffset = this.dasharray;


    // this.dasharray = parseInt(2* Math.PI * this.bgCircle.r.baseVal.value);
    // this.fgCircle.style.strokeDasharray = this.dasharray;
    // this.fgCircle.style.strokeDashoffset = this.dasharray;
    window.onresize = () => {
      this.update();
    }
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.update();
  }

  update() {
    const percent = Math.min(Math.max(parseInt(this.getAttribute('percent')) || 0, 0), 100);
    const animated = this.hasAttribute('animated') && this.getAttribute('animated') !== 'false';
    const hidden = this.hasAttribute('hidden') && this.getAttribute('hidden') !== 'false';

    if (hidden) {
      this.style.display = 'none';
    } else {
      this.style.display = 'inline-block';
    }
    

    const dashoffset = this.dasharray - (this.dasharray * percent / 100);
    this.fgCircle.style.strokeDashoffset = dashoffset;

    if (animated) {
      this.svg.classList.add('animated');
    } else {
      this.svg.classList.remove('animated');
    }
  }
}

customElements.define('custom-loader', CustomLoader);
