import { LitElement, html } from 'lit-element';
import style from './style';
import defaultConfig from './defaults';


class MediaStreamCard extends LitElement {
  static get properties() {
    return {
      hass: Object,
      config: Object,
    };
  }

  setConfig(config) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
  * get the current size of the card
  * @return {Number}
  */
  getCardSize() {
    if(this.config){
      const headerSize = (this.config.showHeader && this.config.header) ? 1 : 0;
      const bodySize = 0;
      return headerSize + bodySize;
    }
    
    return 1;
  }

  static get styles() {
    return style;
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {

    return html`
      <ha-card>
        ${this.createHeader()}
        ${this.createBody()}
      </ha-card>
    `;
  }

  /**
   * create card header
   * @return {TemplateResult}
   */
  createHeader() {
    if (this.config.showHeader === false) return html``;

    return html`
      <div class='header'>
        ${this.config.header}
      </div>
    `;
  }

  createBody() {
    const data = 'TEST';

    return html`
      <div class='body'>
        ${data}
      </div>
    `;
  }
}

customElements.define('media-stream-card', MediaStreamCard);