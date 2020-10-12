import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Banner } from './banner.component';

export default function template(this: Banner) {

  const classes = {
    'spectrum-Banner--error': this.type === 'error',
    'spectrum-Banner--info': this.type === 'info' || this.type === 'corner',
    'spectrum-Banner--warning': this.type === 'warning',
    'spectrum-Banner--corner': this.type === 'corner'
};
    
    
    return html`
    ${this.type === 'corner' ? html`<div style="width: 255px; height: 325px; background-color: #ccc; position: relative;">` : ''}
    <div class="spectrum-Banner ${classMap(classes)}">
      <div class="spectrum-Banner-header">${this.header}</div>
      <div class="spectrum-Banner-content">${this.content}</div>
    </div> 
    ${this.type === 'corner' ? html`</div>` : ''}
        `;
}
