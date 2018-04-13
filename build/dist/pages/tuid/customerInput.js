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
var CustomerContent = /** @class */ (function (_super) {
    __extends(CustomerContent, _super);
    function CustomerContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerContent.prototype.render = function () {
        var value = this.props.value;
        //return <div>id = {value.id} {JSON.stringify(value)} </div>;
        if (value === undefined)
            return React.createElement("div", null, "\u5BA2\u6237");
        return React.createElement("div", null,
            "\u5BA2\u6237\u540D\uFF1A",
            value.name,
            " \u5BA2\u6237\u63CF\u8FF0\uFF1A",
            value.discription,
            " ");
    };
    return CustomerContent;
}(React.Component));
export { CustomerContent };
var CandidateRow = /** @class */ (function (_super) {
    __extends(CandidateRow, _super);
    function CandidateRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandidateRow.prototype.render = function () {
        return React.createElement("div", { className: "p-4" }, JSON.stringify(this.props.item));
    };
    return CandidateRow;
}(React.Component));
export { CandidateRow };
//# sourceMappingURL=customerInput.js.map