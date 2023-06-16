import{g as Qe,n as S,j as b,R as j,u as Ye,r as X}from"./index-b58cdd78.js";function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ze}=Object.prototype,{getPrototypeOf:oe}=Object,J=(e=>t=>{const n=Ze.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>J(t)===e),W=e=>t=>typeof t===e,{isArray:B}=Array,D=W("undefined");function et(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=T("ArrayBuffer");function tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const nt=W("string"),g=W("function"),Oe=W("number"),$=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,v=e=>{if(J(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=T("Date"),ot=T("File"),it=T("Blob"),at=T("FileList"),ct=e=>$(e)&&g(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=J(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},ut=T("URLSearchParams"),ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ae=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ne=e=>!D(e)&&e!==Ae;function te(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const o=e&&Te(t,s)||s;v(t[o])&&v(r)?t[o]=te(t[o],r):v(r)?t[o]=te({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const dt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&g(s)?e[o]=Se(s,n):e[o]=s},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Oe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Et=T("HTMLFormElement"),St=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Rt=T("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Ot=e=>{Pe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},At=()=>{},Nt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Ce={DIGIT:fe,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+fe},Pt=(e=16,t=Ce.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ct(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return k(r,(i,l)=>{const u=n(i,s+1);!D(u)&&(o[l]=u)}),t[s]=void 0,o}}return r};return n(e,0)},_t=T("AsyncFunction"),Ft=e=>e&&($(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:B,isArrayBuffer:Re,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:nt,isNumber:Oe,isBoolean:rt,isObject:$,isPlainObject:v,isUndefined:D,isDate:st,isFile:ot,isBlob:it,isRegExp:Rt,isFunction:g,isStream:ct,isURLSearchParams:ut,isTypedArray:wt,isFileList:at,forEach:k,merge:te,extend:dt,trim:ft,stripBOM:pt,inherits:ht,toFlatObject:mt,kindOf:J,kindOfTest:T,endsWith:yt,toArray:bt,forEachEntry:xt,matchAll:gt,isHTMLForm:Et,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:Pe,freezeMethods:Ot,toObjectSet:Tt,toCamelCase:St,noop:At,toFiniteNumber:Nt,findKey:Te,global:Ae,isContextDefined:Ne,ALPHABET:Ce,generateString:Pt,isSpecCompliantForm:Ct,toJSONObject:jt,isAsyncFn:_t,isThenable:Ft};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Bt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,o){return s=Fe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Lt(e){return a.isArray(e)&&!e.some(ne)}const Dt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!u&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,h,A){let E=d;if(d&&!A&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Lt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(E=a.toArray(d)))return h=Fe(h),E.forEach(function(I,Xe){!(a.isUndefined(I)||I===null)&&t.append(i===!0?de([h],Xe,o):i===null?h:h+"[]",c(I))}),!1}return ne(d)?!0:(t.append(de(A,h,o),c(d)),!1)}const p=[],x=Object.assign(Dt,{defaultVisitor:f,convertValue:c,isVisitable:ne});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(E,_){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(_)?_.trim():_,h,x))===!0&&y(E,h?h.concat(_):[_])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&V(e,this,t)}const Be=ie.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||kt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ut{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Ut,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It=typeof URLSearchParams<"u"?URLSearchParams:ie,vt=typeof FormData<"u"?FormData:null,qt=typeof Blob<"u"?Blob:null,zt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ht=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:It,FormData:vt,Blob:qt},isStandardBrowserEnv:zt,isStandardBrowserWebWorkerEnv:Ht,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return V(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ke(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),u=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Wt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Jt(r),s,n,0)}),n}return null}const $t={"Content-Type":void 0};function Vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Mt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Vt(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge($t)});const ae=K,Kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Yt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,u,c){const f=L(u);if(!f)throw new Error("header name must be a non-empty string");const p=a.findKey(s,f);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||u]=q(l))}const i=(l,u)=>a.forEach(l,(c,f)=>o(c,f,u));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Qt(t)?i(Gt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const l=t?Yt(o):String(o).trim();l!==o&&delete n[o],n[l]=q(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=L(i);r[l]||(Zt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(G.prototype);a.freezeMethods(G);const N=G;function Z(e,t){const n=this||ae,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ue(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function en(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tn=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const u=[];u.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),a.isString(o)&&u.push("path="+o),a.isString(i)&&u.push("domain="+i),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function nn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!nn(t)?rn(e,t):t}const sn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function on(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function an(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),f=r[o];i||(i=c),n[s]=u,r[s]=c;let p=o,x=0;for(;p!==s;)x+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=f&&c-f;return y?Math.round(x*1e3/y):void 0}}function ye(e,t){let n=0;const r=an(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,u=r(l),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:u||void 0,estimated:u&&i&&c?(i-o)/u:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const cn=typeof XMLHttpRequest<"u",ln=cn&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+d))}const f=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};en(function(E){n(E),u()},function(E){r(E),u()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||De;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||sn(f))&&e.xsrfCookieName&&tn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const x=on(f);if(x&&O.protocols.indexOf(x)===-1){r(new m("Unsupported protocol "+x+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Bt,xhr:ln};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const un={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function be(e){return ee(e),e.headers=N.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),un.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return ee(e),r.data=Z.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return Ue(r)||(ee(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof N?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,f,p){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:p},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,p){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,f,p)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function l(c,f,p){if(p in t)return r(c,f);if(p in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,f)=>s(we(c),we(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const p=u[f]||s,x=p(e[f],t[f],f);a.isUndefined(x)&&p!==l||(n[f]=x)}),n}const ve="1.4.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function fn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],u=l===void 0||i(l,o,e);if(u!==!0)throw new m("option "+o+" must be "+u,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const re={assertOptions:fn,validators:ce},P=re.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=N.concat(i,o);const l=[];let u=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(u=u&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let f,p=0,x;if(!u){const d=[be.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),x=d.length,f=Promise.resolve(n);p<x;)f=f.then(d[p++],d[p++]);return f}x=l.length;let y=n;for(p=0;p<x;){const d=l[p++],h=l[p++];try{y=d(y)}catch(A){h.call(this,A);break}}try{f=be.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,x=c.length;p<x;)f=f.then(c[p++],c[p++]);return f}getUri(t){t=F(this.defaults,t);const n=Ie(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new U(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const dn=le;function pn(e){return function(n){return e.apply(null,n)}}function hn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const mn=se;function qe(e){const t=new H(e),n=Se(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(F(e,s))},n}const w=qe(ae);w.Axios=H;w.CanceledError=U;w.CancelToken=dn;w.isCancel=Ue;w.VERSION=ve;w.toFormData=V;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=pn;w.isAxiosError=hn;w.mergeConfig=F;w.AxiosHeaders=N;w.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=mn;w.default=w;const ze=w;ze.defaults.baseURL="https://648ada7a17f1536d65e9d634.mockapi.io";const yn=async(e,t)=>(await ze.get(`/users?page=${e}&limit=3`,{signal:t})).data;var He={exports:{}},bn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wn=bn,xn=wn;function Me(){}function Je(){}Je.resetWarningCache=Me;var gn=function(){function e(r,s,o,i,l,u){if(u!==xn){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Je,resetWarningCache:Me};return n.PropTypes=n,n};He.exports=gn();var En=He.exports;const R=Qe(En),Sn=S.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 214px;
    left: 0;
    display: block;
    height: 8px;
    width: 380px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`,Rn=S.div`
  height: 168px;
  width: 308px;
  margin-bottom: 88px;
`,On=S.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`,Tn=S.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  overflow: hidden;
`,ge=S.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: #ebd8ff;

  &:nth-of-type(1) {
    margin-bottom: 16px;
  }
`,An=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  margin-top: 26px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`,Nn="/goit-test/assets/picture-9f4b25d6.png",Pn="/goit-test/assets/logo-aec7c177.svg",We=({avatar:e,tweets:t,followers:n})=>b.jsxs(Sn,{children:[b.jsx(On,{src:Pn,alt:"logo"}),b.jsx(Rn,{children:b.jsx("img",{src:Nn,alt:"picture"})}),b.jsx(Tn,{children:b.jsx("img",{src:e,alt:""})}),b.jsxs(ge,{children:[t," tweets"]}),b.jsxs(ge,{children:[n.toLocaleString("en-US")," followers"]}),b.jsx(An,{children:"Follow"})]});We.propTypes={avatar:R.string.isRequired,tweets:R.number.isRequired,followers:R.number.isRequired};const Cn=S.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
`,$e=({tweets:e})=>b.jsx(Cn,{children:e.map(({id:t,tweets:n,followers:r,avatar:s})=>b.jsx(We,{avatar:s,tweets:n,followers:r},t))});$e.propTypes={tweets:R.arrayOf(R.shape({id:R.string.isRequired,avatar:R.string.isRequired,tweets:R.number.isRequired,followers:R.number.isRequired}))};const jn=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #ebd8ff;
  background-color: #5735a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`,Ve=({loadMore:e})=>b.jsx(jn,{onClick:e,children:"load more"});Ve.propTypes={loadMore:R.func.isRequired};var Ke={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ee=j.createContext&&j.createContext(Ke),C=globalThis&&globalThis.__assign||function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},C.apply(this,arguments)},_n=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function Ge(e){return e&&e.map(function(t,n){return j.createElement(t.tag,C({key:n},t.attr),Ge(t.child))})}function Fn(e){return function(t){return j.createElement(Bn,C({attr:C({},e.attr)},t),Ge(e.child))}}function Bn(e){var t=function(n){var r=e.attr,s=e.size,o=e.title,i=_n(e,["attr","size","title"]),l=s||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),j.createElement("svg",C({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:u,style:C(C({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&j.createElement("title",null,o),e.children)};return Ee!==void 0?j.createElement(Ee.Consumer,null,function(n){return t(n)}):t(Ke)}function Ln(e){return Fn({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z",strokeWidth:"0",fill:"currentColor"}}]})(e)}const Dn=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`,kn=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5735a3;
  background-color: transparent;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`,Un=S.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #ebd8ff;
  background-color: #5735a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`,In=()=>{const e=Ye(),t=n=>{n.preventDefault(),e(-1)};return b.jsxs(Dn,{children:[b.jsx(kn,{onClick:t,children:b.jsx(Ln,{size:32})}),b.jsx(Un,{children:"filter"})]})},qn=()=>{const[e,t]=X.useState([]),[n,r]=X.useState(1);X.useEffect(()=>{const o=new AbortController,i=o.signal;return(async()=>{try{const u=await yn(n,i);t(c=>[...c,...u])}catch(u){if(u.name==="CanceledError")return;console.log(u)}})(),()=>{o.abort()}},[n]);const s=()=>{r(o=>o+1)};return b.jsxs("div",{children:[b.jsx(In,{}),b.jsx($e,{tweets:e}),n===4?null:b.jsx(Ve,{loadMore:s})]})};export{qn as default};
