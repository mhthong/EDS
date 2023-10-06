/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/vue-chartjs.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__.Line,
  data: function data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'My First Dataset',
          borderColor: 'rgba(75, 192, 192, 1)',
          data: [65, 59, 80, 81, 56]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=template&id=30973183&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=template&id=30973183& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("line-chart", {
    attrs: {
      "chart-data": _vm.data,
      options: _vm.options
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-chartjs/dist/vue-chartjs.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-chartjs/dist/vue-chartjs.js ***!
  \******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(207),a=r(i),o=n(209),s=r(o),u=n(210),d=r(u),l=n(211),c=r(l),h=n(212),_=r(h),f=n(213),m=r(f),p=n(208),g=r(p),v=n(214),y=r(v),M={Bar:a.default,Doughnut:s.default,Line:d.default,Pie:c.default,PolarArea:_.default,Radar:m.default,Bubble:g.default,Scatter:y.default};e.exports=M},function(e,t,n){(function(e){!function(t,n){e.exports=n()}(this,function(){"use strict";function t(){return gr.apply(null,arguments)}function r(e){gr=e}function i(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function a(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){var t;for(t in e)return!1;return!0}function s(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function u(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,r){return yt(e,t,n,r,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function f(e){return null==e._pf&&(e._pf=_()),e._pf}function m(e){if(null==e._isValid){var t=f(e),n=yr.call(t.parsedDateParts,function(e){return null!=e}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r}return e._isValid}function p(e){var t=h(NaN);return null!=e?c(f(t),e):f(t).userInvalidated=!0,t}function g(e){return void 0===e}function v(e,t){var n,r,i;if(g(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),g(t._i)||(e._i=t._i),g(t._f)||(e._f=t._f),g(t._l)||(e._l=t._l),g(t._strict)||(e._strict=t._strict),g(t._tzm)||(e._tzm=t._tzm),g(t._isUTC)||(e._isUTC=t._isUTC),g(t._offset)||(e._offset=t._offset),g(t._pf)||(e._pf=f(t)),g(t._locale)||(e._locale=t._locale),Mr.length>0)for(n in Mr)r=Mr[n],i=t[r],g(i)||(e[r]=i);return e}function y(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),br===!1&&(br=!0,t.updateOffset(this),br=!1)}function M(e){return e instanceof y||null!=e&&null!=e._isAMomentObject}function b(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function L(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=b(t)),n}function k(e,t,n){var r,i=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&L(e[r])!==L(t[r]))&&o++;return o+a}function Y(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function x(e,n){var r=!0;return c(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),r){for(var i,a=[],o=0;o<arguments.length;o++){if(i="","object"==typeof arguments[o]){i+="\n["+o+"] ";for(var s in arguments[0])i+=s+": "+arguments[0][s]+", ";i=i.slice(0,-2)}else i=arguments[o];a.push(i)}Y(e+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack),r=!1}return n.apply(this,arguments)},n)}function w(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),Lr[e]||(Y(n),Lr[e]=!0)}function D(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function T(e){var t,n;for(n in e)t=e[n],D(t)?this[n]=t:this["_"+n]=t;this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function S(e,t){var n,r=c({},e);for(n in t)l(t,n)&&(a(e[n])&&a(t[n])?(r[n]={},c(r[n],e[n]),c(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)l(e,n)&&!l(t,n)&&a(e[n])&&(r[n]=c({},r[n]));return r}function j(e){null!=e&&this.set(e)}function H(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return D(r)?r.call(t,n):r}function A(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function P(){return this._invalidDate}function C(e){return this._ordinal.replace("%d",e)}function O(e,t,n,r){var i=this._relativeTime[n];return D(i)?i(e,t,n,r):i.replace(/%d/i,e)}function F(e,t){var n=this._relativeTime[e>0?"future":"past"];return D(n)?n(t):n.replace(/%s/i,t)}function W(e,t){var n=e.toLowerCase();Ar[n]=Ar[n+"s"]=Ar[t]=e}function I(e){return"string"==typeof e?Ar[e]||Ar[e.toLowerCase()]:void 0}function E(e){var t,n,r={};for(n in e)l(e,n)&&(t=I(n),t&&(r[t]=e[n]));return r}function z(e,t){Pr[e]=t}function R(e){var t=[];for(var n in e)t.push({unit:n,priority:Pr[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function N(e,n){return function(r){return null!=r?(B(this,e,r),t.updateOffset(this,n),this):V(this,e)}}function V(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function B(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function $(e){return e=I(e),D(this[e])?this[e]():this}function J(e,t){if("object"==typeof e){e=E(e);for(var n=R(e),r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit])}else if(e=I(e),D(this[e]))return this[e](t);return this}function U(e,t,n){var r=""+Math.abs(e),i=t-r.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}function q(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(Wr[e]=i),t&&(Wr[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(Wr[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function G(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function K(e){var t,n,r=e.match(Cr);for(t=0,n=r.length;t<n;t++)Wr[r[t]]?r[t]=Wr[r[t]]:r[t]=G(r[t]);return function(t){var i,a="";for(i=0;i<n;i++)a+=r[i]instanceof Function?r[i].call(t,e):r[i];return a}}function Z(e,t){return e.isValid()?(t=Q(t,e.localeData()),Fr[t]=Fr[t]||K(t),Fr[t](e)):e.localeData().invalidDate()}function Q(e,t){function n(e){return t.longDateFormat(e)||e}var r=5;for(Or.lastIndex=0;r>=0&&Or.test(e);)e=e.replace(Or,n),Or.lastIndex=0,r-=1;return e}function X(e,t,n){ti[e]=D(t)?t:function(e,r){return e&&n?n:t}}function ee(e,t){return l(ti,e)?ti[e](t._strict,t._locale):new RegExp(te(e))}function te(e){return ne(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){return t||n||r||i}))}function ne(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function re(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),s(t)&&(r=function(e,n){n[t]=L(e)}),n=0;n<e.length;n++)ni[e[n]]=r}function ie(e,t){re(e,function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)})}function ae(e,t,n){null!=t&&l(ni,e)&&ni[e](t,n._a,n,e)}function oe(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function se(e,t){return e?i(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||_i).test(t)?"format":"standalone"][e.month()]:this._months}function ue(e,t){return e?i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[_i.test(t)?"format":"standalone"][e.month()]:this._monthsShort}function de(e,t,n){var r,i,a,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)a=h([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(a,"").toLocaleLowerCase();return n?"MMM"===t?(i=hi.call(this._shortMonthsParse,o),i!==-1?i:null):(i=hi.call(this._longMonthsParse,o),i!==-1?i:null):"MMM"===t?(i=hi.call(this._shortMonthsParse,o),i!==-1?i:(i=hi.call(this._longMonthsParse,o),i!==-1?i:null)):(i=hi.call(this._longMonthsParse,o),i!==-1?i:(i=hi.call(this._shortMonthsParse,o),i!==-1?i:null))}function le(e,t,n){var r,i,a;if(this._monthsParseExact)return de.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=h([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(a="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=L(t);else if(t=e.localeData().monthsParse(t),!s(t))return e;return n=Math.min(e.date(),oe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function he(e){return null!=e?(ce(this,e),t.updateOffset(this,!0),this):V(this,"Month")}function _e(){return oe(this.year(),this.month())}function fe(e){return this._monthsParseExact?(l(this,"_monthsRegex")||pe.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=pi),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function me(e){return this._monthsParseExact?(l(this,"_monthsRegex")||pe.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=gi),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pe(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],a=[];for(t=0;t<12;t++)n=h([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),a.push(this.months(n,"")),a.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),a.sort(e),t=0;t<12;t++)r[t]=ne(r[t]),i[t]=ne(i[t]);for(t=0;t<24;t++)a[t]=ne(a[t]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function ge(e){return ve(e)?366:365}function ve(e){return e%4===0&&e%100!==0||e%400===0}function ye(){return ve(this.year())}function Me(e,t,n,r,i,a,o){var s=new Date(e,t,n,r,i,a,o);return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}function be(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Le(e,t,n){var r=7+t-n,i=(7+be(e,0,r).getUTCDay()-t)%7;return-i+r-1}function ke(e,t,n,r,i){var a,o,s=(7+n-r)%7,u=Le(e,r,i),d=1+7*(t-1)+s+u;return d<=0?(a=e-1,o=ge(a)+d):d>ge(e)?(a=e+1,o=d-ge(e)):(a=e,o=d),{year:a,dayOfYear:o}}function Ye(e,t,n){var r,i,a=Le(e.year(),t,n),o=Math.floor((e.dayOfYear()-a-1)/7)+1;return o<1?(i=e.year()-1,r=o+xe(i,t,n)):o>xe(e.year(),t,n)?(r=o-xe(e.year(),t,n),i=e.year()+1):(i=e.year(),r=o),{week:r,year:i}}function xe(e,t,n){var r=Le(e,t,n),i=Le(e+1,t,n);return(ge(e)-r+i)/7}function we(e){return Ye(e,this._week.dow,this._week.doy).week}function De(){return this._week.dow}function Te(){return this._week.doy}function Se(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function je(e){var t=Ye(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function He(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Ae(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Pe(e,t){return e?i(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:this._weekdays}function Ce(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Oe(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Fe(e,t,n){var r,i,a,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)a=h([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(a,"").toLocaleLowerCase();return n?"dddd"===t?(i=hi.call(this._weekdaysParse,o),i!==-1?i:null):"ddd"===t?(i=hi.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=hi.call(this._minWeekdaysParse,o),i!==-1?i:null):"dddd"===t?(i=hi.call(this._weekdaysParse,o),i!==-1?i:(i=hi.call(this._shortWeekdaysParse,o),i!==-1?i:(i=hi.call(this._minWeekdaysParse,o),i!==-1?i:null))):"ddd"===t?(i=hi.call(this._shortWeekdaysParse,o),i!==-1?i:(i=hi.call(this._weekdaysParse,o),i!==-1?i:(i=hi.call(this._minWeekdaysParse,o),i!==-1?i:null))):(i=hi.call(this._minWeekdaysParse,o),i!==-1?i:(i=hi.call(this._weekdaysParse,o),i!==-1?i:(i=hi.call(this._shortWeekdaysParse,o),i!==-1?i:null)))}function We(e,t,n){var r,i,a;if(this._weekdaysParseExact)return Fe.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=h([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[r]||(a="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(a.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Ie(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=He(e,this.localeData()),this.add(e-t,"d")):t}function Ee(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function ze(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Ae(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Re(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=ki),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ne(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Yi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ve(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Be(){function e(e,t){return t.length-e.length}var t,n,r,i,a,o=[],s=[],u=[],d=[];for(t=0;t<7;t++)n=h([2e3,1]).day(t),r=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),a=this.weekdays(n,""),o.push(r),s.push(i),u.push(a),d.push(r),d.push(i),d.push(a);for(o.sort(e),s.sort(e),u.sort(e),d.sort(e),t=0;t<7;t++)s[t]=ne(s[t]),u[t]=ne(u[t]),d[t]=ne(d[t]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function $e(){return this.hours()%12||12}function Je(){return this.hours()||24}function Ue(e,t){q(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function qe(e,t){return t._meridiemParse}function Ge(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ke(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Ze(e){return e?e.toLowerCase().replace("_","-"):e}function Qe(e){for(var t,n,r,i,a=0;a<e.length;){for(i=Ze(e[a]).split("-"),t=i.length,n=Ze(e[a+1]),n=n?n.split("-"):null;t>0;){if(r=Xe(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&k(i,n,!0)>=t-1)break;t--}a++}return null}function Xe(t){var r=null;if(!ji[t]&&"undefined"!=typeof e&&e&&e.exports)try{r=wi._abbr,n(388)("./"+t),et(r)}catch(e){}return ji[t]}function et(e,t){var n;return e&&(n=g(t)?rt(e):tt(e,t),n&&(wi=n)),wi._abbr}function tt(e,t){if(null!==t){var n=Si;if(t.abbr=e,null!=ji[e])w("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=ji[e]._config;else if(null!=t.parentLocale){if(null==ji[t.parentLocale])return Hi[t.parentLocale]||(Hi[t.parentLocale]=[]),Hi[t.parentLocale].push({name:e,config:t}),null;n=ji[t.parentLocale]._config}return ji[e]=new j(S(n,t)),Hi[e]&&Hi[e].forEach(function(e){tt(e.name,e.config)}),et(e),ji[e]}return delete ji[e],null}function nt(e,t){if(null!=t){var n,r=Si;null!=ji[e]&&(r=ji[e]._config),t=S(r,t),n=new j(t),n.parentLocale=ji[e],ji[e]=n,et(e)}else null!=ji[e]&&(null!=ji[e].parentLocale?ji[e]=ji[e].parentLocale:null!=ji[e]&&delete ji[e]);return ji[e]}function rt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return wi;if(!i(e)){if(t=Xe(e))return t;e=[e]}return Qe(e)}function it(){return xr(ji)}function at(e){var t,n=e._a;return n&&f(e).overflow===-2&&(t=n[ii]<0||n[ii]>11?ii:n[ai]<1||n[ai]>oe(n[ri],n[ii])?ai:n[oi]<0||n[oi]>24||24===n[oi]&&(0!==n[si]||0!==n[ui]||0!==n[di])?oi:n[si]<0||n[si]>59?si:n[ui]<0||n[ui]>59?ui:n[di]<0||n[di]>999?di:-1,f(e)._overflowDayOfYear&&(t<ri||t>ai)&&(t=ai),f(e)._overflowWeeks&&t===-1&&(t=li),f(e)._overflowWeekday&&t===-1&&(t=ci),f(e).overflow=t),e}function ot(e){var t,n,r,i,a,o,s=e._i,u=Ai.exec(s)||Pi.exec(s);if(u){for(f(e).iso=!0,t=0,n=Oi.length;t<n;t++)if(Oi[t][1].exec(u[1])){i=Oi[t][0],r=Oi[t][2]!==!1;break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=Fi.length;t<n;t++)if(Fi[t][1].exec(u[3])){a=(u[2]||" ")+Fi[t][0];break}if(null==a)return void(e._isValid=!1)}if(!r&&null!=a)return void(e._isValid=!1);if(u[4]){if(!Ci.exec(u[4]))return void(e._isValid=!1);o="Z"}e._f=i+(a||"")+(o||""),ht(e)}else e._isValid=!1}function st(e){var n=Wi.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(ot(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function ut(e,t,n){return null!=e?e:null!=t?t:n}function dt(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function lt(e){var t,n,r,i,a=[];if(!e._d){for(r=dt(e),e._w&&null==e._a[ai]&&null==e._a[ii]&&ct(e),e._dayOfYear&&(i=ut(e._a[ri],r[ri]),e._dayOfYear>ge(i)&&(f(e)._overflowDayOfYear=!0),n=be(i,0,e._dayOfYear),e._a[ii]=n.getUTCMonth(),e._a[ai]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=r[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[oi]&&0===e._a[si]&&0===e._a[ui]&&0===e._a[di]&&(e._nextDay=!0,e._a[oi]=0),e._d=(e._useUTC?be:Me).apply(null,a),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[oi]=24)}}function ct(e){var t,n,r,i,a,o,s,u;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)a=1,o=4,n=ut(t.GG,e._a[ri],Ye(Mt(),1,4).year),r=ut(t.W,1),i=ut(t.E,1),(i<1||i>7)&&(u=!0);else{a=e._locale._week.dow,o=e._locale._week.doy;var d=Ye(Mt(),a,o);n=ut(t.gg,e._a[ri],d.year),r=ut(t.w,d.week),null!=t.d?(i=t.d,(i<0||i>6)&&(u=!0)):null!=t.e?(i=t.e+a,(t.e<0||t.e>6)&&(u=!0)):i=a}r<1||r>xe(n,a,o)?f(e)._overflowWeeks=!0:null!=u?f(e)._overflowWeekday=!0:(s=ke(n,r,i,a,o),e._a[ri]=s.year,e._dayOfYear=s.dayOfYear)}function ht(e){if(e._f===t.ISO_8601)return void ot(e);e._a=[],f(e).empty=!0;var n,r,i,a,o,s=""+e._i,u=s.length,d=0;for(i=Q(e._f,e._locale).match(Cr)||[],n=0;n<i.length;n++)a=i[n],r=(s.match(ee(a,e))||[])[0],r&&(o=s.substr(0,s.indexOf(r)),o.length>0&&f(e).unusedInput.push(o),s=s.slice(s.indexOf(r)+r.length),d+=r.length),Wr[a]?(r?f(e).empty=!1:f(e).unusedTokens.push(a),ae(a,r,e)):e._strict&&!r&&f(e).unusedTokens.push(a);f(e).charsLeftOver=u-d,s.length>0&&f(e).unusedInput.push(s),e._a[oi]<=12&&f(e).bigHour===!0&&e._a[oi]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[oi]=_t(e._locale,e._a[oi],e._meridiem),lt(e),at(e)}function _t(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(r=e.isPM(n),r&&t<12&&(t+=12),r||12!==t||(t=0),t):t}function ft(e){var t,n,r,i,a;if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)a=0,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],ht(t),m(t)&&(a+=f(t).charsLeftOver,a+=10*f(t).unusedTokens.length,f(t).score=a,(null==r||a<r)&&(r=a,n=t));c(e,n||t)}function mt(e){if(!e._d){var t=E(e._i);e._a=d([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),lt(e)}}function pt(e){var t=new y(at(gt(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function gt(e){var t=e._i,n=e._f;return e._locale=e._locale||rt(e._l),null===t||void 0===n&&""===t?p({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),M(t)?new y(at(t)):(u(t)?e._d=t:i(n)?ft(e):n?ht(e):vt(e),m(e)||(e._d=null),e))}function vt(e){var n=e._i;void 0===n?e._d=new Date(t.now()):u(n)?e._d=new Date(n.valueOf()):"string"==typeof n?st(e):i(n)?(e._a=d(n.slice(0),function(e){return parseInt(e,10)}),lt(e)):"object"==typeof n?mt(e):s(n)?e._d=new Date(n):t.createFromInputFallback(e)}function yt(e,t,n,r,s){var u={};return n!==!0&&n!==!1||(r=n,n=void 0),(a(e)&&o(e)||i(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=s,u._l=n,u._i=e,u._f=t,u._strict=r,pt(u)}function Mt(e,t,n,r){return yt(e,t,n,r,!1)}function bt(e,t){var n,r;if(1===t.length&&i(t[0])&&(t=t[0]),!t.length)return Mt();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}function Lt(){var e=[].slice.call(arguments,0);return bt("isBefore",e)}function kt(){var e=[].slice.call(arguments,0);return bt("isAfter",e)}function Yt(e){var t=E(e),n=t.year||0,r=t.quarter||0,i=t.month||0,a=t.week||0,o=t.day||0,s=t.hour||0,u=t.minute||0,d=t.second||0,l=t.millisecond||0;this._milliseconds=+l+1e3*d+6e4*u+1e3*s*60*60,this._days=+o+7*a,this._months=+i+3*r+12*n,this._data={},this._locale=rt(),this._bubble()}function xt(e){return e instanceof Yt}function wt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Dt(e,t){q(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}function Tt(e,t){var n=(t||"").match(e);if(null===n)return null;var r=n[n.length-1]||[],i=(r+"").match(Ri)||["-",0,0],a=+(60*i[1])+L(i[2]);return 0===a?0:"+"===i[0]?a:-a}function St(e,n){var r,i;return n._isUTC?(r=n.clone(),i=(M(e)||u(e)?e.valueOf():Mt(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+i),t.updateOffset(r,!1),r):Mt(e).local()}function jt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ht(e,n){var r,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=Tt(Qr,e),null===e)return this}else Math.abs(e)<16&&(e*=60);return!this._isUTC&&n&&(r=jt(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==e&&(!n||this._changeInProgress?Ut(this,Nt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:jt(this)}function At(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Pt(e){return this.utcOffset(0,e)}function Ct(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(jt(this),"m")),this}function Ot(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var e=Tt(Zr,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ft(e){return!!this.isValid()&&(e=e?Mt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Wt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function It(){if(!g(this._isDSTShifted))return this._isDSTShifted;var e={};if(v(e,this),e=gt(e),e._a){var t=e._isUTC?h(e._a):Mt(e._a);this._isDSTShifted=this.isValid()&&k(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Et(){return!!this.isValid()&&!this._isUTC}function zt(){return!!this.isValid()&&this._isUTC}function Rt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Nt(e,t){var n,r,i,a=e,o=null;return xt(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:s(e)?(a={},t?a[t]=e:a.milliseconds=e):(o=Ni.exec(e))?(n="-"===o[1]?-1:1,a={y:0,d:L(o[ai])*n,h:L(o[oi])*n,m:L(o[si])*n,s:L(o[ui])*n,ms:L(wt(1e3*o[di]))*n}):(o=Vi.exec(e))?(n="-"===o[1]?-1:1,a={y:Vt(o[2],n),M:Vt(o[3],n),w:Vt(o[4],n),d:Vt(o[5],n),h:Vt(o[6],n),m:Vt(o[7],n),s:Vt(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=$t(Mt(a.from),Mt(a.to)),a={},a.ms=i.milliseconds,a.M=i.months),r=new Yt(a),xt(e)&&l(e,"_locale")&&(r._locale=e._locale),r}function Vt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Bt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(e,t){var n;return e.isValid()&&t.isValid()?(t=St(t,e),e.isBefore(t)?n=Bt(e,t):(n=Bt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Jt(e,t){return function(n,r){var i,a;return null===r||isNaN(+r)||(w(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=r,r=a),n="string"==typeof n?+n:n,i=Nt(n,r),Ut(this,i,e),this}}function Ut(e,n,r,i){var a=n._milliseconds,o=wt(n._days),s=wt(n._months);e.isValid()&&(i=null==i||i,a&&e._d.setTime(e._d.valueOf()+a*r),o&&B(e,"Date",V(e,"Date")+o*r),s&&ce(e,V(e,"Month")+s*r),i&&t.updateOffset(e,o||s))}function qt(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Gt(e,n){var r=e||Mt(),i=St(r,this).startOf("day"),a=t.calendarFormat(this,i)||"sameElse",o=n&&(D(n[a])?n[a].call(this,r):n[a]);return this.format(o||this.localeData().calendar(a,this,Mt(r)))}function Kt(){return new y(this)}function Zt(e,t){var n=M(e)?e:Mt(e);return!(!this.isValid()||!n.isValid())&&(t=I(g(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Qt(e,t){var n=M(e)?e:Mt(e);return!(!this.isValid()||!n.isValid())&&(t=I(g(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function Xt(e,t,n,r){return r=r||"()",("("===r[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===r[1]?this.isBefore(t,n):!this.isAfter(t,n))}function en(e,t){var n,r=M(e)?e:Mt(e);return!(!this.isValid()||!r.isValid())&&(t=I(t||"millisecond"),"millisecond"===t?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function tn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function nn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function rn(e,t,n){var r,i,a,o;return this.isValid()?(r=St(e,this),r.isValid()?(i=6e4*(r.utcOffset()-this.utcOffset()),t=I(t),"year"===t||"month"===t||"quarter"===t?(o=an(this,r),"quarter"===t?o/=3:"year"===t&&(o/=12)):(a=this-r,o="second"===t?a/1e3:"minute"===t?a/6e4:"hour"===t?a/36e5:"day"===t?(a-i)/864e5:"week"===t?(a-i)/6048e5:a),n?o:b(o)):NaN):NaN}function an(e,t){var n,r,i=12*(t.year()-e.year())+(t.month()-e.month()),a=e.clone().add(i,"months");return t-a<0?(n=e.clone().add(i-1,"months"),r=(t-a)/(a-n)):(n=e.clone().add(i+1,"months"),r=(t-a)/(n-a)),-(i+r)||0}function on(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function sn(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():Z(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function un(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',r=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",a=t+'[")]';return this.format(n+r+i+a)}function dn(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=Z(this,e);return this.localeData().postformat(n)}function ln(e,t){return this.isValid()&&(M(e)&&e.isValid()||Mt(e).isValid())?Nt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cn(e){return this.from(Mt(),e)}function hn(e,t){return this.isValid()&&(M(e)&&e.isValid()||Mt(e).isValid())?Nt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function _n(e){return this.to(Mt(),e)}function fn(e){var t;return void 0===e?this._locale._abbr:(t=rt(e),null!=t&&(this._locale=t),this)}function mn(){return this._locale}function pn(e){switch(e=I(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function gn(e){return e=I(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function vn(){return this._d.valueOf()-6e4*(this._offset||0)}function yn(){return Math.floor(this.valueOf()/1e3)}function Mn(){return new Date(this.valueOf())}function bn(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ln(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function kn(){return this.isValid()?this.toISOString():null}function Yn(){return m(this)}function xn(){return c({},f(this))}function wn(){return f(this).overflow}function Dn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Tn(e,t){q(0,[e,e.length],0,t)}function Sn(e){return Pn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function jn(e){return Pn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Hn(){return xe(this.year(),1,4)}function An(){var e=this.localeData()._week;return xe(this.year(),e.dow,e.doy)}function Pn(e,t,n,r,i){var a;return null==e?Ye(this,r,i).year:(a=xe(e,r,i),t>a&&(t=a),Cn.call(this,e,t,n,r,i))}function Cn(e,t,n,r,i){var a=ke(e,t,n,r,i),o=be(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function On(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3);
}function Fn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function Wn(e,t){t[di]=L(1e3*("0."+e))}function In(){return this._isUTC?"UTC":""}function En(){return this._isUTC?"Coordinated Universal Time":""}function zn(e){return Mt(1e3*e)}function Rn(){return Mt.apply(null,arguments).parseZone()}function Nn(e){return e}function Vn(e,t,n,r){var i=rt(),a=h().set(r,t);return i[n](a,e)}function Bn(e,t,n){if(s(e)&&(t=e,e=void 0),e=e||"",null!=t)return Vn(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Vn(e,r,n,"month");return i}function $n(e,t,n,r){"boolean"==typeof e?(s(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,s(t)&&(n=t,t=void 0),t=t||"");var i=rt(),a=e?i._week.dow:0;if(null!=n)return Vn(t,(n+a)%7,r,"day");var o,u=[];for(o=0;o<7;o++)u[o]=Vn(t,(o+a)%7,r,"day");return u}function Jn(e,t){return Bn(e,t,"months")}function Un(e,t){return Bn(e,t,"monthsShort")}function qn(e,t,n){return $n(e,t,n,"weekdays")}function Gn(e,t,n){return $n(e,t,n,"weekdaysShort")}function Kn(e,t,n){return $n(e,t,n,"weekdaysMin")}function Zn(){var e=this._data;return this._milliseconds=ea(this._milliseconds),this._days=ea(this._days),this._months=ea(this._months),e.milliseconds=ea(e.milliseconds),e.seconds=ea(e.seconds),e.minutes=ea(e.minutes),e.hours=ea(e.hours),e.months=ea(e.months),e.years=ea(e.years),this}function Qn(e,t,n,r){var i=Nt(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function Xn(e,t){return Qn(this,e,t,1)}function er(e,t){return Qn(this,e,t,-1)}function tr(e){return e<0?Math.floor(e):Math.ceil(e)}function nr(){var e,t,n,r,i,a=this._milliseconds,o=this._days,s=this._months,u=this._data;return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*tr(ir(s)+o),o=0,s=0),u.milliseconds=a%1e3,e=b(a/1e3),u.seconds=e%60,t=b(e/60),u.minutes=t%60,n=b(t/60),u.hours=n%24,o+=b(n/24),i=b(rr(o)),s+=i,o-=tr(ir(i)),r=b(s/12),s%=12,u.days=o,u.months=s,u.years=r,this}function rr(e){return 4800*e/146097}function ir(e){return 146097*e/4800}function ar(e){var t,n,r=this._milliseconds;if(e=I(e),"month"===e||"year"===e)return t=this._days+r/864e5,n=this._months+rr(t),"month"===e?n:n/12;switch(t=this._days+Math.round(ir(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}function or(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*L(this._months/12)}function sr(e){return function(){return this.as(e)}}function ur(e){return e=I(e),this[e+"s"]()}function dr(e){return function(){return this._data[e]}}function lr(){return b(this.days()/7)}function cr(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function hr(e,t,n){var r=Nt(e).abs(),i=pa(r.as("s")),a=pa(r.as("m")),o=pa(r.as("h")),s=pa(r.as("d")),u=pa(r.as("M")),d=pa(r.as("y")),l=i<ga.s&&["s",i]||a<=1&&["m"]||a<ga.m&&["mm",a]||o<=1&&["h"]||o<ga.h&&["hh",o]||s<=1&&["d"]||s<ga.d&&["dd",s]||u<=1&&["M"]||u<ga.M&&["MM",u]||d<=1&&["y"]||["yy",d];return l[2]=t,l[3]=+e>0,l[4]=n,cr.apply(null,l)}function _r(e){return void 0===e?pa:"function"==typeof e&&(pa=e,!0)}function fr(e,t){return void 0!==ga[e]&&(void 0===t?ga[e]:(ga[e]=t,!0))}function mr(e){var t=this.localeData(),n=hr(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function pr(){var e,t,n,r=va(this._milliseconds)/1e3,i=va(this._days),a=va(this._months);e=b(r/60),t=b(e/60),r%=60,e%=60,n=b(a/12),a%=12;var o=n,s=a,u=i,d=t,l=e,c=r,h=this.asSeconds();return h?(h<0?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(u?u+"D":"")+(d||l||c?"T":"")+(d?d+"H":"")+(l?l+"M":"")+(c?c+"S":""):"P0D"}var gr,vr;vr=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};var yr=vr,Mr=t.momentProperties=[],br=!1,Lr={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var kr;kr=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var Yr,xr=kr,wr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Dr={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Tr="Invalid date",Sr="%d",jr=/\d{1,2}/,Hr={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ar={},Pr={},Cr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Or=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Fr={},Wr={},Ir=/\d/,Er=/\d\d/,zr=/\d{3}/,Rr=/\d{4}/,Nr=/[+-]?\d{6}/,Vr=/\d\d?/,Br=/\d\d\d\d?/,$r=/\d\d\d\d\d\d?/,Jr=/\d{1,3}/,Ur=/\d{1,4}/,qr=/[+-]?\d{1,6}/,Gr=/\d+/,Kr=/[+-]?\d+/,Zr=/Z|[+-]\d\d:?\d\d/gi,Qr=/Z|[+-]\d\d(?::?\d\d)?/gi,Xr=/[+-]?\d+(\.\d{1,3})?/,ei=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ti={},ni={},ri=0,ii=1,ai=2,oi=3,si=4,ui=5,di=6,li=7,ci=8;Yr=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};var hi=Yr;q("M",["MM",2],"Mo",function(){return this.month()+1}),q("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),q("MMMM",0,0,function(e){return this.localeData().months(this,e)}),W("month","M"),z("month",8),X("M",Vr),X("MM",Vr,Er),X("MMM",function(e,t){return t.monthsShortRegex(e)}),X("MMMM",function(e,t){return t.monthsRegex(e)}),re(["M","MM"],function(e,t){t[ii]=L(e)-1}),re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[ii]=i:f(n).invalidMonth=e});var _i=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,fi="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pi=ei,gi=ei;q("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),q(0,["YY",2],0,function(){return this.year()%100}),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),W("year","y"),z("year",1),X("Y",Kr),X("YY",Vr,Er),X("YYYY",Ur,Rr),X("YYYYY",qr,Nr),X("YYYYYY",qr,Nr),re(["YYYYY","YYYYYY"],ri),re("YYYY",function(e,n){n[ri]=2===e.length?t.parseTwoDigitYear(e):L(e)}),re("YY",function(e,n){n[ri]=t.parseTwoDigitYear(e)}),re("Y",function(e,t){t[ri]=parseInt(e,10)}),t.parseTwoDigitYear=function(e){return L(e)+(L(e)>68?1900:2e3)};var vi=N("FullYear",!0);q("w",["ww",2],"wo","week"),q("W",["WW",2],"Wo","isoWeek"),W("week","w"),W("isoWeek","W"),z("week",5),z("isoWeek",5),X("w",Vr),X("ww",Vr,Er),X("W",Vr),X("WW",Vr,Er),ie(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=L(e)});var yi={dow:0,doy:6};q("d",0,"do","day"),q("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),q("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),q("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),W("day","d"),W("weekday","e"),W("isoWeekday","E"),z("day",11),z("weekday",11),z("isoWeekday",11),X("d",Vr),X("e",Vr),X("E",Vr),X("dd",function(e,t){return t.weekdaysMinRegex(e)}),X("ddd",function(e,t){return t.weekdaysShortRegex(e)}),X("dddd",function(e,t){return t.weekdaysRegex(e)}),ie(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:f(n).invalidWeekday=e}),ie(["d","e","E"],function(e,t,n,r){t[r]=L(e)});var Mi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),bi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Li="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ki=ei,Yi=ei,xi=ei;q("H",["HH",2],0,"hour"),q("h",["hh",2],0,$e),q("k",["kk",2],0,Je),q("hmm",0,0,function(){return""+$e.apply(this)+U(this.minutes(),2)}),q("hmmss",0,0,function(){return""+$e.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),q("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),q("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Ue("a",!0),Ue("A",!1),W("hour","h"),z("hour",13),X("a",qe),X("A",qe),X("H",Vr),X("h",Vr),X("HH",Vr,Er),X("hh",Vr,Er),X("hmm",Br),X("hmmss",$r),X("Hmm",Br),X("Hmmss",$r),re(["H","HH"],oi),re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),re(["h","hh"],function(e,t,n){t[oi]=L(e),f(n).bigHour=!0}),re("hmm",function(e,t,n){var r=e.length-2;t[oi]=L(e.substr(0,r)),t[si]=L(e.substr(r)),f(n).bigHour=!0}),re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[oi]=L(e.substr(0,r)),t[si]=L(e.substr(r,2)),t[ui]=L(e.substr(i)),f(n).bigHour=!0}),re("Hmm",function(e,t,n){var r=e.length-2;t[oi]=L(e.substr(0,r)),t[si]=L(e.substr(r))}),re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[oi]=L(e.substr(0,r)),t[si]=L(e.substr(r,2)),t[ui]=L(e.substr(i))});var wi,Di=/[ap]\.?m?\.?/i,Ti=N("Hours",!0),Si={calendar:wr,longDateFormat:Dr,invalidDate:Tr,ordinal:Sr,ordinalParse:jr,relativeTime:Hr,months:fi,monthsShort:mi,week:yi,weekdays:Mi,weekdaysMin:Li,weekdaysShort:bi,meridiemParse:Di},ji={},Hi={},Ai=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ci=/Z|[+-]\d\d(?::?\d\d)?/,Oi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Fi=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Wi=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.ISO_8601=function(){};var Ii=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Mt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Ei=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Mt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:p()}),zi=function(){return Date.now?Date.now():+new Date};Dt("Z",":"),Dt("ZZ",""),X("Z",Qr),X("ZZ",Qr),re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Tt(Qr,e)});var Ri=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Ni=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Vi=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nt.fn=Yt.prototype;var Bi=Jt(1,"add"),$i=Jt(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ji=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});q(0,["gg",2],0,function(){return this.weekYear()%100}),q(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Tn("gggg","weekYear"),Tn("ggggg","weekYear"),Tn("GGGG","isoWeekYear"),Tn("GGGGG","isoWeekYear"),W("weekYear","gg"),W("isoWeekYear","GG"),z("weekYear",1),z("isoWeekYear",1),X("G",Kr),X("g",Kr),X("GG",Vr,Er),X("gg",Vr,Er),X("GGGG",Ur,Rr),X("gggg",Ur,Rr),X("GGGGG",qr,Nr),X("ggggg",qr,Nr),ie(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=L(e)}),ie(["gg","GG"],function(e,n,r,i){n[i]=t.parseTwoDigitYear(e)}),q("Q",0,"Qo","quarter"),W("quarter","Q"),z("quarter",7),X("Q",Ir),re("Q",function(e,t){t[ii]=3*(L(e)-1)}),q("D",["DD",2],"Do","date"),W("date","D"),z("date",9),X("D",Vr),X("DD",Vr,Er),X("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient}),re(["D","DD"],ai),re("Do",function(e,t){t[ai]=L(e.match(Vr)[0],10)});var Ui=N("Date",!0);q("DDD",["DDDD",3],"DDDo","dayOfYear"),W("dayOfYear","DDD"),z("dayOfYear",4),X("DDD",Jr),X("DDDD",zr),re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=L(e)}),q("m",["mm",2],0,"minute"),W("minute","m"),z("minute",14),X("m",Vr),X("mm",Vr,Er),re(["m","mm"],si);var qi=N("Minutes",!1);q("s",["ss",2],0,"second"),W("second","s"),z("second",15),X("s",Vr),X("ss",Vr,Er),re(["s","ss"],ui);var Gi=N("Seconds",!1);q("S",0,0,function(){return~~(this.millisecond()/100)}),q(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,function(){return 10*this.millisecond()}),q(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),q(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),q(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),q(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),q(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),W("millisecond","ms"),z("millisecond",16),X("S",Jr,Ir),X("SS",Jr,Er),X("SSS",Jr,zr);var Ki;for(Ki="SSSS";Ki.length<=9;Ki+="S")X(Ki,Gr);for(Ki="S";Ki.length<=9;Ki+="S")re(Ki,Wn);var Zi=N("Milliseconds",!1);q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName");var Qi=y.prototype;Qi.add=Bi,Qi.calendar=Gt,Qi.clone=Kt,Qi.diff=rn,Qi.endOf=gn,Qi.format=dn,Qi.from=ln,Qi.fromNow=cn,Qi.to=hn,Qi.toNow=_n,Qi.get=$,Qi.invalidAt=wn,Qi.isAfter=Zt,Qi.isBefore=Qt,Qi.isBetween=Xt,Qi.isSame=en,Qi.isSameOrAfter=tn,Qi.isSameOrBefore=nn,Qi.isValid=Yn,Qi.lang=Ji,Qi.locale=fn,Qi.localeData=mn,Qi.max=Ei,Qi.min=Ii,Qi.parsingFlags=xn,Qi.set=J,Qi.startOf=pn,Qi.subtract=$i,Qi.toArray=bn,Qi.toObject=Ln,Qi.toDate=Mn,Qi.toISOString=sn,Qi.inspect=un,Qi.toJSON=kn,Qi.toString=on,Qi.unix=yn,Qi.valueOf=vn,Qi.creationData=Dn,Qi.year=vi,Qi.isLeapYear=ye,Qi.weekYear=Sn,Qi.isoWeekYear=jn,Qi.quarter=Qi.quarters=On,Qi.month=he,Qi.daysInMonth=_e,Qi.week=Qi.weeks=Se,Qi.isoWeek=Qi.isoWeeks=je,Qi.weeksInYear=An,Qi.isoWeeksInYear=Hn,Qi.date=Ui,Qi.day=Qi.days=Ie,Qi.weekday=Ee,Qi.isoWeekday=ze,Qi.dayOfYear=Fn,Qi.hour=Qi.hours=Ti,Qi.minute=Qi.minutes=qi,Qi.second=Qi.seconds=Gi,Qi.millisecond=Qi.milliseconds=Zi,Qi.utcOffset=Ht,Qi.utc=Pt,Qi.local=Ct,Qi.parseZone=Ot,Qi.hasAlignedHourOffset=Ft,Qi.isDST=Wt,Qi.isLocal=Et,Qi.isUtcOffset=zt,Qi.isUtc=Rt,Qi.isUTC=Rt,Qi.zoneAbbr=In,Qi.zoneName=En,Qi.dates=x("dates accessor is deprecated. Use date instead.",Ui),Qi.months=x("months accessor is deprecated. Use month instead",he),Qi.years=x("years accessor is deprecated. Use year instead",vi),Qi.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",At),Qi.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",It);var Xi=j.prototype;Xi.calendar=H,Xi.longDateFormat=A,Xi.invalidDate=P,Xi.ordinal=C,Xi.preparse=Nn,Xi.postformat=Nn,Xi.relativeTime=O,Xi.pastFuture=F,Xi.set=T,Xi.months=se,Xi.monthsShort=ue,Xi.monthsParse=le,Xi.monthsRegex=me,Xi.monthsShortRegex=fe,Xi.week=we,Xi.firstDayOfYear=Te,Xi.firstDayOfWeek=De,Xi.weekdays=Pe,Xi.weekdaysMin=Oe,Xi.weekdaysShort=Ce,Xi.weekdaysParse=We,Xi.weekdaysRegex=Re,Xi.weekdaysShortRegex=Ne,Xi.weekdaysMinRegex=Ve,Xi.isPM=Ge,Xi.meridiem=Ke,et("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===L(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),t.lang=x("moment.lang is deprecated. Use moment.locale instead.",et),t.langData=x("moment.langData is deprecated. Use moment.localeData instead.",rt);var ea=Math.abs,ta=sr("ms"),na=sr("s"),ra=sr("m"),ia=sr("h"),aa=sr("d"),oa=sr("w"),sa=sr("M"),ua=sr("y"),da=dr("milliseconds"),la=dr("seconds"),ca=dr("minutes"),ha=dr("hours"),_a=dr("days"),fa=dr("months"),ma=dr("years"),pa=Math.round,ga={s:45,m:45,h:22,d:26,M:11},va=Math.abs,ya=Yt.prototype;return ya.abs=Zn,ya.add=Xn,ya.subtract=er,ya.as=ar,ya.asMilliseconds=ta,ya.asSeconds=na,ya.asMinutes=ra,ya.asHours=ia,ya.asDays=aa,ya.asWeeks=oa,ya.asMonths=sa,ya.asYears=ua,ya.valueOf=or,ya._bubble=nr,ya.get=ur,ya.milliseconds=da,ya.seconds=la,ya.minutes=ca,ya.hours=ha,ya.days=_a,ya.weeks=lr,ya.months=fa,ya.years=ma,ya.humanize=mr,ya.toISOString=pr,ya.toString=pr,ya.toJSON=pr,ya.locale=fn,ya.localeData=mn,ya.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pr),ya.lang=Ji,q("X",0,0,"unix"),q("x",0,0,"valueOf"),X("x",Kr),X("X",Xr),re("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),re("x",function(e,t,n){n._d=new Date(L(e))}),t.version="2.17.1",r(Mt),t.fn=Qi,t.min=Lt,t.max=kt,t.now=zi,t.utc=h,t.unix=zn,t.months=Jn,t.isDate=u,t.locale=et,t.invalid=p,t.duration=Nt,t.isMoment=M,t.weekdays=qn,t.parseZone=Rn,t.localeData=rt,t.isDuration=xt,t.monthsShort=Un,t.weekdaysMin=Kn,t.defineLocale=tt,t.updateLocale=nt,t.locales=it,t.weekdaysShort=Gn,t.normalizeUnits=I,t.relativeTimeRounding=_r,t.relativeTimeThreshold=fr,t.calendarFormat=qt,t.prototype=Qi,t})}).call(t,n(32)(e))},function(e,t,n){var r=n(76),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();e.exports=a},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return(0,o.default)(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=i;var a=n(371),o=r(a)},function(e,t,n){var r=n(235)();n(233)(r),n(247)(r),n(229)(r),n(232)(r),n(237)(r),n(228)(r),n(230)(r),n(231)(r),n(236)(r),n(239)(r),n(240)(r),n(238)(r),n(234)(r),n(241)(r),n(242)(r),n(243)(r),n(244)(r),n(245)(r),n(253)(r),n(251)(r),n(252)(r),n(254)(r),n(255)(r),n(256)(r),n(222)(r),n(223)(r),n(224)(r),n(225)(r),n(226)(r),n(227)(r),n(215)(r),n(216)(r),n(217)(r),n(218)(r),n(219)(r),n(220)(r),n(221)(r);var i=[];i.push(n(248)(r),n(249)(r),n(250)(r)),r.plugins.register(i),e.exports=r,"undefined"!=typeof window&&(window.Chart=r)},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
"use strict";function r(e,t,n){if(a(e,t))return void(e[t]=n);if(e._isVue)return void r(e._data,t,n);var i=e.__ob__;if(!i)return void(e[t]=n);if(i.convert(t,n),i.dep.notify(),i.vms)for(var o=i.vms.length;o--;){var s=i.vms[o];s._proxy(t),s._digest()}return n}function i(e,t){if(a(e,t)){delete e[t];var n=e.__ob__;if(!n)return void(e._isVue&&(delete e._data[t],e._digest()));if(n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var i=n.vms[r];i._unproxy(t),i._digest()}}}function a(e,t){return Bn.call(e,t)}function o(e){return $n.test(e)}function s(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function u(e){return null==e?"":e.toString()}function d(e){if("string"!=typeof e)return e;var t=Number(e);return isNaN(t)?e:t}function l(e){return"true"===e||"false"!==e&&e}function c(e){var t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function h(e){return e.replace(Jn,_)}function _(e,t){return t?t.toUpperCase():""}function f(e){return e.replace(Un,"$1-$2").replace(Un,"$1-$2").toLowerCase()}function m(e){return e.replace(qn,_)}function p(e,t){return function(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}}function g(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function v(e,t){for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}function y(e){return null!==e&&"object"==typeof e}function M(e){return Gn.call(e)===Kn}function b(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function L(e,t){var n,r,i,a,o,s=function s(){var u=Date.now()-a;u<t&&u>=0?n=setTimeout(s,t-u):(n=null,o=e.apply(i,r),n||(i=r=null))};return function(){return i=this,r=arguments,a=Date.now(),n||(n=setTimeout(s,t)),o}}function k(e,t){for(var n=e.length;n--;)if(e[n]===t)return n;return-1}function Y(e){var t=function t(){if(!t.cancelled)return e.apply(this,arguments)};return t.cancel=function(){t.cancelled=!0},t}function x(e,t){return e==t||!(!y(e)||!y(t))&&JSON.stringify(e)===JSON.stringify(t)}function w(e){return/native code/.test(e.toString())}function D(e){this.size=0,this.limit=e,this.head=this.tail=void 0,this._keymap=Object.create(null)}function T(){return mr.charCodeAt(vr+1)}function S(){return mr.charCodeAt(++vr)}function j(){return vr>=gr}function H(){for(;T()===Hr;)S()}function A(e){return e===Dr||e===Tr}function P(e){return Ar[e]}function C(e,t){return Pr[e]===t}function O(){for(var e,t=S();!j();)if(e=S(),e===jr)S();else if(e===t)break}function F(e){for(var t=0,n=e;!j();)if(e=T(),A(e))O();else if(n===e&&t++,C(n,e)&&t--,S(),0===t)break}function W(){for(var e=vr;!j();)if(yr=T(),A(yr))O();else if(P(yr))F(yr);else if(yr===Sr){if(S(),yr=T(),yr!==Sr){Mr!==kr&&Mr!==wr||(Mr=Yr);break}S()}else{if(yr===Hr&&(Mr===xr||Mr===wr)){H();break}Mr===Yr&&(Mr=xr),S()}return mr.slice(e+1,vr)||null}function I(){for(var e=[];!j();)e.push(E());return e}function E(){var e,t={};return Mr=Yr,t.name=W().trim(),Mr=wr,e=z(),e.length&&(t.args=e),t}function z(){for(var e=[];!j()&&Mr!==Yr;){var t=W();if(!t)break;e.push(R(t))}return e}function R(e){if(Lr.test(e))return{value:d(e),dynamic:!1};var t=c(e),n=t===e;return{value:n?e:t,dynamic:n}}function N(e){var t=br.get(e);if(t)return t;mr=e,pr={},gr=mr.length,vr=-1,yr="",Mr=kr;var n;return mr.indexOf("|")<0?pr.expression=mr.trim():(pr.expression=W().trim(),n=I(),n.length&&(pr.filters=n)),br.put(e,pr),pr}function V(e){return e.replace(Or,"\\$&")}function B(){var e=V(Vr.delimiters[0]),t=V(Vr.delimiters[1]),n=V(Vr.unsafeDelimiters[0]),r=V(Vr.unsafeDelimiters[1]);Wr=new RegExp(n+"((?:.|\\n)+?)"+r+"|"+e+"((?:.|\\n)+?)"+t,"g"),Ir=new RegExp("^"+n+"((?:.|\\n)+?)"+r+"$"),Fr=new D(1e3)}function $(e){Fr||B();var t=Fr.get(e);if(t)return t;if(!Wr.test(e))return null;for(var n,r,i,a,o,s,u=[],d=Wr.lastIndex=0;n=Wr.exec(e);)r=n.index,r>d&&u.push({value:e.slice(d,r)}),i=Ir.test(n[0]),a=i?n[1]:n[2],o=a.charCodeAt(0),s=42===o,a=s?a.slice(1):a,u.push({tag:!0,value:a.trim(),html:i,oneTime:s}),d=r+n[0].length;return d<e.length&&u.push({value:e.slice(d)}),Fr.put(e,u),u}function J(e,t){return e.length>1?e.map(function(e){return U(e,t)}).join("+"):U(e[0],t,!0)}function U(e,t,n){return e.tag?e.oneTime&&t?'"'+t.$eval(e.value)+'"':q(e.value,n):'"'+e.value+'"'}function q(e,t){if(Er.test(e)){var n=N(e);return n.filters?"this._applyFilters("+n.expression+",null,"+JSON.stringify(n.filters)+",false)":"("+e+")"}return t?e:"("+e+")"}function G(e,t,n,r){Q(e,1,function(){t.appendChild(e)},n,r)}function K(e,t,n,r){Q(e,1,function(){ie(e,t)},n,r)}function Z(e,t,n){Q(e,-1,function(){oe(e)},t,n)}function Q(e,t,n,r,i){var a=e.__v_trans;if(!a||!a.hooks&&!sr||!r._isCompiled||r.$parent&&!r.$parent._isCompiled)return n(),void(i&&i());var o=t>0?"enter":"leave";a[o](n,i)}function X(e){if("string"==typeof e){e=document.querySelector(e)}return e}function ee(e){if(!e)return!1;var t=e.ownerDocument.documentElement,n=e.parentNode;return t===e||t===n||!(!n||1!==n.nodeType||!t.contains(n))}function te(e,t){var n=e.getAttribute(t);return null!==n&&e.removeAttribute(t),n}function ne(e,t){var n=te(e,":"+t);return null===n&&(n=te(e,"v-bind:"+t)),n}function re(e,t){return e.hasAttribute(t)||e.hasAttribute(":"+t)||e.hasAttribute("v-bind:"+t)}function ie(e,t){t.parentNode.insertBefore(e,t)}function ae(e,t){t.nextSibling?ie(e,t.nextSibling):t.parentNode.appendChild(e)}function oe(e){e.parentNode.removeChild(e)}function se(e,t){t.firstChild?ie(e,t.firstChild):t.appendChild(e)}function ue(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function de(e,t,n,r){e.addEventListener(t,n,r)}function le(e,t,n){e.removeEventListener(t,n)}function ce(e){var t=e.className;return"object"==typeof t&&(t=t.baseVal||""),t}function he(e,t){rr&&!/svg$/.test(e.namespaceURI)?e.className=t:e.setAttribute("class",t)}function _e(e,t){if(e.classList)e.classList.add(t);else{var n=" "+ce(e)+" ";n.indexOf(" "+t+" ")<0&&he(e,(n+t).trim())}}function fe(e,t){if(e.classList)e.classList.remove(t);else{for(var n=" "+ce(e)+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");he(e,n.trim())}e.className||e.removeAttribute("class")}function me(e,t){var n,r;if(ve(e)&&ke(e.content)&&(e=e.content),e.hasChildNodes())for(pe(e),r=t?document.createDocumentFragment():document.createElement("div");n=e.firstChild;)r.appendChild(n);return r}function pe(e){for(var t;t=e.firstChild,ge(t);)e.removeChild(t);for(;t=e.lastChild,ge(t);)e.removeChild(t)}function ge(e){return e&&(3===e.nodeType&&!e.data.trim()||8===e.nodeType)}function ve(e){return e.tagName&&"template"===e.tagName.toLowerCase()}function ye(e,t){var n=Vr.debug?document.createComment(e):document.createTextNode(t?" ":"");return n.__v_anchor=!0,n}function Me(e){if(e.hasAttributes())for(var t=e.attributes,n=0,r=t.length;n<r;n++){var i=t[n].name;if(Jr.test(i))return h(i.replace(Jr,""))}}function be(e,t,n){for(var r;e!==t;)r=e.nextSibling,n(e),e=r;n(t)}function Le(e,t,n,r,i){function a(){if(s++,o&&s>=u.length){for(var e=0;e<u.length;e++)r.appendChild(u[e]);i&&i()}}var o=!1,s=0,u=[];be(e,t,function(e){e===t&&(o=!0),u.push(e),Z(e,n,a)})}function ke(e){return e&&11===e.nodeType}function Ye(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function xe(e,t){var n=e.tagName.toLowerCase(),r=e.hasAttributes();if(Ur.test(n)||qr.test(n)){if(r)return we(e,t)}else{if(Pe(t,"components",n))return{id:n};var i=r&&we(e,t);if(i)return i}}function we(e,t){var n=e.getAttribute("is");if(null!=n){if(Pe(t,"components",n))return e.removeAttribute("is"),{id:n}}else if(n=ne(e,"is"),null!=n)return{id:n,dynamic:!0}}function De(e,t){var n,i,o;for(n in t)i=e[n],o=t[n],a(e,n)?y(i)&&y(o)&&De(i,o):r(e,n,o);return e}function Te(e,t){var n=Object.create(e||null);return t?v(n,He(t)):n}function Se(e){if(e.components)for(var t,n=e.components=He(e.components),r=Object.keys(n),i=0,a=r.length;i<a;i++){var o=r[i];Ur.test(o)||qr.test(o)||(t=n[o],M(t)&&(n[o]=In.extend(t)))}}function je(e){var t,n,r=e.props;if(Zn(r))for(e.props={},t=r.length;t--;)n=r[t],"string"==typeof n?e.props[n]=null:n.name&&(e.props[n.name]=n);else if(M(r)){var i=Object.keys(r);for(t=i.length;t--;)n=r[i[t]],"function"==typeof n&&(r[i[t]]={type:n})}}function He(e){if(Zn(e)){for(var t,n={},r=e.length;r--;){t=e[r];var i="function"==typeof t?t.options&&t.options.name||t.id:t.name||t.id;i&&(n[i]=t)}return n}return e}function Ae(e,t,n){function r(r){var i=Gr[r]||Kr;o[r]=i(e[r],t[r],n,r)}Se(t),je(t);var i,o={};if(t.extends&&(e="function"==typeof t.extends?Ae(e,t.extends.options,n):Ae(e,t.extends,n)),t.mixins)for(var s=0,u=t.mixins.length;s<u;s++){var d=t.mixins[s],l=d.prototype instanceof In?d.options:d;e=Ae(e,l,n)}for(i in e)r(i);for(i in t)a(e,i)||r(i);return o}function Pe(e,t,n,r){if("string"==typeof n){var i,a=e[t],o=a[n]||a[i=h(n)]||a[i.charAt(0).toUpperCase()+i.slice(1)];return o}}function Ce(){this.id=Zr++,this.subs=[]}function Oe(e){ti=!1,e(),ti=!0}function Fe(e){if(this.value=e,this.dep=new Ce,b(e,"__ob__",this),Zn(e)){var t=Qn?We:Ie;t(e,Xr,ei),this.observeArray(e)}else this.walk(e)}function We(e,t){e.__proto__=t}function Ie(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];b(e,a,t[a])}}function Ee(e,t){if(e&&"object"==typeof e){var n;return a(e,"__ob__")&&e.__ob__ instanceof Fe?n=e.__ob__:ti&&(Zn(e)||M(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Fe(e)),n&&t&&n.addVm(t),n}}function ze(e,t,n){var r=new Ce,i=Object.getOwnPropertyDescriptor(e,t);if(!i||i.configurable!==!1){var a=i&&i.get,o=i&&i.set,s=Ee(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;if(Ce.target&&(r.depend(),s&&s.dep.depend(),Zn(t)))for(var i,o=0,u=t.length;o<u;o++)i=t[o],i&&i.__ob__&&i.__ob__.dep.depend();return t},set:function(t){var i=a?a.call(e):n;t!==i&&(o?o.call(e,t):n=t,s=Ee(t),r.notify())}})}}function Re(e){e.prototype._init=function(e){e=e||{},this.$el=null,this.$parent=e.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=ri++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=e._context||this.$parent,this._scope=e._scope,this._frag=e._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),e=this.$options=Ae(this.constructor.options,e,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),e.el&&this.$mount(e.el)}}function Ne(e){if(void 0===e)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return e;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return t>=97&&t<=122||t>=65&&t<=90?"ident":t>=49&&t<=57?"number":"else"}function Ve(e){var t=e.trim();return("0"!==e.charAt(0)||!isNaN(e))&&(o(t)?c(t):"*"+t)}function Be(e){function t(){var t=e[l+1];if(c===fi&&"'"===t||c===mi&&'"'===t)return l++,r="\\"+t,_[ai](),!0}var n,r,i,a,o,s,u,d=[],l=-1,c=di,h=0,_=[];for(_[oi]=function(){void 0!==i&&(d.push(i),i=void 0)},_[ai]=function(){void 0===i?i=r:i+=r},_[si]=function(){_[ai](),h++},_[ui]=function(){if(h>0)h--,c=_i,_[ai]();else{if(h=0,i=Ve(i),i===!1)return!1;_[oi]()}};null!=c;)if(l++,n=e[l],"\\"!==n||!t()){if(a=Ne(n),u=vi[c],o=u[a]||u.else||gi,o===gi)return;if(c=o[0],s=_[o[1]],s&&(r=o[2],r=void 0===r?n:r,s()===!1))return;if(c===pi)return d.raw=e,d}}function $e(e){var t=ii.get(e);return t||(t=Be(e),t&&ii.put(e,t)),t}function Je(e,t){return tt(t).get(e)}function Ue(e,t,n){var i=e;if("string"==typeof t&&(t=Be(t)),!t||!y(e))return!1;for(var a,o,s=0,u=t.length;s<u;s++)a=e,o=t[s],"*"===o.charAt(0)&&(o=tt(o.slice(1)).get.call(i,i)),s<u-1?(e=e[o],y(e)||(e={},r(a,o,e))):Zn(e)?e.$set(o,n):o in e?e[o]=n:r(e,o,n);return!0}function qe(){}function Ge(e,t){var n=Ai.length;return Ai[n]=t?e.replace(wi,"\\n"):e,'"'+n+'"'}function Ke(e){var t=e.charAt(0),n=e.slice(1);return Li.test(n)?e:(n=n.indexOf('"')>-1?n.replace(Ti,Ze):n,t+"scope."+n)}function Ze(e,t){return Ai[t]}function Qe(e){Yi.test(e),Ai.length=0;var t=e.replace(Di,Ge).replace(xi,"");return t=(" "+t).replace(ji,Ke).replace(Ti,Ze),Xe(t)}function Xe(e){try{return new Function("scope","return "+e+";")}catch(e){return qe}}function et(e){var t=$e(e);if(t)return function(e,n){Ue(e,t,n)}}function tt(e,t){e=e.trim();var n=Mi.get(e);if(n)return t&&!n.set&&(n.set=et(n.exp)),n;var r={exp:e};return r.get=nt(e)&&e.indexOf("[")<0?Xe("scope."+e):Qe(e),t&&(r.set=et(e)),Mi.put(e,r),r}function nt(e){return Si.test(e)&&!Hi.test(e)&&"Math."!==e.slice(0,5)}function rt(){Ci.length=0,Oi.length=0,Fi={},Wi={},Ii=!1}function it(){for(var e=!0;e;)e=!1,at(Ci),at(Oi),Ci.length?e=!0:(er&&Vr.devtools&&er.emit("flush"),rt())}function at(e){for(var t=0;t<e.length;t++){var n=e[t],r=n.id;Fi[r]=null,n.run()}e.length=0}function ot(e){var t=e.id;if(null==Fi[t]){var n=e.user?Oi:Ci;Fi[t]=n.length,n.push(e),Ii||(Ii=!0,hr(it))}}function st(e,t,n,r){r&&v(this,r);var i="function"==typeof t;if(this.vm=e,e._watchers.push(this),this.expression=t,this.cb=n,this.id=++Ei,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new _r,this.newDepIds=new _r,this.prevError=null,i)this.getter=t,this.setter=void 0;else{var a=tt(t,this.twoWay);this.getter=a.get,this.setter=a.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function ut(e,t){var n=void 0,r=void 0;t||(t=zi,t.clear());var i=Zn(e),a=y(e);if((i||a)&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)ut(e[n],t);else if(a)for(r=Object.keys(e),n=r.length;n--;)ut(e[r[n]],t)}}function dt(e){return ve(e)&&ke(e.content)}function lt(e,t){var n=t?e:e.trim(),r=Ni.get(n);if(r)return r;var i=document.createDocumentFragment(),a=e.match($i),o=Ji.test(e),s=Ui.test(e);if(a||o||s){var u=a&&a[1],d=Bi[u]||Bi.efault,l=d[0],c=d[1],h=d[2],_=document.createElement("div");for(_.innerHTML=c+e+h;l--;)_=_.lastChild;for(var f;f=_.firstChild;)i.appendChild(f)}else i.appendChild(document.createTextNode(e));return t||pe(i),Ni.put(n,i),i}function ct(e){if(dt(e))return lt(e.innerHTML);if("SCRIPT"===e.tagName)return lt(e.textContent);for(var t,n=ht(e),r=document.createDocumentFragment();t=n.firstChild;)r.appendChild(t);return pe(r),r}function ht(e){if(!e.querySelectorAll)return e.cloneNode();var t,n,r,i=e.cloneNode(!0);if(qi){var a=i;if(dt(e)&&(e=e.content,a=i.content),n=e.querySelectorAll("template"),n.length)for(r=a.querySelectorAll("template"),t=r.length;t--;)r[t].parentNode.replaceChild(ht(n[t]),r[t])}if(Gi)if("TEXTAREA"===e.tagName)i.value=e.value;else if(n=e.querySelectorAll("textarea"),n.length)for(r=i.querySelectorAll("textarea"),t=r.length;t--;)r[t].value=n[t].value;return i}function _t(e,t,n){var r,i;return ke(e)?(pe(e),t?ht(e):e):("string"==typeof e?n||"#"!==e.charAt(0)?i=lt(e,n):(i=Vi.get(e),i||(r=document.getElementById(e.slice(1)),r&&(i=ct(r),Vi.put(e,i)))):e.nodeType&&(i=ct(e)),i&&t?ht(i):i)}function ft(e,t,n,r,i,a){this.children=[],this.childFrags=[],this.vm=t,this.scope=i,this.inserted=!1,this.parentFrag=a,a&&a.childFrags.push(this),this.unlink=e(t,n,r,i,this);var o=this.single=1===n.childNodes.length&&!n.childNodes[0].__v_anchor;o?(this.node=n.childNodes[0],this.before=mt,this.remove=pt):(this.node=ye("fragment-start"),this.end=ye("fragment-end"),this.frag=n,se(this.node,n),n.appendChild(this.end),this.before=gt,this.remove=vt),this.node.__v_frag=this}function mt(e,t){this.inserted=!0;var n=t!==!1?K:ie;n(this.node,e,this.vm),ee(this.node)&&this.callHook(yt)}function pt(){this.inserted=!1;var e=ee(this.node),t=this;this.beforeRemove(),Z(this.node,this.vm,function(){e&&t.callHook(Mt),t.destroy()})}function gt(e,t){this.inserted=!0;var n=this.vm,r=t!==!1?K:ie;be(this.node,this.end,function(t){r(t,e,n)}),ee(this.node)&&this.callHook(yt)}function vt(){this.inserted=!1;var e=this,t=ee(this.node);this.beforeRemove(),Le(this.node,this.end,this.vm,this.frag,function(){t&&e.callHook(Mt),e.destroy()})}function yt(e){!e._isAttached&&ee(e.$el)&&e._callHook("attached")}function Mt(e){e._isAttached&&!ee(e.$el)&&e._callHook("detached")}function bt(e,t){this.vm=e;var n,r="string"==typeof t;r||ve(t)&&!t.hasAttribute("v-if")?n=_t(t,!0):(n=document.createDocumentFragment(),n.appendChild(t)),this.template=n;var i,a=e.constructor.cid;if(a>0){var o=a+(r?t:Ye(t));i=Qi.get(o),i||(i=Kt(n,e.$options,!0),Qi.put(o,i))}else i=Kt(n,e.$options,!0);this.linker=i}function Lt(e,t,n){var r=e.node.previousSibling;if(r){for(e=r.__v_frag;!(e&&e.forId===n&&e.inserted||r===t);){if(r=r.previousSibling,!r)return;e=r.__v_frag}return e}}function kt(e){for(var t=-1,n=new Array(Math.floor(e));++t<e;)n[t]=t;return n}function Yt(e,t,n,r){return r?"$index"===r?e:r.charAt(0).match(/\w/)?Je(n,r):n[r]:t||n}function xt(e){var t=e.node;if(e.end)for(;!t.__vue__&&t!==e.end&&t.nextSibling;)t=t.nextSibling;return t.__vue__}function wt(e,t,n){for(var r,i,a,o=t?[]:null,s=0,u=e.options.length;s<u;s++)if(r=e.options[s],a=n?r.hasAttribute("selected"):r.selected){if(i=r.hasOwnProperty("_value")?r._value:r.value,!t)return i;o.push(i)}return o}function Dt(e,t){for(var n=e.length;n--;)if(x(e[n],t))return n;return-1}function Tt(e,t){var n=t.map(function(e){var t=e.charCodeAt(0);return t>47&&t<58?parseInt(e,10):1===e.length&&(t=e.toUpperCase().charCodeAt(0),t>64&&t<91)?t:ya[e]});return n=[].concat.apply([],n),function(t){if(n.indexOf(t.keyCode)>-1)return e.call(this,t)}}function St(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function jt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Ht(e){return function(t){if(t.target===t.currentTarget)return e.call(this,t)}}function At(e){if(Ya[e])return Ya[e];var t=Pt(e);return Ya[e]=Ya[t]=t,t}function Pt(e){e=f(e);var t=h(e),n=t.charAt(0).toUpperCase()+t.slice(1);xa||(xa=document.createElement("div"));var r,i=ba.length;if("filter"!==t&&t in xa.style)return{kebab:e,camel:t};for(;i--;)if(r=La[i]+n,r in xa.style)return{kebab:ba[i]+e,camel:r}}function Ct(e){var t=[];if(Zn(e))for(var n=0,r=e.length;n<r;n++){var i=e[n];if(i)if("string"==typeof i)t.push(i);else for(var a in i)i[a]&&t.push(a)}else if(y(e))for(var o in e)e[o]&&t.push(o);return t}function Ot(e,t,n){if(t=t.trim(),t.indexOf(" ")===-1)return void n(e,t);for(var r=t.split(/\s+/),i=0,a=r.length;i<a;i++)n(e,r[i])}function Ft(e,t,n){function r(){++a>=i?n():e[a].call(t,r)}var i=e.length,a=0;e[0].call(t,r)}function Wt(e,t,n){for(var r,i,a,s,u,d,l,c=[],_=n.$options.propsData,m=Object.keys(t),p=m.length;p--;)if(i=m[p],r=t[i]||Ra,u=h(i),Na.test(u)){if(l={name:i,path:u,options:r,mode:za.ONE_WAY,raw:null},a=f(i),null===(s=ne(e,a))&&(null!==(s=ne(e,a+".sync"))?l.mode=za.TWO_WAY:null!==(s=ne(e,a+".once"))&&(l.mode=za.ONE_TIME)),null!==s)l.raw=s,d=N(s),s=d.expression,l.filters=d.filters,o(s)&&!d.filters?l.optimizedLiteral=!0:l.dynamic=!0,l.parentPath=s;else if(null!==(s=te(e,a)))l.raw=s;else if(_&&null!==(s=_[i]||_[u]))l.raw=s;else;c.push(l)}return It(c)}function It(e){return function(t,n){t._props={};for(var r,i,o,s,u,h=t.$options.propsData,_=e.length;_--;)if(r=e[_],u=r.raw,i=r.path,o=r.options,t._props[i]=r,h&&a(h,i)&&zt(t,r,h[i]),null===u)zt(t,r,void 0);else if(r.dynamic)r.mode===za.ONE_TIME?(s=(n||t._context||t).$get(r.parentPath),zt(t,r,s)):t._context?t._bindDir({name:"prop",def:Ba,prop:r},null,null,n):zt(t,r,t.$get(r.parentPath));else if(r.optimizedLiteral){var m=c(u);s=m===u?l(d(u)):m,zt(t,r,s)}else s=o.type===Boolean&&(""===u||u===f(r.name))||u,zt(t,r,s)}}function Et(e,t,n,r){var i=t.dynamic&&nt(t.parentPath),a=n;void 0===a&&(a=Nt(e,t)),a=Bt(t,a,e);var o=a!==n;Vt(t,a,e)||(a=void 0),i&&!o?Oe(function(){r(a)}):r(a)}function zt(e,t,n){Et(e,t,n,function(n){ze(e,t.path,n)})}function Rt(e,t,n){Et(e,t,n,function(n){e[t.path]=n})}function Nt(e,t){var n=t.options;if(!a(n,"default"))return n.type!==Boolean&&void 0;var r=n.default;return y(r),"function"==typeof r&&n.type!==Function?r.call(e):r}function Vt(e,t,n){if(!e.options.required&&(null===e.raw||null==t))return!0;var r=e.options,i=r.type,a=!i,o=[];if(i){Zn(i)||(i=[i]);for(var s=0;s<i.length&&!a;s++){var u=$t(t,i[s]);o.push(u.expectedType),a=u.valid}}if(!a)return!1;var d=r.validator;return!(d&&!d(t))}function Bt(e,t,n){var r=e.options.coerce;return r&&"function"==typeof r?r(t):t}function $t(e,t){var n,r;return t===String?(r="string",n=typeof e===r):t===Number?(r="number",n=typeof e===r):t===Boolean?(r="boolean",n=typeof e===r):t===Function?(r="function",n=typeof e===r):t===Object?(r="object",n=M(e)):t===Array?(r="array",n=Zn(e)):n=e instanceof t,{valid:n,expectedType:r}}function Jt(e){$a.push(e),Ja||(Ja=!0,hr(Ut))}function Ut(){for(var e=document.documentElement.offsetHeight,t=0;t<$a.length;t++)$a[t]();return $a=[],Ja=!1,e}function qt(e,t,n,r){this.id=t,this.el=e,this.enterClass=n&&n.enterClass||t+"-enter",this.leaveClass=n&&n.leaveClass||t+"-leave",this.hooks=n,this.vm=r,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=n&&n.type;var i=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(e){i[e]=p(i[e],i)})}function Gt(e){if(/svg$/.test(e.namespaceURI)){var t=e.getBoundingClientRect();return!(t.width||t.height)}return!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function Kt(e,t,n){var r=n||!t._asComponent?rn(e,t):null,i=r&&r.terminal||bn(e)||!e.hasChildNodes()?null:ln(e.childNodes,t);return function(e,t,n,a,o){var s=g(t.childNodes),u=Zt(function(){r&&r(e,t,n,a,o),i&&i(e,s,n,a,o)},e);return Xt(e,u)}}function Zt(e,t){t._directives=[];var n=t._directives.length;e();var r=t._directives.slice(n);Qt(r);for(var i=0,a=r.length;i<a;i++)r[i]._bind();return r}function Qt(e){if(0!==e.length){var t,n,r,i,a={},o=0,s=[];for(t=0,n=e.length;t<n;t++){var u=e[t],d=u.descriptor.def.priority||so,l=a[d];l||(l=a[d]=[],s.push(d)),l.push(u)}for(s.sort(function(e,t){return e>t?-1:e===t?0:1}),t=0,n=s.length;t<n;t++){var c=a[s[t]];for(r=0,i=c.length;r<i;r++)e[o++]=c[r]}}}function Xt(e,t,n,r){function i(i){en(e,t,i),n&&r&&en(n,r)}return i.dirs=t,i}function en(e,t,n){for(var r=t.length;r--;)t[r]._teardown()}function tn(e,t,n,r){var i=Wt(t,n,e),a=Zt(function(){i(e,r)},e);return Xt(e,a)}function nn(e,t,n){var r,i,a=t._containerAttrs,o=t._replacerAttrs;if(11!==e.nodeType)t._asComponent?(a&&n&&(r=gn(a,n)),o&&(i=gn(o,t))):i=gn(e.attributes,t);else;return t._containerAttrs=t._replacerAttrs=null,function(e,t,n){var a,o=e._context;o&&r&&(a=Zt(function(){r(o,t,null,n)},o));var s=Zt(function(){i&&i(e,t)},e);return Xt(e,s,o,a)}}function rn(e,t){var n=e.nodeType;return 1!==n||bn(e)?3===n&&e.data.trim()?on(e,t):null:an(e,t)}function an(e,t){if("TEXTAREA"===e.tagName){if(null!==te(e,"v-pre"))return mn;var n=$(e.value);n&&(e.setAttribute(":value",J(n)),e.value="")}var r,i=e.hasAttributes(),a=i&&g(e.attributes);return i&&(r=fn(e,a,t)),r||(r=hn(e,t)),r||(r=_n(e,t)),!r&&i&&(r=gn(a,t)),r}function on(e,t){if(e._skip)return sn;var n=$(e.wholeText);if(!n)return null;for(var r=e.nextSibling;r&&3===r.nodeType;)r._skip=!0,r=r.nextSibling;for(var i,a,o=document.createDocumentFragment(),s=0,u=n.length;s<u;s++)a=n[s],i=a.tag?un(a,t):document.createTextNode(a.value),o.appendChild(i);return dn(n,o,t)}function sn(e,t){oe(t)}function un(e,t){function n(t){if(!e.descriptor){var n=N(e.value);e.descriptor={name:t,def:Wa[t],expression:n.expression,filters:n.filters}}}var r;return e.oneTime?r=document.createTextNode(e.value):e.html?(r=document.createComment("v-html"),n("html")):(r=document.createTextNode(" "),n("text")),r}function dn(e,t){return function(n,r,i,a){for(var o,s,d,l=t.cloneNode(!0),c=g(l.childNodes),h=0,_=e.length;h<_;h++)o=e[h],s=o.value,o.tag&&(d=c[h],o.oneTime?(s=(a||n).$eval(s),o.html?ue(d,_t(s,!0)):d.data=u(s)):n._bindDir(o.descriptor,d,i,a));ue(r,l)}}function ln(e,t){for(var n,r,i,a=[],o=0,s=e.length;o<s;o++)i=e[o],n=rn(i,t),r=n&&n.terminal||"SCRIPT"===i.tagName||!i.hasChildNodes()?null:ln(i.childNodes,t),a.push(n,r);return a.length?cn(a):null}function cn(e){return function(t,n,r,i,a){for(var o,s,u,d=0,l=0,c=e.length;d<c;l++){o=n[l],s=e[d++],u=e[d++];var h=g(o.childNodes);s&&s(t,o,r,i,a),u&&u(t,h,r,i,a)}}}function hn(e,t){var n=e.tagName.toLowerCase();if(!Ur.test(n)){var r=Pe(t,"elementDirectives",n);return r?pn(e,n,"",t,r):void 0}}function _n(e,t){var n=xe(e,t);if(n){var r=Me(e),i={name:"component",ref:r,expression:n.id,def:to.component,modifiers:{literal:!n.dynamic}},a=function(e,t,n,a,o){r&&ze((a||e).$refs,r,null),e._bindDir(i,t,n,a,o)};return a.terminal=!0,a}}function fn(e,t,n){if(null!==te(e,"v-pre"))return mn;if(e.hasAttribute("v-else")){var r=e.previousElementSibling;if(r&&r.hasAttribute("v-if"))return mn}for(var i,a,o,s,u,d,l,c,h,_,f=0,m=t.length;f<m;f++)i=t[f],a=i.name.replace(ao,""),(u=a.match(io))&&(h=Pe(n,"directives",u[1]),h&&h.terminal&&(!_||(h.priority||uo)>_.priority)&&(_=h,l=i.name,s=vn(i.name),o=i.value,d=u[1],c=u[2]));return _?pn(e,d,o,n,_,l,c,s):void 0}function mn(){}function pn(e,t,n,r,i,a,o,s){var u=N(n),d={name:t,arg:o,expression:u.expression,filters:u.filters,raw:n,attr:a,modifiers:s,def:i};"for"!==t&&"router-view"!==t||(d.ref=Me(e));var l=function(e,t,n,r,i){d.ref&&ze((r||e).$refs,d.ref,null),e._bindDir(d,t,n,r,i)};return l.terminal=!0,l}function gn(e,t){function n(e,t,n){var r=n&&Mn(n),i=!r&&N(a);m.push({name:e,attr:o,raw:s,def:t,arg:d,modifiers:l,expression:i&&i.expression,filters:i&&i.filters,interp:n,hasOneTime:r})}for(var r,i,a,o,s,u,d,l,c,h,_,f=e.length,m=[];f--;)if(r=e[f],i=o=r.name,a=s=r.value,h=$(a),d=null,l=vn(i),i=i.replace(ao,""),h)a=J(h),d=i,n("bind",Wa.bind,h);else if(oo.test(i))l.literal=!no.test(i),n("transition",to.transition);else if(ro.test(i))d=i.replace(ro,""),n("on",Wa.on);else if(no.test(i))u=i.replace(no,""),"style"===u||"class"===u?n(u,to[u]):(d=u,n("bind",Wa.bind));else if(_=i.match(io)){if(u=_[1],d=_[2],"else"===u)continue;c=Pe(t,"directives",u,!0),c&&n(u,c)}if(m.length)return yn(m)}function vn(e){var t=Object.create(null),n=e.match(ao);if(n)for(var r=n.length;r--;)t[n[r].slice(1)]=!0;return t}function yn(e){return function(t,n,r,i,a){for(var o=e.length;o--;)t._bindDir(e[o],n,r,i,a)}}function Mn(e){for(var t=e.length;t--;)if(e[t].oneTime)return!0}function bn(e){return"SCRIPT"===e.tagName&&(!e.hasAttribute("type")||"text/javascript"===e.getAttribute("type"))}function Ln(e,t){return t&&(t._containerAttrs=Yn(e)),ve(e)&&(e=_t(e)),t&&(t._asComponent&&!t.template&&(t.template="<slot></slot>"),t.template&&(t._content=me(e),e=kn(e,t))),ke(e)&&(se(ye("v-start",!0),e),e.appendChild(ye("v-end",!0))),e}function kn(e,t){var n=t.template,r=_t(n,!0);if(r){var i=r.firstChild;if(!i)return r;var a=i.tagName&&i.tagName.toLowerCase();return t.replace?(e===document.body,r.childNodes.length>1||1!==i.nodeType||"component"===a||Pe(t,"components",a)||re(i,"is")||Pe(t,"elementDirectives",a)||i.hasAttribute("v-for")||i.hasAttribute("v-if")?r:(t._replacerAttrs=Yn(i),xn(e,i),i)):(e.appendChild(r),e)}}function Yn(e){if(1===e.nodeType&&e.hasAttributes())return g(e.attributes)}function xn(e,t){for(var n,r,i=e.attributes,a=i.length;a--;)n=i[a].name,r=i[a].value,t.hasAttribute(n)||lo.test(n)?"class"===n&&!$(r)&&(r=r.trim())&&r.split(/\s+/).forEach(function(e){_e(t,e)}):t.setAttribute(n,r)}function wn(e,t){if(t){for(var n,r,i=e._slotContents=Object.create(null),a=0,o=t.children.length;a<o;a++)n=t.children[a],(r=n.getAttribute("slot"))&&(i[r]||(i[r]=[])).push(n);for(r in i)i[r]=Dn(i[r],t);if(t.hasChildNodes()){var s=t.childNodes;if(1===s.length&&3===s[0].nodeType&&!s[0].data.trim())return;i.default=Dn(t.childNodes,t)}}}function Dn(e,t){var n=document.createDocumentFragment();e=g(e);for(var r=0,i=e.length;r<i;r++){var a=e[r];!ve(a)||a.hasAttribute("v-if")||a.hasAttribute("v-for")||(t.removeChild(a),a=_t(a,!0)),n.appendChild(a)}return n}function Tn(e){function t(){}function n(e,t){var n=new st(t,e,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Ce.target&&n.depend(),n.value}}Object.defineProperty(e.prototype,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),e.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},e.prototype._initProps=function(){var e=this.$options,t=e.el,n=e.props;t=e.el=X(t),this._propsUnlinkFn=t&&1===t.nodeType&&n?tn(this,t,n,this._scope):null},e.prototype._initData=function(){var e=this.$options.data,t=this._data=e?e():{};M(t)||(t={});var n,r,i=this._props,o=Object.keys(t);for(n=o.length;n--;)r=o[n],i&&a(i,r)||this._proxy(r);Ee(t,this)},e.prototype._setData=function(e){e=e||{};var t=this._data;this._data=e;var n,r,i;for(n=Object.keys(t),i=n.length;i--;)r=n[i],r in e||this._unproxy(r);for(n=Object.keys(e),i=n.length;i--;)r=n[i],a(this,r)||this._proxy(r);t.__ob__.removeVm(this),Ee(e,this),this._digest()},e.prototype._proxy=function(e){if(!s(e)){var t=this;Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){return t._data[e]},set:function(n){t._data[e]=n}})}},e.prototype._unproxy=function(e){s(e)||delete this[e]},e.prototype._digest=function(){for(var e=0,t=this._watchers.length;e<t;e++)this._watchers[e].update(!0)},e.prototype._initComputed=function(){var e=this.$options.computed;if(e)for(var r in e){var i=e[r],a={enumerable:!0,configurable:!0};"function"==typeof i?(a.get=n(i,this),a.set=t):(a.get=i.get?i.cache!==!1?n(i.get,this):p(i.get,this):t,a.set=i.set?p(i.set,this):t),Object.defineProperty(this,r,a)}},e.prototype._initMethods=function(){var e=this.$options.methods;if(e)for(var t in e)this[t]=p(e[t],this)},e.prototype._initMeta=function(){var e=this.$options._meta;if(e)for(var t in e)ze(this,t,e[t])}}function Sn(e){function t(e,t){for(var n,r,i,a=t.attributes,o=0,s=a.length;o<s;o++)n=a[o].name,ho.test(n)&&(n=n.replace(ho,""),r=a[o].value,nt(r)&&(r+=".apply(this, $arguments)"),i=(e._scope||e._context).$eval(r,!0),i._fromParent=!0,e.$on(n.replace(ho),i))}function n(e,t,n){if(n){var i,a,o,s;for(a in n)if(i=n[a],Zn(i))for(o=0,s=i.length;o<s;o++)r(e,t,a,i[o]);else r(e,t,a,i)}}function r(e,t,n,i,a){var o=typeof i;if("function"===o)e[t](n,i,a);else if("string"===o){var s=e.$options.methods,u=s&&s[i];u&&e[t](n,u,a)}else i&&"object"===o&&r(e,t,n,i.handler,i)}function i(){this._isAttached||(this._isAttached=!0,this.$children.forEach(a))}function a(e){!e._isAttached&&ee(e.$el)&&e._callHook("attached")}function o(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(s))}function s(e){e._isAttached&&!ee(e.$el)&&e._callHook("detached")}e.prototype._initEvents=function(){var e=this.$options;e._asComponent&&t(this,e.el),n(this,"$on",e.events),n(this,"$watch",e.watch)},e.prototype._initDOMHooks=function(){this.$on("hook:attached",i),this.$on("hook:detached",o)},e.prototype._callHook=function(e){this.$emit("pre-hook:"+e);var t=this.$options[e];if(t)for(var n=0,r=t.length;n<r;n++)t[n].call(this);this.$emit("hook:"+e)}}function jn(){}function Hn(e,t,n,r,i,a){this.vm=t,this.el=n,this.descriptor=e,this.name=e.name,this.expression=e.expression,this.arg=e.arg,this.modifiers=e.modifiers,this.filters=e.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=r,this._scope=i,this._frag=a}function An(e){e.prototype._updateRef=function(e){var t=this.$options._ref;if(t){var n=(this._scope||this._context).$refs;e?n[t]===this&&(n[t]=null):n[t]=this}},e.prototype._compile=function(e){var t=this.$options,n=e;if(e=Ln(e,t),this._initElement(e),1!==e.nodeType||null===te(e,"v-pre")){var r=this._context&&this._context.$options,i=nn(e,t,r);wn(this,t._content);var a,o=this.constructor;t._linkerCachable&&(a=o.linker,a||(a=o.linker=Kt(e,t)));var s=i(this,e,this._scope),u=a?a(this,e):Kt(e,t)(this,e);this._unlinkFn=function(){s(),u(!0)},t.replace&&ue(n,e),this._isCompiled=!0,this._callHook("compiled")}},e.prototype._initElement=function(e){
ke(e)?(this._isFragment=!0,this.$el=this._fragmentStart=e.firstChild,this._fragmentEnd=e.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=e):this.$el=e,this.$el.__vue__=this,this._callHook("beforeCompile")},e.prototype._bindDir=function(e,t,n,r,i){this._directives.push(new Hn(e,this,t,n,r,i))},e.prototype._destroy=function(e,t){if(this._isBeingDestroyed)return void(t||this._cleanup());var n,r,i=this,a=function(){!n||r||t||i._cleanup()};e&&this.$el&&(r=!0,this.$remove(function(){r=!1,a()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var o,s=this.$parent;for(s&&!s._isBeingDestroyed&&(s.$children.$remove(this),this._updateRef(!0)),o=this.$children.length;o--;)this.$children[o].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),o=this._watchers.length;o--;)this._watchers[o].teardown();this.$el&&(this.$el.__vue__=null),n=!0,a()},e.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function Pn(e){e.prototype._applyFilters=function(e,t,n,r){var i,a,o,s,u,d,l,c,h;for(d=0,l=n.length;d<l;d++)if(i=n[r?l-d-1:d],a=Pe(this.$options,"filters",i.name,!0),a&&(a=r?a.write:a.read||a,"function"==typeof a)){if(o=r?[e,t]:[e],u=r?2:1,i.args)for(c=0,h=i.args.length;c<h;c++)s=i.args[c],o[c+u]=s.dynamic?this.$get(s.value):s.value;e=a.apply(this,o)}return e},e.prototype._resolveComponent=function(t,n){var r;if(r="function"==typeof t?t:Pe(this.$options,"components",t,!0))if(r.options)n(r);else if(r.resolved)n(r.resolved);else if(r.requested)r.pendingCallbacks.push(n);else{r.requested=!0;var i=r.pendingCallbacks=[n];r.call(this,function(t){M(t)&&(t=e.extend(t)),r.resolved=t;for(var n=0,a=i.length;n<a;n++)i[n](t)},function(e){})}}}function Cn(e){function t(e){return JSON.parse(JSON.stringify(e))}e.prototype.$get=function(e,t){var n=tt(e);if(n){if(t){var r=this;return function(){r.$arguments=g(arguments);var e=n.get.call(r,r);return r.$arguments=null,e}}try{return n.get.call(this,this)}catch(e){}}},e.prototype.$set=function(e,t){var n=tt(e,!0);n&&n.set&&n.set.call(this,this,t)},e.prototype.$delete=function(e){i(this._data,e)},e.prototype.$watch=function(e,t,n){var r,i=this;"string"==typeof e&&(r=N(e),e=r.expression);var a=new st(i,e,t,{deep:n&&n.deep,sync:n&&n.sync,filters:r&&r.filters,user:!n||n.user!==!1});return n&&n.immediate&&t.call(i,a.value),function(){a.teardown()}},e.prototype.$eval=function(e,t){if(_o.test(e)){var n=N(e),r=this.$get(n.expression,t);return n.filters?this._applyFilters(r,null,n.filters):r}return this.$get(e,t)},e.prototype.$interpolate=function(e){var t=$(e),n=this;return t?1===t.length?n.$eval(t[0].value)+"":t.map(function(e){return e.tag?n.$eval(e.value):e.value}).join(""):e},e.prototype.$log=function(e){var n=e?Je(this._data,e):this._data;if(n&&(n=t(n)),!e){var r;for(r in this.$options.computed)n[r]=t(this[r]);if(this._props)for(r in this._props)n[r]=t(this[r])}console.log(n)}}function On(e){function t(e,t,r,i,a,o){t=n(t);var s=!ee(t),u=i===!1||s?a:o,d=!s&&!e._isAttached&&!ee(e.$el);return e._isFragment?(be(e._fragmentStart,e._fragmentEnd,function(n){u(n,t,e)}),r&&r()):u(e.$el,t,e,r),d&&e._callHook("attached"),e}function n(e){return"string"==typeof e?document.querySelector(e):e}function r(e,t,n,r){t.appendChild(e),r&&r()}function i(e,t,n,r){ie(e,t),r&&r()}function a(e,t,n){oe(e),n&&n()}e.prototype.$nextTick=function(e){hr(e,this)},e.prototype.$appendTo=function(e,n,i){return t(this,e,n,i,r,G)},e.prototype.$prependTo=function(e,t,r){return e=n(e),e.hasChildNodes()?this.$before(e.firstChild,t,r):this.$appendTo(e,t,r),this},e.prototype.$before=function(e,n,r){return t(this,e,n,r,i,K)},e.prototype.$after=function(e,t,r){return e=n(e),e.nextSibling?this.$before(e.nextSibling,t,r):this.$appendTo(e.parentNode,t,r),this},e.prototype.$remove=function(e,t){if(!this.$el.parentNode)return e&&e();var n=this._isAttached&&ee(this.$el);n||(t=!1);var r=this,i=function(){n&&r._callHook("detached"),e&&e()};if(this._isFragment)Le(this._fragmentStart,this._fragmentEnd,this,this._fragment,i);else{var o=t===!1?a:Z;o(this.$el,this,i)}return this}}function Fn(e){function t(e,t,r){var i=e.$parent;if(i&&r&&!n.test(t))for(;i;)i._eventsCount[t]=(i._eventsCount[t]||0)+r,i=i.$parent}e.prototype.$on=function(e,n){return(this._events[e]||(this._events[e]=[])).push(n),t(this,e,1),this},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(this,arguments)}var r=this;return n.fn=t,this.$on(e,n),this},e.prototype.$off=function(e,n){var r;if(!arguments.length){if(this.$parent)for(e in this._events)r=this._events[e],r&&t(this,e,-r.length);return this._events={},this}if(r=this._events[e],!r)return this;if(1===arguments.length)return t(this,e,-r.length),this._events[e]=null,this;for(var i,a=r.length;a--;)if(i=r[a],i===n||i.fn===n){t(this,e,-1),r.splice(a,1);break}return this},e.prototype.$emit=function(e){var t="string"==typeof e;e=t?e:e.name;var n=this._events[e],r=t||!n;if(n){n=n.length>1?g(n):n;var i=t&&n.some(function(e){return e._fromParent});i&&(r=!1);for(var a=g(arguments,1),o=0,s=n.length;o<s;o++){var u=n[o],d=u.apply(this,a);d!==!0||i&&!u._fromParent||(r=!0)}}return r},e.prototype.$broadcast=function(e){var t="string"==typeof e;if(e=t?e:e.name,this._eventsCount[e]){var n=this.$children,r=g(arguments);t&&(r[0]={name:e,source:this});for(var i=0,a=n.length;i<a;i++){var o=n[i],s=o.$emit.apply(o,r);s&&o.$broadcast.apply(o,r)}return this}},e.prototype.$dispatch=function(e){var t=this.$emit.apply(this,arguments);if(t){var n=this.$parent,r=g(arguments);for(r[0]={name:e,source:this};n;)t=n.$emit.apply(n,r),n=t?n.$parent:null;return this}};var n=/^hook:/}function Wn(e){function t(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}e.prototype.$mount=function(e){if(!this._isCompiled)return e=X(e),e||(e=document.createElement("div")),this._compile(e),this._initDOMHooks(),ee(this.$el)?(this._callHook("attached"),t.call(this)):this.$once("hook:attached",t),this},e.prototype.$destroy=function(e,t){this._destroy(e,t)},e.prototype.$compile=function(e,t,n,r){return Kt(e,this.$options,!0)(this,e,t,n,r)}}function In(e){this._init(e)}function En(e,t,n){return n=n?parseInt(n,10):0,t=d(t),"number"==typeof t?e.slice(n,n+t):e}function zn(e,t,n){if(e=go(e),null==t)return e;if("function"==typeof t)return e.filter(t);t=(""+t).toLowerCase();for(var r,i,a,o,s="in"===n?3:2,u=Array.prototype.concat.apply([],g(arguments,s)),d=[],l=0,c=e.length;l<c;l++)if(r=e[l],a=r&&r.$value||r,o=u.length){for(;o--;)if(i=u[o],"$key"===i&&Nn(r.$key,t)||Nn(Je(a,i),t)){d.push(r);break}}else Nn(r,t)&&d.push(r);return d}function Rn(e){function t(e,t,n){var i=r[n];return i&&("$key"!==i&&(y(e)&&"$value"in e&&(e=e.$value),y(t)&&"$value"in t&&(t=t.$value)),e=y(e)?Je(e,i):e,t=y(t)?Je(t,i):t),e===t?0:e>t?a:-a}var n=null,r=void 0;e=go(e);var i=g(arguments,1),a=i[i.length-1];"number"==typeof a?(a=a<0?-1:1,i=i.length>1?i.slice(0,-1):i):a=1;var o=i[0];return o?("function"==typeof o?n=function(e,t){return o(e,t)*a}:(r=Array.prototype.concat.apply([],i),n=function(e,i,a){return a=a||0,a>=r.length-1?t(e,i,a):t(e,i,a)||n(e,i,a+1)}),e.slice().sort(n)):e}function Nn(e,t){var n;if(M(e)){var r=Object.keys(e);for(n=r.length;n--;)if(Nn(e[r[n]],t))return!0}else if(Zn(e)){for(n=e.length;n--;)if(Nn(e[n],t))return!0}else if(null!=e)return e.toString().toLowerCase().indexOf(t)>-1}function Vn(e){function t(e){return new Function("return function "+m(e)+" (options) { this._init(options) }")()}e.options={directives:Wa,elementDirectives:po,filters:yo,transitions:{},components:{},partials:{},replace:!0},e.util=ni,e.config=Vr,e.set=r,e.delete=i,e.nextTick=hr,e.compiler=co,e.FragmentFactory=bt,e.internalDirectives=to,e.parsers={path:yi,text:zr,template:Ki,directive:Cr,expression:Pi},e.cid=0;var n=1;e.extend=function(e){e=e||{};var r=this,i=0===r.cid;if(i&&e._Ctor)return e._Ctor;var a=e.name||r.options.name,o=t(a||"VueComponent");return o.prototype=Object.create(r.prototype),o.prototype.constructor=o,o.cid=n++,o.options=Ae(r.options,e),o.super=r,o.extend=r.extend,Vr._assetTypes.forEach(function(e){o[e]=r[e]}),a&&(o.options.components[a]=o),i&&(e._Ctor=o),o},e.use=function(e){if(!e.installed){var t=g(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}},e.mixin=function(t){e.options=Ae(e.options,t)},Vr._assetTypes.forEach(function(t){e[t]=function(n,r){return r?("component"===t&&M(r)&&(r.name||(r.name=n),r=e.extend(r)),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]}}),v(e.transition,$r)}var Bn=Object.prototype.hasOwnProperty,$n=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Jn=/-(\w)/g,Un=/([^-])([A-Z])/g,qn=/(?:^|[-_\/])(\w)/g,Gn=Object.prototype.toString,Kn="[object Object]",Zn=Array.isArray,Qn="__proto__"in{},Xn="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),er=Xn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,tr=Xn&&window.navigator.userAgent.toLowerCase(),nr=tr&&tr.indexOf("trident")>0,rr=tr&&tr.indexOf("msie 9.0")>0,ir=tr&&tr.indexOf("android")>0,ar=tr&&/iphone|ipad|ipod|ios/.test(tr),or=void 0,sr=void 0,ur=void 0,dr=void 0;if(Xn&&!rr){var lr=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,cr=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;or=lr?"WebkitTransition":"transition",sr=lr?"webkitTransitionEnd":"transitionend",ur=cr?"WebkitAnimation":"animation",dr=cr?"webkitAnimationEnd":"animationend"}var hr=function(){function e(){n=!1;var e=t.slice(0);t.length=0;for(var r=0;r<e.length;r++)e[r]()}var t=[],n=!1,r=void 0;if("undefined"!=typeof Promise&&w(Promise)){var i=Promise.resolve(),a=function(){};r=function(){i.then(e),ar&&setTimeout(a)}}else if("undefined"!=typeof MutationObserver){var o=1,s=new MutationObserver(e),u=document.createTextNode(String(o));s.observe(u,{characterData:!0}),r=function(){o=(o+1)%2,u.data=String(o)}}else r=setTimeout;return function(i,a){var o=a?function(){i.call(a)}:i;t.push(o),n||(n=!0,r(e,0))}}(),_r=void 0;"undefined"!=typeof Set&&w(Set)?_r=Set:(_r=function(){this.set=Object.create(null)},_r.prototype.has=function(e){return void 0!==this.set[e]},_r.prototype.add=function(e){this.set[e]=1},_r.prototype.clear=function(){this.set=Object.create(null)});var fr=D.prototype;fr.put=function(e,t){var n,r=this.get(e,!0);return r||(this.size===this.limit&&(n=this.shift()),r={key:e},this._keymap[e]=r,this.tail?(this.tail.newer=r,r.older=this.tail):this.head=r,this.tail=r,this.size++),r.value=t,n},fr.shift=function(){var e=this.head;return e&&(this.head=this.head.newer,this.head.older=void 0,e.newer=e.older=void 0,this._keymap[e.key]=void 0,this.size--),e},fr.get=function(e,t){var n=this._keymap[e];if(void 0!==n)return n===this.tail?t?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,t?n:n.value)};var mr,pr,gr,vr,yr,Mr,br=new D(1e3),Lr=/^in$|^-?\d+/,kr=0,Yr=1,xr=2,wr=3,Dr=34,Tr=39,Sr=124,jr=92,Hr=32,Ar={91:1,123:1,40:1},Pr={91:93,123:125,40:41},Cr=Object.freeze({parseDirective:N}),Or=/[-.*+?^${}()|[\]\/\\]/g,Fr=void 0,Wr=void 0,Ir=void 0,Er=/[^|]\|[^|]/,zr=Object.freeze({compileRegex:B,parseText:$,tokensToExp:J}),Rr=["{{","}}"],Nr=["{{{","}}}"],Vr=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return Rr},set:function(e){Rr=e,B()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return Nr},set:function(e){Nr=e,B()},configurable:!0,enumerable:!0}}),Br=void 0,$r=Object.freeze({appendWithTransition:G,beforeWithTransition:K,removeWithTransition:Z,applyTransition:Q}),Jr=/^v-ref:/,Ur=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,qr=/^(slot|partial|component)$/i,Gr=Vr.optionMergeStrategies=Object.create(null);Gr.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?De(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return De(t.call(this),e.call(this))}:t:e},Gr.el=function(e,t,n){if(n||!t||"function"==typeof t){var r=t||e;return n&&"function"==typeof r?r.call(n):r}},Gr.init=Gr.created=Gr.ready=Gr.attached=Gr.detached=Gr.beforeCompile=Gr.compiled=Gr.beforeDestroy=Gr.destroyed=Gr.activate=function(e,t){return t?e?e.concat(t):Zn(t)?t:[t]:e},Vr._assetTypes.forEach(function(e){Gr[e+"s"]=Te}),Gr.watch=Gr.events=function(e,t){if(!t)return e;if(!e)return t;var n={};v(n,e);for(var r in t){var i=n[r],a=t[r];i&&!Zn(i)&&(i=[i]),n[r]=i?i.concat(a):[a]}return n},Gr.props=Gr.methods=Gr.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return v(n,e),v(n,t),n};var Kr=function(e,t){return void 0===t?e:t},Zr=0;Ce.target=null,Ce.prototype.addSub=function(e){this.subs.push(e)},Ce.prototype.removeSub=function(e){this.subs.$remove(e)},Ce.prototype.depend=function(){Ce.target.addDep(this)},Ce.prototype.notify=function(){for(var e=g(this.subs),t=0,n=e.length;t<n;t++)e[t].update()};var Qr=Array.prototype,Xr=Object.create(Qr);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Qr[e];b(Xr,e,function(){for(var n=arguments.length,r=new Array(n);n--;)r[n]=arguments[n];var i,a=t.apply(this,r),o=this.__ob__;switch(e){case"push":i=r;break;case"unshift":i=r;break;case"splice":i=r.slice(2)}return i&&o.observeArray(i),o.dep.notify(),a})}),b(Qr,"$set",function(e,t){return e>=this.length&&(this.length=Number(e)+1),this.splice(e,1,t)[0]}),b(Qr,"$remove",function(e){if(this.length){var t=k(this,e);return t>-1?this.splice(t,1):void 0}});var ei=Object.getOwnPropertyNames(Xr),ti=!0;Fe.prototype.walk=function(e){for(var t=Object.keys(e),n=0,r=t.length;n<r;n++)this.convert(t[n],e[t[n]])},Fe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ee(e[t])},Fe.prototype.convert=function(e,t){ze(this.value,e,t)},Fe.prototype.addVm=function(e){(this.vms||(this.vms=[])).push(e)},Fe.prototype.removeVm=function(e){this.vms.$remove(e)};var ni=Object.freeze({defineReactive:ze,set:r,del:i,hasOwn:a,isLiteral:o,isReserved:s,_toString:u,toNumber:d,toBoolean:l,stripQuotes:c,camelize:h,hyphenate:f,classify:m,bind:p,toArray:g,extend:v,isObject:y,isPlainObject:M,def:b,debounce:L,indexOf:k,cancellable:Y,looseEqual:x,isArray:Zn,hasProto:Qn,inBrowser:Xn,devtools:er,isIE:nr,isIE9:rr,isAndroid:ir,isIOS:ar,get transitionProp(){return or},get transitionEndEvent(){return sr},get animationProp(){return ur},get animationEndEvent(){return dr},nextTick:hr,get _Set(){return _r},query:X,inDoc:ee,getAttr:te,getBindAttr:ne,hasBindAttr:re,before:ie,after:ae,remove:oe,prepend:se,replace:ue,on:de,off:le,setClass:he,addClass:_e,removeClass:fe,extractContent:me,trimNode:pe,isTemplate:ve,createAnchor:ye,findRef:Me,mapNodeRange:be,removeNodeRange:Le,isFragment:ke,getOuterHTML:Ye,mergeOptions:Ae,resolveAsset:Pe,checkComponentAttr:xe,commonTagRE:Ur,reservedTagRE:qr,get warn(){return Br}}),ri=0,ii=new D(1e3),ai=0,oi=1,si=2,ui=3,di=0,li=1,ci=2,hi=3,_i=4,fi=5,mi=6,pi=7,gi=8,vi=[];vi[di]={ws:[di],ident:[hi,ai],"[":[_i],eof:[pi]},vi[li]={ws:[li],".":[ci],"[":[_i],eof:[pi]},vi[ci]={ws:[ci],ident:[hi,ai]},vi[hi]={ident:[hi,ai],0:[hi,ai],number:[hi,ai],ws:[li,oi],".":[ci,oi],"[":[_i,oi],eof:[pi,oi]},vi[_i]={"'":[fi,ai],'"':[mi,ai],"[":[_i,si],"]":[li,ui],eof:gi,else:[_i,ai]},vi[fi]={"'":[_i,ai],eof:gi,else:[fi,ai]},vi[mi]={'"':[_i,ai],eof:gi,else:[mi,ai]};var yi=Object.freeze({parsePath:$e,getPath:Je,setPath:Ue}),Mi=new D(1e3),bi="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",Li=new RegExp("^("+bi.replace(/,/g,"\\b|")+"\\b)"),ki="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",Yi=new RegExp("^("+ki.replace(/,/g,"\\b|")+"\\b)"),xi=/\s/g,wi=/\n/g,Di=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,Ti=/"(\d+)"/g,Si=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,ji=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,Hi=/^(?:true|false|null|undefined|Infinity|NaN)$/,Ai=[],Pi=Object.freeze({parseExpression:tt,isSimplePath:nt}),Ci=[],Oi=[],Fi={},Wi={},Ii=!1,Ei=0;st.prototype.get=function(){this.beforeGet();var e,t=this.scope||this.vm;try{e=this.getter.call(t,t)}catch(e){}return this.deep&&ut(e),this.preProcess&&(e=this.preProcess(e)),this.filters&&(e=t._applyFilters(e,null,this.filters,!1)),this.postProcess&&(e=this.postProcess(e)),this.afterGet(),e},st.prototype.set=function(e){var t=this.scope||this.vm;this.filters&&(e=t._applyFilters(e,this.value,this.filters,!0));try{this.setter.call(t,t,e)}catch(e){}var n=t.$forContext;if(n&&n.alias===this.expression){if(n.filters)return;n._withLock(function(){t.$key?n.rawValue[t.$key]=e:n.rawValue.$set(t.$index,e)})}},st.prototype.beforeGet=function(){Ce.target=this},st.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},st.prototype.afterGet=function(){Ce.target=null;for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},st.prototype.update=function(e){this.lazy?this.dirty=!0:this.sync||!Vr.async?this.run():(this.shallow=this.queued?!!e&&this.shallow:!!e,this.queued=!0,ot(this))},st.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||(y(e)||this.deep)&&!this.shallow){var t=this.value;this.value=e;this.prevError;this.cb.call(this.vm,e,t)}this.queued=this.shallow=!1}},st.prototype.evaluate=function(){var e=Ce.target;this.value=this.get(),this.dirty=!1,Ce.target=e},st.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},st.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var zi=new _r,Ri={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(e){this.el[this.attr]=u(e)}},Ni=new D(1e3),Vi=new D(1e3),Bi={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Bi.td=Bi.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Bi.option=Bi.optgroup=[1,'<select multiple="multiple">',"</select>"],Bi.thead=Bi.tbody=Bi.colgroup=Bi.caption=Bi.tfoot=[1,"<table>","</table>"],Bi.g=Bi.defs=Bi.symbol=Bi.use=Bi.image=Bi.text=Bi.circle=Bi.ellipse=Bi.line=Bi.path=Bi.polygon=Bi.polyline=Bi.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var $i=/<([\w:-]+)/,Ji=/&#?\w+?;/,Ui=/<!--/,qi=function(){if(Xn){var e=document.createElement("div");return e.innerHTML="<template>1</template>",!e.cloneNode(!0).firstChild.innerHTML}return!1}(),Gi=function(){if(Xn){var e=document.createElement("textarea");return e.placeholder="t","t"===e.cloneNode(!0).value}return!1}(),Ki=Object.freeze({cloneNode:ht,parseTemplate:_t}),Zi={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=ye("v-html"),ue(this.el,this.anchor))},update:function(e){e=u(e),this.nodes?this.swap(e):this.el.innerHTML=e},swap:function(e){for(var t=this.nodes.length;t--;)oe(this.nodes[t]);var n=_t(e,!0,!0);this.nodes=g(n.childNodes),ie(n,this.anchor)}};ft.prototype.callHook=function(e){var t,n;for(t=0,n=this.childFrags.length;t<n;t++)this.childFrags[t].callHook(e);for(t=0,n=this.children.length;t<n;t++)e(this.children[t])},ft.prototype.beforeRemove=function(){var e,t;for(e=0,t=this.childFrags.length;e<t;e++)this.childFrags[e].beforeRemove(!1);for(e=0,t=this.children.length;e<t;e++)this.children[e].$destroy(!1,!0);var n=this.unlink.dirs;for(e=0,t=n.length;e<t;e++)n[e]._watcher&&n[e]._watcher.teardown()},ft.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Qi=new D(5e3);bt.prototype.create=function(e,t,n){var r=ht(this.template);return new ft(this.linker,this.vm,r,e,t,n)};var Xi=700,ea=800,ta=850,na=1100,ra=1500,ia=1500,aa=1750,oa=2100,sa=2200,ua=2300,da=0,la={priority:sa,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var e=this.expression.match(/(.*) (?:in|of) (.*)/);if(e){var t=e[1].match(/\((.*),(.*)\)/);t?(this.iterator=t[1].trim(),this.alias=t[2].trim()):this.alias=e[1].trim(),this.expression=e[2]}if(this.alias){this.id="__v-for__"+ ++da;var n=this.el.tagName;this.isOption=("OPTION"===n||"OPTGROUP"===n)&&"SELECT"===this.el.parentNode.tagName,this.start=ye("v-for-start"),this.end=ye("v-for-end"),ue(this.el,this.end),ie(this.start,this.end),this.cache=Object.create(null),this.factory=new bt(this.vm,this.el)}},update:function(e){this.diff(e),this.updateRef(),this.updateModel()},diff:function(e){var t,n,r,i,o,s,u=e[0],d=this.fromObject=y(u)&&a(u,"$key")&&a(u,"$value"),l=this.params.trackBy,c=this.frags,h=this.frags=new Array(e.length),_=this.alias,f=this.iterator,m=this.start,p=this.end,g=ee(m),v=!c;for(t=0,n=e.length;t<n;t++)u=e[t],i=d?u.$key:null,o=d?u.$value:u,s=!y(o),r=!v&&this.getCachedFrag(o,t,i),r?(r.reused=!0,r.scope.$index=t,i&&(r.scope.$key=i),f&&(r.scope[f]=null!==i?i:t),(l||d||s)&&Oe(function(){r.scope[_]=o})):(r=this.create(o,_,t,i),r.fresh=!v),h[t]=r,v&&r.before(p);if(!v){var M=0,b=c.length-h.length;for(this.vm._vForRemoving=!0,t=0,n=c.length;t<n;t++)r=c[t],r.reused||(this.deleteCachedFrag(r),this.remove(r,M++,b,g));this.vm._vForRemoving=!1,M&&(this.vm._watchers=this.vm._watchers.filter(function(e){return e.active}));var L,k,Y,x=0;for(t=0,n=h.length;t<n;t++)r=h[t],L=h[t-1],k=L?L.staggerCb?L.staggerAnchor:L.end||L.node:m,r.reused&&!r.staggerCb?(Y=Lt(r,m,this.id),Y===L||Y&&Lt(Y,m,this.id)===L||this.move(r,k)):this.insert(r,x++,k,g),r.reused=r.fresh=!1}},create:function(e,t,n,r){var i=this._host,a=this._scope||this.vm,o=Object.create(a);o.$refs=Object.create(a.$refs),o.$els=Object.create(a.$els),o.$parent=a,o.$forContext=this,Oe(function(){ze(o,t,e)}),ze(o,"$index",n),r?ze(o,"$key",r):o.$key&&b(o,"$key",null),this.iterator&&ze(o,this.iterator,null!==r?r:n);var s=this.factory.create(i,o,this._frag);return s.forId=this.id,this.cacheFrag(e,s,n,r),s},updateRef:function(){var e=this.descriptor.ref;if(e){var t,n=(this._scope||this.vm).$refs;this.fromObject?(t={},this.frags.forEach(function(e){t[e.scope.$key]=xt(e)})):t=this.frags.map(xt),n[e]=t}},updateModel:function(){if(this.isOption){var e=this.start.parentNode,t=e&&e.__v_model;t&&t.forceUpdate()}},insert:function(e,t,n,r){e.staggerCb&&(e.staggerCb.cancel(),e.staggerCb=null);var i=this.getStagger(e,t,null,"enter");if(r&&i){var a=e.staggerAnchor;a||(a=e.staggerAnchor=ye("stagger-anchor"),a.__v_frag=e),ae(a,n);var o=e.staggerCb=Y(function(){e.staggerCb=null,e.before(a),oe(a)});setTimeout(o,i)}else{var s=n.nextSibling;s||(ae(this.end,n),s=this.end),e.before(s)}},remove:function(e,t,n,r){if(e.staggerCb)return e.staggerCb.cancel(),void(e.staggerCb=null);var i=this.getStagger(e,t,n,"leave");if(r&&i){var a=e.staggerCb=Y(function(){e.staggerCb=null,e.remove()});setTimeout(a,i)}else e.remove()},move:function(e,t){t.nextSibling||this.end.parentNode.appendChild(this.end),e.before(t.nextSibling,!1)},cacheFrag:function(e,t,n,r){var i,o=this.params.trackBy,s=this.cache,u=!y(e);r||o||u?(i=Yt(n,r,e,o),s[i]||(s[i]=t)):(i=this.id,a(e,i)?null===e[i]&&(e[i]=t):Object.isExtensible(e)&&b(e,i,t)),t.raw=e},getCachedFrag:function(e,t,n){var r,i=this.params.trackBy,a=!y(e);if(n||i||a){var o=Yt(t,n,e,i);r=this.cache[o]}else r=e[this.id];return r&&(r.reused||r.fresh),r},deleteCachedFrag:function(e){var t=e.raw,n=this.params.trackBy,r=e.scope,i=r.$index,o=a(r,"$key")&&r.$key,s=!y(t);if(n||o||s){var u=Yt(i,o,t,n);this.cache[u]=null}else t[this.id]=null,e.raw=null},getStagger:function(e,t,n,r){r+="Stagger";var i=e.node.__v_trans,a=i&&i.hooks,o=a&&(a[r]||a.stagger);return o?o.call(e,t,n):t*parseInt(this.params[r]||this.params.stagger,10)},_preProcess:function(e){return this.rawValue=e,e},_postProcess:function(e){if(Zn(e))return e;if(M(e)){for(var t,n=Object.keys(e),r=n.length,i=new Array(r);r--;)t=n[r],i[r]={$key:t,$value:e[t]};return i}return"number"!=typeof e||isNaN(e)||(e=kt(e)),e||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var e,t=this.frags.length;t--;)e=this.frags[t],this.deleteCachedFrag(e),e.destroy()}},ca={priority:oa,terminal:!0,bind:function(){var e=this.el;if(e.__vue__)this.invalid=!0;else{var t=e.nextElementSibling;t&&null!==te(t,"v-else")&&(oe(t),this.elseEl=t),this.anchor=ye("v-if"),ue(e,this.anchor)}},update:function(e){this.invalid||(e?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new bt(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new bt(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},ha={bind:function(){var e=this.el.nextElementSibling;e&&null!==te(e,"v-else")&&(this.elseEl=e)},update:function(e){this.apply(this.el,e),this.elseEl&&this.apply(this.elseEl,!e)},apply:function(e,t){function n(){e.style.display=t?"":"none"}ee(e)?Q(e,t?1:-1,n,this.vm):n()}},_a={bind:function(){var e=this,t=this.el,n="range"===t.type,r=this.params.lazy,i=this.params.number,a=this.params.debounce,o=!1;if(ir||n||(this.on("compositionstart",function(){o=!0}),this.on("compositionend",function(){o=!1,r||e.listener()})),this.focused=!1,n||r||(this.on("focus",function(){e.focused=!0}),this.on("blur",function(){e.focused=!1,e._frag&&!e._frag.inserted||e.rawListener()})),this.listener=this.rawListener=function(){if(!o&&e._bound){var r=i||n?d(t.value):t.value;e.set(r),hr(function(){e._bound&&!e.focused&&e.update(e._watcher.value)})}},a&&(this.listener=L(this.listener,a)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var s=jQuery.fn.on?"on":"bind";jQuery(t)[s]("change",this.rawListener),r||jQuery(t)[s]("input",this.listener)}else this.on("change",this.rawListener),r||this.on("input",this.listener);!r&&rr&&(this.on("cut",function(){hr(e.listener)}),this.on("keyup",function(t){46!==t.keyCode&&8!==t.keyCode||e.listener()})),(t.hasAttribute("value")||"TEXTAREA"===t.tagName&&t.value.trim())&&(this.afterBind=this.listener)},update:function(e){e=u(e),e!==this.el.value&&(this.el.value=e)},unbind:function(){var e=this.el;if(this.hasjQuery){var t=jQuery.fn.off?"off":"unbind";jQuery(e)[t]("change",this.listener),jQuery(e)[t]("input",this.listener)}}},fa={bind:function(){var e=this,t=this.el;this.getValue=function(){if(t.hasOwnProperty("_value"))return t._value;var n=t.value;return e.params.number&&(n=d(n)),n},this.listener=function(){e.set(e.getValue())},this.on("change",this.listener),t.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(e){this.el.checked=x(e,this.getValue())}},ma={bind:function(){var e=this,t=this,n=this.el;this.forceUpdate=function(){t._watcher&&t.update(t._watcher.get())};var r=this.multiple=n.hasAttribute("multiple");this.listener=function(){var e=wt(n,r);e=t.params.number?Zn(e)?e.map(d):d(e):e,t.set(e)},this.on("change",this.listener);var i=wt(n,r,!0);(r&&i.length||!r&&null!==i)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){hr(e.forceUpdate)}),ee(n)||hr(this.forceUpdate)},update:function(e){var t=this.el;t.selectedIndex=-1;for(var n,r,i=this.multiple&&Zn(e),a=t.options,o=a.length;o--;)n=a[o],r=n.hasOwnProperty("_value")?n._value:n.value,n.selected=i?Dt(e,r)>-1:x(e,r)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},pa={bind:function(){function e(){var e=n.checked;return e&&n.hasOwnProperty("_trueValue")?n._trueValue:!e&&n.hasOwnProperty("_falseValue")?n._falseValue:e}var t=this,n=this.el;this.getValue=function(){return n.hasOwnProperty("_value")?n._value:t.params.number?d(n.value):n.value},this.listener=function(){var r=t._watcher.get();if(Zn(r)){var i=t.getValue(),a=k(r,i);n.checked?a<0&&t.set(r.concat(i)):a>-1&&t.set(r.slice(0,a).concat(r.slice(a+1)))}else t.set(e())},this.on("change",this.listener),n.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(e){var t=this.el;Zn(e)?t.checked=k(e,this.getValue())>-1:t.hasOwnProperty("_trueValue")?t.checked=x(e,t._trueValue):t.checked=!!e}},ga={text:_a,radio:fa,select:ma,checkbox:pa},va={priority:ea,twoWay:!0,handlers:ga,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var e,t=this.el,n=t.tagName;if("INPUT"===n)e=ga[t.type]||ga.text;else if("SELECT"===n)e=ga.select;else{if("TEXTAREA"!==n)return;e=ga.text}t.__v_model=this,e.bind.call(this),this.update=e.update,this._unbind=e.unbind},checkFilters:function(){var e=this.filters;if(e)for(var t=e.length;t--;){var n=Pe(this.vm.$options,"filters",e[t].name);("function"==typeof n||n.read)&&(this.hasRead=!0),n.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},ya={esc:27,tab:9,enter:13,space:32,delete:[8,46],up:38,left:37,right:39,down:40},Ma={priority:Xi,acceptStatement:!0,keyCodes:ya,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var e=this;this.iframeBind=function(){de(e.el.contentWindow,e.arg,e.handler,e.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(e){if(this.descriptor.raw||(e=function(){}),"function"==typeof e){this.modifiers.stop&&(e=St(e)),this.modifiers.prevent&&(e=jt(e)),this.modifiers.self&&(e=Ht(e));var t=Object.keys(this.modifiers).filter(function(e){return"stop"!==e&&"prevent"!==e&&"self"!==e&&"capture"!==e});t.length&&(e=Tt(e,t)),this.reset(),this.handler=e,this.iframeBind?this.iframeBind():de(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var e=this.iframeBind?this.el.contentWindow:this.el;this.handler&&le(e,this.arg,this.handler)},unbind:function(){this.reset()}},ba=["-webkit-","-moz-","-ms-"],La=["Webkit","Moz","ms"],ka=/!important;?$/,Ya=Object.create(null),xa=null,wa={deep:!0,update:function(e){"string"==typeof e?this.el.style.cssText=e:Zn(e)?this.handleObject(e.reduce(v,{})):this.handleObject(e||{})},handleObject:function(e){var t,n,r=this.cache||(this.cache={});for(t in r)t in e||(this.handleSingle(t,null),delete r[t]);for(t in e)n=e[t],n!==r[t]&&(r[t]=n,this.handleSingle(t,n))},handleSingle:function(e,t){if(e=At(e))if(null!=t&&(t+=""),t){var n=ka.test(t)?"important":"";n?(t=t.replace(ka,"").trim(),this.el.style.setProperty(e.kebab,t,n)):this.el.style[e.camel]=t}else this.el.style[e.camel]=""}},Da="http://www.w3.org/1999/xlink",Ta=/^xlink:/,Sa=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,ja=/^(?:value|checked|selected|muted)$/,Ha=/^(?:draggable|contenteditable|spellcheck)$/,Aa={
value:"_value","true-value":"_trueValue","false-value":"_falseValue"},Pa={priority:ta,bind:function(){var e=this.arg,t=this.el.tagName;e||(this.deep=!0);var n=this.descriptor,r=n.interp;if(r){n.hasOneTime&&(this.expression=J(r,this._scope||this.vm)),(Sa.test(e)||"name"===e&&("PARTIAL"===t||"SLOT"===t))&&(this.el.removeAttribute(e),this.invalid=!0)}},update:function(e){if(!this.invalid){var t=this.arg;this.arg?this.handleSingle(t,e):this.handleObject(e||{})}},handleObject:wa.handleObject,handleSingle:function(e,t){var n=this.el,r=this.descriptor.interp;if(this.modifiers.camel&&(e=h(e)),!r&&ja.test(e)&&e in n){var i="value"===e&&null==t?"":t;n[e]!==i&&(n[e]=i)}var a=Aa[e];if(!r&&a){n[a]=t;var o=n.__v_model;o&&o.listener()}return"value"===e&&"TEXTAREA"===n.tagName?void n.removeAttribute(e):void(Ha.test(e)?n.setAttribute(e,t?"true":"false"):null!=t&&t!==!1?"class"===e?(n.__v_trans&&(t+=" "+n.__v_trans.id+"-transition"),he(n,t)):Ta.test(e)?n.setAttributeNS(Da,e,t===!0?"":t):n.setAttribute(e,t===!0?"":t):n.removeAttribute(e))}},Ca={priority:ra,bind:function(){if(this.arg){var e=this.id=h(this.arg),t=(this._scope||this.vm).$els;a(t,e)?t[e]=this.el:ze(t,e,this.el)}},unbind:function(){var e=(this._scope||this.vm).$els;e[this.id]===this.el&&(e[this.id]=null)}},Oa={bind:function(){}},Fa={bind:function(){var e=this.el;this.vm.$once("pre-hook:compiled",function(){e.removeAttribute("v-cloak")})}},Wa={text:Ri,html:Zi,for:la,if:ca,show:ha,model:va,on:Ma,bind:Pa,el:Ca,ref:Oa,cloak:Fa},Ia={deep:!0,update:function(e){e?"string"==typeof e?this.setClass(e.trim().split(/\s+/)):this.setClass(Ct(e)):this.cleanup()},setClass:function(e){this.cleanup(e);for(var t=0,n=e.length;t<n;t++){var r=e[t];r&&Ot(this.el,r,_e)}this.prevKeys=e},cleanup:function(e){var t=this.prevKeys;if(t)for(var n=t.length;n--;){var r=t[n];(!e||e.indexOf(r)<0)&&Ot(this.el,r,fe)}}},Ea={priority:ia,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=me(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=ye("v-component"),ue(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+f(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(e){this.literal||this.setComponent(e)},setComponent:function(e,t){if(this.invalidatePending(),e){var n=this;this.resolveComponent(e,function(){n.mountComponent(t)})}else this.unbuild(!0),this.remove(this.childVM,t),this.childVM=null},resolveComponent:function(e,t){var n=this;this.pendingComponentCb=Y(function(r){n.ComponentName=r.options.name||("string"==typeof e?e:null),n.Component=r,t()}),this.vm._resolveComponent(e,this.pendingComponentCb)},mountComponent:function(e){this.unbuild(!0);var t=this,n=this.Component.options.activate,r=this.getCached(),i=this.build();n&&!r?(this.waitingFor=i,Ft(n,i,function(){t.waitingFor===i&&(t.waitingFor=null,t.transition(i,e))})):(r&&i._updateRef(),this.transition(i,e))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(e){var t=this.getCached();if(t)return t;if(this.Component){var n={name:this.ComponentName,el:ht(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};e&&v(n,e);var r=new this.Component(n);return this.keepAlive&&(this.cache[this.Component.cid]=r),r}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(e){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var t=this.childVM;return!t||this.keepAlive?void(t&&(t._inactive=!0,t._updateRef(!0))):void t.$destroy(!1,e)},remove:function(e,t){var n=this.keepAlive;if(e){this.pendingRemovals++,this.pendingRemovalCb=t;var r=this;e.$remove(function(){r.pendingRemovals--,n||e._cleanup(),!r.pendingRemovals&&r.pendingRemovalCb&&(r.pendingRemovalCb(),r.pendingRemovalCb=null)})}else t&&t()},transition:function(e,t){var n=this,r=this.childVM;switch(r&&(r._inactive=!0),e._inactive=!1,this.childVM=e,n.params.transitionMode){case"in-out":e.$before(n.anchor,function(){n.remove(r,t)});break;case"out-in":n.remove(r,function(){e.$before(n.anchor,t)});break;default:n.remove(r),e.$before(n.anchor,t)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var e in this.cache)this.cache[e].$destroy();this.cache=null}}},za=Vr._propBindingModes,Ra={},Na=/^[$_a-zA-Z]+[\w$]*$/,Va=Vr._propBindingModes,Ba={bind:function(){var e=this.vm,t=e._context,n=this.descriptor.prop,r=n.path,i=n.parentPath,a=n.mode===Va.TWO_WAY,o=this.parentWatcher=new st(t,i,function(t){Rt(e,n,t)},{twoWay:a,filters:n.filters,scope:this._scope});if(zt(e,n,o.value),a){var s=this;e.$once("pre-hook:created",function(){s.childWatcher=new st(e,r,function(e){o.set(e)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},$a=[],Ja=!1,Ua="transition",qa="animation",Ga=or+"Duration",Ka=ur+"Duration",Za=Xn&&window.requestAnimationFrame,Qa=Za?function(e){Za(function(){Za(e)})}:function(e){setTimeout(e,50)},Xa=qt.prototype;Xa.enter=function(e,t){this.cancelPending(),this.callHook("beforeEnter"),this.cb=t,_e(this.el,this.enterClass),e(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,Jt(this.enterNextTick))},Xa.enterNextTick=function(){var e=this;this.justEntered=!0,Qa(function(){e.justEntered=!1});var t=this.enterDone,n=this.getCssTransitionType(this.enterClass);this.pendingJsCb?n===Ua&&fe(this.el,this.enterClass):n===Ua?(fe(this.el,this.enterClass),this.setupCssCb(sr,t)):n===qa?this.setupCssCb(dr,t):t()},Xa.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,fe(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Xa.leave=function(e,t){this.cancelPending(),this.callHook("beforeLeave"),this.op=e,this.cb=t,_e(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():Jt(this.leaveNextTick)))},Xa.leaveNextTick=function(){var e=this.getCssTransitionType(this.leaveClass);if(e){var t=e===Ua?sr:dr;this.setupCssCb(t,this.leaveDone)}else this.leaveDone()},Xa.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),fe(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Xa.cancelPending=function(){this.op=this.cb=null;var e=!1;this.pendingCssCb&&(e=!0,le(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(e=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),e&&(fe(this.el,this.enterClass),fe(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Xa.callHook=function(e){this.hooks&&this.hooks[e]&&this.hooks[e].call(this.vm,this.el)},Xa.callHookWithCb=function(e){var t=this.hooks&&this.hooks[e];t&&(t.length>1&&(this.pendingJsCb=Y(this[e+"Done"])),t.call(this.vm,this.el,this.pendingJsCb))},Xa.getCssTransitionType=function(e){if(!(!sr||document.hidden||this.hooks&&this.hooks.css===!1||Gt(this.el))){var t=this.type||this.typeCache[e];if(t)return t;var n=this.el.style,r=window.getComputedStyle(this.el),i=n[Ga]||r[Ga];if(i&&"0s"!==i)t=Ua;else{var a=n[Ka]||r[Ka];a&&"0s"!==a&&(t=qa)}return t&&(this.typeCache[e]=t),t}},Xa.setupCssCb=function(e,t){this.pendingCssEvent=e;var n=this,r=this.el,i=this.pendingCssCb=function(a){a.target===r&&(le(r,e,i),n.pendingCssEvent=n.pendingCssCb=null,!n.pendingJsCb&&t&&t())};de(r,e,i)};var eo={priority:na,update:function(e,t){var n=this.el,r=Pe(this.vm.$options,"transitions",e);e=e||"v",t=t||"v",n.__v_trans=new qt(n,e,r,this.vm),fe(n,t+"-transition"),_e(n,e+"-transition")}},to={style:wa,class:Ia,component:Ea,prop:Ba,transition:eo},no=/^v-bind:|^:/,ro=/^v-on:|^@/,io=/^v-([^:]+)(?:$|:(.*)$)/,ao=/\.[^\.]+/g,oo=/^(v-bind:|:)?transition$/,so=1e3,uo=2e3;mn.terminal=!0;var lo=/[^\w\-:\.]/,co=Object.freeze({compile:Kt,compileAndLinkProps:tn,compileRoot:nn,transclude:Ln,resolveSlots:wn}),ho=/^v-on:|^@/;Hn.prototype._bind=function(){var e=this.name,t=this.descriptor;if(("cloak"!==e||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var n=t.attr||"v-"+e;this.el.removeAttribute(n)}var r=t.def;if("function"==typeof r?this.update=r:v(this,r),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(t.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var i=this;this.update?this._update=function(e,t){i._locked||i.update(e,t)}:this._update=jn;var a=this._preProcess?p(this._preProcess,this):null,o=this._postProcess?p(this._postProcess,this):null,s=this._watcher=new st(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:a,postProcess:o,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(s.value)}},Hn.prototype._setupParams=function(){if(this.params){var e=this.params;this.params=Object.create(null);for(var t,n,r,i=e.length;i--;)t=f(e[i]),r=h(t),n=ne(this.el,t),null!=n?this._setupParamWatcher(r,n):(n=te(this.el,t),null!=n&&(this.params[r]=""===n||n))}},Hn.prototype._setupParamWatcher=function(e,t){var n=this,r=!1,i=(this._scope||this.vm).$watch(t,function(t,i){if(n.params[e]=t,r){var a=n.paramWatchers&&n.paramWatchers[e];a&&a.call(n,t,i)}else r=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(i)},Hn.prototype._checkStatement=function(){var e=this.expression;if(e&&this.acceptStatement&&!nt(e)){var t=tt(e).get,n=this._scope||this.vm,r=function(e){n.$event=e,t.call(n,n),n.$event=null};return this.filters&&(r=n._applyFilters(r,null,this.filters)),this.update(r),!0}},Hn.prototype.set=function(e){this.twoWay&&this._withLock(function(){this._watcher.set(e)})},Hn.prototype._withLock=function(e){var t=this;t._locked=!0,e.call(t),hr(function(){t._locked=!1})},Hn.prototype.on=function(e,t,n){de(this.el,e,t,n),(this._listeners||(this._listeners=[])).push([e,t])},Hn.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var e,t=this._listeners;if(t)for(e=t.length;e--;)le(this.el,t[e][0],t[e][1]);var n=this._paramUnwatchFns;if(n)for(e=n.length;e--;)n[e]();this.vm=this.el=this._watcher=this._listeners=null}};var _o=/[^|]\|[^|]/;Re(In),Tn(In),Sn(In),An(In),Pn(In),Cn(In),On(In),Fn(In),Wn(In);var fo={priority:ua,params:["name"],bind:function(){var e=this.params.name||"default",t=this.vm._slotContents&&this.vm._slotContents[e];t&&t.hasChildNodes()?this.compile(t.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(e,t,n){if(e&&t){if(this.el.hasChildNodes()&&1===e.childNodes.length&&1===e.childNodes[0].nodeType&&e.childNodes[0].hasAttribute("v-if")){var r=document.createElement("template");r.setAttribute("v-else",""),r.innerHTML=this.el.innerHTML,r._context=this.vm,e.appendChild(r)}var i=n?n._scope:this._scope;this.unlink=t.$compile(e,n,i,this._frag)}e?ue(this.el,e):oe(this.el)},fallback:function(){this.compile(me(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},mo={priority:aa,params:["name"],paramWatchers:{name:function(e){ca.remove.call(this),e&&this.insert(e)}},bind:function(){this.anchor=ye("v-partial"),ue(this.el,this.anchor),this.insert(this.params.name)},insert:function(e){var t=Pe(this.vm.$options,"partials",e,!0);t&&(this.factory=new bt(this.vm,t),ca.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},po={slot:fo,partial:mo},go=la._postProcess,vo=/(\d{3})(?=\d)/g,yo={orderBy:Rn,filterBy:zn,limitBy:En,json:{read:function(e,t){return"string"==typeof e?e:JSON.stringify(e,null,arguments.length>1?t:2)},write:function(e){try{return JSON.parse(e)}catch(t){return e}}},capitalize:function(e){return e||0===e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""},uppercase:function(e){return e||0===e?e.toString().toUpperCase():""},lowercase:function(e){return e||0===e?e.toString().toLowerCase():""},currency:function(e,t,n){if(e=parseFloat(e),!isFinite(e)||!e&&0!==e)return"";t=null!=t?t:"$",n=null!=n?n:2;var r=Math.abs(e).toFixed(n),i=n?r.slice(0,-1-n):r,a=i.length%3,o=a>0?i.slice(0,a)+(i.length>3?",":""):"",s=n?r.slice(-1-n):"",u=e<0?"-":"";return u+t+o+i.slice(a).replace(vo,"$1,")+s},pluralize:function(e){var t=g(arguments,1),n=t.length;if(n>1){var r=e%10-1;return r in t?t[r]:t[n-1]}return t[0]+(1===e?"":"s")},debounce:function(e,t){if(e)return t||(t=300),L(e,t)}};Vn(In),In.version="1.0.28",setTimeout(function(){Vr.devtools&&er&&er.emit("init",In)},0),e.exports=In},function(e,t,n){function r(e,t){var n=a(e,t);return i(n)?n:void 0}var i=n(281),a=n(318);e.exports=r},function(e,t,n){var r=n(2),i=r.Symbol;e.exports=i},function(e,t,n){function r(e){return null==e?void 0===e?u:s:d&&d in Object(e)?a(e):o(e)}var i=n(10),a=n(317),o=n(349),s="[object Null]",u="[object Undefined]",d=i?i.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}e.exports=n},function(e,t,n){function r(e,t,n,r){var o=!n;n||(n={});for(var s=-1,u=t.length;++s<u;){var d=t[s],l=r?r(n[d],e[d],d,n,e):void 0;void 0===l&&(l=e[d]),o?a(n,d,l):i(n,d,l)}return n}var i=n(59),a=n(39);e.exports=r},function(e,t,n){function r(e){if("string"==typeof e||i(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}var i=n(16),a=1/0;e.exports=r},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||a(e)&&i(e)==o}var i=n(11),a=n(7),o="[object Symbol]";e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(334),a=n(335),o=n(336),s=n(337),u=n(338);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},function(e,t,n){function r(e){var t=this.__data__=new i(e);this.size=t.size}var i=n(17),a=n(354),o=n(355),s=n(356),u=n(357),d=n(358);r.prototype.clear=a,r.prototype.delete=o,r.prototype.get=s,r.prototype.has=u,r.prototype.set=d,e.exports=r},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(i(e[n][0],t))return n;return-1}var i=n(15);e.exports=r},function(e,t,n){var r=n(4),i=Object.create,a=function(){function e(){}return function(t){if(!r(t))return{};if(i)return i(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=a},function(e,t,n){function r(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=i(e.prototype),r=e.apply(n,t);return a(r)?r:n}}var i=n(20),a=n(4);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return i(t)?n["string"==typeof t?"string":"hash"]:n.map}var i=n(331);e.exports=r},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t,n){var r=n(9),i=r(Object,"create");e.exports=i},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){var r=n(277),i=n(7),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return i(e)&&o.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},function(e,t,n){function r(e){return null!=e&&a(e.length)&&!i(e)}var i=n(29),a=n(49);e.exports=r},function(e,t,n){(function(e){var r=n(2),i=n(382),a="object"==typeof t&&t&&!t.nodeType&&t,o=a&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===a,u=s?r.Buffer:void 0,d=u?u.isBuffer:void 0,l=d||i;e.exports=l}).call(t,n(32)(e))},function(e,t,n){function r(e){if(!a(e))return!1;var t=i(e);return t==s||t==u||t==o||t==d}var i=n(11),a=n(4),o="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",d="[object Proxy]";e.exports=r},function(e,t,n){function r(e){return o(e)?i(e):a(e)}var i=n(55),a=n(65),o=n(27);e.exports=r},function(e,t,n){function r(e){return o(e)?i(e,!0):a(e)}var i=n(55),a=n(284),o=n(27);e.exports=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){function r(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=o,this.__views__=[]}var i=n(20),a=n(40),o=4294967295;r.prototype=i(a.prototype),r.prototype.constructor=r,e.exports=r},function(e,t,n){var r=n(9),i=n(2),a=r(i,"Map");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(339),a=n(340),o=n(341),s=n(342),u=n(343);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}e.exports=n},function(e,t,n){function r(e,t,n){"__proto__"==t&&i?i(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var i=n(74);e.exports=r},function(e,t){function n(){}e.exports=n},function(e,t,n){function r(e){var t=new e.constructor(e.byteLength);return new i(t).set(new i(e)),t}var i=n(53);e.exports=r},function(e,t,n){function r(e,t,n,r,L,k,Y,x){var w=t&p;if(!w&&"function"!=typeof e)throw new TypeError(f);var D=r?r.length:0;if(D||(t&=~(y|M),r=L=void 0),Y=void 0===Y?Y:b(_(Y),0),x=void 0===x?x:_(x),D-=L?L.length:0,t&M){var T=r,S=L;r=L=void 0}var j=w?void 0:d(e),H=[e,t,n,r,L,T,S,k,Y,x];if(j&&l(H,j),e=H[0],t=H[1],n=H[2],r=H[3],L=H[4],x=H[9]=void 0===H[9]?w?0:e.length:b(H[9]-D,0),!x&&t&(g|v)&&(t&=~(g|v)),t&&t!=m)A=t==g||t==v?o(e,t,x):t!=y&&t!=(m|y)||L.length?s.apply(void 0,H):u(e,t,n,r);else var A=a(e,t,n);var P=j?i:c;return h(P(A,H),e,t)}var i=n(66),a=n(308),o=n(309),s=n(72),u=n(310),d=n(78),l=n(345),c=n(89),h=n(91),_=n(97),f="Expected a function",m=1,p=2,g=8,v=16,y=32,M=64,b=Math.max;e.exports=r},function(e,t,n){var r=n(87),i=r(Object.getPrototypeOf,Object);e.exports=i},function(e,t,n){var r=n(268),i=n(96),a=Object.prototype,o=a.propertyIsEnumerable,s=Object.getOwnPropertySymbols,u=s?function(e){return null==e?[]:(e=Object(e),r(s(e),function(t){return o.call(e,t)}))}:i;e.exports=u},function(e,t,n){function r(e,t){if(i(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}var i=n(3),a=n(16),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=r},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t){function n(e,t){for(var n=-1,i=e.length,a=0,o=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,o[a++]=n)}return o}var r="__lodash_placeholder__";e.exports=n},function(e,t,n){var r=n(292),i=n(92),a=i(r);e.exports=a},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t,n){var r=n(282),i=n(295),a=n(348),o=a&&a.isTypedArray,s=o?i(o):r;e.exports=s},function(e,t,n){var r=n(259),i=n(257),a=function(e){if(e instanceof a)return e;if(!(this instanceof a))return new a(e);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var t;"string"==typeof e?(t=i.getRgba(e),t?this.setValues("rgb",t):(t=i.getHsla(e))?this.setValues("hsl",t):(t=i.getHwb(e))&&this.setValues("hwb",t)):"object"==typeof e&&(t=e,void 0!==t.r||void 0!==t.red?this.setValues("rgb",t):void 0!==t.l||void 0!==t.lightness?this.setValues("hsl",t):void 0!==t.v||void 0!==t.value?this.setValues("hsv",t):void 0!==t.w||void 0!==t.whiteness?this.setValues("hwb",t):void 0===t.c&&void 0===t.cyan||this.setValues("cmyk",t))};a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var e=this.values;return 1!==e.alpha?e.hwb.concat([e.alpha]):e.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var e=this.values;return e.rgb.concat([e.alpha])},hslaArray:function(){var e=this.values;return e.hsl.concat([e.alpha])},alpha:function(e){return void 0===e?this.values.alpha:(this.setValues("alpha",e),this)},red:function(e){return this.setChannel("rgb",0,e)},green:function(e){return this.setChannel("rgb",1,e)},blue:function(e){return this.setChannel("rgb",2,e)},hue:function(e){return e&&(e%=360,e=e<0?360+e:e),this.setChannel("hsl",0,e)},saturation:function(e){return this.setChannel("hsl",1,e)},lightness:function(e){return this.setChannel("hsl",2,e)},saturationv:function(e){return this.setChannel("hsv",1,e)},whiteness:function(e){return this.setChannel("hwb",1,e)},blackness:function(e){return this.setChannel("hwb",2,e)},value:function(e){return this.setChannel("hsv",2,e)},cyan:function(e){return this.setChannel("cmyk",0,e)},magenta:function(e){return this.setChannel("cmyk",1,e)},yellow:function(e){return this.setChannel("cmyk",2,e)},black:function(e){return this.setChannel("cmyk",3,e)},hexString:function(){return i.hexString(this.values.rgb)},rgbString:function(){return i.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return i.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return i.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return i.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return i.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return i.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return i.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var e=this.values.rgb;return e[0]<<16|e[1]<<8|e[2]},luminosity:function(){for(var e=this.values.rgb,t=[],n=0;n<e.length;n++){var r=e[n]/255;t[n]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){var t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},dark:function(){var e=this.values.rgb,t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128},light:function(){return!this.dark()},negate:function(){for(var e=[],t=0;t<3;t++)e[t]=255-this.values.rgb[t];return this.setValues("rgb",e),this},lighten:function(e){var t=this.values.hsl;return t[2]+=t[2]*e,this.setValues("hsl",t),this},darken:function(e){var t=this.values.hsl;return t[2]-=t[2]*e,this.setValues("hsl",t),this},saturate:function(e){var t=this.values.hsl;return t[1]+=t[1]*e,this.setValues("hsl",t),this},desaturate:function(e){var t=this.values.hsl;return t[1]-=t[1]*e,this.setValues("hsl",t),this},whiten:function(e){var t=this.values.hwb;return t[1]+=t[1]*e,this.setValues("hwb",t),this},blacken:function(e){var t=this.values.hwb;return t[2]+=t[2]*e,this.setValues("hwb",t),this},greyscale:function(){var e=this.values.rgb,t=.3*e[0]+.59*e[1]+.11*e[2];return this.setValues("rgb",[t,t,t]),this},clearer:function(e){var t=this.values.alpha;return this.setValues("alpha",t-t*e),this},opaquer:function(e){var t=this.values.alpha;return this.setValues("alpha",t+t*e),this},rotate:function(e){var t=this.values.hsl,n=(t[0]+e)%360;return t[0]=n<0?360+n:n,this.setValues("hsl",t),this},mix:function(e,t){var n=this,r=e,i=void 0===t?.5:t,a=2*i-1,o=n.alpha()-r.alpha(),s=((a*o===-1?a:(a+o)/(1+a*o))+1)/2,u=1-s;return this.rgb(s*n.red()+u*r.red(),s*n.green()+u*r.green(),s*n.blue()+u*r.blue()).alpha(n.alpha()*i+r.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var e,t,n=new a,r=this.values,i=n.values;for(var o in r)r.hasOwnProperty(o)&&(e=r[o],t={}.toString.call(e),"[object Array]"===t?i[o]=e.slice(0):"[object Number]"===t?i[o]=e:console.error("unexpected color value:",e));return n}},a.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(e){for(var t=this.values,n={},r=0;r<e.length;r++)n[e.charAt(r)]=t[e][r];return 1!==t.alpha&&(n.a=t.alpha),n},a.prototype.setValues=function(e,t){var n,i=this.values,a=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===e)s=t;else if(t.length)i[e]=t.slice(0,e.length),s=t[e.length];else if(void 0!==t[e.charAt(0)]){for(n=0;n<e.length;n++)i[e][n]=t[e.charAt(n)];s=t.a}else if(void 0!==t[a[e][0]]){var u=a[e];for(n=0;n<e.length;n++)i[e][n]=t[u[n]];s=t.alpha}if(i.alpha=Math.max(0,Math.min(1,void 0===s?i.alpha:s)),"alpha"===e)return!1;var d;for(n=0;n<e.length;n++)d=Math.max(0,Math.min(o[e][n],i[e][n])),i[e][n]=Math.round(d);for(var l in a)l!==e&&(i[l]=r[e][l](i[e]));return!0},a.prototype.setSpace=function(e,t){var n=t[0];return void 0===n?this.getValues(e):("number"==typeof n&&(n=Array.prototype.slice.call(t)),this.setValues(e,n),this)},a.prototype.setChannel=function(e,t,n){var r=this.values[e];return void 0===n?r[t]:n===r[t]?this:(r[t]=n,this.setValues(e,r),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},function(e,t,n){function r(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}var i=n(20),a=n(40);r.prototype=i(a.prototype),r.prototype.constructor=r,e.exports=r},function(e,t,n){var r=n(2),i=r.Uint8Array;e.exports=i},function(e,t,n){var r=n(9),i=n(2),a=r(i,"WeakMap");e.exports=a},function(e,t,n){function r(e,t){var n=o(e),r=!n&&a(e),l=!n&&!r&&s(e),h=!n&&!r&&!l&&d(e),_=n||r||l||h,f=_?i(e.length,String):[],m=f.length;for(var p in e)!t&&!c.call(e,p)||_&&("length"==p||l&&("offset"==p||"parent"==p)||h&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||u(p,m))||f.push(p);return f}var i=n(293),a=n(26),o=n(3),s=n(28),u=n(23),d=n(50),l=Object.prototype,c=l.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}e.exports=n},function(e,t){function n(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}e.exports=n},function(e,t,n){function r(e,t,n){(void 0===n||a(e[t],n))&&(void 0!==n||t in e)||i(e,t,n)}var i=n(39),a=n(15);e.exports=r},function(e,t,n){function r(e,t,n){var r=e[t];s.call(e,t)&&a(r,n)&&(void 0!==n||t in e)||i(e,t,n)}var i=n(39),a=n(15),o=Object.prototype,s=o.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){return e&&i(t,a(t),e)}var i=n(13),a=n(30);e.exports=r},function(e,t,n){function r(e,t,n,D,T,S){var j,P=t&k,C=t&Y,F=t&x;if(n&&(j=T?n(e,D,T,S):n(e)),void 0!==j)return j;if(!b(e))return e;var W=y(e);if(W){if(j=p(e),!P)return l(e,j)}else{var I=m(e),E=I==H||I==A;if(M(e))return d(e,P);if(I==O||I==w||E&&!T){if(j=C||E?{}:v(e),!P)return C?h(e,u(j,e)):c(e,s(j,e))}else{if(!Q[I])return T?e:{};j=g(e,I,r,P)}}S||(S=new i);var z=S.get(e);if(z)return z;S.set(e,j);var R=F?C?f:_:C?keysIn:L,N=W?void 0:R(e);return a(N||e,function(i,a){N&&(a=i,i=e[a]),o(j,a,r(i,t,n,a,e,S))}),j}var i=n(18),a=n(37),o=n(59),s=n(60),u=n(271),d=n(68),l=n(12),c=n(302),h=n(303),_=n(77),f=n(314),m=n(81),p=n(326),g=n(327),v=n(82),y=n(3),M=n(28),b=n(4),L=n(30),k=1,Y=2,x=4,w="[object Arguments]",D="[object Array]",T="[object Boolean]",S="[object Date]",j="[object Error]",H="[object Function]",A="[object GeneratorFunction]",P="[object Map]",C="[object Number]",O="[object Object]",F="[object RegExp]",W="[object Set]",I="[object String]",E="[object Symbol]",z="[object WeakMap]",R="[object ArrayBuffer]",N="[object DataView]",V="[object Float32Array]",B="[object Float64Array]",$="[object Int8Array]",J="[object Int16Array]",U="[object Int32Array]",q="[object Uint8Array]",G="[object Uint8ClampedArray]",K="[object Uint16Array]",Z="[object Uint32Array]",Q={};Q[w]=Q[D]=Q[R]=Q[N]=Q[T]=Q[S]=Q[V]=Q[B]=Q[$]=Q[J]=Q[U]=Q[P]=Q[C]=Q[O]=Q[F]=Q[W]=Q[I]=Q[E]=Q[q]=Q[G]=Q[K]=Q[Z]=!0,Q[j]=Q[H]=Q[z]=!1,e.exports=r},function(e,t,n){function r(e,t){t=i(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[a(t[n++])];return n&&n==r?e:void 0}var i=n(67),a=n(14);e.exports=r},function(e,t,n){function r(e,t,n){var r=t(e);return a(e)?r:i(r,n(e))}var i=n(38),a=n(3);e.exports=r},function(e,t,n){function r(e,t,n,o,s){return e===t||(null==e||null==t||!a(e)&&!a(t)?e!==e&&t!==t:i(e,t,n,o,r,s))}var i=n(278),a=n(7);e.exports=r},function(e,t,n){function r(e){if(!i(e))return a(e);var t=[];for(var n in Object(e))s.call(e,n)&&"constructor"!=n&&t.push(n);return t}var i=n(46),a=n(346),o=Object.prototype,s=o.hasOwnProperty;e.exports=r},function(e,t,n){var r=n(25),i=n(86),a=i?function(e,t){return i.set(e,t),e}:r;e.exports=a},function(e,t,n){function r(e,t){return i(e)?e:a(e,t)?[e]:o(s(e))}var i=n(3),a=n(45),o=n(93),s=n(98);e.exports=r},function(e,t,n){(function(e){function r(e,t){if(t)return e.slice();var n=e.length,r=d?d(n):new e.constructor(n);return e.copy(r),r}var i=n(2),a="object"==typeof t&&t&&!t.nodeType&&t,o=a&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===a,u=s?i.Buffer:void 0,d=u?u.allocUnsafe:void 0;e.exports=r}).call(t,n(32)(e))},function(e,t,n){function r(e,t){var n=t?i(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var i=n(41);e.exports=r},function(e,t){function n(e,t,n,i){for(var a=-1,o=e.length,s=n.length,u=-1,d=t.length,l=r(o-s,0),c=Array(d+l),h=!i;++u<d;)c[u]=t[u];for(;++a<s;)(h||a<o)&&(c[n[a]]=e[a]);for(;l--;)c[u++]=e[a++];return c}var r=Math.max;e.exports=n},function(e,t){function n(e,t,n,i){for(var a=-1,o=e.length,s=-1,u=n.length,d=-1,l=t.length,c=r(o-u,0),h=Array(c+l),_=!i;++a<c;)h[a]=e[a];for(var f=a;++d<l;)h[f+d]=t[d];for(;++s<u;)(_||a<o)&&(h[f+n[s]]=e[a++]);return h}var r=Math.max;e.exports=n},function(e,t,n){function r(e,t,n,y,M,b,L,k,Y,x){function w(){for(var _=arguments.length,f=Array(_),m=_;m--;)f[m]=arguments[m];if(j)var p=d(w),g=o(f,p);if(y&&(f=i(f,y,M,j)),b&&(f=a(f,b,L,j)),_-=g,j&&_<x){var v=c(f,p);return u(e,t,r,w.placeholder,n,f,v,k,Y,x-_)}var P=T?n:this,C=S?P[e]:e;return _=f.length,k?f=l(f,k):H&&_>1&&f.reverse(),D&&Y<_&&(f.length=Y),this&&this!==h&&this instanceof w&&(C=A||s(C)),C.apply(P,f)}var D=t&g,T=t&_,S=t&f,j=t&(m|p),H=t&v,A=S?void 0:s(e);return w}var i=n(70),a=n(71),o=n(305),s=n(21),u=n(73),d=n(79),l=n(351),c=n(47),h=n(2),_=1,f=2,m=8,p=16,g=128,v=512;e.exports=r},function(e,t,n){function r(e,t,n,r,_,f,m,p,g,v){var y=t&l,M=y?m:void 0,b=y?void 0:m,L=y?f:void 0,k=y?void 0:f;t|=y?c:h,t&=~(y?h:c),t&d||(t&=~(s|u));var Y=[e,t,_,L,M,k,b,p,g,v],x=n.apply(void 0,Y);return i(e)&&a(x,Y),x.placeholder=r,o(x,e,t)}var i=n(332),a=n(89),o=n(91),s=1,u=2,d=4,l=8,c=32,h=64;e.exports=r},function(e,t,n){var r=n(9),i=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t,n){function r(e,t,n,r,d,l){var c=n&s,h=e.length,_=t.length;
if(h!=_&&!(c&&_>h))return!1;var f=l.get(e);if(f&&l.get(t))return f==t;var m=-1,p=!0,g=n&u?new i:void 0;for(l.set(e,t),l.set(t,e);++m<h;){var v=e[m],y=t[m];if(r)var M=c?r(y,v,m,t,e,l):r(v,y,m,e,t,l);if(void 0!==M){if(M)continue;p=!1;break}if(g){if(!a(t,function(e,t){if(!o(g,t)&&(v===e||d(v,e,n,r,l)))return g.push(t)})){p=!1;break}}else if(v!==y&&!d(v,y,n,r,l)){p=!1;break}}return l.delete(e),l.delete(t),p}var i=n(265),a=n(270),o=n(296),s=1,u=2;e.exports=r},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function r(e){return i(e,o,a)}var i=n(63),a=n(44),o=n(30);e.exports=r},function(e,t,n){var r=n(86),i=n(379),a=r?function(e){return r.get(e)}:i;e.exports=a},function(e,t){function n(e){var t=e;return t.placeholder}e.exports=n},function(e,t,n){var r=n(38),i=n(43),a=n(44),o=n(96),s=Object.getOwnPropertySymbols,u=s?function(e){for(var t=[];e;)r(t,a(e)),e=i(e);return t}:o;e.exports=u},function(e,t,n){var r=n(261),i=n(34),a=n(263),o=n(264),s=n(54),u=n(11),d=n(94),l="[object Map]",c="[object Object]",h="[object Promise]",_="[object Set]",f="[object WeakMap]",m="[object DataView]",p=d(r),g=d(i),v=d(a),y=d(o),M=d(s),b=u;(r&&b(new r(new ArrayBuffer(1)))!=m||i&&b(new i)!=l||a&&b(a.resolve())!=h||o&&b(new o)!=_||s&&b(new s)!=f)&&(b=function(e){var t=u(e),n=t==c?e.constructor:void 0,r=n?d(n):"";if(r)switch(r){case p:return m;case g:return l;case v:return h;case y:return _;case M:return f}return t}),e.exports=b},function(e,t,n){function r(e){return"function"!=typeof e.constructor||o(e)?{}:i(a(e))}var i=n(20),a=n(43),o=n(46);e.exports=r},function(e,t,n){function r(e){return e===e&&!i(e)}var i=n(4);e.exports=r},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}e.exports=n},function(e,t){function n(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}e.exports=n},function(e,t,n){var r=n(54),i=r&&new r;e.exports=i},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=a(r.length-t,0),u=Array(s);++o<s;)u[o]=r[t+o];o=-1;for(var d=Array(t+1);++o<t;)d[o]=r[o];return d[t]=n(u),i(e,this,d)}}var i=n(36),a=Math.max;e.exports=r},function(e,t,n){var r=n(66),i=n(92),a=i(r);e.exports=a},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}e.exports=n},function(e,t,n){function r(e,t,n){var r=t+"";return o(e,a(r,s(i(r),n)))}var i=n(319),a=n(328),o=n(48),s=n(360);e.exports=r},function(e,t){function n(e){var t=0,n=0;return function(){var o=a(),s=i-(o-n);if(n=o,s>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,i=16,a=Date.now;e.exports=n},function(e,t,n){var r=n(344),i=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r(function(e){var t=[];return i.test(e)&&t.push(""),e.replace(a,function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)}),t});e.exports=s},function(e,t){function n(e){if(null!=e){try{return i.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,i=r.toString;e.exports=n},function(e,t){e.exports={}},function(e,t){function n(){return[]}e.exports=n},function(e,t,n){function r(e){var t=i(e),n=t%1;return t===t?n?t-n:t:0}var i=n(383);e.exports=r},function(e,t,n){function r(e){return null==e?"":i(e)}var i=n(294);e.exports=r},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(e){return function(t,i,a,o){var s=n(t),u=r[e][n(t)];return 2===s&&(u=u[i?0:1]),u.replace(/%d/i,t)}},a=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],o=e.defineLocale("ar-ly",{months:a,monthsShort:a,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}});return o})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},i={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(e){return function(t,n,a,o){var s=r(t),u=i[e][r(t)];return 2===s&&(u=u[n?0:1]),u.replace(/%d/i,t)}},o=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],s=e.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}});return s})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},n=e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var n=e%10,r=e%100-n,i=e>=100?100:null;return e+(t[n]||t[r]||t[i])},week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var i={mm:n?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:n?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===r?n?"хвіліна":"хвіліну":"h"===r?n?"гадзіна":"гадзіну":e+" "+t(i[r],+e)}var r=e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:n,mm:n,h:n,hh:n,d:"дзень",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},r=e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e},meridiem:function(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"},r=e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n){var r={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+i(r[n],e)}function n(e){switch(r(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function r(e){return e>9?r(e%10):e}function i(e,t){return 2===t?a(e):e}function a(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}var o=e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:n},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var t=1===e?"añ":"vet";return e+t},week:{dow:1,doy:4}});return o})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}var n=e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){return e>1&&e<5&&1!==~~(e/10)}function n(e,n,r,i){var a=e+" ";switch(r){case"s":return n||i?"pár sekund":"pár sekundami";case"m":return n?"minuta":i?"minutu":"minutou";case"mm":return n||i?a+(t(e)?"minuty":"minut"):a+"minutami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?a+(t(e)?"hodiny":"hodin"):a+"hodinami";case"d":return n||i?"den":"dnem";case"dd":return n||i?a+(t(e)?"dny":"dní"):a+"dny";case"M":return n||i?"měsíc":"měsícem";case"MM":return n||i?a+(t(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return n||i?"rok":"rokem";case"yy":return n||i?a+(t(e)?"roky":"let"):a+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),i="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),a=e.defineLocale("cs",{months:r,monthsShort:i,monthsParse:function(e,t){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(r,i),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(i),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var t=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+t},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t=e,n="",r=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=r[t]),e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],
MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}var n=e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}var n=e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],r=e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,n){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}var n=e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,n){var r=this._calendarEl[e],i=n&&n.hours();return t(r)&&(r=r.apply(n)),r.replace("{}",i%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return/-MMM-/.test(r)?n[e.month()]:t[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return/-MMM-/.test(r)?n[e.month()]:t[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?i[n][2]?i[n][2]:i[n][1]:r?i[n][0]:i[n][1]}var n=e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},r=e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,r,i){var a="";switch(r){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"m":return i?"minuutin":"minuutti";case"mm":a=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":a=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":a=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":a=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":a=i?"vuoden":"vuotta"}return a=n(e,i)+" "+a}function n(e,t){return e<10?t?i[e]:r[e]:e}var r="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),i=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",r[7],r[8],r[9]],a=e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),r=e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,r){return/-MMM-/.test(r)?n[e.month()]:t[e.month()]},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],n=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],r=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],i=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],a=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],o=e.defineLocale("gd",{months:t,monthsShort:n,monthsParseExact:!0,weekdays:r,weekdaysShort:i,weekdaysMin:a,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var t=1===e?"d":e%10===2?"na":"mh";return e+t},week:{dow:1,doy:4}});return o})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10===0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},r=e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात";
},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}var n=e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i=e;switch(n){case"s":return r||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(r||t?" perc":" perce");case"mm":return i+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" óra":" órája");case"hh":return i+(r||t?" óra":" órája");case"d":return"egy"+(r||t?" nap":" napja");case"dd":return i+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hónap":" hónapja");case"MM":return i+(r||t?" hónap":" hónapja");case"y":return"egy"+(r||t?" év":" éve");case"yy":return i+(r||t?" év":" éve")}return""}function n(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "),i=e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?n===!0?"de":"DE":n===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return i})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){return e%100===11||e%10!==1}function n(e,n,r,i){var a=e+" ";switch(r){case"s":return n||i?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?a+(n||i?"mínútur":"mínútum"):n?a+"mínúta":a+"mínútu";case"hh":return t(e)?a+(n||i?"klukkustundir":"klukkustundum"):a+"klukkustund";case"d":return n?"dagur":i?"dag":"degi";case"dd":return t(e)?n?a+"dagar":a+(i?"daga":"dögum"):n?a+"dagur":a+(i?"dag":"degi");case"M":return n?"mánuður":i?"mánuð":"mánuði";case"MM":return t(e)?n?a+"mánuðir":a+(i?"mánuði":"mánuðum"):n?a+"mánuður":a+(i?"mánuð":"mánuði");case"y":return n||i?"ár":"ári";case"yy":return t(e)?a+(n||i?"ár":"árum"):a+(n||i?"ár":"ári")}}var r=e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"},n=e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"},n=e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?i[n][0]:i[n][1]}function n(e){var t=e.substr(0,e.indexOf(" "));return i(t)?"a "+e:"an "+e}function r(e){var t=e.substr(0,e.indexOf(" "));return i(t)?"viru "+e:"virun "+e}function i(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10,n=e/10;return i(0===t?n:t)}if(e<1e4){for(;e>=10;)e/=10;return i(e)}return e/=1e3,i(e)}var a=e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:n,past:r,s:"e puer Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"}function n(e,t,n,r){return t?i(n)[0]:r?i(n)[1]:i(n)[2]}function r(e){return e%10===0||e>10&&e<20}function i(e){return o[e].split("_")}function a(e,t,a,o){var s=e+" ";return 1===e?s+n(e,t,a[0],o):t?s+(r(e)?i(a)[1]:i(a)[0]):o?s+i(a)[1]:s+(r(e)?i(a)[1]:i(a)[2])}var o={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},s=e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:t,m:n,mm:a,h:n,hh:a,d:n,dd:a,M:n,MM:a,y:n,yy:a},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});return s})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n){return n?t%10===1&&t%100!==11?e[2]:e[3]:t%10===1&&t%100!==11?e[0]:e[1]}function n(e,n,r){return e+" "+t(a[r],e,n)}function r(e,n,r){return t(a[r],e,n)}function i(e,t){return t?"dažas sekundes":"dažām sekundēm"}var a={m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")},o=e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:i,m:r,mm:n,h:r,hh:n,d:r,dd:n,M:r,MM:n,y:r,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}},n=e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i="";if(t)switch(n){case"s":i="काही सेकंद";break;case"m":i="एक मिनिट";break;case"mm":i="%d मिनिटे";break;case"h":i="एक तास";break;case"hh":i="%d तास";break;case"d":i="एक दिवस";break;case"dd":i="%d दिवस";break;case"M":i="एक महिना";break;case"MM":i="%d महिने";break;case"y":i="एक वर्ष";break;case"yy":i="%d वर्षे"}else switch(n){case"s":i="काही सेकंदां";break;case"m":i="एका मिनिटा";break;case"mm":i="%d मिनिटां";break;case"h":i="एका तासा";break;case"hh":i="%d तासां";break;case"d":i="एका दिवसा";break;case"dd":i="%d दिवसां";break;case"M":i="एका महिन्या";break;case"MM":i="%d महिन्यां";break;case"y":i="एका वर्षा";break;case"yy":i="%d वर्षां"}return i.replace(/%d/i,e)}var n={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},r={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},i=e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return n[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}});return i})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"},r=e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,doy:4}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},r=e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,a=e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return/-MMM-/.test(r)?n[e.month()]:t[e.month()]},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,a=e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return/-MMM-/.test(r)?n[e.month()]:t[e.month()]},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"},r=e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function n(e,n,r){var i=e+" ";switch(r){case"m":return n?"minuta":"minutę";case"mm":return i+(t(e)?"minuty":"minut");case"h":return n?"godzina":"godzinę";case"hh":return i+(t(e)?"godziny":"godzin");case"MM":return i+(t(e)?"miesiące":"miesięcy");case"yy":return i+(t(e)?"lata":"lat")}}var r="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),a=e.defineLocale("pl",{months:function(e,t){return""===t?"("+i[e.month()]+"|"+r[e.month()]+")":/D MMMM/.test(t)?i[e.month()]:r[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n){var r={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},i=" ";return(e%100>=20||e>=100&&e%100===0)&&(i=" de "),e+i+r[n]}var n=e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var i={mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===r?n?"минута":"минуту":e+" "+t(i[r],+e)}var r=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],i=e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:r,longMonthsParse:r,shortMonthsParse:r,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}});return i})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){return e>1&&e<5}function n(e,n,r,i){var a=e+" ";switch(r){case"s":return n||i?"pár sekúnd":"pár sekundami";case"m":return n?"minúta":i?"minútu":"minútou";case"mm":return n||i?a+(t(e)?"minúty":"minút"):a+"minútami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?a+(t(e)?"hodiny":"hodín"):a+"hodinami";case"d":return n||i?"deň":"dňom";case"dd":return n||i?a+(t(e)?"dni":"dní"):a+"dňami";case"M":return n||i?"mesiac":"mesiacom";case"MM":return n||i?a+(t(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return n||i?"rok":"rokom";case"yy":return n||i?a+(t(e)?"roky":"rokov"):a+"rokmi"}}var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),i="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),a=e.defineLocale("sk",{months:r,monthsShort:i,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return i+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return i+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";case"dd":return i+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return i+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";case"y":return t||r?"eno leto":"enim letom";case"yy":return i+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti"}}var n=e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}},n=e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}},n=e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",
lastWeek:function(){var e=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"},r=e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}});return r})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},ordinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",m:"minutu ida",mm:"minutus %d",h:"horas ida",hh:"horas %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e){var t=e;return t=e.indexOf("jaj")!==-1?t.slice(0,-3)+"leS":e.indexOf("jar")!==-1?t.slice(0,-3)+"waQ":e.indexOf("DIS")!==-1?t.slice(0,-3)+"nem":t+" pIq"}function n(e){var t=e;return t=e.indexOf("jaj")!==-1?t.slice(0,-3)+"Hu’":e.indexOf("jar")!==-1?t.slice(0,-3)+"wen":e.indexOf("DIS")!==-1?t.slice(0,-3)+"ben":t+" ret"}function r(e,t,n,r){var a=i(e);switch(n){case"mm":return a+" tup";case"hh":return a+" rep";case"dd":return a+" jaj";case"MM":return a+" jar";case"yy":return a+" DIS"}}function i(e){var t=Math.floor(e%1e3/100),n=Math.floor(e%100/10),r=e%10,i="";return t>0&&(i+=a[t]+"vatlh"),n>0&&(i+=(""!==i?" ":"")+a[n]+"maH"),r>0&&(i+=(""!==i?" ":"")+a[r]),""===i?"pagh":i}var a="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),o=e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:t,past:n,s:"puS lup",m:"wa’ tup",mm:r,h:"wa’ rep",hh:r,d:"wa’ jaj",dd:r,M:"wa’ jar",MM:r,y:"wa’ DIS",yy:r},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"},n=e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var n=e%10,r=e%100-n,i=e>=100?100:null;return e+(t[n]||t[r]||t[i])},week:{dow:1,doy:7}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t,n,r){var i={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",""+e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",""+e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return r?i[n][0]:t?i[n][0]:i[n][1]}var n=e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return n})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,r){var i={mm:n?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:n?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===r?n?"хвилина":"хвилину":"h"===r?n?"година":"годину":e+" "+t(i[r],+e)}function r(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},r=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative";return n[r][e.day()]}function i(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}var a=e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:r,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:i("[Сьогодні "),nextDay:i("[Завтра "),lastDay:i("[Вчора "),nextWeek:i("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return i("[Минулої] dddd [").call(this);case 1:case 2:case 4:return i("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:n,mm:n,h:"годину",hh:n,d:"день",dd:n,M:"місяць",MM:n,y:"рік",yy:n},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}});return a})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},ordinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var t,n;return t=e().startOf("week"),n=this.diff(t,"days")>=7?"[下]":"[本]",0===this.minutes()?n+"dddAh点整":n+"dddAh点mm"},lastWeek:function(){var t,n;return t=e().startOf("week"),n=this.unix()<t.unix()?"[上]":"[本]",0===this.minutes()?n+"dddAh点整":n+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});return t})},function(e,t,n){!function(e,t){t(n(1))}(this,function(e){"use strict";var t=e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});return t})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width="{{width}}" height="{{height}}" v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"bar-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1},categoryPercentage:.5,barPercentage:.2}]}}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"bar",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"bubble-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"bubble",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"doughnut-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"doughnut",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"line-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"line",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',
props:{chartId:{default:"pie-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"pie",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"polar-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"polarArea",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"radar-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"radar",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=r(i),o=n(6),s=r(o),u=n(5);t.default=a.default.extend({template:'\n    <div>\n      <canvas id="{{chartId}}" width={{width}} height={{height}} v-el:canvas></canvas>\n    </div>\n  ',props:{chartId:{default:"scatter-chart",type:String},width:{default:400,type:Number},height:{default:400,type:Number}},data:function(){return{defaultOptions:{scales:{xAxes:[{type:"linear",position:"bottom"}]}}}},methods:{render:function(e,t){var n=(0,u.mergeOptions)(this.defaultOptions,t);this._chart=new s.default(this.$els.canvas.getContext("2d"),{type:"scatter",data:e,options:n}),this._chart.generateLegend()}},beforeDestroy:function(){this._chart&&this._chart.destroy()}})},function(e,t){"use strict";e.exports=function(e){e.Bar=function(t,n){return n.type="bar",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){e.Bubble=function(t,n){return n.type="bubble",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){e.Doughnut=function(t,n){return n.type="doughnut",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){e.Line=function(t,n){return n.type="line",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){e.PolarArea=function(t,n){return n.type="polarArea",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){e.Radar=function(t,n){return n.type="radar",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){var t={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(e){return"("+e.xLabel+", "+e.yLabel+")"}}}};e.defaults.scatter=t,e.controllers.scatter=e.controllers.line,e.Scatter=function(t,n){return n.type="scatter",new e(t,n)}}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},e.controllers.bar=e.DatasetController.extend({dataElementType:e.elements.Rectangle,initialize:function(){var t,n=this;e.DatasetController.prototype.initialize.apply(n,arguments),t=n.getMeta(),t.stack=n.getDataset().stack,t.bar=!0},update:function(e){var t,n,r=this,i=r.getMeta().data;for(r._ruler=r.getRuler(),t=0,n=i.length;t<n;++t)r.updateElement(i[t],t,e)},updateElement:function(e,n,r){var i=this,a=i.chart,o=i.getMeta(),s=i.getDataset(),u=e.custom||{},d=a.options.elements.rectangle;e._xScale=i.getScaleForId(o.xAxisID),e._yScale=i.getScaleForId(o.yAxisID),e._datasetIndex=i.index,e._index=n,e._model={datasetLabel:s.label,label:a.data.labels[n],borderSkipped:u.borderSkipped?u.borderSkipped:d.borderSkipped,backgroundColor:u.backgroundColor?u.backgroundColor:t.getValueAtIndexOrDefault(s.backgroundColor,n,d.backgroundColor),borderColor:u.borderColor?u.borderColor:t.getValueAtIndexOrDefault(s.borderColor,n,d.borderColor),borderWidth:u.borderWidth?u.borderWidth:t.getValueAtIndexOrDefault(s.borderWidth,n,d.borderWidth)},i.updateElementGeometry(e,n,r),e.pivot()},updateElementGeometry:function(e,t,n){var r=this,i=e._model,a=r.getValueScale(),o=a.getBasePixel(),s=a.isHorizontal(),u=r._ruler||r.getRuler(),d=r.calculateBarValuePixels(r.index,t),l=r.calculateBarIndexPixels(r.index,t,u);i.horizontal=s,i.base=n?o:d.base,i.x=s?n?o:d.head:l.center,i.y=s?l.center:n?o:d.head,i.height=s?l.size:void 0,i.width=s?void 0:l.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(e){var t,n,r=this,i=r.chart,a=r.getIndexScale(),o=a.options.stacked,s=void 0===e?i.data.datasets.length:e+1,u=[];for(t=0;t<s;++t)n=i.getDatasetMeta(t),n.bar&&i.isDatasetVisible(t)&&(o===!1||o===!0&&u.indexOf(n.stack)===-1||void 0===o&&(void 0===n.stack||u.indexOf(n.stack)===-1))&&u.push(n.stack);return u.length},getStackIndex:function(e){return this.getStackCount(e)-1},getRuler:function(){var e=this,n=e.getIndexScale(),r=n.options,i=e.getStackCount(),a=n.isHorizontal()?n.width:n.height,o=a/n.ticks.length,s=o*r.categoryPercentage,u=s/i,d=u*r.barPercentage;return d=Math.min(t.getValueOrDefault(r.barThickness,d),t.getValueOrDefault(r.maxBarThickness,1/0)),{stackCount:i,tickSize:o,categorySize:s,categorySpacing:o-s,fullBarSize:u,barSize:d,barSpacing:u-d,scale:n}},calculateBarValuePixels:function(e,t){var n,r,i,a,o,s,u=this,d=u.chart,l=u.getMeta(),c=u.getValueScale(),h=d.data.datasets,_=Number(h[e].data[t]),f=c.options.stacked,m=l.stack,p=0;if(f||void 0===f&&void 0!==m)for(n=0;n<e;++n)r=d.getDatasetMeta(n),r.bar&&r.stack===m&&r.controller.getValueScaleId()===c.id&&d.isDatasetVisible(n)&&(i=Number(h[n].data[t]),(_<0&&i<0||_>=0&&i>0)&&(p+=i));return a=c.getPixelForValue(p),o=c.getPixelForValue(p+_),s=(o-a)/2,{size:s,base:a,head:o,center:o+s/2}},calculateBarIndexPixels:function(e,t,n){var r=this,i=n.scale,a=r.chart.isCombo,o=r.getStackIndex(e),s=i.getPixelForValue(null,t,e,a),u=n.barSize;return s-=a?n.tickSize/2:0,s+=n.fullBarSize*o,s+=n.categorySpacing/2,s+=n.barSpacing/2,{size:u,base:s,head:s+u,center:s+u/2}},draw:function(){var e,n=this,r=n.chart,i=n.getMeta().data,a=n.getDataset(),o=i.length,s=0;for(t.canvas.clipArea(r.ctx,r.chartArea);s<o;++s)e=a.data[s],null===e||void 0===e||isNaN(e)||i[s].draw();t.canvas.unclipArea(r.ctx)},setHoverStyle:function(e){var n=this.chart.data.datasets[e._datasetIndex],r=e._index,i=e.custom||{},a=e._model;a.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:t.getValueAtIndexOrDefault(n.hoverBackgroundColor,r,t.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor?i.hoverBorderColor:t.getValueAtIndexOrDefault(n.hoverBorderColor,r,t.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:t.getValueAtIndexOrDefault(n.hoverBorderWidth,r,a.borderWidth)},removeHoverStyle:function(e){var n=this.chart.data.datasets[e._datasetIndex],r=e._index,i=e.custom||{},a=e._model,o=this.chart.options.elements.rectangle;a.backgroundColor=i.backgroundColor?i.backgroundColor:t.getValueAtIndexOrDefault(n.backgroundColor,r,o.backgroundColor),a.borderColor=i.borderColor?i.borderColor:t.getValueAtIndexOrDefault(n.borderColor,r,o.borderColor),a.borderWidth=i.borderWidth?i.borderWidth:t.getValueAtIndexOrDefault(n.borderWidth,r,o.borderWidth)}}),e.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(e,t){var n="";return e.length>0&&(e[0].yLabel?n=e[0].yLabel:t.labels.length>0&&e[0].index<t.labels.length&&(n=t.labels[e[0].index])),n},label:function(e,t){var n=t.datasets[e.datasetIndex].label||"";return n+": "+e.xLabel}}}},e.controllers.horizontalBar=e.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(e,t){var n=t.datasets[e.datasetIndex].label||"",r=t.datasets[e.datasetIndex].data[e.index];return n+": ("+e.xLabel+", "+e.yLabel+", "+r.r+")"}}}},e.controllers.bubble=e.DatasetController.extend({dataElementType:e.elements.Point,update:function(e){var n=this,r=n.getMeta(),i=r.data;t.each(i,function(t,r){n.updateElement(t,r,e)})},updateElement:function(n,r,i){var a=this,o=a.getMeta(),s=a.getScaleForId(o.xAxisID),u=a.getScaleForId(o.yAxisID),d=n.custom||{},l=a.getDataset(),c=l.data[r],h=a.chart.options.elements.point,_=a.index;t.extend(n,{_xScale:s,_yScale:u,_datasetIndex:_,_index:r,_model:{x:i?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,r,_,a.chart.isCombo),y:i?u.getBasePixel():u.getPixelForValue(c,r,_),radius:i?0:d.radius?d.radius:a.getRadius(c),hitRadius:d.hitRadius?d.hitRadius:t.getValueAtIndexOrDefault(l.hitRadius,r,h.hitRadius)}}),e.DatasetController.prototype.removeHoverStyle.call(a,n,h);var f=n._model;f.skip=d.skip?d.skip:isNaN(f.x)||isNaN(f.y),n.pivot()},getRadius:function(e){return e.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var r=this;e.DatasetController.prototype.setHoverStyle.call(r,n);var i=r.chart.data.datasets[n._datasetIndex],a=n._index,o=n.custom||{},s=n._model;s.radius=o.hoverRadius?o.hoverRadius:t.getValueAtIndexOrDefault(i.hoverRadius,a,r.chart.options.elements.point.hoverRadius)+r.getRadius(i.data[a])},removeHoverStyle:function(t){var n=this;e.DatasetController.prototype.removeHoverStyle.call(n,t,n.chart.options.elements.point);var r=n.chart.data.datasets[t._datasetIndex].data[t._index],i=t.custom||{},a=t._model;a.radius=i.radius?i.radius:n.getRadius(r)}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n=e.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');var n=e.data,r=n.datasets,i=n.labels;if(r.length)for(var a=0;a<r[0].data.length;++a)t.push('<li><span style="background-color:'+r[0].backgroundColor[a]+'"></span>'),i[a]&&t.push(i[a]),t.push("</li>");return t.push("</ul>"),t.join("")},legend:{labels:{generateLabels:function(e){var n=e.data;return n.labels.length&&n.datasets.length?n.labels.map(function(r,i){var a=e.getDatasetMeta(0),o=n.datasets[0],s=a.data[i],u=s&&s.custom||{},d=t.getValueAtIndexOrDefault,l=e.options.elements.arc,c=u.backgroundColor?u.backgroundColor:d(o.backgroundColor,i,l.backgroundColor),h=u.borderColor?u.borderColor:d(o.borderColor,i,l.borderColor),_=u.borderWidth?u.borderWidth:d(o.borderWidth,i,l.borderWidth);return{text:r,fillStyle:c,strokeStyle:h,lineWidth:_,hidden:isNaN(o.data[i])||a.data[i].hidden,index:i}}):[]}},onClick:function(e,t){var n,r,i,a=t.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)i=o.getDatasetMeta(n),i.data[a]&&(i.data[a].hidden=!i.data[a].hidden);o.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(e,n){var r=n.labels[e.index],i=": "+n.datasets[e.datasetIndex].data[e.index];return t.isArray(r)?(r=r.slice(),r[0]+=i):r+=i,r}}}},n.pie=t.clone(n.doughnut),t.extend(n.pie,{cutoutPercentage:0}),e.controllers.doughnut=e.controllers.pie=e.DatasetController.extend({dataElementType:e.elements.Arc,linkScales:t.noop,getRingIndex:function(e){for(var t=0,n=0;n<e;++n)this.chart.isDatasetVisible(n)&&++t;return t},update:function(e){var n=this,r=n.chart,i=r.chartArea,a=r.options,o=a.elements.arc,s=i.right-i.left-o.borderWidth,u=i.bottom-i.top-o.borderWidth,d=Math.min(s,u),l={x:0,y:0},c=n.getMeta(),h=a.cutoutPercentage,_=a.circumference;if(_<2*Math.PI){var f=a.rotation%(2*Math.PI);f+=2*Math.PI*(f>=Math.PI?-1:f<-Math.PI?1:0);var m=f+_,p={x:Math.cos(f),y:Math.sin(f)},g={x:Math.cos(m),y:Math.sin(m)},v=f<=0&&0<=m||f<=2*Math.PI&&2*Math.PI<=m,y=f<=.5*Math.PI&&.5*Math.PI<=m||f<=2.5*Math.PI&&2.5*Math.PI<=m,M=f<=-Math.PI&&-Math.PI<=m||f<=Math.PI&&Math.PI<=m,b=f<=.5*-Math.PI&&.5*-Math.PI<=m||f<=1.5*Math.PI&&1.5*Math.PI<=m,L=h/100,k={x:M?-1:Math.min(p.x*(p.x<0?1:L),g.x*(g.x<0?1:L)),y:b?-1:Math.min(p.y*(p.y<0?1:L),g.y*(g.y<0?1:L))},Y={x:v?1:Math.max(p.x*(p.x>0?1:L),g.x*(g.x>0?1:L)),y:y?1:Math.max(p.y*(p.y>0?1:L),g.y*(g.y>0?1:L))},x={width:.5*(Y.x-k.x),height:.5*(Y.y-k.y)};d=Math.min(s/x.width,u/x.height),l={x:(Y.x+k.x)*-.5,y:(Y.y+k.y)*-.5}}r.borderWidth=n.getMaxBorderWidth(c.data),r.outerRadius=Math.max((d-r.borderWidth)/2,0),r.innerRadius=Math.max(h?r.outerRadius/100*h:0,0),r.radiusLength=(r.outerRadius-r.innerRadius)/r.getVisibleDatasetCount(),r.offsetX=l.x*r.outerRadius,r.offsetY=l.y*r.outerRadius,c.total=n.calculateTotal(),n.outerRadius=r.outerRadius-r.radiusLength*n.getRingIndex(n.index),n.innerRadius=Math.max(n.outerRadius-r.radiusLength,0),t.each(c.data,function(t,r){n.updateElement(t,r,e)})},updateElement:function(e,n,r){var i=this,a=i.chart,o=a.chartArea,s=a.options,u=s.animation,d=(o.left+o.right)/2,l=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,_=i.getDataset(),f=r&&u.animateRotate?0:e.hidden?0:i.calculateCircumference(_.data[n])*(s.circumference/(2*Math.PI)),m=r&&u.animateScale?0:i.innerRadius,p=r&&u.animateScale?0:i.outerRadius,g=t.getValueAtIndexOrDefault;t.extend(e,{_datasetIndex:i.index,_index:n,_model:{x:d+a.offsetX,y:l+a.offsetY,startAngle:c,endAngle:h,circumference:f,outerRadius:p,innerRadius:m,label:g(_.label,n,a.data.labels[n])}});var v=e._model;this.removeHoverStyle(e),r&&u.animateRotate||(0===n?v.startAngle=s.rotation:v.startAngle=i.getMeta().data[n-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),e.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},calculateTotal:function(){var e,n=this.getDataset(),r=this.getMeta(),i=0;return t.each(r.data,function(t,r){e=n.data[r],isNaN(e)||t.hidden||(i+=Math.abs(e))}),i},calculateCircumference:function(e){var t=this.getMeta().total;return t>0&&!isNaN(e)?2*Math.PI*(e/t):0},getMaxBorderWidth:function(e){for(var t,n,r=0,i=this.index,a=e.length,o=0;o<a;o++)t=e[o]._model?e[o]._model.borderWidth:0,n=e[o]._chart?e[o]._chart.config.data.datasets[i].hoverBorderWidth:0,r=t>r?t:r,r=n>r?n:r;return r}})}},function(e,t){"use strict";e.exports=function(e){function t(e,t){return n.getValueOrDefault(e.showLine,t.showLines)}var n=e.helpers;e.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},e.controllers.line=e.DatasetController.extend({datasetElementType:e.elements.Line,dataElementType:e.elements.Point,update:function(e){var r,i,a,o=this,s=o.getMeta(),u=s.dataset,d=s.data||[],l=o.chart.options,c=l.elements.line,h=o.getScaleForId(s.yAxisID),_=o.getDataset(),f=t(_,l);for(f&&(a=u.custom||{},void 0!==_.tension&&void 0===_.lineTension&&(_.lineTension=_.tension),u._scale=h,u._datasetIndex=o.index,u._children=d,u._model={spanGaps:_.spanGaps?_.spanGaps:l.spanGaps,tension:a.tension?a.tension:n.getValueOrDefault(_.lineTension,c.tension),backgroundColor:a.backgroundColor?a.backgroundColor:_.backgroundColor||c.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:_.borderWidth||c.borderWidth,borderColor:a.borderColor?a.borderColor:_.borderColor||c.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:_.borderCapStyle||c.borderCapStyle,borderDash:a.borderDash?a.borderDash:_.borderDash||c.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:_.borderDashOffset||c.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:_.borderJoinStyle||c.borderJoinStyle,fill:a.fill?a.fill:void 0!==_.fill?_.fill:c.fill,steppedLine:a.steppedLine?a.steppedLine:n.getValueOrDefault(_.steppedLine,c.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:n.getValueOrDefault(_.cubicInterpolationMode,c.cubicInterpolationMode)},u.pivot()),r=0,i=d.length;r<i;++r)o.updateElement(d[r],r,e);for(f&&0!==u._model.tension&&o.updateBezierControlPoints(),r=0,i=d.length;r<i;++r)d[r].pivot()},getPointBackgroundColor:function(e,t){var r=this.chart.options.elements.point.backgroundColor,i=this.getDataset(),a=e.custom||{};return a.backgroundColor?r=a.backgroundColor:i.pointBackgroundColor?r=n.getValueAtIndexOrDefault(i.pointBackgroundColor,t,r):i.backgroundColor&&(r=i.backgroundColor),r},getPointBorderColor:function(e,t){var r=this.chart.options.elements.point.borderColor,i=this.getDataset(),a=e.custom||{};return a.borderColor?r=a.borderColor:i.pointBorderColor?r=n.getValueAtIndexOrDefault(i.pointBorderColor,t,r):i.borderColor&&(r=i.borderColor),r},getPointBorderWidth:function(e,t){var r=this.chart.options.elements.point.borderWidth,i=this.getDataset(),a=e.custom||{};return isNaN(a.borderWidth)?isNaN(i.pointBorderWidth)?isNaN(i.borderWidth)||(r=i.borderWidth):r=n.getValueAtIndexOrDefault(i.pointBorderWidth,t,r):r=a.borderWidth,r},updateElement:function(e,t,r){var i,a,o=this,s=o.getMeta(),u=e.custom||{},d=o.getDataset(),l=o.index,c=d.data[t],h=o.getScaleForId(s.yAxisID),_=o.getScaleForId(s.xAxisID),f=o.chart.options.elements.point,m=o.chart.data.labels||[],p=1===m.length||1===d.data.length||o.chart.isCombo;void 0!==d.radius&&void 0===d.pointRadius&&(d.pointRadius=d.radius),void 0!==d.hitRadius&&void 0===d.pointHitRadius&&(d.pointHitRadius=d.hitRadius),i=_.getPixelForValue("object"==typeof c?c:NaN,t,l,p),a=r?h.getBasePixel():o.calculatePointY(c,t,l),e._xScale=_,e._yScale=h,e._datasetIndex=l,e._index=t,e._model={x:i,y:a,skip:u.skip||isNaN(i)||isNaN(a),radius:u.radius||n.getValueAtIndexOrDefault(d.pointRadius,t,f.radius),pointStyle:u.pointStyle||n.getValueAtIndexOrDefault(d.pointStyle,t,f.pointStyle),backgroundColor:o.getPointBackgroundColor(e,t),borderColor:o.getPointBorderColor(e,t),borderWidth:o.getPointBorderWidth(e,t),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:u.hitRadius||n.getValueAtIndexOrDefault(d.pointHitRadius,t,f.hitRadius)}},calculatePointY:function(e,t,n){var r,i,a,o=this,s=o.chart,u=o.getMeta(),d=o.getScaleForId(u.yAxisID),l=0,c=0;if(d.options.stacked){for(r=0;r<n;r++)if(i=s.data.datasets[r],a=s.getDatasetMeta(r),"line"===a.type&&a.yAxisID===d.id&&s.isDatasetVisible(r)){var h=Number(d.getRightValue(i.data[t]));h<0?c+=h||0:l+=h||0}var _=Number(d.getRightValue(e));return _<0?d.getPixelForValue(c+_):d.getPixelForValue(l+_)}return d.getPixelForValue(e)},updateBezierControlPoints:function(){function e(e,t,n){return Math.max(Math.min(e,n),t)}var t,r,i,a,o,s=this,u=s.getMeta(),d=s.chart.chartArea,l=u.data||[];if(u.dataset._model.spanGaps&&(l=l.filter(function(e){return!e._model.skip})),"monotone"===u.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(l);else for(t=0,r=l.length;t<r;++t)i=l[t],a=i._model,o=n.splineCurve(n.previousItem(l,t)._model,a,n.nextItem(l,t)._model,u.dataset._model.tension),a.controlPointPreviousX=o.previous.x,a.controlPointPreviousY=o.previous.y,a.controlPointNextX=o.next.x,a.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(t=0,r=l.length;t<r;++t)a=l[t]._model,a.controlPointPreviousX=e(a.controlPointPreviousX,d.left,d.right),a.controlPointPreviousY=e(a.controlPointPreviousY,d.top,d.bottom),a.controlPointNextX=e(a.controlPointNextX,d.left,d.right),a.controlPointNextY=e(a.controlPointNextY,d.top,d.bottom)},draw:function(){var n=this,r=n.chart,i=n.getMeta(),a=i.data||[],o=r.chartArea,s=a.length,u=0;for(e.canvasHelpers.clipArea(r.ctx,o),t(n.getDataset(),r.options)&&i.dataset.draw(),e.canvasHelpers.unclipArea(r.ctx);u<s;++u)a[u].draw(o)},setHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],r=e._index,i=e.custom||{},a=e._model;a.radius=i.hoverRadius||n.getValueAtIndexOrDefault(t.pointHoverRadius,r,this.chart.options.elements.point.hoverRadius),a.backgroundColor=i.hoverBackgroundColor||n.getValueAtIndexOrDefault(t.pointHoverBackgroundColor,r,n.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor||n.getValueAtIndexOrDefault(t.pointHoverBorderColor,r,n.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth||n.getValueAtIndexOrDefault(t.pointHoverBorderWidth,r,a.borderWidth)},removeHoverStyle:function(e){var t=this,r=t.chart.data.datasets[e._datasetIndex],i=e._index,a=e.custom||{},o=e._model;void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),o.radius=a.radius||n.getValueAtIndexOrDefault(r.pointRadius,i,t.chart.options.elements.point.radius),o.backgroundColor=t.getPointBackgroundColor(e,i),o.borderColor=t.getPointBorderColor(e,i),o.borderWidth=t.getPointBorderWidth(e,i)}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.polarArea={scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');var n=e.data,r=n.datasets,i=n.labels;if(r.length)for(var a=0;a<r[0].data.length;++a)t.push('<li><span style="background-color:'+r[0].backgroundColor[a]+'"></span>'),i[a]&&t.push(i[a]),t.push("</li>");return t.push("</ul>"),t.join("")},legend:{labels:{generateLabels:function(e){var n=e.data;return n.labels.length&&n.datasets.length?n.labels.map(function(r,i){var a=e.getDatasetMeta(0),o=n.datasets[0],s=a.data[i],u=s.custom||{},d=t.getValueAtIndexOrDefault,l=e.options.elements.arc,c=u.backgroundColor?u.backgroundColor:d(o.backgroundColor,i,l.backgroundColor),h=u.borderColor?u.borderColor:d(o.borderColor,i,l.borderColor),_=u.borderWidth?u.borderWidth:d(o.borderWidth,i,l.borderWidth);return{text:r,fillStyle:c,strokeStyle:h,lineWidth:_,hidden:isNaN(o.data[i])||a.data[i].hidden,index:i}}):[]}},onClick:function(e,t){var n,r,i,a=t.index,o=this.chart;for(n=0,r=(o.data.datasets||[]).length;n<r;++n)i=o.getDatasetMeta(n),i.data[a].hidden=!i.data[a].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(e,t){return t.labels[e.index]+": "+e.yLabel}}}},e.controllers.polarArea=e.DatasetController.extend({dataElementType:e.elements.Arc,linkScales:t.noop,update:function(e){var n=this,r=n.chart,i=r.chartArea,a=n.getMeta(),o=r.options,s=o.elements.arc,u=Math.min(i.right-i.left,i.bottom-i.top);r.outerRadius=Math.max((u-s.borderWidth/2)/2,0),r.innerRadius=Math.max(o.cutoutPercentage?r.outerRadius/100*o.cutoutPercentage:1,0),r.radiusLength=(r.outerRadius-r.innerRadius)/r.getVisibleDatasetCount(),n.outerRadius=r.outerRadius-r.radiusLength*n.index,n.innerRadius=n.outerRadius-r.radiusLength,a.count=n.countVisibleElements(),t.each(a.data,function(t,r){n.updateElement(t,r,e)})},updateElement:function(e,n,r){for(var i=this,a=i.chart,o=i.getDataset(),s=a.options,u=s.animation,d=a.scale,l=t.getValueAtIndexOrDefault,c=a.data.labels,h=i.calculateCircumference(o.data[n]),_=d.xCenter,f=d.yCenter,m=0,p=i.getMeta(),g=0;g<n;++g)isNaN(o.data[g])||p.data[g].hidden||++m;var v=s.startAngle,y=e.hidden?0:d.getDistanceFromCenterForValue(o.data[n]),M=v+h*m,b=M+(e.hidden?0:h),L=u.animateScale?0:d.getDistanceFromCenterForValue(o.data[n]);t.extend(e,{_datasetIndex:i.index,_index:n,_scale:d,_model:{x:_,y:f,innerRadius:0,outerRadius:r?L:y,startAngle:r&&u.animateRotate?v:M,endAngle:r&&u.animateRotate?v:b,label:l(c,n,c[n])}}),i.removeHoverStyle(e),e.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},countVisibleElements:function(){var e=this.getDataset(),n=this.getMeta(),r=0;return t.each(n.data,function(t,n){isNaN(e.data[n])||t.hidden||r++}),r},calculateCircumference:function(e){var t=this.getMeta().count;return t>0&&!isNaN(e)?2*Math.PI/t:0}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},e.controllers.radar=e.DatasetController.extend({datasetElementType:e.elements.Line,dataElementType:e.elements.Point,linkScales:t.noop,update:function(e){var n=this,r=n.getMeta(),i=r.dataset,a=r.data,o=i.custom||{},s=n.getDataset(),u=n.chart.options.elements.line,d=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),t.extend(r.dataset,{_datasetIndex:n.index,_scale:d,_children:a,_loop:!0,_model:{tension:o.tension?o.tension:t.getValueOrDefault(s.lineTension,u.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||u.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||u.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||u.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:u.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||u.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||u.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||u.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||u.borderJoinStyle}}),r.dataset.pivot(),t.each(a,function(t,r){n.updateElement(t,r,e)},n),n.updateBezierControlPoints()},updateElement:function(e,n,r){var i=this,a=e.custom||{},o=i.getDataset(),s=i.chart.scale,u=i.chart.options.elements.point,d=s.getPointPositionForValue(n,o.data[n]);void 0!==o.radius&&void 0===o.pointRadius&&(o.pointRadius=o.radius),void 0!==o.hitRadius&&void 0===o.pointHitRadius&&(o.pointHitRadius=o.hitRadius),t.extend(e,{_datasetIndex:i.index,_index:n,_scale:s,_model:{x:r?s.xCenter:d.x,y:r?s.yCenter:d.y,tension:a.tension?a.tension:t.getValueOrDefault(o.lineTension,i.chart.options.elements.line.tension),radius:a.radius?a.radius:t.getValueAtIndexOrDefault(o.pointRadius,n,u.radius),backgroundColor:a.backgroundColor?a.backgroundColor:t.getValueAtIndexOrDefault(o.pointBackgroundColor,n,u.backgroundColor),borderColor:a.borderColor?a.borderColor:t.getValueAtIndexOrDefault(o.pointBorderColor,n,u.borderColor),borderWidth:a.borderWidth?a.borderWidth:t.getValueAtIndexOrDefault(o.pointBorderWidth,n,u.borderWidth),pointStyle:a.pointStyle?a.pointStyle:t.getValueAtIndexOrDefault(o.pointStyle,n,u.pointStyle),hitRadius:a.hitRadius?a.hitRadius:t.getValueAtIndexOrDefault(o.pointHitRadius,n,u.hitRadius)}}),e._model.skip=a.skip?a.skip:isNaN(e._model.x)||isNaN(e._model.y)},updateBezierControlPoints:function(){var e=this.chart.chartArea,n=this.getMeta();t.each(n.data,function(r,i){var a=r._model,o=t.splineCurve(t.previousItem(n.data,i,!0)._model,a,t.nextItem(n.data,i,!0)._model,a.tension);a.controlPointPreviousX=Math.max(Math.min(o.previous.x,e.right),e.left),a.controlPointPreviousY=Math.max(Math.min(o.previous.y,e.bottom),e.top),a.controlPointNextX=Math.max(Math.min(o.next.x,e.right),e.left),a.controlPointNextY=Math.max(Math.min(o.next.y,e.bottom),e.top),r.pivot()})},setHoverStyle:function(e){var n=this.chart.data.datasets[e._datasetIndex],r=e.custom||{},i=e._index,a=e._model;a.radius=r.hoverRadius?r.hoverRadius:t.getValueAtIndexOrDefault(n.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),a.backgroundColor=r.hoverBackgroundColor?r.hoverBackgroundColor:t.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,i,t.getHoverColor(a.backgroundColor)),a.borderColor=r.hoverBorderColor?r.hoverBorderColor:t.getValueAtIndexOrDefault(n.pointHoverBorderColor,i,t.getHoverColor(a.borderColor)),a.borderWidth=r.hoverBorderWidth?r.hoverBorderWidth:t.getValueAtIndexOrDefault(n.pointHoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(e){var n=this.chart.data.datasets[e._datasetIndex],r=e.custom||{},i=e._index,a=e._model,o=this.chart.options.elements.point;a.radius=r.radius?r.radius:t.getValueAtIndexOrDefault(n.pointRadius,i,o.radius),a.backgroundColor=r.backgroundColor?r.backgroundColor:t.getValueAtIndexOrDefault(n.pointBackgroundColor,i,o.backgroundColor),a.borderColor=r.borderColor?r.borderColor:t.getValueAtIndexOrDefault(n.pointBorderColor,i,o.borderColor),a.borderWidth=r.borderWidth?r.borderWidth:t.getValueAtIndexOrDefault(n.pointBorderWidth,i,o.borderWidth)}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:t.noop,onComplete:t.noop},e.Animation=e.Element.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),e.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(e,t,n,r){var i,a,o=this.animations;for(t.chart=e,r||(e.animating=!0),i=0,a=o.length;i<a;++i)if(o[i].chart===e)return void(o[i]=t);o.push(t),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(e){var n=t.findIndex(this.animations,function(t){return t.chart===e});n!==-1&&(this.animations.splice(n,1),e.animating=!1)},requestAnimationFrame:function(){var e=this;null===e.request&&(e.request=t.requestAnimFrame.call(window,function(){e.request=null,e.startDigest()}))},startDigest:function(){var e=this,t=Date.now(),n=0;e.dropFrames>1&&(n=Math.floor(e.dropFrames),e.dropFrames=e.dropFrames%1),e.advance(1+n);var r=Date.now();e.dropFrames+=(r-t)/e.frameDuration,e.animations.length>0&&e.requestAnimationFrame()},advance:function(e){for(var n,r,i=this.animations,a=0;a<i.length;)n=i[a],r=n.chart,n.currentStep=(n.currentStep||0)+e,n.currentStep=Math.min(n.currentStep,n.numSteps),t.callback(n.render,[r,n],r),t.callback(n.onAnimationProgress,[n],r),n.currentStep>=n.numSteps?(t.callback(n.onAnimationComplete,[n],r),r.animating=!1,i.splice(a,1)):++a}},Object.defineProperty(e.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(e.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(e){this.chart=e}})}},function(e,t){"use strict";e.exports=function(e){var t=e.canvasHelpers={};t.drawPoint=function(t,n,r,i,a){var o,s,u,d,l,c;if("object"==typeof n&&(o=n.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return void t.drawImage(n,i-n.width/2,a-n.height/2,n.width,n.height);if(!(isNaN(r)||r<=0)){switch(n){default:t.beginPath(),t.arc(i,a,r,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),s=3*r/Math.sqrt(3),l=s*Math.sqrt(3)/2,t.moveTo(i-s/2,a+l/3),t.lineTo(i+s/2,a+l/3),t.lineTo(i,a-2*l/3),t.closePath(),t.fill();break;case"rect":c=1/Math.SQRT2*r,t.beginPath(),t.fillRect(i-c,a-c,2*c,2*c),t.strokeRect(i-c,a-c,2*c,2*c);break;case"rectRounded":var h=r/Math.SQRT2,_=i-h,f=a-h,m=Math.SQRT2*r;e.helpers.drawRoundedRectangle(t,_,f,m,m,r/2),t.fill();break;case"rectRot":c=1/Math.SQRT2*r,t.beginPath(),t.moveTo(i-c,a),t.lineTo(i,a+c),
t.lineTo(i+c,a),t.lineTo(i,a-c),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(i,a+r),t.lineTo(i,a-r),t.moveTo(i-r,a),t.lineTo(i+r,a),t.closePath();break;case"crossRot":t.beginPath(),u=Math.cos(Math.PI/4)*r,d=Math.sin(Math.PI/4)*r,t.moveTo(i-u,a-d),t.lineTo(i+u,a+d),t.moveTo(i-u,a+d),t.lineTo(i+u,a-d),t.closePath();break;case"star":t.beginPath(),t.moveTo(i,a+r),t.lineTo(i,a-r),t.moveTo(i-r,a),t.lineTo(i+r,a),u=Math.cos(Math.PI/4)*r,d=Math.sin(Math.PI/4)*r,t.moveTo(i-u,a-d),t.lineTo(i+u,a+d),t.moveTo(i-u,a+d),t.lineTo(i+u,a-d),t.closePath();break;case"line":t.beginPath(),t.moveTo(i-r,a),t.lineTo(i+r,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(i,a),t.lineTo(i+r,a),t.closePath()}t.stroke()}},t.clipArea=function(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()},t.unclipArea=function(e){e.restore()},t.lineTo=function(e,t,n,r){return n.steppedLine?("after"===n.steppedLine?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y),void e.lineTo(n.x,n.y)):n.tension?void e.bezierCurveTo(r?t.controlPointPreviousX:t.controlPointNextX,r?t.controlPointPreviousY:t.controlPointNextY,r?n.controlPointNextX:n.controlPointPreviousX,r?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):void e.lineTo(n.x,n.y)},e.helpers.canvas=t}},function(e,t){"use strict";e.exports=function(e){function t(t){t=t||{};var n=t.data=t.data||{};return n.datasets=n.datasets||[],n.labels=n.labels||[],t.options=i.configMerge(e.defaults.global,e.defaults[t.type],t.options||{}),t}function n(e){var t=e.options;t.scale?e.scale.options=t.scale:t.scales&&t.scales.xAxes.concat(t.scales.yAxes).forEach(function(t){e.scales[t.id].options=t}),e.tooltip._options=t.tooltips}function r(e){return"top"===e||"bottom"===e}var i=e.helpers,a=e.plugins,o=e.platform;e.types={},e.instances={},e.controllers={},i.extend(e.prototype,{construct:function(n,r){var a=this;r=t(r);var s=o.acquireContext(n,r),u=s&&s.canvas,d=u&&u.height,l=u&&u.width;return a.id=i.uid(),a.ctx=s,a.canvas=u,a.config=r,a.width=l,a.height=d,a.aspectRatio=d?l/d:null,a.options=r.options,a._bufferedRender=!1,a.chart=a,a.controller=a,e.instances[a.id]=a,Object.defineProperty(a,"data",{get:function(){return a.config.data},set:function(e){a.config.data=e}}),s&&u?(a.initialize(),void a.update()):void console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var e=this;return a.notify(e,"beforeInit"),i.retinaScale(e),e.bindEvents(),e.options.responsive&&e.resize(!0),e.ensureScalesHaveIDs(),e.buildScales(),e.initToolTip(),a.notify(e,"afterInit"),e},clear:function(){return i.clear(this),this},stop:function(){return e.animationService.cancelAnimation(this),this},resize:function(e){var t=this,n=t.options,r=t.canvas,o=n.maintainAspectRatio&&t.aspectRatio||null,s=Math.floor(i.getMaximumWidth(r)),u=Math.floor(o?s/o:i.getMaximumHeight(r));if((t.width!==s||t.height!==u)&&(r.width=t.width=s,r.height=t.height=u,r.style.width=s+"px",r.style.height=u+"px",i.retinaScale(t),!e)){var d={width:s,height:u};a.notify(t,"resize",[d]),t.options.onResize&&t.options.onResize(t,d),t.stop(),t.update(t.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var e=this.options,t=e.scales||{},n=e.scale;i.each(t.xAxes,function(e,t){e.id=e.id||"x-axis-"+t}),i.each(t.yAxes,function(e,t){e.id=e.id||"y-axis-"+t}),n&&(n.id=n.id||"scale")},buildScales:function(){var t=this,n=t.options,a=t.scales={},o=[];n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(e){return{options:e,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(e){return{options:e,dtype:"linear",dposition:"left"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),i.each(o,function(n){var o=n.options,s=i.getValueOrDefault(o.type,n.dtype),u=e.scaleService.getScaleConstructor(s);if(u){r(o.position)!==r(n.dposition)&&(o.position=n.dposition);var d=new u({id:o.id,options:o,ctx:t.ctx,chart:t});a[d.id]=d,n.isDefault&&(t.scale=d)}}),e.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t=this,n=[],r=[];if(i.each(t.data.datasets,function(i,a){var o=t.getDatasetMeta(a);if(o.type||(o.type=i.type||t.config.type),n.push(o.type),o.controller)o.controller.updateIndex(a);else{var s=e.controllers[o.type];if(void 0===s)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new s(t,a),r.push(o.controller)}},t),n.length>1)for(var a=1;a<n.length;a++)if(n[a]!==n[a-1]){t.isCombo=!0;break}return r},resetElements:function(){var e=this;i.each(e.data.datasets,function(t,n){e.getDatasetMeta(n).controller.reset()},e)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e,t){var r=this;if(n(r),a.notify(r,"beforeUpdate")!==!1){r.tooltip._data=r.data;var o=r.buildOrUpdateControllers();i.each(r.data.datasets,function(e,t){r.getDatasetMeta(t).controller.buildOrUpdateElements()},r),r.updateLayout(),i.each(o,function(e){e.reset()}),r.updateDatasets(),a.notify(r,"afterUpdate"),r._bufferedRender?r._bufferedRequest={lazy:t,duration:e}:r.render(e,t)}},updateLayout:function(){var t=this;a.notify(t,"beforeLayout")!==!1&&(e.layoutService.update(this,this.width,this.height),a.notify(t,"afterScaleUpdate"),a.notify(t,"afterLayout"))},updateDatasets:function(){var e=this;if(a.notify(e,"beforeDatasetsUpdate")!==!1){for(var t=0,n=e.data.datasets.length;t<n;++t)e.updateDataset(t);a.notify(e,"afterDatasetsUpdate")}},updateDataset:function(e){var t=this,n=t.getDatasetMeta(e),r={meta:n,index:e};a.notify(t,"beforeDatasetUpdate",[r])!==!1&&(n.controller.update(),a.notify(t,"afterDatasetUpdate",[r]))},render:function(t,n){var r=this;if(a.notify(r,"beforeRender")!==!1){var o=r.options.animation,s=function(e){a.notify(r,"afterRender"),i.callback(o&&o.onComplete,[e],r)};if(o&&("undefined"!=typeof t&&0!==t||"undefined"==typeof t&&0!==o.duration)){var u=new e.Animation({numSteps:(t||o.duration)/16.66,easing:o.easing,render:function(e,t){var n=i.easingEffects[t.easing],r=t.currentStep,a=r/t.numSteps;e.draw(n(a),a,r)},onAnimationProgress:o.onProgress,onAnimationComplete:s});e.animationService.addAnimation(r,u,t,n)}else r.draw(),s(new e.Animation({numSteps:0,chart:r}));return r}},draw:function(e){var t=this;t.clear(),void 0!==e&&null!==e||(e=1),t.transition(e),a.notify(t,"beforeDraw",[e])!==!1&&(i.each(t.boxes,function(e){e.draw(t.chartArea)},t),t.scale&&t.scale.draw(),t.drawDatasets(e),t.tooltip.draw(),a.notify(t,"afterDraw",[e]))},transition:function(e){for(var t=this,n=0,r=(t.data.datasets||[]).length;n<r;++n)t.isDatasetVisible(n)&&t.getDatasetMeta(n).controller.transition(e);t.tooltip.transition(e)},drawDatasets:function(e){var t=this;if(a.notify(t,"beforeDatasetsDraw",[e])!==!1){for(var n=(t.data.datasets||[]).length-1;n>=0;--n)t.isDatasetVisible(n)&&t.drawDataset(n,e);a.notify(t,"afterDatasetsDraw",[e])}},drawDataset:function(e,t){var n=this,r=n.getDatasetMeta(e),i={meta:r,index:e,easingValue:t};a.notify(n,"beforeDatasetDraw",[i])!==!1&&(r.controller.draw(t),a.notify(n,"afterDatasetDraw",[i]))},getElementAtEvent:function(t){return e.Interaction.modes.single(this,t)},getElementsAtEvent:function(t){return e.Interaction.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return e.Interaction.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,n,r){var i=e.Interaction.modes[n];return"function"==typeof i?i(this,t,r):[]},getDatasetAtEvent:function(t){return e.Interaction.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(e){var t=this,n=t.data.datasets[e];n._meta||(n._meta={});var r=n._meta[t.id];return r||(r=n._meta[t.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),r},getVisibleDatasetCount:function(){for(var e=0,t=0,n=this.data.datasets.length;t<n;++t)this.isDatasetVisible(t)&&e++;return e},isDatasetVisible:function(e){var t=this.getDatasetMeta(e);return"boolean"==typeof t.hidden?!t.hidden:!this.data.datasets[e].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var t,n,r,s=this,u=s.canvas;for(s.stop(),n=0,r=s.data.datasets.length;n<r;++n)t=s.getDatasetMeta(n),t.controller&&(t.controller.destroy(),t.controller=null);u&&(s.unbindEvents(),i.clear(s),o.releaseContext(s.ctx),s.canvas=null,s.ctx=null),a.notify(s,"destroy"),delete e.instances[s.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new e.Tooltip({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t),t.tooltip.initialize()},bindEvents:function(){var e=this,t=e._listeners={},n=function(){e.eventHandler.apply(e,arguments)};i.each(e.options.events,function(r){o.addEventListener(e,r,n),t[r]=n}),e.options.responsive&&(n=function(){e.resize()},o.addEventListener(e,"resize",n),t.resize=n)},unbindEvents:function(){var e=this,t=e._listeners;t&&(delete e._listeners,i.each(t,function(t,n){o.removeEventListener(e,n,t)}))},updateHoverStyle:function(e,t,n){var r,i,a,o=n?"setHoverStyle":"removeHoverStyle";for(i=0,a=e.length;i<a;++i)r=e[i],r&&this.getDatasetMeta(r._datasetIndex).controller[o](r)},eventHandler:function(e){var t=this,n=t.tooltip;if(a.notify(t,"beforeEvent",[e])!==!1){t._bufferedRender=!0,t._bufferedRequest=null;var r=t.handleEvent(e);r|=n&&n.handleEvent(e),a.notify(t,"afterEvent",[e]);var i=t._bufferedRequest;return i?t.render(i.duration,i.lazy):r&&!t.animating&&(t.stop(),t.render(t.options.hover.animationDuration,!0)),t._bufferedRender=!1,t._bufferedRequest=null,t}},handleEvent:function(e){var t=this,n=t.options||{},r=n.hover,a=!1;return t.lastActive=t.lastActive||[],"mouseout"===e.type?t.active=[]:t.active=t.getElementsAtEventForMode(e,r.mode,r),r.onHover&&r.onHover.call(t,e.native,t.active),"mouseup"!==e.type&&"click"!==e.type||n.onClick&&n.onClick.call(t,e.native,t.active),t.lastActive.length&&t.updateHoverStyle(t.lastActive,r.mode,!1),t.active.length&&r.mode&&t.updateHoverStyle(t.active,r.mode,!0),a=!i.arrayEquals(t.active,t.lastActive),t.lastActive=t.active,a}}),e.Controller=e}},function(e,t){"use strict";e.exports=function(e){function t(e,t){return e._chartjs?void e._chartjs.listeners.push(t):(Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),void i.forEach(function(t){var n="onData"+t.charAt(0).toUpperCase()+t.slice(1),i=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:function(){var t=Array.prototype.slice.call(arguments),a=i.apply(this,t);return r.each(e._chartjs.listeners,function(e){"function"==typeof e[n]&&e[n].apply(e,t)}),a}})}))}function n(e,t){var n=e._chartjs;if(n){var r=n.listeners,a=r.indexOf(t);a!==-1&&r.splice(a,1),r.length>0||(i.forEach(function(t){delete e[t]}),delete e._chartjs)}}var r=e.helpers,i=["push","pop","shift","splice","unshift"];e.DatasetController=function(e,t){this.initialize(e,t)},r.extend(e.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(e,t){var n=this;n.chart=e,n.index=t,n.linkScales(),n.addElements()},updateIndex:function(e){this.index=e},linkScales:function(){var e=this,t=e.getMeta(),n=e.getDataset();null===t.xAxisID&&(t.xAxisID=n.xAxisID||e.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=n.yAxisID||e.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(e){return this.chart.scales[e]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var e=this,t=e.datasetElementType;return t&&new t({_chart:e.chart,_datasetIndex:e.index})},createMetaData:function(e){var t=this,n=t.dataElementType;return n&&new n({_chart:t.chart,_datasetIndex:t.index,_index:e})},addElements:function(){var e,t,n=this,r=n.getMeta(),i=n.getDataset().data||[],a=r.data;for(e=0,t=i.length;e<t;++e)a[e]=a[e]||n.createMetaData(e);r.dataset=r.dataset||n.createMetaDataset()},addElementAndReset:function(e){var t=this.createMetaData(e);this.getMeta().data.splice(e,0,t),this.updateElement(t,e,!0)},buildOrUpdateElements:function(){var e=this,r=e.getDataset(),i=r.data||(r.data=[]);e._data!==i&&(e._data&&n(e._data,e),t(i,e),e._data=i),e.resyncElements()},update:r.noop,transition:function(e){for(var t=this.getMeta(),n=t.data||[],r=n.length,i=0;i<r;++i)n[i].transition(e);t.dataset&&t.dataset.transition(e)},draw:function(){var e=this.getMeta(),t=e.data||[],n=t.length,r=0;for(e.dataset&&e.dataset.draw();r<n;++r)t[r].draw()},removeHoverStyle:function(e,t){var n=this.chart.data.datasets[e._datasetIndex],i=e._index,a=e.custom||{},o=r.getValueAtIndexOrDefault,s=e._model;s.backgroundColor=a.backgroundColor?a.backgroundColor:o(n.backgroundColor,i,t.backgroundColor),s.borderColor=a.borderColor?a.borderColor:o(n.borderColor,i,t.borderColor),s.borderWidth=a.borderWidth?a.borderWidth:o(n.borderWidth,i,t.borderWidth)},setHoverStyle:function(e){var t=this.chart.data.datasets[e._datasetIndex],n=e._index,i=e.custom||{},a=r.getValueAtIndexOrDefault,o=r.getHoverColor,s=e._model;s.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:a(t.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=i.hoverBorderColor?i.hoverBorderColor:a(t.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:a(t.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var e=this,t=e.getMeta(),n=e.getDataset().data,r=t.data.length,i=n.length;i<r?t.data.splice(i,r-i):i>r&&e.insertElements(r,i-r)},insertElements:function(e,t){for(var n=0;n<t;++n)this.addElementAndReset(e+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(e,t){this.getMeta().data.splice(e,t),this.insertElements(e,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),e.DatasetController.extend=r.inherits}},function(e,t,n){"use strict";var r=n(51);e.exports=function(e){function t(e,t,n,i){var a,o,s,u,d,l,c,h,_,f=Object.keys(n);for(a=0,o=f.length;a<o;++a)if(s=f[a],l=n[s],t.hasOwnProperty(s)||(t[s]=l),u=t[s],u!==l&&"_"!==s[0]){if(e.hasOwnProperty(s)||(e[s]=u),d=e[s],c=typeof l,c===typeof d)if("string"===c){if(h=r(d),h.valid&&(_=r(l),_.valid)){t[s]=_.mix(h,i).rgbString();continue}}else if("number"===c&&isFinite(d)&&isFinite(l)){t[s]=d+(l-d)*i;continue}t[s]=l}}var n=e.helpers;e.elements={},e.Element=function(e){n.extend(this,e),this.initialize.apply(this,arguments)},n.extend(e.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var e=this;return e._view||(e._view=n.clone(e._model)),e._start={},e},transition:function(e){var n=this,r=n._model,i=n._start,a=n._view;return r&&1!==e?(a||(a=n._view={}),i||(i=n._start={}),t(i,a,r,e),n):(n._view=r,n._start=null,n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return n.isNumber(this._model.x)&&n.isNumber(this._model.y)}}),e.Element.extend=n.inherits}},function(e,t,n){"use strict";var r=n(51);e.exports=function(e){function t(e,t,n){var r;return"string"==typeof e?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}function n(e){return void 0!==e&&null!==e&&"none"!==e}function i(e,r,i){var a=document.defaultView,o=e.parentNode,s=a.getComputedStyle(e)[r],u=a.getComputedStyle(o)[r],d=n(s),l=n(u),c=Number.POSITIVE_INFINITY;return d||l?Math.min(d?t(s,e,i):c,l?t(u,o,i):c):"none"}var a=e.helpers={};a.each=function(e,t,n,r){var i,o;if(a.isArray(e))if(o=e.length,r)for(i=o-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<o;i++)t.call(n,e[i],i);else if("object"==typeof e){var s=Object.keys(e);for(o=s.length,i=0;i<o;i++)t.call(n,e[s[i]],s[i])}},a.clone=function(e){var t={};return a.each(e,function(e,n){a.isArray(e)?t[n]=e.slice(0):"object"==typeof e&&null!==e?t[n]=a.clone(e):t[n]=e}),t},a.extend=function(e){for(var t=function(t,n){e[n]=t},n=1,r=arguments.length;n<r;n++)a.each(arguments[n],t);return e},a.configMerge=function(t){var n=a.clone(t);return a.each(Array.prototype.slice.call(arguments,1),function(t){a.each(t,function(t,r){var i=n.hasOwnProperty(r),o=i?n[r]:{};"scales"===r?n[r]=a.scaleMerge(o,t):"scale"===r?n[r]=a.configMerge(o,e.scaleService.getScaleDefaults(t.type),t):!i||"object"!=typeof o||a.isArray(o)||null===o||"object"!=typeof t||a.isArray(t)?n[r]=t:n[r]=a.configMerge(o,t)})}),n},a.scaleMerge=function(t,n){var r=a.clone(t);return a.each(n,function(t,n){"xAxes"===n||"yAxes"===n?r.hasOwnProperty(n)?a.each(t,function(t,i){var o=a.getValueOrDefault(t.type,"xAxes"===n?"category":"linear"),s=e.scaleService.getScaleDefaults(o);i>=r[n].length||!r[n][i].type?r[n].push(a.configMerge(s,t)):t.type&&t.type!==r[n][i].type?r[n][i]=a.configMerge(r[n][i],s,t):r[n][i]=a.configMerge(r[n][i],t)}):(r[n]=[],a.each(t,function(t){var i=a.getValueOrDefault(t.type,"xAxes"===n?"category":"linear");r[n].push(a.configMerge(e.scaleService.getScaleDefaults(i),t))})):r.hasOwnProperty(n)&&"object"==typeof r[n]&&null!==r[n]&&"object"==typeof t?r[n]=a.configMerge(r[n],t):r[n]=t}),r},a.getValueAtIndexOrDefault=function(e,t,n){return void 0===e||null===e?n:a.isArray(e)?t<e.length?e[t]:n:e},a.getValueOrDefault=function(e,t){return void 0===e?t:e},a.indexOf=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},a.where=function(e,t){if(a.isArray(e)&&Array.prototype.filter)return e.filter(t);var n=[];return a.each(e,function(e){t(e)&&n.push(e)}),n},a.findIndex=Array.prototype.findIndex?function(e,t,n){return e.findIndex(t,n)}:function(e,t,n){n=void 0===n?e:n;for(var r=0,i=e.length;r<i;++r)if(t.call(n,e[r],r,e))return r;return-1},a.findNextWhere=function(e,t,n){void 0!==n&&null!==n||(n=-1);for(var r=n+1;r<e.length;r++){var i=e[r];if(t(i))return i}},a.findPreviousWhere=function(e,t,n){void 0!==n&&null!==n||(n=e.length);for(var r=n-1;r>=0;r--){var i=e[r];if(t(i))return i}},a.inherits=function(e){var t=this,n=e&&e.hasOwnProperty("constructor")?e.constructor:function(){return t.apply(this,arguments)},r=function(){this.constructor=n};return r.prototype=t.prototype,n.prototype=new r,n.extend=a.inherits,e&&a.extend(n.prototype,e),n.__super__=t.prototype,n},a.noop=function(){},a.uid=function(){var e=0;return function(){return e++}}(),a.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},a.almostEquals=function(e,t,n){return Math.abs(e-t)<n},a.almostWhole=function(e,t){var n=Math.round(e);return n-t<e&&n+t>e},a.max=function(e){return e.reduce(function(e,t){return isNaN(t)?e:Math.max(e,t)},Number.NEGATIVE_INFINITY)},a.min=function(e){return e.reduce(function(e,t){return isNaN(t)?e:Math.min(e,t)},Number.POSITIVE_INFINITY)},a.sign=Math.sign?function(e){return Math.sign(e)}:function(e){return e=+e,0===e||isNaN(e)?e:e>0?1:-1},a.log10=Math.log10?function(e){return Math.log10(e)}:function(e){return Math.log(e)/Math.LN10},a.toRadians=function(e){return e*(Math.PI/180)},a.toDegrees=function(e){return e*(180/Math.PI)},a.getAngleFromPoint=function(e,t){var n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*Math.PI&&(a+=2*Math.PI),{angle:a,distance:i}},a.distanceBetweenPoints=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},a.aliasPixel=function(e){return e%2===0?0:.5},a.splineCurve=function(e,t,n,r){var i=e.skip?t:e,a=t,o=n.skip?t:n,s=Math.sqrt(Math.pow(a.x-i.x,2)+Math.pow(a.y-i.y,2)),u=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),d=s/(s+u),l=u/(s+u);d=isNaN(d)?0:d,l=isNaN(l)?0:l;var c=r*d,h=r*l;return{previous:{x:a.x-c*(o.x-i.x),y:a.y-c*(o.y-i.y)},next:{x:a.x+h*(o.x-i.x),y:a.y+h*(o.y-i.y)}}},a.EPSILON=Number.EPSILON||1e-14,a.splineCurveMonotone=function(e){var t,n,r,i,o=(e||[]).map(function(e){return{model:e._model,deltaK:0,mK:0}}),s=o.length;for(t=0;t<s;++t)if(r=o[t],!r.model.skip){if(n=t>0?o[t-1]:null,i=t<s-1?o[t+1]:null,i&&!i.model.skip){var u=i.model.x-r.model.x;r.deltaK=0!==u?(i.model.y-r.model.y)/u:0}!n||n.model.skip?r.mK=r.deltaK:!i||i.model.skip?r.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(r.deltaK)?r.mK=0:r.mK=(n.deltaK+r.deltaK)/2}var d,l,c,h;for(t=0;t<s-1;++t)r=o[t],i=o[t+1],r.model.skip||i.model.skip||(a.almostEquals(r.deltaK,0,this.EPSILON)?r.mK=i.mK=0:(d=r.mK/r.deltaK,l=i.mK/r.deltaK,h=Math.pow(d,2)+Math.pow(l,2),h<=9||(c=3/Math.sqrt(h),r.mK=d*c*r.deltaK,i.mK=l*c*r.deltaK)));var _;for(t=0;t<s;++t)r=o[t],r.model.skip||(n=t>0?o[t-1]:null,i=t<s-1?o[t+1]:null,n&&!n.model.skip&&(_=(r.model.x-n.model.x)/3,r.model.controlPointPreviousX=r.model.x-_,r.model.controlPointPreviousY=r.model.y-_*r.mK),i&&!i.model.skip&&(_=(i.model.x-r.model.x)/3,r.model.controlPointNextX=r.model.x+_,r.model.controlPointNextY=r.model.y+_*r.mK))},a.nextItem=function(e,t,n){return n?t>=e.length-1?e[0]:e[t+1]:t>=e.length-1?e[e.length-1]:e[t+1]},a.previousItem=function(e,t,n){return n?t<=0?e[e.length-1]:e[t-1]:t<=0?e[0]:e[t-1]},a.niceNum=function(e,t){var n,r=Math.floor(a.log10(e)),i=e/Math.pow(10,r);return n=t?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10,n*Math.pow(10,r)};var o=a.easingEffects={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-1*e*(e-2)},easeInOutQuad:function(e){return(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1*((e=e/1-1)*e*e+1)},easeInOutCubic:function(e){return(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-1*((e=e/1-1)*e*e*e-1)},easeInOutQuart:function(e){return(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},easeInQuint:function(e){return 1*(e/=1)*e*e*e*e},easeOutQuint:function(e){return 1*((e=e/1-1)*e*e*e*e+1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return-1*Math.cos(e/1*(Math.PI/2))+1},easeOutSine:function(e){return 1*Math.sin(e/1*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e/1)-1)},easeInExpo:function(e){return 0===e?1:1*Math.pow(2,10*(e/1-1))},easeOutExpo:function(e){return 1===e?1:1*(-Math.pow(2,-10*e/1)+1)},easeInOutExpo:function(e){return 0===e?0:1===e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)},easeInCirc:function(e){return e>=1?e:-1*(Math.sqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return 1*Math.sqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:1===(e/=1)?1:(n||(n=.3),r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),-(r*Math.pow(2,10*(e-=1))*Math.sin((1*e-t)*(2*Math.PI)/n)))},easeOutElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:1===(e/=1)?1:(n||(n=.3),r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*e)*Math.sin((1*e-t)*(2*Math.PI)/n)+1)},easeInOutElastic:function(e){var t=1.70158,n=0,r=1;return 0===e?0:2===(e/=.5)?1:(n||(n=1*(.3*1.5)),r<Math.abs(1)?(r=1,t=n/4):t=n/(2*Math.PI)*Math.asin(1/r),e<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((1*e-t)*(2*Math.PI)/n)):r*Math.pow(2,-10*(e-=1))*Math.sin((1*e-t)*(2*Math.PI)/n)*.5+1)},easeInBack:function(e){var t=1.70158;return 1*(e/=1)*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return 1*((e=e/1-1)*e*((t+1)*e+t)+1)},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:function(e){return 1-o.easeOutBounce(1-e)},easeOutBounce:function(e){return(e/=1)<1/2.75?1*(7.5625*e*e):e<2/2.75?1*(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1*(7.5625*(e-=2.25/2.75)*e+.9375):1*(7.5625*(e-=2.625/2.75)*e+.984375)},easeInOutBounce:function(e){return e<.5?.5*o.easeInBounce(2*e):.5*o.easeOutBounce(2*e-1)+.5}};a.requestAnimFrame=function(){return"undefined"==typeof window?function(e){e()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}(),a.getRelativePosition=function(e,t){var n,r,i=e.originalEvent||e,o=e.currentTarget||e.srcElement,s=o.getBoundingClientRect(),u=i.touches;u&&u.length>0?(n=u[0].clientX,r=u[0].clientY):(n=i.clientX,r=i.clientY);var d=parseFloat(a.getStyle(o,"padding-left")),l=parseFloat(a.getStyle(o,"padding-top")),c=parseFloat(a.getStyle(o,"padding-right")),h=parseFloat(a.getStyle(o,"padding-bottom")),_=s.right-s.left-d-c,f=s.bottom-s.top-l-h;return n=Math.round((n-s.left-d)/_*o.width/t.currentDevicePixelRatio),r=Math.round((r-s.top-l)/f*o.height/t.currentDevicePixelRatio),{x:n,y:r}},a.addEvent=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},a.removeEvent=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=a.noop},a.getConstraintWidth=function(e){return i(e,"max-width","clientWidth")},a.getConstraintHeight=function(e){return i(e,"max-height","clientHeight")},a.getMaximumWidth=function(e){var t=e.parentNode,n=parseInt(a.getStyle(t,"padding-left"),10),r=parseInt(a.getStyle(t,"padding-right"),10),i=t.clientWidth-n-r,o=a.getConstraintWidth(e);return isNaN(o)?i:Math.min(i,o)},a.getMaximumHeight=function(e){var t=e.parentNode,n=parseInt(a.getStyle(t,"padding-top"),10),r=parseInt(a.getStyle(t,"padding-bottom"),10),i=t.clientHeight-n-r,o=a.getConstraintHeight(e);return isNaN(o)?i:Math.min(i,o)},a.getStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null).getPropertyValue(t)},a.retinaScale=function(e){var t=e.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==t){var n=e.canvas,r=e.height,i=e.width;n.height=r*t,n.width=i*t,e.ctx.scale(t,t),n.style.height=r+"px",n.style.width=i+"px"}},a.clear=function(e){e.ctx.clearRect(0,0,e.width,e.height)},a.fontString=function(e,t,n){return t+" "+e+"px "+n},a.longestText=function(e,t,n,r){r=r||{};var i=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},o=r.garbageCollect=[],r.font=t),e.font=t;var s=0;a.each(n,function(t){void 0!==t&&null!==t&&a.isArray(t)!==!0?s=a.measureText(e,i,o,s,t):a.isArray(t)&&a.each(t,function(t){void 0===t||null===t||a.isArray(t)||(s=a.measureText(e,i,o,s,t))})});var u=o.length/2;if(u>n.length){for(var d=0;d<u;d++)delete i[o[d]];o.splice(0,u)}return s},a.measureText=function(e,t,n,r,i){var a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r},a.numberOfLabelLines=function(e){var t=1;return a.each(e,function(e){a.isArray(e)&&e.length>t&&(t=e.length)}),t},a.drawRoundedRectangle=function(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()},a.color=r?function(t){return t instanceof CanvasGradient&&(t=e.defaults.global.defaultColor),r(t)}:function(e){return console.error("Color.js not found!"),e},a.isArray=Array.isArray?function(e){return Array.isArray(e)}:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a.arrayEquals=function(e,t){var n,r,i,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],o=t[n],i instanceof Array&&o instanceof Array){if(!a.arrayEquals(i,o))return!1}else if(i!==o)return!1;return!0},a.callback=function(e,t,n){e&&"function"==typeof e.call&&e.apply(n,t)},a.getHoverColor=function(e){return e instanceof CanvasPattern?e:a.color(e).saturate(.5).darken(.1).rgbString()},a.callCallback=a.callback}},function(e,t){"use strict";e.exports=function(e){function t(e,t){return e.native?{x:e.x,y:e.y}:o.getRelativePosition(e,t)}function n(e,t){var n,r,i,a,o,s=e.data.datasets;for(r=0,a=s.length;r<a;++r)if(e.isDatasetVisible(r))for(n=e.getDatasetMeta(r),i=0,o=n.data.length;i<o;++i){var u=n.data[i];u._view.skip||t(u)}}function r(e,t){var r=[];return n(e,function(e){e.inRange(t.x,t.y)&&r.push(e)}),r}function i(e,t,r,i){var a=Number.POSITIVE_INFINITY,s=[];return i||(i=o.distanceBetweenPoints),n(e,function(e){if(!r||e.inRange(t.x,t.y)){var n=e.getCenterPoint(),o=i(t,n);o<a?(s=[e],a=o):o===a&&s.push(e)}}),s}function a(e,n,a){var o=t(n,e),s=function(e,t){return Math.abs(e.x-t.x)},u=a.intersect?r(e,o):i(e,o,!1,s),d=[];return u.length?(e.data.datasets.forEach(function(t,n){if(e.isDatasetVisible(n)){var r=e.getDatasetMeta(n),i=r.data[u[0]._index];i&&!i._view.skip&&d.push(i)}}),d):[]}var o=e.helpers;e.Interaction={modes:{single:function(e,r){var i=t(r,e),a=[];return n(e,function(e){if(e.inRange(i.x,i.y))return a.push(e),a}),a.slice(0,1)},label:a,index:a,dataset:function(e,n,a){var o=t(n,e),s=a.intersect?r(e,o):i(e,o,!1);return s.length>0&&(s=e.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(e,t){return a(e,t,!0)},point:function(e,n){var i=t(n,e);return r(e,i)},nearest:function(e,n,r){var a=t(n,e),o=i(e,a,r.intersect);return o.length>1&&o.sort(function(e,t){var n=e.getArea(),r=t.getArea(),i=n-r;return 0===i&&(i=e._datasetIndex-t._datasetIndex),i}),o.slice(0,1)},x:function(e,r,i){var a=t(r,e),o=[],s=!1;return n(e,function(e){e.inXRange(a.x)&&o.push(e),e.inRange(a.x,a.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o},y:function(e,r,i){var a=t(r,e),o=[],s=!1;return n(e,function(e){e.inYRange(a.y)&&o.push(e),e.inRange(a.x,a.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o}}}}},function(e,t){"use strict";e.exports=function(){var e=function(e,t){return this.construct(e,t),this};return e.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(e){var t=[];t.push('<ul class="'+e.id+'-legend">');for(var n=0;n<e.data.datasets.length;n++)t.push('<li><span style="background-color:'+e.data.datasets[n].backgroundColor+'"></span>'),e.data.datasets[n].label&&t.push(e.data.datasets[n].label),t.push("</li>");return t.push("</ul>"),t.join("")}}},e.Chart=e,e}},function(e,t){"use strict";e.exports=function(e){function t(e,t){return r.where(e,function(e){return e.position===t})}function n(e,t){e.forEach(function(e,t){return e._tmpIndex_=t,e}),e.sort(function(e,n){var r=t?n:e,i=t?e:n;return r.weight===i.weight?r._tmpIndex_-i._tmpIndex_:r.weight-i.weight}),e.forEach(function(e){delete e._tmpIndex_})}var r=e.helpers;e.layoutService={defaults:{},addBox:function(e,t){e.boxes||(e.boxes=[]),t.fullWidth=t.fullWidth||!1,t.position=t.position||"top",t.weight=t.weight||0,e.boxes.push(t)},removeBox:function(e,t){var n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure:function(e,t,n){for(var r,i=["fullWidth","position","weight"],a=i.length,o=0;o<a;++o)r=i[o],n.hasOwnProperty(r)&&(t[r]=n[r])},update:function(e,i,a){function o(e){var t,n=e.isHorizontal();n?(t=e.update(e.fullWidth?b:D,w),T-=t.height):(t=e.update(x,Y),D-=t.width),S.push({horizontal:n,minSize:t,box:e})}function s(e){var t=r.findNextWhere(S,function(t){return t.box===e});if(t)if(e.isHorizontal()){var n={left:Math.max(C,j),right:Math.max(O,H),top:0,bottom:0};e.update(e.fullWidth?b:D,L/2,n)}else e.update(t.minSize.width,T)}function u(e){var t=r.findNextWhere(S,function(t){return t.box===e}),n={left:0,right:0,top:F,bottom:W};t&&e.update(t.minSize.width,T,n)}function d(e){e.isHorizontal()?(e.left=e.fullWidth?h:C,e.right=e.fullWidth?i-_:C+D,e.top=V,e.bottom=V+e.height,V=e.bottom):(e.left=N,e.right=N+e.width,e.top=F,e.bottom=F+T,N=e.right)}if(e){var l=e.options.layout,c=l?l.padding:null,h=0,_=0,f=0,m=0;isNaN(c)?(h=c.left||0,_=c.right||0,f=c.top||0,m=c.bottom||0):(h=c,_=c,f=c,m=c);var p=t(e.boxes,"left"),g=t(e.boxes,"right"),v=t(e.boxes,"top"),y=t(e.boxes,"bottom"),M=t(e.boxes,"chartArea");
n(p,!0),n(g,!1),n(v,!0),n(y,!1);var b=i-h-_,L=a-f-m,k=b/2,Y=L/2,x=(i-k)/(p.length+g.length),w=(a-Y)/(v.length+y.length),D=b,T=L,S=[];r.each(p.concat(g,v,y),o);var j=0,H=0,A=0,P=0;r.each(v.concat(y),function(e){if(e.getPadding){var t=e.getPadding();j=Math.max(j,t.left),H=Math.max(H,t.right)}}),r.each(p.concat(g),function(e){if(e.getPadding){var t=e.getPadding();A=Math.max(A,t.top),P=Math.max(P,t.bottom)}});var C=h,O=_,F=f,W=m;r.each(p.concat(g),s),r.each(p,function(e){C+=e.width}),r.each(g,function(e){O+=e.width}),r.each(v.concat(y),s),r.each(v,function(e){F+=e.height}),r.each(y,function(e){W+=e.height}),r.each(p.concat(g),u),C=h,O=_,F=f,W=m,r.each(p,function(e){C+=e.width}),r.each(g,function(e){O+=e.width}),r.each(v,function(e){F+=e.height}),r.each(y,function(e){W+=e.height});var I=Math.max(j-C,0);C+=I,O+=Math.max(H-O,0);var E=Math.max(A-F,0);F+=E,W+=Math.max(P-W,0);var z=a-F-W,R=i-C-O;R===D&&z===T||(r.each(p,function(e){e.height=z}),r.each(g,function(e){e.height=z}),r.each(v,function(e){e.fullWidth||(e.width=R)}),r.each(y,function(e){e.fullWidth||(e.width=R)}),T=z,D=R);var N=h+I,V=f+E;r.each(p.concat(v),d),N+=D,V+=T,r.each(g,d),r.each(y,d),e.chartArea={left:C,top:F,right:C+D,bottom:F+T},r.each(M,function(t){t.left=e.chartArea.left,t.top=e.chartArea.top,t.right=e.chartArea.right,t.bottom=e.chartArea.bottom,t.update(D,T)})}}}}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.defaults.global.plugins={},e.plugins={_plugins:[],_cacheId:0,register:function(e){var t=this._plugins;[].concat(e).forEach(function(e){t.indexOf(e)===-1&&t.push(e)}),this._cacheId++},unregister:function(e){var t=this._plugins;[].concat(e).forEach(function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(e,t,n){var r,i,a,o,s,u=this.descriptors(e),d=u.length;for(r=0;r<d;++r)if(i=u[r],a=i.plugin,s=a[t],"function"==typeof s&&(o=[e].concat(n||[]),o.push(i.options),s.apply(a,o)===!1))return!1;return!0},descriptors:function(n){var r=n._plugins||(n._plugins={});if(r.id===this._cacheId)return r.descriptors;var i=[],a=[],o=n&&n.config||{},s=e.defaults.global.plugins,u=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(e){var n=i.indexOf(e);if(n===-1){var r=e.id,o=u[r];o!==!1&&(o===!0&&(o=t.clone(s[r])),i.push(e),a.push({plugin:e,options:o||{}}))}}),r.descriptors=a,r.id=this._cacheId,a}},e.pluginService=e.plugins,e.PluginBase=e.Element.extend({})}},function(e,t){"use strict";e.exports=function(e){function t(e,t,n){return r.isArray(t)?r.longestText(e,n,t):e.measureText(t).width}function n(t){var n=r.getValueOrDefault,i=e.defaults.global,a=n(t.fontSize,i.defaultFontSize),o=n(t.fontStyle,i.defaultFontStyle),s=n(t.fontFamily,i.defaultFontFamily);return{size:a,style:o,family:s,font:r.fontString(a,o,s)}}var r=e.helpers;e.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:e.Ticks.formatters.values}},e.Scale=e.Element.extend({getPadding:function(){var e=this;return{left:e.paddingLeft||0,top:e.paddingTop||0,right:e.paddingRight||0,bottom:e.paddingBottom||0}},beforeUpdate:function(){r.callback(this.options.beforeUpdate,[this])},update:function(e,t,n){var i=this;return i.beforeUpdate(),i.maxWidth=e,i.maxHeight=t,i.margins=r.extend({left:0,right:0,top:0,bottom:0},n),i.longestTextCache=i.longestTextCache||{},i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeDataLimits(),i.determineDataLimits(),i.afterDataLimits(),i.beforeBuildTicks(),i.buildTicks(),i.afterBuildTicks(),i.beforeTickToLabelConversion(),i.convertTicksToLabels(),i.afterTickToLabelConversion(),i.beforeCalculateTickRotation(),i.calculateTickRotation(),i.afterCalculateTickRotation(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:function(){r.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){r.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height),e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0},afterSetDimensions:function(){r.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){r.callback(this.options.beforeDataLimits,[this])},determineDataLimits:r.noop,afterDataLimits:function(){r.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){r.callback(this.options.beforeBuildTicks,[this])},buildTicks:r.noop,afterBuildTicks:function(){r.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){r.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var e=this,t=e.options.ticks;e.ticks=e.ticks.map(t.userCallback||t.callback)},afterTickToLabelConversion:function(){r.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){r.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var e=this,t=e.ctx,i=e.options.ticks,a=n(i);t.font=a.font;var o=i.minRotation||0;if(e.options.display&&e.isHorizontal())for(var s,u,d=r.longestText(t,a.font,e.ticks,e.longestTextCache),l=d,c=e.getPixelForTick(1)-e.getPixelForTick(0)-6;l>c&&o<i.maxRotation;){var h=r.toRadians(o);if(s=Math.cos(h),u=Math.sin(h),u*d>e.maxHeight){o--;break}o++,l=s*d}e.labelRotation=o},afterCalculateTickRotation:function(){r.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){r.callback(this.options.beforeFit,[this])},fit:function(){var e=this,i=e.minSize={width:0,height:0},a=e.options,o=a.ticks,s=a.scaleLabel,u=a.gridLines,d=a.display,l=e.isHorizontal(),c=n(o),h=1.5*n(s).size,_=a.gridLines.tickMarkLength;if(l?i.width=e.isFullWidth()?e.maxWidth-e.margins.left-e.margins.right:e.maxWidth:i.width=d&&u.drawTicks?_:0,l?i.height=d&&u.drawTicks?_:0:i.height=e.maxHeight,s.display&&d&&(l?i.height+=h:i.width+=h),o.display&&d){var f=r.longestText(e.ctx,c.font,e.ticks,e.longestTextCache),m=r.numberOfLabelLines(e.ticks),p=.5*c.size;if(l){e.longestLabelWidth=f;var g=r.toRadians(e.labelRotation),v=Math.cos(g),y=Math.sin(g),M=y*f+c.size*m+p*m;i.height=Math.min(e.maxHeight,i.height+M),e.ctx.font=c.font;var b=e.ticks[0],L=t(e.ctx,b,c.font),k=e.ticks[e.ticks.length-1],Y=t(e.ctx,k,c.font);0!==e.labelRotation?(e.paddingLeft="bottom"===a.position?v*L+3:v*p+3,e.paddingRight="bottom"===a.position?v*p+3:v*Y+3):(e.paddingLeft=L/2+3,e.paddingRight=Y/2+3)}else o.mirror?f=0:f+=e.options.ticks.padding,i.width=Math.min(e.maxWidth,i.width+f),e.paddingTop=c.size/2,e.paddingBottom=c.size/2}e.handleMargins(),e.width=i.width,e.height=i.height},handleMargins:function(){var e=this;e.margins&&(e.paddingLeft=Math.max(e.paddingLeft-e.margins.left,0),e.paddingTop=Math.max(e.paddingTop-e.margins.top,0),e.paddingRight=Math.max(e.paddingRight-e.margins.right,0),e.paddingBottom=Math.max(e.paddingBottom-e.margins.bottom,0))},afterFit:function(){r.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(e){return null===e||"undefined"==typeof e?NaN:"number"!=typeof e||isFinite(e)?"object"==typeof e?e instanceof Date||e.isValid?e:this.getRightValue(this.isHorizontal()?e.x:e.y):e:NaN},getLabelForIndex:r.noop,getPixelForValue:r.noop,getValueForPixel:r.noop,getPixelForTick:function(e,t){var n=this;if(n.isHorizontal()){var r=n.width-(n.paddingLeft+n.paddingRight),i=r/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=i*e+n.paddingLeft;t&&(a+=i/2);var o=n.left+Math.round(a);return o+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+e*(s/(n.ticks.length-1))},getPixelForDecimal:function(e){var t=this;if(t.isHorizontal()){var n=t.width-(t.paddingLeft+t.paddingRight),r=n*e+t.paddingLeft,i=t.left+Math.round(r);return i+=t.isFullWidth()?t.margins.left:0}return t.top+e*t.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var e=this,t=e.min,n=e.max;return e.beginAtZero?0:t<0&&n<0?n:t>0&&n>0?t:0},draw:function(t){var i=this,a=i.options;if(a.display){var o,s,u=i.ctx,d=e.defaults.global,l=a.ticks,c=a.gridLines,h=a.scaleLabel,_=0!==i.labelRotation,f=l.autoSkip,m=i.isHorizontal();l.maxTicksLimit&&(s=l.maxTicksLimit);var p=r.getValueOrDefault(l.fontColor,d.defaultFontColor),g=n(l),v=c.drawTicks?c.tickMarkLength:0,y=r.getValueOrDefault(h.fontColor,d.defaultFontColor),M=n(h),b=r.toRadians(i.labelRotation),L=Math.cos(b),k=i.longestLabelWidth*L;u.fillStyle=p;var Y=[];if(m){if(o=!1,(k+l.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(o=1+Math.floor((k+l.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),s&&i.ticks.length>s)for(;!o||i.ticks.length/(o||1)>s;)o||(o=1),o+=1;f||(o=!1)}var x="right"===a.position?i.left:i.right-v,w="right"===a.position?i.left+v:i.right,D="bottom"===a.position?i.top:i.bottom-v,T="bottom"===a.position?i.top+v:i.bottom;if(r.each(i.ticks,function(e,n){if(void 0!==e&&null!==e){var s=i.ticks.length===n+1,u=o>1&&n%o>0||n%o===0&&n+o>=i.ticks.length;if((!u||s)&&void 0!==e&&null!==e){var h,f,p,g;n===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(h=c.zeroLineWidth,f=c.zeroLineColor,p=c.zeroLineBorderDash,g=c.zeroLineBorderDashOffset):(h=r.getValueAtIndexOrDefault(c.lineWidth,n),f=r.getValueAtIndexOrDefault(c.color,n),p=r.getValueOrDefault(c.borderDash,d.borderDash),g=r.getValueOrDefault(c.borderDashOffset,d.borderDashOffset));var y,M,L,k,S,j,H,A,P,C,O="middle",F="middle";if(m){"bottom"===a.position?(F=_?"middle":"top",O=_?"right":"center",C=i.top+v):(F=_?"middle":"bottom",O=_?"left":"center",C=i.bottom-v);var W=i.getPixelForTick(n)+r.aliasPixel(h);P=i.getPixelForTick(n,c.offsetGridLines)+l.labelOffset,y=L=S=H=W,M=D,k=T,j=t.top,A=t.bottom}else{var I,E="left"===a.position,z=l.padding;l.mirror?(O=E?"left":"right",I=z):(O=E?"right":"left",I=v+z),P=E?i.right-I:i.left+I;var R=i.getPixelForTick(n);R+=r.aliasPixel(h),C=i.getPixelForTick(n,c.offsetGridLines),y=x,L=w,S=t.left,H=t.right,M=k=j=A=R}Y.push({tx1:y,ty1:M,tx2:L,ty2:k,x1:S,y1:j,x2:H,y2:A,labelX:P,labelY:C,glWidth:h,glColor:f,glBorderDash:p,glBorderDashOffset:g,rotation:-1*b,label:e,textBaseline:F,textAlign:O})}}}),r.each(Y,function(e){if(c.display&&(u.save(),u.lineWidth=e.glWidth,u.strokeStyle=e.glColor,u.setLineDash&&(u.setLineDash(e.glBorderDash),u.lineDashOffset=e.glBorderDashOffset),u.beginPath(),c.drawTicks&&(u.moveTo(e.tx1,e.ty1),u.lineTo(e.tx2,e.ty2)),c.drawOnChartArea&&(u.moveTo(e.x1,e.y1),u.lineTo(e.x2,e.y2)),u.stroke(),u.restore()),l.display){u.save(),u.translate(e.labelX,e.labelY),u.rotate(e.rotation),u.font=g.font,u.textBaseline=e.textBaseline,u.textAlign=e.textAlign;var t=e.label;if(r.isArray(t))for(var n=0,i=0;n<t.length;++n)u.fillText(""+t[n],0,i),i+=1.5*g.size;else u.fillText(t,0,0);u.restore()}}),h.display){var S,j,H=0;if(m)S=i.left+(i.right-i.left)/2,j="bottom"===a.position?i.bottom-M.size/2:i.top+M.size/2;else{var A="left"===a.position;S=A?i.left+M.size/2:i.right-M.size/2,j=i.top+(i.bottom-i.top)/2,H=A?-.5*Math.PI:.5*Math.PI}u.save(),u.translate(S,j),u.rotate(H),u.textAlign="center",u.textBaseline="middle",u.fillStyle=y,u.font=M.font,u.fillText(h.labelString,0,0),u.restore()}if(c.drawBorder){u.lineWidth=r.getValueAtIndexOrDefault(c.lineWidth,0),u.strokeStyle=r.getValueAtIndexOrDefault(c.color,0);var P=i.left,C=i.right,O=i.top,F=i.bottom,W=r.aliasPixel(u.lineWidth);m?(O=F="top"===a.position?i.bottom:i.top,O+=W,F+=W):(P=C="left"===a.position?i.right:i.left,P+=W,C+=W),u.beginPath(),u.moveTo(P,O),u.lineTo(C,F),u.stroke()}}}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.scaleService={constructors:{},defaults:{},registerScaleType:function(e,n,r){this.constructors[e]=n,this.defaults[e]=t.clone(r)},getScaleConstructor:function(e){return this.constructors.hasOwnProperty(e)?this.constructors[e]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?t.scaleMerge(e.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(e,n){var r=this.defaults;r.hasOwnProperty(e)&&(r[e]=t.extend(r[e],n))},addScalesToLayout:function(n){t.each(n.scales,function(t){t.fullWidth=t.options.fullWidth,t.position=t.options.position,t.weight=t.options.weight,e.layoutService.addBox(n,t)})}}}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers;e.Ticks={generators:{linear:function(e,n){var r,i=[];if(e.stepSize&&e.stepSize>0)r=e.stepSize;else{var a=t.niceNum(n.max-n.min,!1);r=t.niceNum(a/(e.maxTicks-1),!0)}var o=Math.floor(n.min/r)*r,s=Math.ceil(n.max/r)*r;e.min&&e.max&&e.stepSize&&t.almostWhole((e.max-e.min)/e.stepSize,r/1e3)&&(o=e.min,s=e.max);var u=(s-o)/r;u=t.almostEquals(u,Math.round(u),r/1e3)?Math.round(u):Math.ceil(u),i.push(void 0!==e.min?e.min:o);for(var d=1;d<u;++d)i.push(o+d*r);return i.push(void 0!==e.max?e.max:s),i},logarithmic:function(e,n){var r,i,a=[],o=t.getValueOrDefault,s=o(e.min,Math.pow(10,Math.floor(t.log10(n.min)))),u=Math.floor(t.log10(n.max)),d=Math.ceil(n.max/Math.pow(10,u));0===s?(r=Math.floor(t.log10(n.minNotZero)),i=Math.floor(n.minNotZero/Math.pow(10,r)),a.push(s),s=i*Math.pow(10,r)):(r=Math.floor(t.log10(s)),i=Math.floor(s/Math.pow(10,r)));do a.push(s),++i,10===i&&(i=1,++r),s=i*Math.pow(10,r);while(r<u||r===u&&i<d);var l=o(e.max,s);return a.push(l),a}},formatters:{values:function(e){return t.isArray(e)?e:""+e},linear:function(e,n,r){var i=r.length>3?r[2]-r[1]:r[1]-r[0];Math.abs(i)>1&&e!==Math.floor(e)&&(i=e-Math.floor(e));var a=t.log10(Math.abs(i)),o="";if(0!==e){var s=-1*Math.floor(a);s=Math.max(Math.min(s,20),0),o=e.toFixed(s)}else o="0";return o},logarithmic:function(e,n,r){var i=e/Math.pow(10,Math.floor(t.log10(e)));return 0===e?"0":1===i||2===i||5===i||0===n||n===r.length-1?e.toExponential():""}}}}},function(e,t){"use strict";e.exports=function(e){function t(e,t){var n=u.color(e);return n.alpha(t*n.alpha()).rgbaString()}function n(e,t){return t&&(u.isArray(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function r(e){var t=e._xScale,n=e._yScale||e._scale,r=e._index,i=e._datasetIndex;return{xLabel:t?t.getLabelForIndex(r,i):"",yLabel:n?n.getLabelForIndex(r,i):"",index:r,datasetIndex:i,x:e._model.x,y:e._model.y}}function i(t){var n=e.defaults.global,r=u.getValueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:r(t.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:r(t.bodyFontStyle,n.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:r(t.bodyFontSize,n.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:r(t.titleFontFamily,n.defaultFontFamily),_titleFontStyle:r(t.titleFontStyle,n.defaultFontStyle),titleFontSize:r(t.titleFontSize,n.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:r(t.footerFontFamily,n.defaultFontFamily),_footerFontStyle:r(t.footerFontStyle,n.defaultFontStyle),footerFontSize:r(t.footerFontSize,n.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function a(e,t){var n=e._chart.ctx,r=2*t.yPadding,i=0,a=t.body,o=a.reduce(function(e,t){return e+t.before.length+t.lines.length+t.after.length},0);o+=t.beforeBody.length+t.afterBody.length;var s=t.title.length,d=t.footer.length,l=t.titleFontSize,c=t.bodyFontSize,h=t.footerFontSize;r+=s*l,r+=s?(s-1)*t.titleSpacing:0,r+=s?t.titleMarginBottom:0,r+=o*c,r+=o?(o-1)*t.bodySpacing:0,r+=d?t.footerMarginTop:0,r+=d*h,r+=d?(d-1)*t.footerSpacing:0;var _=0,f=function(e){i=Math.max(i,n.measureText(e).width+_)};return n.font=u.fontString(l,t._titleFontStyle,t._titleFontFamily),u.each(t.title,f),n.font=u.fontString(c,t._bodyFontStyle,t._bodyFontFamily),u.each(t.beforeBody.concat(t.afterBody),f),_=t.displayColors?c+2:0,u.each(a,function(e){u.each(e.before,f),u.each(e.lines,f),u.each(e.after,f)}),_=0,n.font=u.fontString(h,t._footerFontStyle,t._footerFontFamily),u.each(t.footer,f),i+=2*t.xPadding,{width:i,height:r}}function o(e,t){var n=e._model,r=e._chart,i=e._chart.chartArea,a="center",o="center";n.y<t.height?o="top":n.y>r.height-t.height&&(o="bottom");var s,u,d,l,c,h=(i.left+i.right)/2,_=(i.top+i.bottom)/2;"center"===o?(s=function(e){return e<=h},u=function(e){return e>h}):(s=function(e){return e<=t.width/2},u=function(e){return e>=r.width-t.width/2}),d=function(e){return e+t.width>r.width},l=function(e){return e-t.width<0},c=function(e){return e<=_?"top":"bottom"},s(n.x)?(a="left",d(n.x)&&(a="center",o=c(n.y))):u(n.x)&&(a="right",l(n.x)&&(a="center",o=c(n.y)));var f=e._options;return{xAlign:f.xAlign?f.xAlign:a,yAlign:f.yAlign?f.yAlign:o}}function s(e,t,n){var r=e.x,i=e.y,a=e.caretSize,o=e.caretPadding,s=e.cornerRadius,u=n.xAlign,d=n.yAlign,l=a+o,c=s+o;return"right"===u?r-=t.width:"center"===u&&(r-=t.width/2),"top"===d?i+=l:i-="bottom"===d?t.height+l:t.height/2,"center"===d?"left"===u?r+=l:"right"===u&&(r-=l):"left"===u?r-=c:"right"===u&&(r+=c),{x:r,y:i}}var u=e.helpers;e.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:u.noop,title:function(e,t){var n="",r=t.labels,i=r?r.length:0;if(e.length>0){var a=e[0];a.xLabel?n=a.xLabel:i>0&&a.index<i&&(n=r[a.index])}return n},afterTitle:u.noop,beforeBody:u.noop,beforeLabel:u.noop,label:function(e,t){var n=t.datasets[e.datasetIndex].label||"";return n&&(n+=": "),n+=e.yLabel},labelColor:function(e,t){var n=t.getDatasetMeta(e.datasetIndex),r=n.data[e.index],i=r._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},afterLabel:u.noop,afterBody:u.noop,beforeFooter:u.noop,footer:u.noop,afterFooter:u.noop}},e.Tooltip=e.Element.extend({initialize:function(){this._model=i(this._options)},getTitle:function(){var e=this,t=e._options,r=t.callbacks,i=r.beforeTitle.apply(e,arguments),a=r.title.apply(e,arguments),o=r.afterTitle.apply(e,arguments),s=[];return s=n(s,i),s=n(s,a),s=n(s,o)},getBeforeBody:function(){var e=this._options.callbacks.beforeBody.apply(this,arguments);return u.isArray(e)?e:void 0!==e?[e]:[]},getBody:function(e,t){var r=this,i=r._options.callbacks,a=[];return u.each(e,function(e){var o={before:[],lines:[],after:[]};n(o.before,i.beforeLabel.call(r,e,t)),n(o.lines,i.label.call(r,e,t)),n(o.after,i.afterLabel.call(r,e,t)),a.push(o)}),a},getAfterBody:function(){var e=this._options.callbacks.afterBody.apply(this,arguments);return u.isArray(e)?e:void 0!==e?[e]:[]},getFooter:function(){var e=this,t=e._options.callbacks,r=t.beforeFooter.apply(e,arguments),i=t.footer.apply(e,arguments),a=t.afterFooter.apply(e,arguments),o=[];return o=n(o,r),o=n(o,i),o=n(o,a)},update:function(t){var n,d,l=this,c=l._options,h=l._model,_=l._model=i(c),f=l._active,m=l._data,p={xAlign:h.xAlign,yAlign:h.yAlign},g={x:h.x,y:h.y},v={width:h.width,height:h.height},y={x:h.caretX,y:h.caretY};if(f.length){_.opacity=1;var M=[];y=e.Tooltip.positioners[c.position](f,l._eventPosition);var b=[];for(n=0,d=f.length;n<d;++n)b.push(r(f[n]));c.filter&&(b=b.filter(function(e){return c.filter(e,m)})),c.itemSort&&(b=b.sort(function(e,t){return c.itemSort(e,t,m)})),u.each(b,function(e){M.push(c.callbacks.labelColor.call(l,e,l._chart))}),_.title=l.getTitle(b,m),_.beforeBody=l.getBeforeBody(b,m),_.body=l.getBody(b,m),_.afterBody=l.getAfterBody(b,m),_.footer=l.getFooter(b,m),_.x=Math.round(y.x),_.y=Math.round(y.y),_.caretPadding=c.caretPadding,_.labelColors=M,_.dataPoints=b,v=a(this,_),p=o(this,v),g=s(_,v,p)}else _.opacity=0;return _.xAlign=p.xAlign,_.yAlign=p.yAlign,_.x=g.x,_.y=g.y,_.width=v.width,_.height=v.height,_.caretX=y.x,_.caretY=y.y,l._model=_,t&&c.custom&&c.custom.call(l,_),l},drawCaret:function(e,t){var n=this._chart.ctx,r=this._view,i=this.getCaretPosition(e,t,r);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)},getCaretPosition:function(e,t,n){var r,i,a,o,s,u,d=n.caretSize,l=n.cornerRadius,c=n.xAlign,h=n.yAlign,_=e.x,f=e.y,m=t.width,p=t.height;if("center"===h)s=f+p/2,"left"===c?(r=_,i=r-d,a=r,o=s+d,u=s-d):(r=_+m,i=r+d,a=r,o=s-d,u=s+d);else if("left"===c?(i=_+l+d,r=i-d,a=i+d):"right"===c?(i=_+m-l-d,r=i-d,a=i+d):(i=_+m/2,r=i-d,a=i+d),"top"===h)o=f,s=o-d,u=o;else{o=f+p,s=o+d,u=o;var g=a;a=r,r=g}return{x1:r,x2:i,x3:a,y1:o,y2:s,y3:u}},drawTitle:function(e,n,r,i){var a=n.title;if(a.length){r.textAlign=n._titleAlign,r.textBaseline="top";var o=n.titleFontSize,s=n.titleSpacing;r.fillStyle=t(n.titleFontColor,i),r.font=u.fontString(o,n._titleFontStyle,n._titleFontFamily);var d,l;for(d=0,l=a.length;d<l;++d)r.fillText(a[d],e.x,e.y),e.y+=o+s,d+1===a.length&&(e.y+=n.titleMarginBottom-s)}},drawBody:function(e,n,r,i){var a=n.bodyFontSize,o=n.bodySpacing,s=n.body;r.textAlign=n._bodyAlign,r.textBaseline="top";var d=t(n.bodyFontColor,i);r.fillStyle=d,r.font=u.fontString(a,n._bodyFontStyle,n._bodyFontFamily);var l=0,c=function(t){r.fillText(t,e.x+l,e.y),e.y+=a+o};u.each(n.beforeBody,c);var h=n.displayColors;l=h?a+2:0,u.each(s,function(o,s){u.each(o.before,c),u.each(o.lines,function(o){h&&(r.fillStyle=t(n.legendColorBackground,i),r.fillRect(e.x,e.y,a,a),r.strokeStyle=t(n.labelColors[s].borderColor,i),r.strokeRect(e.x,e.y,a,a),r.fillStyle=t(n.labelColors[s].backgroundColor,i),r.fillRect(e.x+1,e.y+1,a-2,a-2),r.fillStyle=d),c(o)}),u.each(o.after,c)}),l=0,u.each(n.afterBody,c),e.y-=o},drawFooter:function(e,n,r,i){var a=n.footer;a.length&&(e.y+=n.footerMarginTop,r.textAlign=n._footerAlign,r.textBaseline="top",r.fillStyle=t(n.footerFontColor,i),r.font=u.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),u.each(a,function(t){r.fillText(t,e.x,e.y),e.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(e,n,r,i,a){r.fillStyle=t(n.backgroundColor,a),r.strokeStyle=t(n.borderColor,a),r.lineWidth=n.borderWidth;var o=n.xAlign,s=n.yAlign,u=e.x,d=e.y,l=i.width,c=i.height,h=n.cornerRadius;r.beginPath(),r.moveTo(u+h,d),"top"===s&&this.drawCaret(e,i),r.lineTo(u+l-h,d),r.quadraticCurveTo(u+l,d,u+l,d+h),"center"===s&&"right"===o&&this.drawCaret(e,i),r.lineTo(u+l,d+c-h),r.quadraticCurveTo(u+l,d+c,u+l-h,d+c),"bottom"===s&&this.drawCaret(e,i),r.lineTo(u+h,d+c),r.quadraticCurveTo(u,d+c,u,d+c-h),"center"===s&&"left"===o&&this.drawCaret(e,i),r.lineTo(u,d+h),r.quadraticCurveTo(u,d,u+h,d),r.closePath(),r.fill(),n.borderWidth>0&&r.stroke()},draw:function(){var e=this._chart.ctx,t=this._view;if(0!==t.opacity){var n={width:t.width,height:t.height},r={x:t.x,y:t.y},i=Math.abs(t.opacity<.001)?0:t.opacity,a=t.title.length||t.beforeBody.length||t.body.length||t.afterBody.length||t.footer.length;this._options.enabled&&a&&(this.drawBackground(r,t,e,n,i),r.x+=t.xPadding,r.y+=t.yPadding,this.drawTitle(r,t,e,i),this.drawBody(r,t,e,i),this.drawFooter(r,t,e,i))}},handleEvent:function(e){var t=this,n=t._options,r=!1;if(t._lastActive=t._lastActive||[],"mouseout"===e.type?t._active=[]:t._active=t._chart.getElementsAtEventForMode(e,n.mode,n),r=!u.arrayEquals(t._active,t._lastActive),!r)return!1;if(t._lastActive=t._active,n.enabled||n.custom){t._eventPosition={x:e.x,y:e.y};var i=t._model;t.update(!0),t.pivot(),r|=i.x!==t._model.x||i.y!==t._model.y}return r}}),e.Tooltip.positioners={average:function(e){if(!e.length)return!1;var t,n,r=0,i=0,a=0;for(t=0,n=e.length;t<n;++t){var o=e[t];if(o&&o.hasValue()){var s=o.tooltipPosition();r+=s.x,i+=s.y,++a}}return{x:Math.round(r/a),y:Math.round(i/a)}},nearest:function(e,t){var n,r,i,a=t.x,o=t.y,s=Number.POSITIVE_INFINITY;for(r=0,i=e.length;r<i;++r){var d=e[r];if(d&&d.hasValue()){var l=d.getCenterPoint(),c=u.distanceBetweenPoints(t,l);c<s&&(s=c,n=d)}}if(n){var h=n.tooltipPosition();a=h.x,o=h.y}return{x:a,y:o}}}}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n=e.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},e.elements.Arc=e.Element.extend({inLabelRange:function(e){var t=this._view;return!!t&&Math.pow(e-t.x,2)<Math.pow(t.radius+t.hoverRadius,2)},inRange:function(e,n){var r=this._view;if(r){for(var i=t.getAngleFromPoint(r,{x:e,y:n}),a=i.angle,o=i.distance,s=r.startAngle,u=r.endAngle;u<s;)u+=2*Math.PI;for(;a>u;)a-=2*Math.PI;for(;a<s;)a+=2*Math.PI;var d=a>=s&&a<=u,l=o>=r.innerRadius&&o<=r.outerRadius;return d&&l}return!1},getCenterPoint:function(){var e=this._view,t=(e.startAngle+e.endAngle)/2,n=(e.innerRadius+e.outerRadius)/2;return{x:e.x+Math.cos(t)*n,y:e.y+Math.sin(t)*n}},getArea:function(){var e=this._view;return Math.PI*((e.endAngle-e.startAngle)/(2*Math.PI))*(Math.pow(e.outerRadius,2)-Math.pow(e.innerRadius,2))},tooltipPosition:function(){var e=this._view,t=e.startAngle+(e.endAngle-e.startAngle)/2,n=(e.outerRadius-e.innerRadius)/2+e.innerRadius;return{x:e.x+Math.cos(t)*n,y:e.y+Math.sin(t)*n}},draw:function(){var e=this._chart.ctx,t=this._view,n=t.startAngle,r=t.endAngle;e.beginPath(),e.arc(t.x,t.y,t.outerRadius,n,r),e.arc(t.x,t.y,t.innerRadius,r,n,!0),e.closePath(),e.strokeStyle=t.borderColor,e.lineWidth=t.borderWidth,e.fillStyle=t.backgroundColor,e.fill(),e.lineJoin="bevel",t.borderWidth&&e.stroke()}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n=e.defaults.global;e.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},e.elements.Line=e.Element.extend({draw:function(){var e,r,i,a,o=this,s=o._view,u=o._chart.ctx,d=s.spanGaps,l=o._children.slice(),c=n.elements.line,h=-1;for(o._loop&&l.length&&l.push(l[0]),u.save(),u.lineCap=s.borderCapStyle||c.borderCapStyle,u.setLineDash&&u.setLineDash(s.borderDash||c.borderDash),u.lineDashOffset=s.borderDashOffset||c.borderDashOffset,u.lineJoin=s.borderJoinStyle||c.borderJoinStyle,u.lineWidth=s.borderWidth||c.borderWidth,u.strokeStyle=s.borderColor||n.defaultColor,u.beginPath(),h=-1,e=0;e<l.length;++e)r=l[e],i=t.previousItem(l,e),a=r._view,0===e?a.skip||(u.moveTo(a.x,a.y),h=e):(i=h===-1?i:l[h],a.skip||(h!==e-1&&!d||h===-1?u.moveTo(a.x,a.y):t.canvas.lineTo(u,i._view,r._view),h=e));u.stroke(),u.restore()}})}},function(e,t){"use strict";e.exports=function(e){function t(e){var t=this._view;return!!t&&Math.pow(e-t.x,2)<Math.pow(t.radius+t.hitRadius,2)}function n(e){var t=this._view;return!!t&&Math.pow(e-t.y,2)<Math.pow(t.radius+t.hitRadius,2)}var r=e.helpers,i=e.defaults.global,a=i.defaultColor;i.elements.point={radius:3,pointStyle:"circle",backgroundColor:a,borderWidth:1,borderColor:a,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},e.elements.Point=e.Element.extend({inRange:function(e,t){var n=this._view;return!!n&&Math.pow(e-n.x,2)+Math.pow(t-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:t,inXRange:t,inYRange:n,getCenterPoint:function(){var e=this._view;return{x:e.x,y:e.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var e=this._view;return{x:e.x,y:e.y,padding:e.radius+e.borderWidth}},draw:function(t){var n=this._view,o=this._model,s=this._chart.ctx,u=n.pointStyle,d=n.radius,l=n.x,c=n.y,h=e.helpers.color,_=1.01,f=0;n.skip||(s.strokeStyle=n.borderColor||a,s.lineWidth=r.getValueOrDefault(n.borderWidth,i.elements.point.borderWidth),s.fillStyle=n.backgroundColor||a,void 0!==t&&(o.x<t.left||t.right*_<o.x||o.y<t.top||t.bottom*_<o.y)&&(o.x<t.left?f=(l-o.x)/(t.left-o.x):t.right*_<o.x?f=(o.x-l)/(o.x-t.right):o.y<t.top?f=(c-o.y)/(t.top-o.y):t.bottom*_<o.y&&(f=(o.y-c)/(o.y-t.bottom)),f=Math.round(100*f)/100,s.strokeStyle=h(s.strokeStyle).alpha(f).rgbString(),s.fillStyle=h(s.fillStyle).alpha(f).rgbString()),e.canvasHelpers.drawPoint(s,u,d,l,c))}})}},function(e,t){"use strict";e.exports=function(e){function t(e){return void 0!==e._view.width}function n(e){var n,r,i,a,o=e._view;if(t(e)){var s=o.width/2;n=o.x-s,r=o.x+s,i=Math.min(o.y,o.base),a=Math.max(o.y,o.base)}else{var u=o.height/2;n=Math.min(o.x,o.base),r=Math.max(o.x,o.base),i=o.y-u,a=o.y+u}return{left:n,top:i,right:r,bottom:a}}var r=e.defaults.global;r.elements.rectangle={backgroundColor:r.defaultColor,borderWidth:0,borderColor:r.defaultColor,borderSkipped:"bottom"},e.elements.Rectangle=e.Element.extend({draw:function(){function e(e){return g[(y+e)%4]}var t,n,r,i,a,o,s,u=this._chart.ctx,d=this._view,l=d.borderWidth;if(d.horizontal?(t=d.base,n=d.x,r=d.y-d.height/2,i=d.y+d.height/2,a=n>t?1:-1,o=1,s=d.borderSkipped||"left"):(t=d.x-d.width/2,n=d.x+d.width/2,r=d.y,i=d.base,a=1,o=i>r?1:-1,s=d.borderSkipped||"bottom"),l){var c=Math.min(Math.abs(t-n),Math.abs(r-i));l=l>c?c:l;var h=l/2,_=t+("left"!==s?h*a:0),f=n+("right"!==s?-h*a:0),m=r+("top"!==s?h*o:0),p=i+("bottom"!==s?-h*o:0);_!==f&&(r=m,i=p),m!==p&&(t=_,n=f)}u.beginPath(),u.fillStyle=d.backgroundColor,u.strokeStyle=d.borderColor,u.lineWidth=l;var g=[[t,i],[t,r],[n,r],[n,i]],v=["bottom","left","top","right"],y=v.indexOf(s,0);y===-1&&(y=0);var M=e(0);u.moveTo(M[0],M[1]);for(var b=1;b<4;b++)M=e(b),u.lineTo(M[0],M[1]);u.fill(),l&&u.stroke()},height:function(){var e=this._view;return e.base-e.y},inRange:function(e,t){var r=!1;if(this._view){var i=n(this);r=e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom}return r},inLabelRange:function(e,r){var i=this;if(!i._view)return!1;var a=!1,o=n(i);return a=t(i)?e>=o.left&&e<=o.right:r>=o.top&&r<=o.bottom},inXRange:function(e){var t=n(this);return e>=t.left&&e<=t.right},inYRange:function(e){var t=n(this);return e>=t.top&&e<=t.bottom},getCenterPoint:function(){var e,n,r=this._view;return t(this)?(e=r.x,n=(r.y+r.base)/2):(e=(r.x+r.base)/2,n=r.y),{x:e,y:n}},getArea:function(){var e=this._view;return e.width*Math.abs(e.y-e.base)},tooltipPosition:function(){var e=this._view;return{x:e.x,y:e.y}}})}},function(e,t){"use strict";e.exports=function(e){function t(e,t){var n=u.getStyle(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?Number(r[1]):void 0}function n(e,n){var r=e.style,i=e.getAttribute("height"),a=e.getAttribute("width");if(e._chartjs={initial:{height:i,width:a,style:{display:r.display,height:r.height,width:r.width}}},r.display=r.display||"block",null===a||""===a){var o=t(e,"width");void 0!==o&&(e.width=o)}if(null===i||""===i)if(""===e.style.height)e.height=e.width/(n.options.aspectRatio||2);else{var s=t(e,"height");void 0!==o&&(e.height=s)}return e}function r(e,t,n,r,i){return{type:e,chart:t,native:i||null,x:void 0!==n?n:null,y:void 0!==r?r:null}}function i(e,t){var n=d[e.type]||e.type,i=u.getRelativePosition(e,t);return r(n,t,i.x,i.y,e)}function a(e){var t=document.createElement("iframe");return t.className="chartjs-hidden-iframe",t.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",t.tabIndex=-1,u.addEvent(t,"load",function(){u.addEvent(t.contentWindow||t,"resize",e),e()}),t}function o(e,t,n){
var i=e._chartjs={ticking:!1},o=function(){i.ticking||(i.ticking=!0,u.requestAnimFrame.call(window,function(){if(i.resizer)return i.ticking=!1,t(r("resize",n))}))};i.resizer=a(o),e.insertBefore(i.resizer,e.firstChild)}function s(e){if(e&&e._chartjs){var t=e._chartjs.resizer;t&&(t.parentNode.removeChild(t),e._chartjs.resizer=null),delete e._chartjs}}var u=e.helpers,d={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};return{acquireContext:function(e,t){"string"==typeof e?e=document.getElementById(e):e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas);var r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(n(e,t),r):null},releaseContext:function(e){var t=e.canvas;if(t._chartjs){var n=t._chartjs.initial;["height","width"].forEach(function(e){var r=n[e];void 0===r||null===r?t.removeAttribute(e):t.setAttribute(e,r)}),u.each(n.style||{},function(e,n){t.style[n]=e}),t.width=t.width,delete t._chartjs}},addEventListener:function(e,t,n){var r=e.canvas;if("resize"===t)return void o(r.parentNode,n,e);var a=n._chartjs||(n._chartjs={}),s=a.proxies||(a.proxies={}),d=s[e.id+"_"+t]=function(t){n(i(t,e))};u.addEvent(r,t,d)},removeEventListener:function(e,t,n){var r=e.canvas;if("resize"===t)return void s(r.parentNode,n);var i=n._chartjs||{},a=i.proxies||{},o=a[e.id+"_"+t];o&&u.removeEvent(r,t,o)}}}},function(e,t,n){"use strict";var r=n(246);e.exports=function(e){e.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},e.helpers.extend(e.platform,r(e))}},function(e,t){"use strict";e.exports=function(e){function t(e,t,n){var r,i=e._model||{},a=i.fill;if(void 0===a&&(a=!!i.backgroundColor),a===!1||null===a)return!1;if(a===!0)return"origin";if(r=parseFloat(a,10),isFinite(r)&&Math.floor(r)===r)return"-"!==a[0]&&"+"!==a[0]||(r=t+r),!(r===t||r<0||r>=n)&&r;switch(a){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return a;default:return!1}}function n(e){var t,n=e.el._model||{},r=e.el._scale||{},i=e.fill,a=null;if(isFinite(i))return null;if("start"===i?a=void 0===n.scaleBottom?r.bottom:n.scaleBottom:"end"===i?a=void 0===n.scaleTop?r.top:n.scaleTop:void 0!==n.scaleZero?a=n.scaleZero:r.getBasePosition?a=r.getBasePosition():r.getBasePixel&&(a=r.getBasePixel()),void 0!==a&&null!==a){if(void 0!==a.x&&void 0!==a.y)return a;if("number"==typeof a&&isFinite(a))return t=r.isHorizontal(),{x:t?a:null,y:t?null:a}}return null}function r(e,t,n){var r,i=e[t],a=i.fill,o=[t];if(!n)return a;for(;a!==!1&&o.indexOf(a)===-1;){if(!isFinite(a))return a;if(r=e[a],!r)return!1;if(r.visible)return a;o.push(a),a=r.fill}return!1}function i(e){var t=e.fill,n="dataset";return t===!1?null:(isFinite(t)||(n="boundary"),l[n](e))}function a(e){return e&&!e.skip}function o(e,t,n,r,i){var a;if(r&&i){for(e.moveTo(t[0].x,t[0].y),a=1;a<r;++a)d.canvas.lineTo(e,t[a-1],t[a]);for(e.lineTo(n[i-1].x,n[i-1].y),a=i-1;a>0;--a)d.canvas.lineTo(e,n[a],n[a-1],!0)}}function s(e,t,n,r,i,s){var u,d,l,c,h,_,f,m=t.length,p=r.spanGaps,g=[],v=[],y=0,M=0;for(e.beginPath(),u=0,d=m+!!s;u<d;++u)l=u%m,c=t[l]._view,h=n(c,l,r),_=a(c),f=a(h),_&&f?(y=g.push(c),M=v.push(h)):y&&M&&(p?(_&&g.push(c),f&&v.push(h)):(o(e,g,v,y,M),y=M=0,g=[],v=[]));o(e,g,v,y,M),e.closePath(),e.fillStyle=i,e.fill()}e.defaults.global.plugins.filler={propagate:!0};var u=e.defaults,d=e.helpers,l={dataset:function(e){var t=e.fill,n=e.chart,r=n.getDatasetMeta(t),i=r&&n.isDatasetVisible(t),a=i&&r.dataset._children||[];return a.length?function(e,t){return a[t]._view||null}:null},boundary:function(e){var t=e.boundary,n=t?t.x:null,r=t?t.y:null;return function(e){return{x:null===n?e.x:n,y:null===r?e.y:r}}}};return{id:"filler",afterDatasetsUpdate:function(a,o){var s,u,d,l,c=(a.data.datasets||[]).length,h=o.propagate,_=[];for(u=0;u<c;++u)s=a.getDatasetMeta(u),d=s.dataset,l=null,d&&d._model&&d instanceof e.elements.Line&&(l={visible:a.isDatasetVisible(u),fill:t(d,u,c),chart:a,el:d}),s.$filler=l,_.push(l);for(u=0;u<c;++u)l=_[u],l&&(l.fill=r(_,u,h),l.boundary=n(l),l.mapper=i(l))},beforeDatasetDraw:function(e,t){var n=t.meta.$filler;if(n){var r=n.el,i=r._view,a=r._children||[],o=n.mapper,d=i.backgroundColor||u.global.defaultColor;o&&d&&a.length&&s(e.ctx,a,o,i,d,r._loop)}}}}},function(e,t){"use strict";e.exports=function(e){function t(e,t){return e.usePointStyle?t*Math.SQRT2:e.boxWidth}function n(t,n){var r=new e.Legend({ctx:t.ctx,options:n,chart:t});i.configure(t,r,n),i.addBox(t,r),t.legend=r}var r=e.helpers,i=e.layoutService,a=r.noop;return e.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(e,t){var n=t.datasetIndex,r=this.chart,i=r.getDatasetMeta(n);i.hidden=null===i.hidden?!r.data.datasets[n].hidden:null,r.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(e){var t=e.data;return r.isArray(t.datasets)?t.datasets.map(function(t,n){return{text:t.label,fillStyle:r.isArray(t.backgroundColor)?t.backgroundColor[0]:t.backgroundColor,hidden:!e.isDatasetVisible(n),lineCap:t.borderCapStyle,lineDash:t.borderDash,lineDashOffset:t.borderDashOffset,lineJoin:t.borderJoinStyle,lineWidth:t.borderWidth,strokeStyle:t.borderColor,pointStyle:t.pointStyle,datasetIndex:n}},this):[]}}},e.Legend=e.Element.extend({initialize:function(e){r.extend(this,e),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:a,update:function(e,t,n){var r=this;return r.beforeUpdate(),r.maxWidth=e,r.maxHeight=t,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height),e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0,e.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:function(){var e=this,t=e.options.labels,n=t.generateLabels.call(e,e.chart);t.filter&&(n=n.filter(function(n){return t.filter(n,e.chart.data)})),e.options.reverse&&n.reverse(),e.legendItems=n},afterBuildLabels:a,beforeFit:a,fit:function(){var n=this,i=n.options,a=i.labels,o=i.display,s=n.ctx,u=e.defaults.global,d=r.getValueOrDefault,l=d(a.fontSize,u.defaultFontSize),c=d(a.fontStyle,u.defaultFontStyle),h=d(a.fontFamily,u.defaultFontFamily),_=r.fontString(l,c,h),f=n.legendHitBoxes=[],m=n.minSize,p=n.isHorizontal();if(p?(m.width=n.maxWidth,m.height=o?10:0):(m.width=o?10:0,m.height=n.maxHeight),o)if(s.font=_,p){var g=n.lineWidths=[0],v=n.legendItems.length?l+a.padding:0;s.textAlign="left",s.textBaseline="top",r.each(n.legendItems,function(e,r){var i=t(a,l),o=i+l/2+s.measureText(e.text).width;g[g.length-1]+o+a.padding>=n.width&&(v+=l+a.padding,g[g.length]=n.left),f[r]={left:0,top:0,width:o,height:l},g[g.length-1]+=o+a.padding}),m.height+=v}else{var y=a.padding,M=n.columnWidths=[],b=a.padding,L=0,k=0,Y=l+y;r.each(n.legendItems,function(e,n){var r=t(a,l),i=r+l/2+s.measureText(e.text).width;k+Y>m.height&&(b+=L+a.padding,M.push(L),L=0,k=0),L=Math.max(L,i),k+=Y,f[n]={left:0,top:0,width:i,height:l}}),b+=L,M.push(L),m.width+=b}n.width=m.width,n.height=m.height},afterFit:a,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,i=n.options,a=i.labels,o=e.defaults.global,s=o.elements.line,u=n.width,d=n.lineWidths;if(i.display){var l,c=n.ctx,h=r.getValueOrDefault,_=h(a.fontColor,o.defaultFontColor),f=h(a.fontSize,o.defaultFontSize),m=h(a.fontStyle,o.defaultFontStyle),p=h(a.fontFamily,o.defaultFontFamily),g=r.fontString(f,m,p);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=_,c.fillStyle=_,c.font=g;var v=t(a,f),y=n.legendHitBoxes,M=function(t,n,r){if(!(isNaN(v)||v<=0)){c.save(),c.fillStyle=h(r.fillStyle,o.defaultColor),c.lineCap=h(r.lineCap,s.borderCapStyle),c.lineDashOffset=h(r.lineDashOffset,s.borderDashOffset),c.lineJoin=h(r.lineJoin,s.borderJoinStyle),c.lineWidth=h(r.lineWidth,s.borderWidth),c.strokeStyle=h(r.strokeStyle,o.defaultColor);var a=0===h(r.lineWidth,s.borderWidth);if(c.setLineDash&&c.setLineDash(h(r.lineDash,s.borderDash)),i.labels&&i.labels.usePointStyle){var u=f*Math.SQRT2/2,d=u/Math.SQRT2,l=t+d,_=n+d;e.canvasHelpers.drawPoint(c,r.pointStyle,u,l,_)}else a||c.strokeRect(t,n,v,f),c.fillRect(t,n,v,f);c.restore()}},b=function(e,t,n,r){c.fillText(n.text,v+f/2+e,t),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(v+f/2+e,t+f/2),c.lineTo(v+f/2+e+r,t+f/2),c.stroke())},L=n.isHorizontal();l=L?{x:n.left+(u-d[0])/2,y:n.top+a.padding,line:0}:{x:n.left+a.padding,y:n.top+a.padding,line:0};var k=f+a.padding;r.each(n.legendItems,function(e,t){var r=c.measureText(e.text).width,i=v+f/2+r,o=l.x,s=l.y;L?o+i>=u&&(s=l.y+=k,l.line++,o=l.x=n.left+(u-d[l.line])/2):s+k>n.bottom&&(o=l.x=o+n.columnWidths[l.line]+a.padding,s=l.y=n.top+a.padding,l.line++),M(o,s,e),y[t].left=o,y[t].top=s,b(o,s,e,r),L?l.x+=i+a.padding:l.y+=k})}},handleEvent:function(e){var t=this,n=t.options,r="mouseup"===e.type?"click":e.type,i=!1;if("mousemove"===r){if(!n.onHover)return}else{if("click"!==r)return;if(!n.onClick)return}var a=e.x,o=e.y;if(a>=t.left&&a<=t.right&&o>=t.top&&o<=t.bottom)for(var s=t.legendHitBoxes,u=0;u<s.length;++u){var d=s[u];if(a>=d.left&&a<=d.left+d.width&&o>=d.top&&o<=d.top+d.height){if("click"===r){n.onClick.call(t,e.native,t.legendItems[u]),i=!0;break}if("mousemove"===r){n.onHover.call(t,e.native,t.legendItems[u]),i=!0;break}}}return i}}),{id:"legend",beforeInit:function(e){var t=e.options.legend;t&&n(e,t)},beforeUpdate:function(t){var a=t.options.legend,o=t.legend;a?(a=r.configMerge(e.defaults.global.legend,a),o?(i.configure(t,o,a),o.options=a):n(t,a)):o&&(i.removeBox(t,o),delete t.legend)},afterEvent:function(e,t){var n=e.legend;n&&n.handleEvent(t)}}}},function(e,t){"use strict";e.exports=function(e){function t(t,n){var i=new e.Title({ctx:t.ctx,options:n,chart:t});r.configure(t,i,n),r.addBox(t,i),t.titleBlock=i}var n=e.helpers,r=e.layoutService,i=n.noop;return e.defaults.global.title={display:!1,position:"top",fullWidth:!0,weight:2e3,fontStyle:"bold",padding:10,text:""},e.Title=e.Element.extend({initialize:function(e){var t=this;n.extend(t,e),t.legendHitBoxes=[]},beforeUpdate:i,update:function(e,t,n){var r=this;return r.beforeUpdate(),r.maxWidth=e,r.maxHeight=t,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){var e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height),e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0,e.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var t=this,r=n.getValueOrDefault,i=t.options,a=e.defaults.global,o=i.display,s=r(i.fontSize,a.defaultFontSize),u=t.minSize;t.isHorizontal()?(u.width=t.maxWidth,u.height=o?s+2*i.padding:0):(u.width=o?s+2*i.padding:0,u.height=t.maxHeight),t.width=u.width,t.height=u.height},afterFit:i,isHorizontal:function(){var e=this.options.position;return"top"===e||"bottom"===e},draw:function(){var t=this,r=t.ctx,i=n.getValueOrDefault,a=t.options,o=e.defaults.global;if(a.display){var s,u,d,l=i(a.fontSize,o.defaultFontSize),c=i(a.fontStyle,o.defaultFontStyle),h=i(a.fontFamily,o.defaultFontFamily),_=n.fontString(l,c,h),f=0,m=t.top,p=t.left,g=t.bottom,v=t.right;r.fillStyle=i(a.fontColor,o.defaultFontColor),r.font=_,t.isHorizontal()?(s=p+(v-p)/2,u=m+(g-m)/2,d=v-p):(s="left"===a.position?p+l/2:v-l/2,u=m+(g-m)/2,d=g-m,f=Math.PI*("left"===a.position?-.5:.5)),r.save(),r.translate(s,u),r.rotate(f),r.textAlign="center",r.textBaseline="middle",r.fillText(a.text,0,0,d),r.restore()}}}),{id:"title",beforeInit:function(e){var n=e.options.title;n&&t(e,n)},beforeUpdate:function(i){var a=i.options.title,o=i.titleBlock;a?(a=n.configMerge(e.defaults.global.title,a),o?(r.configure(i,o,a),o.options=a):t(i,a)):o&&(e.layoutService.removeBox(i,o),delete i.titleBlock)}}}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n={position:"bottom"},r=e.Scale.extend({getLabels:function(){var e=this.chart.data;return(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels},determineDataLimits:function(){var e=this,n=e.getLabels();e.minIndex=0,e.maxIndex=n.length-1;var r;void 0!==e.options.ticks.min&&(r=t.indexOf(n,e.options.ticks.min),e.minIndex=r!==-1?r:e.minIndex),void 0!==e.options.ticks.max&&(r=t.indexOf(n,e.options.ticks.max),e.maxIndex=r!==-1?r:e.maxIndex),e.min=n[e.minIndex],e.max=n[e.maxIndex]},buildTicks:function(){var e=this,t=e.getLabels();e.ticks=0===e.minIndex&&e.maxIndex===t.length-1?t:t.slice(e.minIndex,e.maxIndex+1)},getLabelForIndex:function(e,t){var n=this,r=n.chart.data,i=n.isHorizontal();return r.yLabels&&!i?n.getRightValue(r.datasets[t].data[e]):n.ticks[e-n.minIndex]},getPixelForValue:function(e,t,n,r){var i,a=this,o=Math.max(a.maxIndex+1-a.minIndex-(a.options.gridLines.offsetGridLines?0:1),1);if(void 0!==e&&null!==e&&(i=a.isHorizontal()?e.x:e.y),void 0!==i||void 0!==e&&isNaN(t)){var s=a.getLabels();e=i||e;var u=s.indexOf(e);t=u!==-1?u:t}if(a.isHorizontal()){var d=a.width/o,l=d*(t-a.minIndex);return(a.options.gridLines.offsetGridLines&&r||a.maxIndex===a.minIndex&&r)&&(l+=d/2),a.left+Math.round(l)}var c=a.height/o,h=c*(t-a.minIndex);return a.options.gridLines.offsetGridLines&&r&&(h+=c/2),a.top+Math.round(h)},getPixelForTick:function(e,t){return this.getPixelForValue(this.ticks[e],e+this.minIndex,null,t)},getValueForPixel:function(e){var t,n=this,r=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),i=n.isHorizontal(),a=(i?n.width:n.height)/r;return e-=i?n.left:n.top,n.options.gridLines.offsetGridLines&&(e-=a/2),t=e<=0?0:Math.round(e/a)},getBasePixel:function(){return this.bottom}});e.scaleService.registerScaleType("category",r,n)}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n={position:"left",ticks:{callback:e.Ticks.formatters.linear}},r=e.LinearScaleBase.extend({determineDataLimits:function(){function e(e){return s?e.xAxisID===n.id:e.yAxisID===n.id}var n=this,r=n.options,i=n.chart,a=i.data,o=a.datasets,s=n.isHorizontal(),u=0,d=1;n.min=null,n.max=null;var l=r.stacked;if(void 0===l&&t.each(o,function(t,n){if(!l){var r=i.getDatasetMeta(n);i.isDatasetVisible(n)&&e(r)&&void 0!==r.stack&&(l=!0)}}),r.stacked||l){var c={};t.each(o,function(a,o){var s=i.getDatasetMeta(o),u=[s.type,void 0===r.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===c[u]&&(c[u]={positiveValues:[],negativeValues:[]});var d=c[u].positiveValues,l=c[u].negativeValues;i.isDatasetVisible(o)&&e(s)&&t.each(a.data,function(e,t){var i=+n.getRightValue(e);isNaN(i)||s.data[t].hidden||(d[t]=d[t]||0,l[t]=l[t]||0,r.relativePoints?d[t]=100:i<0?l[t]+=i:d[t]+=i)})}),t.each(c,function(e){var r=e.positiveValues.concat(e.negativeValues),i=t.min(r),a=t.max(r);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else t.each(o,function(r,a){var o=i.getDatasetMeta(a);i.isDatasetVisible(a)&&e(o)&&t.each(r.data,function(e,t){var r=+n.getRightValue(e);isNaN(r)||o.data[t].hidden||(null===n.min?n.min=r:r<n.min&&(n.min=r),null===n.max?n.max=r:r>n.max&&(n.max=r))})});n.min=isFinite(n.min)?n.min:u,n.max=isFinite(n.max)?n.max:d,this.handleTickRangeOptions()},getTickLimit:function(){var n,r=this,i=r.options.ticks;if(r.isHorizontal())n=Math.min(i.maxTicksLimit?i.maxTicksLimit:11,Math.ceil(r.width/50));else{var a=t.getValueOrDefault(i.fontSize,e.defaults.global.defaultFontSize);n=Math.min(i.maxTicksLimit?i.maxTicksLimit:11,Math.ceil(r.height/(2*a)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},getPixelForValue:function(e){var t,n=this,r=n.start,i=+n.getRightValue(e),a=n.end-r;return n.isHorizontal()?(t=n.left+n.width/a*(i-r),Math.round(t)):(t=n.bottom-n.height/a*(i-r),Math.round(t))},getValueForPixel:function(e){var t=this,n=t.isHorizontal(),r=n?t.width:t.height,i=(n?e-t.left:t.bottom-e)/r;return t.start+(t.end-t.start)*i},getPixelForTick:function(e){return this.getPixelForValue(this.ticksAsNumbers[e])}});e.scaleService.registerScaleType("linear",r,n)}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n=t.noop;e.LinearScaleBase=e.Scale.extend({handleTickRangeOptions:function(){var e=this,n=e.options,r=n.ticks;if(r.beginAtZero){var i=t.sign(e.min),a=t.sign(e.max);i<0&&a<0?e.max=0:i>0&&a>0&&(e.min=0)}void 0!==r.min?e.min=r.min:void 0!==r.suggestedMin&&(null===e.min?e.min=r.suggestedMin:e.min=Math.min(e.min,r.suggestedMin)),void 0!==r.max?e.max=r.max:void 0!==r.suggestedMax&&(null===e.max?e.max=r.suggestedMax:e.max=Math.max(e.max,r.suggestedMax)),e.min===e.max&&(e.max++,r.beginAtZero||e.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var n=this,r=n.options,i=r.ticks,a=n.getTickLimit();a=Math.max(2,a);var o={maxTicks:a,min:i.min,max:i.max,stepSize:t.getValueOrDefault(i.fixedStepSize,i.stepSize)},s=n.ticks=e.Ticks.generators.linear(o,n);n.handleDirectionalChanges(),n.max=t.max(s),n.min=t.min(s),i.reverse?(s.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),e.Scale.prototype.convertTicksToLabels.call(t)}})}},function(e,t){"use strict";e.exports=function(e){var t=e.helpers,n={position:"left",ticks:{callback:e.Ticks.formatters.logarithmic}},r=e.Scale.extend({determineDataLimits:function(){function e(e){return d?e.xAxisID===n.id:e.yAxisID===n.id}var n=this,r=n.options,i=r.ticks,a=n.chart,o=a.data,s=o.datasets,u=t.getValueOrDefault,d=n.isHorizontal();n.min=null,n.max=null,n.minNotZero=null;var l=r.stacked;if(void 0===l&&t.each(s,function(t,n){if(!l){var r=a.getDatasetMeta(n);a.isDatasetVisible(n)&&e(r)&&void 0!==r.stack&&(l=!0)}}),r.stacked||l){var c={};t.each(s,function(i,o){var s=a.getDatasetMeta(o),u=[s.type,void 0===r.stacked&&void 0===s.stack?o:"",s.stack].join(".");a.isDatasetVisible(o)&&e(s)&&(void 0===c[u]&&(c[u]=[]),t.each(i.data,function(e,t){var i=c[u],a=+n.getRightValue(e);isNaN(a)||s.data[t].hidden||(i[t]=i[t]||0,r.relativePoints?i[t]=100:i[t]+=a)}))}),t.each(c,function(e){var r=t.min(e),i=t.max(e);n.min=null===n.min?r:Math.min(n.min,r),n.max=null===n.max?i:Math.max(n.max,i)})}else t.each(s,function(r,i){var o=a.getDatasetMeta(i);a.isDatasetVisible(i)&&e(o)&&t.each(r.data,function(e,t){var r=+n.getRightValue(e);isNaN(r)||o.data[t].hidden||(null===n.min?n.min=r:r<n.min&&(n.min=r),null===n.max?n.max=r:r>n.max&&(n.max=r),0!==r&&(null===n.minNotZero||r<n.minNotZero)&&(n.minNotZero=r))})});n.min=u(i.min,n.min),n.max=u(i.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(t.log10(n.min))-1),n.max=Math.pow(10,Math.floor(t.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){var n=this,r=n.options,i=r.ticks,a={min:i.min,max:i.max},o=n.ticks=e.Ticks.generators.logarithmic(a,n);n.isHorizontal()||o.reverse(),n.max=t.max(o),n.min=t.min(o),i.reverse?(o.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),e.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},getPixelForTick:function(e){return this.getPixelForValue(this.tickValues[e])},getPixelForValue:function(e){var n,r,i,a=this,o=a.start,s=+a.getRightValue(e),u=a.options,d=u.ticks;return a.isHorizontal()?(i=t.log10(a.end)-t.log10(o),0===s?r=a.left:(n=a.width,r=a.left+n/i*(t.log10(s)-t.log10(o)))):(n=a.height,0!==o||d.reverse?0===a.end&&d.reverse?(i=t.log10(a.start)-t.log10(a.minNotZero),r=s===a.end?a.top:s===a.minNotZero?a.top+.02*n:a.top+.02*n+.98*n/i*(t.log10(s)-t.log10(a.minNotZero))):0===s?r=d.reverse?a.top:a.bottom:(i=t.log10(a.end)-t.log10(o),n=a.height,r=a.bottom-n/i*(t.log10(s)-t.log10(o))):(i=t.log10(a.end)-t.log10(a.minNotZero),r=s===o?a.bottom:s===a.minNotZero?a.bottom-.02*n:a.bottom-.02*n-.98*n/i*(t.log10(s)-t.log10(a.minNotZero)))),r},getValueForPixel:function(e){var n,r,i=this,a=t.log10(i.end)-t.log10(i.start);return i.isHorizontal()?(r=i.width,n=i.start*Math.pow(10,(e-i.left)*a/r)):(r=i.height,n=Math.pow(10,(i.bottom-e)*a/r)/i.start),n}});e.scaleService.registerScaleType("logarithmic",r,n)}},function(e,t){"use strict";e.exports=function(e){function t(e){var t=e.options;return t.angleLines.display||t.pointLabels.display?e.chart.data.labels.length:0}function n(e){var t=e.options.pointLabels,n=_.getValueOrDefault(t.fontSize,f.defaultFontSize),r=_.getValueOrDefault(t.fontStyle,f.defaultFontStyle),i=_.getValueOrDefault(t.fontFamily,f.defaultFontFamily),a=_.fontString(n,r,i);return{size:n,style:r,family:i,font:a}}function r(e,t,n){return _.isArray(n)?{w:_.longestText(e,e.font,n),h:n.length*t+1.5*(n.length-1)*t}:{w:e.measureText(n).width,h:t}}function i(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n-5,end:t}:{start:t,end:t+n+5}}function a(e){var a,o,s,u=n(e),d=Math.min(e.height/2,e.width/2),l={r:e.width,l:0,t:e.height,b:0},c={};e.ctx.font=u.font,e._pointLabelSizes=[];var h=t(e);for(a=0;a<h;a++){s=e.getPointPosition(a,d),o=r(e.ctx,u.size,e.pointLabels[a]||""),e._pointLabelSizes[a]=o;var f=e.getIndexAngle(a),m=_.toDegrees(f)%360,p=i(m,s.x,o.w,0,180),g=i(m,s.y,o.h,90,270);p.start<l.l&&(l.l=p.start,c.l=f),p.end>l.r&&(l.r=p.end,c.r=f),g.start<l.t&&(l.t=g.start,c.t=f),g.end>l.b&&(l.b=g.end,c.b=f)}e.setReductions(d,l,c)}function o(e){var t=Math.min(e.height/2,e.width/2);e.drawingArea=Math.round(t),e.setCenterPoint(0,0,0,0)}function s(e){return 0===e||180===e?"center":e<180?"left":"right"}function u(e,t,n,r){if(_.isArray(t))for(var i=n.y,a=1.5*r,o=0;o<t.length;++o)e.fillText(t[o],n.x,i),i+=a;else e.fillText(t,n.x,n.y)}function d(e,t,n){90===e||270===e?n.y-=t.h/2:(e>270||e<90)&&(n.y-=t.h)}function l(e){var r=e.ctx,i=_.getValueOrDefault,a=e.options,o=a.angleLines,l=a.pointLabels;r.lineWidth=o.lineWidth,r.strokeStyle=o.color;var c=e.getDistanceFromCenterForValue(a.reverse?e.min:e.max),h=n(e);r.textBaseline="top";for(var m=t(e)-1;m>=0;m--){if(o.display){var p=e.getPointPosition(m,c);r.beginPath(),r.moveTo(e.xCenter,e.yCenter),r.lineTo(p.x,p.y),r.stroke(),r.closePath()}if(l.display){var g=e.getPointPosition(m,c+5),v=i(l.fontColor,f.defaultFontColor);r.font=h.font,r.fillStyle=v;var y=e.getIndexAngle(m),M=_.toDegrees(y);r.textAlign=s(M),d(M,e._pointLabelSizes[m],g),u(r,e.pointLabels[m]||"",g,h.size)}}}function c(e,n,r,i){var a=e.ctx;if(a.strokeStyle=_.getValueAtIndexOrDefault(n.color,i-1),a.lineWidth=_.getValueAtIndexOrDefault(n.lineWidth,i-1),e.options.gridLines.circular)a.beginPath(),a.arc(e.xCenter,e.yCenter,r,0,2*Math.PI),a.closePath(),a.stroke();else{var o=t(e);if(0===o)return;a.beginPath();var s=e.getPointPosition(0,r);a.moveTo(s.x,s.y);for(var u=1;u<o;u++)s=e.getPointPosition(u,r),a.lineTo(s.x,s.y);a.closePath(),a.stroke()}}function h(e){return _.isNumber(e)?e:0}var _=e.helpers,f=e.defaults.global,m={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:e.Ticks.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(e){return e}}},p=e.LinearScaleBase.extend({setDimensions:function(){var e=this,t=e.options,n=t.ticks;e.width=e.maxWidth,e.height=e.maxHeight,e.xCenter=Math.round(e.width/2),e.yCenter=Math.round(e.height/2);var r=_.min([e.height,e.width]),i=_.getValueOrDefault(n.fontSize,f.defaultFontSize);e.drawingArea=t.display?r/2-(i/2+n.backdropPaddingY):r/2},determineDataLimits:function(){var e=this,t=e.chart,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;_.each(t.data.datasets,function(i,a){if(t.isDatasetVisible(a)){var o=t.getDatasetMeta(a);_.each(i.data,function(t,i){var a=+e.getRightValue(t);isNaN(a)||o.data[i].hidden||(n=Math.min(a,n),r=Math.max(a,r))})}}),e.min=n===Number.POSITIVE_INFINITY?0:n,e.max=r===Number.NEGATIVE_INFINITY?0:r,e.handleTickRangeOptions()},getTickLimit:function(){var e=this.options.ticks,t=_.getValueOrDefault(e.fontSize,f.defaultFontSize);return Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*t)))},convertTicksToLabels:function(){var t=this;e.LinearScaleBase.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map(t.options.pointLabels.callback,t)},getLabelForIndex:function(e,t){return+this.getRightValue(this.chart.data.datasets[t].data[e])},fit:function(){this.options.pointLabels.display?a(this):o(this)},setReductions:function(e,t,n){var r=this,i=t.l/Math.sin(n.l),a=Math.max(t.r-r.width,0)/Math.sin(n.r),o=-t.t/Math.cos(n.t),s=-Math.max(t.b-r.height,0)/Math.cos(n.b);i=h(i),a=h(a),o=h(o),s=h(s),r.drawingArea=Math.min(Math.round(e-(i+a)/2),Math.round(e-(o+s)/2)),r.setCenterPoint(i,a,o,s)},setCenterPoint:function(e,t,n,r){var i=this,a=i.width-t-i.drawingArea,o=e+i.drawingArea,s=n+i.drawingArea,u=i.height-r-i.drawingArea;i.xCenter=Math.round((o+a)/2+i.left),i.yCenter=Math.round((s+u)/2+i.top)},getIndexAngle:function(e){var n=2*Math.PI/t(this),r=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,i=r*Math.PI*2/360;return e*n+i},getDistanceFromCenterForValue:function(e){var t=this;if(null===e)return 0;var n=t.drawingArea/(t.max-t.min);return t.options.reverse?(t.max-e)*n:(e-t.min)*n},getPointPosition:function(e,t){var n=this,r=n.getIndexAngle(e)-Math.PI/2;return{x:Math.round(Math.cos(r)*t)+n.xCenter,y:Math.round(Math.sin(r)*t)+n.yCenter}},getPointPositionForValue:function(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))},getBasePosition:function(){var e=this,t=e.min,n=e.max;return e.getPointPositionForValue(0,e.beginAtZero?0:t<0&&n<0?n:t>0&&n>0?t:0)},draw:function(){var e=this,t=e.options,n=t.gridLines,r=t.ticks,i=_.getValueOrDefault;if(t.display){var a=e.ctx,o=i(r.fontSize,f.defaultFontSize),s=i(r.fontStyle,f.defaultFontStyle),u=i(r.fontFamily,f.defaultFontFamily),d=_.fontString(o,s,u);_.each(e.ticks,function(s,u){if(u>0||t.reverse){var l=e.getDistanceFromCenterForValue(e.ticksAsNumbers[u]),h=e.yCenter-l;if(n.display&&0!==u&&c(e,n,l,u),r.display){var _=i(r.fontColor,f.defaultFontColor);if(a.font=d,r.showLabelBackdrop){var m=a.measureText(s).width;a.fillStyle=r.backdropColor,a.fillRect(e.xCenter-m/2-r.backdropPaddingX,h-o/2-r.backdropPaddingY,m+2*r.backdropPaddingX,o+2*r.backdropPaddingY)}a.textAlign="center",a.textBaseline="middle",a.fillStyle=_,a.fillText(s,e.xCenter,h)}}}),(t.angleLines.display||t.pointLabels.display)&&l(e)}}});e.scaleService.registerScaleType("radialLinear",p,m)}},function(e,t,n){"use strict";var r=n(1);r="function"==typeof r?r:window.moment,e.exports=function(e){function t(e,t){var n=e.options.time;if("string"==typeof n.parser)return r(t,n.parser);if("function"==typeof n.parser)return n.parser(t);if("function"==typeof t.getMonth||"number"==typeof t)return r(t);if(t.isValid&&t.isValid())return t;var i=n.format;return"string"!=typeof i&&i.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser."),i(t)):r(t,i)}function n(e,t,n,r){for(var i,a=Object.keys(s),o=a.length,u=a.indexOf(e);u<o;u++){i=a[u];var d=s[i],l=d.steps&&d.steps[d.steps.length-1]||d.maxStep;if(void 0===l||Math.ceil((n-t)/(l*d.size))<=r)break}return i}function i(e,t,n,r){var i=s[n],a=i.size,o=Math.ceil((t-e)/a),u=1,d=t-e;if(i.steps)for(var l=i.steps.length,c=0;c<l&&o>r;c++)u=i.steps[c],o=Math.ceil(d/(a*u));else for(;o>r&&r>0;)++u,o=Math.ceil(d/(a*u));return u}function a(e,t,n){var i=[];if(e.maxTicks){var a=e.stepSize;i.push(void 0!==e.min?e.min:n.min);for(var o=r(n.min);o.add(a,e.unit).valueOf()<n.max;)i.push(o.valueOf());var s=e.max||n.max;i[i.length-1]!==s&&i.push(s)}return i}var o=e.helpers,s={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1e3,steps:[1,2,5,10,30]},minute:{size:6e4,steps:[1,2,5,10,30]},hour:{size:36e5,steps:[1,2,3,6,12]},day:{size:864e5,steps:[1,2,5]},week:{size:6048e5,maxStep:4},month:{size:2628e6,maxStep:3},quarter:{size:7884e6,maxStep:4},year:{size:3154e7,maxStep:!1}},u={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}};e.Ticks.generators.time=function(e,t){var n,i,o=e.isoWeekday;return"week"===e.unit&&o!==!1?(n=r(t.min).startOf("isoWeek").isoWeekday(o).valueOf(),i=r(t.max).startOf("isoWeek").isoWeekday(o),t.max-i>0&&i.add(1,"week"),i=i.valueOf()):(n=r(t.min).startOf(e.unit).valueOf(),i=r(t.max).startOf(e.unit),t.max-i>0&&i.add(1,e.unit),i=i.valueOf()),a(e,t,{min:n,max:i})};var d=e.Scale.extend({initialize:function(){if(!r)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");e.Scale.prototype.initialize.call(this)},determineDataLimits:function(){var e,n=this,r=n.options.time,i=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER,s=n.chart.data,u={labels:[],datasets:[]};o.each(s.labels,function(o,s){var d=t(n,o);d.isValid()&&(r.round&&d.startOf(r.round),e=d.valueOf(),i=Math.min(e,i),a=Math.max(e,a),u.labels[s]=e)}),o.each(s.datasets,function(s,d){var l=[];"object"==typeof s.data[0]&&null!==s.data[0]&&n.chart.isDatasetVisible(d)?o.each(s.data,function(o,s){var u=t(n,n.getRightValue(o));u.isValid()&&(r.round&&u.startOf(r.round),e=u.valueOf(),i=Math.min(e,i),a=Math.max(e,a),l[s]=e)}):l=u.labels.slice(),u.datasets[d]=l}),n.dataMin=i,n.dataMax=a,n._parsedData=u},buildTicks:function(){var r,a,s=this,u=s.options.time,d=s.dataMin,l=s.dataMax;if(u.min){var c=t(s,u.min);u.round&&c.round(u.round),r=c.valueOf()}u.max&&(a=t(s,u.max).valueOf());var h=s.getLabelCapacity(r||d),_=u.unit||n(u.minUnit,r||d,a||l,h);s.displayFormat=u.displayFormats[_];var f=u.stepSize||i(r||d,a||l,_,h);s.ticks=e.Ticks.generators.time({maxTicks:h,min:r,max:a,stepSize:f,unit:_,isoWeekday:u.isoWeekday},{min:d,max:l}),s.max=o.max(s.ticks),s.min=o.min(s.ticks)},getLabelForIndex:function(e,n){var r=this,i=r.chart.data.labels&&e<r.chart.data.labels.length?r.chart.data.labels[e]:"",a=r.chart.data.datasets[n].data[e];return null!==a&&"object"==typeof a&&(i=r.getRightValue(a)),r.options.time.tooltipFormat&&(i=t(r,i).format(r.options.time.tooltipFormat)),i},tickFormatFunction:function(e,t,n){var r=e.format(this.displayFormat),i=this.options.ticks,a=o.getValueOrDefault(i.callback,i.userCallback);return a?a(r,t,n):r},convertTicksToLabels:function(){var e=this;e.ticksAsTimestamps=e.ticks,e.ticks=e.ticks.map(function(e){return r(e)}).map(e.tickFormatFunction,e)},getPixelForOffset:function(e){var t=this,n=t.max-t.min,r=n?(e-t.min)/n:0;if(t.isHorizontal()){var i=t.width*r;return t.left+Math.round(i)}var a=t.height*r;return t.top+Math.round(a)},getPixelForValue:function(e,n,r){var i=this,a=null;if(void 0!==n&&void 0!==r&&(a=i._parsedData.datasets[r][n]),null===a&&(e&&e.isValid||(e=t(i,i.getRightValue(e))),e&&e.isValid&&e.isValid()&&(a=e.valueOf())),null!==a)return i.getPixelForOffset(a)},getPixelForTick:function(e){return this.getPixelForOffset(this.ticksAsTimestamps[e])},getValueForPixel:function(e){var t=this,n=t.isHorizontal()?t.width:t.height,i=(e-(t.isHorizontal()?t.left:t.top))/n;return r(t.min+i*(t.max-t.min))},getLabelWidth:function(t){var n=this,r=n.options.ticks,i=n.ctx.measureText(t).width,a=Math.cos(o.toRadians(r.maxRotation)),s=Math.sin(o.toRadians(r.maxRotation)),u=o.getValueOrDefault(r.fontSize,e.defaults.global.defaultFontSize);
return i*a+u*s},getLabelCapacity:function(e){var t=this;t.displayFormat=t.options.time.displayFormats.millisecond;var n=t.tickFormatFunction(r(e),0,[]),i=t.getLabelWidth(n),a=t.isHorizontal()?t.width:t.height,o=a/i;return o}});e.scaleService.registerScaleType("time",d,u)}},function(e,t,n){function r(e){if(e){var t=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,r=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,i=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/(\w+)/,o=[0,0,0],s=1,u=e.match(t);if(u){u=u[1];for(var d=0;d<o.length;d++)o[d]=parseInt(u[d]+u[d],16)}else if(u=e.match(n)){u=u[1];for(var d=0;d<o.length;d++)o[d]=parseInt(u.slice(2*d,2*d+2),16)}else if(u=e.match(r)){for(var d=0;d<o.length;d++)o[d]=parseInt(u[d+1]);s=parseFloat(u[4])}else if(u=e.match(i)){for(var d=0;d<o.length;d++)o[d]=Math.round(2.55*parseFloat(u[d+1]));s=parseFloat(u[4])}else if(u=e.match(a)){if("transparent"==u[1])return[0,0,0,0];if(o=M[u[1]],!o)return}for(var d=0;d<o.length;d++)o[d]=v(o[d],0,255);return s=s||0==s?v(s,0,1):1,o[3]=s,o}}function i(e){if(e){var t=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=e.match(t);if(n){var r=parseFloat(n[4]),i=v(parseInt(n[1]),0,360),a=v(parseFloat(n[2]),0,100),o=v(parseFloat(n[3]),0,100),s=v(isNaN(r)?1:r,0,1);return[i,a,o,s]}}}function a(e){if(e){var t=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=e.match(t);if(n){var r=parseFloat(n[4]),i=v(parseInt(n[1]),0,360),a=v(parseFloat(n[2]),0,100),o=v(parseFloat(n[3]),0,100),s=v(isNaN(r)?1:r,0,1);return[i,a,o,s]}}}function o(e){var t=r(e);return t&&t.slice(0,3)}function s(e){var t=i(e);return t&&t.slice(0,3)}function u(e){var t=r(e);return t?t[3]:(t=i(e))?t[3]:(t=a(e))?t[3]:void 0}function d(e){return"#"+y(e[0])+y(e[1])+y(e[2])}function l(e,t){return t<1||e[3]&&e[3]<1?c(e,t):"rgb("+e[0]+", "+e[1]+", "+e[2]+")"}function c(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+t+")"}function h(e,t){if(t<1||e[3]&&e[3]<1)return _(e,t);var n=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),i=Math.round(e[2]/255*100);return"rgb("+n+"%, "+r+"%, "+i+"%)"}function _(e,t){var n=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),i=Math.round(e[2]/255*100);return"rgba("+n+"%, "+r+"%, "+i+"%, "+(t||e[3]||1)+")"}function f(e,t){return t<1||e[3]&&e[3]<1?m(e,t):"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)"}function m(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+t+")"}function p(e,t){return void 0===t&&(t=void 0!==e[3]?e[3]:1),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+(void 0!==t&&1!==t?", "+t:"")+")"}function g(e){return b[e.slice(0,3)]}function v(e,t,n){return Math.min(Math.max(t,e),n)}function y(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}var M=n(260);e.exports={getRgba:r,getHsla:i,getRgb:o,getHsl:s,getHwb:a,getAlpha:u,hexString:d,rgbString:l,rgbaString:c,percentString:h,percentaString:_,hslString:f,hslaString:m,hwbString:p,keyword:g};var b={};for(var L in M)b[M[L]]=L},function(e,t){function n(e){var t,n,r,i=e[0]/255,a=e[1]/255,o=e[2]/255,s=Math.min(i,a,o),u=Math.max(i,a,o),d=u-s;return u==s?t=0:i==u?t=(a-o)/d:a==u?t=2+(o-i)/d:o==u&&(t=4+(i-a)/d),t=Math.min(60*t,360),t<0&&(t+=360),r=(s+u)/2,n=u==s?0:r<=.5?d/(u+s):d/(2-u-s),[t,100*n,100*r]}function i(e){var t,n,r,i=e[0],a=e[1],o=e[2],s=Math.min(i,a,o),u=Math.max(i,a,o),d=u-s;return n=0==u?0:d/u*1e3/10,u==s?t=0:i==u?t=(a-o)/d:a==u?t=2+(o-i)/d:o==u&&(t=4+(i-a)/d),t=Math.min(60*t,360),t<0&&(t+=360),r=u/255*1e3/10,[t,n,r]}function a(e){var t=e[0],r=e[1],i=e[2],a=n(e)[0],o=1/255*Math.min(t,Math.min(r,i)),i=1-1/255*Math.max(t,Math.max(r,i));return[a,100*o,100*i]}function o(e){var t,n,r,i,a=e[0]/255,o=e[1]/255,s=e[2]/255;return i=Math.min(1-a,1-o,1-s),t=(1-a-i)/(1-i)||0,n=(1-o-i)/(1-i)||0,r=(1-s-i)/(1-i)||0,[100*t,100*n,100*r,100*i]}function s(e){return K[JSON.stringify(e)]}function u(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92;var i=.4124*t+.3576*n+.1805*r,a=.2126*t+.7152*n+.0722*r,o=.0193*t+.1192*n+.9505*r;return[100*i,100*a,100*o]}function d(e){var t,n,r,i=u(e),a=i[0],o=i[1],s=i[2];return a/=95.047,o/=100,s/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*o-16,n=500*(a-o),r=200*(o-s),[t,n,r]}function l(e){return W(d(e))}function c(e){var t,n,r,i,a,o=e[0]/360,s=e[1]/100,u=e[2]/100;if(0==s)return a=255*u,[a,a,a];n=u<.5?u*(1+s):u+s-u*s,t=2*u-n,i=[0,0,0];for(var d=0;d<3;d++)r=o+1/3*-(d-1),r<0&&r++,r>1&&r--,a=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,i[d]=255*a;return i}function h(e){var t,n,r=e[0],i=e[1]/100,a=e[2]/100;return 0===a?[0,0,0]:(a*=2,i*=a<=1?a:2-a,n=(a+i)/2,t=2*i/(a+i),[r,100*t,100*n])}function _(e){return a(c(e))}function f(e){return o(c(e))}function m(e){return s(c(e))}function p(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,i=Math.floor(t)%6,a=t-Math.floor(t),o=255*r*(1-n),s=255*r*(1-n*a),u=255*r*(1-n*(1-a)),r=255*r;switch(i){case 0:return[r,u,o];case 1:return[s,r,o];case 2:return[o,r,u];case 3:return[o,s,r];case 4:return[u,o,r];case 5:return[r,o,s]}}function v(e){var t,n,r=e[0],i=e[1]/100,a=e[2]/100;return n=(2-i)*a,t=i*a,t/=n<=1?n:2-n,t=t||0,n/=2,[r,100*t,100*n]}function y(e){return a(p(e))}function M(e){return o(p(e))}function L(e){return s(p(e))}function k(e){var t,n,i,a,o=e[0]/360,s=e[1]/100,u=e[2]/100,d=s+u;switch(d>1&&(s/=d,u/=d),t=Math.floor(6*o),n=1-u,i=6*o-t,0!=(1&t)&&(i=1-i),a=s+i*(n-s),t){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function Y(e){return n(k(e))}function x(e){return i(k(e))}function w(e){return o(k(e))}function D(e){return s(k(e))}function T(e){var t,n,r,i=e[0]/100,a=e[1]/100,o=e[2]/100,s=e[3]/100;return t=1-Math.min(1,i*(1-s)+s),n=1-Math.min(1,a*(1-s)+s),r=1-Math.min(1,o*(1-s)+s),[255*t,255*n,255*r]}function S(e){return n(T(e))}function j(e){return i(T(e))}function H(e){return a(T(e))}function A(e){return s(T(e))}function P(e){var t,n,r,i=e[0]/100,a=e[1]/100,o=e[2]/100;return t=3.2406*i+a*-1.5372+o*-.4986,n=i*-.9689+1.8758*a+.0415*o,r=.0557*i+a*-.204+1.057*o,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),r=Math.min(Math.max(0,r),1),[255*t,255*n,255*r]}function C(e){var t,n,r,i=e[0],a=e[1],o=e[2];return i/=95.047,a/=100,o/=108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,t=116*a-16,n=500*(i-a),r=200*(a-o),[t,n,r]}function O(e){return W(C(e))}function F(e){var t,n,r,i,a=e[0],o=e[1],s=e[2];return a<=8?(n=100*a/903.3,i=7.787*(n/100)+16/116):(n=100*Math.pow((a+16)/116,3),i=Math.pow(n/100,1/3)),t=t/95.047<=.008856?t=95.047*(o/500+i-16/116)/7.787:95.047*Math.pow(o/500+i,3),r=r/108.883<=.008859?r=108.883*(i-s/200-16/116)/7.787:108.883*Math.pow(i-s/200,3),[t,n,r]}function W(e){var t,n,r,i=e[0],a=e[1],o=e[2];return t=Math.atan2(o,a),n=360*t/2/Math.PI,n<0&&(n+=360),r=Math.sqrt(a*a+o*o),[i,r,n]}function I(e){return P(F(e))}function E(e){var t,n,r,i=e[0],a=e[1],o=e[2];return r=o/360*2*Math.PI,t=a*Math.cos(r),n=a*Math.sin(r),[i,t,n]}function z(e){return F(E(e))}function R(e){return I(E(e))}function N(e){return G[e]}function V(e){return n(N(e))}function B(e){return i(N(e))}function $(e){return a(N(e))}function J(e){return o(N(e))}function U(e){return d(N(e))}function q(e){return u(N(e))}e.exports={rgb2hsl:n,rgb2hsv:i,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:u,rgb2lab:d,rgb2lch:l,hsl2rgb:c,hsl2hsv:h,hsl2hwb:_,hsl2cmyk:f,hsl2keyword:m,hsv2rgb:p,hsv2hsl:v,hsv2hwb:y,hsv2cmyk:M,hsv2keyword:L,hwb2rgb:k,hwb2hsl:Y,hwb2hsv:x,hwb2cmyk:w,hwb2keyword:D,cmyk2rgb:T,cmyk2hsl:S,cmyk2hsv:j,cmyk2hwb:H,cmyk2keyword:A,keyword2rgb:N,keyword2hsl:V,keyword2hsv:B,keyword2hwb:$,keyword2cmyk:J,keyword2lab:U,keyword2xyz:q,xyz2rgb:P,xyz2lab:C,xyz2lch:O,lab2xyz:F,lab2rgb:I,lab2lch:W,lch2lab:E,lch2xyz:z,lch2rgb:R};var G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},K={};for(var Z in G)K[JSON.stringify(G[Z])]=Z},function(e,t,n){var r=n(258),i=function(){return new d};for(var a in r){i[a+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),r[e](t)}}(a);var o=/(\w+)2(\w+)/.exec(a),s=o[1],u=o[2];i[s]=i[s]||{},i[s][u]=i[a]=function(e){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var n=r[e](t);if("string"==typeof n||void 0===n)return n;for(var i=0;i<n.length;i++)n[i]=Math.round(n[i]);return n}}(a)}var d=function(){this.convs={}};d.prototype.routeSpace=function(e,t){var n=t[0];return void 0===n?this.getValues(e):("number"==typeof n&&(n=Array.prototype.slice.call(t)),this.setValues(e,n))},d.prototype.setValues=function(e,t){return this.space=e,this.convs={},this.convs[e]=t,this},d.prototype.getValues=function(e){var t=this.convs[e];if(!t){var n=this.space,r=this.convs[n];t=i[n][e](r),this.convs[e]=t}return t},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(e){d.prototype[e]=function(t){return this.routeSpace(e,arguments)}}),e.exports=i},function(e,t){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,n){var r=n(9),i=n(2),a=r(i,"DataView");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(321),a=n(322),o=n(323),s=n(324),u=n(325);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=o,r.prototype.has=s,r.prototype.set=u,e.exports=r},function(e,t,n){var r=n(9),i=n(2),a=r(i,"Promise");e.exports=a},function(e,t,n){var r=n(9),i=n(2),a=r(i,"Set");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new i;++t<n;)this.add(e[t])}var i=n(35),a=n(352),o=n(353);r.prototype.add=r.prototype.push=a,r.prototype.has=o,e.exports=r},function(e,t){function n(e,t){return e.set(t[0],t[1]),e}e.exports=n},function(e,t){function n(e,t){return e.add(t),e}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}e.exports=n},function(e,t,n){function r(e,t){var n=null==e?0:e.length;return!!n&&i(e,t,0)>-1}var i=n(276);e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}e.exports=n},function(e,t,n){function r(e,t){return e&&i(t,a(t),e)}var i=n(13),a=n(31);e.exports=r},function(e,t){function n(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}e.exports=n},function(e,t,n){function r(e,t,n,o,s){var u=-1,d=e.length;for(n||(n=a),s||(s=[]);++u<d;){var l=e[u];t>0&&n(l)?t>1?r(l,t-1,n,o,s):i(s,l):o||(s[s.length]=l)}return s}var i=n(38),a=n(329);e.exports=r},function(e,t,n){var r=n(307),i=r();e.exports=i},function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},function(e,t,n){function r(e,t,n){return t===t?o(e,t,n):i(e,a,n)}var i=n(272),a=n(280),o=n(359);e.exports=r},function(e,t,n){function r(e){return a(e)&&i(e)==o}var i=n(11),a=n(7),o="[object Arguments]";e.exports=r},function(e,t,n){function r(e,t,n,r,p,v){var y=d(e),M=d(t),b=y?f:u(e),L=M?f:u(t);b=b==_?m:b,L=L==_?m:L;var k=b==m,Y=L==m,x=b==L;if(x&&l(e)){if(!l(t))return!1;y=!0,k=!1}if(x&&!k)return v||(v=new i),y||c(e)?a(e,t,n,r,p,v):o(e,t,b,n,r,p,v);if(!(n&h)){var w=k&&g.call(e,"__wrapped__"),D=Y&&g.call(t,"__wrapped__");if(w||D){var T=w?e.value():e,S=D?t.value():t;return v||(v=new i),p(T,S,n,r,v)}}return!!x&&(v||(v=new i),s(e,t,n,r,p,v))}var i=n(18),a=n(75),o=n(311),s=n(312),u=n(81),d=n(3),l=n(28),c=n(50),h=1,_="[object Arguments]",f="[object Array]",m="[object Object]",p=Object.prototype,g=p.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n,r){var u=n.length,d=u,l=!r;if(null==e)return!d;for(e=Object(e);u--;){var c=n[u];if(l&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++u<d;){c=n[u];var h=c[0],_=e[h],f=c[1];if(l&&c[2]){if(void 0===_&&!(h in e))return!1}else{var m=new i;if(r)var p=r(_,f,h,e,t,m);if(!(void 0===p?a(f,_,o|s,r,m):p))return!1}}return!0}var i=n(18),a=n(64),o=1,s=2;e.exports=r},function(e,t){function n(e){return e!==e}e.exports=n},function(e,t,n){function r(e){if(!o(e)||a(e))return!1;var t=i(e)?f:d;return t.test(s(e))}var i=n(29),a=n(333),o=n(4),s=n(94),u=/[\\^$.*+?()[\]{}|]/g,d=/^\[object .+?Constructor\]$/,l=Function.prototype,c=Object.prototype,h=l.toString,_=c.hasOwnProperty,f=RegExp("^"+h.call(_).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return o(e)&&a(e.length)&&!!H[i(e)]}var i=n(11),a=n(49),o=n(7),s="[object Arguments]",u="[object Array]",d="[object Boolean]",l="[object Date]",c="[object Error]",h="[object Function]",_="[object Map]",f="[object Number]",m="[object Object]",p="[object RegExp]",g="[object Set]",v="[object String]",y="[object WeakMap]",M="[object ArrayBuffer]",b="[object DataView]",L="[object Float32Array]",k="[object Float64Array]",Y="[object Int8Array]",x="[object Int16Array]",w="[object Int32Array]",D="[object Uint8Array]",T="[object Uint8ClampedArray]",S="[object Uint16Array]",j="[object Uint32Array]",H={};H[L]=H[k]=H[Y]=H[x]=H[w]=H[D]=H[T]=H[S]=H[j]=!0,H[s]=H[u]=H[M]=H[d]=H[b]=H[l]=H[c]=H[h]=H[_]=H[f]=H[m]=H[p]=H[g]=H[v]=H[y]=!1,e.exports=r},function(e,t,n){function r(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?s(e)?a(e[0],e[1]):i(e):u(e)}var i=n(285),a=n(286),o=n(25),s=n(3),u=n(380);e.exports=r},function(e,t,n){function r(e){if(!i(e))return o(e);var t=a(e),n=[];for(var r in e)("constructor"!=r||!t&&u.call(e,r))&&n.push(r);return n}var i=n(4),a=n(46),o=n(347),s=Object.prototype,u=s.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=a(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||i(n,e,t)}}var i=n(279),a=n(316),o=n(85);e.exports=r},function(e,t,n){function r(e,t){return s(e)&&u(t)?d(l(e),t):function(n){var r=a(n,e);return void 0===r&&r===t?o(n,e):i(t,r,c|h)}}var i=n(64),a=n(372),o=n(373),s=n(45),u=n(83),d=n(85),l=n(14),c=1,h=2;e.exports=r},function(e,t,n){function r(e,t,n,l,c){e!==t&&o(t,function(o,d){if(u(o))c||(c=new i),s(e,t,d,n,r,l,c);else{var h=l?l(e[d],o,d+"",e,t,c):void 0;void 0===h&&(h=o),a(e,d,h)}},d)}var i=n(18),a=n(58),o=n(274),s=n(288),u=n(4),d=n(31);e.exports=r},function(e,t,n){function r(e,t,n,r,v,y,M){var b=e[n],L=t[n],k=M.get(L);if(k)return void i(e,n,k);var Y=y?y(b,L,n+"",e,t,M):void 0,x=void 0===Y;if(x){var w=l(L),D=!w&&h(L),T=!w&&!D&&p(L);Y=L,w||D||T?l(b)?Y=b:c(b)?Y=s(b):D?(x=!1,Y=a(L,!0)):T?(x=!1,Y=o(L,!0)):Y=[]:m(L)||d(L)?(Y=b,d(b)?Y=g(b):(!f(b)||r&&_(b))&&(Y=u(L))):x=!1}x&&(M.set(L,Y),v(Y,L,r,y,M),M.delete(L)),i(e,n,Y)}var i=n(58),a=n(68),o=n(69),s=n(12),u=n(82),d=n(26),l=n(3),c=n(374),h=n(28),_=n(29),f=n(4),m=n(375),p=n(50),g=n(386);e.exports=r},function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},function(e,t,n){function r(e){return function(t){return i(t,e)}}var i=n(62);e.exports=r},function(e,t,n){function r(e,t){return o(a(e,t,i),e+"")}var i=n(25),a=n(88),o=n(48);e.exports=r},function(e,t,n){var r=n(364),i=n(74),a=n(25),o=i?function(e,t){return i(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=o},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){function r(e){if("string"==typeof e)return e;if(o(e))return a(e,r)+"";if(s(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var i=n(10),a=n(56),o=n(3),s=n(16),u=1/0,d=i?i.prototype:void 0,l=d?d.toString:void 0;e.exports=r},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t){function n(e,t){return e.has(t)}e.exports=n},function(e,t,n){function r(e,t){var n=t?i(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var i=n(41);e.exports=r},function(e,t,n){function r(e,t,n){var r=t?n(o(e),s):o(e);return a(r,i,new e.constructor)}var i=n(266),a=n(57),o=n(84),s=1;e.exports=r},function(e,t){function n(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}var r=/\w*$/;e.exports=n},function(e,t,n){function r(e,t,n){var r=t?n(o(e),s):o(e);return a(r,i,new e.constructor)}var i=n(267),a=n(57),o=n(90),s=1;e.exports=r},function(e,t,n){function r(e){return o?Object(o.call(e)):{}}var i=n(10),a=i?i.prototype:void 0,o=a?a.valueOf:void 0;e.exports=r},function(e,t,n){function r(e,t){return i(e,a(e),t)}var i=n(13),a=n(44);e.exports=r},function(e,t,n){function r(e,t){return i(e,a(e),t)}var i=n(13),a=n(80);e.exports=r},function(e,t,n){var r=n(2),i=r["__core-js_shared__"];e.exports=i},function(e,t){function n(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}e.exports=n},function(e,t,n){function r(e){return i(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(o=e.length>3&&"function"==typeof o?(i--,o):void 0,s&&a(n[0],n[1],s)&&(o=i<3?void 0:o,i=1),t=Object(t);++r<i;){var u=n[r];u&&e(t,u,r,o)}return t})}var i=n(291),a=n(330);e.exports=r},function(e,t){function n(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var u=o[e?s:++i];if(n(a[u],u,a)===!1)break}return t}}e.exports=n},function(e,t,n){function r(e,t,n){function r(){var t=this&&this!==a&&this instanceof r?u:e;return t.apply(s?n:this,arguments)}var s=t&o,u=i(e);return r}var i=n(21),a=n(2),o=1;e.exports=r},function(e,t,n){function r(e,t,n){function r(){for(var a=arguments.length,h=Array(a),_=a,f=u(r);_--;)h[_]=arguments[_];var m=a<3&&h[0]!==f&&h[a-1]!==f?[]:d(h,f);if(a-=m.length,a<n)return s(e,t,o,r.placeholder,void 0,h,m,void 0,void 0,n-a);var p=this&&this!==l&&this instanceof r?c:e;return i(p,this,h)}var c=a(e);return r}var i=n(36),a=n(21),o=n(72),s=n(73),u=n(79),d=n(47),l=n(2);e.exports=r},function(e,t,n){function r(e,t,n,r){function u(){for(var t=-1,a=arguments.length,s=-1,c=r.length,h=Array(c+a),_=this&&this!==o&&this instanceof u?l:e;++s<c;)h[s]=r[s];for(;a--;)h[s++]=arguments[++t];return i(_,d?n:this,h)}var d=t&s,l=a(e);return u}var i=n(36),a=n(21),o=n(2),s=1;e.exports=r},function(e,t,n){function r(e,t,n,r,i,k,x){switch(n){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case b:return!(e.byteLength!=t.byteLength||!k(new a(e),new a(t)));case h:case _:case p:return o(+e,+t);case f:return e.name==t.name&&e.message==t.message;case g:case y:return e==t+"";case m:var w=u;case v:var D=r&l;if(w||(w=d),e.size!=t.size&&!D)return!1;var T=x.get(e);if(T)return T==t;r|=c,x.set(e,t);var S=s(w(e),w(t),r,i,k,x);return x.delete(e),S;case M:if(Y)return Y.call(e)==Y.call(t)}return!1}var i=n(10),a=n(53),o=n(15),s=n(75),u=n(84),d=n(90),l=1,c=2,h="[object Boolean]",_="[object Date]",f="[object Error]",m="[object Map]",p="[object Number]",g="[object RegExp]",v="[object Set]",y="[object String]",M="[object Symbol]",b="[object ArrayBuffer]",L="[object DataView]",k=i?i.prototype:void 0,Y=k?k.valueOf:void 0;e.exports=r},function(e,t,n){function r(e,t,n,r,o,u){var d=n&a,l=i(e),c=l.length,h=i(t),_=h.length;if(c!=_&&!d)return!1;for(var f=c;f--;){var m=l[f];if(!(d?m in t:s.call(t,m)))return!1}var p=u.get(e);if(p&&u.get(t))return p==t;var g=!0;u.set(e,t),u.set(t,e);for(var v=d;++f<c;){m=l[f];var y=e[m],M=t[m];if(r)var b=d?r(M,y,m,t,e,u):r(y,M,m,e,t,u);if(!(void 0===b?y===M||o(y,M,n,r,u):b)){g=!1;break}v||(v="constructor"==m)}if(g&&!v){var L=e.constructor,k=t.constructor;L!=k&&"constructor"in e&&"constructor"in t&&!("function"==typeof L&&L instanceof L&&"function"==typeof k&&k instanceof k)&&(g=!1)}return u.delete(e),u.delete(t),g}var i=n(77),a=1,o=Object.prototype,s=o.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){return o(a(e,void 0,i),e+"")}var i=n(366),a=n(88),o=n(48);e.exports=r},function(e,t,n){function r(e){return i(e,o,a)}var i=n(63),a=n(80),o=n(31);e.exports=r},function(e,t,n){function r(e){for(var t=e.name+"",n=i[t],r=o.call(i,t)?n.length:0;r--;){var a=n[r],s=a.func;if(null==s||s==e)return a.name}return t}var i=n(350),a=Object.prototype,o=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){for(var t=a(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,i(o)]}return t}var i=n(83),a=n(30);e.exports=r},function(e,t,n){function r(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var i=s.call(e);return r&&(t?e[u]=n:delete e[u]),i}var i=n(10),a=Object.prototype,o=a.hasOwnProperty,s=a.toString,u=i?i.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t){function n(e){var t=e.match(r);return t?t[1].split(i):[]}var r=/\{\n\/\* \[wrapped with (.+)\] \*/,i=/,? & /;e.exports=n},function(e,t,n){function r(e,t,n){t=i(t,e);for(var r=-1,l=t.length,c=!1;++r<l;){var h=d(t[r]);if(!(c=null!=e&&n(e,h)))break;e=e[h]}return c||++r!=l?c:(l=null==e?0:e.length,!!l&&u(l)&&s(h,l)&&(o(e)||a(e)))}var i=n(67),a=n(26),o=n(3),s=n(23),u=n(49),d=n(14);e.exports=r},function(e,t,n){function r(){this.__data__=i?i(null):{},this.size=0}var i=n(24);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(i){var n=t[e];return n===a?void 0:n}return s.call(t,e)?t[e]:void 0}var i=n(24),a="__lodash_hash_undefined__",o=Object.prototype,s=o.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return i?void 0!==t[e]:o.call(t,e)}var i=n(24),a=Object.prototype,o=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=i&&void 0===t?a:t,this}var i=n(24),a="__lodash_hash_undefined__";e.exports=r},function(e,t){function n(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&i.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var r=Object.prototype,i=r.hasOwnProperty;e.exports=n},function(e,t,n){function r(e,t,n,r){var j=e.constructor;switch(t){case y:return i(e);case c:case h:return new j(+e);case M:return a(e,r);case b:case L:case k:case Y:case x:case w:case D:case T:case S:return l(e,r);case _:return o(e,r,n);case f:case g:return new j(e);case m:return s(e);case p:return u(e,r,n);case v:return d(e)}}var i=n(41),a=n(297),o=n(298),s=n(299),u=n(300),d=n(301),l=n(69),c="[object Boolean]",h="[object Date]",_="[object Map]",f="[object Number]",m="[object RegExp]",p="[object Set]",g="[object String]",v="[object Symbol]",y="[object ArrayBuffer]",M="[object DataView]",b="[object Float32Array]",L="[object Float64Array]",k="[object Int8Array]",Y="[object Int16Array]",x="[object Int32Array]",w="[object Uint8Array]",D="[object Uint8ClampedArray]",T="[object Uint16Array]",S="[object Uint32Array]";e.exports=r},function(e,t){function n(e,t){var n=t.length;if(!n)return e;var i=n-1;return t[i]=(n>1?"& ":"")+t[i],t=t.join(n>2?", ":" "),e.replace(r,"{\n/* [wrapped with "+t+"] */\n")}var r=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;e.exports=n},function(e,t,n){function r(e){return o(e)||a(e)||!!(s&&e&&e[s])}var i=n(10),a=n(26),o=n(3),s=i?i.isConcatSpreadable:void 0;e.exports=r},function(e,t,n){function r(e,t,n){if(!s(n))return!1;var r=typeof t;return!!("number"==r?a(n)&&o(t,n.length):"string"==r&&t in n)&&i(n[t],e)}var i=n(15),a=n(27),o=n(23),s=n(4);e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){var t=o(e),n=s[t];if("function"!=typeof n||!(t in i.prototype))return!1;if(e===n)return!0;var r=a(n);return!!r&&e===r[0]}var i=n(33),a=n(78),o=n(315),s=n(387);e.exports=r},function(e,t,n){function r(e){return!!a&&a in e}var i=n(304),a=function(){var e=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=i(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():o.call(t,n,1),--this.size,!0}var i=n(19),a=Array.prototype,o=a.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=i(t,e);return n<0?void 0:t[n][1]}var i=n(19);e.exports=r},function(e,t,n){function r(e){return i(this.__data__,e)>-1}var i=n(19);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=i(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var i=n(19);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new i,map:new(o||a),string:new i}}var i=n(262),a=n(17),o=n(34);e.exports=r},function(e,t,n){function r(e){var t=i(this,e).delete(e);return this.size-=t?1:0,t}var i=n(22);e.exports=r},function(e,t,n){function r(e){return i(this,e).get(e)}var i=n(22);e.exports=r},function(e,t,n){function r(e){return i(this,e).has(e)}var i=n(22);e.exports=r},function(e,t,n){function r(e,t){var n=i(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var i=n(22);e.exports=r},function(e,t,n){function r(e){var t=i(e,function(e){
return n.size===a&&n.clear(),e}),n=t.cache;return t}var i=n(377),a=500;e.exports=r},function(e,t,n){function r(e,t){var n=e[1],r=t[1],m=n|r,p=m<(u|d|h),g=r==h&&n==c||r==h&&n==_&&e[7].length<=t[8]||r==(h|_)&&t[7].length<=t[8]&&n==c;if(!p&&!g)return e;r&u&&(e[2]=t[2],m|=n&u?0:l);var v=t[3];if(v){var y=e[3];e[3]=y?i(y,v,t[4]):v,e[4]=y?o(e[3],s):t[4]}return v=t[5],v&&(y=e[5],e[5]=y?a(y,v,t[6]):v,e[6]=y?o(e[5],s):t[6]),v=t[7],v&&(e[7]=v),r&h&&(e[8]=null==e[8]?t[8]:f(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=m,e}var i=n(70),a=n(71),o=n(47),s="__lodash_placeholder__",u=1,d=2,l=4,c=8,h=128,_=256,f=Math.min;e.exports=r},function(e,t,n){var r=n(87),i=r(Object.keys,Object);e.exports=i},function(e,t){function n(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}e.exports=n},function(e,t,n){(function(e){var r=n(76),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,o=a&&a.exports===i,s=o&&r.process,u=function(){try{return s&&s.binding&&s.binding("util")}catch(e){}}();e.exports=u}).call(t,n(32)(e))},function(e,t){function n(e){return i.call(e)}var r=Object.prototype,i=r.toString;e.exports=n},function(e,t){var n={};e.exports=n},function(e,t,n){function r(e,t){for(var n=e.length,r=o(t.length,n),s=i(e);r--;){var u=t[r];e[r]=a(u,n)?s[u]:void 0}return e}var i=n(12),a=n(23),o=Math.min;e.exports=r},function(e,t){function n(e){return this.__data__.set(e,r),this}var r="__lodash_hash_undefined__";e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t,n){function r(){this.__data__=new i,this.size=0}var i=n(17);e.exports=r},function(e,t){function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}e.exports=n},function(e,t){function n(e){return this.__data__.get(e)}e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t,n){function r(e,t){var n=this.__data__;if(n instanceof i){var r=n.__data__;if(!a||r.length<s-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new o(r)}return n.set(e,t),this.size=n.size,this}var i=n(17),a=n(34),o=n(35),s=200;e.exports=r},function(e,t){function n(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}e.exports=n},function(e,t,n){function r(e,t){return i(m,function(n){var r="_."+n[0];t&n[1]&&!a(e,r)&&e.push(r)}),e.sort()}var i=n(37),a=n(269),o=1,s=2,u=8,d=16,l=32,c=64,h=128,_=256,f=512,m=[["ary",h],["bind",o],["bindKey",s],["curry",u],["curryRight",d],["flip",f],["partial",l],["partialRight",c],["rearg",_]];e.exports=r},function(e,t,n){function r(e){if(e instanceof i)return e.clone();var t=new a(e.__wrapped__,e.__chain__);return t.__actions__=o(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var i=n(33),a=n(52),o=n(12);e.exports=r},function(e,t,n){function r(e,t,n){return t=n?void 0:t,t=e&&null==t?e.length:t,i(e,a,void 0,void 0,void 0,void 0,t)}var i=n(42),a=128;e.exports=r},function(e,t,n){function r(e){return i(e,a)}var i=n(61),a=4;e.exports=r},function(e,t){function n(e){return function(){return e}}e.exports=n},function(e,t,n){function r(e,t,n){t=n?void 0:t;var o=i(e,a,void 0,void 0,void 0,void 0,void 0,t);return o.placeholder=r.placeholder,o}var i=n(42),a=8;r.placeholder={},e.exports=r},function(e,t,n){function r(e){var t=null==e?0:e.length;return t?i(e,1):[]}var i=n(273);e.exports=r},function(e,t,n){function r(e,t){return 2==t?function(t,n){return e.apply(void 0,arguments)}:function(t){return e.apply(void 0,arguments)}}function i(e,t){return 2==t?function(t,n){return e(t,n)}:function(t){return e(t)}}function a(e){for(var t=e?e.length:0,n=Array(t);t--;)n[t]=e[t];return n}function o(e){return function(t){return e({},t)}}function s(e,t){return function(){for(var n=arguments.length,r=n-1,i=Array(n);n--;)i[n]=arguments[n];var a=i[t],o=i.slice(0,t);return a&&h.apply(o,a),t!=r&&h.apply(o,i.slice(t+1)),e.apply(this,o)}}function u(e,t){return function(){var n=arguments.length;if(n){for(var r=Array(n);n--;)r[n]=arguments[n];var i=r[0]=t.apply(void 0,r);return e.apply(void 0,r),i}}}function d(e,t,n,h){function _(e,t){if(D.cap){var n=l.iterateeRearg[e];if(n)return b(t,n);var r=!x&&l.iterateeAry[e];if(r)return M(t,r)}return t}function f(e,t,n){return T||D.curry&&n>1?W(t,n):t}function m(e,t,n){if(D.fixed&&(S||!l.skipFixed[e])){var r=l.methodSpread[e],i=r&&r.start;return void 0===i?C(t,n):s(t,i)}return t}function p(e,t,n){return D.rearg&&n>1&&(j||!l.skipRearg[e])?N(t,l.methodRearg[e]||l.aryRearg[n]):t}function g(e,t){t=B(t);for(var n=-1,r=t.length,i=r-1,a=F(Object(e)),o=a;null!=o&&++n<r;){var s=t[n],u=o[s];null!=u&&(o[t[n]]=F(n==i?u:Object(u))),o=o[s]}return a}function v(e){return U.runInContext.convert(e)(void 0)}function y(e,t){var n=l.aliasToReal[e]||e,r=l.remap[n]||n,i=h;return function(e){var a=x?A:P,o=x?A[r]:t,s=O(O({},i),e);return d(a,n,o,s)}}function M(e,t){return L(e,function(e){return"function"==typeof e?i(e,t):e})}function b(e,t){return L(e,function(e){var n=t.length;return r(N(i(e,n),t),n)})}function L(e,t){return function(){var n=arguments.length;if(!n)return e();for(var r=Array(n);n--;)r[n]=arguments[n];var i=D.rearg?0:n-1;return r[i]=t(r[i]),e.apply(void 0,r)}}function k(e,t){var n,r=l.aliasToReal[e]||e,i=t,s=J[r];return s?i=s(t):D.immutable&&(l.mutate.array[r]?i=u(t,a):l.mutate.object[r]?i=u(t,o(t)):l.mutate.set[r]&&(i=u(t,g))),I($,function(e){return I(l.aryMethod[e],function(t){if(r==t){var a=l.methodSpread[r],o=a&&a.afterRearg;return n=o?m(r,p(r,i,e),e):p(r,m(r,i,e),e),n=_(r,n),n=f(r,n,e),!1}}),!n}),n||(n=i),n==t&&(n=T?W(n,1):function(){return t.apply(this,arguments)}),n.convert=y(r,t),l.placeholder[r]&&(Y=!0,n.placeholder=t.placeholder=H),n}var Y,x="function"==typeof t,w=t===Object(t);if(w&&(h=n,n=t,t=void 0),null==n)throw new TypeError;h||(h={});var D={cap:!("cap"in h)||h.cap,curry:!("curry"in h)||h.curry,fixed:!("fixed"in h)||h.fixed,immutable:!("immutable"in h)||h.immutable,rearg:!("rearg"in h)||h.rearg},T="curry"in h&&h.curry,S="fixed"in h&&h.fixed,j="rearg"in h&&h.rearg,H=x?n:c,A=x?n.runInContext():void 0,P=x?n:{ary:e.ary,assign:e.assign,clone:e.clone,curry:e.curry,forEach:e.forEach,isArray:e.isArray,isFunction:e.isFunction,iteratee:e.iteratee,keys:e.keys,rearg:e.rearg,toInteger:e.toInteger,toPath:e.toPath},C=P.ary,O=P.assign,F=P.clone,W=P.curry,I=P.forEach,E=P.isArray,z=P.isFunction,R=P.keys,N=P.rearg,V=P.toInteger,B=P.toPath,$=R(l.aryMethod),J={castArray:function(e){return function(){var t=arguments[0];return E(t)?e(a(t)):e.apply(void 0,arguments)}},iteratee:function(e){return function(){var t=arguments[0],n=arguments[1],r=e(t,n),a=r.length;return D.cap&&"number"==typeof n?(n=n>2?n-2:1,a&&a<=n?r:i(r,n)):r}},mixin:function(e){return function(t){var n=this;if(!z(n))return e(n,Object(t));var r=[];return I(R(t),function(e){z(t[e])&&r.push([e,n.prototype[e]])}),e(n,Object(t)),I(r,function(e){var t=e[1];z(t)?n.prototype[e[0]]=t:delete n.prototype[e[0]]}),n}},nthArg:function(e){return function(t){var n=t<0?1:V(t)+1;return W(e(t),n)}},rearg:function(e){return function(t,n){var r=n?n.length:0;return W(e(t,n),r)}},runInContext:function(t){return function(n){return d(e,t(n),h)}}};if(!w)return k(t,n);var U=n,q=[];return I($,function(e){I(l.aryMethod[e],function(e){var t=U[l.remap[e]||e];t&&q.push([e,k(e,t)])})}),I(R(U),function(e){var t=U[e];if("function"==typeof t){for(var n=q.length;n--;)if(q[n][0]==e)return;t.convert=y(e,t),q.push([e,t])}}),I(q,function(e){U[e[0]]=e[1]}),U.convert=v,Y&&(U.placeholder=H),I(R(U),function(e){I(l.realToAlias[e]||[],function(t){U[t]=U[e]})}),U}var l=n(368),c=n(95),h=Array.prototype.push;e.exports=d},function(e,t){t.aliasToReal={each:"forEach",eachRight:"forEachRight",entries:"toPairs",entriesIn:"toPairsIn",extend:"assignIn",extendAll:"assignInAll",extendAllWith:"assignInAllWith",extendWith:"assignInWith",first:"head",conforms:"conformsTo",matches:"isMatch",property:"get",__:"placeholder",F:"stubFalse",T:"stubTrue",all:"every",allPass:"overEvery",always:"constant",any:"some",anyPass:"overSome",apply:"spread",assoc:"set",assocPath:"set",complement:"negate",compose:"flowRight",contains:"includes",dissoc:"unset",dissocPath:"unset",dropLast:"dropRight",dropLastWhile:"dropRightWhile",equals:"isEqual",identical:"eq",indexBy:"keyBy",init:"initial",invertObj:"invert",juxt:"over",omitAll:"omit",nAry:"ary",path:"get",pathEq:"matchesProperty",pathOr:"getOr",paths:"at",pickAll:"pick",pipe:"flow",pluck:"map",prop:"get",propEq:"matchesProperty",propOr:"getOr",props:"at",symmetricDifference:"xor",symmetricDifferenceBy:"xorBy",symmetricDifferenceWith:"xorWith",takeLast:"takeRight",takeLastWhile:"takeRightWhile",unapply:"rest",unnest:"flatten",useWith:"overArgs",where:"conformsTo",whereEq:"isMatch",zipObj:"zipObject"},t.aryMethod={1:["assignAll","assignInAll","attempt","castArray","ceil","create","curry","curryRight","defaultsAll","defaultsDeepAll","floor","flow","flowRight","fromPairs","invert","iteratee","memoize","method","mergeAll","methodOf","mixin","nthArg","over","overEvery","overSome","rest","reverse","round","runInContext","spread","template","trim","trimEnd","trimStart","uniqueId","words","zipAll"],2:["add","after","ary","assign","assignAllWith","assignIn","assignInAllWith","at","before","bind","bindAll","bindKey","chunk","cloneDeepWith","cloneWith","concat","conformsTo","countBy","curryN","curryRightN","debounce","defaults","defaultsDeep","defaultTo","delay","difference","divide","drop","dropRight","dropRightWhile","dropWhile","endsWith","eq","every","filter","find","findIndex","findKey","findLast","findLastIndex","findLastKey","flatMap","flatMapDeep","flattenDepth","forEach","forEachRight","forIn","forInRight","forOwn","forOwnRight","get","groupBy","gt","gte","has","hasIn","includes","indexOf","intersection","invertBy","invoke","invokeMap","isEqual","isMatch","join","keyBy","lastIndexOf","lt","lte","map","mapKeys","mapValues","matchesProperty","maxBy","meanBy","merge","mergeAllWith","minBy","multiply","nth","omit","omitBy","overArgs","pad","padEnd","padStart","parseInt","partial","partialRight","partition","pick","pickBy","propertyOf","pull","pullAll","pullAt","random","range","rangeRight","rearg","reject","remove","repeat","restFrom","result","sampleSize","some","sortBy","sortedIndex","sortedIndexOf","sortedLastIndex","sortedLastIndexOf","sortedUniqBy","split","spreadFrom","startsWith","subtract","sumBy","take","takeRight","takeRightWhile","takeWhile","tap","throttle","thru","times","trimChars","trimCharsEnd","trimCharsStart","truncate","union","uniqBy","uniqWith","unset","unzipWith","without","wrap","xor","zip","zipObject","zipObjectDeep"],3:["assignInWith","assignWith","clamp","differenceBy","differenceWith","findFrom","findIndexFrom","findLastFrom","findLastIndexFrom","getOr","includesFrom","indexOfFrom","inRange","intersectionBy","intersectionWith","invokeArgs","invokeArgsMap","isEqualWith","isMatchWith","flatMapDepth","lastIndexOfFrom","mergeWith","orderBy","padChars","padCharsEnd","padCharsStart","pullAllBy","pullAllWith","rangeStep","rangeStepRight","reduce","reduceRight","replace","set","slice","sortedIndexBy","sortedLastIndexBy","transform","unionBy","unionWith","update","xorBy","xorWith","zipWith"],4:["fill","setWith","updateWith"]},t.aryRearg={2:[1,0],3:[2,0,1],4:[3,2,0,1]},t.iterateeAry={dropRightWhile:1,dropWhile:1,every:1,filter:1,find:1,findFrom:1,findIndex:1,findIndexFrom:1,findKey:1,findLast:1,findLastFrom:1,findLastIndex:1,findLastIndexFrom:1,findLastKey:1,flatMap:1,flatMapDeep:1,flatMapDepth:1,forEach:1,forEachRight:1,forIn:1,forInRight:1,forOwn:1,forOwnRight:1,map:1,mapKeys:1,mapValues:1,partition:1,reduce:2,reduceRight:2,reject:1,remove:1,some:1,takeRightWhile:1,takeWhile:1,times:1,transform:2},t.iterateeRearg={mapKeys:[1],reduceRight:[1,0]},t.methodRearg={assignInAllWith:[1,0],assignInWith:[1,2,0],assignAllWith:[1,0],assignWith:[1,2,0],differenceBy:[1,2,0],differenceWith:[1,2,0],getOr:[2,1,0],intersectionBy:[1,2,0],intersectionWith:[1,2,0],isEqualWith:[1,2,0],isMatchWith:[2,1,0],mergeAllWith:[1,0],mergeWith:[1,2,0],padChars:[2,1,0],padCharsEnd:[2,1,0],padCharsStart:[2,1,0],pullAllBy:[2,1,0],pullAllWith:[2,1,0],rangeStep:[1,2,0],rangeStepRight:[1,2,0],setWith:[3,1,2,0],sortedIndexBy:[2,1,0],sortedLastIndexBy:[2,1,0],unionBy:[1,2,0],unionWith:[1,2,0],updateWith:[3,1,2,0],xorBy:[1,2,0],xorWith:[1,2,0],zipWith:[1,2,0]},t.methodSpread={assignAll:{start:0},assignAllWith:{start:0},assignInAll:{start:0},assignInAllWith:{start:0},defaultsAll:{start:0},defaultsDeepAll:{start:0},invokeArgs:{start:2},invokeArgsMap:{start:2},mergeAll:{start:0},mergeAllWith:{start:0},partial:{start:1},partialRight:{start:1},without:{start:1},zipAll:{start:0}},t.mutate={array:{fill:!0,pull:!0,pullAll:!0,pullAllBy:!0,pullAllWith:!0,pullAt:!0,remove:!0,reverse:!0},object:{assign:!0,assignAll:!0,assignAllWith:!0,assignIn:!0,assignInAll:!0,assignInAllWith:!0,assignInWith:!0,assignWith:!0,defaults:!0,defaultsAll:!0,defaultsDeep:!0,defaultsDeepAll:!0,merge:!0,mergeAll:!0,mergeAllWith:!0,mergeWith:!0},set:{set:!0,setWith:!0,unset:!0,update:!0,updateWith:!0}},t.placeholder={bind:!0,bindKey:!0,curry:!0,curryRight:!0,partial:!0,partialRight:!0},t.realToAlias=function(){var e=Object.prototype.hasOwnProperty,n=t.aliasToReal,r={};for(var i in n){var a=n[i];e.call(r,a)?r[a].push(i):r[a]=[i]}return r}(),t.remap={assignAll:"assign",assignAllWith:"assignWith",assignInAll:"assignIn",assignInAllWith:"assignInWith",curryN:"curry",curryRightN:"curryRight",defaultsAll:"defaults",defaultsDeepAll:"defaultsDeep",findFrom:"find",findIndexFrom:"findIndex",findLastFrom:"findLast",findLastIndexFrom:"findLastIndex",getOr:"get",includesFrom:"includes",indexOfFrom:"indexOf",invokeArgs:"invoke",invokeArgsMap:"invokeMap",lastIndexOfFrom:"lastIndexOf",mergeAll:"merge",mergeAllWith:"mergeWith",padChars:"pad",padCharsEnd:"padEnd",padCharsStart:"padStart",propertyOf:"get",rangeStep:"range",rangeStepRight:"rangeRight",restFrom:"rest",spreadFrom:"spread",trimChars:"trim",trimCharsEnd:"trimEnd",trimCharsStart:"trimStart",zipAll:"zip"},t.skipFixed={castArray:!0,flow:!0,flowRight:!0,iteratee:!0,mixin:!0,rearg:!0,runInContext:!0},t.skipRearg={add:!0,assign:!0,assignIn:!0,bind:!0,bindKey:!0,concat:!0,difference:!0,divide:!0,eq:!0,gt:!0,gte:!0,isEqual:!0,lt:!0,lte:!0,matchesProperty:!0,merge:!0,multiply:!0,overArgs:!0,partial:!0,partialRight:!0,propertyOf:!0,random:!0,range:!0,rangeRight:!0,subtract:!0,zip:!0,zipObject:!0,zipObjectDeep:!0}},function(e,t,n){e.exports={ary:n(362),assign:n(60),clone:n(363),curry:n(365),forEach:n(37),isArray:n(3),isFunction:n(29),iteratee:n(376),keys:n(65),rearg:n(381),toInteger:n(97),toPath:n(385)}},function(e,t,n){function r(e,t,n){return i(a,e,t,n)}var i=n(367),a=n(369);e.exports=r},function(e,t,n){var r=n(370),i=r("merge",n(378));i.placeholder=n(95),e.exports=i},function(e,t,n){function r(e,t,n){var r=null==e?void 0:i(e,t);return void 0===r?n:r}var i=n(62);e.exports=r},function(e,t,n){function r(e,t){return null!=e&&a(e,t,i)}var i=n(275),a=n(320);e.exports=r},function(e,t,n){function r(e){return a(e)&&i(e)}var i=n(27),a=n(7);e.exports=r},function(e,t,n){function r(e){if(!o(e)||i(e)!=s)return!1;var t=a(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==h}var i=n(11),a=n(43),o=n(7),s="[object Object]",u=Function.prototype,d=Object.prototype,l=u.toString,c=d.hasOwnProperty,h=l.call(Object);e.exports=r},function(e,t,n){function r(e){return a("function"==typeof e?e:i(e,o))}var i=n(61),a=n(283),o=1;e.exports=r},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(r.Cache||i),n}var i=n(35),a="Expected a function";r.Cache=i,e.exports=r},function(e,t,n){var r=n(287),i=n(306),a=i(function(e,t,n){r(e,t,n)});e.exports=a},function(e,t){function n(){}e.exports=n},function(e,t,n){function r(e){return o(e)?i(s(e)):a(e)}var i=n(289),a=n(290),o=n(45),s=n(14);e.exports=r},function(e,t,n){var r=n(42),i=n(313),a=256,o=i(function(e,t){return r(e,a,void 0,void 0,void 0,t)});e.exports=o},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){function r(e){if(!e)return 0===e?e:0;if(e=i(e),e===a||e===-a){var t=e<0?-1:1;return t*o}return e===e?e:0}var i=n(384),a=1/0,o=1.7976931348623157e308;e.exports=r},function(e,t,n){function r(e){if("number"==typeof e)return e;if(a(e))return o;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=d.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}var i=n(4),a=n(16),o=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=r},function(e,t,n){function r(e){return o(e)?i(e,d):s(e)?[e]:a(u(l(e)))}var i=n(56),a=n(12),o=n(3),s=n(16),u=n(93),d=n(14),l=n(98);e.exports=r},function(e,t,n){function r(e){return i(e,a(e))}var i=n(13),a=n(31);e.exports=r},function(e,t,n){function r(e){if(u(e)&&!s(e)&&!(e instanceof i)){if(e instanceof a)return e;if(c.call(e,"__wrapped__"))return d(e)}return new a(e)}var i=n(33),a=n(52),o=n(40),s=n(3),u=n(7),d=n(361),l=Object.prototype,c=l.hasOwnProperty;r.prototype=o.prototype,r.prototype.constructor=r,e.exports=r},function(e,t,n){function r(e){return n(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./af":99,"./af.js":99,"./ar":105,"./ar-dz":100,"./ar-dz.js":100,"./ar-ly":101,"./ar-ly.js":101,"./ar-ma":102,"./ar-ma.js":102,"./ar-sa":103,"./ar-sa.js":103,"./ar-tn":104,"./ar-tn.js":104,"./ar.js":105,"./az":106,"./az.js":106,"./be":107,"./be.js":107,"./bg":108,"./bg.js":108,"./bn":109,"./bn.js":109,"./bo":110,"./bo.js":110,"./br":111,"./br.js":111,"./bs":112,"./bs.js":112,"./ca":113,"./ca.js":113,"./cs":114,"./cs.js":114,"./cv":115,"./cv.js":115,"./cy":116,"./cy.js":116,"./da":117,"./da.js":117,"./de":119,"./de-at":118,"./de-at.js":118,"./de.js":119,"./dv":120,"./dv.js":120,"./el":121,"./el.js":121,"./en-au":122,"./en-au.js":122,"./en-ca":123,"./en-ca.js":123,"./en-gb":124,"./en-gb.js":124,"./en-ie":125,"./en-ie.js":125,"./en-nz":126,"./en-nz.js":126,"./eo":127,"./eo.js":127,"./es":129,"./es-do":128,"./es-do.js":128,"./es.js":129,"./et":130,"./et.js":130,"./eu":131,"./eu.js":131,"./fa":132,"./fa.js":132,"./fi":133,"./fi.js":133,"./fo":134,"./fo.js":134,"./fr":137,"./fr-ca":135,"./fr-ca.js":135,"./fr-ch":136,"./fr-ch.js":136,"./fr.js":137,"./fy":138,"./fy.js":138,"./gd":139,"./gd.js":139,"./gl":140,"./gl.js":140,"./he":141,"./he.js":141,"./hi":142,"./hi.js":142,"./hr":143,"./hr.js":143,"./hu":144,"./hu.js":144,"./hy-am":145,"./hy-am.js":145,"./id":146,"./id.js":146,"./is":147,"./is.js":147,"./it":148,"./it.js":148,"./ja":149,"./ja.js":149,"./jv":150,"./jv.js":150,"./ka":151,"./ka.js":151,"./kk":152,"./kk.js":152,"./km":153,"./km.js":153,"./ko":154,"./ko.js":154,"./ky":155,"./ky.js":155,"./lb":156,"./lb.js":156,"./lo":157,"./lo.js":157,"./lt":158,"./lt.js":158,"./lv":159,"./lv.js":159,"./me":160,"./me.js":160,"./mi":161,"./mi.js":161,"./mk":162,"./mk.js":162,"./ml":163,"./ml.js":163,"./mr":164,"./mr.js":164,"./ms":166,"./ms-my":165,"./ms-my.js":165,"./ms.js":166,"./my":167,"./my.js":167,"./nb":168,"./nb.js":168,"./ne":169,"./ne.js":169,"./nl":171,"./nl-be":170,"./nl-be.js":170,"./nl.js":171,"./nn":172,"./nn.js":172,"./pa-in":173,"./pa-in.js":173,"./pl":174,"./pl.js":174,"./pt":176,"./pt-br":175,"./pt-br.js":175,"./pt.js":176,"./ro":177,"./ro.js":177,"./ru":178,"./ru.js":178,"./se":179,"./se.js":179,"./si":180,"./si.js":180,"./sk":181,"./sk.js":181,"./sl":182,"./sl.js":182,"./sq":183,"./sq.js":183,"./sr":185,"./sr-cyrl":184,"./sr-cyrl.js":184,"./sr.js":185,"./ss":186,"./ss.js":186,"./sv":187,"./sv.js":187,"./sw":188,"./sw.js":188,"./ta":189,"./ta.js":189,"./te":190,"./te.js":190,"./tet":191,"./tet.js":191,"./th":192,"./th.js":192,"./tl-ph":193,"./tl-ph.js":193,"./tlh":194,"./tlh.js":194,"./tr":195,"./tr.js":195,"./tzl":196,"./tzl.js":196,"./tzm":198,"./tzm-latn":197,"./tzm-latn.js":197,"./tzm.js":198,"./uk":199,"./uk.js":199,"./uz":200,"./uz.js":200,"./vi":201,"./vi.js":201,"./x-pseudo":202,"./x-pseudo.js":202,"./yo":203,"./yo.js":203,"./zh-cn":204,"./zh-cn.js":204,"./zh-hk":205,"./zh-hk.js":205,"./zh-tw":206,"./zh-tw.js":206};r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=388}])});
//# sourceMappingURL=vue-chartjs.js.map

/***/ }),

/***/ "./resources/js/components/Chart.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Chart.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=30973183& */ "./resources/js/components/Chart.vue?vue&type=template&id=30973183&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./resources/js/components/Chart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chart.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Chart.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Chart.vue?vue&type=template&id=30973183&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Chart.vue?vue&type=template&id=30973183& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_30973183___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chart.vue?vue&type=template&id=30973183& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chart.vue?vue&type=template&id=30973183&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* binding */ EffectScope),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   customRef: () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Vue),
/* harmony export */   defineAsyncComponent: () => (/* binding */ defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* binding */ defineComponent),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   effectScope: () => (/* binding */ effectScope),
/* harmony export */   getCurrentInstance: () => (/* binding */ getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isProxy: () => (/* binding */ isProxy),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   isReadonly: () => (/* binding */ isReadonly),
/* harmony export */   isRef: () => (/* binding */ isRef),
/* harmony export */   isShallow: () => (/* binding */ isShallow),
/* harmony export */   markRaw: () => (/* binding */ markRaw),
/* harmony export */   mergeDefaults: () => (/* binding */ mergeDefaults),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   onActivated: () => (/* binding */ onActivated),
/* harmony export */   onBeforeMount: () => (/* binding */ onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* binding */ onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* binding */ onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* binding */ onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* binding */ onErrorCaptured),
/* harmony export */   onMounted: () => (/* binding */ onMounted),
/* harmony export */   onRenderTracked: () => (/* binding */ onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* binding */ onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* binding */ onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* binding */ onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* binding */ onUnmounted),
/* harmony export */   onUpdated: () => (/* binding */ onUpdated),
/* harmony export */   provide: () => (/* binding */ provide),
/* harmony export */   proxyRefs: () => (/* binding */ proxyRefs),
/* harmony export */   reactive: () => (/* binding */ reactive),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   ref: () => (/* binding */ ref$1),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   shallowReactive: () => (/* binding */ shallowReactive),
/* harmony export */   shallowReadonly: () => (/* binding */ shallowReadonly),
/* harmony export */   shallowRef: () => (/* binding */ shallowRef),
/* harmony export */   toRaw: () => (/* binding */ toRaw),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   triggerRef: () => (/* binding */ triggerRef),
/* harmony export */   unref: () => (/* binding */ unref),
/* harmony export */   useAttrs: () => (/* binding */ useAttrs),
/* harmony export */   useCssModule: () => (/* binding */ useCssModule),
/* harmony export */   useCssVars: () => (/* binding */ useCssVars),
/* harmony export */   useListeners: () => (/* binding */ useListeners),
/* harmony export */   useSlots: () => (/* binding */ useSlots),
/* harmony export */   version: () => (/* binding */ version),
/* harmony export */   watch: () => (/* binding */ watch),
/* harmony export */   watchEffect: () => (/* binding */ watchEffect),
/* harmony export */   watchPostEffect: () => (/* binding */ watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
var isArray = Array.isArray;
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null;
}
function isDef(v) {
    return v !== undefined && v !== null;
}
function isTrue(v) {
    return v === true;
}
function isFalse(v) {
    return v === false;
}
/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Quick object check - this is primarily used to tell
 * objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;
function toRawType(value) {
    return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}
function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
    return (isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function');
}
/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; };
}
/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */
function remove$2(arr, item) {
    var len = arr.length;
    if (len) {
        // fast path for the only / last item
        if (item === arr[len - 1]) {
            arr.length = len - 1;
            return;
        }
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}
/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
});
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
/* istanbul ignore next */
function polyfillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx);
    }
    boundFn._length = fn.length;
    return boundFn;
}
function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}
// @ts-expect-error bind cannot be `undefined`
var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}
/**
 * Mix properties into target object.
 */
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
/* eslint-disable no-unused-vars */
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) { }
/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };
/* eslint-enable no-unused-vars */
/**
 * Return the same value.
 */
var identity = function (_) { return _; };
/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys$1(modules) {
    return modules
        .reduce(function (keys, m) {
        return keys.concat(m.staticKeys || []);
    }, [])
        .join(',');
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    if (a === b)
        return true;
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return (a.length === b.length &&
                    a.every(function (e, i) {
                        return looseEqual(e, b[i]);
                    }));
            }
            else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            }
            else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return (keysA.length === keysB.length &&
                    keysA.every(function (key) {
                        return looseEqual(a[key], b[key]);
                    }));
            }
            else {
                /* istanbul ignore next */
                return false;
            }
        }
        catch (e) {
            /* istanbul ignore next */
            return false;
        }
    }
    else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    }
    else {
        return false;
    }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val))
            return i;
    }
    return -1;
}
/**
 * Ensure a function is called only once.
 */
function once(fn) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
function hasChanged(x, y) {
    if (x === y) {
        return x === 0 && 1 / x !== 1 / y;
    }
    else {
        return x === x || y === y;
    }
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch',
    'renderTracked',
    'renderTriggered'
];

var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: false,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',
    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',
    /**
     * Whether to record perf
     */
    performance: false,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
};

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
/**
 * Parse simple path.
 */
var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
    if (bailRE.test(path)) {
        return;
    }
    var segments = path.split('.');
    return function (obj) {
        for (var i = 0; i < segments.length; i++) {
            if (!obj)
                return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}

// can we use __proto__?
var hasProto = '__proto__' in {};
// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
// Firefox has a "watch" function on Object.prototype...
// @ts-expect-error firebox support
var nativeWatch = {}.watch;
var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    }
    catch (e) { }
}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
    if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && typeof __webpack_require__.g !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer =
                __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
        }
        else {
            _isServer = false;
        }
    }
    return _isServer;
};
// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
}
else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /** @class */ (function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function (key) {
            return this.set[key] === true;
        };
        Set.prototype.add = function (key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function () {
            this.set = Object.create(null);
        };
        return Set;
    }());
}

var currentInstance = null;
/**
 * This is exposed for compatibility with v3 (e.g. some functions in VueUse
 * relies on it). Do not use this internally, just use `currentInstance`.
 *
 * @internal this function needs manual type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function getCurrentInstance() {
    return currentInstance && { proxy: currentInstance };
}
/**
 * @internal
 */
function setCurrentInstance(vm) {
    if (vm === void 0) { vm = null; }
    if (!vm)
        currentInstance && currentInstance._scope.off();
    currentInstance = vm;
    vm && vm._scope.on();
}

/**
 * @internal
 */
var VNode = /** @class */ (function () {
    function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function () {
            return this.componentInstance;
        },
        enumerable: false,
        configurable: true
    });
    return VNode;
}());
var createEmptyVNode = function (text) {
    if (text === void 0) { text = ''; }
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};
function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, 
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}

/* not type checking this file because flow doesn't play well with Proxy */
var initProxy;
if (true) {
    var allowedGlobals_1 = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
        'require' // for Webpack/Browserify
    );
    var warnNonPresent_1 = function (target, key) {
        warn$2("Property or method \"".concat(key, "\" is not defined on the instance but ") +
            'referenced during render. Make sure that this property is reactive, ' +
            'either in the data option, or for class-based components, by ' +
            'initializing the property. ' +
            'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };
    var warnReservedPrefix_1 = function (target, key) {
        warn$2("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
            'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
            'prevent conflicts with Vue internals. ' +
            'See: https://v2.vuejs.org/v2/api/#data', target);
    };
    var hasProxy_1 = typeof Proxy !== 'undefined' && isNative(Proxy);
    if (hasProxy_1) {
        var isBuiltInModifier_1 = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
            set: function (target, key, value) {
                if (isBuiltInModifier_1(key)) {
                    warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                    return false;
                }
                else {
                    target[key] = value;
                    return true;
                }
            }
        });
    }
    var hasHandler_1 = {
        has: function (target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals_1(key) ||
                (typeof key === 'string' &&
                    key.charAt(0) === '_' &&
                    !(key in target.$data));
            if (!has && !isAllowed) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return has || !isAllowed;
        }
    };
    var getHandler_1 = {
        get: function (target, key) {
            if (typeof key === 'string' && !(key in target)) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return target[key];
        }
    };
    initProxy = function initProxy(vm) {
        if (hasProxy_1) {
            // determine which proxy handler to use
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
            vm._renderProxy = new Proxy(vm, handlers);
        }
        else {
            vm._renderProxy = vm;
        }
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var uid$2 = 0;
var pendingCleanupDeps = [];
var cleanupDeps = function () {
    for (var i = 0; i < pendingCleanupDeps.length; i++) {
        var dep = pendingCleanupDeps[i];
        dep.subs = dep.subs.filter(function (s) { return s; });
        dep._pending = false;
    }
    pendingCleanupDeps.length = 0;
};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */
var Dep = /** @class */ (function () {
    function Dep() {
        // pending subs cleanup
        this._pending = false;
        this.id = uid$2++;
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function (sub) {
        // #12696 deps with massive amount of subscribers are extremely slow to
        // clean up in Chromium
        // to workaround this, we unset the sub for now, and clear them on
        // next scheduler flush.
        this.subs[this.subs.indexOf(sub)] = null;
        if (!this._pending) {
            this._pending = true;
            pendingCleanupDeps.push(this);
        }
    };
    Dep.prototype.depend = function (info) {
        if (Dep.target) {
            Dep.target.addDep(this);
            if ( true && info && Dep.target.onTrack) {
                Dep.target.onTrack(__assign({ effect: Dep.target }, info));
            }
        }
    };
    Dep.prototype.notify = function (info) {
        // stabilize the subscriber list first
        var subs = this.subs.filter(function (s) { return s; });
        if ( true && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort(function (a, b) { return a.id - b.id; });
        }
        for (var i = 0, l = subs.length; i < l; i++) {
            var sub = subs[i];
            if ( true && info) {
                sub.onTrigger &&
                    sub.onTrigger(__assign({ effect: subs[i] }, info));
            }
            sub.update();
        }
    };
    return Dep;
}());
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];
function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted)
            ob.observeArray(inserted);
        // notify change
        if (true) {
            ob.dep.notify({
                type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                target: this,
                key: method
            });
        }
        else {}
        return result;
    });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var NO_INIITIAL_VALUE = {};
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;
function toggleObserving(value) {
    shouldObserve = value;
}
// ssr mock dep
var mockDep = {
    notify: noop,
    depend: noop,
    addSub: noop,
    removeSub: noop
};
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = /** @class */ (function () {
    function Observer(value, shallow, mock) {
        if (shallow === void 0) { shallow = false; }
        if (mock === void 0) { mock = false; }
        this.value = value;
        this.shallow = shallow;
        this.mock = mock;
        // this.value = value
        this.dep = mock ? mockDep : new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);
        if (isArray(value)) {
            if (!mock) {
                if (hasProto) {
                    value.__proto__ = arrayMethods;
                    /* eslint-enable no-proto */
                }
                else {
                    for (var i = 0, l = arrayKeys.length; i < l; i++) {
                        var key = arrayKeys[i];
                        def(value, key, arrayMethods[key]);
                    }
                }
            }
            if (!shallow) {
                this.observeArray(value);
            }
        }
        else {
            /**
             * Walk through all properties and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                defineReactive(value, key, NO_INIITIAL_VALUE, undefined, shallow, mock);
            }
        }
    }
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function (value) {
        for (var i = 0, l = value.length; i < l; i++) {
            observe(value[i], false, this.mock);
        }
    };
    return Observer;
}());
// helpers
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, shallow, ssrMockReactivity) {
    if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        return value.__ob__;
    }
    if (shouldObserve &&
        (ssrMockReactivity || !isServerRendering()) &&
        (isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value.__v_skip /* ReactiveFlags.SKIP */ &&
        !isRef(value) &&
        !(value instanceof VNode)) {
        return new Observer(value, shallow, ssrMockReactivity);
    }
}
/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow, mock) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }
    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) &&
        (val === NO_INIITIAL_VALUE || arguments.length === 2)) {
        val = obj[key];
    }
    var childOb = !shallow && observe(val, false, mock);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                if (true) {
                    dep.depend({
                        target: obj,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                else {}
                if (childOb) {
                    childOb.dep.depend();
                    if (isArray(value)) {
                        dependArray(value);
                    }
                }
            }
            return isRef(value) && !shallow ? value.value : value;
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (!hasChanged(value, newVal)) {
                return;
            }
            if ( true && customSetter) {
                customSetter();
            }
            if (setter) {
                setter.call(obj, newVal);
            }
            else if (getter) {
                // #7981: for accessor properties without setter
                return;
            }
            else if (!shallow && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
                return;
            }
            else {
                val = newVal;
            }
            childOb = !shallow && observe(newVal, false, mock);
            if (true) {
                dep.notify({
                    type: "set" /* TriggerOpTypes.SET */,
                    target: obj,
                    key: key,
                    newValue: newVal,
                    oldValue: value
                });
            }
            else {}
        }
    });
    return dep;
}
function set(target, key, val) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isReadonly(target)) {
         true && warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    var ob = target.__ob__;
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        // when mocking for SSR, array methods are not hijacked
        if (ob && !ob.shallow && ob.mock) {
            observe(val, false, true);
        }
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
    if (true) {
        ob.dep.notify({
            type: "add" /* TriggerOpTypes.ADD */,
            target: target,
            key: key,
            newValue: val,
            oldValue: undefined
        });
    }
    else {}
    return val;
}
function del(target, key) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (isReadonly(target)) {
         true &&
            warn$2("Delete operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    if (true) {
        ob.dep.notify({
            type: "delete" /* TriggerOpTypes.DELETE */,
            target: target,
            key: key
        });
    }
    else {}
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        if (e && e.__ob__) {
            e.__ob__.dep.depend();
        }
        if (isArray(e)) {
            dependArray(e);
        }
    }
}

function reactive(target) {
    makeReactive(target, false);
    return target;
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    makeReactive(target, true);
    def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    return target;
}
function makeReactive(target, shallow) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (!isReadonly(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
            }
            var existingOb = target && target.__ob__;
            if (existingOb && existingOb.shallow !== shallow) {
                warn$2("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
            }
        }
        var ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
        if ( true && !ob) {
            if (target == null || isPrimitive(target)) {
                warn$2("value cannot be made reactive: ".concat(String(target)));
            }
            if (isCollectionType(target)) {
                warn$2("Vue 2 does not support reactive collection types such as Map or Set.");
            }
        }
    }
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value.__ob__);
}
function isShallow(value) {
    return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    // non-extensible objects won't be observed anyway
    if (Object.isExtensible(value)) {
        def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    }
    return value;
}
/**
 * @internal
 */
function isCollectionType(value) {
    var type = toRawType(value);
    return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
}

/**
 * @internal
 */
var RefFlag = "__v_isRef";
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    var ref = {};
    def(ref, RefFlag, true);
    def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
    def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
    return ref;
}
function triggerRef(ref) {
    if ( true && !ref.dep) {
        warn$2("received object is not a triggerable ref.");
    }
    if (true) {
        ref.dep &&
            ref.dep.notify({
                type: "set" /* TriggerOpTypes.SET */,
                target: ref,
                key: 'value'
            });
    }
    else {}
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function proxyRefs(objectWithRefs) {
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var proxy = {};
    var keys = Object.keys(objectWithRefs);
    for (var i = 0; i < keys.length; i++) {
        proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
    }
    return proxy;
}
function proxyWithRefUnwrap(target, source, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = source[key];
            if (isRef(val)) {
                return val.value;
            }
            else {
                var ob = val && val.__ob__;
                if (ob)
                    ob.dep.depend();
                return val;
            }
        },
        set: function (value) {
            var oldValue = source[key];
            if (isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
            }
            else {
                source[key] = value;
            }
        }
    });
}
function customRef(factory) {
    var dep = new Dep();
    var _a = factory(function () {
        if (true) {
            dep.depend({
                target: ref,
                type: "get" /* TrackOpTypes.GET */,
                key: 'value'
            });
        }
        else {}
    }, function () {
        if (true) {
            dep.notify({
                target: ref,
                type: "set" /* TriggerOpTypes.SET */,
                key: 'value'
            });
        }
        else {}
    }), get = _a.get, set = _a.set;
    var ref = {
        get value() {
            return get();
        },
        set value(newVal) {
            set(newVal);
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
function toRefs(object) {
    if ( true && !isReactive(object)) {
        warn$2("toRefs() expects a reactive object but received a plain one.");
    }
    var ret = isArray(object) ? new Array(object.length) : {};
    for (var key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
function toRef(object, key, defaultValue) {
    var val = object[key];
    if (isRef(val)) {
        return val;
    }
    var ref = {
        get value() {
            var val = object[key];
            return val === undefined ? defaultValue : val;
        },
        set value(newVal) {
            object[key] = newVal;
        }
    };
    def(ref, RefFlag, true);
    return ref;
}

var rawToReadonlyFlag = "__v_rawToReadonly";
var rawToShallowReadonlyFlag = "__v_rawToShallowReadonly";
function readonly(target) {
    return createReadonly(target, false);
}
function createReadonly(target, shallow) {
    if (!isPlainObject(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Vue 2 does not support readonly arrays.");
            }
            else if (isCollectionType(target)) {
                warn$2("Vue 2 does not support readonly collection types such as Map or Set.");
            }
            else {
                warn$2("value cannot be made readonly: ".concat(typeof target));
            }
        }
        return target;
    }
    if ( true && !Object.isExtensible(target)) {
        warn$2("Vue 2 does not support creating readonly proxy for non-extensible object.");
    }
    // already a readonly object
    if (isReadonly(target)) {
        return target;
    }
    // already has a readonly proxy
    var existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
    var existingProxy = target[existingFlag];
    if (existingProxy) {
        return existingProxy;
    }
    var proxy = Object.create(Object.getPrototypeOf(target));
    def(target, existingFlag, proxy);
    def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
    def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
    if (isRef(target)) {
        def(proxy, RefFlag, true);
    }
    if (shallow || isShallow(target)) {
        def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineReadonlyProperty(proxy, target, keys[i], shallow);
    }
    return proxy;
}
function defineReadonlyProperty(proxy, target, key, shallow) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = target[key];
            return shallow || !isPlainObject(val) ? val : readonly(val);
        },
        set: function () {
             true &&
                warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        }
    });
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReadonly(target, true);
}

function computed(getterOrOptions, debugOptions) {
    var getter;
    var setter;
    var onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter =  true
            ? function () {
                warn$2('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var watcher = isServerRendering()
        ? null
        : new Watcher(currentInstance, getter, noop, { lazy: true });
    if ( true && watcher && debugOptions) {
        watcher.onTrack = debugOptions.onTrack;
        watcher.onTrigger = debugOptions.onTrigger;
    }
    var ref = {
        // some libs rely on the presence effect for checking computed refs
        // from normal refs, but the implementation doesn't matter
        effect: watcher,
        get value() {
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    if ( true && Dep.target.onTrack) {
                        Dep.target.onTrack({
                            effect: Dep.target,
                            target: ref,
                            type: "get" /* TrackOpTypes.GET */,
                            key: 'value'
                        });
                    }
                    watcher.depend();
                }
                return watcher.value;
            }
            else {
                return getter();
            }
        },
        set value(newVal) {
            setter(newVal);
        }
    };
    def(ref, RefFlag, true);
    def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
    return ref;
}

var mark;
var measure;
if (true) {
    var perf_1 = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf_1 &&
        // @ts-ignore
        perf_1.mark &&
        // @ts-ignore
        perf_1.measure &&
        // @ts-ignore
        perf_1.clearMarks &&
        // @ts-ignore
        perf_1.clearMeasures) {
        mark = function (tag) { return perf_1.mark(tag); };
        measure = function (name, startTag, endTag) {
            perf_1.measure(name, startTag, endTag);
            perf_1.clearMarks(startTag);
            perf_1.clearMarks(endTag);
            // perf.clearMeasures(name)
        };
    }
}

var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
        name: name,
        once: once,
        capture: capture,
        passive: passive
    };
});
function createFnInvoker(fns, vm) {
    function invoker() {
        var fns = invoker.fns;
        if (isArray(fns)) {
            var cloned = fns.slice();
            for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
            }
        }
        else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
        }
    }
    invoker.fns = fns;
    return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
    var name, cur, old, event;
    for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
             true &&
                warn$2("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
        }
        else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur, vm);
            }
            if (isTrue(event.once)) {
                cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }
            add(event.name, cur, event.capture, event.passive, event.params);
        }
        else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for (name in oldOn) {
        if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove(event.name, oldOn[name], event.capture);
        }
    }
}

function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];
    function wrappedHook() {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove$2(invoker.fns, wrappedHook);
    }
    if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
    }
    else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
        }
        else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook]);
        }
    }
    invoker.merged = true;
    def[hookKey] = invoker;
}

function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
        return;
    }
    var res = {};
    var attrs = data.attrs, props = data.props;
    if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
            var altKey = hyphenate(key);
            if (true) {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                    tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") +
                        "".concat(formatComponentName(
                        // @ts-expect-error tag is string
                        tag || Ctor), ", but the declared prop name is") +
                        " \"".concat(key, "\". ") +
                        "Note that HTML attributes are case-insensitive and camelCased " +
                        "props need to use their kebab-case equivalents when using in-DOM " +
                        "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
                }
            }
            checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false);
        }
    }
    return res;
}
function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
                delete hash[key];
            }
            return true;
        }
        else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
                delete hash[altKey];
            }
            return true;
        }
    }
    return false;
}

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
        if (isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
        }
    }
    return children;
}
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
    return isPrimitive(children)
        ? [createTextVNode(children)]
        : isArray(children)
            ? normalizeArrayChildren(children)
            : undefined;
}
function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean')
            continue;
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (isArray(c)) {
            if (c.length > 0) {
                c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i));
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                }
                res.push.apply(res, c);
            }
        }
        else if (isPrimitive(c)) {
            if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c);
            }
            else if (c !== '') {
                // convert primitive to vnode
                res.push(createTextVNode(c));
            }
        }
        else {
            if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text);
            }
            else {
                // default key for nested array children (likely generated by v-for)
                if (isTrue(children._isVList) &&
                    isDef(c.tag) &&
                    isUndef(c.key) &&
                    isDef(nestedIndex)) {
                    c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                }
                res.push(c);
            }
        }
    }
    return res;
}

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
         true &&
            warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
        tag = data.is;
    }
    if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode();
    }
    // warn against non-primitive key
    if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        warn$2('Avoid using non-primitive value as key, ' +
            'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (isArray(children) && isFunction(children[0])) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
    }
    else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
        var Ctor = void 0;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
            // platform built-in elements
            if ( true &&
                isDef(data) &&
                isDef(data.nativeOn) &&
                data.tag !== 'component') {
                warn$2("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
            }
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        }
        else if ((!data || !data.pre) &&
            isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag);
        }
        else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
    }
    else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
    }
    if (isArray(vnode)) {
        return vnode;
    }
    else if (isDef(vnode)) {
        if (isDef(ns))
            applyNS(vnode, ns);
        if (isDef(data))
            registerDeepBindings(data);
        return vnode;
    }
    else {
        return createEmptyVNode();
    }
}
function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
    }
    if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                applyNS(child, ns, force);
            }
        }
    }
}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
    if (isObject(data.style)) {
        traverse(data.style);
    }
    if (isObject(data.class)) {
        traverse(data.class);
    }
}

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
    var ret = null, i, l, keys, key;
    if (isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
        }
    }
    else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
        }
    }
    else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
            }
        }
        else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
            }
        }
    }
    if (!isDef(ret)) {
        ret = [];
    }
    ret._isVList = true;
    return ret;
}

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallbackRender, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            if ( true && !isObject(bindObject)) {
                warn$2('slot v-bind without argument expects an Object', this);
            }
            props = extend(extend({}, bindObject), props);
        }
        nodes =
            scopedSlotFn(props) ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    else {
        nodes =
            this.$slots[name] ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    var target = props && props.slot;
    if (target) {
        return this.$createElement('template', { slot: target }, nodes);
    }
    else {
        return nodes;
    }
}

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
}

function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) {
        return expect.indexOf(actual) === -1;
    }
    else {
        return expect !== actual;
    }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
    }
    else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    }
    else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
    }
    return eventKeyCode === undefined;
}

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
        if (!isObject(value)) {
             true &&
                warn$2('v-bind without argument expects an Object or Array value', this);
        }
        else {
            if (isArray(value)) {
                value = toObject(value);
            }
            var hash = void 0;
            var _loop_1 = function (key) {
                if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                    hash = data;
                }
                else {
                    var type = data.attrs && data.attrs.type;
                    hash =
                        asProp || config.mustUseProp(tag, type, key)
                            ? data.domProps || (data.domProps = {})
                            : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key);
                var hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];
                    if (isSync) {
                        var on = data.on || (data.on = {});
                        on["update:".concat(key)] = function ($event) {
                            value[key] = $event;
                        };
                    }
                }
            };
            for (var key in value) {
                _loop_1(key);
            }
        }
    }
    return data;
}

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
        return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
    );
    markStatic$1(tree, "__static__".concat(index), false);
    return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
    markStatic$1(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
    return tree;
}
function markStatic$1(tree, key, isOnce) {
    if (isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
            }
        }
    }
    else {
        markStaticNode(tree, key, isOnce);
    }
}
function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
}

function bindObjectListeners(data, value) {
    if (value) {
        if (!isPlainObject(value)) {
             true && warn$2('v-on without argument expects an Object value', this);
        }
        else {
            var on = (data.on = data.on ? extend({}, data.on) : {});
            for (var key in value) {
                var existing = on[key];
                var ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}

function resolveScopedSlots(fns, res, 
// the following are added in 2.6
hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
        }
        else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            // @ts-expect-error
            if (slot.proxy) {
                // @ts-expect-error
                slot.fn.proxy = true;
            }
            res[slot.key] = slot.fn;
        }
    }
    if (contentHashKey) {
        res.$key = contentHashKey;
    }
    return res;
}

// helper to process dynamic keys for dynamic arguments in v-bind and v-on.
function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1];
        }
        else if ( true && key !== '' && key !== null) {
            // null is a special value for explicitly removing a binding
            warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
        }
    }
    return baseObj;
}
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
}

function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
}

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
    if (!children || !children.length) {
        return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
            data &&
            data.slot != null) {
            var name_1 = data.slot;
            var slot = slots[name_1] || (slots[name_1] = []);
            if (child.tag === 'template') {
                slot.push.apply(slot, child.children || []);
            }
            else {
                slot.push(child);
            }
        }
        else {
            (slots.default || (slots.default = [])).push(child);
        }
    }
    // ignore slots that contains only whitespace
    for (var name_2 in slots) {
        if (slots[name_2].every(isWhitespace)) {
            delete slots[name_2];
        }
    }
    return slots;
}
function isWhitespace(node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' ';
}

function isAsyncPlaceholder(node) {
    // @ts-expect-error not really boolean type
    return node.isComment && node.asyncFactory;
}

function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
    var key = scopedSlots && scopedSlots.$key;
    if (!scopedSlots) {
        res = {};
    }
    else if (scopedSlots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return scopedSlots._normalized;
    }
    else if (isStable &&
        prevScopedSlots &&
        prevScopedSlots !== emptyObject &&
        key === prevScopedSlots.$key &&
        !hasNormalSlots &&
        !prevScopedSlots.$hasNormal) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevScopedSlots;
    }
    else {
        res = {};
        for (var key_1 in scopedSlots) {
            if (scopedSlots[key_1] && key_1[0] !== '$') {
                res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key_2 in normalSlots) {
        if (!(key_2 in res)) {
            res[key_2] = proxyNormalSlot(normalSlots, key_2);
        }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (scopedSlots && Object.isExtensible(scopedSlots)) {
        scopedSlots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
    var normalized = function () {
        var cur = currentInstance;
        setCurrentInstance(vm);
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res =
            res && typeof res === 'object' && !isArray(res)
                ? [res] // single vnode
                : normalizeChildren(res);
        var vnode = res && res[0];
        setCurrentInstance(cur);
        return res &&
            (!vnode ||
                (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
            ? undefined
            : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
        });
    }
    return normalized;
}
function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; };
}

function initSetup(vm) {
    var options = vm.$options;
    var setup = options.setup;
    if (setup) {
        var ctx = (vm._setupContext = createSetupContext(vm));
        setCurrentInstance(vm);
        pushTarget();
        var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
        popTarget();
        setCurrentInstance();
        if (isFunction(setupResult)) {
            // render function
            // @ts-ignore
            options.render = setupResult;
        }
        else if (isObject(setupResult)) {
            // bindings
            if ( true && setupResult instanceof VNode) {
                warn$2("setup() should not return VNodes directly - " +
                    "return a render function instead.");
            }
            vm._setupState = setupResult;
            // __sfc indicates compiled bindings from <script setup>
            if (!setupResult.__sfc) {
                for (var key in setupResult) {
                    if (!isReserved(key)) {
                        proxyWithRefUnwrap(vm, setupResult, key);
                    }
                    else if (true) {
                        warn$2("Avoid using variables that start with _ or $ in setup().");
                    }
                }
            }
            else {
                // exposed for compiled render fn
                var proxy = (vm._setupProxy = {});
                for (var key in setupResult) {
                    if (key !== '__sfc') {
                        proxyWithRefUnwrap(proxy, setupResult, key);
                    }
                }
            }
        }
        else if ( true && setupResult !== undefined) {
            warn$2("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : typeof setupResult));
        }
    }
}
function createSetupContext(vm) {
    var exposeCalled = false;
    return {
        get attrs() {
            if (!vm._attrsProxy) {
                var proxy = (vm._attrsProxy = {});
                def(proxy, '_v_attr_proxy', true);
                syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
            }
            return vm._attrsProxy;
        },
        get listeners() {
            if (!vm._listenersProxy) {
                var proxy = (vm._listenersProxy = {});
                syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
            }
            return vm._listenersProxy;
        },
        get slots() {
            return initSlotsProxy(vm);
        },
        emit: bind$1(vm.$emit, vm),
        expose: function (exposed) {
            if (true) {
                if (exposeCalled) {
                    warn$2("expose() should be called only once per setup().", vm);
                }
                exposeCalled = true;
            }
            if (exposed) {
                Object.keys(exposed).forEach(function (key) {
                    return proxyWithRefUnwrap(vm, exposed, key);
                });
            }
        }
    };
}
function syncSetupProxy(to, from, prev, instance, type) {
    var changed = false;
    for (var key in from) {
        if (!(key in to)) {
            changed = true;
            defineProxyAttr(to, key, instance, type);
        }
        else if (from[key] !== prev[key]) {
            changed = true;
        }
    }
    for (var key in to) {
        if (!(key in from)) {
            changed = true;
            delete to[key];
        }
    }
    return changed;
}
function defineProxyAttr(proxy, key, instance, type) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return instance[type][key];
        }
    });
}
function initSlotsProxy(vm) {
    if (!vm._slotsProxy) {
        syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
    }
    return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    for (var key in to) {
        if (!(key in from)) {
            delete to[key];
        }
    }
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useSlots() {
    return getContext().slots;
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useAttrs() {
    return getContext().attrs;
}
/**
 * Vue 2 only
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useListeners() {
    return getContext().listeners;
}
function getContext() {
    if ( true && !currentInstance) {
        warn$2("useContext() called without active instance.");
    }
    var vm = currentInstance;
    return vm._setupContext || (vm._setupContext = createSetupContext(vm));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    var props = isArray(raw)
        ? raw.reduce(function (normalized, p) { return ((normalized[p] = {}), normalized); }, {})
        : raw;
    for (var key in defaults) {
        var opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if (true) {
            warn$2("props default key \"".concat(key, "\" has no corresponding declaration."));
        }
    }
    return props;
}

function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = parentVnode
        ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
        : emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    // @ts-expect-error
    vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    // @ts-expect-error
    vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */
    if (true) {
        defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$listeners is readonly.", vm);
        }, true);
    }
    else {}
}
var currentRenderingInstance = null;
function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);
    Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
    };
    Vue.prototype._render = function () {
        var vm = this;
        var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
        if (_parentVnode && vm._isMounted) {
            vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            if (vm._slotsProxy) {
                syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
            }
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
            // There's no need to maintain a stack because all render fns are called
            // separately from one another. Nested component's render fns are called
            // when parent component is patched.
            setCurrentInstance(vm);
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
        }
        catch (e) {
            handleError(e, vm, "render");
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if ( true && vm.$options.renderError) {
                try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                }
                catch (e) {
                    handleError(e, vm, "renderError");
                    vnode = vm._vnode;
                }
            }
            else {
                vnode = vm._vnode;
            }
        }
        finally {
            currentRenderingInstance = null;
            setCurrentInstance();
        }
        // if the returned array contains only a single node, allow it
        if (isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
            if ( true && isArray(vnode)) {
                warn$2('Multiple root nodes returned from render function. Render function ' +
                    'should return a single root node.', vm);
            }
            vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode;
    };
}

function ensureCtor(comp, base) {
    if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
}
function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
    }
    if (isDef(factory.resolved)) {
        return factory.resolved;
    }
    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
    }
    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
    }
    if (owner && !isDef(factory.owners)) {
        var owners_1 = (factory.owners = [owner]);
        var sync_1 = true;
        var timerLoading_1 = null;
        var timerTimeout_1 = null;
        owner.$on('hook:destroyed', function () { return remove$2(owners_1, owner); });
        var forceRender_1 = function (renderCompleted) {
            for (var i = 0, l = owners_1.length; i < l; i++) {
                owners_1[i].$forceUpdate();
            }
            if (renderCompleted) {
                owners_1.length = 0;
                if (timerLoading_1 !== null) {
                    clearTimeout(timerLoading_1);
                    timerLoading_1 = null;
                }
                if (timerTimeout_1 !== null) {
                    clearTimeout(timerTimeout_1);
                    timerTimeout_1 = null;
                }
            }
        };
        var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor);
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync_1) {
                forceRender_1(true);
            }
            else {
                owners_1.length = 0;
            }
        });
        var reject_1 = once(function (reason) {
             true &&
                warn$2("Failed to resolve async component: ".concat(String(factory)) +
                    (reason ? "\nReason: ".concat(reason) : ''));
            if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender_1(true);
            }
        });
        var res_1 = factory(resolve, reject_1);
        if (isObject(res_1)) {
            if (isPromise(res_1)) {
                // () => Promise
                if (isUndef(factory.resolved)) {
                    res_1.then(resolve, reject_1);
                }
            }
            else if (isPromise(res_1.component)) {
                res_1.component.then(resolve, reject_1);
                if (isDef(res_1.error)) {
                    factory.errorComp = ensureCtor(res_1.error, baseCtor);
                }
                if (isDef(res_1.loading)) {
                    factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                    if (res_1.delay === 0) {
                        factory.loading = true;
                    }
                    else {
                        // @ts-expect-error NodeJS timeout type
                        timerLoading_1 = setTimeout(function () {
                            timerLoading_1 = null;
                            if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                factory.loading = true;
                                forceRender_1(false);
                            }
                        }, res_1.delay || 200);
                    }
                }
                if (isDef(res_1.timeout)) {
                    // @ts-expect-error NodeJS timeout type
                    timerTimeout_1 = setTimeout(function () {
                        timerTimeout_1 = null;
                        if (isUndef(factory.resolved)) {
                            reject_1( true ? "timeout (".concat(res_1.timeout, "ms)") : 0);
                        }
                    }, res_1.timeout);
                }
            }
        }
        sync_1 = false;
        // return in case resolved synchronously
        return factory.loading ? factory.loadingComp : factory.resolved;
    }
}

function getFirstComponentChild(children) {
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
            }
        }
    }
}

function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}
var target$1;
function add$1(event, fn) {
    target$1.$on(event, fn);
}
function remove$1(event, fn) {
    target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
    var _target = target$1;
    return function onceHandler() {
        var res = fn.apply(null, arguments);
        if (res !== null) {
            _target.$off(event, onceHandler);
        }
    };
}
function updateComponentListeners(vm, listeners, oldListeners) {
    target$1 = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
    target$1 = undefined;
}
function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
            }
        }
        else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
                vm._hasHookEvent = true;
            }
        }
        return vm;
    };
    Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
    };
    Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
        }
        // array of events
        if (isArray(event)) {
            for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                vm.$off(event[i_1], fn);
            }
            return vm;
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
            return vm;
        }
        if (!fn) {
            vm._events[event] = null;
            return vm;
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
            }
        }
        return vm;
    };
    Vue.prototype.$emit = function (event) {
        var vm = this;
        if (true) {
            var lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                    "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                    "Note that HTML attributes are case-insensitive and you cannot use " +
                    "v-on to listen to camelCase events when using in-DOM templates. " +
                    "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
            }
        }
        var cbs = vm._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"".concat(event, "\"");
            for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
        }
        return vm;
    };
}

var activeInstance = null;
var isUpdatingChildComponent = false;
function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
        activeInstance = prevActiveInstance;
    };
}
function initLifecycle(vm) {
    var options = vm.$options;
    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._provided = parent ? parent._provided : Object.create(null);
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        }
        else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
            prevEl.__vue__ = null;
        }
        if (vm.$el) {
            vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        var wrapper = vm;
        while (wrapper &&
            wrapper.$vnode &&
            wrapper.$parent &&
            wrapper.$vnode === wrapper.$parent._vnode) {
            wrapper.$parent.$el = wrapper.$el;
            wrapper = wrapper.$parent;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
    };
    Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    };
    Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
            return;
        }
        callHook$1(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove$2(parent.$children, vm);
        }
        // teardown scope. this includes both the render watcher and other
        // watchers created
        vm._scope.stop();
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook$1(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
            vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
            vm.$vnode.parent = null;
        }
    };
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
        // @ts-expect-error invalid type
        vm.$options.render = createEmptyVNode;
        if (true) {
            /* istanbul ignore if */
            if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                vm.$options.el ||
                el) {
                warn$2('You are using the runtime-only build of Vue where the template ' +
                    'compiler is not available. Either pre-compile the templates into ' +
                    'render functions, or use the compiler-included build.', vm);
            }
            else {
                warn$2('Failed to mount component: template or render function not defined.', vm);
            }
        }
    }
    callHook$1(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
        updateComponent = function () {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:".concat(id);
            var endTag = "vue-perf-end:".concat(id);
            mark(startTag);
            var vnode = vm._render();
            mark(endTag);
            measure("vue ".concat(name, " render"), startTag, endTag);
            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure("vue ".concat(name, " patch"), startTag, endTag);
        };
    }
    else {
        updateComponent = function () {
            vm._update(vm._render(), hydrating);
        };
    }
    var watcherOptions = {
        before: function () {
            if (vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, 'beforeUpdate');
            }
        }
    };
    if (true) {
        watcherOptions.onTrack = function (e) { return callHook$1(vm, 'renderTracked', [e]); };
        watcherOptions.onTrigger = function (e) { return callHook$1(vm, 'renderTriggered', [e]); };
    }
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
    hydrating = false;
    // flush buffer for flush: "pre" watchers queued in setup()
    var preWatchers = vm._preWatchers;
    if (preWatchers) {
        for (var i = 0; i < preWatchers.length; i++) {
            preWatchers[i].run();
        }
    }
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook$1(vm, 'mounted');
    }
    return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    if (true) {
        isUpdatingChildComponent = true;
    }
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
        (!newScopedSlots && vm.$scopedSlots.$key));
    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
        vm.$options._renderChildren || // has old static slots
        hasDynamicScopedSlot);
    var prevVNode = vm.$vnode;
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    var attrs = parentVnode.data.attrs || emptyObject;
    if (vm._attrsProxy) {
        // force update if attrs are accessed and has changed since it may be
        // passed to a child component.
        if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
            needsForceUpdate = true;
        }
    }
    vm.$attrs = attrs;
    // update listeners
    listeners = listeners || emptyObject;
    var prevListeners = vm.$options._parentListeners;
    if (vm._listenersProxy) {
        syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
    }
    vm.$listeners = vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, prevListeners);
    // update props
    if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props; // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
    }
    // resolve slots + force update if has children
    if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
    }
    if (true) {
        isUpdatingChildComponent = false;
    }
}
function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
        if (vm._inactive)
            return true;
    }
    return false;
}
function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    else if (vm._directInactive) {
        return;
    }
    if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'activated');
    }
}
function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'deactivated');
    }
}
function callHook$1(vm, hook, args, setContext) {
    if (setContext === void 0) { setContext = true; }
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var prev = currentInstance;
    setContext && setCurrentInstance(vm);
    var handlers = vm.$options[hook];
    var info = "".concat(hook, " hook");
    if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
    }
    setContext && setCurrentInstance(prev);
    popTarget();
}

var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index$1 = 0;
/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
    index$1 = queue.length = activatedChildren.length = 0;
    has = {};
    if (true) {
        circular = {};
    }
    waiting = flushing = false;
}
// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;
// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    var performance_1 = window.performance;
    if (performance_1 &&
        typeof performance_1.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance_1.now(); };
    }
}
var sortCompareFn = function (a, b) {
    if (a.post) {
        if (!b.post)
            return 1;
    }
    else if (b.post) {
        return -1;
    }
    return a.id - b.id;
};
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(sortCompareFn);
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index$1 = 0; index$1 < queue.length; index$1++) {
        watcher = queue[index$1];
        if (watcher.before) {
            watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ( true && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn$2('You may have an infinite update loop ' +
                    (watcher.user
                        ? "in watcher with expression \"".concat(watcher.expression, "\"")
                        : "in a component render function."), watcher.vm);
                break;
            }
        }
    }
    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState();
    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);
    cleanupDeps();
    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit('flush');
    }
}
function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook$1(vm, 'updated');
        }
    }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
}
function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
    }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] != null) {
        return;
    }
    if (watcher === Dep.target && watcher.noRecurse) {
        return;
    }
    has[id] = true;
    if (!flushing) {
        queue.push(watcher);
    }
    else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index$1 && queue[i].id > watcher.id) {
            i--;
        }
        queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
        waiting = true;
        if ( true && !config.async) {
            flushSchedulerQueue();
            return;
        }
        nextTick(flushSchedulerQueue);
    }
}

var WATCHER = "watcher";
var WATCHER_CB = "".concat(WATCHER, " callback");
var WATCHER_GETTER = "".concat(WATCHER, " getter");
var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'post' }) : 0));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'sync' }) : 0));
}
// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if ( true && typeof cb !== 'function') {
        warn$2("`watch(fn, options?)` signature has been moved to a separate API. " +
            "Use `watchEffect(fn, options?)` instead. `watch` now only " +
            "supports `watch(source, cb, options?) signature.");
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, _a) {
    var _b = _a === void 0 ? emptyObject : _a, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? 'pre' : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
    if ( true && !cb) {
        if (immediate !== undefined) {
            warn$2("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (deep !== undefined) {
            warn$2("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var warnInvalidSource = function (s) {
        warn$2("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") +
            "function, a ref, a reactive object, or an array of these types.");
    };
    var instance = currentInstance;
    var call = function (fn, type, args) {
        if (args === void 0) { args = null; }
        return invokeWithErrorHandling(fn, null, args, instance, type);
    };
    var getter;
    var forceTrigger = false;
    var isMultiSource = false;
    if (isRef(source)) {
        getter = function () { return source.value; };
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = function () {
            source.__ob__.dep.depend();
            return source;
        };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(function (s) { return isReactive(s) || isShallow(s); });
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return call(s, WATCHER_GETTER);
                }
                else {
                     true && warnInvalidSource(s);
                }
            });
        };
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = function () { return call(source, WATCHER_GETTER); };
        }
        else {
            // no cb -> simple effect
            getter = function () {
                if (instance && instance._isDestroyed) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return call(source, WATCHER, [onCleanup]);
            };
        }
    }
    else {
        getter = noop;
         true && warnInvalidSource(source);
    }
    if (cb && deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var cleanup;
    var onCleanup = function (fn) {
        cleanup = watcher.onStop = function () {
            call(fn, WATCHER_CLEANUP);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isServerRendering()) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = noop;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            call(cb, WATCHER_CB, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return noop;
    }
    var watcher = new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    watcher.noRecurse = !cb;
    var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    // overwrite default run
    watcher.run = function () {
        if (!watcher.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            var newValue = watcher.get();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some(function (v, i) {
                        return hasChanged(v, oldValue[i]);
                    })
                    : hasChanged(newValue, oldValue))) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                call(cb, WATCHER_CB, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            watcher.get();
        }
    };
    if (flush === 'sync') {
        watcher.update = watcher.run;
    }
    else if (flush === 'post') {
        watcher.post = true;
        watcher.update = function () { return queueWatcher(watcher); };
    }
    else {
        // pre
        watcher.update = function () {
            if (instance && instance === currentInstance && !instance._isMounted) {
                // pre-watcher triggered before
                var buffer = instance._preWatchers || (instance._preWatchers = []);
                if (buffer.indexOf(watcher) < 0)
                    buffer.push(watcher);
            }
            else {
                queueWatcher(watcher);
            }
        };
    }
    if (true) {
        watcher.onTrack = onTrack;
        watcher.onTrigger = onTrigger;
    }
    // initial run
    if (cb) {
        if (immediate) {
            watcher.run();
        }
        else {
            oldValue = watcher.get();
        }
    }
    else if (flush === 'post' && instance) {
        instance.$once('hook:mounted', function () { return watcher.get(); });
    }
    else {
        watcher.get();
    }
    return function () {
        watcher.teardown();
    };
}

var activeEffectScope;
var EffectScope = /** @class */ (function () {
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        this.detached = detached;
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    EffectScope.prototype.run = function (fn) {
        if (this.active) {
            var currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if (true) {
            warn$2("cannot run an inactive effect scope.");
        }
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.on = function () {
        activeEffectScope = this;
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.off = function () {
        activeEffectScope = this.parent;
    };
    EffectScope.prototype.stop = function (fromParent) {
        if (this.active) {
            var i = void 0, l = void 0;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].teardown();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                var last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this.active = false;
        }
    };
    return EffectScope;
}());
function effectScope(detached) {
    return new EffectScope(detached);
}
/**
 * @internal
 */
function recordEffectScope(effect, scope) {
    if (scope === void 0) { scope = activeEffectScope; }
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if (true) {
        warn$2("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if (true) {
            warn$2("provide() can only be used inside setup().");
        }
    }
    else {
        // TS doesn't allow symbol as index type
        resolveProvided(currentInstance)[key] = value;
    }
}
function resolveProvided(vm) {
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    var existing = vm._provided;
    var parentProvides = vm.$parent && vm.$parent._provided;
    if (parentProvides === existing) {
        return (vm._provided = Object.create(parentProvides));
    }
    else {
        return existing;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    var instance = currentInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        var provides = instance.$parent && instance.$parent._provided;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue)
                ? defaultValue.call(instance)
                : defaultValue;
        }
        else if (true) {
            warn$2("injection \"".concat(String(key), "\" not found."));
        }
    }
    else if (true) {
        warn$2("inject() can only be used inside setup() or functional components.");
    }
}

/**
 * @internal this function needs manual public type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function h(type, props, children) {
    if (!currentInstance) {
         true &&
            warn$2("globally imported h() can only be invoked when there is an active " +
                "component instance, e.g. synchronously in a component's render or setup function.");
    }
    return createElement$1(currentInstance, type, props, children, 2, true);
}

function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
        if (vm) {
            var cur = vm;
            while ((cur = cur.$parent)) {
                var hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for (var i = 0; i < hooks.length; i++) {
                        try {
                            var capture = hooks[i].call(cur, err, vm, info) === false;
                            if (capture)
                                return;
                        }
                        catch (e) {
                            globalHandleError(e, cur, 'errorCaptured hook');
                        }
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    }
    finally {
        popTarget();
    }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
            res._handled = true;
        }
    }
    catch (e) {
        handleError(e, vm, info);
    }
    return res;
}
function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
        try {
            return config.errorHandler.call(null, err, vm, info);
        }
        catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
                logError(e, null, 'config.errorHandler');
            }
        }
    }
    logError(err, vm, info);
}
function logError(err, vm, info) {
    if (true) {
        warn$2("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

/* globals MutationObserver */
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
        copies[i]();
    }
}
// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;
// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p_1 = Promise.resolve();
    timerFunc = function () {
        p_1.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS)
            setTimeout(noop);
    };
    isUsingMicroTask = true;
}
else if (!isIE &&
    typeof MutationObserver !== 'undefined' &&
    (isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter_1 = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode_1 = document.createTextNode(String(counter_1));
    observer.observe(textNode_1, {
        characterData: true
    });
    timerFunc = function () {
        counter_1 = (counter_1 + 1) % 2;
        textNode_1.data = String(counter_1);
    };
    isUsingMicroTask = true;
}
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
        setImmediate(flushCallbacks);
    };
}
else {
    // Fallback to setTimeout.
    timerFunc = function () {
        setTimeout(flushCallbacks, 0);
    };
}
/**
 * @internal
 */
function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
        if (cb) {
            try {
                cb.call(ctx);
            }
            catch (e) {
                handleError(e, ctx, 'nextTick');
            }
        }
        else if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}

function useCssModule(name) {
    if (name === void 0) { name = '$style'; }
    /* istanbul ignore else */
    {
        if (!currentInstance) {
             true && warn$2("useCssModule must be called inside setup()");
            return emptyObject;
        }
        var mod = currentInstance[name];
        if (!mod) {
             true &&
                warn$2("Current instance does not have CSS module named \"".concat(name, "\"."));
            return emptyObject;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    if (!inBrowser && !false)
        return;
    var instance = currentInstance;
    if (!instance) {
         true &&
            warn$2("useCssVars is called without current active component instance.");
        return;
    }
    watchPostEffect(function () {
        var el = instance.$el;
        var vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            var style = el.style;
            for (var key in vars) {
                style.setProperty("--".concat(key), vars[key]);
            }
        }
    });
}

/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if ( true && suspensible) {
        warn$2("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if ( true && !comp) {
                        warn$2("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if ( true && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent
        };
    };
}

function createLifeCycle(hookName) {
    return function (fn, target) {
        if (target === void 0) { target = currentInstance; }
        if (!target) {
             true &&
                warn$2("".concat(formatName(hookName), " is called when there is no active component instance to be ") +
                    "associated with. " +
                    "Lifecycle injection APIs can only be used during execution of setup().");
            return;
        }
        return injectHook(target, hookName, fn);
    };
}
function formatName(name) {
    if (name === 'beforeDestroy') {
        name = 'beforeUnmount';
    }
    else if (name === 'destroyed') {
        name = 'unmounted';
    }
    return "on".concat(name[0].toUpperCase() + name.slice(1));
}
function injectHook(instance, hookName, fn) {
    var options = instance.$options;
    options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');
var onRenderTracked = createLifeCycle('renderTracked');
var onRenderTriggered = createLifeCycle('renderTriggered');
var injectErrorCapturedHook = createLifeCycle('errorCaptured');
function onErrorCaptured(hook, target) {
    if (target === void 0) { target = currentInstance; }
    injectErrorCapturedHook(hook, target);
}

/**
 * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
 */
var version = '2.7.14';
/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */
function defineComponent(options) {
    return options;
}

var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
    return val;
}
function _traverse(val, seen) {
    var i, keys;
    var isA = isArray(val);
    if ((!isA && !isObject(val)) ||
        val.__v_skip /* ReactiveFlags.SKIP */ ||
        Object.isFrozen(val) ||
        val instanceof VNode) {
        return;
    }
    if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while (i--)
            _traverse(val[i], seen);
    }
    else if (isRef(val)) {
        _traverse(val.value, seen);
    }
    else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--)
            _traverse(val[keys[i]], seen);
    }
}

var uid$1 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 * @internal
 */
var Watcher = /** @class */ (function () {
    function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        recordEffectScope(this, 
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm
            ? activeEffectScope
            : vm
                ? vm._scope
                : undefined);
        if ((this.vm = vm) && isRenderWatcher) {
            vm._watcher = this;
        }
        // options
        if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
            if (true) {
                this.onTrack = options.onTrack;
                this.onTrigger = options.onTrigger;
            }
        }
        else {
            this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$1; // uid for batching
        this.active = true;
        this.post = false;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression =  true ? expOrFn.toString() : 0;
        // parse expression for getter
        if (isFunction(expOrFn)) {
            this.getter = expOrFn;
        }
        else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                 true &&
                    warn$2("Failed watching path: \"".concat(expOrFn, "\" ") +
                        'Watcher only accepts simple dot-delimited paths. ' +
                        'For full control, use a function instead.', vm);
            }
        }
        this.value = this.lazy ? undefined : this.get();
    }
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function () {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        }
        catch (e) {
            if (this.user) {
                handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
            }
            else {
                throw e;
            }
        }
        finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            this.cleanupDeps();
        }
        return value;
    };
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function (dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    };
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function () {
        var i = this.deps.length;
        while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    };
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function () {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true;
        }
        else if (this.sync) {
            this.run();
        }
        else {
            queueWatcher(this);
        }
    };
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function () {
        if (this.active) {
            var value = this.get();
            if (value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep) {
                // set new value
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                    var info = "callback for watcher \"".concat(this.expression, "\"");
                    invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                }
                else {
                    this.cb.call(this.vm, value, oldValue);
                }
            }
        }
    };
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function () {
        this.value = this.get();
        this.dirty = false;
    };
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function () {
        var i = this.deps.length;
        while (i--) {
            this.deps[i].depend();
        }
    };
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function () {
        if (this.vm && !this.vm._isBeingDestroyed) {
            remove$2(this.vm._scope.effects, this);
        }
        if (this.active) {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].removeSub(this);
            }
            this.active = false;
            if (this.onStop) {
                this.onStop();
            }
        }
    };
    return Watcher;
}());

var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
    var opts = vm.$options;
    if (opts.props)
        initProps$1(vm, opts.props);
    // Composition API
    initSetup(vm);
    if (opts.methods)
        initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    }
    else {
        var ob = observe((vm._data = {}));
        ob && ob.vmCount++;
    }
    if (opts.computed)
        initComputed$1(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
function initProps$1(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = (vm._props = shallowReactive({}));
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = (vm.$options._propKeys = []);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false);
    }
    var _loop_1 = function (key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (true) {
            var hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)) {
                warn$2("\"".concat(hyphenatedKey, "\" is a reserved attribute and cannot be used as component prop."), vm);
            }
            defineReactive(props, key, value, function () {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn$2("Avoid mutating a prop directly since the value will be " +
                        "overwritten whenever the parent component re-renders. " +
                        "Instead, use a data or computed property based on the prop's " +
                        "value. Prop being mutated: \"".concat(key, "\""), vm);
                }
            });
        }
        else {}
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, "_props", key);
        }
    };
    for (var key in propsOptions) {
        _loop_1(key);
    }
    toggleObserving(true);
}
function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
         true &&
            warn$2('data functions should return an object:\n' +
                'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
        var key = keys[i];
        if (true) {
            if (methods && hasOwn(methods, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a data property."), vm);
            }
        }
        if (props && hasOwn(props, key)) {
             true &&
                warn$2("The data property \"".concat(key, "\" is already declared as a prop. ") +
                    "Use prop default value instead.", vm);
        }
        else if (!isReserved(key)) {
            proxy(vm, "_data", key);
        }
    }
    // observe data
    var ob = observe(data);
    ob && ob.vmCount++;
}
function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
        return data.call(vm, vm);
    }
    catch (e) {
        handleError(e, vm, "data()");
        return {};
    }
    finally {
        popTarget();
    }
}
var computedWatcherOptions = { lazy: true };
function initComputed$1(vm, computed) {
    // $flow-disable-line
    var watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();
    for (var key in computed) {
        var userDef = computed[key];
        var getter = isFunction(userDef) ? userDef : userDef.get;
        if ( true && getter == null) {
            warn$2("Getter is missing for computed property \"".concat(key, "\"."), vm);
        }
        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        }
        else if (true) {
            if (key in vm.$data) {
                warn$2("The computed property \"".concat(key, "\" is already defined in data."), vm);
            }
            else if (vm.$options.props && key in vm.$options.props) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a prop."), vm);
            }
            else if (vm.$options.methods && key in vm.$options.methods) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a method."), vm);
            }
        }
    }
}
function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (isFunction(userDef)) {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    }
    else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if ( true && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
            warn$2("Computed property \"".concat(key, "\" was assigned to but it has no setter."), this);
        };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
    return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                if ( true && Dep.target.onTrack) {
                    Dep.target.onTrack({
                        effect: Dep.target,
                        target: this,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
        if (true) {
            if (typeof methods[key] !== 'function') {
                warn$2("Method \"".concat(key, "\" has type \"").concat(typeof methods[key], "\" in the component definition. ") +
                    "Did you reference the function correctly?", vm);
            }
            if (props && hasOwn(props, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a prop."), vm);
            }
            if (key in vm && isReserved(key)) {
                warn$2("Method \"".concat(key, "\" conflicts with an existing Vue instance method. ") +
                    "Avoid defining component methods that start with _ or $.");
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind$1(methods[key], vm);
    }
}
function initWatch(vm, watch) {
    for (var key in watch) {
        var handler = watch[key];
        if (isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        }
        else {
            createWatcher(vm, key, handler);
        }
    }
}
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === 'string') {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
        return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
        return this._props;
    };
    if (true) {
        dataDef.set = function () {
            warn$2('Avoid replacing instance root $data. ' +
                'Use nested data properties instead.', this);
        };
        propsDef.set = function () {
            warn$2("$props is readonly.", this);
        };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
            pushTarget();
            invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
            popTarget();
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}

function initProvide(vm) {
    var provideOption = vm.$options.provide;
    if (provideOption) {
        var provided = isFunction(provideOption)
            ? provideOption.call(vm)
            : provideOption;
        if (!isObject(provided)) {
            return;
        }
        var source = resolveProvided(vm);
        // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
        // iterate the keys ourselves.
        var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
        }
    }
}
function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            if (true) {
                defineReactive(vm, key, result[key], function () {
                    warn$2("Avoid mutating an injected value directly since the changes will be " +
                        "overwritten whenever the provided component re-renders. " +
                        "injection being mutated: \"".concat(key, "\""), vm);
                });
            }
            else {}
        });
        toggleObserving(true);
    }
}
function resolveInject(inject, vm) {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === '__ob__')
                continue;
            var provideKey = inject[key].from;
            if (provideKey in vm._provided) {
                result[key] = vm._provided[provideKey];
            }
            else if ('default' in inject[key]) {
                var provideDefault = inject[key].default;
                result[key] = isFunction(provideDefault)
                    ? provideDefault.call(vm)
                    : provideDefault;
            }
            else if (true) {
                warn$2("Injection \"".concat(key, "\" not found"), vm);
            }
        }
        return result;
    }
}

var uid = 0;
function initMixin$1(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        var startTag, endTag;
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            startTag = "vue-perf-start:".concat(vm._uid);
            endTag = "vue-perf-end:".concat(vm._uid);
            mark(startTag);
        }
        // a flag to mark this as a Vue instance without having to do instanceof
        // check
        vm._isVue = true;
        // avoid instances from being observed
        vm.__v_skip = true;
        // effect scope
        vm._scope = new EffectScope(true /* detached */);
        vm._scope._vm = true;
        // merge options
        if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options);
        }
        else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        /* istanbul ignore else */
        if (true) {
            initProxy(vm);
        }
        else {}
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook$1(vm, 'created');
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue ".concat(vm._name, " init"), startTag, endTag);
        }
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
function initInternalComponent(vm, options) {
    var opts = (vm.$options = Object.create(vm.constructor.options));
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;
    if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
    }
}
function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions;
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor);
            // update base extend options
            if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) {
                options.components[options.name] = Ctor;
            }
        }
    }
    return options;
}
function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
        if (latest[key] !== sealed[key]) {
            if (!modified)
                modified = {};
            modified[key] = latest[key];
        }
    }
    return modified;
}

function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var _this = this;
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
    }
    else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // @ts-ignore
        parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
        if (!_this.$slots) {
            normalizeScopedSlots(parent, data.scopedSlots, (_this.$slots = resolveSlots(children, parent)));
        }
        return _this.$slots;
    };
    Object.defineProperty(this, 'scopedSlots', {
        enumerable: true,
        get: function () {
            return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
        }
    });
    // support for compiled functional template
    if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
    }
    if (options._scopeId) {
        this._c = function (a, b, c, d) {
            var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
            if (vnode && !isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
            }
            return vnode;
        };
    }
    else {
        this._c = function (a, b, c, d) {
            return createElement$1(contextVm, a, b, c, d, needNormalization);
        };
    }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
        for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
    }
    else {
        if (isDef(data.attrs))
            mergeProps(props, data.attrs);
        if (isDef(data.props))
            mergeProps(props, data.props);
    }
    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);
    if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    }
    else if (isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res;
    }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (true) {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
            renderContext;
    }
    if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
}
function mergeProps(to, from) {
    for (var key in from) {
        to[camelize(key)] = from[key];
    }
}

function getComponentName(options) {
    return options.name || options.__name || options._componentTag;
}
// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
    init: function (vnode, hydrating) {
        if (vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode; // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        }
        else {
            var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    },
    prepatch: function (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = (vnode.componentInstance = oldVnode.componentInstance);
        updateChildComponent(child, options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
    },
    insert: function (vnode) {
        var context = vnode.context, componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook$1(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance);
            }
            else {
                activateChildComponent(componentInstance, true /* direct */);
            }
        }
    },
    destroy: function (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
            }
            else {
                deactivateChildComponent(componentInstance, true /* direct */);
            }
        }
    }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
        return;
    }
    var baseCtor = context.$options._base;
    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
    }
    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
        if (true) {
            warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
        }
        return;
    }
    // async component
    var asyncFactory;
    // @ts-expect-error
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
    }
    data = data || {};
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    // transform component v-model data into props & events
    if (isDef(data.model)) {
        // @ts-expect-error
        transformModel(Ctor.options, data);
    }
    // extract props
    // @ts-expect-error
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);
    // functional component
    // @ts-expect-error
    if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
    }
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;
    // @ts-expect-error
    if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
            data.slot = slot;
        }
    }
    // install component management hooks onto the placeholder node
    installComponentHooks(data);
    // return a placeholder vnode
    // @ts-expect-error
    var name = getComponentName(Ctor.options) || tag;
    var vnode = new VNode(
    // @ts-expect-error
    "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, 
    // @ts-expect-error
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
}
function createComponentInstanceForVnode(
// we know it's MountedComponentVNode but flow doesn't
vnode, 
// activeInstance in lifecycle state
parent) {
    var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        // @ts-expect-error
        if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
        }
    }
}
function mergeHook(f1, f2) {
    var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
    };
    merged._merged = true;
    return merged;
}
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
        if (isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback) {
            on[event] = [callback].concat(existing);
        }
    }
    else {
        on[event] = callback;
    }
}

var warn$2 = noop;
var tip = noop;
var generateComponentTrace; // work around flow check
var formatComponentName;
if (true) {
    var hasConsole_1 = typeof console !== 'undefined';
    var classifyRE_1 = /(?:^|[-_])(\w)/g;
    var classify_1 = function (str) {
        return str.replace(classifyRE_1, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, '');
    };
    warn$2 = function (msg, vm) {
        if (vm === void 0) { vm = currentInstance; }
        var trace = vm ? generateComponentTrace(vm) : '';
        if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
        }
        else if (hasConsole_1 && !config.silent) {
            console.error("[Vue warn]: ".concat(msg).concat(trace));
        }
    };
    tip = function (msg, vm) {
        if (hasConsole_1 && !config.silent) {
            console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
        }
    };
    formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
            return '<Root>';
        }
        var options = isFunction(vm) && vm.cid != null
            ? vm.options
            : vm._isVue
                ? vm.$options || vm.constructor.options
                : vm;
        var name = getComponentName(options);
        var file = options.__file;
        if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
        }
        return ((name ? "<".concat(classify_1(name), ">") : "<Anonymous>") +
            (file && includeFile !== false ? " at ".concat(file) : ''));
    };
    var repeat_1 = function (str, n) {
        var res = '';
        while (n) {
            if (n % 2 === 1)
                res += str;
            if (n > 1)
                str += str;
            n >>= 1;
        }
        return res;
    };
    generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;
            while (vm) {
                if (tree.length > 0) {
                    var last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                        currentRecursiveSequence++;
                        vm = vm.$parent;
                        continue;
                    }
                    else if (currentRecursiveSequence > 0) {
                        tree[tree.length - 1] = [last, currentRecursiveSequence];
                        currentRecursiveSequence = 0;
                    }
                }
                tree.push(vm);
                vm = vm.$parent;
            }
            return ('\n\nfound in\n\n' +
                tree
                    .map(function (vm, i) {
                    return "".concat(i === 0 ? '---> ' : repeat_1(' ', 5 + i * 2)).concat(isArray(vm)
                        ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)")
                        : formatComponentName(vm));
                })
                    .join('\n'));
        }
        else {
            return "\n\n(found in ".concat(formatComponentName(vm), ")");
        }
    };
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */
if (true) {
    strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
            warn$2("option \"".concat(key, "\" can only be used during instance ") +
                'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
    };
}
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from, recursive) {
    if (recursive === void 0) { recursive = true; }
    if (!from)
        return to;
    var key, toVal, fromVal;
    var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!recursive || !hasOwn(to, key)) {
            set(to, key, fromVal);
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
            return parentVal;
        }
        if (!parentVal) {
            return childVal;
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
            return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
        };
    }
    else {
        return function mergedInstanceDataFn() {
            // instance merge
            var instanceData = isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal;
            var defaultData = isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal;
            if (instanceData) {
                return mergeData(instanceData, defaultData);
            }
            else {
                return defaultData;
            }
        };
    }
}
strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
        if (childVal && typeof childVal !== 'function') {
             true &&
                warn$2('The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.', vm);
            return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
    }
    return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */
function mergeLifecycleHook(parentVal, childVal) {
    var res = childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
    return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
        }
    }
    return res;
}
LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeLifecycleHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
         true && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
    }
    else {
        return res;
    }
}
ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    //@ts-expect-error work around
    if (parentVal === nativeWatch)
        parentVal = undefined;
    //@ts-expect-error work around
    if (childVal === nativeWatch)
        childVal = undefined;
    /* istanbul ignore if */
    if (!childVal)
        return Object.create(parentVal || null);
    if (true) {
        assertObjectType(key, childVal, vm);
    }
    if (!parentVal)
        return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key_1 in childVal) {
        var parent_1 = ret[key_1];
        var child = childVal[key_1];
        if (parent_1 && !isArray(parent_1)) {
            parent_1 = [parent_1];
        }
        ret[key_1] = parent_1 ? parent_1.concat(child) : isArray(child) ? child : [child];
    }
    return ret;
};
/**
 * Other object hashes.
 */
strats.props =
    strats.methods =
        strats.inject =
            strats.computed =
                function (parentVal, childVal, vm, key) {
                    if (childVal && "development" !== 'production') {
                        assertObjectType(key, childVal, vm);
                    }
                    if (!parentVal)
                        return childVal;
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    if (childVal)
                        extend(ret, childVal);
                    return ret;
                };
strats.provide = function (parentVal, childVal) {
    if (!parentVal)
        return childVal;
    return function () {
        var ret = Object.create(null);
        mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
        if (childVal) {
            mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
            );
        }
        return ret;
    };
};
/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */
function checkComponents(options) {
    for (var key in options.components) {
        validateComponentName(key);
    }
}
function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
        warn$2('Invalid component name: "' +
            name +
            '". Component names ' +
            'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn$2('Do not use built-in or reserved HTML elements as component ' +
            'id: ' +
            name);
    }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
    var props = options.props;
    if (!props)
        return;
    var res = {};
    var i, val, name;
    if (isArray(props)) {
        i = props.length;
        while (i--) {
            val = props[i];
            if (typeof val === 'string') {
                name = camelize(val);
                res[name] = { type: null };
            }
            else if (true) {
                warn$2('props must be strings when using array syntax.');
            }
        }
    }
    else if (isPlainObject(props)) {
        for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : { type: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"props\": expected an Array or an Object, " +
            "but got ".concat(toRawType(props), "."), vm);
    }
    options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject)
        return;
    var normalized = (options.inject = {});
    if (isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = { from: inject[i] };
        }
    }
    else if (isPlainObject(inject)) {
        for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val)
                ? extend({ from: key }, val)
                : { from: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"inject\": expected an Array or an Object, " +
            "but got ".concat(toRawType(inject), "."), vm);
    }
}
/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives$1(options) {
    var dirs = options.directives;
    if (dirs) {
        for (var key in dirs) {
            var def = dirs[key];
            if (isFunction(def)) {
                dirs[key] = { bind: def, update: def };
            }
        }
    }
}
function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
        warn$2("Invalid value for option \"".concat(name, "\": expected an Object, ") +
            "but got ".concat(toRawType(value), "."), vm);
    }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
    if (true) {
        checkComponents(child);
    }
    if (isFunction(child)) {
        // @ts-expect-error
        child = child.options;
    }
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }
    }
    var options = {};
    var key;
    for (key in parent) {
        mergeField(key);
    }
    for (key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
        return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id))
        return assets[id];
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId))
        return assets[camelizedId];
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId))
        return assets[PascalCaseId];
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ( true && warnMissing && !res) {
        warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
    }
    return res;
}

function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false;
        }
        else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
            }
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    if (true) {
        assertProp(prop, key, value, vm, absent);
    }
    return value;
}
/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
        return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ( true && isObject(def)) {
        warn$2('Invalid default value for prop "' +
            key +
            '": ' +
            'Props with type Object/Array must use a factory function ' +
            'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm &&
        vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined) {
        return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return isFunction(def) && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def;
}
/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
        warn$2('Missing required prop: "' + name + '"', vm);
        return;
    }
    if (value == null && !prop.required) {
        return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
        if (!isArray(type)) {
            type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i], vm);
            expectedTypes.push(assertedType.expectedType || '');
            valid = assertedType.valid;
        }
    }
    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
        warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
    }
    var validator = prop.validator;
    if (validator) {
        if (!validator(value)) {
            warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
    }
}
var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function assertType(value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else {
        try {
            valid = value instanceof type;
        }
        catch (e) {
            warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
            valid = false;
        }
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}
var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (!isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
            return i;
        }
    }
    return -1;
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") +
        " Expected ".concat(expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        isExplicable(typeof value) &&
        !isBoolean(expectedType, receivedType)) {
        message += " with value ".concat(styleValue(value, expectedType));
    }
    message += ", got ".concat(receivedType, " ");
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += "with value ".concat(styleValue(value, receivedType), ".");
    }
    return message;
}
function styleValue(value, type) {
    if (type === 'String') {
        return "\"".concat(value, "\"");
    }
    else if (type === 'Number') {
        return "".concat(Number(value));
    }
    else {
        return "".concat(value);
    }
}
var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable(value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; });
}
function isBoolean() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; });
}

function Vue(options) {
    if ( true && !(this instanceof Vue)) {
        warn$2('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}
//@ts-expect-error Vue has function type
initMixin$1(Vue);
//@ts-expect-error Vue has function type
stateMixin(Vue);
//@ts-expect-error Vue has function type
eventsMixin(Vue);
//@ts-expect-error Vue has function type
lifecycleMixin(Vue);
//@ts-expect-error Vue has function type
renderMixin(Vue);

function initUse(Vue) {
    Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
            return this;
        }
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (isFunction(plugin.install)) {
            plugin.install.apply(plugin, args);
        }
        else if (isFunction(plugin)) {
            plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
    };
}

function initMixin(Vue) {
    Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    };
}

function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
        }
        var name = getComponentName(extendOptions) || getComponentName(Super.options);
        if ( true && name) {
            validateComponentName(name);
        }
        var Sub = function VueComponent(options) {
            this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
            initProps(Sub);
        }
        if (Sub.options.computed) {
            initComputed(Sub);
        }
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
            Sub.options.components[name] = Sub;
        }
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub;
    };
}
function initProps(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
        proxy(Comp.prototype, "_props", key);
    }
}
function initComputed(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
    }
}

function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
        // @ts-expect-error function is not exact same type
        Vue[type] = function (id, definition) {
            if (!definition) {
                return this.options[type + 's'][id];
            }
            else {
                /* istanbul ignore if */
                if ( true && type === 'component') {
                    validateComponentName(id);
                }
                if (type === 'component' && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === 'directive' && isFunction(definition)) {
                    definition = { bind: definition, update: definition };
                }
                this.options[type + 's'][id] = definition;
                return definition;
            }
        };
    });
}

function _getComponentName(opts) {
    return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
    if (isArray(pattern)) {
        return pattern.indexOf(name) > -1;
    }
    else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (isRegExp(pattern)) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
        var entry = cache[key];
        if (entry) {
            var name_1 = entry.name;
            if (name_1 && !filter(name_1)) {
                pruneCacheEntry(cache, key, keys, _vnode);
            }
        }
    }
}
function pruneCacheEntry(cache, key, keys, current) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
        // @ts-expect-error can be undefined
        entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove$2(keys, key);
}
var patternTypes = [String, RegExp, Array];
// TODO defineComponent
var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
    },
    methods: {
        cacheVNode: function () {
            var _a = this, cache = _a.cache, keys = _a.keys, vnodeToCache = _a.vnodeToCache, keyToCache = _a.keyToCache;
            if (vnodeToCache) {
                var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                    name: _getComponentName(componentOptions),
                    tag: tag,
                    componentInstance: componentInstance
                };
                keys.push(keyToCache);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
            }
        }
    },
    created: function () {
        this.cache = Object.create(null);
        this.keys = [];
    },
    destroyed: function () {
        for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
        }
    },
    mounted: function () {
        var _this = this;
        this.cacheVNode();
        this.$watch('include', function (val) {
            pruneCache(_this, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
            pruneCache(_this, function (name) { return !matches(val, name); });
        });
    },
    updated: function () {
        this.cacheVNode();
    },
    render: function () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            var name_2 = _getComponentName(componentOptions);
            var _a = this, include = _a.include, exclude = _a.exclude;
            if (
            // not included
            (include && (!name_2 || !matches(include, name_2))) ||
                // excluded
                (exclude && name_2 && matches(exclude, name_2))) {
                return vnode;
            }
            var _b = this, cache = _b.cache, keys = _b.keys;
            var key = vnode.key == null
                ? // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                        (componentOptions.tag ? "::".concat(componentOptions.tag) : '')
                : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove$2(keys, key);
                keys.push(key);
            }
            else {
                // delay setting the cache until update
                this.vnodeToCache = vnode;
                this.keyToCache = key;
            }
            // @ts-expect-error can vnode.data can be undefined
            vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0]);
    }
};

var builtInComponents = {
    KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    if (true) {
        configDef.set = function () {
            warn$2('Do not replace the Vue.config object, set individual fields instead.');
        };
    }
    Object.defineProperty(Vue, 'config', configDef);
    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
        warn: warn$2,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    // 2.6 explicit observable API
    Vue.observable = function (obj) {
        observe(obj);
        return obj;
    };
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
    });
    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext;
    }
});
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
});
Vue.version = version;

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');
// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
    return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video'));
};
var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        : // allow arbitrary string value for contenteditable
            key === 'contenteditable' && isValidContentEditableValue(value)
                ? value
                : 'true';
};
var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';
var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};
var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
};
var isFalsyAttrValue = function (val) {
    return val == null || val === false;
};

function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
        }
    }
    // @ts-expect-error parentNode.parent not VNodeWithData
    while (isDef((parentNode = parentNode.parent))) {
        if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
        }
    }
    return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
}
function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
}
function concat(a, b) {
    return a ? (b ? a + ' ' + b : a) : b || '';
}
function stringifyClass(value) {
    if (Array.isArray(value)) {
        return stringifyArray(value);
    }
    if (isObject(value)) {
        return stringifyObject(value);
    }
    if (typeof value === 'string') {
        return value;
    }
    /* istanbul ignore next */
    return '';
}
function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
        if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
            if (res)
                res += ' ';
            res += stringified;
        }
    }
    return res;
}
function stringifyObject(value) {
    var res = '';
    for (var key in value) {
        if (value[key]) {
            if (res)
                res += ' ';
            res += key;
        }
    }
    return res;
}

var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot');
// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isPreTag = function (tag) { return tag === 'pre'; };
var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
    if (isSVG(tag)) {
        return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
        return 'math';
    }
}
var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
        return true;
    }
    if (isReservedTag(tag)) {
        return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] =
            el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement);
    }
    else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
    }
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
             true && warn$2('Cannot find element: ' + el);
            return document.createElement('div');
        }
        return selected;
    }
    else {
        return el;
    }
}

function createElement(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
        return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data &&
        vnode.data.attrs &&
        vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
    }
    return elm;
}
function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

var ref = {
    create: function (_, vnode) {
        registerRef(vnode);
    },
    update: function (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
        }
    },
    destroy: function (vnode) {
        registerRef(vnode, true);
    }
};
function registerRef(vnode, isRemoval) {
    var ref = vnode.data.ref;
    if (!isDef(ref))
        return;
    var vm = vnode.context;
    var refValue = vnode.componentInstance || vnode.elm;
    var value = isRemoval ? null : refValue;
    var $refsValue = isRemoval ? undefined : refValue;
    if (isFunction(ref)) {
        invokeWithErrorHandling(ref, vm, [value], vm, "template ref function");
        return;
    }
    var isFor = vnode.data.refInFor;
    var _isString = typeof ref === 'string' || typeof ref === 'number';
    var _isRef = isRef(ref);
    var refs = vm.$refs;
    if (_isString || _isRef) {
        if (isFor) {
            var existing = _isString ? refs[ref] : ref.value;
            if (isRemoval) {
                isArray(existing) && remove$2(existing, refValue);
            }
            else {
                if (!isArray(existing)) {
                    if (_isString) {
                        refs[ref] = [refValue];
                        setSetupRef(vm, ref, refs[ref]);
                    }
                    else {
                        ref.value = [refValue];
                    }
                }
                else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                }
            }
        }
        else if (_isString) {
            if (isRemoval && refs[ref] !== refValue) {
                return;
            }
            refs[ref] = $refsValue;
            setSetupRef(vm, ref, value);
        }
        else if (_isRef) {
            if (isRemoval && ref.value !== refValue) {
                return;
            }
            ref.value = value;
        }
        else if (true) {
            warn$2("Invalid template ref type: ".concat(typeof ref));
        }
    }
}
function setSetupRef(_a, key, val) {
    var _setupState = _a._setupState;
    if (_setupState && hasOwn(_setupState, key)) {
        if (isRef(_setupState[key])) {
            _setupState[key].value = val;
        }
        else {
            _setupState[key] = val;
        }
    }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
function sameVnode(a, b) {
    return (a.key === b.key &&
        a.asyncFactory === b.asyncFactory &&
        ((a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)) ||
            (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
}
function sameInputType(a, b) {
    if (a.tag !== 'input')
        return true;
    var i;
    var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key))
            map[key] = i;
    }
    return map;
}
function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules, nodeOps = backend.nodeOps;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
        }
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        function remove() {
            if (--remove.listeners === 0) {
                removeNode(childElm);
            }
        }
        remove.listeners = listeners;
        return remove;
    }
    function removeNode(el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
        }
    }
    function isUnknownElement(vnode, inVPre) {
        return (!inVPre &&
            !vnode.ns &&
            !(config.ignoredElements.length &&
                config.ignoredElements.some(function (ignore) {
                    return isRegExp(ignore)
                        ? ignore.test(vnode.tag)
                        : ignore === vnode.tag;
                })) &&
            config.isUnknownElement(vnode.tag));
    }
    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
            if (true) {
                if (data && data.pre) {
                    creatingElmInVPre++;
                }
                if (isUnknownElement(vnode, creatingElmInVPre)) {
                    warn$2('Unknown custom element: <' +
                        tag +
                        '> - did you ' +
                        'register the component correctly? For recursive components, ' +
                        'make sure to provide the "name" option.', vnode.context);
                }
            }
            vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
            if ( true && data && data.pre) {
                creatingElmInVPre--;
            }
        }
        else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
        else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
    }
    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(vnode, false /* hydrating */);
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
            }
        }
    }
    function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
        }
        else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode);
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode);
        }
    }
    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;
            if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                    cbs.activate[i](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
            }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
    }
    function insert(parent, elm, ref) {
        if (isDef(parent)) {
            if (isDef(ref)) {
                if (nodeOps.parentNode(ref) === parent) {
                    nodeOps.insertBefore(parent, elm, ref);
                }
            }
            else {
                nodeOps.appendChild(parent, elm);
            }
        }
    }
    function createChildren(vnode, children, insertedVnodeQueue) {
        if (isArray(children)) {
            if (true) {
                checkDuplicateKeys(children);
            }
            for (var i_1 = 0; i_1 < children.length; ++i_1) {
                createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
            }
        }
        else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
    }
    function isPatchable(vnode) {
        while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
    }
    function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
            cbs.create[i_2](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
            if (isDef(i.create))
                i.create(emptyNode, vnode);
            if (isDef(i.insert))
                insertedVnodeQueue.push(vnode);
        }
    }
    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
        var i;
        if (isDef((i = vnode.fnScopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
        else {
            var ancestor = vnode;
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef((i = activeInstance)) &&
            i !== vnode.context &&
            i !== vnode.fnContext &&
            isDef((i = i.$options._scopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
    }
    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
        }
        if (isDef((i = vnode.children))) {
            for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j]);
            }
        }
    }
    function removeVnodes(vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                }
                else {
                    // Text node
                    removeNode(ch.elm);
                }
            }
        }
    }
    function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
            var i_3;
            var listeners = cbs.remove.length + 1;
            if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners;
            }
            else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners);
            }
            // recursively invoke hooks on child component root node
            if (isDef((i_3 = vnode.componentInstance)) &&
                isDef((i_3 = i_3._vnode)) &&
                isDef(i_3.data)) {
                removeAndInvokeRemoveHook(i_3, rm);
            }
            for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                cbs.remove[i_3](vnode, rm);
            }
            if (isDef((i_3 = vnode.data.hook)) && isDef((i_3 = i_3.remove))) {
                i_3(vnode, rm);
            }
            else {
                rm();
            }
        }
        else {
            removeNode(vnode.elm);
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
        if (true) {
            checkDuplicateKeys(newCh);
        }
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (isUndef(oldKeyToIdx))
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key)
                    ? oldKeyToIdx[newStartVnode.key]
                    : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                    // New element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
                else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                        oldCh[idxInOld] = undefined;
                        canMove &&
                            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    }
                    else {
                        // same key but different element. treat as new element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function checkDuplicateKeys(children) {
        var seenKeys = {};
        for (var i_4 = 0; i_4 < children.length; i_4++) {
            var vnode = children[i_4];
            var key = vnode.key;
            if (isDef(key)) {
                if (seenKeys[key]) {
                    warn$2("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                }
                else {
                    seenKeys[key] = true;
                }
            }
        }
    }
    function findIdxInOld(node, oldCh, start, end) {
        for (var i_5 = start; i_5 < end; i_5++) {
            var c = oldCh[i_5];
            if (isDef(c) && sameVnode(node, c))
                return i_5;
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
        if (oldVnode === vnode) {
            return;
        }
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        var elm = (vnode.elm = oldVnode.elm);
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            }
            else {
                vnode.isAsyncPlaceholder = true;
            }
            return;
        }
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
            isTrue(oldVnode.isStatic) &&
            vnode.key === oldVnode.key &&
            (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
        }
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
            i(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            if (isDef((i = data.hook)) && isDef((i = i.update)))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
            else if (isDef(ch)) {
                if (true) {
                    checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text))
                    nodeOps.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                i(oldVnode, vnode);
        }
    }
    function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
        }
        else {
            for (var i_6 = 0; i_6 < queue.length; ++i_6) {
                queue[i_6].data.hook.insert(queue[i_6]);
            }
        }
    }
    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag, data = vnode.data, children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
        }
        // assert node match
        if (true) {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
            }
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.init)))
                i(vnode, true /* hydrating */);
            if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
            }
        }
        if (isDef(tag)) {
            if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                    createChildren(vnode, children, insertedVnodeQueue);
                }
                else {
                    // v-html and domProps: innerHTML
                    if (isDef((i = data)) &&
                        isDef((i = i.domProps)) &&
                        isDef((i = i.innerHTML))) {
                        if (i !== elm.innerHTML) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('server innerHTML: ', i);
                                console.warn('client innerHTML: ', elm.innerHTML);
                            }
                            return false;
                        }
                    }
                    else {
                        // iterate and compare children lists
                        var childrenMatch = true;
                        var childNode = elm.firstChild;
                        for (var i_7 = 0; i_7 < children.length; i_7++) {
                            if (!childNode ||
                                !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                                childrenMatch = false;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                            }
                            return false;
                        }
                    }
                }
            }
            if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                    if (!isRenderedModule(key)) {
                        fullInvoke = true;
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        break;
                    }
                }
                if (!fullInvoke && data['class']) {
                    // ensure collecting deps for deep class bindings for future updates
                    traverse(data['class']);
                }
            }
        }
        else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
        }
        return true;
    }
    function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
            return (vnode.tag.indexOf('vue-component') === 0 ||
                (!isUnknownElement(vnode, inVPre) &&
                    vnode.tag.toLowerCase() ===
                        (node.tagName && node.tagName.toLowerCase())));
        }
        else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
        }
    }
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
            if (isDef(oldVnode))
                invokeDestroyHook(oldVnode);
            return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
        }
        else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            }
            else {
                if (isRealElement) {
                    // mounting to a real element
                    // check if this is server-rendered content and if we can perform
                    // a successful hydration.
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                        oldVnode.removeAttribute(SSR_ATTR);
                        hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                            invokeInsertHook(vnode, insertedVnodeQueue, true);
                            return oldVnode;
                        }
                        else if (true) {
                            warn$2('The client-side rendered virtual DOM tree is not matching ' +
                                'server-rendered content. This is likely caused by incorrect ' +
                                'HTML markup, for example nesting block-level elements inside ' +
                                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                'full client-side render.');
                        }
                    }
                    // either not server-rendered, or hydration failed.
                    // create an empty node and replace it
                    oldVnode = emptyNodeAt(oldVnode);
                }
                // replacing existing element
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps.parentNode(oldElm);
                // create new node
                createElm(vnode, insertedVnodeQueue, 
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                    var ancestor = vnode.parent;
                    var patchable = isPatchable(vnode);
                    while (ancestor) {
                        for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                            cbs.destroy[i_8](ancestor);
                        }
                        ancestor.elm = vnode.elm;
                        if (patchable) {
                            for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                                cbs.create[i_9](emptyNode, ancestor);
                            }
                            // #6513
                            // invoke insert hooks that may have been merged by create hooks.
                            // e.g. for directives that uses the "inserted" hook.
                            var insert_1 = ancestor.data.hook.insert;
                            if (insert_1.merged) {
                                // start at index 1 to avoid re-invoking component mounted hook
                                for (var i_10 = 1; i_10 < insert_1.fns.length; i_10++) {
                                    insert_1.fns[i_10]();
                                }
                            }
                        }
                        else {
                            registerRef(ancestor);
                        }
                        ancestor = ancestor.parent;
                    }
                }
                // destroy old node
                if (isDef(parentElm)) {
                    removeVnodes([oldVnode], 0, 0);
                }
                else if (isDef(oldVnode.tag)) {
                    invokeDestroyHook(oldVnode);
                }
            }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
    };
}

var directives$1 = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
        // @ts-expect-error emptyNode is not VNodeWithData
        updateDirectives(vnode, emptyNode);
    }
};
function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
    }
}
function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;
    for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
            }
        }
        else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, 'update', vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
            }
        }
    }
    if (dirsWithInsert.length) {
        var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
        };
        if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
        }
        else {
            callInsert();
        }
    }
    if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
            }
        });
    }
    if (!isCreate) {
        for (key in oldDirs) {
            if (!newDirs[key]) {
                // no longer present, unbind
                callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
            }
        }
    }
}
var emptyModifiers = Object.create(null);
function normalizeDirectives(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
        // $flow-disable-line
        return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        if (vm._setupState && vm._setupState.__sfc) {
            var setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
            if (typeof setupDef === 'function') {
                dir.def = {
                    bind: setupDef,
                    update: setupDef,
                };
            }
            else {
                dir.def = setupDef;
            }
        }
        dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
}
function getRawDirName(dir) {
    return (dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join('.')));
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
        try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        }
        catch (e) {
            handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
        }
    }
}

var baseModules = [ref, directives$1];

function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
        attrs = vnode.data.attrs = extend({}, attrs);
    }
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            setAttr(elm, key, cur, vnode.data.pre);
        }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
            if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            }
            else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
            }
        }
    }
}
function setAttr(el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
    }
    else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
        }
        else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
            el.setAttribute(key, value);
        }
    }
    else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
    }
    else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        baseSetAttr(el, key, value);
    }
}
function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
    }
    else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE &&
            !isIE9 &&
            el.tagName === 'TEXTAREA' &&
            key === 'placeholder' &&
            value !== '' &&
            !el.__ieph) {
            var blocker_1 = function (e) {
                e.stopImmediatePropagation();
                el.removeEventListener('input', blocker_1);
            };
            el.addEventListener('input', blocker_1);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
    }
}
var attrs = {
    create: updateAttrs,
    update: updateAttrs
};

function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) &&
        isUndef(data.class) &&
        (isUndef(oldData) ||
            (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
        return;
    }
    var cls = genClassForVnode(vnode);
    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
    }
    // set the class
    if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
    }
}
var klass$1 = {
    create: updateClass,
    update: updateClass
};

var validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;
    for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5c)
                inSingle = false;
        }
        else if (inDouble) {
            if (c === 0x22 && prev !== 0x5c)
                inDouble = false;
        }
        else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5c)
                inTemplateString = false;
        }
        else if (inRegex) {
            if (c === 0x2f && prev !== 0x5c)
                inRegex = false;
        }
        else if (c === 0x7c && // pipe
            exp.charCodeAt(i + 1) !== 0x7c &&
            exp.charCodeAt(i - 1) !== 0x7c &&
            !curly &&
            !square &&
            !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            }
            else {
                pushFilter();
            }
        }
        else {
            switch (c) {
                case 0x22:
                    inDouble = true;
                    break; // "
                case 0x27:
                    inSingle = true;
                    break; // '
                case 0x60:
                    inTemplateString = true;
                    break; // `
                case 0x28:
                    paren++;
                    break; // (
                case 0x29:
                    paren--;
                    break; // )
                case 0x5b:
                    square++;
                    break; // [
                case 0x5d:
                    square--;
                    break; // ]
                case 0x7b:
                    curly++;
                    break; // {
                case 0x7d:
                    curly--;
                    break; // }
            }
            if (c === 0x2f) {
                // /
                var j = i - 1;
                var p 
                // find first non-whitespace prev char
                = void 0;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                    p = exp.charAt(j);
                    if (p !== ' ')
                        break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                    inRegex = true;
                }
            }
        }
    }
    if (expression === undefined) {
        expression = exp.slice(0, i).trim();
    }
    else if (lastFilterIndex !== 0) {
        pushFilter();
    }
    function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }
    if (filters) {
        for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i]);
        }
    }
    return expression;
}
function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
        // _f: resolveFilter
        return "_f(\"".concat(filter, "\")(").concat(exp, ")");
    }
    else {
        var name_1 = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return "_f(\"".concat(name_1, "\")(").concat(exp).concat(args !== ')' ? ',' + args : args);
    }
}

/* eslint-disable no-unused-vars */
function baseWarn(msg, range) {
    console.error("[Vue compiler]: ".concat(msg));
}
/* eslint-enable no-unused-vars */
function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; }) : [];
}
function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic
        ? el.dynamicAttrs || (el.dynamicAttrs = [])
        : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}
function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
        name: name,
        rawName: rawName,
        value: value,
        arg: arg,
        isDynamicArg: isDynamicArg,
        modifiers: modifiers
    }, range));
    el.plain = false;
}
function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(".concat(name, ",\"").concat(symbol, "\")") : symbol + name; // mark the event as captured
}
function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ( true && warn && modifiers.prevent && modifiers.passive) {
        warn("passive and prevent can't be used together. " +
            "Passive handler can't prevent default event.", range);
    }
    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'contextmenu';
            delete modifiers.right;
        }
    }
    else if (modifiers.middle) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'mouseup';
        }
    }
    // check capture modifier
    if (modifiers.capture) {
        delete modifiers.capture;
        name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
        delete modifiers.once;
        name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
        delete modifiers.passive;
        name = prependModifierMarker('&', name, dynamic);
    }
    var events;
    if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
    }
    else {
        events = el.events || (el.events = {});
    }
    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
        newHandler.modifiers = modifiers;
    }
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    }
    else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    }
    else {
        events[name] = newHandler;
    }
    el.plain = false;
}
function getRawBindingAttr(el, name) {
    return (el.rawAttrsMap[':' + name] ||
        el.rawAttrsMap['v-bind:' + name] ||
        el.rawAttrsMap[name]);
}
function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
        return parseFilters(dynamicValue);
    }
    else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
            return JSON.stringify(staticValue);
        }
    }
}
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
                list.splice(i, 1);
                break;
            }
        }
    }
    if (removeFromMap) {
        delete el.attrsMap[name];
    }
    return val;
}
function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
        var attr = list[i];
        if (name.test(attr.name)) {
            list.splice(i, 1);
            return attr;
        }
    }
}
function rangeSetItem(item, range) {
    if (range) {
        if (range.start != null) {
            item.start = range.start;
        }
        if (range.end != null) {
            item.end = range.end;
        }
    }
    return item;
}

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
    var _a = modifiers || {}, number = _a.number, trim = _a.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
        valueExpression =
            "(typeof ".concat(baseValueExpression, " === 'string'") +
                "? ".concat(baseValueExpression, ".trim()") +
                ": ".concat(baseValueExpression, ")");
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
        value: "(".concat(value, ")"),
        expression: JSON.stringify(value),
        callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
    };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
        return "".concat(value, "=").concat(assignment);
    }
    else {
        return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
    }
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
var len, str, chr, index, expressionPos, expressionEndPos;
function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;
    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index = val.lastIndexOf('.');
        if (index > -1) {
            return {
                exp: val.slice(0, index),
                key: '"' + val.slice(index + 1) + '"'
            };
        }
        else {
            return {
                exp: val,
                key: null
            };
        }
    }
    str = val;
    index = expressionPos = expressionEndPos = 0;
    while (!eof()) {
        chr = next();
        /* istanbul ignore if */
        if (isStringStart(chr)) {
            parseString(chr);
        }
        else if (chr === 0x5b) {
            parseBracket(chr);
        }
    }
    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    };
}
function next() {
    return str.charCodeAt(++index);
}
function eof() {
    return index >= len;
}
function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
}
function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index;
    while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
            parseString(chr);
            continue;
        }
        if (chr === 0x5b)
            inBracket++;
        if (chr === 0x5d)
            inBracket--;
        if (inBracket === 0) {
            expressionEndPos = index;
            break;
        }
    }
}
function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
        chr = next();
        if (chr === stringQuote) {
            break;
        }
    }
}

var warn$1;
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
function model$1(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    if (true) {
        // inputs with type="file" are read only and setting the input's
        // value will throw an error.
        if (tag === 'input' && type === 'file') {
            warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\" type=\"file\">:\n") +
                "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
        }
    }
    if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (tag === 'select') {
        genSelect(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'checkbox') {
        genCheckboxModel(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'radio') {
        genRadioModel(el, value, modifiers);
    }
    else if (tag === 'input' || tag === 'textarea') {
        genDefaultModel(el, value, modifiers);
    }
    else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (true) {
        warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
            "v-model is not supported on this element type. " +
            "If you are working with contenteditable, it's recommended to " +
            'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    }
    // ensure runtime directive metadata
    return true;
}
function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(".concat(value, ")") +
        "?_i(".concat(value, ",").concat(valueBinding, ")>-1") +
        (trueValueBinding === 'true'
            ? ":(".concat(value, ")")
            : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
    addHandler(el, 'change', "var $$a=".concat(value, ",") +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") +
        'if(Array.isArray($$a)){' +
        "var $$v=".concat(number ? '_n(' + valueBinding + ')' : valueBinding, ",") +
        '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, '$$a.concat([$$v])'), ")}") +
        "else{$$i>-1&&(".concat(genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ")}") +
        "}else{".concat(genAssignmentCode(value, '$$c'), "}"), null, true);
}
function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
    addProp(el, 'checked', "_q(".concat(value, ",").concat(valueBinding, ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}
function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
        "return ".concat(number ? '_n(val)' : 'val', "})");
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = ".concat(selectedVal, ";");
    code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
}
function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;
    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    if (true) {
        var value_1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
        var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
        if (value_1 && !typeBinding) {
            var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
            warn$1("".concat(binding, "=\"").concat(value_1, "\" conflicts with v-model on the same element ") +
                'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
        }
    }
    var _a = modifiers || {}, lazy = _a.lazy, number = _a.number, trim = _a.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';
    if (trim) {
        valueExpression = "$event.target.value.trim()";
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
        code = "if($event.target.composing)return;".concat(code);
    }
    addProp(el, 'value', "(".concat(value, ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
        addHandler(el, 'blur', '$forceUpdate()');
    }
}

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event_1 = isIE ? 'change' : 'input';
        on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
        delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
var target;
function createOnceHandler(event, handler, capture) {
    var _target = target; // save current target element in closure
    return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
            remove(event, onceHandler, capture, _target);
        }
    };
}
// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
        var attachedTimestamp_1 = currentFlushTimestamp;
        var original_1 = handler;
        //@ts-expect-error
        handler = original_1._wrapper = function (e) {
            if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
                // event is fired after handler attachment
                e.timeStamp >= attachedTimestamp_1 ||
                // bail for environments that have buggy event.timeStamp implementations
                // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                // #9681 QtWebEngine event.timeStamp is negative value
                e.timeStamp <= 0 ||
                // #9448 bail if event is fired in another document in a multi-page
                // electron/nw.js app, since event.timeStamp will be using a different
                // starting reference
                e.target.ownerDocument !== document) {
                return original_1.apply(this, arguments);
            }
        };
    }
    target.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}
function remove(name, handler, capture, _target) {
    (_target || target).removeEventListener(name, 
    //@ts-expect-error
    handler._wrapper || handler, capture);
}
function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    // vnode is empty when removing all listeners,
    // and use old vnode dom element
    target = vnode.elm || oldVnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
    target = undefined;
}
var events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
    // @ts-expect-error emptyNode has actually data
    destroy: function (vnode) { return updateDOMListeners(vnode, emptyNode); }
};

var svgContainer;
function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
        props = vnode.data.domProps = extend({}, props);
    }
    for (key in oldProps) {
        if (!(key in props)) {
            elm[key] = '';
        }
    }
    for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children)
                vnode.children.length = 0;
            if (cur === oldProps[key])
                continue;
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
            }
        }
        if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur;
            // avoid resetting cursor position when value is the same
            var strCur = isUndef(cur) ? '' : String(cur);
            if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
            }
        }
        else if (key === 'innerHTML' &&
            isSVG(elm.tagName) &&
            isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div');
            svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
            var svg = svgContainer.firstChild;
            while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
            }
            while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
            }
        }
        else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
                elm[key] = cur;
            }
            catch (e) { }
        }
    }
}
function shouldUpdateValue(elm, checkVal) {
    return (
    //@ts-expect-error
    !elm.composing &&
        (elm.tagName === 'OPTION' ||
            isNotInFocusAndDirty(elm, checkVal) ||
            isDirtyWithModifiers(elm, checkVal)));
}
function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
        notInFocus = document.activeElement !== elm;
    }
    catch (e) { }
    return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
        if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
            return value.trim() !== newVal.trim();
        }
    }
    return value !== newVal;
}
var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
};

var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;
    if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;
            if (childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
            }
        }
    }
    if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
    }
    var parentNode = vnode;
    // @ts-expect-error parentNode.parent not VNodeWithData
    while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
        }
    }
    return res;
}

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
    }
    else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    }
    else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i];
            }
        }
        else {
            el.style[normalizedName] = val;
        }
    }
};
var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
        return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
        var name_1 = vendorNames[i] + capName;
        if (name_1 in emptyStyle) {
            return name_1;
        }
    }
});
function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticStyle) &&
        isUndef(data.style) &&
        isUndef(oldData.staticStyle) &&
        isUndef(oldData.style)) {
        return;
    }
    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {};
    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);
    for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
            setProp(el, name, '');
        }
    }
    for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
            // ie9 setting to null has no effect, must use empty string
            setProp(el, name, cur == null ? '' : cur);
        }
    }
}
var style$1 = {
    create: updateStyle,
    update: updateStyle
};

var whitespaceRE$1 = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.add(c); });
        }
        else {
            el.classList.add(cls);
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.remove(c); });
        }
        else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        }
        else {
            el.removeAttribute('class');
        }
    }
}

function resolveTransition(def) {
    if (!def) {
        return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
            extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
    }
    else if (typeof def === 'string') {
        return autoCssTransition(def);
    }
}
var autoCssTransition = cached(function (name) {
    return {
        enterClass: "".concat(name, "-enter"),
        enterToClass: "".concat(name, "-enter-to"),
        enterActiveClass: "".concat(name, "-enter-active"),
        leaveClass: "".concat(name, "-leave"),
        leaveToClass: "".concat(name, "-leave-to"),
        leaveActiveClass: "".concat(name, "-leave-active")
    };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';
// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
    }
}
// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
    ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
    : /* istanbul ignore next */ function (/* istanbul ignore next */ fn) { return fn(); };
function nextFrame(fn) {
    raf(function () {
        // @ts-expect-error
        raf(fn);
    });
}
function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}
function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
        remove$2(el._transitionClasses, cls);
    }
    removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
    var _a = getTransitionInfo(el, expectedType), type = _a.type, timeout = _a.timeout, propCount = _a.propCount;
    if (!type)
        return cb();
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
    };
    var onEnd = function (e) {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(function () {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
    }));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function enter(vnode, toggleDisplay) {
    var el = vnode.elm;
    // call leave callback now
    if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
        return;
    }
    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
    }
    var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
    }
    var isAppear = !context._isMounted || !vnode.isRootInsert;
    if (isAppear && !appear && appear !== '') {
        return;
    }
    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear
        ? appearCancelled || enterCancelled
        : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
    if ( true && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
    }
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = (el._enterCb = once(function () {
        if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
        }
        else {
            afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
    }));
    if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
        });
    }
    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
            removeTransitionClass(el, startClass);
            // @ts-expect-error
            if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) {
                        setTimeout(cb, explicitEnterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, cb);
                    }
                }
            }
        });
    }
    if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
    }
    if (!expectsCSS && !userWantsControl) {
        cb();
    }
}
function leave(vnode, rm) {
    var el = vnode.elm;
    // call enter callback now
    if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
        return rm();
    }
    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
        return;
    }
    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
    if ( true && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
    }
    var cb = (el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
        }
        else {
            rm();
            afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
    }));
    if (delayLeave) {
        delayLeave(performLeave);
    }
    else {
        performLeave();
    }
    function performLeave() {
        // the delayed leave may have already been cancelled
        // @ts-expect-error
        if (cb.cancelled) {
            return;
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
                removeTransitionClass(el, leaveClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitLeaveDuration)) {
                            setTimeout(cb, explicitLeaveDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
            cb();
        }
    }
}
// only used in dev mode
function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
        warn$2("<transition> explicit ".concat(name, " duration is not a valid number - ") +
            "got ".concat(JSON.stringify(val), "."), vnode.context);
    }
    else if (isNaN(val)) {
        warn$2("<transition> explicit ".concat(name, " duration is NaN - ") +
            'the duration expression might be incorrect.', vnode.context);
    }
}
function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
        return false;
    }
    // @ts-expect-error
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    }
    else {
        // @ts-expect-error
        return (fn._length || fn.length) > 1;
    }
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) {
        enter(vnode);
    }
}
var transition = inBrowser
    ? {
        create: _enter,
        activate: _enter,
        remove: function (vnode, rm) {
            /* istanbul ignore else */
            if (vnode.data.show !== true) {
                // @ts-expect-error
                leave(vnode, rm);
            }
            else {
                rm();
            }
        }
    }
    : {};

var platformModules = [attrs, klass$1, events, domProps, style$1, transition];

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules$1 = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules$1 });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
/* istanbul ignore if */
if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        // @ts-expect-error
        if (el && el.vmodel) {
            trigger(el, 'input');
        }
    });
}
var directive = {
    inserted: function (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, 'postpatch', function () {
                    directive.componentUpdated(el, binding, vnode);
                });
            }
            else {
                setSelected(el, binding, vnode.context);
            }
            el._vOptions = [].map.call(el.options, getValue);
        }
        else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
                el.addEventListener('compositionstart', onCompositionStart);
                el.addEventListener('compositionend', onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener('change', onCompositionEnd);
                /* istanbul ignore if */
                if (isIE9) {
                    el.vmodel = true;
                }
            }
        }
    },
    componentUpdated: function (el, binding, vnode) {
        if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context);
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var prevOptions_1 = el._vOptions;
            var curOptions_1 = (el._vOptions = [].map.call(el.options, getValue));
            if (curOptions_1.some(function (o, i) { return !looseEqual(o, prevOptions_1[i]); })) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                    ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions_1); })
                    : binding.value !== binding.oldValue &&
                        hasNoMatchingOption(binding.value, curOptions_1);
                if (needReset) {
                    trigger(el, 'change');
                }
            }
        }
    }
};
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
        setTimeout(function () {
            actuallySetSelected(el, binding, vm);
        }, 0);
    }
}
function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
         true &&
            warn$2("<select multiple v-model=\"".concat(binding.expression, "\"> ") +
                "expects an Array value for its binding, but got ".concat(Object.prototype.toString
                    .call(value)
                    .slice(8, -1)), vm);
        return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
                option.selected = selected;
            }
        }
        else {
            if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                    el.selectedIndex = i;
                }
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
function hasNoMatchingOption(value, options) {
    return options.every(function (o) { return !looseEqual(o, value); });
}
function getValue(option) {
    return '_value' in option ? option._value : option.value;
}
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing)
        return;
    e.target.composing = false;
    trigger(e.target, 'input');
}
function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
    // @ts-expect-error
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode;
}
var show = {
    bind: function (el, _a, vnode) {
        var value = _a.value;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        var originalDisplay = (el.__vOriginalDisplay =
            el.style.display === 'none' ? '' : el.style.display);
        if (value && transition) {
            vnode.data.show = true;
            enter(vnode, function () {
                el.style.display = originalDisplay;
            });
        }
        else {
            el.style.display = value ? originalDisplay : 'none';
        }
    },
    update: function (el, _a, vnode) {
        var value = _a.value, oldValue = _a.oldValue;
        /* istanbul ignore if */
        if (!value === !oldValue)
            return;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        if (transition) {
            vnode.data.show = true;
            if (value) {
                enter(vnode, function () {
                    el.style.display = el.__vOriginalDisplay;
                });
            }
            else {
                leave(vnode, function () {
                    el.style.display = 'none';
                });
            }
        }
        else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
    },
    unbind: function (el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
        }
    }
};

var platformDirectives = {
    model: directive,
    show: show
};

// Provides transition support for a single element/component.
var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
    }
    else {
        return vnode;
    }
}
function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
        data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key in listeners) {
        data[camelize(key)] = listeners[key];
    }
    return data;
}
function placeholder(h, rawChild) {
    // @ts-expect-error
    if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
            props: rawChild.componentOptions.propsData
        });
    }
}
function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true;
        }
    }
}
function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
var isVShowDirective = function (d) { return d.name === 'show'; };
var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function (h) {
        var _this = this;
        var children = this.$slots.default;
        if (!children) {
            return;
        }
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
            return;
        }
        // warn multiple elements
        if ( true && children.length > 1) {
            warn$2('<transition> can only be used on a single element. Use ' +
                '<transition-group> for lists.', this.$parent);
        }
        var mode = this.mode;
        // warn invalid mode
        if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
            warn$2('invalid <transition> mode: ' + mode, this.$parent);
        }
        var rawChild = children[0];
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
            return rawChild;
        }
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
            return rawChild;
        }
        if (this._leaving) {
            return placeholder(h, rawChild);
        }
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-".concat(this._uid, "-");
        child.key =
            child.key == null
                ? child.isComment
                    ? id + 'comment'
                    : id + child.tag
                : isPrimitive(child.key)
                    ? String(child.key).indexOf(id) === 0
                        ? child.key
                        : id + child.key
                    : child.key;
        var data = ((child.data || (child.data = {})).transition =
            extractTransitionData(this));
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
        }
        if (oldChild &&
            oldChild.data &&
            !isSameChild(child, oldChild) &&
            !isAsyncPlaceholder(oldChild) &&
            // #6687 component root is a comment node
            !(oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = (oldChild.data.transition = extend({}, data));
            // handle transition mode
            if (mode === 'out-in') {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, 'afterLeave', function () {
                    _this._leaving = false;
                    _this.$forceUpdate();
                });
                return placeholder(h, rawChild);
            }
            else if (mode === 'in-out') {
                if (isAsyncPlaceholder(child)) {
                    return oldRawChild;
                }
                var delayedLeave_1;
                var performLeave = function () {
                    delayedLeave_1();
                };
                mergeVNodeHook(data, 'afterEnter', performLeave);
                mergeVNodeHook(data, 'enterCancelled', performLeave);
                mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                    delayedLeave_1 = leave;
                });
            }
        }
        return rawChild;
    }
};

// Provides transition support for list items.
var props = extend({
    tag: String,
    moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
    props: props,
    beforeMount: function () {
        var _this = this;
        var update = this._update;
        this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(_this);
            // force removing pass
            _this.__patch__(_this._vnode, _this.kept, false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
            );
            _this._vnode = _this.kept;
            restoreActiveInstance();
            update.call(_this, vnode, hydrating);
        };
    },
    render: function (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = (this.prevChildren = this.children);
        var rawChildren = this.$slots.default || [];
        var children = (this.children = []);
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
                if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                }
                else if (true) {
                    var opts = c.componentOptions;
                    var name_1 = opts
                        ? getComponentName(opts.Ctor.options) || opts.tag || ''
                        : c.tag;
                    warn$2("<transition-group> children must be keyed: <".concat(name_1, ">"));
                }
            }
        }
        if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i = 0; i < prevChildren.length; i++) {
                var c = prevChildren[i];
                c.data.transition = transitionData;
                // @ts-expect-error .getBoundingClientRect is not typed in Node
                c.data.pos = c.elm.getBoundingClientRect();
                if (map[c.key]) {
                    kept.push(c);
                }
                else {
                    removed.push(c);
                }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
        }
        return h(tag, null, children);
    },
    updated: function () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || 'v') + '-move';
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
        }
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
        children.forEach(function (c) {
            if (c.data.moved) {
                var el_1 = c.elm;
                var s = el_1.style;
                addTransitionClass(el_1, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = '';
                el_1.addEventListener(transitionEndEvent, (el_1._moveCb = function cb(e) {
                    if (e && e.target !== el_1) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el_1.removeEventListener(transitionEndEvent, cb);
                        el_1._moveCb = null;
                        removeTransitionClass(el_1, moveClass);
                    }
                }));
            }
        });
    },
    methods: {
        hasMove: function (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
                return false;
            }
            /* istanbul ignore if */
            if (this._hasMove) {
                return this._hasMove;
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode();
            if (el._transitionClasses) {
                el._transitionClasses.forEach(function (cls) {
                    removeClass(clone, cls);
                });
            }
            addClass(clone, moveClass);
            clone.style.display = 'none';
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return (this._hasMove = info.hasTransform);
        }
    }
};
function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
        c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
        c.elm._enterCb();
    }
}
function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
        s.transitionDuration = '0s';
    }
}

var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
};

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);
// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;
// public mount method
Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
};
// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
    setTimeout(function () {
        if (config.devtools) {
            if (devtools) {
                devtools.emit('init', Vue);
            }
            else if (true) {
                // @ts-expect-error
                console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools');
            }
        }
        if ( true &&
            config.productionTip !== false &&
            typeof console !== 'undefined') {
            // @ts-expect-error
            console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                "Make sure to turn on production mode when deploying for production.\n" +
                "See more tips at https://vuejs.org/guide/deployment.html");
        }
    }, 0);
}

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});
function parseText(text, delimiters) {
    //@ts-expect-error
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
        return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = (tagRE.lastIndex = 0);
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
            rawTokens.push((tokenValue = text.slice(lastIndex, index)));
            tokens.push(JSON.stringify(tokenValue));
        }
        // tag token
        var exp = parseFilters(match[1].trim());
        tokens.push("_s(".concat(exp, ")"));
        rawTokens.push({ '@binding': exp });
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        rawTokens.push((tokenValue = text.slice(lastIndex)));
        tokens.push(JSON.stringify(tokenValue));
    }
    return {
        expression: tokens.join('+'),
        tokens: rawTokens
    };
}

function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ( true && staticClass) {
        var res = parseText(staticClass, options.delimiters);
        if (res) {
            warn("class=\"".concat(staticClass, "\": ") +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
        }
    }
    if (staticClass) {
        el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, ' ').trim());
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
        el.classBinding = classBinding;
    }
}
function genData$2(el) {
    var data = '';
    if (el.staticClass) {
        data += "staticClass:".concat(el.staticClass, ",");
    }
    if (el.classBinding) {
        data += "class:".concat(el.classBinding, ",");
    }
    return data;
}
var klass = {
    staticKeys: ['staticClass'],
    transformNode: transformNode$1,
    genData: genData$2
};

function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
        /* istanbul ignore if */
        if (true) {
            var res = parseText(staticStyle, options.delimiters);
            if (res) {
                warn("style=\"".concat(staticStyle, "\": ") +
                    'Interpolation inside attributes has been removed. ' +
                    'Use v-bind or the colon shorthand instead. For example, ' +
                    'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
            }
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }
    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
        el.styleBinding = styleBinding;
    }
}
function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
        data += "staticStyle:".concat(el.staticStyle, ",");
    }
    if (el.styleBinding) {
        data += "style:(".concat(el.styleBinding, "),");
    }
    return data;
}
var style = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode,
    genData: genData$1
};

var decoder;
var he = {
    decode: function (html) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = html;
        return decoder.textContent;
    }
};

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track');

/**
 * Not type-checking this file because it's mostly vendor code.
 */
// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
var startTagOpen = new RegExp("^<".concat(qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;
// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};
var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};
function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; });
}
function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag = options.isUnaryTag || no;
    var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    var _loop_1 = function () {
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<');
            if (textEnd === 0) {
                // Comment:
                if (comment.test(html)) {
                    var commentEnd = html.indexOf('-->');
                    if (commentEnd >= 0) {
                        if (options.shouldKeepComment && options.comment) {
                            options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                        }
                        advance(commentEnd + 3);
                        return "continue";
                    }
                }
                // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                if (conditionalComment.test(html)) {
                    var conditionalEnd = html.indexOf(']>');
                    if (conditionalEnd >= 0) {
                        advance(conditionalEnd + 2);
                        return "continue";
                    }
                }
                // Doctype:
                var doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length);
                    return "continue";
                }
                // End tag:
                var endTagMatch = html.match(endTag);
                if (endTagMatch) {
                    var curIndex = index;
                    advance(endTagMatch[0].length);
                    parseEndTag(endTagMatch[1], curIndex, index);
                    return "continue";
                }
                // Start tag:
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                    handleStartTag(startTagMatch);
                    if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                        advance(1);
                    }
                    return "continue";
                }
            }
            var text = void 0, rest = void 0, next = void 0;
            if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (!endTag.test(rest) &&
                    !startTagOpen.test(rest) &&
                    !comment.test(rest) &&
                    !conditionalComment.test(rest)) {
                    // < in plain text, be forgiving and treat it as text
                    next = rest.indexOf('<', 1);
                    if (next < 0)
                        break;
                    textEnd += next;
                    rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
            }
            if (textEnd < 0) {
                text = html;
            }
            if (text) {
                advance(text.length);
            }
            if (options.chars && text) {
                options.chars(text, index - text.length, index);
            }
        }
        else {
            var endTagLength_1 = 0;
            var stackedTag_1 = lastTag.toLowerCase();
            var reStackedTag = reCache[stackedTag_1] ||
                (reCache[stackedTag_1] = new RegExp('([\\s\\S]*?)(</' + stackedTag_1 + '[^>]*>)', 'i'));
            var rest = html.replace(reStackedTag, function (all, text, endTag) {
                endTagLength_1 = endTag.length;
                if (!isPlainTextElement(stackedTag_1) && stackedTag_1 !== 'noscript') {
                    text = text
                        .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                        .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                }
                if (shouldIgnoreFirstNewline(stackedTag_1, text)) {
                    text = text.slice(1);
                }
                if (options.chars) {
                    options.chars(text);
                }
                return '';
            });
            index += html.length - rest.length;
            html = rest;
            parseEndTag(stackedTag_1, index - endTagLength_1, index);
        }
        if (html === last) {
            options.chars && options.chars(html);
            if ( true && !stack.length && options.warn) {
                options.warn("Mal-formatted tag at end of template: \"".concat(html, "\""), {
                    start: index + html.length
                });
            }
            return "break";
        }
    };
    while (html) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    // Clean up any remaining tags
    parseEndTag();
    function advance(n) {
        index += n;
        html = html.substring(n);
    }
    function parseStartTag() {
        var start = html.match(startTagOpen);
        if (start) {
            var match = {
                tagName: start[1],
                attrs: [],
                start: index
            };
            advance(start[0].length);
            var end = void 0, attr = void 0;
            while (!(end = html.match(startTagClose)) &&
                (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                attr.start = index;
                advance(attr[0].length);
                attr.end = index;
                match.attrs.push(attr);
            }
            if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
            }
        }
    }
    function handleStartTag(match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
        if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                parseEndTag(lastTag);
            }
            if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
                parseEndTag(tagName);
            }
        }
        var unary = isUnaryTag(tagName) || !!unarySlash;
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
            var args = match.attrs[i];
            var value = args[3] || args[4] || args[5] || '';
            var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                ? options.shouldDecodeNewlinesForHref
                : options.shouldDecodeNewlines;
            attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines)
            };
            if ( true && options.outputSourceRange) {
                attrs[i].start = args.start + args[0].match(/^\s*/).length;
                attrs[i].end = args.end;
            }
        }
        if (!unary) {
            stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
                start: match.start,
                end: match.end
            });
            lastTag = tagName;
        }
        if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end);
        }
    }
    function parseEndTag(tagName, start, end) {
        var pos, lowerCasedTagName;
        if (start == null)
            start = index;
        if (end == null)
            end = index;
        // Find the closest opened tag of the same type
        if (tagName) {
            lowerCasedTagName = tagName.toLowerCase();
            for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                    break;
                }
            }
        }
        else {
            // If no tag name is provided, clean shop
            pos = 0;
        }
        if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) {
                if ( true && (i > pos || !tagName) && options.warn) {
                    options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
                        start: stack[i].start,
                        end: stack[i].end
                    });
                }
                if (options.end) {
                    options.end(stack[i].tag, start, end);
                }
            }
            // Remove the open elements from the stack
            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
        }
        else if (lowerCasedTagName === 'br') {
            if (options.start) {
                options.start(tagName, [], true, start, end);
            }
        }
        else if (lowerCasedTagName === 'p') {
            if (options.start) {
                options.start(tagName, [], false, start, end);
            }
            if (options.end) {
                options.end(tagName, start, end);
            }
        }
    }
}

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE = /[ \f\t\r\n]+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he.decode);
var emptySlotScopeToken = "_empty_";
// configurable state
var warn;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;
function createASTElement(tag, attrs, parent) {
    return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent: parent,
        children: []
    };
}
/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
    warn = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) {
        return !!(el.component ||
            el.attrsMap[':is'] ||
            el.attrsMap['v-bind:is'] ||
            !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
    };
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;
    function warnOnce(msg, range) {
        if (!warned) {
            warned = true;
            warn(msg, range);
        }
    }
    function closeElement(element) {
        trimEndingWhitespace(element);
        if (!inVPre && !element.processed) {
            element = processElement(element, options);
        }
        // tree management
        if (!stack.length && element !== root) {
            // allow root elements with v-if, v-else-if and v-else
            if (root.if && (element.elseif || element.else)) {
                if (true) {
                    checkRootConstraints(element);
                }
                addIfCondition(root, {
                    exp: element.elseif,
                    block: element
                });
            }
            else if (true) {
                warnOnce("Component template should contain exactly one root element. " +
                    "If you are using v-if on multiple elements, " +
                    "use v-else-if to chain them instead.", { start: element.start });
            }
        }
        if (currentParent && !element.forbidden) {
            if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
            }
            else {
                if (element.slotScope) {
                    // scoped slot
                    // keep it in the children list so that v-else(-if) conditions can
                    // find it as the prev node.
                    var name_1 = element.slotTarget || '"default"';
                    (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name_1] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
            }
        }
        // final children cleanup
        // filter out scoped slots
        element.children = element.children.filter(function (c) { return !c.slotScope; });
        // remove trailing whitespace node again
        trimEndingWhitespace(element);
        // check pre state
        if (element.pre) {
            inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
            inPre = false;
        }
        // apply post-transforms
        for (var i = 0; i < postTransforms.length; i++) {
            postTransforms[i](element, options);
        }
    }
    function trimEndingWhitespace(el) {
        // remove trailing whitespace node
        if (!inPre) {
            var lastNode = void 0;
            while ((lastNode = el.children[el.children.length - 1]) &&
                lastNode.type === 3 &&
                lastNode.text === ' ') {
                el.children.pop();
            }
        }
    }
    function checkRootConstraints(el) {
        if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") +
                'contain multiple nodes.', { start: el.start });
        }
        if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' +
                'it renders multiple elements.', el.rawAttrsMap['v-for']);
        }
    }
    parseHTML(template, {
        warn: warn,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        outputSourceRange: options.outputSourceRange,
        start: function (tag, attrs, unary, start, end) {
            // check namespace.
            // inherit parent ns if there is one
            var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
            // handle IE svg bug
            /* istanbul ignore if */
            if (isIE && ns === 'svg') {
                attrs = guardIESVGBug(attrs);
            }
            var element = createASTElement(tag, attrs, currentParent);
            if (ns) {
                element.ns = ns;
            }
            if (true) {
                if (options.outputSourceRange) {
                    element.start = start;
                    element.end = end;
                    element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                        cumulated[attr.name] = attr;
                        return cumulated;
                    }, {});
                }
                attrs.forEach(function (attr) {
                    if (invalidAttributeRE.test(attr.name)) {
                        warn("Invalid dynamic argument expression: attribute names cannot contain " +
                            "spaces, quotes, <, >, / or =.", options.outputSourceRange
                            ? {
                                start: attr.start + attr.name.indexOf("["),
                                end: attr.start + attr.name.length
                            }
                            : undefined);
                    }
                });
            }
            if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                 true &&
                    warn('Templates should only be responsible for mapping the state to the ' +
                        'UI. Avoid placing tags with side-effects in your templates, such as ' +
                        "<".concat(tag, ">") +
                        ', as they will not be parsed.', { start: element.start });
            }
            // apply pre-transforms
            for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
            }
            if (!inVPre) {
                processPre(element);
                if (element.pre) {
                    inVPre = true;
                }
            }
            if (platformIsPreTag(element.tag)) {
                inPre = true;
            }
            if (inVPre) {
                processRawAttrs(element);
            }
            else if (!element.processed) {
                // structural directives
                processFor(element);
                processIf(element);
                processOnce(element);
            }
            if (!root) {
                root = element;
                if (true) {
                    checkRootConstraints(root);
                }
            }
            if (!unary) {
                currentParent = element;
                stack.push(element);
            }
            else {
                closeElement(element);
            }
        },
        end: function (tag, start, end) {
            var element = stack[stack.length - 1];
            // pop stack
            stack.length -= 1;
            currentParent = stack[stack.length - 1];
            if ( true && options.outputSourceRange) {
                element.end = end;
            }
            closeElement(element);
        },
        chars: function (text, start, end) {
            if (!currentParent) {
                if (true) {
                    if (text === template) {
                        warnOnce('Component template requires a root element, rather than just text.', { start: start });
                    }
                    else if ((text = text.trim())) {
                        warnOnce("text \"".concat(text, "\" outside root element will be ignored."), {
                            start: start
                        });
                    }
                }
                return;
            }
            // IE textarea placeholder bug
            /* istanbul ignore if */
            if (isIE &&
                currentParent.tag === 'textarea' &&
                currentParent.attrsMap.placeholder === text) {
                return;
            }
            var children = currentParent.children;
            if (inPre || text.trim()) {
                text = isTextTag(currentParent)
                    ? text
                    : decodeHTMLCached(text);
            }
            else if (!children.length) {
                // remove the whitespace-only node right after an opening tag
                text = '';
            }
            else if (whitespaceOption) {
                if (whitespaceOption === 'condense') {
                    // in condense mode, remove the whitespace node if it contains
                    // line break, otherwise condense to a single space
                    text = lineBreakRE.test(text) ? '' : ' ';
                }
                else {
                    text = ' ';
                }
            }
            else {
                text = preserveWhitespace ? ' ' : '';
            }
            if (text) {
                if (!inPre && whitespaceOption === 'condense') {
                    // condense consecutive whitespaces into single space
                    text = text.replace(whitespaceRE, ' ');
                }
                var res = void 0;
                var child = void 0;
                if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                    child = {
                        type: 2,
                        expression: res.expression,
                        tokens: res.tokens,
                        text: text
                    };
                }
                else if (text !== ' ' ||
                    !children.length ||
                    children[children.length - 1].text !== ' ') {
                    child = {
                        type: 3,
                        text: text
                    };
                }
                if (child) {
                    if ( true && options.outputSourceRange) {
                        child.start = start;
                        child.end = end;
                    }
                    children.push(child);
                }
            }
        },
        comment: function (text, start, end) {
            // adding anything as a sibling to the root node is forbidden
            // comments should still be allowed, but ignored
            if (currentParent) {
                var child = {
                    type: 3,
                    text: text,
                    isComment: true
                };
                if ( true && options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                }
                currentParent.children.push(child);
            }
        }
    });
    return root;
}
function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
        el.pre = true;
    }
}
function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
        var attrs = (el.attrs = new Array(len));
        for (var i = 0; i < len; i++) {
            attrs[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
            };
            if (list[i].start != null) {
                attrs[i].start = list[i].start;
                attrs[i].end = list[i].end;
            }
        }
    }
    else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
    }
}
function processElement(element, options) {
    processKey(element);
    // determine whether this is a plain element after
    // removing structural attributes
    element.plain =
        !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
        element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element;
}
function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
        if (true) {
            if (el.tag === 'template') {
                warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
            }
            if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent_1 = el.parent;
                if (iterator &&
                    iterator === exp &&
                    parent_1 &&
                    parent_1.tag === 'transition-group') {
                    warn("Do not use v-for index as key on <transition-group> children, " +
                        "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */);
                }
            }
        }
        el.key = exp;
    }
}
function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
    }
}
function processFor(el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        var res = parseFor(exp);
        if (res) {
            extend(el, res);
        }
        else if (true) {
            warn("Invalid v-for expression: ".concat(exp), el.rawAttrsMap['v-for']);
        }
    }
}
function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch)
        return;
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
        res.alias = alias.replace(forIteratorRE, '').trim();
        res.iterator1 = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
            res.iterator2 = iteratorMatch[2].trim();
        }
    }
    else {
        res.alias = alias;
    }
    return res;
}
function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
        el.if = exp;
        addIfCondition(el, {
            exp: exp,
            block: el
        });
    }
    else {
        if (getAndRemoveAttr(el, 'v-else') != null) {
            el.else = true;
        }
        var elseif = getAndRemoveAttr(el, 'v-else-if');
        if (elseif) {
            el.elseif = elseif;
        }
    }
}
function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
        addIfCondition(prev, {
            exp: el.elseif,
            block: el
        });
    }
    else if (true) {
        warn("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : 'else', " ") +
            "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
}
function findPrevElement(children) {
    var i = children.length;
    while (i--) {
        if (children[i].type === 1) {
            return children[i];
        }
        else {
            if ( true && children[i].text !== ' ') {
                warn("text \"".concat(children[i].text.trim(), "\" between v-if and v-else(-if) ") +
                    "will be ignored.", children[i]);
            }
            children.pop();
        }
    }
}
function addIfCondition(el, condition) {
    if (!el.ifConditions) {
        el.ifConditions = [];
    }
    el.ifConditions.push(condition);
}
function processOnce(el) {
    var once = getAndRemoveAttr(el, 'v-once');
    if (once != null) {
        el.once = true;
    }
}
// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent(el) {
    var slotScope;
    if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ( true && slotScope) {
            warn("the \"scope\" attribute for scoped slots have been deprecated and " +
                "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
                "can also be used on plain elements in addition to <template> to " +
                "denote scoped slots.", el.rawAttrsMap['scope'], true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    }
    else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if ( true && el.attrsMap['v-for']) {
            warn("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") +
                "(v-for takes higher priority). Use a wrapper <template> for the " +
                "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
        }
        el.slotScope = slotScope;
    }
    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
            addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
        }
    }
    // 2.6 v-slot syntax
    {
        if (el.tag === 'template') {
            // v-slot on <template>
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (el.slotTarget || el.slotScope) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.parent && !maybeComponent(el.parent)) {
                        warn("<template v-slot> can only appear at the root level inside " +
                            "the receiving component", el);
                    }
                }
                var _a = getSlotName(slotBinding), name_2 = _a.name, dynamic = _a.dynamic;
                el.slotTarget = name_2;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
            }
        }
        else {
            // v-slot on component, denotes default slot
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (!maybeComponent(el)) {
                        warn("v-slot can only be used on components or <template>.", slotBinding);
                    }
                    if (el.slotScope || el.slotTarget) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.scopedSlots) {
                        warn("To avoid scope ambiguity, the default slot should also use " +
                            "<template> syntax when there are other named slots.", slotBinding);
                    }
                }
                // add the component's children to its default slot
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var _b = getSlotName(slotBinding), name_3 = _b.name, dynamic = _b.dynamic;
                var slotContainer_1 = (slots[name_3] = createASTElement('template', [], el));
                slotContainer_1.slotTarget = name_3;
                slotContainer_1.slotTargetDynamic = dynamic;
                slotContainer_1.children = el.children.filter(function (c) {
                    if (!c.slotScope) {
                        c.parent = slotContainer_1;
                        return true;
                    }
                });
                slotContainer_1.slotScope = slotBinding.value || emptySlotScopeToken;
                // remove children as they are returned from scopedSlots now
                el.children = [];
                // mark el non-plain so data gets generated
                el.plain = false;
            }
        }
    }
}
function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
        if (binding.name[0] !== '#') {
            name = 'default';
        }
        else if (true) {
            warn("v-slot shorthand syntax requires a slot name.", binding);
        }
    }
    return dynamicArgRE.test(name)
        ? // dynamic [name]
            { name: name.slice(1, -1), dynamic: true }
        : // static name
            { name: "\"".concat(name, "\""), dynamic: false };
}
// handle <slot/> outlets
function processSlotOutlet(el) {
    if (el.tag === 'slot') {
        el.slotName = getBindingAttr(el, 'name');
        if ( true && el.key) {
            warn("`key` does not work on <slot> because slots are abstract outlets " +
                "and can possibly expand into multiple elements. " +
                "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
        }
    }
}
function processComponent(el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
        el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
        el.inlineTemplate = true;
    }
}
function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true;
            // modifiers
            modifiers = parseModifiers(name.replace(dirRE, ''));
            // support .foo shorthand syntax for the .prop modifier
            if (modifiers) {
                name = name.replace(modifierRE, '');
            }
            if (bindRE.test(name)) {
                // v-bind
                name = name.replace(bindRE, '');
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                if ( true && value.trim().length === 0) {
                    warn("The value for a v-bind expression cannot be empty. Found in \"v-bind:".concat(name, "\""));
                }
                if (modifiers) {
                    if (modifiers.prop && !isDynamic) {
                        name = camelize(name);
                        if (name === 'innerHtml')
                            name = 'innerHTML';
                    }
                    if (modifiers.camel && !isDynamic) {
                        name = camelize(name);
                    }
                    if (modifiers.sync) {
                        syncGen = genAssignmentCode(value, "$event");
                        if (!isDynamic) {
                            addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn, list[i]);
                            if (hyphenate(name) !== camelize(name)) {
                                addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn, list[i]);
                            }
                        }
                        else {
                            // handler w/ dynamic event name
                            addHandler(el, "\"update:\"+(".concat(name, ")"), syncGen, null, false, warn, list[i], true // dynamic
                            );
                        }
                    }
                }
                if ((modifiers && modifiers.prop) ||
                    (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))) {
                    addProp(el, name, value, list[i], isDynamic);
                }
                else {
                    addAttr(el, name, value, list[i], isDynamic);
                }
            }
            else if (onRE.test(name)) {
                // v-on
                name = name.replace(onRE, '');
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
            }
            else {
                // normal directives
                name = name.replace(dirRE, '');
                // parse arg
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                    name = name.slice(0, -(arg.length + 1));
                    if (dynamicArgRE.test(arg)) {
                        arg = arg.slice(1, -1);
                        isDynamic = true;
                    }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if ( true && name === 'model') {
                    checkForAliasModel(el, value);
                }
            }
        }
        else {
            // literal attribute
            if (true) {
                var res = parseText(value, delimiters);
                if (res) {
                    warn("".concat(name, "=\"").concat(value, "\": ") +
                        'Interpolation inside attributes has been removed. ' +
                        'Use v-bind or the colon shorthand instead. For example, ' +
                        'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
            }
            addAttr(el, name, JSON.stringify(value), list[i]);
            // #6887 firefox doesn't update muted state if set via attribute
            // even immediately after element creation
            if (!el.component &&
                name === 'muted' &&
                platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, 'true', list[i]);
            }
        }
    }
}
function checkInFor(el) {
    var parent = el;
    while (parent) {
        if (parent.for !== undefined) {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}
function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
        var ret_1 = {};
        match.forEach(function (m) {
            ret_1[m.slice(1)] = true;
        });
        return ret_1;
    }
}
function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
        if ( true && map[attrs[i].name] && !isIE && !isEdge) {
            warn('duplicate attribute: ' + attrs[i].name, attrs[i]);
        }
        map[attrs[i].name] = attrs[i].value;
    }
    return map;
}
// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
}
function isForbiddenTag(el) {
    return (el.tag === 'style' ||
        (el.tag === 'script' &&
            (!el.attrsMap.type || el.attrsMap.type === 'text/javascript')));
}
var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */
function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '');
            res.push(attr);
        }
    }
    return res;
}
function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
        if (_el.for && _el.alias === value) {
            warn("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
                "You are binding v-model directly to a v-for iteration alias. " +
                "This will not be able to modify the v-for source array because " +
                "writing to the alias is like modifying a function local variable. " +
                "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
        }
        _el = _el.parent;
    }
}

/**
 * Expand input[v-model] with dynamic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */
function preTransformNode(el, options) {
    if (el.tag === 'input') {
        var map = el.attrsMap;
        if (!map['v-model']) {
            return;
        }
        var typeBinding = void 0;
        if (map[':type'] || map['v-bind:type']) {
            typeBinding = getBindingAttr(el, 'type');
        }
        if (!map.type && !typeBinding && map['v-bind']) {
            typeBinding = "(".concat(map['v-bind'], ").type");
        }
        if (typeBinding) {
            var ifCondition = getAndRemoveAttr(el, 'v-if', true);
            var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
            var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
            var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
            // 1. checkbox
            var branch0 = cloneASTElement(el);
            // process for on the main node
            processFor(branch0);
            addRawAttr(branch0, 'type', 'checkbox');
            processElement(branch0, options);
            branch0.processed = true; // prevent it from double-processed
            branch0.if = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
            addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
            });
            // 2. add radio else-if condition
            var branch1 = cloneASTElement(el);
            getAndRemoveAttr(branch1, 'v-for', true);
            addRawAttr(branch1, 'type', 'radio');
            processElement(branch1, options);
            addIfCondition(branch0, {
                exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
                block: branch1
            });
            // 3. other
            var branch2 = cloneASTElement(el);
            getAndRemoveAttr(branch2, 'v-for', true);
            addRawAttr(branch2, ':type', typeBinding);
            processElement(branch2, options);
            addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
            });
            if (hasElse) {
                branch0.else = true;
            }
            else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
            }
            return branch0;
        }
    }
}
function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}
var model = {
    preTransformNode: preTransformNode
};

var modules = [klass, style, model];

function text(el, dir) {
    if (dir.value) {
        addProp(el, 'textContent', "_s(".concat(dir.value, ")"), dir);
    }
}

function html(el, dir) {
    if (dir.value) {
        addProp(el, 'innerHTML', "_s(".concat(dir.value, ")"), dir);
    }
}

var directives = {
    model: model$1,
    text: text,
    html: html
};

var baseOptions = {
    expectHTML: true,
    modules: modules,
    directives: directives,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys$1(modules)
};

var isStaticKey;
var isPlatformReservedTag;
var genStaticKeysCached = cached(genStaticKeys);
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
    if (!root)
        return;
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
}
function genStaticKeys(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
        (keys ? ',' + keys : ''));
}
function markStatic(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (!isPlatformReservedTag(node.tag) &&
            node.tag !== 'slot' &&
            node.attrsMap['inline-template'] == null) {
            return;
        }
        for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
            markStatic(child);
            if (!child.static) {
                node.static = false;
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                var block = node.ifConditions[i].block;
                markStatic(block);
                if (!block.static) {
                    node.static = false;
                }
            }
        }
    }
}
function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
        if (node.static || node.once) {
            node.staticInFor = isInFor;
        }
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static &&
            node.children.length &&
            !(node.children.length === 1 && node.children[0].type === 3)) {
            node.staticRoot = true;
            return;
        }
        else {
            node.staticRoot = false;
        }
        if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                markStaticRoots(node.ifConditions[i].block, isInFor);
            }
        }
    }
}
function isStatic(node) {
    if (node.type === 2) {
        // expression
        return false;
    }
    if (node.type === 3) {
        // text
        return true;
    }
    return !!(node.pre ||
        (!node.hasBindings && // no dynamic bindings
            !node.if &&
            !node.for && // not v-if or v-for or v-else
            !isBuiltInTag(node.tag) && // not a built-in
            isPlatformReservedTag(node.tag) && // not a component
            !isDirectChildOfTemplateFor(node) &&
            Object.keys(node).every(isStaticKey)));
}
function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
        node = node.parent;
        if (node.tag !== 'template') {
            return false;
        }
        if (node.for) {
            return true;
        }
    }
    return false;
}

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
// KeyboardEvent.keyCode aliases
var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46]
};
// KeyboardEvent.key aliases
var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    delete: ['Backspace', 'Delete', 'Del']
};
// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return "if(".concat(condition, ")return null;"); };
var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
};
function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name_1 in events) {
        var handlerCode = genHandler(events[name_1]);
        //@ts-expect-error
        if (events[name_1] && events[name_1].dynamic) {
            dynamicHandlers += "".concat(name_1, ",").concat(handlerCode, ",");
        }
        else {
            staticHandlers += "\"".concat(name_1, "\":").concat(handlerCode, ",");
        }
    }
    staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");
    if (dynamicHandlers) {
        return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
    }
    else {
        return prefix + staticHandlers;
    }
}
function genHandler(handler) {
    if (!handler) {
        return 'function(){}';
    }
    if (Array.isArray(handler)) {
        return "[".concat(handler.map(function (handler) { return genHandler(handler); }).join(','), "]");
    }
    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
    if (!handler.modifiers) {
        if (isMethodPath || isFunctionExpression) {
            return handler.value;
        }
        return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}"); // inline statement
    }
    else {
        var code = '';
        var genModifierCode = '';
        var keys = [];
        var _loop_1 = function (key) {
            if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                // left/right
                if (keyCodes[key]) {
                    keys.push(key);
                }
            }
            else if (key === 'exact') {
                var modifiers_1 = handler.modifiers;
                genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta']
                    .filter(function (keyModifier) { return !modifiers_1[keyModifier]; })
                    .map(function (keyModifier) { return "$event.".concat(keyModifier, "Key"); })
                    .join('||'));
            }
            else {
                keys.push(key);
            }
        };
        for (var key in handler.modifiers) {
            _loop_1(key);
        }
        if (keys.length) {
            code += genKeyFilter(keys);
        }
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) {
            code += genModifierCode;
        }
        var handlerCode = isMethodPath
            ? "return ".concat(handler.value, ".apply(null, arguments)")
            : isFunctionExpression
                ? "return (".concat(handler.value, ").apply(null, arguments)")
                : isFunctionInvocation
                    ? "return ".concat(handler.value)
                    : handler.value;
        return "function($event){".concat(code).concat(handlerCode, "}");
    }
}
function genKeyFilter(keys) {
    return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
        "".concat(keys.map(genFilterCode).join('&&'), ")return null;"));
}
function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
        return "$event.keyCode!==".concat(keyVal);
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return ("_k($event.keyCode," +
        "".concat(JSON.stringify(key), ",") +
        "".concat(JSON.stringify(keyCode), ",") +
        "$event.key," +
        "".concat(JSON.stringify(keyName)) +
        ")");
}

function on(el, dir) {
    if ( true && dir.modifiers) {
        warn$2("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return "_g(".concat(code, ",").concat(dir.value, ")"); };
}

function bind(el, dir) {
    el.wrapData = function (code) {
        return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? 'true' : 'false').concat(dir.modifiers && dir.modifiers.sync ? ',true' : '', ")");
    };
}

var baseDirectives = {
    on: on,
    bind: bind,
    cloak: noop
};

var CodegenState = /** @class */ (function () {
    function CodegenState(options) {
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
        this.directives = extend(extend({}, baseDirectives), options.directives);
        var isReservedTag = options.isReservedTag || no;
        this.maybeComponent = function (el) {
            return !!el.component || !isReservedTag(el.tag);
        };
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
    }
    return CodegenState;
}());
function generate(ast, options) {
    var state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    var code = ast
        ? ast.tag === 'script'
            ? 'null'
            : genElement(ast, state)
        : '_c("div")';
    return {
        render: "with(this){return ".concat(code, "}"),
        staticRenderFns: state.staticRenderFns
    };
}
function genElement(el, state) {
    if (el.parent) {
        el.pre = el.pre || el.parent.pre;
    }
    if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state);
    }
    else if (el.once && !el.onceProcessed) {
        return genOnce(el, state);
    }
    else if (el.for && !el.forProcessed) {
        return genFor(el, state);
    }
    else if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
        return genChildren(el, state) || 'void 0';
    }
    else if (el.tag === 'slot') {
        return genSlot(el, state);
    }
    else {
        // component or element
        var code = void 0;
        if (el.component) {
            code = genComponent(el.component, el, state);
        }
        else {
            var data = void 0;
            var maybeComponent = state.maybeComponent(el);
            if (!el.plain || (el.pre && maybeComponent)) {
                data = genData(el, state);
            }
            var tag 
            // check if this is a component in <script setup>
            = void 0;
            // check if this is a component in <script setup>
            var bindings = state.options.bindings;
            if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
                tag = checkBindingType(bindings, el.tag);
            }
            if (!tag)
                tag = "'".concat(el.tag, "'");
            var children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = "_c(".concat(tag).concat(data ? ",".concat(data) : '' // data
            ).concat(children ? ",".concat(children) : '' // children
            , ")");
        }
        // module transforms
        for (var i = 0; i < state.transforms.length; i++) {
            code = state.transforms[i](el, code);
        }
        return code;
    }
}
function checkBindingType(bindings, key) {
    var camelName = camelize(key);
    var PascalName = capitalize(camelName);
    var checkType = function (type) {
        if (bindings[key] === type) {
            return key;
        }
        if (bindings[camelName] === type) {
            return camelName;
        }
        if (bindings[PascalName] === type) {
            return PascalName;
        }
    };
    var fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */) ||
        checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */);
    if (fromConst) {
        return fromConst;
    }
    var fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */) ||
        checkType("setup-ref" /* BindingTypes.SETUP_REF */) ||
        checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */);
    if (fromMaybeRef) {
        return fromMaybeRef;
    }
}
// hoist static sub-trees out
function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
        state.pre = el.pre;
    }
    state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
    state.pre = originalPreState;
    return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ',true' : '', ")");
}
// v-once
function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.staticInFor) {
        var key = '';
        var parent_1 = el.parent;
        while (parent_1) {
            if (parent_1.for) {
                key = parent_1.key;
                break;
            }
            parent_1 = parent_1.parent;
        }
        if (!key) {
             true &&
                state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
            return genElement(el, state);
        }
        return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
    }
    else {
        return genStatic(el, state);
    }
}
function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}
function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
        return altEmpty || '_e()';
    }
    var condition = conditions.shift();
    if (condition.exp) {
        return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
    }
    else {
        return "".concat(genTernaryExp(condition.block));
    }
    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
        return altGen
            ? altGen(el, state)
            : el.once
                ? genOnce(el, state)
                : genElement(el, state);
    }
}
function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : '';
    var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : '';
    if ( true &&
        state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key) {
        state.warn("<".concat(el.tag, " v-for=\"").concat(alias, " in ").concat(exp, "\">: component lists rendered with ") +
            "v-for should have explicit keys. " +
            "See https://v2.vuejs.org/v2/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */);
    }
    el.forProcessed = true; // avoid recursion
    return ("".concat(altHelper || '_l', "((").concat(exp, "),") +
        "function(".concat(alias).concat(iterator1).concat(iterator2, "){") +
        "return ".concat((altGen || genElement)(el, state)) +
        '})');
}
function genData(el, state) {
    var data = '{';
    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs)
        data += dirs + ',';
    // key
    if (el.key) {
        data += "key:".concat(el.key, ",");
    }
    // ref
    if (el.ref) {
        data += "ref:".concat(el.ref, ",");
    }
    if (el.refInFor) {
        data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
        data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
        data += "tag:\"".concat(el.tag, "\",");
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
        data += "attrs:".concat(genProps(el.attrs), ",");
    }
    // DOM props
    if (el.props) {
        data += "domProps:".concat(genProps(el.props), ",");
    }
    // event handlers
    if (el.events) {
        data += "".concat(genHandlers(el.events, false), ",");
    }
    if (el.nativeEvents) {
        data += "".concat(genHandlers(el.nativeEvents, true), ",");
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
        data += "slot:".concat(el.slotTarget, ",");
    }
    // scoped slots
    if (el.scopedSlots) {
        data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
    }
    // component v-model
    if (el.model) {
        data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
    }
    // inline-template
    if (el.inlineTemplate) {
        var inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
            data += "".concat(inlineTemplate, ",");
        }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
        data = "_b(".concat(data, ",\"").concat(el.tag, "\",").concat(genProps(el.dynamicAttrs), ")");
    }
    // v-bind data wrap
    if (el.wrapData) {
        data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
        data = el.wrapListeners(data);
    }
    return data;
}
function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs)
        return;
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = state.directives[dir.name];
        if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime = !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
            hasRuntime = true;
            res += "{name:\"".concat(dir.name, "\",rawName:\"").concat(dir.rawName, "\"").concat(dir.value
                ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value))
                : '').concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : "\"".concat(dir.arg, "\"")) : '').concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : '', "},");
        }
    }
    if (hasRuntime) {
        return res.slice(0, -1) + ']';
    }
}
function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ( true && (el.children.length !== 1 || ast.type !== 1)) {
        state.warn('Inline-template components must have exactly one child element.', { start: el.start });
    }
    if (ast && ast.type === 1) {
        var inlineRenderFns = generate(ast, state.options);
        return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns
            .map(function (code) { return "function(){".concat(code, "}"); })
            .join(','), "]}");
    }
}
function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for ||
        Object.keys(slots).some(function (key) {
            var slot = slots[key];
            return (slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
            );
        });
    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;
    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
        var parent_2 = el.parent;
        while (parent_2) {
            if ((parent_2.slotScope && parent_2.slotScope !== emptySlotScopeToken) ||
                parent_2.for) {
                needsForceUpdate = true;
                break;
            }
            if (parent_2.if) {
                needsKey = true;
            }
            parent_2 = parent_2.parent;
        }
    }
    var generatedSlots = Object.keys(slots)
        .map(function (key) { return genScopedSlot(slots[key], state); })
        .join(',');
    return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
}
function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}
function containsSlotChild(el) {
    if (el.type === 1) {
        if (el.tag === 'slot') {
            return true;
        }
        return el.children.some(containsSlotChild);
    }
    return false;
}
function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
        return genIf(el, state, genScopedSlot, "null");
    }
    if (el.for && !el.forProcessed) {
        return genFor(el, state, genScopedSlot);
    }
    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(".concat(slotScope, "){") +
        "return ".concat(el.tag === 'template'
            ? el.if && isLegacySyntax
                ? "(".concat(el.if, ")?").concat(genChildren(el, state) || 'undefined', ":undefined")
                : genChildren(el, state) || 'undefined'
            : genElement(el, state), "}");
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:".concat(el.slotTarget || "\"default\"", ",fn:").concat(fn).concat(reverseProxy, "}");
}
function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
        var el_1 = children[0];
        // optimize single v-for
        if (children.length === 1 &&
            el_1.for &&
            el_1.tag !== 'template' &&
            el_1.tag !== 'slot') {
            var normalizationType_1 = checkSkip
                ? state.maybeComponent(el_1)
                    ? ",1"
                    : ",0"
                : "";
            return "".concat((altGenElement || genElement)(el_1, state)).concat(normalizationType_1);
        }
        var normalizationType = checkSkip
            ? getNormalizationType(children, state.maybeComponent)
            : 0;
        var gen_1 = altGenNode || genNode;
        return "[".concat(children.map(function (c) { return gen_1(c, state); }).join(','), "]").concat(normalizationType ? ",".concat(normalizationType) : '');
    }
}
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
        var el = children[i];
        if (el.type !== 1) {
            continue;
        }
        if (needsNormalization(el) ||
            (el.ifConditions &&
                el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
            res = 2;
            break;
        }
        if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
            res = 1;
        }
    }
    return res;
}
function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}
function genNode(node, state) {
    if (node.type === 1) {
        return genElement(node, state);
    }
    else if (node.type === 3 && node.isComment) {
        return genComment(node);
    }
    else {
        return genText(node);
    }
}
function genText(text) {
    return "_v(".concat(text.type === 2
        ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text)), ")");
}
function genComment(comment) {
    return "_e(".concat(JSON.stringify(comment.text), ")");
}
function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : '');
    var attrs = el.attrs || el.dynamicAttrs
        ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
        }); }))
        : null;
    var bind = el.attrsMap['v-bind'];
    if ((attrs || bind) && !children) {
        res += ",null";
    }
    if (attrs) {
        res += ",".concat(attrs);
    }
    if (bind) {
        res += "".concat(attrs ? '' : ',null', ",").concat(bind);
    }
    return res + ')';
}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : '', ")");
}
function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        var value = transformSpecialNewlines(prop.value);
        if (prop.dynamic) {
            dynamicProps += "".concat(prop.name, ",").concat(value, ",");
        }
        else {
            staticProps += "\"".concat(prop.name, "\":").concat(value, ",");
        }
    }
    staticProps = "{".concat(staticProps.slice(0, -1), "}");
    if (dynamicProps) {
        return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
    }
    else {
        return staticProps;
    }
}
// #3895, #4268
function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' +
    ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
        'super,throw,while,yield,delete,export,import,return,switch,default,' +
        'extends,finally,continue,debugger,function,arguments')
        .split(',')
        .join('\\b|\\b') +
    '\\b');
// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' +
    'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
    '\\s*\\([^\\)]*\\)');
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
// detect problematic expressions in a template
function detectErrors(ast, warn) {
    if (ast) {
        checkNode(ast, warn);
    }
}
function checkNode(node, warn) {
    if (node.type === 1) {
        for (var name_1 in node.attrsMap) {
            if (dirRE.test(name_1)) {
                var value = node.attrsMap[name_1];
                if (value) {
                    var range = node.rawAttrsMap[name_1];
                    if (name_1 === 'v-for') {
                        checkFor(node, "v-for=\"".concat(value, "\""), warn, range);
                    }
                    else if (name_1 === 'v-slot' || name_1[0] === '#') {
                        checkFunctionParameterExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else if (onRE.test(name_1)) {
                        checkEvent(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else {
                        checkExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                }
            }
        }
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn);
            }
        }
    }
    else if (node.type === 2) {
        checkExpression(node.expression, node.text, warn, node);
    }
}
function checkEvent(exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
        warn("avoid using JavaScript unary operator as property name: " +
            "\"".concat(keywordMatch[0], "\" in expression ").concat(text.trim()), range);
    }
    checkExpression(exp, text, warn, range);
}
function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}
function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
        try {
            new Function("var ".concat(ident, "=_"));
        }
        catch (e) {
            warn("invalid ".concat(type, " \"").concat(ident, "\" in expression: ").concat(text.trim()), range);
        }
    }
}
function checkExpression(exp, text, warn, range) {
    try {
        new Function("return ".concat(exp));
    }
    catch (e) {
        var keywordMatch = exp
            .replace(stripStringRE, '')
            .match(prohibitedKeywordRE);
        if (keywordMatch) {
            warn("avoid using JavaScript keyword as property name: " +
                "\"".concat(keywordMatch[0], "\"\n  Raw expression: ").concat(text.trim()), range);
        }
        else {
            warn("invalid expression: ".concat(e.message, " in\n\n") +
                "    ".concat(exp, "\n\n") +
                "  Raw expression: ".concat(text.trim(), "\n"), range);
        }
    }
}
function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
        new Function(exp, '');
    }
    catch (e) {
        warn("invalid function parameter expression: ".concat(e.message, " in\n\n") +
            "    ".concat(exp, "\n\n") +
            "  Raw expression: ".concat(text.trim(), "\n"), range);
    }
}

var range = 2;
function generateCodeFrame(source, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = source.length; }
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
                var lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    var pad = start - (count - lineLength) + 1;
                    var length_1 = end > count ? lineLength - pad : end - start;
                    res.push("   |  " + repeat(" ", pad) + repeat("^", length_1));
                }
                else if (j > i) {
                    if (end > count) {
                        var length_2 = Math.min(end - count, lineLength);
                        res.push("   |  " + repeat("^", length_2));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
function repeat(str, n) {
    var result = '';
    if (n > 0) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // eslint-disable-line
            if (n & 1)
                result += str;
            n >>>= 1;
            if (n <= 0)
                break;
            str += str;
        }
    }
    return result;
}

function createFunction(code, errors) {
    try {
        return new Function(code);
    }
    catch (err) {
        errors.push({ err: err, code: code });
        return noop;
    }
}
function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
        options = extend({}, options);
        var warn = options.warn || warn$2;
        delete options.warn;
        /* istanbul ignore if */
        if (true) {
            // detect possible CSP restriction
            try {
                new Function('return 1');
            }
            catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                    warn('It seems you are using the standalone build of Vue.js in an ' +
                        'environment with Content Security Policy that prohibits unsafe-eval. ' +
                        'The template compiler cannot work in this environment. Consider ' +
                        'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                        'templates into render functions.');
                }
            }
        }
        // check cache
        var key = options.delimiters
            ? String(options.delimiters) + template
            : template;
        if (cache[key]) {
            return cache[key];
        }
        // compile
        var compiled = compile(template, options);
        // check compilation errors/tips
        if (true) {
            if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                    compiled.errors.forEach(function (e) {
                        warn("Error compiling template:\n\n".concat(e.msg, "\n\n") +
                            generateCodeFrame(template, e.start, e.end), vm);
                    });
                }
                else {
                    warn("Error compiling template:\n\n".concat(template, "\n\n") +
                        compiled.errors.map(function (e) { return "- ".concat(e); }).join('\n') +
                        '\n', vm);
                }
            }
            if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                    compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
                }
                else {
                    compiled.tips.forEach(function (msg) { return tip(msg, vm); });
                }
            }
        }
        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
            return createFunction(code, fnGenErrors);
        });
        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        if (true) {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn("Failed to generate render function:\n\n" +
                    fnGenErrors
                        .map(function (_a) {
                        var err = _a.err, code = _a.code;
                        return "".concat(err.toString(), " in\n\n").concat(code, "\n");
                    })
                        .join('\n'), vm);
            }
        }
        return (cache[key] = res);
    };
}

function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
        function compile(template, options) {
            var finalOptions = Object.create(baseOptions);
            var errors = [];
            var tips = [];
            var warn = function (msg, range, tip) {
                (tip ? tips : errors).push(msg);
            };
            if (options) {
                if ( true && options.outputSourceRange) {
                    // $flow-disable-line
                    var leadingSpaceLength_1 = template.match(/^\s*/)[0].length;
                    warn = function (msg, range, tip) {
                        var data = typeof msg === 'string' ? { msg: msg } : msg;
                        if (range) {
                            if (range.start != null) {
                                data.start = range.start + leadingSpaceLength_1;
                            }
                            if (range.end != null) {
                                data.end = range.end + leadingSpaceLength_1;
                            }
                        }
                        (tip ? tips : errors).push(data);
                    };
                }
                // merge custom modules
                if (options.modules) {
                    finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                }
                // merge custom directives
                if (options.directives) {
                    finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                }
                // copy other options
                for (var key in options) {
                    if (key !== 'modules' && key !== 'directives') {
                        finalOptions[key] = options[key];
                    }
                }
            }
            finalOptions.warn = warn;
            var compiled = baseCompile(template.trim(), finalOptions);
            if (true) {
                detectErrors(compiled.ast, warn);
            }
            compiled.errors = errors;
            compiled.tips = tips;
            return compiled;
        }
        return {
            compile: compile,
            compileToFunctions: createCompileToFunctionFn(compile)
        };
    };
}

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
        optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    };
});

var _a = createCompiler(baseOptions), compileToFunctions = _a.compileToFunctions;

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
}
// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser
    ? getShouldDecode(true)
    : false;

var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
});
var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
         true &&
            warn$2("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
        return this;
    }
    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
        var template = options.template;
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {
                    template = idToTemplate(template);
                    /* istanbul ignore if */
                    if ( true && !template) {
                        warn$2("Template element not found or is empty: ".concat(options.template), this);
                    }
                }
            }
            else if (template.nodeType) {
                template = template.innerHTML;
            }
            else {
                if (true) {
                    warn$2('invalid template option:' + template, this);
                }
                return this;
            }
        }
        else if (el) {
            // @ts-expect-error
            template = getOuterHTML(el);
        }
        if (template) {
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile');
            }
            var _a = compileToFunctions(template, {
                outputSourceRange: "development" !== 'production',
                shouldDecodeNewlines: shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
            }, this), render = _a.render, staticRenderFns = _a.staticRenderFns;
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile end');
                measure("vue ".concat(this._name, " compile"), 'compile', 'compile end');
            }
        }
    }
    return mount.call(this, el, hydrating);
};
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
    if (el.outerHTML) {
        return el.outerHTML;
    }
    else {
        var container = document.createElement('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML;
    }
}
Vue.compile = compileToFunctions;




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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./resources/js/chart.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_Chart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Chart.vue */ "./resources/js/components/Chart.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#chart-admin',
  components: {
    ChartAdmin: _components_Chart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: {
    adminId: document.getElementById('chart-admin').getAttribute('data-admin-id'),
    artistId: document.getElementById('chart-admin').getAttribute('data-artist-id'),
    employeeId: document.getElementById('chart-admin').getAttribute('data-employee-id')
  }
});
})();

/******/ })()
;