!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={2:1},r={};var o={4:function(){return{"./index.js":{__wbindgen_object_clone_ref:function(e){return n[0].exports.__wbindgen_object_clone_ref(e)},__wbindgen_object_drop_ref:function(e){return n[0].exports.__wbindgen_object_drop_ref(e)},__wbindgen_string_new:function(e,t){return n[0].exports.__wbindgen_string_new(e,t)},__wbg_call_9a450f735fcf1a81:function(e,t,r){return n[0].exports.__wbg_call_9a450f735fcf1a81(e,t,r)},__wbindgen_debug_string:function(e,t){return n[0].exports.__wbindgen_debug_string(e,t)},__wbindgen_throw:function(e,t){return n[0].exports.__wbindgen_throw(e,t)},__wbindgen_rethrow:function(e){return n[0].exports.__wbindgen_rethrow(e)}}}}};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[];return n.push(Promise.resolve().then((function(){t[e]||importScripts(i.p+""+({}[e]||e)+".js")}))),({0:[4]}[e]||[]).forEach((function(e){var t=r[e];if(t)n.push(t);else{var s,u=o[e](),f=fetch(i.p+""+{4:"999b9a71154c363615a9"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)s=Promise.all([WebAssembly.compileStreaming(f),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)s=WebAssembly.instantiateStreaming(f,u);else{s=f.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}n.push(r[e]=s.then((function(n){return i.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.w={},i(i.s=3)}({3:function(e,n,t){self.promise=t.e(0).then(t.bind(null,0)).catch(console.error).then(e=>{self.sseq=e.Sseq.new(e=>self.postMessage(e))}),self.onmessage=e=>{if(!self.sseq)return void self.promise.then(()=>self.onmessage(e));let n=e.data;self.sseq.run(n)}}});