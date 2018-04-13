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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { Page } from 'tonva-tools';
var 货品MainPage = /** @class */ (function (_super) {
    __extends(货品MainPage, _super);
    function 货品MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    货品MainPage.prototype.render = function () {
        return React.createElement(Page, { header: "\u8D27\u54C1\u4E3B\u9875" }, "\u8D27\u54C1\u4E3B\u9875");
    };
    return 货品MainPage;
}(React.Component));
export { 货品MainPage };
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onFilesChange = _this.onFilesChange.bind(_this);
        _this.state = {
            files: undefined,
        };
        return _this;
    }
    FileUpload.prototype.onFilesChange = function (evt) {
        var files = [];
        for (var _i = 0, _a = evt.target.files; _i < _a.length; _i++) {
            var f = _a[_i];
            files.push(f);
        }
        this.setState({
            files: files,
        });
    };
    FileUpload.prototype.fileClick = function (file) {
        var fr = new FileReader();
        fr.onload = function (f) {
            alert(this.result);
        };
        fr.readAsText(file, "utf8");
    };
    FileUpload.prototype.onSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var files, data, i, res, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        files = evt.target[0].files;
                        data = new FormData();
                        for (i in files) {
                            data.append("file" + i, files[i]);
                        }
                        return [4 /*yield*/, fetch("http://localhost:3009/upload", {
                                method: "POST",
                                body: data
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        json = _a.sent();
                        alert(JSON.stringify(json));
                        return [2 /*return*/];
                }
            });
        });
    };
    FileUpload.prototype.render = function () {
        var _this = this;
        var files = this.state.files;
        var fileList;
        if (files !== undefined) {
            fileList = React.createElement("ul", null, files.map(function (v, i) { return React.createElement("li", { key: i, onClick: function () { return _this.fileClick(v); } },
                "name:",
                v.name,
                " size:",
                v.size,
                " date:",
                v.lastModifiedDate.toString()); }));
        }
        var button;
        if (files !== undefined && files.length > 0) {
            button = React.createElement("div", null,
                React.createElement("button", { type: "submit" }, "\u5347\u7EA7\u6570\u636E\u5E93"));
        }
        return React.createElement(Page, { header: "FileUpload test" },
            fileList,
            React.createElement("form", { className: "my-2", encType: "multipart/form-data", onSubmit: this.onSubmit },
                React.createElement("div", null,
                    React.createElement("input", { type: "file", id: "photo", name: "files", multiple: true, onChange: this.onFilesChange })),
                button));
    };
    return FileUpload;
}(React.Component));
export { FileUpload };
//# sourceMappingURL=货品MainPage.js.map