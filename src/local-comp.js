class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const post = this.getAttribute("post");
    this.root.innerHTML = `
    <style>
    div {
        height: 20px;
        width: 100px;    
    }
    </style>
    <div>${post}</div>`;
  }
}

customElements.define("created-by", WebComponent);
