self.webpackChunk([0],[function(t,e,n){"use strict";n.r(e),n.d(e,"Resolution",(function(){return w})),n.d(e,"Sseq",(function(){return v})),n.d(e,"SteenrodCalculator",(function(){return O})),n.d(e,"__wbindgen_object_drop_ref",(function(){return _})),n.d(e,"__wbindgen_object_clone_ref",(function(){return j})),n.d(e,"__wbindgen_string_new",(function(){return T})),n.d(e,"__wbg_call_ce7cf17fc6380443",(function(){return x})),n.d(e,"__wbindgen_debug_string",(function(){return S})),n.d(e,"__wbindgen_throw",(function(){return E})),n.d(e,"__wbindgen_rethrow",(function(){return z}));var r=n(8);const o=new Array(32);function i(t){return o[t]}o.fill(void 0),o.push(void 0,null,!0,!1);let u=o.length;function c(t){const e=i(t);return function(t){t<36||(o[t]=u,u=t)}(t),e}function f(t){u===o.length&&o.push(o.length+1);const e=u;return u=o[e],o[e]=t,e}let s=new("undefined"==typeof TextDecoder?n(4).TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let l=null;function a(){return null!==l&&l.buffer===r.h.buffer||(l=new Uint8Array(r.h.buffer)),l}function p(t,e){return s.decode(a().subarray(t,t+e))}let y=0;let g=new("undefined"==typeof TextEncoder?n(4).TextEncoder:TextEncoder)("utf-8");const h="function"==typeof g.encodeInto?function(t,e){return g.encodeInto(t,e)}:function(t,e){const n=g.encode(t);return e.set(n),{read:t.length,written:n.length}};function d(t,e,n){if(void 0===n){const n=g.encode(t),r=e(n.length);return a().subarray(r,r+n.length).set(n),y=n.length,r}let r=t.length,o=e(r);const i=a();let u=0;for(;u<r;u++){const e=t.charCodeAt(u);if(e>127)break;i[o+u]=e}if(u!==r){0!==u&&(t=t.slice(u)),o=n(o,r,r=u+3*t.length);const e=a().subarray(o+u,o+r);u+=h(t,e).written}return y=u,o}let b=null;function m(){return null!==b&&b.buffer===r.h.buffer||(b=new Int32Array(r.h.buffer)),b}class w{static __wrap(t){const e=Object.create(w.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.a(t)}static new(t){var e=r.i(f(t));return w.__wrap(e)}run(t){var e=d(t,r.f,r.g),n=y;r.j(this.ptr,e,n)}}class v{static __wrap(t){const e=Object.create(v.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.b(t)}static new(t){var e=r.k(f(t));return v.__wrap(e)}run(t){var e=d(t,r.f,r.g),n=y;r.l(this.ptr,e,n)}}class O{static __wrap(t){const e=Object.create(O.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.c(t)}static new(t){var e=r.q(t);return O.__wrap(e)}compute_basis(t){r.m(this.ptr,t)}evaluate_adem(t){try{var e=d(t,r.f,r.g),n=y;r.n(8,this.ptr,e,n);var o=m()[2],i=m()[3];return p(o,i)}finally{r.e(o,i)}}evaluate_milnor(t){try{var e=d(t,r.f,r.g),n=y;r.o(8,this.ptr,e,n);var o=m()[2],i=m()[3];return p(o,i)}finally{r.e(o,i)}}free(){var t=this.ptr;this.ptr=0,r.p(t)}}const _=function(t){c(t)},j=function(t){return f(i(t))},T=function(t,e){return f(p(t,e))},x=function(t,e,n){try{return f(i(t).call(i(e),i(n)))}catch(t){!function(t){r.d(f(t))}(t)}},S=function(t,e){var n=d(function t(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==n){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const n=e.length;let r="[";n>0&&(r+=t(e[0]));for(let o=1;o<n;o++)r+=", "+t(e[o]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let o;if(!(r.length>1))return toString.call(e);if(o=r[1],"Object"==o)try{return"Object("+JSON.stringify(e)+")"}catch(t){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:o}(i(e)),r.f,r.g),o=y;m()[t/4+1]=o,m()[t/4+0]=n},E=function(t,e){throw new Error(p(t,e))},z=function(t){throw c(t)}},,,,function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),f=r[n];n<i;f=r[++n])h(f)||!v(f)?u+=" "+f:u+=" "+c(f);return u},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=f),l(r,t,r.depth)}function f(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&j(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return b(o)||(o=l(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(d(e))return t.stylize(""+e,"number");if(g(e))return t.stylize(""+e,"boolean");if(h(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),_(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(j(n)){var f=n.name?": "+n.name:"";return t.stylize("[Function"+f+"]","special")}if(w(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return t.stylize(Date.prototype.toString.call(n),"date");if(_(n))return a(n)}var s,v="",T=!1,x=["{","}"];(y(n)&&(T=!0,x=["[","]"]),j(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(v=" "+RegExp.prototype.toString.call(n)),O(n)&&(v=" "+Date.prototype.toUTCString.call(n)),_(n)&&(v=" "+a(n)),0!==u.length||T&&0!=n.length?r<0?w(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=T?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)z(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,c,u):u.map((function(e){return p(t,n,r,c,e,T)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,v,x)):x[0]+v+x[1]}function a(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,f;if((f=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=f.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):f.set&&(c=t.stylize("[Setter]","special")),z(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(f.value)<0?(c=h(n)?l(t,f.value,null):l(t,f.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function h(t){return null===t}function d(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function w(t){return v(t)&&"[object RegExp]"===T(t)}function v(t){return"object"==typeof t&&null!==t}function O(t){return v(t)&&"[object Date]"===T(t)}function _(t){return v(t)&&("[object Error]"===T(t)||t instanceof Error)}function j(t){return"function"==typeof t}function T(t){return Object.prototype.toString.call(t)}function x(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(m(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;u[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else u[n]=function(){};return u[n]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=g,e.isNull=h,e.isNullOrUndefined=function(t){return null==t},e.isNumber=d,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=w,e.isObject=v,e.isDate=O,e.isError=_,e.isFunction=j,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(6);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(){var t=new Date,e=[x(t.getHours()),x(t.getMinutes()),x(t.getSeconds())].join(":");return[t.getDate(),S[t.getMonth()],e].join(" ")}function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",E(),e.format.apply(e,arguments))},e.inherits=n(7),e._extend=function(t,e){if(!e||!v(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var D="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(D&&t[D]){var e;if("function"!=typeof(e=t[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),D&&Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=D,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(P,e,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(5))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var f,s=[],l=!1,a=-1;function p(){l&&f&&(l=!1,f.length?s=f.concat(s):a=-1,s.length&&y())}function y(){if(!l){var t=c(p);l=!0;for(var e=s.length;e;){for(f=s,s=[];++a<e;)f&&f[a].run();a=-1,e=s.length}f=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new g(t,e)),1!==s.length||l||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(0);r.r()}]);