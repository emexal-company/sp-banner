import { Base } from '@spectrum/sp-base';
export declare class Banner extends Base {
    static componentStyles: import("lit-element").CSSResult;
    type: string;
    header: string;
    content: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-banner': Banner;
    }
}
