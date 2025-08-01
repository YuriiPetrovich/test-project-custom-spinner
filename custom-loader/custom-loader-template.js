export const customLoaderTemplate = document.createElement('template');
//edited
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
<svg viewBox="0 0 100 100" style="transform: rotate(-90deg); transform-origin: 50% 50%;">
  <circle
    cx="50%"
    cy="50%"
    r="35%"
    fill="none"
    stroke="#eee"
    stroke-width="6"
  ></circle>
  <circle
    cx="50%"
    cy="50%"
    r="35%"
    fill="none"
    stroke="rgb(0,92,255)"
    stroke-width="6"
    stroke-linecap="square"
  ></circle>
</svg>
`;