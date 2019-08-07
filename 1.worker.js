self.webpackChunk([1],[,function(t,r,n){"use strict";n.r(r),n.d(r,"WasmAlgebra",function(){return m}),n.d(r,"WasmCCDZFDModule",function(){return j}),n.d(r,"WasmCCDZFPModule",function(){return C}),n.d(r,"WasmFDModule",function(){return O}),n.d(r,"WasmFPModule",function(){return D}),n.d(r,"WasmResolutionCCDZFDModule",function(){return A}),n.d(r,"WasmResolutionCCDZFPModule",function(){return F}),n.d(r,"WasmResolutionWithChainMapsCCDZFDModule",function(){return W}),n.d(r,"__wbindgen_object_drop_ref",function(){return v}),n.d(r,"__wbindgen_number_new",function(){return M}),n.d(r,"__wbindgen_string_new",function(){return $}),n.d(r,"__wbg_new_f1f0f3113e466334",function(){return k}),n.d(r,"__wbg_push_829cf1fbae322d44",function(){return x}),n.d(r,"__wbg_apply_a7d91e1867ff2ba0",function(){return E}),n.d(r,"__wbg_call_213fbeddd38b2990",function(){return S}),n.d(r,"__wbindgen_debug_string",function(){return Z}),n.d(r,"__wbindgen_throw",function(){return I});var e=n(2);function c(t,r){if(!(t instanceof r))throw new Error(`expected instance of ${r.name}`);return t.ptr}let o,s=0,i=new TextEncoder("utf-8"),u=null;function p(){return null!==u&&u.buffer===e.m.buffer||(u=new Uint8Array(e.m.buffer)),u}o="function"==typeof i.encodeInto?function(t){let r=t.length,n=e.k(r),c=0;{const r=p();for(;c<t.length;c++){const e=t.charCodeAt(c);if(e>127)break;r[n+c]=e}}if(c!==t.length){t=t.slice(c),n=e.l(n,r,r=c+3*t.length);const o=p().subarray(n+c,n+r);c+=i.encodeInto(t,o).written}return s=c,n}:function(t){let r=t.length,n=e.k(r),c=0;{const r=p();for(;c<t.length;c++){const e=t.charCodeAt(c);if(e>127)break;r[n+c]=e}}if(c!==t.length){const o=i.encode(t.slice(c));n=e.l(n,r,r=c+o.length),p().set(o,n+c),c+=o.length}return s=c,n};const f=new Array(32);f.fill(void 0),f.push(void 0,null,!0,!1);let a=f.length;function l(t){a===f.length&&f.push(f.length+1);const r=a;return a=f[r],f[r]=t,r}let _=null;function h(){return null!==_&&_.buffer===e.m.buffer||(_=new Int32Array(e.m.buffer)),_}let d=new TextDecoder("utf-8");function w(t,r){return d.decode(p().subarray(t,t+r))}function b(t){return f[t]}function g(t){const r=b(t);return function(t){t<36||(f[t]=a,a=t)}(t),r}function y(t){e.i(l(t))}class m{static __wrap(t){const r=Object.create(m.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.a(t)}static new_adem_algebra(t,r,n){const c=e.p(t,r,n);return m.__wrap(c)}compute_basis(t){e.n(this.ptr,t)}free(){const t=this.ptr;this.ptr=0,e.o(t)}}class j{static __wrap(t){const r=Object.create(j.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.b(t)}static new_ccdz(t){c(t,O);const r=e.r(t.ptr);return j.__wrap(r)}free(){const t=this.ptr;this.ptr=0,e.q(t)}}class C{static __wrap(t){const r=Object.create(C.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.c(t)}static new_ccdz(t){c(t,D);const r=e.t(t.ptr);return C.__wrap(r)}free(){const t=this.ptr;this.ptr=0,e.s(t)}}class O{static __wrap(t){const r=Object.create(O.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.d(t)}static new_adem_module(t,r){c(t,m);const n=e.v(t.ptr,o(r),s);return O.__wrap(n)}free(){const t=this.ptr;this.ptr=0,e.u(t)}}class D{static __wrap(t){const r=Object.create(D.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.e(t)}static new_adem_module(t,r){c(t,m);const n=e.x(t.ptr,o(r),s);return D.__wrap(n)}free(){const t=this.ptr;this.ptr=0,e.w(t)}}class A{static __wrap(t){const r=Object.create(A.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.f(t)}static new(t,r,n,o){c(t,j);const s=e.A(t.ptr,r,l(n),l(o));return A.__wrap(s)}resolve_through_degree(t){e.B(this.ptr,t)}get_cocycle_string(t,r,n){e.z(8,this.ptr,t,r,n);const c=h(),o=w(c[2],c[3]).slice();return e.j(c[2],1*c[3]),o}free(){const t=this.ptr;this.ptr=0,e.y(t)}}class F{static __wrap(t){const r=Object.create(F.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.g(t)}static new(t,r,n,o){c(t,C);const s=e.E(t.ptr,r,l(n),l(o));return F.__wrap(s)}resolve_through_degree(t){e.F(this.ptr,t)}get_cocycle_string(t,r,n){e.D(8,this.ptr,t,r,n);const c=h(),o=w(c[2],c[3]).slice();return e.j(c[2],1*c[3]),o}free(){const t=this.ptr;this.ptr=0,e.C(t)}}class W{static __wrap(t){const r=Object.create(W.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,e.h(t)}static new(t,r){c(t,A),c(r,A);const n=e.I(t.ptr,r.ptr);return W.__wrap(n)}resolve_through_degree(t){e.J(this.ptr,t)}get_cocycle_string(t,r,n){e.H(8,this.ptr,t,r,n);const c=h(),o=w(c[2],c[3]).slice();return e.j(c[2],1*c[3]),o}free(){const t=this.ptr;this.ptr=0,e.G(t)}}const v=function(t){g(t)},M=function(t){return l(t)},$=function(t,r){return l(w(t,r))},k=function(){return l(new Array)},x=function(t,r){return b(t).push(b(r))},E=function(t,r,n){try{return l(b(t).apply(b(r),b(n)))}catch(t){y(t)}},S=function(t,r,n,e,c){try{return l(b(t).call(b(r),b(n),b(e),b(c)))}catch(t){y(t)}},Z=function(t,r){const n=function t(r){const n=typeof r;if("number"==n||"boolean"==n||null==r)return`${r}`;if("string"==n)return`"${r}"`;if("symbol"==n){const t=r.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==n){const t=r.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(r)){const n=r.length;let e="[";n>0&&(e+=t(r[0]));for(let c=1;c<n;c++)e+=", "+t(r[c]);return e+="]"}const e=/\[object ([^\]]+)\]/.exec(toString.call(r));let c;if(!(e.length>1))return toString.call(r);if("Object"==(c=e[1]))try{return"Object("+JSON.stringify(r)+")"}catch(t){return"Object"}return r instanceof Error?`${r.name}: ${r.message}\n${r.stack}`:c}(b(r)),e=o(n),c=s;h()[t/4+0]=e,h()[t/4+1]=c},I=function(t,r){throw new Error(w(t,r))}},function(t,r,n){"use strict";var e=n.w[t.i];t.exports=e;n(1);e.K()}]);