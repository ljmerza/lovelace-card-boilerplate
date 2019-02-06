var LitElement = LitElement || Object.getPrototypeOf(customElements.get("hui-error-entity-row"));
var html = LitElement.prototype.html;

class Card extends LitElement {

  static get properties() {
    return {
      hass: Object,
      config: Object,
    };
  }

  constructor() {
    super();
  }

  setConfig(config) {
    if (!config.entity) throw Error(`entity required.`);

    this.config = {
      ...config
    };
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return 1;
  }

  static get styles() {
    return html`
        ha-card {
          padding: 16px;
        }
    `;
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {
    return html`
      <ha-card>
        <style>${Card.styles}</style>
        ${this.createHeader()}
        test
      </ha-card>
    `;
  }

  createHeader() {
    return html`
    `;
  }
}

customElements.define('-card', Card);