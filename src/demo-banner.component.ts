import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-banner.styles';
import template from './demo-banner.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

import Prism from "prismjs";

@customElement('demo-banner')
export class DemoBanner extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-banner': DemoBanner;
  }
}
