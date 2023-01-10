"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.custombackgroundColor = exports.CustomFontColor = exports.tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontcolor: { control: 'color' }
    }
};
var template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = template.bind({});
exports.Basic.args = {
    size: "normal",
    allCaps: false
};
exports.AllCaps = template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'text-secondary'
};
exports.tertiary = template.bind({});
exports.tertiary.args = {
    size: 'normal',
    color: 'text-tertiary'
};
//custom font-color
//font color
//size
exports.CustomFontColor = template.bind({});
exports.tertiary.args = {
    size: 'h1',
    fontcolor: '#5517ac'
};
exports.custombackgroundColor = template.bind({});
exports.custombackgroundColor.args = {
    size: 'h1',
    fontcolor: '#5517ac',
    backgroundColor: 'black'
};
