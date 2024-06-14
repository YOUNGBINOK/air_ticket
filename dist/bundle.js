/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/clock.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/clock.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../asset/resource/blue_sky.jpg */ "./asset/resource/blue_sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --base-border-radius: 8px;
  --base-screen-background: #111;
  --base-screen-background-even: #333;
  --base-screen-background-odd: #111;
}

* {
  box-sizing: border-box;
}
.time_board {
  padding: 2rem 0;
  background-color: #79baec;

  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.countdown {
  display: flex;
  gap: 1.8rem;
  font-family: sans-serif;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.today {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
}

.time_section {
  text-align: center;
  font-size: 1.8rem;
}

.time_group {
  display: flex;
  gap: 0.6rem;
}

.countdown p {
  color: #fff;
}

.time_segment {
  display: block;
  font-size: 6.3rem;
  font-weight: 900;
  width: 100px;
}

.segment_display {
  position: relative;
  height: 100%;
}

.segment_display_top,
.segment_display_bottom {
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 50%;
  position: relative;
}

.segment_display_top {
  line-height: 1.5;
  color: #eee;
  background-color: #111;
  border-radius: var(--base-border-radius);
}

.segment_display_bottom {
  line-height: 0;
  color: #fff;
  background-color: #333;
  border-radius: var(--base-border-radius);
}

.segment_overlay {
  position: absolute;
  top: 0;
  perspective: 400px;
  height: 100%;
  width: 100px;
}

.segment_overlay_top,
.segment_overlay_bottom {
  position: absolute;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 50%;
  border-radius: var(--base-border-radius);
}

.segment_overlay_top {
  top: 0;
  line-height: 1.5;
  color: #fff;
  background-color: #111;
  transform-origin: bottom;
}

.segment_overlay_bottom {
  bottom: 0;
  line-height: 0;
  color: #eee;
  background-color: #333;
  border-top: 2px solid black;
  transform-origin: top;
}

.segment_overlay.flip .segment_overlay_top {
  animation: flip-top 0.8s linear;
}

.segment_overlay.flip .segment_overlay_bottom {
  animation: flip-bottom 0.8s linear;
}

/* 출발 스케줄 스크린 css */
#departure_screen {
  width: 100%;
  text-align: center;
}

.screen_container {
  border: solid 1em #333;
  border-radius: 0.5em;
  padding: 10px 0;
}

.screen {
  display: table;
  margin: 0 auto;
  background-color: var(--base-screen-background);
}

.screen_title {
  display: table-row;
  width: 100%;
  overflow: scroll;
  background-color: #eee;
  border-spacing: 2px;
  border-radius: 4px;
  background-color: var(--base-screen-background);
  color: #fff;
}

.screen_title .title {
  display: table-cell;
  vertical-align: top;
  padding: 10px 8px;
}

.departure_list {
  display: table-row;
}
.departure_list:nth-child(even) {
  background-color: var(--base-screen-background-even);
}

.departure_list:nth-child(odd) {
  background-color: var(--base-screen-background-odd);
}

.departure_list p {
  display: table-cell;
  vertical-align: top;
  padding: 10px 8px;
  border: 1px solid #ddd;
  color: #fff;
}
@keyframes flip-top {
  0% {
    transform: rotateX(0deg);
  }
  50%,
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes flip-bottom {
  0%,
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
`, "",{"version":3,"sources":["webpack://./styles/clock.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,yBAAyB;;EAEzB,mDAA6C;EAC7C,4BAA4B;EAC5B,kCAAkC;EAClC,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,MAAM;EACN,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;AACpC;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,+CAA+C;AACjD;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,+CAA+C;EAC/C,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,oDAAoD;AACtD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;AACb;AACA;EACE;IACE,wBAAwB;EAC1B;EACA;;IAEE,0BAA0B;EAC5B;AACF;;AAEA;EACE;;IAEE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;AACF","sourcesContent":[":root {\r\n  --base-border-radius: 8px;\r\n  --base-screen-background: #111;\r\n  --base-screen-background-even: #333;\r\n  --base-screen-background-odd: #111;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.time_board {\r\n  padding: 2rem 0;\r\n  background-color: #79baec;\r\n\r\n  background: url(/asset/resource/blue_sky.jpg);\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n.countdown {\r\n  display: flex;\r\n  gap: 1.8rem;\r\n  font-family: sans-serif;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.today {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.time_section {\r\n  text-align: center;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.time_group {\r\n  display: flex;\r\n  gap: 0.6rem;\r\n}\r\n\r\n.countdown p {\r\n  color: #fff;\r\n}\r\n\r\n.time_segment {\r\n  display: block;\r\n  font-size: 6.3rem;\r\n  font-weight: 900;\r\n  width: 100px;\r\n}\r\n\r\n.segment_display {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.segment_display_top,\r\n.segment_display_bottom {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  position: relative;\r\n}\r\n\r\n.segment_display_top {\r\n  line-height: 1.5;\r\n  color: #eee;\r\n  background-color: #111;\r\n  border-radius: var(--base-border-radius);\r\n}\r\n\r\n.segment_display_bottom {\r\n  line-height: 0;\r\n  color: #fff;\r\n  background-color: #333;\r\n  border-radius: var(--base-border-radius);\r\n}\r\n\r\n.segment_overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  perspective: 400px;\r\n  height: 100%;\r\n  width: 100px;\r\n}\r\n\r\n.segment_overlay_top,\r\n.segment_overlay_bottom {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 50%;\r\n  border-radius: var(--base-border-radius);\r\n}\r\n\r\n.segment_overlay_top {\r\n  top: 0;\r\n  line-height: 1.5;\r\n  color: #fff;\r\n  background-color: #111;\r\n  transform-origin: bottom;\r\n}\r\n\r\n.segment_overlay_bottom {\r\n  bottom: 0;\r\n  line-height: 0;\r\n  color: #eee;\r\n  background-color: #333;\r\n  border-top: 2px solid black;\r\n  transform-origin: top;\r\n}\r\n\r\n.segment_overlay.flip .segment_overlay_top {\r\n  animation: flip-top 0.8s linear;\r\n}\r\n\r\n.segment_overlay.flip .segment_overlay_bottom {\r\n  animation: flip-bottom 0.8s linear;\r\n}\r\n\r\n/* 출발 스케줄 스크린 css */\r\n#departure_screen {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.screen_container {\r\n  border: solid 1em #333;\r\n  border-radius: 0.5em;\r\n  padding: 10px 0;\r\n}\r\n\r\n.screen {\r\n  display: table;\r\n  margin: 0 auto;\r\n  background-color: var(--base-screen-background);\r\n}\r\n\r\n.screen_title {\r\n  display: table-row;\r\n  width: 100%;\r\n  overflow: scroll;\r\n  background-color: #eee;\r\n  border-spacing: 2px;\r\n  border-radius: 4px;\r\n  background-color: var(--base-screen-background);\r\n  color: #fff;\r\n}\r\n\r\n.screen_title .title {\r\n  display: table-cell;\r\n  vertical-align: top;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.departure_list {\r\n  display: table-row;\r\n}\r\n.departure_list:nth-child(even) {\r\n  background-color: var(--base-screen-background-even);\r\n}\r\n\r\n.departure_list:nth-child(odd) {\r\n  background-color: var(--base-screen-background-odd);\r\n}\r\n\r\n.departure_list p {\r\n  display: table-cell;\r\n  vertical-align: top;\r\n  padding: 10px 8px;\r\n  border: 1px solid #ddd;\r\n  color: #fff;\r\n}\r\n@keyframes flip-top {\r\n  0% {\r\n    transform: rotateX(0deg);\r\n  }\r\n  50%,\r\n  100% {\r\n    transform: rotateX(-90deg);\r\n  }\r\n}\r\n\r\n@keyframes flip-bottom {\r\n  0%,\r\n  50% {\r\n    transform: rotateX(90deg);\r\n  }\r\n  100% {\r\n    transform: rotateX(0deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/common.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/common.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  /* html의 font의 기준을 10px로 변경 */
  font-size: 10px;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.6rem; /* body의 font-size를 10px로 기준으로 1rem으로 설정 */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  /* 추가해야 글 간격 맞음 */
  letter-spacing: -0.01rem;
  word-break: keep-all;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  padding: 0;
  margin: 0;
  font-size: medium;
  font-weight: normal;
}
p {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`, "",{"version":3,"sources":["webpack://./styles/common.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iBAAiB,EAAE,0CAA0C;EAC7D;wEACsE;;EAEtE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;;;;;;EAOE,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;;EAEE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX","sourcesContent":["html {\r\n  /* html의 font의 기준을 10px로 변경 */\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-size: 1.6rem; /* body의 font-size를 10px로 기준으로 1rem으로 설정 */\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n\r\n  /* 추가해야 글 간격 맞음 */\r\n  letter-spacing: -0.01rem;\r\n  word-break: keep-all;\r\n  overflow-x: hidden;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nstrong {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: medium;\r\n  font-weight: normal;\r\n}\r\np {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/index.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gugi&family=Hahmlet:wght@100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Gugi&family=Hahmlet:wght@100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Moirai+One&family=Nanum+Brush+Script&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Moirai+One&family=Nanum+Brush+Script&family=Song+Myung&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Dongle&family=Moirai+One&family=Nanum+Brush+Script&family=Song+Myung&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* content_title */

/* 항공사 이름 / 출발공항/목적공항 폰트*/

:root {
  /* --ticket-background-color: #ffa500; */
  --ticket-background-color: #add8e6;
  --ticket-font-color: #fff;
  --base-padding: 10px;
  --base-content-font-color: #6b6b6b;
  --base-font-color: #000;
  --ticket-border-radius: 15px;
}
.container {
  margin: 0 4rem;
}
.wrap {
  overflow-x: hidden;
}

.ticket_title {
  font-size: 2rem;
}

.content {
  position: relative;
  background-color: #f4f3e8;
  height: 100%;
}

.content_background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-30deg); /* Combine translate and rotate in one transform */
  color: #acacac4d;
  font-size: 3rem;
  transform-origin: center;
  /* font-family: "Bagel Fat One", system-ui;
  font-weight: 400;
  font-style: normal; */

  font-family: "Song Myung", serif;
  font-weight: 400;
  font-style: normal;
}

#terminal_id,
#gate_number {
  position: relative;
}
#terminal_id p,
#gate_number p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 1.6rem;
}
.aiport_status svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  opacity: 0.5;
}
.content_title {
  font-family: "Hahmlet", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1.6rem;
  color: var(--base-content-font-color);
  padding: var(--base-padding) 0;
}

.content_text {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  /* font-size: 2.5rem; */
}

#wrap {
}

