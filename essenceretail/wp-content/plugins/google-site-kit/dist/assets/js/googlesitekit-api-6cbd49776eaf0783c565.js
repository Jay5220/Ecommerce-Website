(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[5],{1:function(t,e){t.exports=googlesitekit.i18n},10:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"k",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return v}));var r="core/user",i="connected_url_mismatch",a="__global",o="googlesitekit_authenticate",u="googlesitekit_setup",c="googlesitekit_view_dashboard",s="googlesitekit_manage_options",l="googlesitekit_read_shared_module_data",f="googlesitekit_manage_module_sharing_options",d="googlesitekit_delegate_module_sharing_management",v="googlesitekit_update_plugins"},242:function(t,e,n){"use strict";(function(t){var r=n(61),i=n.n(r),a=n(243),o=t._googlesitekitAPIFetchData||{},u=o.nonce,c=o.nonceEndpoint,s=o.preloadedData,l=o.rootURL;i.a.nonceEndpoint=c,i.a.nonceMiddleware=i.a.createNonceMiddleware(u),i.a.rootURLMiddleware=i.a.createRootURLMiddleware(l),i.a.preloadingMiddleware=Object(a.a)(s),i.a.use(i.a.nonceMiddleware),i.a.use(i.a.mediaUploadMiddleware),i.a.use(i.a.rootURLMiddleware),i.a.use(i.a.preloadingMiddleware),e.default=i.a}).call(this,n(25))},243:function(t,e,n){"use strict";var r=n(230);e.a=function(t){var e=Object.keys(t).reduce((function(e,n){return e[Object(r.getStablePath)(n)]=t[n],e}),{}),n=!1;return function(t,i){if(n)return i(t);setTimeout((function(){n=!0}),1e3);var a=t.parse,o=void 0===a||a,u=t.path;if("string"==typeof t.path){var c,s=(null===(c=t.method)||void 0===c?void 0:c.toUpperCase())||"GET",l=Object(r.getStablePath)(u);if(o&&"GET"===s&&e[l]){var f=Promise.resolve(e[l].body);return delete e[l],f}if("OPTIONS"===s&&e[s]&&e[s][l]){var d=Promise.resolve(e[s][l]);return delete e[s][l],d}}return i(t)}}},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},35:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return m}));var r=n(90),i=t._googlesitekitTrackingData||{},a=i.activeModules,o=void 0===a?[]:a,u=i.isSiteKitScreen,c=i.trackingEnabled,s=i.trackingID,l=i.referenceSiteURL,f=i.userIDHash,d=i.isAuthenticated,v={activeModules:o,trackingEnabled:c,trackingID:s,referenceSiteURL:l,userIDHash:f,isSiteKitScreen:u,userRoles:i.userRoles,isAuthenticated:d,pluginVersion:"1.101.0"},p=Object(r.a)(v),g=p.enableTracking,b=p.disableTracking,h=(p.isTrackingEnabled,p.initializeSnippet),m=p.trackEvent;function y(t){t?g():b()}u&&c&&h()}).call(this,n(25))},37:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"f",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return O})),n.d(e,"b",(function(){return k}));var r=n(5),i=n.n(r),a=n(17),o=n.n(a),u=(n(26),n(8));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l,f="googlesitekit_",d="".concat(f).concat("1.101.0","_").concat(t._googlesitekitBaseData.storagePrefix,"_"),v=["sessionStorage","localStorage"],p=[].concat(v),g=function(){var e=o()(i.a.mark((function e(n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[n]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,a="__storage_test__",r.setItem(a,a),r.removeItem(a),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==r.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();function b(){return h.apply(this,arguments)}function h(){return(h=o()(i.a.mark((function e(){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===l){e.next=2;break}return e.abrupt("return",l);case 2:n=c(p),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=15;break}if(a=r.value,!l){e.next=9;break}return e.abrupt("continue",13);case 9:return e.next=11,g(a);case 11:if(!e.sent){e.next=13;break}l=t[a];case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return void 0===l&&(l=null),e.abrupt("return",l);case 25:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))).apply(this,arguments)}var m=function(){var t=o()(i.a.mark((function t(e){var n,r,a,o,u,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(n=t.sent)){t.next=10;break}if(!(r=n.getItem("".concat(d).concat(e)))){t.next=10;break}if(a=JSON.parse(r),o=a.timestamp,u=a.ttl,c=a.value,s=a.isError,!o||u&&!(Math.round(Date.now()/1e3)-o<u)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:c,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=o()(i.a.mark((function e(n,r){var a,o,c,s,l,f,v,p,g=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g.length>2&&void 0!==g[2]?g[2]:{},o=a.ttl,c=void 0===o?u.b:o,s=a.timestamp,l=void 0===s?Math.round(Date.now()/1e3):s,f=a.isError,v=void 0!==f&&f,e.next=3,b();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(d).concat(n),JSON.stringify({timestamp:l,ttl:c,value:r,isError:v})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=o()(i.a.mark((function e(n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:if(!(r=e.sent)){e.next=14;break}return e.prev=4,a=n.startsWith(f)?n:"".concat(d).concat(n),r.removeItem(a),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=o()(i.a.mark((function e(){var n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:if(!(n=e.sent)){e.next=14;break}for(e.prev=4,r=[],a=0;a<n.length;a++)0===(o=n.key(a)).indexOf(f)&&r.push(o);return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var t=o()(i.a.mark((function t(){var e,n,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!t.sent){t.next=25;break}return t.next=6,O();case 6:e=t.sent,n=c(e),t.prev=8,n.s();case 10:if((r=n.n()).done){t.next=16;break}return a=r.value,t.next=14,w(a);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),n.e(t.t0);case 21:return t.prev=21,n.f(),t.finish(21);case 24:return t.abrupt("return",!0);case 25:return t.abrupt("return",!1);case 26:case"end":return t.stop()}}),t,null,[[8,18,21,24]])})));return function(){return t.apply(this,arguments)}}()}).call(this,n(25))},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(15),i=n.n(r),a=n(9),o=n.n(a),u=n(41),c=n(47),s=function(t){o()(Object(c.a)(t),u.e);var e=t.split("-"),n=i()(e,3),r=n[0],a=n[1],s=n[2];return new Date(r,a-1,s)}},39:function(t,e,n){"use strict";(function(t){var r,i;n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=new Set((null===(r=t)||void 0===r||null===(i=r._googlesitekitBaseData)||void 0===i?void 0:i.enabledFeatures)||[]),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e instanceof Set&&e.has(t)}}).call(this,n(25))},41:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var r="Date param must construct to a valid date instance or be a valid date instance itself.",i="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',o=3600,u=86400},42:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(42),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var n=t.split("-");return 3===n.length&&Object(r.a)(new Date(t))}},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return f}));n(13);var r=n(1),i="missing_required_scopes",a="insufficientPermissions",o="forbidden";function u(t){return(null==t?void 0:t.code)===i}function c(t){var e;return[a,o].includes(null==t||null===(e=t.data)||void 0===e?void 0:e.reason)}function s(t){var e;return!!(null==t||null===(e=t.data)||void 0===e?void 0:e.reconnectURL)}function l(t,e){return!(!(null==e?void 0:e.storeName)||c(t)||u(t)||s(t))}function f(t){return"internal_server_error"===(null==t?void 0:t.code)?Object(r.__)("There was a critical error on this website while fetching data.","google-site-kit"):"invalid_json"===(null==t?void 0:t.code)?Object(r.__)("The server provided an invalid response.","google-site-kit"):null==t?void 0:t.message}},54:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return c}));var r=n(95);function i(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,e){try{return new URL(e,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof e?e:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function u(t){return/^#\w[A-Za-z0-9-_]*$/.test(t)}function c(t,e){if(!Object(r.a)(t))return t;if(t.length<=e)return t;var n=new URL(t),i=t.replace(n.origin,"");if(i.length<e)return i;var a=i.length-Math.floor(e)+1;return"…"+i.substr(a)}},583:function(t,e,n){"use strict";(function(t){var r=n(5),i=n.n(r),a=n(17),o=n.n(a),u=n(9),c=n.n(u),s=n(242),l=n(261),f=n(37),d=n(8),v=n(50),p=n(664),g=n(10),b=!0,h=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=[t,e,n].filter((function(t){return!!t&&t.length}));return 3===i.length&&r&&r.constructor===Object&&Object.keys(r).length&&i.push(Object(d.y)(r)),i.join("::")},m=function(e){var n,r,i,a=null===(n=t.googlesitekit)||void 0===n||null===(r=n.data)||void 0===r||null===(i=r.dispatch)||void 0===i?void 0:i.call(r,g.a);a&&(Object(v.f)(e)?a.setPermissionScopeError(e):Object(v.c)(e)&&a.setAuthError(e))},y=function(){var e=o()(i.a.mark((function e(n,r,a){var o,u,v,g,b,y,w,k,j,_,x,D,S,E,P,N,I,L=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=L.length>3&&void 0!==L[3]?L[3]:{},u=o.bodyParams,v=o.cacheTTL,g=void 0===v?d.b:v,b=o.method,y=void 0===b?"GET":b,w=o.queryParams,k=o.useCache,j=void 0===k?void 0:k,_=o.signal,c()(n,"`type` argument for requests is required."),c()(r,"`identifier` argument for requests is required."),c()(a,"`datapoint` argument for requests is required."),x="GET"===y&&(void 0!==j?j:O()),D=h(n,r,a,w),!x){e.next=18;break}return e.next=9,Object(f.d)(D);case 9:if(S=e.sent,E=S.cacheHit,P=S.value,!S.isError){e.next=16;break}throw m(P),P;case 16:if(!E){e.next=18;break}return e.abrupt("return",P);case 18:return e.prev=18,e.next=21,Object(s.default)({data:u,method:y,signal:_,path:Object(l.a)("/google-site-kit/v1/".concat(n,"/").concat(r,"/data/").concat(a),w)});case 21:if(N=e.sent,!x){e.next=25;break}return e.next=25,Object(f.f)(D,N,{ttl:g});case 25:return e.abrupt("return",N);case 28:if(e.prev=28,e.t0=e.catch(18),!(null==_?void 0:_.aborted)){e.next=32;break}throw e.t0;case 32:if(!(null===e.t0||void 0===e.t0||null===(I=e.t0.data)||void 0===I?void 0:I.cacheTTL)){e.next=35;break}return e.next=35,Object(f.f)(D,e.t0,{ttl:e.t0.data.cacheTTL,isError:!0});case 35:throw Object(p.a)({method:y,datapoint:a,type:n,identifier:r,error:e.t0}),m(e.t0),t.console.error("Google Site Kit API Error","method:".concat(y),"datapoint:".concat(a),"type:".concat(n),"identifier:".concat(r),'error:"'.concat(e.t0.message,'"')),e.t0;case 39:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var t=o()(i.a.mark((function t(e,n,r,a){var o,u,c,s,l,f,d,v=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.method,c=void 0===u?"POST":u,s=o.queryParams,l=void 0===s?{}:s,f=o.signal,t.next=3,y(e,n,r,{bodyParams:{data:a},method:c,queryParams:l,useCache:!1,signal:f});case 3:return d=t.sent,t.next=6,k(e,n,r);case 6:return t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),O=function(){return b},k=function(){var t=o()(i.a.mark((function t(e,n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h(e,n,r),t.next=3,Object(f.e)();case 3:t.sent.forEach((function(t){new RegExp("^".concat(f.a,"([^_]+_){2}").concat(a)).test(t)&&Object(f.c)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),j={invalidateCache:k,get:function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.cacheTTL,o=void 0===a?d.b:a,u=i.useCache,c=void 0===u?void 0:u,s=i.signal;return y(t,e,n,{cacheTTL:o,queryParams:r,useCache:c,signal:s})},set:w,setUsingCache:function(t){return b=!!t},usingCache:O};e.a=j}).call(this,n(25))},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(33);function i(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},63:function(t,e,n){"use strict";n.d(e,"d",(function(){return r.e})),n.d(e,"c",(function(){return r.d})),n.d(e,"b",(function(){return r.b})),n.d(e,"a",(function(){return r.a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return f.a})),n.d(e,"e",(function(){return v})),n.d(e,"j",(function(){return c.a}));var r=n(41),i=n(9),a=n.n(i),o=n(42),u=function(t){a()(Object(o.a)(t),r.c);var e="".concat(t.getMonth()+1),n="".concat(t.getDate());return[t.getFullYear(),e.length<2?"0".concat(e):e,n.length<2?"0".concat(n):n].join("-")},c=n(38),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=Object(c.a)(t);return n.setDate(n.getDate()-e),u(n)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]},f=n(47);var d=n(1);function v(){var t=function(t){return Object(d.sprintf)(
/* translators: %s: number of days */
Object(d._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},664:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),i=n.n(r),a=n(17),o=n.n(a),u=n(8),c=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=o()(i.a.mark((function t(e){var n,r,a,o,s,l,f,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.method,o=e.type,s=e.identifier,l=e.datapoint,(f=e.error)&&!c.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(n=f.data)||void 0===n?void 0:n.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(u.z)("api_error","".concat(a,":").concat(o,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},68:function(t,e,n){"use strict";(function(t){var r=n(0),i=n.n(r),a=n(11),o=n.n(a);function ChangeArrow(e){var n=e.direction,r=e.invertColor,i=e.width,a=e.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(n),{"googlesitekit-change-arrow--inverted-color":r}),width:i,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:i.a.string,invertColor:i.a.bool,width:i.a.number,height:i.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,n(3))},70:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var r=n(31),i=n.n(r),a=n(81),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(t,e)}};function u(t){var e,n="object"===i()(t)?t.toString():t;return null==n||null===(e=n.replace)||void 0===e?void 0:e.call(n,/\/+$/,"")}},71:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return x}));var r=n(15),i=n.n(r),a=n(31),o=n.n(a),u=n(6),c=n.n(u),s=n(24),l=n.n(s),f=n(13),d=n(72),v=n.n(d),p=n(1);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=m(t,e),r=n.formatUnit,i=n.formatDecimal;try{return r()}catch(t){return i()}},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var n=Math.floor(t/60/60),r=Math.floor(t/60%60),i=Math.floor(t%60);return{hours:n,minutes:r,seconds:i,formatUnit:function(){var a=e.unitDisplay,o=b(b({unitDisplay:void 0===a?"short":a},l()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?j(i,b(b({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?j(i,b(b({},o),{},{unit:"second"})):"",r?j(r,b(b({},o),{},{unit:"minute"})):"",n?j(n,b(b({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(p.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),i);if(0===t)return e;var a=Object(p.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),r),o=Object(p.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),n);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?e:"",r?a:"",n?o:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),j(y(t),t%10==0?{}:e)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t),t%10==0?{}:e)):j(t,{signDisplay:"never",maximumFractionDigits:1})},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var n={};if("%"===e)n={style:"percent",maximumFractionDigits:2};else{if("s"===e)return h(t,{unitDisplay:"narrow"});e&&"string"==typeof e?n={style:"currency",currency:e}:Object(f.isPlainObject)(e)&&(n=b({},e))}var r=n,i=r.style,a=void 0===i?"metric":i;return"metric"===a?w(t):"duration"===a?h(t,e):j(t,n)},k=v()(console.warn),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,a=l()(e,["locale"]);try{return new Intl.NumberFormat(r,a).format(t)}catch(e){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(a)," ).format( ").concat(o()(t)," )"),e.message)}for(var u={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},c=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(a);f<d.length;f++){var v=i()(d[f],2),p=v[0],g=v[1];u[p]&&g===u[p]||(c.includes(p)||(s[p]=g))}try{return new Intl.NumberFormat(r,s).format(t)}catch(e){return new Intl.NumberFormat(r).format(t)}},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,i=e.style,a=void 0===i?"long":i,o=e.type,u=void 0===o?"conjunction":o;if(Intl.ListFormat){var c=new Intl.ListFormat(r,{style:a,type:u});return c.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=Object(f.get)(e,["_googlesitekitLegacyData","locale"]);if(n){var r=n.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,n(25))},8:function(t,e,n){"use strict";n.d(e,"z",(function(){return i.b})),n.d(e,"w",(function(){return a.a})),n.d(e,"A",(function(){return a.b})),n.d(e,"y",(function(){return l})),n.d(e,"l",(function(){return b})),n.d(e,"u",(function(){return h.c})),n.d(e,"v",(function(){return h.d})),n.d(e,"r",(function(){return h.b})),n.d(e,"k",(function(){return h.a})),n.d(e,"s",(function(){return O})),n.d(e,"e",(function(){return k})),n.d(e,"b",(function(){return j.b})),n.d(e,"a",(function(){return j.a})),n.d(e,"i",(function(){return j.f})),n.d(e,"g",(function(){return j.e})),n.d(e,"x",(function(){return j.j})),n.d(e,"h",(function(){return _.b})),n.d(e,"p",(function(){return _.c})),n.d(e,"d",(function(){return _.a})),n.d(e,"n",(function(){return x.b})),n.d(e,"j",(function(){return x.a})),n.d(e,"t",(function(){return x.d})),n.d(e,"q",(function(){return D})),n.d(e,"o",(function(){return S})),n.d(e,"m",(function(){return E})),n.d(e,"c",(function(){return P})),n.d(e,"B",(function(){return N})),n.d(e,"f",(function(){return I}));var r=n(13),i=n(35),a=n(70),o=n(31),u=n.n(o),c=n(84),s=n.n(c),l=function(t){return s()(JSON.stringify(function t(e){var n={};return Object.keys(e).sort().forEach((function(r){var i=e[r];i&&"object"===u()(i)&&!Array.isArray(i)&&(i=t(i)),n[r]=i})),n}(t)))};var f=n(15),d=n.n(f);function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=function(t){for(var e=location.search.substr(1).split("&"),n={},r=0;r<e.length;r++)n[e[r].split("=")[0]]=decodeURIComponent(e[r].split("=")[1]);return t?n.hasOwnProperty(t)?decodeURIComponent(n[t].replace(/\+/g," ")):"":n},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(e.href);if(t)return n.searchParams&&n.searchParams.get?n.searchParams.get(t):g(t);var r,i={},a=v(n.searchParams.entries());try{for(a.s();!(r=a.n()).done;){var o=d()(r.value,2),u=o[0],c=o[1];i[u]=c}}catch(t){a.e(t)}finally{a.f()}return i},h=(n(88),n(71));function m(t){return t.replace(new RegExp("\\[([^\\]]+)\\]\\((https?://[^/]+\\.\\w+/?.*?)\\)","gi"),'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function y(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function w(t){return t.replace(/\n/gi,"<br>")}function O(t){for(var e=t,n=0,r=[m,y,w];n<r.length;n++){e=(0,r[n])(e)}return e}var k=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},j=n(63),_=n(89),x=n(54);function D(t){var e=parseFloat(t)||0;return!!Number.isInteger(e)&&e>0}function S(t){if("number"==typeof t)return!0;var e=(t||"").toString();return!!e&&!isNaN(e)}var E=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},P=function(t,e){if("0"===t||0===t||isNaN(t))return null;var n=(e-t)/t;return isNaN(n)||!Object(r.isFinite)(n)?null:n},N=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},I=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return Object(r.unescape)(e)}},81:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n(127),i=n.n(r)()(t)}).call(this,n(25))},88:function(t,e,n){"use strict";(function(t){n(49),n(53)}).call(this,n(25))},89:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(190),i=n(68),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var a=n.invertColor,o=void 0!==a&&a;return Object(r.a)(t.createElement(i.a,{direction:e>0?"up":"down",invertColor:o}))},o=function(t){var e,n,r,i,a,o,u,c,s,l,f,d,v,p,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.rows)||void 0===r?void 0:r.length)||(null==t||null===(i=t[0])||void 0===i||null===(a=i.data)||void 0===a||null===(o=a.rows)||void 0===o||null===(u=o[0])||void 0===u||null===(c=u.metrics)||void 0===c||null===(s=c[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(v=d.totals)||void 0===v||null===(p=v[0])||void 0===p||null===(g=p.values)||void 0===g?void 0:g[0])},u=function(t,e){return t>0&&e>0?t/e-1:t>0?1:e>0?-1:0}}).call(this,n(3))},893:function(t,e,n){"use strict";n.r(e),function(t){var r=n(583);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.a),e.default=r.a}.call(this,n(25))},90:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n(6),i=n.n(r),a=n(91),o=n(92);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,i=c(c({},s),e);i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(a.a)(i,n);return{enableTracking:function(){i.trackingEnabled=!0},disableTracking:function(){i.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(o.a)(i,n,u,r)}}}).call(this,n(25))},91:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n(59),i=n(33);function a(e,n){var a,o=Object(r.a)(n);return function(){var n=t.document;if(void 0===a&&(a=!!n.querySelector("script[".concat(i.b,"]"))),!a){var r=n.createElement("script");r.setAttribute(i.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(i.a),n.head.appendChild(r),o("js",new Date),o("config",e.trackingID,{send_page_view:e.isSiteKitScreen}),a=!0}}}}).call(this,n(25))},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(5),i=n.n(r),a=n(6),o=n.n(a),u=n(17),c=n.n(u),s=n(59),l=n(39);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n,r){var a=Object(s.a)(e);return function(){var e=c()(i.a.mark((function e(o,u,c,s){var f,v,p,g,b,h,m,y,w,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=t.activeModules,v=t.referenceSiteURL,p=t.trackingEnabled,g=t.trackingID,b=t.userIDHash,h=t.userRoles,m=void 0===h?[]:h,y=t.isAuthenticated,w=t.pluginVersion,p){e.next=3;break}return e.abrupt("return");case 3:return n(),O={send_to:g,event_category:o,event_label:c,value:s,dimension1:v,dimension2:m.join(","),dimension3:b,dimension4:w||"",dimension5:Array.from(l.a).join(","),dimension6:f.join(","),dimension7:y?1:0},e.abrupt("return",new Promise((function(t){var e,n,i=setTimeout((function(){r.console.warn('Tracking event "'.concat(u,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),c=function(){clearTimeout(i),t()};a("event",u,d(d({},O),{},{event_callback:c})),(null===(e=r._gaUserPrefs)||void 0===e||null===(n=e.ioo)||void 0===n?void 0:n.call(e))&&c()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}()}}},[[893,1,0]]]);