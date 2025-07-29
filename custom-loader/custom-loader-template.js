export const customLoaderTemplate = document.createElement('template');

customLoaderTemplate.innerHTML = `
  <style>
  @media screen  and (orientation: portrait){
    :host {
      display: block;
      width: 60vw;
      height: 60vw;
    }
  }
  @media screen and (orientation: landscape){
    :host{
      display: block;
      width: 60vh;
      height: 60vh;
    }
  }
    svg {
      width: 100%;
      height: 100%;
      transform-origin: 50% 50%;
      transition: stroke-dashoffset 0.3s ease;
    }
    svg.animated {
      animation: rotate 1.5s linear infinite;
    }
    :host([hidden]) {
      display: none;
    }
    @keyframes rotate {
    /*     to { transform: rotateZ(1turn); } */
    from {
      transform: rotateZ(-90deg);
    }
    to {
      transform: rotateZ(270deg);
    }
}  
  </style>
<svg viewBox="0 0 100% 100%" transform="rotate(-90 0 0)">
  <circle
    cx="50%"
    cy="50%"
    r="45%"
    fill="none"
    stroke="#eee"
    stroke-width="8"
  ></circle>
  <circle
    cx="50%"
    cy="50%"
    r="45%"
    fill="none"
    stroke="#3f51b5"
    stroke-width="8"
    stroke-linecap="round"
  ></circle>
</svg>
`;