#header {
}
.nav {
  display: flex;
  justify-content: space-between;
}

.nav_top {
}

#input_flightId {
  text-transform: uppercase;
  text-align: center;
}

.week_schedule {
  display: flex;
  text-align: center;
  justify-content: center;
}
.week_schedule li {
  padding: 30px;
}

/* main 시작 */
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ticket {
  display: flex;
  box-sizing: border-box;
  background-color: transparent;
  /* width: 100%; */
}

.ticket_top {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: var(--base-padding);
  background-color: var(--ticket-background-color);
  color: var(--ticket-font-color);
  text-align: center;
  align-items: center;
  border-radius: var(--ticket-border-radius) var(--ticket-border-radius) 0 0;
}

.ticket_title {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
}
.logo {
}

.boarding_pass {
  text-transform: uppercase;
}

.content {
  padding: var(--base-padding);
  /* height: 100%; */
}

.ticket_left,
.ticket_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.ticket_left {
  width: 70%;
  border-right: 3px dashed #9e9e9e;
}

.ticket_right {
  width: 30%;
}

.ticket_right .ticket_top .ticket_title {
  margin: 0 auto;
}

.about_time {
}

.city {
  display: flex;
  flex-wrap: wrap;
  padding: var(--base-padding) 0;
  z-index: 10;
}

