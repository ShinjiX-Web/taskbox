var Ct=Object.defineProperty;var Rt=(e,t,r)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ae=(e,t,r)=>(Rt(e,typeof t!="symbol"?t+"":t,r),r);import{j as v,T as Mt,D as $}from"./Task.stories-cab72d6e.js";import{r as Ot,a as xe,R as jt}from"./index-76fb7be0.js";var tt={exports:{}},rt={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=Ot;function Pt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Pt,Dt=G.useSyncExternalStore,Nt=G.useRef,It=G.useEffect,zt=G.useMemo,Ft=G.useDebugValue;rt.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=Nt(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=zt(function(){function a(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&i.hasValue){var p=i.value;if(s(p,y))return l=p}return l=y}if(p=l,At(u,y))return p;var S=n(y);return s!==void 0&&s(p,S)?p:(u=y,l=S)}var f=!1,u,l,d=r===void 0?null:r;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,r,n,s]);var c=Dt(e,o[0],o[1]);return It(function(){i.hasValue=!0,i.value=c},[c]),Ft(c),c};tt.exports=rt;var $t=tt.exports,C="default"in xe?jt:xe,Ce=Symbol.for("react-redux-context"),Re=typeof globalThis<"u"?globalThis:{};function Lt(){if(!C.createContext)return{};const e=Re[Ce]??(Re[Ce]=new Map);let t=e.get(C.createContext);return t||(t=C.createContext(null),e.set(C.createContext,t)),t}var N=Lt(),Wt=()=>{throw new Error("uSES not initialized!")};function _e(e=N){return function(){return C.useContext(e)}}var nt=_e(),st=Wt,Kt=e=>{st=e},Bt=(e,t)=>e===t;function Ut(e=N){const t=e===N?nt:_e(e),r=(n,s={})=>{const{equalityFn:o=Bt,devModeChecks:i={}}=typeof s=="function"?{equalityFn:s}:s,{store:c,subscription:a,getServerState:f,stabilityCheck:u,identityFunctionCheck:l}=t();C.useRef(!0);const d=C.useCallback({[n.name](p){return n(p)}}[n.name],[n,u,i.stabilityCheck]),y=st(a.addNestedSub,c.getState,f||c.getState,d,o);return C.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Me=Ut();function qt(e){e()}function Vt(){let e=null,t=null;return{clear(){e=null,t=null},notify(){qt(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Oe={notify(){},get:()=>[]};function Ht(e,t){let r,n=Oe,s=0,o=!1;function i(S){u();const h=n.subscribe(S);let g=!1;return()=>{g||(g=!0,h(),l())}}function c(){n.notify()}function a(){p.onStateChange&&p.onStateChange()}function f(){return o}function u(){s++,r||(r=t?t.addNestedSub(a):e.subscribe(a),n=Vt())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Oe)}function d(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const p={addNestedSub:i,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:f,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Xt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gt=Xt?C.useLayoutEffect:C.useEffect;function Yt({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:o="once"}){const i=C.useMemo(()=>{const f=Ht(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:o}},[e,n,s,o]),c=C.useMemo(()=>e.getState(),[e]);Gt(()=>{const{subscription:f}=i;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[i,c]);const a=t||N;return C.createElement(a.Provider,{value:i},r)}var Qt=Yt;function ot(e=N){const t=e===N?nt:_e(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var Jt=ot();function Zt(e=N){const t=e===N?Jt:ot(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var er=Zt();Kt($t.useSyncExternalStoreWithSelector);function T(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var tr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),je=tr,ue=()=>Math.random().toString(36).substring(7).split("").join("."),rr={INIT:`@@redux/INIT${ue()}`,REPLACE:`@@redux/REPLACE${ue()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ue()}`},J=rr;function ge(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function it(e,t,r){if(typeof e!="function")throw new Error(T(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(T(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(T(1));return r(it)(e,t)}let n=e,s=t,o=new Map,i=o,c=0,a=!1;function f(){i===o&&(i=new Map,o.forEach((h,g)=>{i.set(g,h)}))}function u(){if(a)throw new Error(T(3));return s}function l(h){if(typeof h!="function")throw new Error(T(4));if(a)throw new Error(T(5));let g=!0;f();const _=c++;return i.set(_,h),function(){if(g){if(a)throw new Error(T(6));g=!1,f(),i.delete(_),o=null}}}function d(h){if(!ge(h))throw new Error(T(7));if(typeof h.type>"u")throw new Error(T(8));if(typeof h.type!="string")throw new Error(T(17));if(a)throw new Error(T(9));try{a=!0,s=n(s,h)}finally{a=!1}return(o=i).forEach(_=>{_()}),h}function y(h){if(typeof h!="function")throw new Error(T(10));n=h,d({type:J.REPLACE})}function p(){const h=l;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(T(11));function _(){const w=g;w.next&&w.next(u())}return _(),{unsubscribe:h(_)}},[je](){return this}}}return d({type:J.INIT}),{dispatch:d,subscribe:l,getState:u,replaceReducer:y,[je]:p}}function nr(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:J.INIT})>"u")throw new Error(T(12));if(typeof r(void 0,{type:J.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(T(13))})}function sr(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let s;try{nr(r)}catch(o){s=o}return function(i={},c){if(s)throw s;let a=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],d=r[l],y=i[l],p=d(y,c);if(typeof p>"u")throw c&&c.type,new Error(T(14));f[l]=p,a=a||p!==y}return a=a||n.length!==Object.keys(i).length,a?f:i}}function Z(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function or(...e){return t=>(r,n)=>{const s=t(r,n);let o=()=>{throw new Error(T(15))};const i={getState:s.getState,dispatch:(a,...f)=>o(a,...f)},c=e.map(a=>a(i));return o=Z(...c)(s.dispatch),{...s,dispatch:o}}}function ir(e){return ge(e)&&"type"in e&&typeof e.type=="string"}var ct=Symbol.for("immer-nothing"),Pe=Symbol.for("immer-draftable"),R=Symbol.for("immer-state");function j(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var L=Object.getPrototypeOf;function I(e){return!!e&&!!e[R]}function A(e){var t;return e?at(e)||Array.isArray(e)||!!e[Pe]||!!((t=e.constructor)!=null&&t[Pe])||se(e)||oe(e):!1}var cr=Object.prototype.constructor.toString();function at(e){if(!e||typeof e!="object")return!1;const t=L(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===cr}function ee(e,t){ne(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function ne(e){const t=e[R];return t?t.type_:Array.isArray(e)?1:se(e)?2:oe(e)?3:0}function ye(e,t){return ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ut(e,t,r){const n=ne(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function ar(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function se(e){return e instanceof Map}function oe(e){return e instanceof Set}function z(e){return e.copy_||e.base_}function he(e,t){if(se(e))return new Map(e);if(oe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&at(e))return L(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[R];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const o=n[s],i=r[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(L(e),r)}function ke(e,t=!1){return ie(e)||I(e)||!A(e)||(ne(e)>1&&(e.set=e.add=e.clear=e.delete=ur),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ke(n,!0))),e}function ur(){j(2)}function ie(e){return Object.isFrozen(e)}var fr={};function F(e){const t=fr[e];return t||j(0,e),t}var H;function ft(){return H}function lr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ae(e,t){t&&(F("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function me(e){we(e),e.drafts_.forEach(dr),e.drafts_=null}function we(e){e===H&&(H=e.parent_)}function De(e){return H=lr(H,e)}function dr(e){const t=e[R];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ne(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[R].modified_&&(me(t),j(4)),A(e)&&(e=te(t,e),t.parent_||re(t,e)),t.patches_&&F("Patches").generateReplacementPatches_(r[R].base_,e,t.patches_,t.inversePatches_)):e=te(t,r,[]),me(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ct?e:void 0}function te(e,t,r){if(ie(t))return t;const n=t[R];if(!n)return ee(t,(s,o)=>Ie(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return re(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,i=!1;n.type_===3&&(o=new Set(s),s.clear(),i=!0),ee(o,(c,a)=>Ie(e,n,s,c,a,r,i)),re(e,s,!1),r&&e.patches_&&F("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Ie(e,t,r,n,s,o,i){if(I(s)){const c=o&&t&&t.type_!==3&&!ye(t.assigned_,n)?o.concat(n):void 0,a=te(e,s,c);if(ut(r,n,a),I(a))e.canAutoFreeze_=!1;else return}else i&&r.add(s);if(A(s)&&!ie(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;te(e,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&re(e,s)}}function re(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ke(t,r)}function pr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ft(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=ve;r&&(s=[n],o=X);const{revoke:i,proxy:c}=Proxy.revocable(s,o);return n.draft_=c,n.revoke_=i,c}var ve={get(e,t){if(t===R)return e;const r=z(e);if(!ye(r,t))return yr(e,r,t);const n=r[t];return e.finalized_||!A(n)?n:n===fe(e.base_,t)?(le(e),e.copy_[t]=Se(n,e)):n},has(e,t){return t in z(e)},ownKeys(e){return Reflect.ownKeys(z(e))},set(e,t,r){const n=lt(z(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=fe(z(e),t),o=s==null?void 0:s[R];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(ar(r,s)&&(r!==void 0||ye(e.base_,t)))return!0;le(e),be(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return fe(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,le(e),be(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=z(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){j(11)},getPrototypeOf(e){return L(e.base_)},setPrototypeOf(){j(12)}},X={};ee(ve,(e,t)=>{X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});X.deleteProperty=function(e,t){return X.set.call(this,e,t,void 0)};X.set=function(e,t,r){return ve.set.call(this,e[0],t,r,e[0])};function fe(e,t){const r=e[R];return(r?z(r):e)[t]}function yr(e,t,r){var s;const n=lt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function lt(e,t){if(!(t in e))return;let r=L(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=L(r)}}function be(e){e.modified_||(e.modified_=!0,e.parent_&&be(e.parent_))}function le(e){e.copy_||(e.copy_=he(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var hr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const i=this;return function(a=o,...f){return i.produce(a,u=>r.call(this,u,...f))}}typeof r!="function"&&j(6),n!==void 0&&typeof n!="function"&&j(7);let s;if(A(t)){const o=De(this),i=Se(t,void 0);let c=!0;try{s=r(i),c=!1}finally{c?me(o):we(o)}return Ae(o,n),Ne(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ct&&(s=void 0),this.autoFreeze_&&ke(s,!0),n){const o=[],i=[];F("Patches").generateReplacementPatches_(t,s,o,i),n(o,i)}return s}else j(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...c)=>this.produceWithPatches(i,a=>t(a,...c));let n,s;return[this.produce(t,r,(i,c)=>{n=i,s=c}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){A(e)||j(8),I(e)&&(e=dt(e));const t=De(this),r=Se(e,void 0);return r[R].isManual_=!0,we(t),r}finishDraft(e,t){const r=e&&e[R];(!r||!r.isManual_)&&j(9);const{scope_:n}=r;return Ae(n,t),Ne(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=F("Patches").applyPatches_;return I(e)?n(e,t):this.produce(e,s=>n(s,t))}};function Se(e,t){const r=se(e)?F("MapSet").proxyMap_(e,t):oe(e)?F("MapSet").proxySet_(e,t):pr(e,t);return(t?t.scope_:ft()).drafts_.push(r),r}function dt(e){return I(e)||j(10,e),pt(e)}function pt(e){if(!A(e)||ie(e))return e;const t=e[R];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=he(e,t.scope_.immer_.useStrictShallowCopy_)}else r=he(e,!0);return ee(r,(n,s)=>{ut(r,n,pt(s))}),t&&(t.finalized_=!1),r}var M=new hr,yt=M.produce;M.produceWithPatches.bind(M);M.setAutoFreeze.bind(M);M.setUseStrictShallowCopy.bind(M);M.applyPatches.bind(M);M.createDraft.bind(M);M.finishDraft.bind(M);function mr(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function wr(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function br(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ze=e=>Array.isArray(e)?e:[e];function Sr(e){const t=Array.isArray(e[0])?e[0]:e;return br(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function _r(e,t){const r=[],{length:n}=e;for(let s=0;s<n;s++)r.push(e[s].apply(null,t));return r}var gr=class{constructor(e){this.value=e}deref(){return this.value}},kr=typeof WeakRef<"u"?WeakRef:gr,vr=0,Fe=1;function Y(){return{s:vr,v:void 0,o:null,p:null}}function Ee(e,t={}){let r=Y();const{resultEqualityCheck:n}=t;let s,o=0;function i(){var l;let c=r;const{length:a}=arguments;for(let d=0,y=a;d<y;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let S=c.o;S===null&&(c.o=S=new WeakMap);const h=S.get(p);h===void 0?(c=Y(),S.set(p,c)):c=h}else{let S=c.p;S===null&&(c.p=S=new Map);const h=S.get(p);h===void 0?(c=Y(),S.set(p,c)):c=h}}const f=c;let u;if(c.s===Fe?u=c.v:(u=e.apply(null,arguments),o++),f.s=Fe,n){const d=((l=s==null?void 0:s.deref)==null?void 0:l.call(s))??s;d!=null&&n(d,u)&&(u=d,o!==0&&o--),s=typeof u=="object"&&u!==null||typeof u=="function"?new kr(u):u}return f.v=u,u}return i.clearCache=()=>{r=Y(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function ht(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...s)=>{let o=0,i=0,c,a={},f=s.pop();typeof f=="object"&&(a=f,f=s.pop()),mr(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...r,...a},{memoize:l,memoizeOptions:d=[],argsMemoize:y=Ee,argsMemoizeOptions:p=[],devModeChecks:S={}}=u,h=ze(d),g=ze(p),_=Sr(s),m=l(function(){return o++,f.apply(null,arguments)},...h),w=y(function(){i++;const k=_r(_,arguments);return c=m.apply(null,k),c},...g);return Object.assign(w,{resultFunc:f,memoizedResultFunc:m,dependencies:_,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>c,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var Er=ht(Ee),Tr=Object.assign((e,t=Er)=>{wr(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(o=>e[o]);return t(n,(...o)=>o.reduce((i,c,a)=>(i[r[a]]=c,i),{}))},{withTypes:()=>Tr});function mt(e){return({dispatch:r,getState:n})=>s=>o=>typeof o=="function"?o(r,n,e):s(o)}var xr=mt(),Cr=mt,Rr=(...e)=>{const t=ht(...e),r=Object.assign((...n)=>{const s=t(...n),o=(i,...c)=>s(I(i)?dt(i):i,...c);return Object.assign(o,s),o},{withTypes:()=>r});return r};Rr(Ee);var Mr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Z:Z.apply(null,arguments)},Or=e=>e&&typeof e.match=="function";function P(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(x(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>ir(n)&&n.type===e,r}var wt=class K extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,K.prototype)}static get[Symbol.species](){return K}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new K(...t[0].concat(this)):new K(...t.concat(this))}};function $e(e){return A(e)?yt(e,()=>{}):e}function Le(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(x(10));const n=r.insert(t,e);return e.set(t,n),n}function jr(e){return typeof e=="boolean"}var Pr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let i=new wt;return r&&(jr(r)?i.push(xr):i.push(Cr(r.extraArgument))),i},Ar="RTK_autoBatch",bt=e=>t=>{setTimeout(t,e)},Dr=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:bt(10),Nr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,o=!1,i=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?Dr:e.type==="callback"?e.queueNotification:bt(e.timeout),f=()=>{i=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),d=n.subscribe(l);return c.add(u),()=>{d(),c.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[Ar]),o=!s,o&&(i||(i=!0,a(f))),n.dispatch(u)}finally{s=!0}}})},Ir=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new wt(e);return n&&s.push(Nr(typeof n=="object"?n:void 0)),s},zr=!0;function St(e){const t=Pr(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ge(r))c=sr(r);else throw new Error(x(1));let a;typeof n=="function"?a=n(t):a=t();let f=Z;s&&(f=Mr({trace:!zr,...typeof s=="object"&&s}));const u=or(...a),l=Ir(u);let d=typeof i=="function"?i(l):l();const y=f(...d);return it(c,o,y)}function _t(e){const t={},r=[];let n;const s={addCase(o,i){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(x(28));if(c in t)throw new Error(x(29));return t[c]=i,s},addMatcher(o,i){return r.push({matcher:o,reducer:i}),s},addDefaultCase(o){return n=o,s}};return e(s),[t,r,n]}function Fr(e){return typeof e=="function"}function $r(e,t){let[r,n,s]=_t(t),o;if(Fr(e))o=()=>$e(e());else{const c=$e(e);o=()=>c}function i(c=o(),a){let f=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(I(u)){const y=l(u,a);return y===void 0?u:y}else{if(A(u))return yt(u,d=>l(d,a));{const d=l(u,a);if(d===void 0){if(u===null)return u;throw new Error(x(9))}return d}}return u},c)}return i.getInitialState=o,i}var Lr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",gt=(e=21)=>{let t="",r=e;for(;r--;)t+=Lr[Math.random()*64|0];return t},Wr=(e,t)=>Or(e)?e.match(t):e(t);function Kr(...e){return t=>e.some(r=>Wr(r,t))}var Br=["name","message","stack","code"],de=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},We=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},Ur=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Br)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},qr=(()=>{function e(t,r,n){const s=P(t+"/fulfilled",(a,f,u,l)=>({payload:a,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),o=P(t+"/pending",(a,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:a,requestStatus:"pending"}})),i=P(t+"/rejected",(a,f,u,l,d)=>({payload:l,error:(n&&n.serializeError||Ur)(a||"Rejected"),meta:{...d||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a){return(f,u,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(a):gt(),y=new AbortController;let p,S;function h(_){S=_,y.abort()}const g=async function(){var w,E;let _;try{let k=(w=n==null?void 0:n.condition)==null?void 0:w.call(n,a,{getState:u,extra:l});if(Hr(k)&&(k=await k),k===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const O=new Promise((b,D)=>{p=()=>{D({name:"AbortError",message:S||"Aborted"})},y.signal.addEventListener("abort",p)});f(o(d,a,(E=n==null?void 0:n.getPendingMeta)==null?void 0:E.call(n,{requestId:d,arg:a},{getState:u,extra:l}))),_=await Promise.race([O,Promise.resolve(r(a,{dispatch:f,getState:u,extra:l,requestId:d,signal:y.signal,abort:h,rejectWithValue:(b,D)=>new de(b,D),fulfillWithValue:(b,D)=>new We(b,D)})).then(b=>{if(b instanceof de)throw b;return b instanceof We?s(b.payload,d,a,b.meta):s(b,d,a)})])}catch(k){_=k instanceof de?i(null,d,a,k.payload,k.meta):i(k,d,a)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&i.match(_)&&_.meta.condition||f(_),_}();return Object.assign(g,{abort:h,requestId:d,arg:a,unwrap(){return g.then(Vr)}})}}return Object.assign(c,{pending:o,rejected:i,fulfilled:s,settled:Kr(i,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Vr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Hr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xr=Symbol.for("rtk-slice-createasyncthunk");function Gr(e,t){return`${e}/${t}`}function Yr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Xr];return function(s){const{name:o,reducerPath:i=o}=s;if(!o)throw new Error(x(11));typeof process<"u";const c=(typeof s.reducers=="function"?s.reducers(Jr()):s.reducers)||{},a=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(m,w){const E=typeof m=="string"?m:m.type;if(!E)throw new Error(x(12));if(E in f.sliceCaseReducersByType)throw new Error(x(13));return f.sliceCaseReducersByType[E]=w,u},addMatcher(m,w){return f.sliceMatchers.push({matcher:m,reducer:w}),u},exposeAction(m,w){return f.actionCreators[m]=w,u},exposeCaseReducer(m,w){return f.sliceCaseReducersByName[m]=w,u}};a.forEach(m=>{const w=c[m],E={reducerName:m,type:Gr(o,m),createNotation:typeof s.reducers=="function"};en(w)?rn(E,w,u,t):Zr(E,w,u)});function l(){const[m={},w=[],E=void 0]=typeof s.extraReducers=="function"?_t(s.extraReducers):[s.extraReducers],k={...m,...f.sliceCaseReducersByType};return $r(s.initialState,O=>{for(let b in k)O.addCase(b,k[b]);for(let b of f.sliceMatchers)O.addMatcher(b.matcher,b.reducer);for(let b of w)O.addMatcher(b.matcher,b.reducer);E&&O.addDefaultCase(E)})}const d=m=>m,y=new Map;let p;function S(m,w){return p||(p=l()),p(m,w)}function h(){return p||(p=l()),p.getInitialState()}function g(m,w=!1){function E(O){let b=O[m];return typeof b>"u"&&w&&(b=h()),b}function k(O=d){const b=Le(y,w,{insert:()=>new WeakMap});return Le(b,O,{insert:()=>{const D={};for(const[Tt,xt]of Object.entries(s.selectors??{}))D[Tt]=Qr(xt,O,h,w);return D}})}return{reducerPath:m,getSelectors:k,get selectors(){return k(E)},selectSlice:E}}const _={name:o,reducer:S,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:h,...g(i),injectInto(m,{reducerPath:w,...E}={}){const k=w??i;return m.inject({reducerPath:k,reducer:S},E),{..._,...g(k,!0)}}};return _}}function Qr(e,t,r,n){function s(o,...i){let c=t(o);return typeof c>"u"&&n&&(c=r()),e(c,...i)}return s.unwrapped=e,s}var kt=Yr();function Jr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Zr({type:e,reducerName:t,createNotation:r},n,s){let o,i;if("reducer"in n){if(r&&!tn(n))throw new Error(x(17));o=n.reducer,i=n.prepare}else o=n;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?P(e,i):P(e))}function en(e){return e._reducerDefinitionType==="asyncThunk"}function tn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function rn({type:e,reducerName:t},r,n,s){if(!s)throw new Error(x(18));const{payloadCreator:o,fulfilled:i,pending:c,rejected:a,settled:f,options:u}=r,l=s(e,o,u);n.exposeAction(t,l),i&&n.addCase(l.fulfilled,i),c&&n.addCase(l.pending,c),a&&n.addCase(l.rejected,a),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:i||Q,pending:c||Q,rejected:a||Q,settled:f||Q})}function Q(){}var nn=(e,t)=>{if(typeof e!="function")throw new Error(x(32))},Te="listenerMiddleware",sn=e=>{let{type:t,actionCreator:r,matcher:n,predicate:s,effect:o}=e;if(t)s=P(t).match;else if(r)t=r.type,s=r.match;else if(n)s=n;else if(!s)throw new Error(x(21));return nn(o),{predicate:s,type:t,effect:o}},on=Object.assign(e=>{const{type:t,predicate:r,effect:n}=sn(e);return{id:gt(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(x(22))}}},{withTypes:()=>on}),cn=Object.assign(P(`${Te}/add`),{withTypes:()=>cn});P(`${Te}/removeAll`);var an=Object.assign(P(`${Te}/remove`),{withTypes:()=>an});function x(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const un={tasks:[],status:"idle",error:null},pe=qr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),vt=kt({name:"taskbox",initialState:un,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(o=>o.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(pe.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(pe.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(pe.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:Ke}=vt.actions,fn=St({reducer:{taskbox:vt.reducer}}),mn=fn;function Et(){const e=Me(i=>[...i.taskbox.tasks.filter(f=>f.state==="TASK_PINNED"),...i.taskbox.tasks.filter(f=>f.state!=="TASK_PINNED")].filter(f=>f.state==="TASK_INBOX"||f.state==="TASK_PINNED")),{status:t}=Me(i=>i.taskbox),r=er(),n=i=>{r(Ke({id:i,newTaskState:"TASK_PINNED"}))},s=i=>{r(Ke({id:i,newTaskState:"TASK_ARCHIVED"}))},o=v.jsxs("div",{className:"loading-item",children:[v.jsx("span",{className:"glow-checkbox"}),v.jsxs("span",{className:"glow-text",children:[v.jsx("span",{children:"Loading"})," ",v.jsx("span",{children:"cool"})," ",v.jsx("span",{children:"state"})]})]});return t==="loading"?v.jsxs("div",{className:"list-items","data-testid":"loading",children:[o,o,o,o,o,o]},"loading"):e.length===0?v.jsx("div",{className:"list-items","data-testid":"empty",children:v.jsxs("div",{className:"wrapper-message",children:[v.jsx("span",{className:"icon-check"}),v.jsx("p",{className:"title-message",children:"You have no tasks"}),v.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):v.jsx("div",{className:"list-items","data-testid":"success",children:e.map(i=>v.jsx(Mt,{task:i,onPinTask:c=>n(c),onArchiveTask:c=>s(c)},i.id))},"success")}Et.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const W={tasks:[{...$.args.task,id:"1",title:"Task 1"},{...$.args.task,id:"2",title:"Task 2"},{...$.args.task,id:"3",title:"Task 3"},{...$.args.task,id:"4",title:"Task 4"},{...$.args.task,id:"5",title:"Task 5"},{...$.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},ce=({taskboxState:e,children:t})=>v.jsx(Qt,{store:St({reducer:{taskbox:kt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:o}=n.payload,i=r.tasks.findIndex(c=>c.id===s);i>=0&&(r.tasks[i].state=o)}}}).reducer}}),children:t}),ln={component:Et,title:"TaskList",decorators:[e=>v.jsx("div",{style:{padding:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},B={decorators:[e=>v.jsx(ce,{taskboxState:W,children:e()})]},U={decorators:[e=>{const t=[...W.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return v.jsx(ce,{taskboxState:{...W,tasks:t},children:e()})}]},q={decorators:[e=>v.jsx(ce,{taskboxState:{...W,status:"loading"},children:e()})]},V={decorators:[e=>v.jsx(ce,{taskboxState:{...W,tasks:[]},children:e()})]};var Be,Ue,qe;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(qe=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Ve,He,Xe;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>\r
          {story()}\r
        </Mockstore>;
  }]
}`,...(Xe=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Ge,Ye,Qe;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: 'loading'
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(Qe=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Je,Ze,et;V.parameters={...V.parameters,docs:{...(Je=V.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(et=(Ze=V.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const dn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],wn=Object.freeze(Object.defineProperty({__proto__:null,Default:B,Empty:V,Loading:q,MockedState:W,WithPinnedTasks:U,__namedExportsOrder:dn,default:ln},Symbol.toStringTag,{value:"Module"}));export{W as M,Qt as P,Et as T,Me as a,wn as b,pe as f,mn as s,er as u};
