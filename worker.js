!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={};var o={2:function(){return{"./index.js":{__wbindgen_object_drop_ref:function(e){return n[1].exports.__wbindgen_object_drop_ref(e)},__wbindgen_number_new:function(e){return n[1].exports.__wbindgen_number_new(e)},__wbindgen_string_new:function(e,t){return n[1].exports.__wbindgen_string_new(e,t)},__wbg_new_db45baf1426052b4:function(){return n[1].exports.__wbg_new_db45baf1426052b4()},__wbg_push_d01e624d96b4cd82:function(e,t){return n[1].exports.__wbg_push_d01e624d96b4cd82(e,t)},__wbg_apply_df841622788415e8:function(e,t,r){return n[1].exports.__wbg_apply_df841622788415e8(e,t,r)},__wbg_call_445af161ae71e490:function(e,t,r,o){return n[1].exports.__wbg_call_445af161ae71e490(e,t,r,o)},__wbindgen_debug_string:function(e,t){return n[1].exports.__wbindgen_debug_string(e,t)},__wbindgen_throw:function(e,t){return n[1].exports.__wbindgen_throw(e,t)}}}}};function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var n=[];return n.push(Promise.resolve().then(function(){t[e]||importScripts(s.p+""+e+".worker.js")})),({1:[2]}[e]||[]).forEach(function(e){var t=r[e];if(t)n.push(t);else{var l,i=o[e](),c=fetch(s.p+""+{2:"daf5f6bbbfd4126e2b3d"}[e]+".module.wasm");if(i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)l=Promise.all([WebAssembly.compileStreaming(c),i]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)l=WebAssembly.instantiateStreaming(c,i);else{l=c.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,i)})}n.push(r[e]=l.then(function(n){return s.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},s.m=e,s.c=n,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.w={},s(s.s=0)}([function(e,n,t){let r=t.e(1).then(t.bind(null,1)).catch(console.error).then(e=>{self.wasm=e});function o(e,n){n>self.max_int_deg&&(self.max_int_deg=n,self.max_int_deg%10==0&&(console.log(`Time to compute stems ${self.max_int_deg-10} to ${self.max_int_deg} : ${function(){let e=performance.now(),n=(e-i)/1e3;return i=e,n}()}`),console.log(`Total time to compute first ${self.max_int_deg} stems : ${c()}`))),self.postMessage({cmd:"addClass",x:n-e,y:e})}function s(e,n,t,r,o,s,l){self.postMessage({cmd:"addStructline",mult:e,source:{x:t-n,y:n,idx:r},target:{x:s-o,y:o,idx:l}})}self.max_int_deg=0;let l=performance.now(),i=l;function c(){return(performance.now()-l)/1e3}self.onmessage=e=>{if(!self.wasm)return void r.then(()=>self.onmessage(e));let n=e.data;n.cmd in a?(a[n.cmd](n),self.postMessage({cmd:"complete",data:n})):console.error(`Unknown command '${n.cmd}'`)};let a={resolve:function(e){self.p=e.p,self.algebra=self.wasm.WasmAlgebra.new_adem_algebra(e.p,2!=e.p),self.module=self.wasm.WasmModule.new_adem_module(self.algebra,e.module),self.cc=self.wasm.WasmCCDZ.new_ccdz(self.module),self.res=self.wasm.WasmResolution.new(cc,e.module,o,s),self.res.resolve_through_degree(e.maxDegree),console.log(`Total time : ${c()}`)},getCocycle:function(e){if(!self.res)return void console.log("No resolution yet, can't get cocycle");let n=e.class.y,t=e.class.x+e.class.y,r=self.res.get_cocycle_string(n,t,e.class.idx);2==self.p&&(r=r.replace(/P/g,"Sq")),self.postMessage({cmd:"cocycleResult",class:e.class,cocycle:r})}}}]);