.city .item1 {
  flex: 1 1 50%;
  text-align: center;
}

.city .item2 {
  flex: 1 1 40%;
  text-align: center;
  font-size: 3.5rem;
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.aiport_status {
  display: flex;
  flex-wrap: wrap;
  padding: var(--base-padding) 0;
  z-index: 10;
}

.aiport_status .item1 {
  flex: 1 1 30%;
  text-align: center;
}

.aiport_status .item2 {
  flex: 1 1 30%;
  text-align: center;
}

.aiport_status .item3 {
  flex: 1 1 50%;
  text-align: center;
}

.aiport_status .item4 {
  flex: 1 1 50%;
  text-align: center;
}

.ticket_bottom {
  display: flex;
  justify-content: space-between;
  padding: var(--base-padding);
  background-color: var(--ticket-background-color);
  color: var(--ticket-font-color);
  border-radius: 0 0 var(--ticket-border-radius) var(--ticket-border-radius);
}

.boarding_pass {
}

.hide_text {
  display: inline-block;
  overflow: hidden;
  border: 0;
  width: 0px;
  height: 0px;
  clip: rect(1px, 1px, 1px, 1px);
  /* 추가 */
  clip-path: inset(50%);
  display: inline-block;
}

.airplane_container {
  position: relative;
}

.airplane {
  position: absolute;
  left: -50px;
  font-size: 3rem;
  animation: fly 2.5s linear infinite;
  transform: rotate(45deg);
}

@keyframes fly {
  0% {
    left: -50px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    left: calc(100% + 20px);
    opacity: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./styles/index.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAGlB,yBAAyB;;AASzB;EACE,wCAAwC;EACxC,kCAAkC;EAClC,yBAAyB;EACzB,oBAAoB;EACpB,kCAAkC;EAClC,uBAAuB;EACvB,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+CAA+C,EAAE,kDAAkD;EACnG,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB;;uBAEqB;;EAErB,gCAAgC;EAChC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,qCAAqC;EACrC,8BAA8B;AAChC;;AAEA;EACE,uCAAuC;EACvC,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;AACA;;AAEA;AACA;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;AACA;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,gDAAgD;EAChD,+BAA+B;EAC/B,kBAAkB;EAClB,mBAAmB;EACnB,0EAA0E;AAC5E;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;AACA;AACA;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,sBAAsB;EACtB,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,gDAAgD;EAChD,+BAA+B;EAC/B,0EAA0E;AAC5E;;AAEA;AACA;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;EACX,8BAA8B;EAC9B,OAAO;EACP,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,mCAAmC;EACnC,wBAAwB;AAC1B;;AAEA;EACE;IACE,WAAW;IACX,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,uBAAuB;IACvB,UAAU;EACZ;AACF","sourcesContent":["/* content_title */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gugi&family=Hahmlet:wght@100..900&display=swap\");\r\n\r\n/* 항공사 이름 / 출발공항/목적공항 폰트*/\r\n@import url(\"https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&family=Gugi&family=Hahmlet:wght@100..900&display=swap\");\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Moirai+One&family=Nanum+Brush+Script&display=swap\");\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Moirai+One&family=Nanum+Brush+Script&family=Song+Myung&display=swap\");\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Dongle&family=Moirai+One&family=Nanum+Brush+Script&family=Song+Myung&display=swap\");\r\n\r\n:root {\r\n  /* --ticket-background-color: #ffa500; */\r\n  --ticket-background-color: #add8e6;\r\n  --ticket-font-color: #fff;\r\n  --base-padding: 10px;\r\n  --base-content-font-color: #6b6b6b;\r\n  --base-font-color: #000;\r\n  --ticket-border-radius: 15px;\r\n}\r\n.container {\r\n  margin: 0 4rem;\r\n}\r\n.wrap {\r\n  overflow-x: hidden;\r\n}\r\n\r\n.ticket_title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.content {\r\n  position: relative;\r\n  background-color: #f4f3e8;\r\n  height: 100%;\r\n}\r\n\r\n.content_background {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) rotate(-30deg); /* Combine translate and rotate in one transform */\r\n  color: #acacac4d;\r\n  font-size: 3rem;\r\n  transform-origin: center;\r\n  /* font-family: \"Bagel Fat One\", system-ui;\r\n  font-weight: 400;\r\n  font-style: normal; */\r\n\r\n  font-family: \"Song Myung\", serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n#terminal_id,\r\n#gate_number {\r\n  position: relative;\r\n}\r\n#terminal_id p,\r\n#gate_number p {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 10;\r\n  font-size: 1.6rem;\r\n}\r\n.aiport_status svg {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80%;\r\n  opacity: 0.5;\r\n}\r\n.content_title {\r\n  font-family: \"Hahmlet\", serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 1.6rem;\r\n  color: var(--base-content-font-color);\r\n  padding: var(--base-padding) 0;\r\n}\r\n\r\n.content_text {\r\n  font-family: \"Nanum Gothic\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  /* font-size: 2.5rem; */\r\n}\r\n\r\n#wrap {\r\n}\r\n\r\n#header {\r\n}\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav_top {\r\n}\r\n\r\n#input_flightId {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.week_schedule {\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n.week_schedule li {\r\n  padding: 30px;\r\n}\r\n\r\n/* main 시작 */\r\n#main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.ticket {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  background-color: transparent;\r\n  /* width: 100%; */\r\n}\r\n\r\n.ticket_top {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: var(--base-padding);\r\n  background-color: var(--ticket-background-color);\r\n  color: var(--ticket-font-color);\r\n  text-align: center;\r\n  align-items: center;\r\n  border-radius: var(--ticket-border-radius) var(--ticket-border-radius) 0 0;\r\n}\r\n\r\n.ticket_title {\r\n  font-family: \"Do Hyeon\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 3rem;\r\n}\r\n.logo {\r\n}\r\n\r\n.boarding_pass {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.content {\r\n  padding: var(--base-padding);\r\n  /* height: 100%; */\r\n}\r\n\r\n.ticket_left,\r\n.ticket_right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  border-radius: 25px;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.ticket_left {\r\n  width: 70%;\r\n  border-right: 3px dashed #9e9e9e;\r\n}\r\n\r\n.ticket_right {\r\n  width: 30%;\r\n}\r\n\r\n.ticket_right .ticket_top .ticket_title {\r\n  margin: 0 auto;\r\n}\r\n\r\n.about_time {\r\n}\r\n\r\n.city {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: var(--base-padding) 0;\r\n  z-index: 10;\r\n}\r\n\r\n.city .item1 {\r\n  flex: 1 1 50%;\r\n  text-align: center;\r\n}\r\n\r\n.city .item2 {\r\n  flex: 1 1 40%;\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  font-family: \"Do Hyeon\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n.aiport_status {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: var(--base-padding) 0;\r\n  z-index: 10;\r\n}\r\n\r\n.aiport_status .item1 {\r\n  flex: 1 1 30%;\r\n  text-align: center;\r\n}\r\n\r\n.aiport_status .item2 {\r\n  flex: 1 1 30%;\r\n  text-align: center;\r\n}\r\n\r\n.aiport_status .item3 {\r\n  flex: 1 1 50%;\r\n  text-align: center;\r\n}\r\n\r\n.aiport_status .item4 {\r\n  flex: 1 1 50%;\r\n  text-align: center;\r\n}\r\n\r\n.ticket_bottom {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: var(--base-padding);\r\n  background-color: var(--ticket-background-color);\r\n  color: var(--ticket-font-color);\r\n  border-radius: 0 0 var(--ticket-border-radius) var(--ticket-border-radius);\r\n}\r\n\r\n.boarding_pass {\r\n}\r\n\r\n.hide_text {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  border: 0;\r\n  width: 0px;\r\n  height: 0px;\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  /* 추가 */\r\n  clip-path: inset(50%);\r\n  display: inline-block;\r\n}\r\n\r\n.airplane_container {\r\n  position: relative;\r\n}\r\n\r\n.airplane {\r\n  position: absolute;\r\n  left: -50px;\r\n  font-size: 3rem;\r\n  animation: fly 2.5s linear infinite;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n@keyframes fly {\r\n  0% {\r\n    left: -50px;\r\n    opacity: 0;\r\n  }\r\n  30% {\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    left: calc(100% + 20px);\r\n    opacity: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/external-svg-loader/dist/svg-loader.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/external-svg-loader/dist/svg-loader.min.js ***!
  \*****************************************************************/
/***/ (() => {

(()=>{"use strict";var t={701:t=>{let e=0;t.exports={incr:()=>++e,decr:()=>--e,curr:()=>e}},941:t=>{t.exports=(t,e,r="")=>{const n=/url\(['"]?#([\w:.-]+)['"]?\)/g,o=/#([\w:.-]+)/g;return e.match(n)&&(e=e.replace(n,(function(e,r){return t[r]?`url(#${t[r]})`:e}))),["href","xlink:href"].includes(r)&&e.match(o)&&(e=e.replace(o,(function(e,r){return t[r]?`#${t[r]}`:e}))),e}},905:t=>{t.exports=(t,e,r)=>{const n=new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");return t.replace(n,(function(t,n,o){if(n.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))return n+o;const a=n.match(/#(\w+)/);return a&&r[a[1]]&&(n=n.replace(a[0],`#${r[a[1]]}`)),(n=n.replace(/^(\s*)/,"$1"+e+" "))+o}))}},678:(t,e,r)=>{function n(t){return new Promise(((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)}))}function o(t,e){const r=indexedDB.open(t);r.onupgradeneeded=()=>r.result.createObjectStore(e);const o=n(r);return(t,r)=>o.then((n=>r(n.transaction(e,t).objectStore(e))))}let a;function s(){return a||(a=o("keyval-store","keyval")),a}function i(t,e=s()){return e("readonly",(e=>n(e.get(t))))}function c(t,e,r=s()){return r("readwrite",(r=>(r.put(e,t),n(r.transaction))))}function u(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.put(t[1],t[0]))),n(e.transaction))))}function l(t,e=s()){return e("readonly",(e=>Promise.all(t.map((t=>n(e.get(t)))))))}function d(t,e,r=s()){return r("readwrite",(r=>new Promise(((o,a)=>{r.get(t).onsuccess=function(){try{r.put(e(this.result),t),o(n(r.transaction))}catch(t){a(t)}}}))))}function f(t,e=s()){return e("readwrite",(e=>(e.delete(t),n(e.transaction))))}function h(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.delete(t))),n(e.transaction))))}function b(t=s()){return t("readwrite",(t=>(t.clear(),n(t.transaction))))}function g(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},n(t.transaction)}function p(t=s()){return t("readonly",(t=>{if(t.getAllKeys)return n(t.getAllKeys());const e=[];return g(t,(t=>e.push(t.key))).then((()=>e))}))}function y(t=s()){return t("readonly",(t=>{if(t.getAll)return n(t.getAll());const e=[];return g(t,(t=>e.push(t.value))).then((()=>e))}))}function m(t=s()){return t("readonly",(e=>{if(e.getAll&&e.getAllKeys)return Promise.all([n(e.getAllKeys()),n(e.getAll())]).then((([t,e])=>t.map(((t,r)=>[t,e[r]]))));const r=[];return t("readonly",(t=>g(t,(t=>r.push([t.key,t.value]))).then((()=>r))))}))}r.r(e),r.d(e,{clear:()=>b,createStore:()=>o,del:()=>f,delMany:()=>h,entries:()=>m,get:()=>i,getMany:()=>l,keys:()=>p,promisifyRequest:()=>n,set:()=>c,setMany:()=>u,update:()=>d,values:()=>y})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{get:t,set:e,del:n,entries:o}=r(678),a=r(905),s=r(941),i=r(701),c=[],u={},l=(t,e,r)=>{const{enableJs:n,disableUniqueIds:o,disableCssScoping:l,spriteIconId:d}=e,f=!!d,h=(new DOMParser).parseFromString(r,"text/html"),b=f?h.getElementById(d):h.querySelector("svg"),g=(()=>{if(c.length)return c;for(const t in document.body)t.startsWith("on")&&c.push(t);return c.push("onbegin","onend","onrepeat"),c.push("onfocusin","onfocusout","onbounce","onfinish","onshow"),c})(),p=u[t.getAttribute("data-id")]||new Set,y=t.getAttribute("data-id")||`svg-loader_${i.incr()}`,m={};if(o||Array.from(b.querySelectorAll("[id]")).forEach((t=>{const e=t.getAttribute("id"),r=`${e}_${i.incr()}`;t.setAttribute("id",r),m[e]=r})),Array.from(b.querySelectorAll("*")).concat(b).forEach((e=>{if("script"===e.tagName){if(e.remove(),!n)return;{const r=document.createElement("script");r.appendChild(e.childNodes[0]),t.appendChild(r)}}const r=[];for(let t=0;t<e.attributes.length;t++){const{name:o,value:a}=e.attributes[t],i=s(m,a,o);a!==i&&e.setAttribute(o,i),!g.includes(o.toLowerCase())||n?["href","xlink:href","values"].includes(o)&&a.startsWith("javascript")&&!n&&r.push(o):r.push(o)}if(r.forEach((t=>e.removeAttribute(t))),"style"===e.tagName&&!l){let t=a(e.innerHTML,`[data-id="${y}"]`,m);t=s(m,t),t!==e.innerHTML&&(e.innerHTML=t)}})),t.innerHTML=d?b.outerHTML:b.innerHTML,!f)for(let e=0;e<b.attributes.length;e++){const{name:r,value:n}=b.attributes[e];t.getAttribute(r)&&!p.has(r)||(p.add(r),t.setAttribute(r,n))}u[y]=p,t.setAttribute("data-id",y);const v=new CustomEvent("iconload",{bubbles:!0});if(t.dispatchEvent(v),t.getAttribute("oniconload")){t.setAttribute("onauxclick",t.getAttribute("oniconload"));const e=new CustomEvent("auxclick",{bubbles:!1,view:window});t.dispatchEvent(e),t.removeAttribute("onauxclick")}},d={},f={},h=async r=>{const o=new URL(r.getAttribute("data-src"),globalThis.location),a=o.toString().replace(o.hash,""),s=o.hash.replace("#",""),i=r.getAttribute("data-cache"),c="enabled"===r.getAttribute("data-js"),u="disabled"===r.getAttribute("data-unique-ids"),b="disabled"===r.getAttribute("data-css-scoping"),g=await(async e=>{let r;try{r=await t(`loader_${e}`)}catch(t){}if(!r)try{r=localStorage.getItem(`loader_${e}`)}catch(t){}if(r)return r=JSON.parse(r),Date.now()<r.expiry?r.data:void n(`loader_${e}`)})(a),p="disabled"!==i,y=l.bind(self,r,{enableJs:c,disableUniqueIds:u,disableCssScoping:b,spriteIconId:s});if(f[a]||p&&g){const t=f[a]||g;y(t)}else{if(d[a])return void setTimeout((()=>h(r)),20);d[a]=!0,fetch(a).then((t=>{if(!t.ok)throw Error(`Request for '${a}' returned ${t.status} (${t.statusText})`);return t.text()})).then((t=>{const r=t.toLowerCase().trim();if(!(r.startsWith("<svg")||r.startsWith("<?xml")||r.startsWith("<!doctype")))throw Error(`Resource '${a}' returned an invalid SVG file`);p&&(async(t,r,n)=>{const o=parseInt(n,10),a=JSON.stringify({data:r,expiry:Date.now()+(Number.isNaN(o)?2592e6:1e3*o)});try{await e(`loader_${t}`,a)}catch(e){try{localStorage.setItem(`loader_${t}`,a)}catch(t){console.warn("Failed to set cache: ",t)}}})(a,t,i),f[a]=t,y(t)})).catch((t=>{console.error(t);const e=new CustomEvent("iconloaderror",{bubbles:!0,detail:t.toString()});r.dispatchEvent(e),r.getAttribute("oniconloaderror")&&Function("error",r.getAttribute("oniconloaderror"))(t)})).finally((()=>{delete d[a]}))}};let b;globalThis.IntersectionObserver&&(b=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(h(t.target),b.unobserve(t.target))}))}),{rootMargin:"1200px"}));const g=[];function p(){Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((t=>{-1===g.indexOf(t)&&(g.push(t),"lazy"===t.getAttribute("data-loading")?b.observe(t):h(t))}))}let y=!1;if(globalThis.addEventListener){const m=setInterval((()=>{p()}),100);function v(){clearInterval(m),p(),y||(y=!0,new MutationObserver((t=>{t.some((t=>Array.from(t.addedNodes).some((t=>t.nodeType===Node.ELEMENT_NODE&&(t.getAttribute("data-src")&&!t.getAttribute("data-id")||t.querySelector("svg[data-src]:not([data-id])"))))))&&p(),t.forEach((t=>{"attributes"===t.type&&h(t.target)}))})).observe(document.documentElement,{attributeFilter:["data-src"],attributes:!0,childList:!0,subtree:!0}))}"interactive"===document.readyState?v():globalThis.addEventListener("DOMContentLoaded",(()=>{v()}))}globalThis.SVGLoader={},globalThis.SVGLoader.destroyCache=async()=>{try{const t=await o();for(const e of t)e[0].startsWith("loader_")&&await n(e[0])}catch(t){}Object.keys(localStorage).forEach((t=>{t.startsWith("loader_")&&localStorage.removeItem(t)}))}})()})();
//# sourceMappingURL=svg-loader.min.js.map

/***/ }),

/***/ "./styles/clock.css":
/*!**************************!*\
  !*** ./styles/clock.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./clock.css */ "./node_modules/css-loader/dist/cjs.js!./styles/clock.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/common.css":
/*!***************************!*\
  !*** ./styles/common.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ "./node_modules/css-loader/dist/cjs.js!./styles/common.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./asset/resource/blue_sky.jpg":
/*!*************************************!*\
  !*** ./asset/resource/blue_sky.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b5e0634b7558bcde03b6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common.css */ "./styles/common.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_clock_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/clock.css */ "./styles/clock.css");
/* harmony import */ var external_svg_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! external-svg-loader */ "./node_modules/external-svg-loader/dist/svg-loader.min.js");
/* harmony import */ var external_svg_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(external_svg_loader__WEBPACK_IMPORTED_MODULE_3__);




let departureInfo;
let arrivalInfo;
let regularFlightsInfo;
let flightsScheduleInfo;
const API_KEY = "9a8lGEBN6%2BLPLwLyLK7ypv5YsnsL9kfQSKqfuqg7Vv%2BQ%2BFf654k%2B%2F0KmBRHJWw7SkSBwMQtYr5JF1l1gvtC%2Bfg%3D%3D";

//let myTicketList = [];

let departureData;
setInterval(() => {
  let today = new Date();
  let hour = today.getHours(); // 시
  let min = today.getMinutes(); //분
  let sec = today.getSeconds(); //초

  let timeBoard = document.querySelectorAll(".timenow"); // 값이 입력될 공간
  timeBoard.forEach(item => {
    let time = hour + "시 " + min + "분 " + sec + "초"; // 형식 지정
    item.textContent = time; // 출력
  });
}, 1000);
async function getData() {
  // 출발정보
  const departuresApiUrl = `http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerDeparturesOdp?serviceKey=${API_KEY}&searchday=20240702&&from_time=0000&to_time=2400&lang=K&type=json`;
  // 도착정보
  const arrivalApiUrl = `http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp?serviceKey=${API_KEY}&from_time=0000&to_time=2400&lang=K&type=json`;

  // 정기 여객 출발정보
  const regularFlights = `http://apis.data.go.kr/B551177/PaxFltSched/getPaxFltSchedDepartures?serviceKey=${API_KEY}&lang=K&numOfRows=10000&pageNo=1&type=json`;

  //const flightsSchedule = `http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?ServiceKey=${API_KEY}&schDeptCityCode=ICN&pageNo=1`;

  const responses = await Promise.all([fetch(departuresApiUrl)
  //fetch(arrivalApiUrl),
  //fetch(regularFlights),
  //fetch(flightsSchedule),
  ]);
  departureInfo = await responses[0].json();
  //arrivalInfo = await responses[1].json();
  //regularFlightsInfo = await responses[1].json();
  //flightsScheduleInfo = await responses[2].json();

  console.log("인천출발", departureInfo.response.body.items);
  //console.log("인천스케쥴", flightsScheduleInfo.response.body.items);

  departureData = departureInfo.response.body.items;
  await departureScreen();
  setInterval(async () => {
    console.log("10초 마다 최신화");
    await departureScreen();
  }, 10000);
}
try {
  getData();
} catch (error) {
  console.log("에러", error);
}
let ticket = document.getElementById("ticket");
let flightIdInput = document.getElementById("input_flightId");
let airlineName = document.getElementsByClassName("ticket_title");
let textBackground = document.querySelectorAll(".content_background");
let departureAirport = document.getElementById("departure_airport_code");
let arrivalAirport = document.getElementById("arrival_airport_code");
let finalAirport = document.getElementById("final_airport");
let flightId = document.getElementById("flight_id");
let gateNumber = document.querySelector("#gate_number p");
// let cityCode = document.getElementById("city_code");
let remark = document.getElementById("remark");
let terminalId = document.querySelector("#terminal_id p");
let estimatedDateTime = document.getElementById("estimated_datetime");
let checkinCounter = document.getElementById("checkin_counter");
let elapseTime = document.getElementById("elapse_time");
let estimatedArrivalTime = document.getElementById("estimated_arrival_time");
// let rotateBtn = document.getElementById("rotate_button");

// 추가 문자열
let insertString = ":";
flightIdInput.addEventListener("change", function (e) {
  try {
    for (let i = 0; i < departureData.length; i++) {
      if (e.target.value === departureData[i].flightId) {
        // 항공사
        airlineName[0].textContent = departureData[i].airline;
        airlineName[1].textContent = departureData[i].airline;
        textBackground[0].textContent = departureData[i].airline;
        textBackground[1].textContent = departureData[i].airline;

        // 최종 목적지 공항명(한글)
        finalAirport.textContent = departureData[i].airport;
        // 출발 공항 코드 : 인천
        departureAirport.textContent = "ICN";
        // 도착 공항 코드
        arrivalAirport.textContent = departureData[i].airportCode;
        flightId.textContent = departureData[i].flightId;
        gateNumber.textContent = departureData[i].gatenumber;
        // if (
        //   departureData[i].cityCode === null ||
        //   departureData[i].cityCode === ""
        // ) {
        //   cityCode.textContent = "도시 코드 미제공";
        // } else {
        //   cityCode.textContent = departureData[i].cityCode;
        // }
        if (departureData[i].remark === null) {
          remark.textContent = `운항 예정`;
        } else {
          remark.textContent = departureData[i].remark;
        }
        if (departureData[i].terminalId === "P01") {
          terminalId.textContent = "제1 터미널";
        } else if (departureData[i].terminalId === "P02") {
          terminalId.textContent = "탑승동";
        } else if (departureData[i].terminalId === "P03") {
          terminalId.textContent = "제2 터미널";
        }

        // 변경 출발 시간
        let newEstimatedDateTime = departureData[i].estimatedDateTime.slice(0, 2) + insertString + departureData[i].estimatedDateTime.slice(2);
        estimatedDateTime.textContent = newEstimatedDateTime;

        // 체크인 카운터
        checkinCounter.textContent = departureData[i].chkinrange;
        if (departureData[i].elapsetime === null) {
          elapseTime.textContent = `비행 소요 시간 정보 미제공`;
        } else {
          let newElapseTime = departureData[i].elapsetime.slice(0, 2) + insertString + departureData[i].elapsetime.slice(2);
          elapseTime.textContent = newElapseTime;
          let arrivalTime = `0${Number(departureData[i].estimatedDateTime) + Number(departureData[i].elapsetime)}`;
          let newEstimatedArrivalTime = arrivalTime.slice(0, 2) + insertString + arrivalTime.slice(2);
          estimatedArrivalTime.textContent = newEstimatedArrivalTime;
        }
      }
    }
  } catch (error) {
    //console.log(error);
    console.log("해당 편명은 없습니다");
  }
});

// 스크린 추가
let screen = document.querySelector(".screen");
function convertToTimeToday(timeString) {
  const now = new Date();
  const hours = parseInt(timeString.slice(0, 2), 10);
  const minutes = parseInt(timeString.slice(2, 4), 10);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
}

// 10초마다 리셋하고 최신화 하기 추가
async function departureScreen() {
  //screen.innerHTML = "";
  let list = document.querySelectorAll(".departure_list");
  if (list) {
    list.forEach(item => {
      item.remove();
    });
  }
  const itemsToDisplay = 20;
  const now = new Date();
  const upcomingDepartures = departureData.filter(departure => {
    const departureTime = convertToTimeToday(departure.scheduleDateTime);
    return departureTime > now;
  });
  const sortedDepartureData = upcomingDepartures.sort((a, b) => {
    const timeA = convertToTimeToday(a.estimatedDateTime);
    const timeB = convertToTimeToday(b.estimatedDateTime);
    return timeA - timeB;
  });
  for (let i = 0; i < Math.min(itemsToDisplay, sortedDepartureData.length); i++) {
    // 출발 현황 리스트 생성
    let departureList = document.createElement("div");
    let departureAirlineName = document.createElement("p");
    let departureTerminalId = document.createElement("p");
    let departureFlightId = document.createElement("p");
    let departureRemark = document.createElement("p");
    let departureGateNum = document.createElement("p");
    let departureEstimatedTime = document.createElement("p");
    let departureScheduleTime = document.createElement("p");
    let departureAirport = document.createElement("p");
    let departureCheckin = document.createElement("p");
    screen.appendChild(departureList);
    // 예정 출발 시간
    departureList.appendChild(departureScheduleTime);
    // 변경 출발 시간
    departureList.appendChild(departureEstimatedTime);
    // 도착 공항
    departureList.appendChild(departureAirport);
    // 항공사
    departureList.appendChild(departureAirlineName);
    // 출발 편명
    departureList.appendChild(departureFlightId);
    // 터미널이름
    departureList.appendChild(departureTerminalId);
    // 체크인 카운터
    departureList.appendChild(departureCheckin);
    // 게이트
    departureList.appendChild(departureGateNum);
    // 출발 현황
    departureList.appendChild(departureRemark);

    // 터미널 이름 변경
    if (sortedDepartureData[i].terminalId === "P01") {
      departureTerminalId.textContent = "제1 터미널";
    } else if (sortedDepartureData[i].terminalId === "P02") {
      departureTerminalId.textContent = "탑승동";
    } else if (sortedDepartureData[i].terminalId === "P03") {
      departureTerminalId.textContent = "제2 터미널";
    }
    departureList.classList.add("departure_list");
    departureScheduleTime.classList.add("departure_schedule");
    departureEstimatedTime.classList.add("departure_estimated");
    departureAirport.classList.add("departure_airport");
    departureAirlineName.classList.add("departure_airline");
    departureFlightId.classList.add("departure_flightId");
    departureTerminalId.classList.add("departure_terminal");
    departureCheckin.classList.add("departure_checkin");
    departureGateNum.classList.add("departure_gate");
    departureRemark.classList.add("departure_remark");

    // 출발 변경 시간
    let newEstimatedDateTime = sortedDepartureData[i].estimatedDateTime.slice(0, 2) + insertString + sortedDepartureData[i].estimatedDateTime.slice(2);

    // 출발 예정 시간
    let newScheduleDateTime = sortedDepartureData[i].scheduleDateTime.slice(0, 2) + insertString + sortedDepartureData[i].scheduleDateTime.slice(2);
    departureEstimatedTime.textContent = newEstimatedDateTime;
    departureScheduleTime.textContent = newScheduleDateTime;
    departureAirport.textContent = sortedDepartureData[i].airport;
    departureAirlineName.textContent = sortedDepartureData[i].airline;
    departureFlightId.textContent = sortedDepartureData[i].flightId;
    departureCheckin.textContent = sortedDepartureData[i].chkinrange;
    departureGateNum.textContent = sortedDepartureData[i].gatenumber;
    departureRemark.textContent = sortedDepartureData[i].remark;
  }
}

// 현재 시간 체크
function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(".segment_display");
  const segmentDisplayTop = segmentDisplay.querySelector(".segment_display_top");
  const segmentDisplayBottom = segmentDisplay.querySelector(".segment_display_bottom");
  const segmentOverlay = segmentDisplay.querySelector(".segment_overlay");
  const segmentOverlayTop = segmentOverlay.querySelector(".segment_overlay_top");
  const segmentOverlayBottom = segmentOverlay.querySelector(".segment_overlay_bottom");
  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom
  };
}
function updateSegmentValues(displayElement, overlayElement, value) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}
function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements = getTimeSegmentElements(segmentElement);
  if (parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue) {
    return;
  }
  segmentElements.segmentOverlay.classList.add("flip");
  updateSegmentValues(segmentElements.segmentDisplayTop, segmentElements.segmentOverlayBottom, timeValue);
  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove("flip");
    updateSegmentValues(segmentElements.segmentDisplayBottom, segmentElements.segmentOverlayTop, timeValue);
    this.removeEventListener("animationend", finishAnimation);
  }
  segmentElements.segmentOverlay.addEventListener("animationend", finishAnimation);
}
function updateTimeSection(sectionID, timeValue) {
  if (sectionID === "year") {
    const firstDigit = Math.floor(timeValue.toString().substring(0, 2));
    const secondDigit = Math.floor(timeValue.toString().substring(2, 4));
    const timeSegments = document.getElementById(sectionID).querySelectorAll(".time_segment");
    updateTimeSegment(timeSegments[0], firstDigit);
    updateTimeSegment(timeSegments[1], secondDigit);
    return;
  }
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments = sectionElement.querySelectorAll(".time_segment");
  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}
function getCurrentTime() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    days: now.getDate(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  };
}
function updateAllSegments() {
  const currentTime = getCurrentTime();
  updateTimeSection("year", currentTime.year);
  updateTimeSection("month", currentTime.month);
  updateTimeSection("days", currentTime.days);
  updateTimeSection("hours", currentTime.hours);
  updateTimeSection("minutes", currentTime.minutes);
  updateTimeSection("seconds", currentTime.seconds);
}
setInterval(updateAllSegments, 1000);
updateAllSegments();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map