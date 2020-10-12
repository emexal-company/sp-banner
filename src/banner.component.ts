import { customElement,  property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import bannerStyles from './banner.styles';
import template from './banner.template';

@customElement('sp-banner')
export class Banner extends Base {
  public static componentStyles = [bannerStyles];

  @property({ type: String }) public type: string = '';
  @property({ type: String }) public header: string = '';
  @property({ type: String }) public content: string = '';

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-banner': Banner;
  }
}
