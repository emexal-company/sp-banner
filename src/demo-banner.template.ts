import { html } from 'lit-element';
import { DemoBanner } from './demo-banner.component';

import '@spectrum/sp-banner';
import '@spectrum/sp-container';


export default function template(this: DemoBanner) {
  return html`
  <sp-container>

      <sp-rule medium label="Error"></sp-rule>
      <sp-demo width="250">
        <pre><sp-banner type="error" header="Purchase Soon" content="Trial expires in 2 days"></sp-banner></pre>
      </sp-demo>

      <sp-rule medium label="Info"></sp-rule>
      <sp-demo width="250">
        <pre><sp-banner type="info" header="Most Popular" content="Includes Illustrator CC"></sp-banner></pre>
      </sp-demo>

      <sp-rule medium label="Warning"></sp-rule>
      <sp-demo width="250">
        <pre><sp-banner type="warning" header="Purchase Soon" content="Your trial is about to expire"></sp-banner></pre>
      </sp-demo>

      <sp-rule medium label="Corner Placement"></sp-rule>
      <sp-demo width="250" height="350">
        <pre><sp-banner type="corner" header="Most Popular" content="Includes Illustrator CC"></sp-banner></pre>
      </sp-demo>
  </sp-container>
  
  `;
}
