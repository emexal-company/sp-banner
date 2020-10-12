import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import bannerStyles from './banner.styles';
import template from './banner.template';
let Banner = class Banner extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.header = '';
        this.content = '';
    }
    render() {
        return template.call(this);
    }
};
Banner.componentStyles = bannerStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Banner.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Banner.prototype, "header", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Banner.prototype, "content", void 0);
Banner = __decorate([
    customElement('sp-banner')
], Banner);
export { Banner };
//# sourceMappingURL=banner.component.js.map