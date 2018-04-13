var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { LMR } from 'tonva-react-form';
var OrderRow = /** @class */ (function (_super) {
    __extends(OrderRow, _super);
    function OrderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderRow.prototype.render = function () {
        var _a = this.props, ui = _a.ui, data = _a.data;
        var item = data.item, detail = data.detail;
        var d = detail;
        var articleFieldFace = d.fields[0]; //['article'];
        var face = articleFieldFace.face;
        var _b = face, input = _b.input, tuid = _b.tuid;
        var Component = input.component;
        var left = React.createElement(Component, { tuid: tuid, input: input, readOnly: true, entitiesUI: ui.entitiesUI, onPicked: undefined, id: item['article'], params: undefined });
        var right = React.createElement(React.Fragment, null,
            item['quantity'],
            " x ",
            item['price'],
            "\u5143 = ",
            item['amount'],
            "\u5143");
        return React.createElement(LMR, { className: "px-3 py-2", left: left, right: right });
    };
    return OrderRow;
}(React.Component));
export { OrderRow };
//# sourceMappingURL=order.js.map