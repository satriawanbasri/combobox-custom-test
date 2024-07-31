var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
var ComboboxCustomTest = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, setSelectedOptionsResult = _a.setSelectedOptionsResult, _c = _a.filterEnabled, filterEnabled = _c === void 0 ? true : _c, _d = _a.multipleSelect, multipleSelect = _d === void 0 ? true : _d, _e = _a.outlinedStyle, outlinedStyle = _e === void 0 ? false : _e, _f = _a.shorterList, shorterList = _f === void 0 ? false : _f, _g = _a.highlightedText, highlightedText = _g === void 0 ? true : _g;
    var _h = useState(''), search = _h[0], setSearch = _h[1];
    var _j = useState(false), dropdownVisible = _j[0], setDropdownVisible = _j[1];
    var _k = useState([]), selectedOptions = _k[0], setSelectedOptions = _k[1];
    var searchContainerRef = useRef(null);
    useEffect(function () {
        setSelectedOptionsResult(selectedOptions);
    }, [selectedOptions, setSelectedOptionsResult]);
    var handleSearchChange = function (e) {
        setSearch(e.target.value);
    };
    var handleClearSearch = function () {
        setSearch('');
    };
    var handleInputClick = function () {
        setDropdownVisible(true);
    };
    var handleOptionClick = function (option) {
        if (multipleSelect) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter(function (o) { return o !== option; }));
            }
            else {
                setSelectedOptions(__spreadArray(__spreadArray([], selectedOptions, true), [option], false));
            }
        }
        else {
            setSelectedOptions([option]);
            setDropdownVisible(false);
        }
        setSearch('');
    };
    var handleRemoveOption = function (option) {
        setSelectedOptions(selectedOptions.filter(function (o) { return o !== option; }));
    };
    var handleClickOutside = function (event) {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    var highlightText = function (text) {
        if (!search || !filterEnabled || !highlightedText)
            return text;
        var regex = new RegExp("(".concat(search, ")"), 'gi');
        var parts = text.split(regex);
        return parts.map(function (part, index) {
            return regex.test(part) ? (React.createElement("span", { key: index, className: "highlight" }, part)) : (part);
        });
    };
    return (React.createElement("div", { className: "search-container ".concat(outlinedStyle ? 'outlined' : ''), ref: searchContainerRef },
        React.createElement("div", { className: "dropdown" },
            React.createElement("div", { className: "dropdown-trigger", onClick: handleInputClick },
                React.createElement("div", { className: "selected-options-container" }, selectedOptions.map(function (option) { return (React.createElement("div", { key: option, className: "selected-option" },
                    option,
                    React.createElement("i", { className: "fa-regular fa-circle-xmark remove-icon", onClick: function (e) {
                            e.stopPropagation();
                            handleRemoveOption(option);
                        } }))); })),
                React.createElement("i", { className: "fas fa-chevron-down dropdown-icon" })),
            dropdownVisible && (React.createElement("div", { className: "dropdown-list" },
                filterEnabled && (React.createElement("div", { className: "search-input-container" },
                    React.createElement("input", { type: "text", id: "search-input", className: "search-input", value: search, onChange: handleSearchChange }),
                    React.createElement("i", { className: "fas fa-search search-icon" }),
                    search && React.createElement("i", { className: "fas fa-circle-xmark clear-icon", onClick: handleClearSearch }))),
                data
                    .filter(function (option) { return !shorterList || option.toLowerCase().includes(search.toLowerCase()); })
                    .map(function (option, index) { return (React.createElement("div", { key: index, className: "dropdown-item ".concat(selectedOptions.includes(option) ? 'selected' : ''), onClick: function () { return handleOptionClick(option); } }, highlightText(option))); }))))));
};
export default ComboboxCustomTest;
