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
var ListRow = /** @class */ (function (_super) {
    __extends(ListRow, _super);
    function ListRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListRow.prototype.render = function () {
        var num = this.props.item.num;
        return React.createElement("div", null,
            "\u8F93\u5165\u6570\u91CF: ",
            num);
    };
    return ListRow;
}(React.Component));
export { ListRow };
//# sourceMappingURL=listRow.js.map