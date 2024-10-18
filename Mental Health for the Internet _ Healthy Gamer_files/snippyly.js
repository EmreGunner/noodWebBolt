var t=function(t){return new Promise((function(e,i){var o=document.getElementById("veltScript"),n=!1,s=!1,r="latest",a="";if(t&&(t.staging&&(n=t.staging),t.version&&(r=t.version),t.develop&&(s=t.develop),t.proxyDomain&&(a=t.proxyDomain)),(null==t?void 0:t.version)||(r="1.0.120"),o)e();else{var l=document.createElement("script");n?l.src="https://us-central1-snipply-sdk-staging.cloudfunctions.net/getprivatenpmpackagefile?packageName=sdk-staging&packageVersion=".concat(r&&"latest"!==r?r:"1.0.1","&filePath=velt.js&orgName=@veltdev"):s?l.src="https://us-central1-snipply-sdk-staging.cloudfunctions.net/getprivatenpmpackagefile?packageName=sdk-dev&packageVersion=".concat(r&&"latest"!==r?r:"1.0.1","&filePath=velt.js&orgName=@veltdev"):a?("/"===a[a.length-1]&&(a=a.slice(0,-1)),l.src="".concat(a,"/lib/sdk@").concat(r,"/velt.js")):l.src="https://cdn.jsdelivr.net/npm/@veltdev/sdk@".concat(r,"/velt.js"),l.id="veltScript",l.type="module",document.body.appendChild(l),l.onload=function(){e()},l.onerror=function(){i(new Error("Failed to load Velt script"))}}}))},e=function(e,i){return function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))}(void 0,void 0,void 0,(function(){var o,n;return function(t,e){var i,o,n,s,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(l){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(r=0)),r;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((n=(n=r.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(6===a[0]&&r.label<n[1]){r.label=n[1],n=a;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(a);break}n[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(s){switch(s.label){case 0:return s.trys.push([0,6,,7]),[4,t(null==i?void 0:i.options)];case 1:return s.sent(),o=window.Velt,i?[4,null==o?void 0:o.init(e,i)]:[3,3];case 2:return s.sent(),[3,5];case 3:return[4,null==o?void 0:o.init(e)];case 4:s.sent(),s.label=5;case 5:return(null==o?void 0:o.st)&&(null==o||o.st("client")),[2,o];case 6:return n=s.sent(),console.error(n),[2,null];case 7:return[2]}}))}))};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return i&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window.trustedTypes,c=d?d.emptyScript:"",h=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=v){var o,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:u.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,o,n;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,w=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,C=`<${y}>`,x=document,E=(t="")=>x.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,T=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,A=/"/g,L=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),j=new WeakMap,$=x.createTreeWalker(x,129,null,!1),V=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===M?"!--"===l[1]?r=_:void 0!==l[1]?r=T:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=null!=n?n:M,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?N:'"'===l[3]?A:I):r===A||r===I?r=N:r===_||r===T?r=M:(r=N,n=void 0);const h=r===N&&t[e+1].startsWith("/>")?" ":"";s+=r===M?i+C:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+b+h):i+b+(-2===d?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,o]};class P{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,d]=V(t,e);if(this.el=P.createElement(l,i),$.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=$.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?Z:"@"===e[1]?W:H})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(L.test(o.tagName)){const t=o.textContent.split(b),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),$.nextNode(),a.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===y)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(b,t+1));)a.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,o){var n,s,r,a;if(e===D)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=U(t,l._$AS(t,e.values),l,o)),e}class R{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);$.currentNode=n;let s=$.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new z(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new K(s,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=$.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{constructor(t,e,i,o){var n;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),S(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==F&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=P.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new R(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new P(t)),e}S(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new z(this.M(E()),this.M(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,i,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=U(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==D,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=U(this,o[i+r],e,r),a===D&&(a=this._$AH[r]),s||(s=!S(a)||a!==this._$AH[r]),a===F?t=F:t!==F&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.C(t)}C(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===F?void 0:t}}const G=g?g.emptyScript:"";class Z extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==F?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class W extends H{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=U(this,t,e,0))&&void 0!==i?i:F)===D)return;const o=this._$AH,n=t===F&&o!==F||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==F&&(o===F||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,Q;null==Y||Y(P,z),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.6");class q extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new z(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}q.finalized=!0,q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:q}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function it(t){return et({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=1,st=2,rt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=rt(class extends at{constructor(t){var e;if(super(t),t.type!==nt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return D}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dt extends at{constructor(t){if(super(t),this.it=F,t.type!==st)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||null==t)return this.ft=void 0,this.it=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}dt.directiveName="unsafeHTML",dt.resultType=1;const ct=rt(dt);class ht{}ht.Events={GUEST_MODE_SIGN_IN_DIALOG_SHOWN:"guestModeSignInDialogShown",GUEST_MODE_NAME_DIALOG_SHOWN:"guestModeNameDialogShown",GUEST_MODE_SIGN_IN_BANNER_SHOWN:"guestModeSignInBannerShown",GUEST_MODE_SIGN_IN_BUTTON_CLICKED:"guestModeSignInButtonClicked",PASSWORD_PROTECTED_MODAL_CLOSE_BUTTON_CLICKED:"passwordProtectedModalCloseButtonClicked",PASSWORD_PROTECTED_MODAL_OPEN_BUTTON_CLICKED:"passwordProtectedModalOpenButtonClicked",TOOLBAR_EXPANDED:"toolbarExpanded",TOOLBAR_COLLAPSED:"toolbarCollapsed",TOOLBAR_NOTIFICATION_CLICKED:"toolbarNotificationClicked",GUEST_MODE_SKIP_BUTTON_CLICKED:"guestModeSkipButtonClicked",GUEST_MODE_SIGN_IN_NUDGE_SHOWN:"guestModeSignInNudgeShown",GUEST_MODE_NAME_NUDGE_SHOWN:"guestModeNameNudgeShown",GUEST_MODE_SIGN_IN_CLICKED:"guestModeSignInClicked",GUEST_MODE_PRESENT:"guestModePresent",GUEST_MODE_NAME_ADDED:"guestModeNameAdded",REVIEW_PASSWORD_ADDED:"reviewPasswordAdded",REVIEW_PASSWORD_REJECTED:"reviewPasswordRejected",REVIEW_PASSWORD_ACCEPTED:"reviewPasswordAccepted",PRIVATE_MODE_ENABLED:"privateModeEnabled",PRIVATE_MODE_DISABLED:"privateModeDisabled",VIEW_PROJECT_CLICKED:"viewProjectClicked",OPEN_MOBILE_CLICKED:"openMobileClicked",EXIT_REVIEW_MODE_CLICKED:"exitReviewModeClicked",SIGNOUT_CLICKED:"signoutClicked",SIGNIN_CLICKED:"signinClicked",SIGN_IN_REQUIRED:"signInRequired",USER_EMAIL_NOT_WHITELISTED:"userEmailNotWhitelisted",DOMAIN_NOT_WHITELISTED:"domainNotWhitelisted",DUPLICATE_SCRIPT_INSTALLED:"duplicateScriptInstalled",TOOLBAR_DISABLED:"toolbarDisabled"};const ut=["I9R2VqG45F5AgpIicnht"],pt={VELT_ROOT:"velt-root",VELT_PRESENCE:"velt-presence",VELT_CURSOR:"velt-cursor",VELT_COMMENT_TOOL:"velt-comment-tool",VELT_COMMENTS:"velt-comments",SNIPPYLY_TEXT_HIGHLIGHT:"snippyly-text-highlight",VELT_COMMENTS_SIDEBAR:"velt-comments-sidebar",VELT_HUDDLE:"velt-huddle",VELT_RECORDER_NOTES:"velt-recorder-notes",VELT_RECORDER_CONTROL_PANEL:"velt-recorder-control-panel",VELT_ARROWS:"velt-arrows",VELT_NOTIFICATIONS_HISTORY_PANEL:"velt-notifications-history-panel"},vt={ENABLE_URL_NAVIGATION:"enable-url-navigation",CURRENT_LOCATION_SUFFIX:"current-location-suffix"},mt={customBranding:{logo:{logoMark:{lightUrl:'\n\t\t\t\t<svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M8 8C8 3.58172 11.5817 0 16 0V0C20.4183 0 24 3.58172 24 8V16H16C11.5817 16 8 12.4183 8 8V8Z" fill="#FFCD2E"/>\n\t\t\t\t\t<path d="M0 29C0 22.3726 5.37258 17 12 17H24V29C24 35.6274 18.6274 41 12 41V41C5.37258 41 0 35.6274 0 29V29Z" fill="#A259FE"/>\n\t\t\t\t\t<path d="M25 19C25 12.3726 30.3726 7 37 7V7C43.6274 7 49 12.3726 49 19V19C49 25.6274 43.6274 31 37 31H25V19Z" fill="#FF7162"/>\n\t\t\t\t\t<path d="M25 32H33C37.4183 32 41 35.5817 41 40V40C41 44.4183 37.4183 48 33 48V48C28.5817 48 25 44.4183 25 40V32Z" fill="#0DCF82"/>\n\t\t\t\t</svg>\n\t\t\t\t',darkUrl:'\n\t\t\t\t<svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M8 8C8 3.58172 11.5817 0 16 0V0C20.4183 0 24 3.58172 24 8V16H16C11.5817 16 8 12.4183 8 8V8Z" fill="#FFCD2E"/>\n\t\t\t\t\t<path d="M0 29C0 22.3726 5.37258 17 12 17H24V29C24 35.6274 18.6274 41 12 41V41C5.37258 41 0 35.6274 0 29V29Z" fill="#A259FE"/>\n\t\t\t\t\t<path d="M25 19C25 12.3726 30.3726 7 37 7V7C43.6274 7 49 12.3726 49 19V19C49 25.6274 43.6274 31 37 31H25V19Z" fill="#FF7162"/>\n\t\t\t\t\t<path d="M25 32H33C37.4183 32 41 35.5817 41 40V40C41 44.4183 37.4183 48 33 48V48C28.5817 48 25 44.4183 25 40V32Z" fill="#0DCF82"/>\n\t\t\t\t</svg>\n\t\t\t\t'},wordMark:{lightUrl:'\n\t\t\t\t<svg width="257" height="65" viewBox="0 0 257 65" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M8 16C8 11.5817 11.5817 8 16 8V8C20.4183 8 24 11.5817 24 16V24H16C11.5817 24 8 20.4183 8 16V16Z" fill="#FFCD2E"/>\n\t\t\t\t\t<path d="M0 37C0 30.3726 5.37258 25 12 25H24V37C24 43.6274 18.6274 49 12 49V49C5.37258 49 0 43.6274 0 37V37Z" fill="#A259FE"/>\n\t\t\t\t\t<path d="M25 27C25 20.3726 30.3726 15 37 15V15C43.6274 15 49 20.3726 49 27V27C49 33.6274 43.6274 39 37 39H25V27Z" fill="#FF7162"/>\n\t\t\t\t\t<path d="M25 40H33C37.4183 40 41 43.5817 41 48V48C41 52.4183 37.4183 56 33 56V56C28.5817 56 25 52.4183 25 48V40Z" fill="#0DCF82"/>\n\t\t\t\t\t<path d="M73.4 46.28C71.4533 46.28 69.6933 45.9467 68.12 45.28C66.5733 44.6133 65.3467 43.6533 64.44 42.4C63.5333 41.1467 63.0667 39.6667 63.04 37.96H69.04C69.12 39.1067 69.52 40.0133 70.24 40.68C70.9867 41.3467 72 41.68 73.28 41.68C74.5867 41.68 75.6133 41.3733 76.36 40.76C77.1067 40.12 77.48 39.2933 77.48 38.28C77.48 37.4533 77.2267 36.7733 76.72 36.24C76.2133 35.7067 75.5733 35.2933 74.8 35C74.0533 34.68 73.0133 34.3333 71.68 33.96C69.8667 33.4267 68.3867 32.9067 67.24 32.4C66.12 31.8667 65.1467 31.08 64.32 30.04C63.52 28.9733 63.12 27.56 63.12 25.8C63.12 24.1467 63.5333 22.7067 64.36 21.48C65.1867 20.2533 66.3467 19.32 67.84 18.68C69.3333 18.0133 71.04 17.68 72.96 17.68C75.84 17.68 78.1733 18.3867 79.96 19.8C81.7733 21.1867 82.7733 23.1333 82.96 25.64H76.8C76.7467 24.68 76.3333 23.8933 75.56 23.28C74.8133 22.64 73.8133 22.32 72.56 22.32C71.4667 22.32 70.5867 22.6 69.92 23.16C69.28 23.72 68.96 24.5333 68.96 25.6C68.96 26.3467 69.2 26.9733 69.68 27.48C70.1867 27.96 70.8 28.36 71.52 28.68C72.2667 28.9733 73.3067 29.32 74.64 29.72C76.4533 30.2533 77.9333 30.7867 79.08 31.32C80.2267 31.8533 81.2133 32.6533 82.04 33.72C82.8667 34.7867 83.28 36.1867 83.28 37.92C83.28 39.4133 82.8933 40.8 82.12 42.08C81.3467 43.36 80.2133 44.3867 78.72 45.16C77.2267 45.9067 75.4533 46.28 73.4 46.28ZM107.855 23.84V46H102.215V43.2C101.495 44.16 100.548 44.92 99.375 45.48C98.2283 46.0133 96.975 46.28 95.615 46.28C93.8817 46.28 92.3483 45.92 91.015 45.2C89.6817 44.4533 88.6283 43.3733 87.855 41.96C87.1083 40.52 86.735 38.8133 86.735 36.84V23.84H92.335V36.04C92.335 37.8 92.775 39.16 93.655 40.12C94.535 41.0533 95.735 41.52 97.255 41.52C98.8017 41.52 100.015 41.0533 100.895 40.12C101.775 39.16 102.215 37.8 102.215 36.04V23.84H107.855ZM116.98 27.04C117.7 26.0267 118.687 25.1867 119.94 24.52C121.22 23.8267 122.674 23.48 124.3 23.48C126.194 23.48 127.9 23.9467 129.42 24.88C130.967 25.8133 132.18 27.1467 133.06 28.88C133.967 30.5867 134.42 32.5733 134.42 34.84C134.42 37.1067 133.967 39.12 133.06 40.88C132.18 42.6133 130.967 43.96 129.42 44.92C127.9 45.88 126.194 46.36 124.3 46.36C122.674 46.36 121.234 46.0267 119.98 45.36C118.754 44.6933 117.754 43.8533 116.98 42.84V56.56H111.38V23.84H116.98V27.04ZM128.7 34.84C128.7 33.5067 128.42 32.36 127.86 31.4C127.327 30.4133 126.607 29.6667 125.7 29.16C124.82 28.6533 123.86 28.4 122.82 28.4C121.807 28.4 120.847 28.6667 119.94 29.2C119.06 29.7067 118.34 30.4533 117.78 31.44C117.247 32.4267 116.98 33.5867 116.98 34.92C116.98 36.2533 117.247 37.4133 117.78 38.4C118.34 39.3867 119.06 40.1467 119.94 40.68C120.847 41.1867 121.807 41.44 122.82 41.44C123.86 41.44 124.82 41.1733 125.7 40.64C126.607 40.1067 127.327 39.3467 127.86 38.36C128.42 37.3733 128.7 36.2 128.7 34.84ZM158.29 34.44C158.29 35.24 158.236 35.96 158.13 36.6H141.93C142.063 38.2 142.623 39.4533 143.61 40.36C144.596 41.2667 145.81 41.72 147.25 41.72C149.33 41.72 150.81 40.8267 151.69 39.04H157.73C157.09 41.1733 155.863 42.9333 154.05 44.32C152.236 45.68 150.01 46.36 147.37 46.36C145.236 46.36 143.316 45.8933 141.61 44.96C139.93 44 138.61 42.6533 137.65 40.92C136.716 39.1867 136.25 37.1867 136.25 34.92C136.25 32.6267 136.716 30.6133 137.65 28.88C138.583 27.1467 139.89 25.8133 141.57 24.88C143.25 23.9467 145.183 23.48 147.37 23.48C149.476 23.48 151.356 23.9333 153.01 24.84C154.69 25.7467 155.983 27.04 156.89 28.72C157.823 30.3733 158.29 32.28 158.29 34.44ZM152.49 32.84C152.463 31.4 151.943 30.2533 150.93 29.4C149.916 28.52 148.676 28.08 147.21 28.08C145.823 28.08 144.65 28.5067 143.69 29.36C142.756 30.1867 142.183 31.3467 141.97 32.84H152.49ZM167.177 27.28C167.897 26.1067 168.831 25.1867 169.977 24.52C171.151 23.8533 172.484 23.52 173.977 23.52V29.4H172.497C170.737 29.4 169.404 29.8133 168.497 30.64C167.617 31.4667 167.177 32.9067 167.177 34.96V46H161.577V23.84H167.177V27.28ZM188.309 28.44H184.429V46H178.749V28.44H176.229V23.84H178.749V22.72C178.749 20 179.522 18 181.069 16.72C182.616 15.44 184.949 14.84 188.069 14.92V19.64C186.709 19.6133 185.762 19.84 185.229 20.32C184.696 20.8 184.429 21.6667 184.429 22.92V23.84H188.309V28.44ZM197.538 16.4V46H191.938V16.4H197.538ZM211.711 46.36C209.578 46.36 207.658 45.8933 205.951 44.96C204.244 44 202.898 42.6533 201.911 40.92C200.951 39.1867 200.471 37.1867 200.471 34.92C200.471 32.6533 200.964 30.6533 201.951 28.92C202.964 27.1867 204.338 25.8533 206.071 24.92C207.804 23.96 209.738 23.48 211.871 23.48C214.004 23.48 215.938 23.96 217.671 24.92C219.404 25.8533 220.764 27.1867 221.751 28.92C222.764 30.6533 223.271 32.6533 223.271 34.92C223.271 37.1867 222.751 39.1867 221.711 40.92C220.698 42.6533 219.311 44 217.551 44.96C215.818 45.8933 213.871 46.36 211.711 46.36ZM211.711 41.48C212.724 41.48 213.671 41.24 214.551 40.76C215.458 40.2533 216.178 39.5067 216.711 38.52C217.244 37.5333 217.511 36.3333 217.511 34.92C217.511 32.8133 216.951 31.2 215.831 30.08C214.738 28.9333 213.391 28.36 211.791 28.36C210.191 28.36 208.844 28.9333 207.751 30.08C206.684 31.2 206.151 32.8133 206.151 34.92C206.151 37.0267 206.671 38.6533 207.711 39.8C208.778 40.92 210.111 41.48 211.711 41.48ZM256.499 23.84L250.019 46H243.979L239.939 30.52L235.899 46H229.819L223.299 23.84H228.979L232.899 40.72L237.139 23.84H243.059L247.219 40.68L251.139 23.84H256.499Z" fill="#141416"/>\n\t\t\t\t</svg>\n\t\t\t\t',darkUrl:'\n\t\t\t\t<svg width="257" height="65" viewBox="0 0 257 65" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M8 16C8 11.5817 11.5817 8 16 8V8C20.4183 8 24 11.5817 24 16V24H16C11.5817 24 8 20.4183 8 16V16Z" fill="#FFCD2E"/>\n\t\t\t\t\t<path d="M0 37C0 30.3726 5.37258 25 12 25H24V37C24 43.6274 18.6274 49 12 49V49C5.37258 49 0 43.6274 0 37V37Z" fill="#A259FE"/>\n\t\t\t\t\t<path d="M25 27C25 20.3726 30.3726 15 37 15V15C43.6274 15 49 20.3726 49 27V27C49 33.6274 43.6274 39 37 39H25V27Z" fill="#FF7162"/>\n\t\t\t\t\t<path d="M25 40H33C37.4183 40 41 43.5817 41 48V48C41 52.4183 37.4183 56 33 56V56C28.5817 56 25 52.4183 25 48V40Z" fill="#0DCF82"/>\n\t\t\t\t\t<path d="M73.4 46.28C71.4533 46.28 69.6933 45.9467 68.12 45.28C66.5733 44.6133 65.3467 43.6533 64.44 42.4C63.5333 41.1467 63.0667 39.6667 63.04 37.96H69.04C69.12 39.1067 69.52 40.0133 70.24 40.68C70.9867 41.3467 72 41.68 73.28 41.68C74.5867 41.68 75.6133 41.3733 76.36 40.76C77.1067 40.12 77.48 39.2933 77.48 38.28C77.48 37.4533 77.2267 36.7733 76.72 36.24C76.2133 35.7067 75.5733 35.2933 74.8 35C74.0533 34.68 73.0133 34.3333 71.68 33.96C69.8667 33.4267 68.3867 32.9067 67.24 32.4C66.12 31.8667 65.1467 31.08 64.32 30.04C63.52 28.9733 63.12 27.56 63.12 25.8C63.12 24.1467 63.5333 22.7067 64.36 21.48C65.1867 20.2533 66.3467 19.32 67.84 18.68C69.3333 18.0133 71.04 17.68 72.96 17.68C75.84 17.68 78.1733 18.3867 79.96 19.8C81.7733 21.1867 82.7733 23.1333 82.96 25.64H76.8C76.7467 24.68 76.3333 23.8933 75.56 23.28C74.8133 22.64 73.8133 22.32 72.56 22.32C71.4667 22.32 70.5867 22.6 69.92 23.16C69.28 23.72 68.96 24.5333 68.96 25.6C68.96 26.3467 69.2 26.9733 69.68 27.48C70.1867 27.96 70.8 28.36 71.52 28.68C72.2667 28.9733 73.3067 29.32 74.64 29.72C76.4533 30.2533 77.9333 30.7867 79.08 31.32C80.2267 31.8533 81.2133 32.6533 82.04 33.72C82.8667 34.7867 83.28 36.1867 83.28 37.92C83.28 39.4133 82.8933 40.8 82.12 42.08C81.3467 43.36 80.2133 44.3867 78.72 45.16C77.2267 45.9067 75.4533 46.28 73.4 46.28ZM107.855 23.84V46H102.215V43.2C101.495 44.16 100.548 44.92 99.375 45.48C98.2283 46.0133 96.975 46.28 95.615 46.28C93.8817 46.28 92.3483 45.92 91.015 45.2C89.6817 44.4533 88.6283 43.3733 87.855 41.96C87.1083 40.52 86.735 38.8133 86.735 36.84V23.84H92.335V36.04C92.335 37.8 92.775 39.16 93.655 40.12C94.535 41.0533 95.735 41.52 97.255 41.52C98.8017 41.52 100.015 41.0533 100.895 40.12C101.775 39.16 102.215 37.8 102.215 36.04V23.84H107.855ZM116.98 27.04C117.7 26.0267 118.687 25.1867 119.94 24.52C121.22 23.8267 122.674 23.48 124.3 23.48C126.194 23.48 127.9 23.9467 129.42 24.88C130.967 25.8133 132.18 27.1467 133.06 28.88C133.967 30.5867 134.42 32.5733 134.42 34.84C134.42 37.1067 133.967 39.12 133.06 40.88C132.18 42.6133 130.967 43.96 129.42 44.92C127.9 45.88 126.194 46.36 124.3 46.36C122.674 46.36 121.234 46.0267 119.98 45.36C118.754 44.6933 117.754 43.8533 116.98 42.84V56.56H111.38V23.84H116.98V27.04ZM128.7 34.84C128.7 33.5067 128.42 32.36 127.86 31.4C127.327 30.4133 126.607 29.6667 125.7 29.16C124.82 28.6533 123.86 28.4 122.82 28.4C121.807 28.4 120.847 28.6667 119.94 29.2C119.06 29.7067 118.34 30.4533 117.78 31.44C117.247 32.4267 116.98 33.5867 116.98 34.92C116.98 36.2533 117.247 37.4133 117.78 38.4C118.34 39.3867 119.06 40.1467 119.94 40.68C120.847 41.1867 121.807 41.44 122.82 41.44C123.86 41.44 124.82 41.1733 125.7 40.64C126.607 40.1067 127.327 39.3467 127.86 38.36C128.42 37.3733 128.7 36.2 128.7 34.84ZM158.29 34.44C158.29 35.24 158.236 35.96 158.13 36.6H141.93C142.063 38.2 142.623 39.4533 143.61 40.36C144.596 41.2667 145.81 41.72 147.25 41.72C149.33 41.72 150.81 40.8267 151.69 39.04H157.73C157.09 41.1733 155.863 42.9333 154.05 44.32C152.236 45.68 150.01 46.36 147.37 46.36C145.236 46.36 143.316 45.8933 141.61 44.96C139.93 44 138.61 42.6533 137.65 40.92C136.716 39.1867 136.25 37.1867 136.25 34.92C136.25 32.6267 136.716 30.6133 137.65 28.88C138.583 27.1467 139.89 25.8133 141.57 24.88C143.25 23.9467 145.183 23.48 147.37 23.48C149.476 23.48 151.356 23.9333 153.01 24.84C154.69 25.7467 155.983 27.04 156.89 28.72C157.823 30.3733 158.29 32.28 158.29 34.44ZM152.49 32.84C152.463 31.4 151.943 30.2533 150.93 29.4C149.916 28.52 148.676 28.08 147.21 28.08C145.823 28.08 144.65 28.5067 143.69 29.36C142.756 30.1867 142.183 31.3467 141.97 32.84H152.49ZM167.177 27.28C167.897 26.1067 168.831 25.1867 169.977 24.52C171.151 23.8533 172.484 23.52 173.977 23.52V29.4H172.497C170.737 29.4 169.404 29.8133 168.497 30.64C167.617 31.4667 167.177 32.9067 167.177 34.96V46H161.577V23.84H167.177V27.28ZM188.309 28.44H184.429V46H178.749V28.44H176.229V23.84H178.749V22.72C178.749 20 179.522 18 181.069 16.72C182.616 15.44 184.949 14.84 188.069 14.92V19.64C186.709 19.6133 185.762 19.84 185.229 20.32C184.696 20.8 184.429 21.6667 184.429 22.92V23.84H188.309V28.44ZM197.538 16.4V46H191.938V16.4H197.538ZM211.711 46.36C209.578 46.36 207.658 45.8933 205.951 44.96C204.244 44 202.898 42.6533 201.911 40.92C200.951 39.1867 200.471 37.1867 200.471 34.92C200.471 32.6533 200.964 30.6533 201.951 28.92C202.964 27.1867 204.338 25.8533 206.071 24.92C207.804 23.96 209.738 23.48 211.871 23.48C214.004 23.48 215.938 23.96 217.671 24.92C219.404 25.8533 220.764 27.1867 221.751 28.92C222.764 30.6533 223.271 32.6533 223.271 34.92C223.271 37.1867 222.751 39.1867 221.711 40.92C220.698 42.6533 219.311 44 217.551 44.96C215.818 45.8933 213.871 46.36 211.711 46.36ZM211.711 41.48C212.724 41.48 213.671 41.24 214.551 40.76C215.458 40.2533 216.178 39.5067 216.711 38.52C217.244 37.5333 217.511 36.3333 217.511 34.92C217.511 32.8133 216.951 31.2 215.831 30.08C214.738 28.9333 213.391 28.36 211.791 28.36C210.191 28.36 208.844 28.9333 207.751 30.08C206.684 31.2 206.151 32.8133 206.151 34.92C206.151 37.0267 206.671 38.6533 207.711 39.8C208.778 40.92 210.111 41.48 211.711 41.48ZM256.499 23.84L250.019 46H243.979L239.939 30.52L235.899 46H229.819L223.299 23.84H228.979L232.899 40.72L237.139 23.84H243.059L247.219 40.68L251.139 23.84H256.499Z" fill="white"/>\n\t\t\t\t</svg>\n\t\t\t\t'}}}},ft=[{name:"Peppa Pig",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fpeppa_pig.svg?alt=media&token=a9fc83f7-b347-4868-8d52-0e888f0de73a&_gl=1*jzxghx*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTQ5LjQyLjAuMA.."},{name:"Dazzling Dalmatian",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fdazzling_dalmatian.svg?alt=media&token=5842b24c-7e58-4bb5-96c2-d09aa11f7f9e&_gl=1*11ayw3z*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQxOTY4LjExLjAuMA.."},{name:"Rosy Rabbit",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Frosy_rabbit.svg?alt=media&token=4e65a9e3-080d-4416-839d-e761b6b37181&_gl=1*156om5t*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMjUzLjYwLjAuMA.."},{name:"Leo the Lion",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fleo_the_lion.svg?alt=media&token=58d1296e-fefd-42ce-80ea-ae2cc830f1a9&_gl=1*1cz8e9q*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTAwLjIwLjAuMA.."},{name:"Ducky Down",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fducky_down.svg?alt=media&token=d67ae889-78c5-46e3-aaa9-3eb511fe90b3&_gl=1*cxyj7o*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQxOTkwLjYwLjAuMA.."},{name:"Merry Monkey",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fmerry_monkey.svg?alt=media&token=5bd2f69a-7211-42df-9718-5339c467b2d1&_gl=1*1labjed*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTE3LjMuMC4w"},{name:"Ecstatic Elephant",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fecstatic_elephant.svg?alt=media&token=fbd2ba76-6c3a-47a7-beac-0460a2178b7d&_gl=1*aku3ps*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMDA3LjQzLjAuMA.."},{name:"Baby Bear",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fbaby_bear.svg?alt=media&token=71d0c5fb-60aa-4304-adc1-635a83650bde&_gl=1*1dxajmf*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQxMjQyLjUyLjAuMA.."},{name:"Freddy Froglet",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Ffreddy_froglet.svg?alt=media&token=e3b2e292-6480-4507-9da3-21a62a1346d4&_gl=1*s4yycs*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMDQzLjcuMC4w"},{name:"Powerful Panda",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fpowerful_panda.svg?alt=media&token=07f9d60f-aa14-4a77-ad5b-c48ee76db3f5&_gl=1*7gfuit*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTkzLjYwLjAuMA.."},{name:"Curious Cat",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fcurious_cat.svg?alt=media&token=dccf6824-3b7c-4e4e-8559-40fbb8ff6186&_gl=1*1nwi0ti*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQxOTM3LjQyLjAuMA.."},{name:"Playful Penguin",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fplayful_penguin.svg?alt=media&token=c6d1b11a-43a6-4001-ae56-e04fd5a3f965&_gl=1*1xdxvkx*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTYzLjI4LjAuMA.."},{name:"Kind Koala",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fkind_koala.svg?alt=media&token=974396d6-6ccd-4367-8563-b27634849cb5&_gl=1*1w1gbnn*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMDgwLjQwLjAuMA.."},{name:"Tommy Tiger",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Ftommy_tiger.svg?alt=media&token=40a95ac7-cc91-4b74-859a-4e2e5964b967&_gl=1*1n0cr0n*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMjczLjQwLjAuMA.."},{name:"Wally Walrus",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fwally_walrus.svg?alt=media&token=31e02ef2-c986-4724-b987-dca97f84f81b&_gl=1*y5by2c*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMjkxLjIyLjAuMA.."},{name:"Ricky Rhino",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fricky_rhino.svg?alt=media&token=5d9dafe5-f4de-4f8b-94c1-49e01c776611&_gl=1*zyp4n2*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMjMxLjIyLjAuMA.."},{name:"Oliver Otter",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Foliver_otter.svg?alt=media&token=5298b869-0903-40b2-a702-224a3e0bcd95&_gl=1*aicppz*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMTMxLjYwLjAuMA.."},{name:"Reggie Ratling",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Freggie_ratling.svg?alt=media&token=f37fd4a0-9dbd-403a-bb82-81fdfb63cf88&_gl=1*16lzeql*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMjA3LjQ2LjAuMA.."},{name:"Gentle Giraffe",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fgentle_giraffe.svg?alt=media&token=f097ec12-e8ce-4d26-bf32-43e470eb7907&_gl=1*11ctuwz*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMDYwLjYwLjAuMA.."},{name:"Fabulous Fox",photoUrl:"https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Ffabulous_fox.svg?alt=media&token=fe1a4236-af45-427f-a035-1eda417b0682&_gl=1*xyyv1g*_ga*NTc3MjEzMjIwLjE2NjEwODkwMDU.*_ga_CW55HF8NVT*MTY5NzE0MTIzNC4zMzMuMS4xNjk3MTQyMDIxLjI5LjAuMA.."}];var gt=Object.freeze({__proto__:null,VELT_SDK_STAGING_VERSION:"2.0.1",VELT_SDK_DEVELOP_VERSION:"3.0.112",VELT_SDK_PROD_VERSION:"1.0.120",EXCLUDED_API_KEYS_FROM_LATEST_VERSION:ut,REVIEW_MODE:"review",FEEDBACK_MODE:"feedback",REVIEW_DOC_ID:"sreviewId",SNIPPYLY_COMMENT_ID:"scommentId",SNIPPYLY_USER:"snippyly-user",SNIPPYLY_TOKEN:"st",SUPERFLOW_USER_TOKEN:"_sfut",SUPERFLOW_GUEST_USER_TOKEN:"_sfgut",PROJECT_VERSION_KEY:"projectVersionKey",PROJECT_VERSION:"projectVersion",PROJECT_VERSION_DEFAULT_KEY:"sversion",PROJECT_INSTALL:"sprojectInstall",LIVE_DEMO_MODAL:"sflivedemo",FIGMA_DEMO_MODAL:"sffigmademo",TOUR_COMMENT_TOOLTIP:"sfTourCommentTooltip",SUPERFLOW_USER_ADMIN:"sfUserAdmin",SUPERFLOW_GUEST_MODE:"sfGuestMode",SUPERFLOW_PASSWORD_PROTECTED:"sfPasswordProtected",SUPERFLOW_QUERY_PARAMS_COMMENTS:"sfQueryParamsComments",SUPERFLOW_PASSWORD_IS_VALID:"sfPasswordIsValid",SUPERFLOW_PRIVATE_MODE:"sfPrivateMode",SUPERFLOW_GUEST_MODE_ALLOW_SIGN_IN:"sfGuestModeAllowSignIn",SUPERFLOW_GUEST_USER_MODEL_OPENED:"sfGuestUserModelOpened",SUPERFLOW_GUEST_USER_NAME_MODEL_OPENED:"sfGuestUserNameModelOpened",SUPERFLOW_GUEST_USER_NAME_UPDATED:"sfGuestUserNameUpdated",SUPERFLOW_GUEST_USER_BANNER_OPENED:"sfGuestUserBannerOpened",SUPERFLOW_CUSTOMER_METADATA:"sfCustomerMetadata",SUPERFLOW_DOCUMENT_METADATA:"sfDocumentMetadata",DRIVE_STAGING_URL:"superflow-file-viewer-staging.web.app",DRIVE_PROD_URL:"drive.usesuperflow.com",TAGS:pt,ATTRIBUTES:vt,DEFAULT_CUSTOMER_METADATA:mt,GUEST_USERS:ft});const wt="9dbcd2509e0fa90a5c81f038ce618e3f",bt="6d24f74f12f6fb84c87efa8f791cfb2e",yt="https://api.velt.dev/sa",Ct="https://api.velt.dev/checkdomainwhitelisted",xt="https://api.velt.dev/iam",Et="https://api.velt.dev/getcustomermetadata",St="https://api.velt.dev/generatesuperflowauthtoken",kt="https://api.velt.dev/usermigration",Mt="https://api.velt.dev/customloginenabled",_t="https://api.velt.dev/getprojectconfig",Tt="https://api.velt.dev/validatepassword",Nt="https://api.velt.dev/checktoolbarenabled",It=function(t){const e=[];let i=0;for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);n<128?e[i++]=n:n<2048?(e[i++]=n>>6|192,e[i++]=63&n|128):55296==(64512&n)&&o+1<t.length&&56320==(64512&t.charCodeAt(o+1))?(n=65536+((1023&n)<<10)+(1023&t.charCodeAt(++o)),e[i++]=n>>18|240,e[i++]=n>>12&63|128,e[i++]=n>>6&63|128,e[i++]=63&n|128):(e[i++]=n>>12|224,e[i++]=n>>6&63|128,e[i++]=63&n|128)}return e},At={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let e=0;e<t.length;e+=3){const n=t[e],s=e+1<t.length,r=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,d=n>>2,c=(3&n)<<4|r>>4;let h=(15&r)<<2|l>>6,u=63&l;a||(u=64,s||(h=64)),o.push(i[d],i[c],i[h],i[u])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(It(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,o=0;for(;i<t.length;){const n=t[i++];if(n<128)e[o++]=String.fromCharCode(n);else if(n>191&&n<224){const s=t[i++];e[o++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){const s=((7&n)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[o++]=String.fromCharCode(55296+(s>>10)),e[o++]=String.fromCharCode(56320+(1023&s))}else{const s=t[i++],r=t[i++];e[o++]=String.fromCharCode((15&n)<<12|(63&s)<<6|63&r)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let e=0;e<t.length;){const n=i[t.charAt(e++)],s=e<t.length?i[t.charAt(e)]:0;++e;const r=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==n||null==s||null==r||null==a)throw new Lt;const l=n<<2|s>>4;if(o.push(l),64!==r){const t=s<<4&240|r>>2;if(o.push(t),64!==a){const t=r<<6&192|a;o.push(t)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ot=function(t){return function(t){const e=It(t);return At.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Dt=function(t){try{return At.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().t,jt=()=>{try{return Ft()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.t;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Dt(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},$t=t=>{const e=(t=>{var e,i;return null===(i=null===(e=jt())||void 0===e?void 0:e.emulatorHosts)||void 0===i?void 0:i[t]})(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(i+1),10);return"["===e[0]?[e.substring(1,i-1),o]:[e.substring(0,i),o]},Vt=()=>{var t;return null===(t=jt())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Rt extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,n=this.errors[t],s=n?function(t,e){return t.replace(Ht,((t,i)=>{const o=e[i];return null!=o?String(o):`<${i}?>`}))}(n,i):"Error",r=`${this.serviceName}: ${s} (${o}).`;return new Rt(o,r,i)}}const Ht=/\{\$([^}]+)}/g;function Bt(t,e){if(t===e)return!0;const i=Object.keys(t),o=Object.keys(e);for(const n of i){if(!o.includes(n))return!1;const i=t[n],s=e[n];if(Gt(i)&&Gt(s)){if(!Bt(i,s))return!1}else if(i!==s)return!1}for(const t of o)if(!i.includes(t))return!1;return!0}function Gt(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){const e=[];for(const[i,o]of Object.entries(t))Array.isArray(o)?o.forEach((t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}class Wt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,i){let o;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");o=function(t,e){if("object"!=typeof t||null===t)return!1;for(const i of e)if(i in t&&"function"==typeof t[i])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:i},void 0===o.next&&(o.next=Kt),void 0===o.error&&(o.error=Kt),void 0===o.complete&&(o.complete=Kt);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(t){}})),this.observers.push(o),n}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Kt(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Pt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),o=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(o)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(o)}return o}onInit(t,e){var i;const o=this.normalizeInstanceIdentifier(e),n=null!==(i=this.onInitCallbacks.get(o))&&void 0!==i?i:new Set;n.add(t),this.onInitCallbacks.set(o,n);const s=this.instances.get(o);return s&&t(s,o),()=>{n.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const o of i)try{o(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(o=t,"[DEFAULT]"===o?void 0:o),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var o;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class qt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Xt||(Xt={}));const te={debug:Xt.DEBUG,verbose:Xt.VERBOSE,info:Xt.INFO,warn:Xt.WARN,error:Xt.ERROR,silent:Xt.SILENT},ee=Xt.INFO,ie={[Xt.DEBUG]:"log",[Xt.VERBOSE]:"log",[Xt.INFO]:"info",[Xt.WARN]:"warn",[Xt.ERROR]:"error"},oe=(t,e,...i)=>{if(e<t.logLevel)return;const o=(new Date).toISOString(),n=ie[e];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[n](`[${o}]  ${t.name}:`,...i)};class ne{constructor(t){this.name=t,this._logLevel=ee,this._logHandler=oe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Xt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?te[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Xt.DEBUG,...t),this._logHandler(this,Xt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Xt.VERBOSE,...t),this._logHandler(this,Xt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Xt.INFO,...t),this._logHandler(this,Xt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Xt.WARN,...t),this._logHandler(this,Xt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Xt.ERROR,...t),this._logHandler(this,Xt.ERROR,...t)}}let se,re;const ae=new WeakMap,le=new WeakMap,de=new WeakMap,ce=new WeakMap,he=new WeakMap;let ue={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return le.get(t);if("objectStoreNames"===e)return t.objectStoreNames||de.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return me(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function pe(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(re||(re=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(fe(this),e),me(ae.get(this))}:function(...e){return me(t.apply(fe(this),e))}:function(e,...i){const o=t.call(fe(this),e,...i);return de.set(o,e.sort?e.sort():[e]),me(o)}}function ve(t){return"function"==typeof t?pe(t):(t instanceof IDBTransaction&&function(t){if(le.has(t))return;const e=new Promise(((e,i)=>{const o=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",s),t.removeEventListener("abort",s)},n=()=>{e(),o()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",n),t.addEventListener("error",s),t.addEventListener("abort",s)}));le.set(t,e)}(t),e=t,(se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ue):t);var e}function me(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const o=()=>{t.removeEventListener("success",n),t.removeEventListener("error",s)},n=()=>{e(me(t.result)),o()},s=()=>{i(t.error),o()};t.addEventListener("success",n),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&ae.set(e,t)})).catch((()=>{})),he.set(e,t),e}(t);if(ce.has(t))return ce.get(t);const e=ve(t);return e!==t&&(ce.set(t,e),he.set(e,t)),e}const fe=t=>he.get(t);const ge=["get","getKey","getAll","getAllKeys","count"],we=["put","add","delete","clear"],be=new Map;function ye(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(be.get(e))return be.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,n=we.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!n&&!ge.includes(i))return;const s=async function(t,...e){const s=this.transaction(t,n?"readwrite":"readonly");let r=s.store;return o&&(r=r.index(e.shift())),(await Promise.all([r[i](...e),n&&s.done]))[0]};return be.set(e,s),s}ue=(t=>({...t,get:(e,i,o)=>ye(e,i)||t.get(e,i,o),has:(e,i)=>!!ye(e,i)||t.has(e,i)}))(ue);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const xe="@firebase/app",Ee=new ne("@firebase/app"),Se={[xe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},ke=new Map,Me=new Map,_e=new Map;function Te(t,e){try{t.container.addComponent(e)}catch(i){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Ne(t){const e=t.name;if(_e.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;_e.set(e,t);for(const e of ke.values())Te(e,t);for(const e of Me.values())Te(e,t);return!0}function Ie(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new zt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e={}){let i=t;if("object"!=typeof e){e={name:e}}const o=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),n=o.name;if("string"!=typeof n||!n)throw Ae.create("bad-app-name",{appName:String(n)});if(i||(i=Vt()),!i)throw Ae.create("no-options");const s=ke.get(n);if(s){if(Bt(i,s.options)&&Bt(o,s.config))return s;throw Ae.create("duplicate-app",{appName:n})}const r=new qt(n);for(const t of _e.values())r.addComponent(t);const a=new Le(i,o,r);return ke.set(n,a),a}function De(t,e,i){var o;let n=null!==(o=Se[t])&&void 0!==o?o:t;i&&(n+=`-${i}`);const s=n.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const t=[`Unable to register library "${n}" with version "${e}":`];return s&&t.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&r&&t.push("and"),r&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ee.warn(t.join(" "))}Ne(new Jt(`${n}-version`,(()=>({library:n,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="firebase-heartbeat-store";let je=null;function $e(){return je||(je=function(t,e,{blocked:i,upgrade:o,blocking:n,terminated:s}={}){const r=indexedDB.open(t,e),a=me(r);return o&&r.addEventListener("upgradeneeded",(t=>{o(me(r.result),t.oldVersion,t.newVersion,me(r.transaction),t)})),i&&r.addEventListener("blocked",(t=>i(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),n&&t.addEventListener("versionchange",(t=>n(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Fe)}catch(t){console.warn(t)}}}).catch((t=>{throw Ae.create("idb-open",{originalErrorMessage:t.message})}))),je}async function Ve(t,e){try{const i=(await $e()).transaction(Fe,"readwrite"),o=i.objectStore(Fe);await o.put(e,Pe(t)),await i.done}catch(t){if(t instanceof Rt)Ee.warn(t.message);else{const e=Ae.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ee.warn(e.message)}}}function Pe(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ze(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Re();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==o&&!this._heartbeatsCache.heartbeats.some((t=>t.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:i,unsentEntries:o}=function(t,e=1024){const i=[];let o=t.slice();for(const n of t){const t=i.find((t=>t.agent===n.agent));if(t){if(t.dates.push(n.date),He(i)>e){t.dates.pop();break}}else if(i.push({agent:n.agent,dates:[n.date]}),He(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}(this._heartbeatsCache.heartbeats),n=Ot(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Re(){return(new Date).toISOString().substring(0,10)}class ze{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),i||self.indexedDB.deleteDatabase(o),t(!0)},n.onupgradeneeded=()=>{i=!1},n.onerror=()=>{var t;e((null===(t=n.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await $e()).transaction(Fe),i=await e.objectStore(Fe).get(Pe(t));return await e.done,i}catch(t){if(t instanceof Rt)Ee.warn(t.message);else{const e=Ae.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ee.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}}function He(t){return Ot(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;Be="",Ne(new Jt("platform-logger",(t=>new Ce(t)),"PRIVATE")),Ne(new Jt("heartbeat",(t=>new Ue(t)),"PRIVATE")),De(xe,"0.10.5",Be),De(xe,"0.10.5","esm2017"),De("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
De("firebase","10.12.2","app");function Ge(t,e){const i={};for(const o in t)t.hasOwnProperty(o)&&(i[o]=e(t[o]));return i}function Ze(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>Ze(t)));if("function"==typeof t||"object"==typeof t)return Ge(t,(t=>Ze(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function We(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>We(t))):"function"==typeof t||"object"==typeof t?Ge(t,(t=>We(t))):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Rt{constructor(t,e,i){super(`functions/${t}`,e||""),this.details=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(t,e,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||i.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(t){if(this.appCheck){const e=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(t){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(t)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e,i,o,n="us-central1",s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new Je(e,i,o),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(n);this.customDomain=t.origin,this.region="us-central1"}catch(t){this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function qe(t,e,i){return o=>async function(t,e,i,o){const n={data:i=Ze(i)},s={},r=await t.contextProvider.getContext(o.limitedUseAppCheckTokens);r.authToken&&(s.Authorization="Bearer "+r.authToken);r.messagingToken&&(s["Firebase-Instance-ID-Token"]=r.messagingToken);null!==r.appCheckToken&&(s["X-Firebase-AppCheck"]=r.appCheckToken);const a=function(t){let e=null;return{promise:new Promise(((i,o)=>{e=setTimeout((()=>{o(new Ye("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{e&&clearTimeout(e)}}}(o.timeout||7e4),l=await Promise.race([Xe(e,n,s,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!l)throw new Ye("cancelled","Firebase Functions instance was deleted.");const d=function(t,e){let i,o=function(t){if(t>=200&&t<300)return"ok";switch(t){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(t),n=o;try{const t=e&&e.error;if(t){const e=t.status;if("string"==typeof e){if(!Ke[e])return new Ye("internal","internal");o=Ke[e],n=e}const s=t.message;"string"==typeof s&&(n=s),i=t.details,void 0!==i&&(i=We(i))}}catch(t){}return"ok"===o?null:new Ye(o,n,i)}(l.status,l.json);if(d)throw d;if(!l.json)throw new Ye("internal","Response is not valid JSON object.");let c=l.json.data;void 0===c&&(c=l.json.result);if(void 0===c)throw new Ye("internal","Response is missing data field.");return{data:We(c)}}(t,e,o,i||{})}async function Xe(t,e,i,o){let n;i["Content-Type"]="application/json";try{n=await o(t,{method:"POST",body:JSON.stringify(e),headers:i})}catch(t){return{status:0,json:null}}let s=null;try{s=await n.json()}catch(t){}return{status:n.status,json:s}}const ti="@firebase/functions";function ei(t,e,i){return qe(Yt(t),e,i)}function ii(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(i[o[n]]=t[o[n]])}return i}function oi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(t,e){Ne(new Jt("functions",((e,{instanceIdentifier:i})=>{const o=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),s=e.getProvider("messaging-internal"),r=e.getProvider("app-check-internal");return new Qe(o,n,s,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),De(ti,"0.11.5",e),De(ti,"0.11.5","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(fetch.bind(self)),"function"==typeof SuppressedError&&SuppressedError;const ni=oi,si=new zt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ri=new ne("@firebase/auth");function ai(t,...e){ri.logLevel<=Xt.ERROR&&ri.error(`Auth (10.12.2): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,...e){throw ui(t,...e)}function di(t,...e){return ui(t,...e)}function ci(t,e,i){const o=Object.assign(Object.assign({},ni()),{[e]:i});return new zt("auth","Firebase",o).create(e,{appName:t.name})}function hi(t){return ci(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ui(t,...e){if("string"!=typeof t){const i=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=t.name),t._errorFactory.create(i,...o)}return si.create(t,...e)}function pi(t,e,...i){if(!t)throw ui(e,...i)}function vi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ai(e),new Error(e)}function mi(t,e){t||vi(e)}function fi(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==fi()&&"https:"!==fi()&&!function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(t,e){this.shortDelay=t,this.longDelay=e,mi(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return gi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ci=new wi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,i,o,n={}){return Si(t,n,(async()=>{let n={},s={};o&&("GET"===e?s=o:n={body:JSON.stringify(o)});const r=Zt(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),bi.fetch()(ki(t,t.config.apiHost,i,r),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},n))}))}async function Si(t,e,i){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},yi),e);try{const e=new Mi(t),n=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw _i(t,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const e=n.ok?s.errorMessage:s.error.message,[i,r]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw _i(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw _i(t,"email-already-in-use",s);if("USER_DISABLED"===i)throw _i(t,"user-disabled",s);const a=o[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw ci(t,a,r);li(t,a)}}catch(e){if(e instanceof Rt)throw e;li(t,"network-request-failed",{message:String(e)})}}function ki(t,e,i,o){const n=`${e}${i}?${o}`;return t.config.emulator?function(t,e){mi(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}(t.config,n):`${t.config.apiScheme}://${n}`}class Mi{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(di(this.auth,"network-request-failed"))),Ci.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(t,e,i){const o={appName:t.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const n=di(t,e,o);return n.customData._tokenResponse=i,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Ii(t){return 1e3*Number(t)}function Ai(t){const[e,i,o]=t.split(".");if(void 0===e||void 0===i||void 0===o)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const t=Dt(i);return t?JSON.parse(t):(ai("Failed to decode base64 JWT payload"),null)}catch(t){return ai("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}function Li(t){const e=Ai(t);return pi(e,"internal-error"),pi(void 0!==e.exp,"internal-error"),pi(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,i=!1){if(i)return e;try{return await e}catch(e){throw e instanceof Rt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Di{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){var e;const i=t.auth,o=await t.getIdToken(),n=await Oi(t,Ti(i,{idToken:o}));pi(null==n?void 0:n.users.length,i,"internal-error");const s=n.users[0];t._notifyReloadListener(s);const r=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?$i(s.providerUserInfo):[],a=function(t,e){const i=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...i,...e]}(t.providerData,r),l=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),c=!!l&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fi(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}function $i(t){return t.map((t=>{var{providerId:e}=t,i=ii(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){pi(t.idToken,"internal-error"),pi(void 0!==t.idToken,"internal-error"),pi(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):Li(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){pi(0!==t.length,"internal-error");const e=Li(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(pi(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:o,expiresIn:n}=await async function(t,e){const i=await Si(t,{},(async()=>{const i=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:n}=t.config,s=ki(t,o,"/v1/token",`key=${n}`),r=await t._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",bi.fetch()(s,{method:"POST",headers:r,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,e);this.updateTokensAndExpiration(i,o,Number(n))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:o,expirationTime:n}=e,s=new Vi;return i&&(pi("string"==typeof i,"internal-error",{appName:t}),s.refreshToken=i),o&&(pi("string"==typeof o,"internal-error",{appName:t}),s.accessToken=o),n&&(pi("number"==typeof n,"internal-error",{appName:t}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return vi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e){pi("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ui{constructor(t){var{uid:e,auth:i,stsTokenManager:o}=t,n=ii(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Di(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Fi(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(t){const e=await Oi(this,this.stsTokenManager.getToken(this.auth,t));return pi(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const i=Yt(t),o=await i.getIdToken(e),n=Ai(o);pi(n&&n.exp&&n.auth_time&&n.iat,i.auth,"internal-error");const s="object"==typeof n.firebase?n.firebase:void 0,r=null==s?void 0:s.sign_in_provider;return{claims:n,token:o,authTime:Ni(Ii(n.auth_time)),issuedAtTime:Ni(Ii(n.iat)),expirationTime:Ni(Ii(n.exp)),signInProvider:r||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Yt(t);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(pi(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ui(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){pi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await ji(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ie(this.auth.app))return Promise.reject(hi(this.auth));const t=await this.getIdToken();return await Oi(this,async function(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,o,n,s,r,a,l,d;const c=null!==(i=e.displayName)&&void 0!==i?i:void 0,h=null!==(o=e.email)&&void 0!==o?o:void 0,u=null!==(n=e.phoneNumber)&&void 0!==n?n:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,v=null!==(r=e.tenantId)&&void 0!==r?r:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,f=null!==(l=e.createdAt)&&void 0!==l?l:void 0,g=null!==(d=e.lastLoginAt)&&void 0!==d?d:void 0,{uid:w,emailVerified:b,isAnonymous:y,providerData:C,stsTokenManager:x}=e;pi(w&&x,t,"internal-error");const E=Vi.fromJSON(this.name,x);pi("string"==typeof w,t,"internal-error"),Pi(c,t.name),Pi(h,t.name),pi("boolean"==typeof b,t,"internal-error"),pi("boolean"==typeof y,t,"internal-error"),Pi(u,t.name),Pi(p,t.name),Pi(v,t.name),Pi(m,t.name),Pi(f,t.name),Pi(g,t.name);const S=new Ui({uid:w,auth:t,email:h,emailVerified:b,displayName:c,isAnonymous:y,photoURL:p,phoneNumber:u,tenantId:v,stsTokenManager:E,createdAt:f,lastLoginAt:g});return C&&Array.isArray(C)&&(S.providerData=C.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,i=!1){const o=new Vi;o.updateFromServerResponse(e);const n=new Ui({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await ji(n),n}static async _fromGetAccountInfoResponse(t,e,i){const o=e.users[0];pi(void 0!==o.localId,"internal-error");const n=void 0!==o.providerUserInfo?$i(o.providerUserInfo):[],s=!(o.email&&o.passwordHash||(null==n?void 0:n.length)),r=new Vi;r.updateFromIdToken(i);const a=new Ui({uid:o.localId,auth:t,stsTokenManager:r,isAnonymous:s}),l={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:n,metadata:new Fi(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash||(null==n?void 0:n.length))};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Map;function zi(t){mi(t instanceof Function,"Expected a class definition");let e=Ri.get(t);return e?(mi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ri.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hi.type="NONE";const Bi=Hi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e,i){return`firebase:${t}:${e}:${i}`}class Zi{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:o,name:n}=this.auth;this.fullUserKey=Gi(this.userKey,o.apiKey,n),this.fullPersistenceKey=Gi("persistence",o.apiKey,n),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ui._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new Zi(zi(Bi),t,i);const o=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let n=o[0]||zi(Bi);const s=Gi(i,t.config.apiKey,t.name);let r=null;for(const i of e)try{const e=await i._get(s);if(e){const o=Ui._fromJSON(t,e);i!==n&&(r=o),n=i;break}}catch(t){}const a=o.filter((t=>t._shouldAllowMigration));return n._shouldAllowMigration&&a.length?(n=a[0],r&&await n._set(s,r.toJSON()),await Promise.all(e.map((async t=>{if(t!==n)try{await t._remove(s)}catch(t){}}))),new Zi(n,t,i)):new Zi(n,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(function(t=Ut()){return/iemobile/i.test(t)}(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(function(t=Ut()){return/firefox\//i.test(t)}(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(function(t=Ut()){return/blackberry/i.test(t)}(e))return"Blackberry";if(function(t=Ut()){return/webos/i.test(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))return"Webos";if(function(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}(e))return"Safari";if((e.includes("chrome/")||function(t=Ut()){return/crios\//i.test(t)}(e))&&!e.includes("edge/"))return"Chrome";if(function(t=Ut()){return/android/i.test(t)}(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(e);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Ki(t,e=[]){let i;switch(t){case"Browser":i=Wi(Ut());break;case"Worker":i=`${Wi(Ut())}-${t}`;break;default:i=t}return`${i}/JsCore/10.12.2/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=e=>new Promise(((i,o)=>{try{i(t(e))}catch(t){o(t)}}));i.onAbort=e,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){var e,i,o,n;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(o=null===(i=t.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==o?o:"",this.forceUpgradeOnSignin=null!==(n=t.forceUpgradeOnSignin)&&void 0!==n&&n,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,o,n,s,r;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsLowercaseLetter)||void 0===o||o),a.isValid&&(a.isValid=null===(n=a.containsUppercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(r=a.containsNonAlphanumericCharacter)||void 0===r||r),a}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){let i;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,o,n){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e,i,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qi(this),this.idTokenSubscription=new qi(this),this.beforeStateQueue=new Yi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=si,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=zi(e)),this._initializationPromise=this.queue((async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(o=this.currentUser)||void 0===o?void 0:o.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await Ti(this,{idToken:t}),i=await Ui._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Ie(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,n=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==o?void 0:o._redirectEventId,r=await this.tryRedirectSignIn(t);i&&i!==s||!(null==r?void 0:r.user)||(o=r.user,n=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(o)}catch(t){o=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pi(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ji(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ie(this.app))return Promise.reject(hi(this));const e=t?Yt(t):null;return e&&pi(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&pi(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return Ie(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ie(this.app)?Promise.reject(hi(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(zi(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",xi(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),e=new Ji(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zt("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged((()=>{i(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(e.tenantId=this.tenantId),await async function(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",xi(t,e))}(this,e)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&zi(t)||this._popupRedirectResolver;pi(e,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[zi(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,o){if(this._deleted)return()=>{};const n="function"==typeof e?e:e.next.bind(e);let s=!1;const r=this._isInitialized?Promise.resolve():this._initializationPromise;if(pi(r,this,"internal-error"),r.then((()=>{s||n(this.currentUser)})),"function"==typeof e){const n=t.addObserver(e,i,o);return()=>{s=!0,n()}}{const i=t.addObserver(e);return()=>{s=!0,i()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return pi(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ki(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(e["X-Firebase-AppCheck"]=o),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){ri.logLevel<=Xt.WARN&&ri.warn(`Auth (10.12.2): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}class qi{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const i=new Wt(t,e);return i.subscribe.bind(i)}((t=>this.observer=t))}get next(){return pi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new wi(3e4,6e4),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new wi(2e3,1e4),
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new wi(3e4,6e4),
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new wi(5e3,15e3);var Xi="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){pi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t=>{var e;null===(e=jt())||void 0===e||e[`_${t}`]})("authIdTokenMaxAge"),eo="Browser",Ne(new Jt("auth",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),n=t.getProvider("app-check-internal"),{apiKey:s,authDomain:r}=i.options;pi(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:s,authDomain:r,clientPlatform:eo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ki(eo)},l=new Qi(i,o,n,a);return function(t,e){const i=(null==e?void 0:e.persistence)||[],o=(Array.isArray(i)?i:[i]).map(zi);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(o,null==e?void 0:e.popupRedirectResolver)}(l,e),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,i)=>{t.getProvider("auth-internal").initialize()}))),Ne(new Jt("auth-internal",(t=>(t=>new to(t))(function(t){return Yt(t)}(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),De(Xi,"1.7.4",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(eo)),De(Xi,"1.7.4","esm2017");const io=("undefined"!=typeof globalThis?globalThis:void 0)?.crypto||("undefined"!=typeof global?global:void 0)?.crypto||("undefined"!=typeof window?window:void 0)?.crypto||("undefined"!=typeof self?self:void 0)?.crypto||("undefined"!=typeof frames?frames:void 0)?.[0]?.crypto;let oo;oo=io?t=>{const e=[];for(let i=0;i<t;i+=4)e.push(io.getRandomValues(new Uint32Array(1))[0]);return new so(e,t)}:t=>{const e=[],i=t=>{let e=t,i=987654321;const o=4294967295;return()=>{i=36969*(65535&i)+(i>>16)&o,e=18e3*(65535&e)+(e>>16)&o;let t=(i<<16)+e&o;return t/=4294967296,t+=.5,t*(Math.random()>.5?1:-1)}};for(let o,n=0;n<t;n+=4){const t=i(4294967296*(o||Math.random()));o=987654071*t(),e.push(4294967296*t()|0)}return new so(e,t)};class no{static create(...t){return new this(...t)}mixIn(t){return Object.assign(this,t)}clone(){const t=new this.constructor;return Object.assign(t,this),t}}class so extends no{constructor(t=[],e=4*t.length){super();let i=t;if(i instanceof ArrayBuffer&&(i=new Uint8Array(i)),(i instanceof Int8Array||i instanceof Uint8ClampedArray||i instanceof Int16Array||i instanceof Uint16Array||i instanceof Int32Array||i instanceof Uint32Array||i instanceof Float32Array||i instanceof Float64Array)&&(i=new Uint8Array(i.buffer,i.byteOffset,i.byteLength)),i instanceof Uint8Array){const t=i.byteLength,e=[];for(let o=0;o<t;o+=1)e[o>>>2]|=i[o]<<24-o%4*8;this.words=e,this.sigBytes=t}else this.words=t,this.sigBytes=e}static random=oo;toString(t=ro){return t.stringify(this)}concat(t){const e=this.words,i=t.words,o=this.sigBytes,n=t.sigBytes;if(this.clamp(),o%4)for(let t=0;t<n;t+=1){const n=i[t>>>2]>>>24-t%4*8&255;e[o+t>>>2]|=n<<24-(o+t)%4*8}else for(let t=0;t<n;t+=4)e[o+t>>>2]=i[t>>>2];return this.sigBytes+=n,this}clamp(){const{words:t,sigBytes:e}=this;t[e>>>2]&=4294967295<<32-e%4*8,t.length=Math.ceil(e/4)}clone(){const t=super.clone.call(this);return t.words=this.words.slice(0),t}}const ro={stringify(t){const{words:e,sigBytes:i}=t,o=[];for(let t=0;t<i;t+=1){const i=e[t>>>2]>>>24-t%4*8&255;o.push((i>>>4).toString(16)),o.push((15&i).toString(16))}return o.join("")},parse(t){const e=t.length,i=[];for(let o=0;o<e;o+=2)i[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new so(i,e/2)}},ao={stringify(t){const{words:e,sigBytes:i}=t,o=[];for(let t=0;t<i;t+=1){const i=e[t>>>2]>>>24-t%4*8&255;o.push(String.fromCharCode(i))}return o.join("")},parse(t){const e=t.length,i=[];for(let o=0;o<e;o+=1)i[o>>>2]|=(255&t.charCodeAt(o))<<24-o%4*8;return new so(i,e)}},lo={stringify(t){try{return decodeURIComponent(escape(ao.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:t=>ao.parse(unescape(encodeURIComponent(t)))};class co extends no{constructor(){super(),this._minBufferSize=0}reset(){this._data=new so,this._nDataBytes=0}_append(t){let e=t;"string"==typeof e&&(e=lo.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes}_process(t){let e;const{_data:i,blockSize:o}=this,n=i.words,s=i.sigBytes;let r=s/(4*o);r=t?Math.ceil(r):Math.max((0|r)-this._minBufferSize,0);const a=r*o,l=Math.min(4*a,s);if(a){for(let t=0;t<a;t+=o)this._doProcessBlock(n,t);e=n.splice(0,a),i.sigBytes-=l}return new so(e,l)}clone(){const t=super.clone.call(this);return t._data=this._data.clone(),t}}class ho extends co{constructor(t){super(),this.blockSize=16,this.cfg=Object.assign(new no,t),this.reset()}static _createHelper(t){return(e,i)=>new t(i).finalize(e)}static _createHmacHelper(t){return(e,i)=>new uo(t,i).finalize(e)}reset(){super.reset.call(this),this._doReset()}update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t);return this._doFinalize()}}class uo extends no{constructor(t,e){super();const i=new t;this._hasher=i;let o=e;"string"==typeof o&&(o=lo.parse(o));const n=i.blockSize,s=4*n;o.sigBytes>s&&(o=i.finalize(e)),o.clamp();const r=o.clone();this._oKey=r;const a=o.clone();this._iKey=a;const l=r.words,d=a.words;for(let t=0;t<n;t+=1)l[t]^=1549556828,d[t]^=909522486;r.sigBytes=s,a.sigBytes=s,this.reset()}reset(){const t=this._hasher;t.reset(),t.update(this._iKey)}update(t){return this._hasher.update(t),this}finalize(t){const e=this._hasher,i=e.finalize(t);e.reset();return e.finalize(this._oKey.clone().concat(i))}}const po=so;class vo extends no{constructor(t,e){super(),this.high=t,this.low=e}}class mo extends no{constructor(t=[],e=8*t.length){super(),this.words=t,this.sigBytes=e}toX32(){const t=this.words,e=t.length,i=[];for(let o=0;o<e;o+=1){const e=t[o];i.push(e.high),i.push(e.low)}return po.create(i,this.sigBytes)}clone(){const t=super.clone.call(this);t.words=this.words.slice(0);const{words:e}=t,i=e.length;for(let t=0;t<i;t+=1)e[t]=e[t].clone();return t}}const fo=(t,e,i)=>{const o=[];let n=0;for(let s=0;s<e;s+=1)if(s%4){const e=i[t.charCodeAt(s-1)]<<s%4*2|i[t.charCodeAt(s)]>>>6-s%4*2;o[n>>>2]|=e<<24-n%4*8,n+=1}return so.create(o,n)},go={stringify(t){const{words:e,sigBytes:i}=t,o=this._map;t.clamp();const n=[];for(let t=0;t<i;t+=3){const s=(e[t>>>2]>>>24-t%4*8&255)<<16|(e[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|e[t+2>>>2]>>>24-(t+2)%4*8&255;for(let e=0;e<4&&t+.75*e<i;e+=1)n.push(o.charAt(s>>>6*(3-e)&63))}const s=o.charAt(64);if(s)for(;n.length%4;)n.push(s);return n.join("")},parse(t){let e=t.length;const i=this._map;let o=this._reverseMap;if(!o){this._reverseMap=[],o=this._reverseMap;for(let t=0;t<i.length;t+=1)o[i.charCodeAt(t)]=t}const n=i.charAt(64);if(n){const i=t.indexOf(n);-1!==i&&(e=i)}return fo(t,e,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},wo=[];for(let t=0;t<64;t+=1)wo[t]=4294967296*Math.abs(Math.sin(t+1))|0;const bo=(t,e,i,o,n,s,r)=>{const a=t+(e&i|~e&o)+n+r;return(a<<s|a>>>32-s)+e},yo=(t,e,i,o,n,s,r)=>{const a=t+(e&o|i&~o)+n+r;return(a<<s|a>>>32-s)+e},Co=(t,e,i,o,n,s,r)=>{const a=t+(e^i^o)+n+r;return(a<<s|a>>>32-s)+e},xo=(t,e,i,o,n,s,r)=>{const a=t+(i^(e|~o))+n+r;return(a<<s|a>>>32-s)+e};class Eo extends ho{_doReset(){this._hash=new so([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(t,e){const i=t;for(let o=0;o<16;o+=1){const n=e+o,s=t[n];i[n]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}const o=this._hash.words,n=i[e+0],s=i[e+1],r=i[e+2],a=i[e+3],l=i[e+4],d=i[e+5],c=i[e+6],h=i[e+7],u=i[e+8],p=i[e+9],v=i[e+10],m=i[e+11],f=i[e+12],g=i[e+13],w=i[e+14],b=i[e+15];let y=o[0],C=o[1],x=o[2],E=o[3];y=bo(y,C,x,E,n,7,wo[0]),E=bo(E,y,C,x,s,12,wo[1]),x=bo(x,E,y,C,r,17,wo[2]),C=bo(C,x,E,y,a,22,wo[3]),y=bo(y,C,x,E,l,7,wo[4]),E=bo(E,y,C,x,d,12,wo[5]),x=bo(x,E,y,C,c,17,wo[6]),C=bo(C,x,E,y,h,22,wo[7]),y=bo(y,C,x,E,u,7,wo[8]),E=bo(E,y,C,x,p,12,wo[9]),x=bo(x,E,y,C,v,17,wo[10]),C=bo(C,x,E,y,m,22,wo[11]),y=bo(y,C,x,E,f,7,wo[12]),E=bo(E,y,C,x,g,12,wo[13]),x=bo(x,E,y,C,w,17,wo[14]),C=bo(C,x,E,y,b,22,wo[15]),y=yo(y,C,x,E,s,5,wo[16]),E=yo(E,y,C,x,c,9,wo[17]),x=yo(x,E,y,C,m,14,wo[18]),C=yo(C,x,E,y,n,20,wo[19]),y=yo(y,C,x,E,d,5,wo[20]),E=yo(E,y,C,x,v,9,wo[21]),x=yo(x,E,y,C,b,14,wo[22]),C=yo(C,x,E,y,l,20,wo[23]),y=yo(y,C,x,E,p,5,wo[24]),E=yo(E,y,C,x,w,9,wo[25]),x=yo(x,E,y,C,a,14,wo[26]),C=yo(C,x,E,y,u,20,wo[27]),y=yo(y,C,x,E,g,5,wo[28]),E=yo(E,y,C,x,r,9,wo[29]),x=yo(x,E,y,C,h,14,wo[30]),C=yo(C,x,E,y,f,20,wo[31]),y=Co(y,C,x,E,d,4,wo[32]),E=Co(E,y,C,x,u,11,wo[33]),x=Co(x,E,y,C,m,16,wo[34]),C=Co(C,x,E,y,w,23,wo[35]),y=Co(y,C,x,E,s,4,wo[36]),E=Co(E,y,C,x,l,11,wo[37]),x=Co(x,E,y,C,h,16,wo[38]),C=Co(C,x,E,y,v,23,wo[39]),y=Co(y,C,x,E,g,4,wo[40]),E=Co(E,y,C,x,n,11,wo[41]),x=Co(x,E,y,C,a,16,wo[42]),C=Co(C,x,E,y,c,23,wo[43]),y=Co(y,C,x,E,p,4,wo[44]),E=Co(E,y,C,x,f,11,wo[45]),x=Co(x,E,y,C,b,16,wo[46]),C=Co(C,x,E,y,r,23,wo[47]),y=xo(y,C,x,E,n,6,wo[48]),E=xo(E,y,C,x,h,10,wo[49]),x=xo(x,E,y,C,w,15,wo[50]),C=xo(C,x,E,y,d,21,wo[51]),y=xo(y,C,x,E,f,6,wo[52]),E=xo(E,y,C,x,a,10,wo[53]),x=xo(x,E,y,C,v,15,wo[54]),C=xo(C,x,E,y,s,21,wo[55]),y=xo(y,C,x,E,u,6,wo[56]),E=xo(E,y,C,x,b,10,wo[57]),x=xo(x,E,y,C,c,15,wo[58]),C=xo(C,x,E,y,g,21,wo[59]),y=xo(y,C,x,E,l,6,wo[60]),E=xo(E,y,C,x,m,10,wo[61]),x=xo(x,E,y,C,r,15,wo[62]),C=xo(C,x,E,y,p,21,wo[63]),o[0]=o[0]+y|0,o[1]=o[1]+C|0,o[2]=o[2]+x|0,o[3]=o[3]+E|0}_doFinalize(){const t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;e[o>>>5]|=128<<24-o%32;const n=Math.floor(i/4294967296),s=i;e[15+(o+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e[14+(o+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(e.length+1),this._process();const r=this._hash,a=r.words;for(let t=0;t<4;t+=1){const e=a[t];a[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return r}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const So=ho._createHelper(Eo),ko=ho._createHmacHelper(Eo);class Mo extends no{constructor(t){super(),this.cfg=Object.assign(new no,{keySize:4,hasher:Eo,iterations:1},t)}compute(t,e){let i;const{cfg:o}=this,n=o.hasher.create(),s=so.create(),r=s.words,{keySize:a,iterations:l}=o;for(;r.length<a;){i&&n.update(i),i=n.update(t).finalize(e),n.reset();for(let t=1;t<l;t+=1)i=n.finalize(i),n.reset();s.concat(i)}return s.sigBytes=4*a,s}}class _o extends co{constructor(t,e,i){super(),this.cfg=Object.assign(new no,i),this._xformMode=t,this._key=e,this.reset()}static createEncryptor(t,e){return this.create(this._ENC_XFORM_MODE,t,e)}static createDecryptor(t,e){return this.create(this._DEC_XFORM_MODE,t,e)}static _createHelper(t){const e=t=>"string"==typeof t?Vo:jo;return{encrypt:(i,o,n)=>e(o).encrypt(t,i,o,n),decrypt:(i,o,n)=>e(o).decrypt(t,i,o,n)}}reset(){super.reset.call(this),this._doReset()}process(t){return this._append(t),this._process()}finalize(t){t&&this._append(t);return this._doFinalize()}}_o._ENC_XFORM_MODE=1,_o._DEC_XFORM_MODE=2,_o.keySize=4,_o.ivSize=4;class To extends _o{constructor(...t){super(...t),this.blockSize=1}_doFinalize(){return this._process(!0)}}class No extends no{constructor(t,e){super(),this._cipher=t,this._iv=e}static createEncryptor(t,e){return this.Encryptor.create(t,e)}static createDecryptor(t,e){return this.Decryptor.create(t,e)}}function Io(t,e,i){const o=t;let n;const s=this._iv;s?(n=s,this._iv=void 0):n=this._prevBlock;for(let t=0;t<i;t+=1)o[e+t]^=n[t]}class Ao extends No{}Ao.Encryptor=class extends Ao{processBlock(t,e){const i=this._cipher,{blockSize:o}=i;Io.call(this,t,e,o),i.encryptBlock(t,e),this._prevBlock=t.slice(e,e+o)}},Ao.Decryptor=class extends Ao{processBlock(t,e){const i=this._cipher,{blockSize:o}=i,n=t.slice(e,e+o);i.decryptBlock(t,e),Io.call(this,t,e,o),this._prevBlock=n}};const Lo={pad(t,e){const i=4*e,o=i-t.sigBytes%i,n=o<<24|o<<16|o<<8|o,s=[];for(let t=0;t<o;t+=4)s.push(n);const r=so.create(s,o);t.concat(r)},unpad(t){const e=t,i=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=i}};class Oo extends _o{constructor(t,e,i){super(t,e,Object.assign({mode:Ao,padding:Lo},i)),this.blockSize=4}reset(){let t;super.reset.call(this);const{cfg:e}=this,{iv:i,mode:o}=e;this._xformMode===this.constructor._ENC_XFORM_MODE?t=o.createEncryptor:(t=o.createDecryptor,this._minBufferSize=1),this._mode=t.call(o,this,i&&i.words),this._mode.i=t}_doProcessBlock(t,e){this._mode.processBlock(t,e)}_doFinalize(){let t;const{padding:e}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t}}class Do extends no{constructor(t){super(),this.mixIn(t)}toString(t){return(t||this.formatter).stringify(this)}}const Fo={stringify(t){let e;const{ciphertext:i,salt:o}=t;return e=o?so.create([1398893684,1701076831]).concat(o).concat(i):i,e.toString(go)},parse(t){let e;const i=go.parse(t),o=i.words;return 1398893684===o[0]&&1701076831===o[1]&&(e=so.create(o.slice(2,4)),o.splice(0,4),i.sigBytes-=16),Do.create({ciphertext:i,salt:e})}};class jo extends no{static encrypt(t,e,i,o){const n=Object.assign(new no,this.cfg,o),s=t.createEncryptor(i,n),r=s.finalize(e),a=s.cfg;return Do.create({ciphertext:r,key:i,iv:a.iv,algorithm:t,mode:a.mode,padding:a.padding,blockSize:s.blockSize,formatter:n.format})}static decrypt(t,e,i,o){let n=e;const s=Object.assign(new no,this.cfg,o);n=this._parse(n,s.format);return t.createDecryptor(i,s).finalize(n.ciphertext)}static _parse(t,e){return"string"==typeof t?e.parse(t,this):t}}jo.cfg=Object.assign(new no,{format:Fo});const $o={execute(t,e,i,o,n){let s,r=o;r||(r=so.random(8)),s=n?Mo.create({keySize:e+i,hasher:n}).compute(t,r):Mo.create({keySize:e+i}).compute(t,r);const a=so.create(s.words.slice(e),4*i);return s.sigBytes=4*e,Do.create({key:s,iv:a,salt:r})}};class Vo extends jo{static encrypt(t,e,i,o){const n=Object.assign(new no,this.cfg,o),s=n.kdf.execute(i,t.keySize,t.ivSize,n.salt,n.hasher);n.iv=s.iv;const r=jo.encrypt.call(this,t,e,s.key,n);return r.mixIn(s),r}static decrypt(t,e,i,o){let n=e;const s=Object.assign(new no,this.cfg,o);n=this._parse(n,s.format);const r=s.kdf.execute(i,t.keySize,t.ivSize,n.salt,s.hasher);s.iv=r.iv;return jo.decrypt.call(this,t,n,r.key,s)}}Vo.cfg=Object.assign(jo.cfg,{kdf:$o});const Po=t=>t<<8&4278255360|t>>>8&16711935,Uo={stringify(t){const{words:e,sigBytes:i}=t,o=[];for(let t=0;t<i;t+=2){const i=e[t>>>2]>>>16-t%4*8&65535;o.push(String.fromCharCode(i))}return o.join("")},parse(t){const e=t.length,i=[];for(let o=0;o<e;o+=1)i[o>>>1]|=t.charCodeAt(o)<<16-o%2*16;return so.create(i,2*e)}},Ro=Uo,zo={stringify(t){const{words:e,sigBytes:i}=t,o=[];for(let t=0;t<i;t+=2){const i=Po(e[t>>>2]>>>16-t%4*8&65535);o.push(String.fromCharCode(i))}return o.join("")},parse(t){const e=t.length,i=[];for(let o=0;o<e;o+=1)i[o>>>1]|=Po(t.charCodeAt(o)<<16-o%2*16);return so.create(i,2*e)}},Ho={stringify(t,e=!0){const{words:i,sigBytes:o}=t,n=e?this._safeMap:this._map;t.clamp();const s=[];for(let t=0;t<o;t+=3){const e=(i[t>>>2]>>>24-t%4*8&255)<<16|(i[t+1>>>2]>>>24-(t+1)%4*8&255)<<8|i[t+2>>>2]>>>24-(t+2)%4*8&255;for(let i=0;i<4&&t+.75*i<o;i+=1)s.push(n.charAt(e>>>6*(3-i)&63))}const r=n.charAt(64);if(r)for(;s.length%4;)s.push(r);return s.join("")},parse(t,e=!0){let i=t.length;const o=e?this._safeMap:this._map;let n=this._reverseMap;if(!n){this._reverseMap=[],n=this._reverseMap;for(let t=0;t<o.length;t+=1)n[o.charCodeAt(t)]=t}const s=o.charAt(64);if(s){const e=t.indexOf(s);-1!==e&&(i=e)}return fo(t,i,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safeMap:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"},Bo=[];class Go extends ho{_doReset(){this._hash=new so([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const i=this._hash.words;let o=i[0],n=i[1],s=i[2],r=i[3],a=i[4];for(let i=0;i<80;i+=1){if(i<16)Bo[i]=0|t[e+i];else{const t=Bo[i-3]^Bo[i-8]^Bo[i-14]^Bo[i-16];Bo[i]=t<<1|t>>>31}let l=(o<<5|o>>>27)+a+Bo[i];l+=i<20?1518500249+(n&s|~n&r):i<40?1859775393+(n^s^r):i<60?(n&s|n&r|s&r)-1894007588:(n^s^r)-899497514,a=r,r=s,s=n<<30|n>>>2,n=o,o=l}i[0]=i[0]+o|0,i[1]=i[1]+n|0,i[2]=i[2]+s|0,i[3]=i[3]+r|0,i[4]=i[4]+a|0}_doFinalize(){const t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;return e[o>>>5]|=128<<24-o%32,e[14+(o+64>>>9<<4)]=Math.floor(i/4294967296),e[15+(o+64>>>9<<4)]=i,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Zo=ho._createHelper(Go),Wo=ho._createHmacHelper(Go),Ko=[],Yo=[],Jo=t=>{const e=Math.sqrt(t);for(let i=2;i<=e;i+=1)if(!(t%i))return!1;return!0},Qo=t=>4294967296*(t-(0|t))|0;let qo=2,Xo=0;for(;Xo<64;)Jo(qo)&&(Xo<8&&(Ko[Xo]=Qo(qo**.5)),Yo[Xo]=Qo(qo**(1/3)),Xo+=1),qo+=1;const tn=[];class en extends ho{_doReset(){this._hash=new so(Ko.slice(0))}_doProcessBlock(t,e){const i=this._hash.words;let o=i[0],n=i[1],s=i[2],r=i[3],a=i[4],l=i[5],d=i[6],c=i[7];for(let i=0;i<64;i+=1){if(i<16)tn[i]=0|t[e+i];else{const t=tn[i-15],e=(t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3,o=tn[i-2],n=(o<<15|o>>>17)^(o<<13|o>>>19)^o>>>10;tn[i]=e+tn[i-7]+n+tn[i-16]}const h=o&n^o&s^n&s,u=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),p=c+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&l^~a&d)+Yo[i]+tn[i];c=d,d=l,l=a,a=r+p|0,r=s,s=n,n=o,o=p+(u+h)|0}i[0]=i[0]+o|0,i[1]=i[1]+n|0,i[2]=i[2]+s|0,i[3]=i[3]+r|0,i[4]=i[4]+a|0,i[5]=i[5]+l|0,i[6]=i[6]+d|0,i[7]=i[7]+c|0}_doFinalize(){const t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;return e[o>>>5]|=128<<24-o%32,e[14+(o+64>>>9<<4)]=Math.floor(i/4294967296),e[15+(o+64>>>9<<4)]=i,t.sigBytes=4*e.length,this._process(),this._hash}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const on=ho._createHelper(en),nn=ho._createHmacHelper(en);class sn extends en{_doReset(){this._hash=new so([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=4,t}}const rn=en._createHelper(sn),an=en._createHmacHelper(sn),ln=[new vo(1116352408,3609767458),new vo(1899447441,602891725),new vo(3049323471,3964484399),new vo(3921009573,2173295548),new vo(961987163,4081628472),new vo(1508970993,3053834265),new vo(2453635748,2937671579),new vo(2870763221,3664609560),new vo(3624381080,2734883394),new vo(310598401,1164996542),new vo(607225278,1323610764),new vo(1426881987,3590304994),new vo(1925078388,4068182383),new vo(2162078206,991336113),new vo(2614888103,633803317),new vo(3248222580,3479774868),new vo(3835390401,2666613458),new vo(4022224774,944711139),new vo(264347078,2341262773),new vo(604807628,2007800933),new vo(770255983,1495990901),new vo(1249150122,1856431235),new vo(1555081692,3175218132),new vo(1996064986,2198950837),new vo(2554220882,3999719339),new vo(2821834349,766784016),new vo(2952996808,2566594879),new vo(3210313671,3203337956),new vo(3336571891,1034457026),new vo(3584528711,2466948901),new vo(113926993,3758326383),new vo(338241895,168717936),new vo(666307205,1188179964),new vo(773529912,1546045734),new vo(1294757372,1522805485),new vo(1396182291,2643833823),new vo(1695183700,2343527390),new vo(1986661051,1014477480),new vo(2177026350,1206759142),new vo(2456956037,344077627),new vo(2730485921,1290863460),new vo(2820302411,3158454273),new vo(3259730800,3505952657),new vo(3345764771,106217008),new vo(3516065817,3606008344),new vo(3600352804,1432725776),new vo(4094571909,1467031594),new vo(275423344,851169720),new vo(430227734,3100823752),new vo(506948616,1363258195),new vo(659060556,3750685593),new vo(883997877,3785050280),new vo(958139571,3318307427),new vo(1322822218,3812723403),new vo(1537002063,2003034995),new vo(1747873779,3602036899),new vo(1955562222,1575990012),new vo(2024104815,1125592928),new vo(2227730452,2716904306),new vo(2361852424,442776044),new vo(2428436474,593698344),new vo(2756734187,3733110249),new vo(3204031479,2999351573),new vo(3329325298,3815920427),new vo(3391569614,3928383900),new vo(3515267271,566280711),new vo(3940187606,3454069534),new vo(4118630271,4000239992),new vo(116418474,1914138554),new vo(174292421,2731055270),new vo(289380356,3203993006),new vo(460393269,320620315),new vo(685471733,587496836),new vo(852142971,1086792851),new vo(1017036298,365543100),new vo(1126000580,2618297676),new vo(1288033470,3409855158),new vo(1501505948,4234509866),new vo(1607167915,987167468),new vo(1816402316,1246189591)],dn=[];for(let t=0;t<80;t+=1)dn[t]=new vo;class cn extends ho{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new mo([new vo(1779033703,4089235720),new vo(3144134277,2227873595),new vo(1013904242,4271175723),new vo(2773480762,1595750129),new vo(1359893119,2917565137),new vo(2600822924,725511199),new vo(528734635,4215389547),new vo(1541459225,327033209)])}_doProcessBlock(t,e){const i=this._hash.words,o=i[0],n=i[1],s=i[2],r=i[3],a=i[4],l=i[5],d=i[6],c=i[7],h=o.high;let u=o.low;const p=n.high;let v=n.low;const m=s.high;let f=s.low;const g=r.high;let w=r.low;const b=a.high;let y=a.low;const C=l.high;let x=l.low;const E=d.high;let S=d.low;const k=c.high;let M=c.low,_=h,T=u,N=p,I=v,A=m,L=f,O=g,D=w,F=b,j=y,$=C,V=x,P=E,U=S,R=k,z=M;for(let i=0;i<80;i+=1){let o,n;const s=dn[i];if(i<16)s.high=0|t[e+2*i],n=s.high,s.low=0|t[e+2*i+1],o=s.low;else{const t=dn[i-15],e=t.high,r=t.low,a=(e>>>1|r<<31)^(e>>>8|r<<24)^e>>>7,l=(r>>>1|e<<31)^(r>>>8|e<<24)^(r>>>7|e<<25),d=dn[i-2],c=d.high,h=d.low,u=(c>>>19|h<<13)^(c<<3|h>>>29)^c>>>6,p=(h>>>19|c<<13)^(h<<3|c>>>29)^(h>>>6|c<<26),v=dn[i-7],m=v.high,f=v.low,g=dn[i-16],w=g.high,b=g.low;o=l+f,n=a+m+(o>>>0<l>>>0?1:0),o+=p,n=n+u+(o>>>0<p>>>0?1:0),o+=b,n=n+w+(o>>>0<b>>>0?1:0),s.high=n,s.low=o}const r=F&$^~F&P,a=j&V^~j&U,l=_&N^_&A^N&A,d=T&I^T&L^I&L,c=(_>>>28|T<<4)^(_<<30|T>>>2)^(_<<25|T>>>7),h=(T>>>28|_<<4)^(T<<30|_>>>2)^(T<<25|_>>>7),u=(F>>>14|j<<18)^(F>>>18|j<<14)^(F<<23|j>>>9),p=(j>>>14|F<<18)^(j>>>18|F<<14)^(j<<23|F>>>9),v=ln[i],m=v.high,f=v.low;let g=z+p,w=R+u+(g>>>0<z>>>0?1:0);g+=a,w=w+r+(g>>>0<a>>>0?1:0),g+=f,w=w+m+(g>>>0<f>>>0?1:0),g+=o,w=w+n+(g>>>0<o>>>0?1:0);const b=h+d;R=P,z=U,P=$,U=V,$=F,V=j,j=D+g|0,F=O+w+(j>>>0<D>>>0?1:0)|0,O=A,D=L,A=N,L=I,N=_,I=T,T=g+b|0,_=w+(c+l+(b>>>0<h>>>0?1:0))+(T>>>0<g>>>0?1:0)|0}o.low=u+T,u=o.low,o.high=h+_+(u>>>0<T>>>0?1:0),n.low=v+I,v=n.low,n.high=p+N+(v>>>0<I>>>0?1:0),s.low=f+L,f=s.low,s.high=m+A+(f>>>0<L>>>0?1:0),r.low=w+D,w=r.low,r.high=g+O+(w>>>0<D>>>0?1:0),a.low=y+j,y=a.low,a.high=b+F+(y>>>0<j>>>0?1:0),l.low=x+V,x=l.low,l.high=C+$+(x>>>0<V>>>0?1:0),d.low=S+U,S=d.low,d.high=E+P+(S>>>0<U>>>0?1:0),c.low=M+z,M=c.low,c.high=k+R+(M>>>0<z>>>0?1:0)}_doFinalize(){const t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;e[o>>>5]|=128<<24-o%32,e[30+(o+128>>>10<<5)]=Math.floor(i/4294967296),e[31+(o+128>>>10<<5)]=i,t.sigBytes=4*e.length,this._process();return this._hash.toX32()}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const hn=ho._createHelper(cn),un=ho._createHmacHelper(cn);class pn extends cn{_doReset(){this._hash=new mo([new vo(3418070365,3238371032),new vo(1654270250,914150663),new vo(2438529370,812702999),new vo(355462360,4144912697),new vo(1731405415,4290775857),new vo(2394180231,1750603025),new vo(3675008525,1694076839),new vo(1203062813,3204075428)])}_doFinalize(){const t=super._doFinalize.call(this);return t.sigBytes-=16,t}}const vn=cn._createHelper(pn),mn=cn._createHmacHelper(pn),fn=[],gn=[],wn=[];let bn=1,yn=0;for(let t=0;t<24;t+=1){fn[bn+5*yn]=(t+1)*(t+2)/2%64;const e=(2*bn+3*yn)%5;bn=yn%5,yn=e}for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1)gn[t+5*e]=e+(2*t+3*e)%5*5;let Cn=1;for(let t=0;t<24;t+=1){let e=0,i=0;for(let t=0;t<7;t+=1){if(1&Cn){const o=(1<<t)-1;o<32?i^=1<<o:e^=1<<o-32}128&Cn?Cn=Cn<<1^113:Cn<<=1}wn[t]=vo.create(e,i)}const xn=[];for(let t=0;t<25;t+=1)xn[t]=vo.create();class En extends ho{constructor(t){super(Object.assign({outputLength:512},t))}_doReset(){this._state=[];const t=this._state;for(let e=0;e<25;e+=1)t[e]=new vo;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(t,e){const i=this._state,o=this.blockSize/2;for(let n=0;n<o;n+=1){let o=t[e+2*n],s=t[e+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8);const r=i[n];r.high^=s,r.low^=o}for(let t=0;t<24;t+=1){for(let t=0;t<5;t+=1){let e=0,o=0;for(let n=0;n<5;n+=1){const s=i[t+5*n];e^=s.high,o^=s.low}const n=xn[t];n.high=e,n.low=o}for(let t=0;t<5;t+=1){const e=xn[(t+4)%5],o=xn[(t+1)%5],n=o.high,s=o.low,r=e.high^(n<<1|s>>>31),a=e.low^(s<<1|n>>>31);for(let e=0;e<5;e+=1){const o=i[t+5*e];o.high^=r,o.low^=a}}for(let t=1;t<25;t+=1){let e,o;const n=i[t],s=n.high,r=n.low,a=fn[t];a<32?(e=s<<a|r>>>32-a,o=r<<a|s>>>32-a):(e=r<<a-32|s>>>64-a,o=s<<a-32|r>>>64-a);const l=xn[gn[t]];l.high=e,l.low=o}const e=xn[0],o=i[0];e.high=o.high,e.low=o.low;for(let t=0;t<5;t+=1)for(let e=0;e<5;e+=1){const o=t+5*e,n=i[o],s=xn[o],r=xn[(t+1)%5+5*e],a=xn[(t+2)%5+5*e];n.high=s.high^~r.high&a.high,n.low=s.low^~r.low&a.low}const n=i[0],s=wn[t];n.high^=s.high,n.low^=s.low}}_doFinalize(){const t=this._data,e=t.words,i=8*t.sigBytes,o=32*this.blockSize;e[i>>>5]|=1<<24-i%32,e[(Math.ceil((i+1)/o)*o>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();const n=this._state,s=this.cfg.outputLength/8,r=s/8,a=[];for(let t=0;t<r;t+=1){const e=n[t];let i=e.high,o=e.low;i=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),a.push(o),a.push(i)}return new so(a,s)}clone(){const t=super.clone.call(this);t._state=this._state.slice(0);const e=t._state;for(let t=0;t<25;t+=1)e[t]=e[t].clone();return t}}const Sn=ho._createHelper(En),kn=ho._createHmacHelper(En),Mn=so.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),_n=so.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),Tn=so.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),Nn=so.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),In=so.create([0,1518500249,1859775393,2400959708,2840853838]),An=so.create([1352829926,1548603684,1836072691,2053994217,0]),Ln=(t,e,i)=>t^e^i,On=(t,e,i)=>t&e|~t&i,Dn=(t,e,i)=>(t|~e)^i,Fn=(t,e,i)=>t&i|e&~i,jn=(t,e,i)=>t^(e|~i),$n=(t,e)=>t<<e|t>>>32-e;class Vn extends ho{_doReset(){this._hash=so.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(t,e){const i=t;for(let t=0;t<16;t+=1){const o=e+t,n=i[o];i[o]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const o=this._hash.words,n=In.words,s=An.words,r=Mn.words,a=_n.words,l=Tn.words,d=Nn.words;let c,h=o[0],u=o[1],p=o[2],v=o[3],m=o[4],f=o[0],g=o[1],w=o[2],b=o[3],y=o[4];for(let t=0;t<80;t+=1)c=h+i[e+r[t]]|0,c+=t<16?Ln(u,p,v)+n[0]:t<32?On(u,p,v)+n[1]:t<48?Dn(u,p,v)+n[2]:t<64?Fn(u,p,v)+n[3]:jn(u,p,v)+n[4],c|=0,c=$n(c,l[t]),c=c+m|0,h=m,m=v,v=$n(p,10),p=u,u=c,c=f+i[e+a[t]]|0,c+=t<16?jn(g,w,b)+s[0]:t<32?Fn(g,w,b)+s[1]:t<48?Dn(g,w,b)+s[2]:t<64?On(g,w,b)+s[3]:Ln(g,w,b)+s[4],c|=0,c=$n(c,d[t]),c=c+y|0,f=y,y=b,b=$n(w,10),w=g,g=c;c=o[1]+p+b|0,o[1]=o[2]+v+y|0,o[2]=o[3]+m+f|0,o[3]=o[4]+h+g|0,o[4]=o[0]+u+w|0,o[0]=c}_doFinalize(){const t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;e[o>>>5]|=128<<24-o%32,e[14+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(e.length+1),this._process();const n=this._hash,s=n.words;for(let t=0;t<5;t+=1){const e=s[t];s[t]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}return n}clone(){const t=super.clone.call(this);return t._hash=this._hash.clone(),t}}const Pn=ho._createHelper(Vn),Un=ho._createHmacHelper(Vn);class Rn extends no{constructor(t){super(),this.cfg=Object.assign(new no,{keySize:4,hasher:en,iterations:25e4},t)}compute(t,e){const{cfg:i}=this,o=uo.create(i.hasher,t),n=so.create(),s=so.create([1]),r=n.words,a=s.words,{keySize:l,iterations:d}=i;for(;r.length<l;){const t=o.update(e).finalize(s);o.reset();const i=t.words,r=i.length;let l=t;for(let t=1;t<d;t+=1){l=o.finalize(l),o.reset();const t=l.words;for(let e=0;e<r;e+=1)i[e]^=t[e]}n.concat(t),a[0]+=1}return n.sigBytes=4*l,n}}const zn=[],Hn=[],Bn=[],Gn=[],Zn=[],Wn=[],Kn=[],Yn=[],Jn=[],Qn=[],qn=[];for(let t=0;t<256;t+=1)qn[t]=t<128?t<<1:t<<1^283;let Xn=0,ts=0;for(let t=0;t<256;t+=1){let t=ts^ts<<1^ts<<2^ts<<3^ts<<4;t=t>>>8^255&t^99,zn[Xn]=t,Hn[t]=Xn;const e=qn[Xn],i=qn[e],o=qn[i];let n=257*qn[t]^16843008*t;Bn[Xn]=n<<24|n>>>8,Gn[Xn]=n<<16|n>>>16,Zn[Xn]=n<<8|n>>>24,Wn[Xn]=n,n=16843009*o^65537*i^257*e^16843008*Xn,Kn[t]=n<<24|n>>>8,Yn[t]=n<<16|n>>>16,Jn[t]=n<<8|n>>>24,Qn[t]=n,Xn?(Xn=e^qn[qn[qn[o^e]]],ts^=qn[qn[ts]]):(ts=1,Xn=ts)}const es=[0,1,2,4,8,16,32,64,128,27,54];class is extends Oo{_doReset(){let t;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const e=this._keyPriorReset,i=e.words,o=e.sigBytes/4;this._nRounds=o+6;const n=4*(this._nRounds+1);this._keySchedule=[];const s=this._keySchedule;for(let e=0;e<n;e+=1)e<o?s[e]=i[e]:(t=s[e-1],e%o?o>6&&e%o==4&&(t=zn[t>>>24]<<24|zn[t>>>16&255]<<16|zn[t>>>8&255]<<8|zn[255&t]):(t=t<<8|t>>>24,t=zn[t>>>24]<<24|zn[t>>>16&255]<<16|zn[t>>>8&255]<<8|zn[255&t],t^=es[e/o|0]<<24),s[e]=s[e-o]^t);this._invKeySchedule=[];const r=this._invKeySchedule;for(let e=0;e<n;e+=1){const i=n-e;t=e%4?s[i]:s[i-4],r[e]=e<4||i<=4?t:Kn[zn[t>>>24]]^Yn[zn[t>>>16&255]]^Jn[zn[t>>>8&255]]^Qn[zn[255&t]]}}encryptBlock(t,e){this._doCryptBlock(t,e,this._keySchedule,Bn,Gn,Zn,Wn,zn)}decryptBlock(t,e){const i=t;let o=i[e+1];i[e+1]=i[e+3],i[e+3]=o,this._doCryptBlock(i,e,this._invKeySchedule,Kn,Yn,Jn,Qn,Hn),o=i[e+1],i[e+1]=i[e+3],i[e+3]=o}_doCryptBlock(t,e,i,o,n,s,r,a){const l=t,d=this._nRounds;let c=l[e]^i[0],h=l[e+1]^i[1],u=l[e+2]^i[2],p=l[e+3]^i[3],v=4;for(let t=1;t<d;t+=1){const t=o[c>>>24]^n[h>>>16&255]^s[u>>>8&255]^r[255&p]^i[v];v+=1;const e=o[h>>>24]^n[u>>>16&255]^s[p>>>8&255]^r[255&c]^i[v];v+=1;const a=o[u>>>24]^n[p>>>16&255]^s[c>>>8&255]^r[255&h]^i[v];v+=1;const l=o[p>>>24]^n[c>>>16&255]^s[h>>>8&255]^r[255&u]^i[v];v+=1,c=t,h=e,u=a,p=l}const m=(a[c>>>24]<<24|a[h>>>16&255]<<16|a[u>>>8&255]<<8|a[255&p])^i[v];v+=1;const f=(a[h>>>24]<<24|a[u>>>16&255]<<16|a[p>>>8&255]<<8|a[255&c])^i[v];v+=1;const g=(a[u>>>24]<<24|a[p>>>16&255]<<16|a[c>>>8&255]<<8|a[255&h])^i[v];v+=1;const w=(a[p>>>24]<<24|a[c>>>16&255]<<16|a[h>>>8&255]<<8|a[255&u])^i[v];v+=1,l[e]=m,l[e+1]=f,l[e+2]=g,l[e+3]=w}}is.keySize=8;const os=Oo._createHelper(is),ns=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],ss=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],rs=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],as=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],ls=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function ds(t,e){const i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function cs(t,e){const i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}class hs extends Oo{constructor(t,e,i){super(t,e,i),this.blockSize=2}_doReset(){const t=this._key.words,e=[];for(let i=0;i<56;i+=1){const o=ns[i]-1;e[i]=t[o>>>5]>>>31-o%32&1}this._subKeys=[];const i=this._subKeys;for(let t=0;t<16;t+=1){i[t]=[];const o=i[t],n=rs[t];for(let t=0;t<24;t+=1)o[t/6|0]|=e[(ss[t]-1+n)%28]<<31-t%6,o[4+(t/6|0)]|=e[28+(ss[t+24]-1+n)%28]<<31-t%6;o[0]=o[0]<<1|o[0]>>>31;for(let t=1;t<7;t+=1)o[t]>>>=4*(t-1)+3;o[7]=o[7]<<5|o[7]>>>27}this._invSubKeys=[];const o=this._invSubKeys;for(let t=0;t<16;t+=1)o[t]=i[15-t]}encryptBlock(t,e){this._doCryptBlock(t,e,this._subKeys)}decryptBlock(t,e){this._doCryptBlock(t,e,this._invSubKeys)}_doCryptBlock(t,e,i){const o=t;this._lBlock=t[e],this._rBlock=t[e+1],ds.call(this,4,252645135),ds.call(this,16,65535),cs.call(this,2,858993459),cs.call(this,8,16711935),ds.call(this,1,1431655765);for(let t=0;t<16;t+=1){const e=i[t],o=this._lBlock,n=this._rBlock;let s=0;for(let t=0;t<8;t+=1)s|=as[t][((n^e[t])&ls[t])>>>0];this._lBlock=n,this._rBlock=o^s}const n=this._lBlock;this._lBlock=this._rBlock,this._rBlock=n,ds.call(this,1,1431655765),cs.call(this,8,16711935),cs.call(this,2,858993459),ds.call(this,16,65535),ds.call(this,4,252645135),o[e]=this._lBlock,o[e+1]=this._rBlock}}hs.keySize=2,hs.ivSize=2;const us=Oo._createHelper(hs);class ps extends Oo{_doReset(){const t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const e=t.slice(0,2),i=t.length<4?t.slice(0,2):t.slice(2,4),o=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=hs.createEncryptor(so.create(e)),this._des2=hs.createEncryptor(so.create(i)),this._des3=hs.createEncryptor(so.create(o))}encryptBlock(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)}decryptBlock(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)}}ps.keySize=6,ps.ivSize=2;const vs=Oo._createHelper(ps),ms=[],fs=[],gs=[];function ws(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)fs[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<fs[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<fs[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<fs[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<fs[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<fs[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<fs[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<fs[6]>>>0?1:0)|0,this._b=e[7]>>>0<fs[7]>>>0?1:0;for(let i=0;i<8;i+=1){const o=t[i]+e[i],n=65535&o,s=o>>>16,r=((n*n>>>17)+n*s>>>15)+s*s,a=((4294901760&o)*o|0)+((65535&o)*o|0);gs[i]=r^a}t[0]=gs[0]+(gs[7]<<16|gs[7]>>>16)+(gs[6]<<16|gs[6]>>>16)|0,t[1]=gs[1]+(gs[0]<<8|gs[0]>>>24)+gs[7]|0,t[2]=gs[2]+(gs[1]<<16|gs[1]>>>16)+(gs[0]<<16|gs[0]>>>16)|0,t[3]=gs[3]+(gs[2]<<8|gs[2]>>>24)+gs[1]|0,t[4]=gs[4]+(gs[3]<<16|gs[3]>>>16)+(gs[2]<<16|gs[2]>>>16)|0,t[5]=gs[5]+(gs[4]<<8|gs[4]>>>24)+gs[3]|0,t[6]=gs[6]+(gs[5]<<16|gs[5]>>>16)+(gs[4]<<16|gs[4]>>>16)|0,t[7]=gs[7]+(gs[6]<<8|gs[6]>>>24)+gs[5]|0}class bs extends To{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;for(let e=0;e<4;e+=1)t[e]=16711935&(t[e]<<8|t[e]>>>24)|4278255360&(t[e]<<24|t[e]>>>8);this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const i=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const o=this._C;this._b=0;for(let t=0;t<4;t+=1)ws.call(this);for(let t=0;t<8;t+=1)o[t]^=i[t+4&7];if(e){const t=e.words,i=t[0],n=t[1],s=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),a=s>>>16|4294901760&r,l=r<<16|65535&s;o[0]^=s,o[1]^=a,o[2]^=r,o[3]^=l,o[4]^=s,o[5]^=a,o[6]^=r,o[7]^=l;for(let t=0;t<4;t+=1)ws.call(this)}}_doProcessBlock(t,e){const i=t,o=this._X;ws.call(this),ms[0]=o[0]^o[5]>>>16^o[3]<<16,ms[1]=o[2]^o[7]>>>16^o[5]<<16,ms[2]=o[4]^o[1]>>>16^o[7]<<16,ms[3]=o[6]^o[3]>>>16^o[1]<<16;for(let t=0;t<4;t+=1)ms[t]=16711935&(ms[t]<<8|ms[t]>>>24)|4278255360&(ms[t]<<24|ms[t]>>>8),i[e+t]^=ms[t]}}const ys=To._createHelper(bs),Cs=[],xs=[],Es=[];function Ss(){const t=this._X,e=this._C;for(let t=0;t<8;t+=1)xs[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<xs[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<xs[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<xs[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<xs[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<xs[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<xs[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<xs[6]>>>0?1:0)|0,this._b=e[7]>>>0<xs[7]>>>0?1:0;for(let i=0;i<8;i+=1){const o=t[i]+e[i],n=65535&o,s=o>>>16,r=((n*n>>>17)+n*s>>>15)+s*s,a=((4294901760&o)*o|0)+((65535&o)*o|0);Es[i]=r^a}t[0]=Es[0]+(Es[7]<<16|Es[7]>>>16)+(Es[6]<<16|Es[6]>>>16)|0,t[1]=Es[1]+(Es[0]<<8|Es[0]>>>24)+Es[7]|0,t[2]=Es[2]+(Es[1]<<16|Es[1]>>>16)+(Es[0]<<16|Es[0]>>>16)|0,t[3]=Es[3]+(Es[2]<<8|Es[2]>>>24)+Es[1]|0,t[4]=Es[4]+(Es[3]<<16|Es[3]>>>16)+(Es[2]<<16|Es[2]>>>16)|0,t[5]=Es[5]+(Es[4]<<8|Es[4]>>>24)+Es[3]|0,t[6]=Es[6]+(Es[5]<<16|Es[5]>>>16)+(Es[4]<<16|Es[4]>>>16)|0,t[7]=Es[7]+(Es[6]<<8|Es[6]>>>24)+Es[5]|0}class ks extends To{constructor(...t){super(...t),this.blockSize=4,this.ivSize=2}_doReset(){const t=this._key.words,{iv:e}=this.cfg;this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16];const i=this._X;this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];const o=this._C;this._b=0;for(let t=0;t<4;t+=1)Ss.call(this);for(let t=0;t<8;t+=1)o[t]^=i[t+4&7];if(e){const t=e.words,i=t[0],n=t[1],s=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),a=s>>>16|4294901760&r,l=r<<16|65535&s;o[0]^=s,o[1]^=a,o[2]^=r,o[3]^=l,o[4]^=s,o[5]^=a,o[6]^=r,o[7]^=l;for(let t=0;t<4;t+=1)Ss.call(this)}}_doProcessBlock(t,e){const i=t,o=this._X;Ss.call(this),Cs[0]=o[0]^o[5]>>>16^o[3]<<16,Cs[1]=o[2]^o[7]>>>16^o[5]<<16,Cs[2]=o[4]^o[1]>>>16^o[7]<<16,Cs[3]=o[6]^o[3]>>>16^o[1]<<16;for(let t=0;t<4;t+=1)Cs[t]=16711935&(Cs[t]<<8|Cs[t]>>>24)|4278255360&(Cs[t]<<24|Cs[t]>>>8),i[e+t]^=Cs[t]}}const Ms=To._createHelper(ks);function _s(){const t=this._S;let e=this._i,i=this._j,o=0;for(let n=0;n<4;n+=1){e=(e+1)%256,i=(i+t[e])%256;const s=t[e];t[e]=t[i],t[i]=s,o|=t[(t[e]+t[i])%256]<<24-8*n}return this._i=e,this._j=i,o}class Ts extends To{_doReset(){const t=this._key,e=t.words,i=t.sigBytes;this._S=[];const o=this._S;for(let t=0;t<256;t+=1)o[t]=t;for(let t=0,n=0;t<256;t+=1){const s=t%i,r=e[s>>>2]>>>24-s%4*8&255;n=(n+o[t]+r)%256;const a=o[t];o[t]=o[n],o[n]=a}this._j=0,this._i=this._j}_doProcessBlock(t,e){t[e]^=_s.call(this)}}Ts.keySize=8,Ts.ivSize=0;const Ns=To._createHelper(Ts);class Is extends Ts{constructor(...t){super(...t),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let t=this.cfg.drop;t>0;t-=1)_s.call(this)}}const As=To._createHelper(Is),Ls=16,Os=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Ds=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]],Fs={pbox:[],sbox:[]};function js(t,e){const i=e>>24&255,o=e>>16&255,n=e>>8&255,s=255&e;let r=t.sbox[0][i]+t.sbox[1][o];return r^=t.sbox[2][n],r+=t.sbox[3][s],r}function $s(t,e,i){let o,n=e,s=i;for(let e=0;e<Ls;++e)n^=t.pbox[e],s=js(t,n)^s,o=n,n=s,s=o;return o=n,n=s,s=o,s^=t.pbox[Ls],n^=t.pbox[17],{left:n,right:s}}class Vs extends Oo{constructor(t,e,i){super(t,e,i),this.blockSize=2}_doReset(){if(this._keyPriorReset===this._key)return;const t=this._keyPriorReset=this._key,e=t.words,i=t.sigBytes/4;!function(t,e,i){for(let e=0;e<4;e++){t.sbox[e]=[];for(let i=0;i<256;i++)t.sbox[e][i]=Ds[e][i]}let o=0;for(let n=0;n<18;n++)t.pbox[n]=Os[n]^e[o],o++,o>=i&&(o=0);let n=0,s=0,r=0;for(let e=0;e<18;e+=2)r=$s(t,n,s),n=r.left,s=r.right,t.pbox[e]=n,t.pbox[e+1]=s;for(let e=0;e<4;e++)for(let i=0;i<256;i+=2)r=$s(t,n,s),n=r.left,s=r.right,t.sbox[e][i]=n,t.sbox[e][i+1]=s}(Fs,e,i)}encryptBlock(t,e){const i=$s(Fs,t[e],t[e+1]);t[e]=i.left,t[e+1]=i.right}decryptBlock(t,e){const i=function(t,e,i){let o,n=e,s=i;for(let e=17;e>1;--e)n^=t.pbox[e],s=js(t,n)^s,o=n,n=s,s=o;return o=n,n=s,s=o,s^=t.pbox[1],n^=t.pbox[0],{left:n,right:s}}(Fs,t[e],t[e+1]);t[e]=i.left,t[e+1]=i.right}}Vs.keySize=4,Vs.ivSize=2;const Ps=Oo._createHelper(Vs);function Us(t,e,i,o){const n=t;let s;const r=this._iv;r?(s=r.slice(0),this._iv=void 0):s=this._prevBlock,o.encryptBlock(s,0);for(let t=0;t<i;t+=1)n[e+t]^=s[t]}class Rs extends No{}Rs.Encryptor=class extends Rs{processBlock(t,e){const i=this._cipher,{blockSize:o}=i;Us.call(this,t,e,o,i),this._prevBlock=t.slice(e,e+o)}},Rs.Decryptor=class extends Rs{processBlock(t,e){const i=this._cipher,{blockSize:o}=i,n=t.slice(e,e+o);Us.call(this,t,e,o,i),this._prevBlock=n}};class zs extends No{}zs.Encryptor=class extends zs{processBlock(t,e){const i=t,o=this._cipher,{blockSize:n}=o,s=this._iv;let r=this._counter;s&&(this._counter=s.slice(0),r=this._counter,this._iv=void 0);const a=r.slice(0);o.encryptBlock(a,0),r[n-1]=r[n-1]+1|0;for(let t=0;t<n;t+=1)i[e+t]^=a[t]}},zs.Decryptor=zs.Encryptor;const Hs=t=>{let e=t;if(255==(t>>24&255)){let i=t>>16&255,o=t>>8&255,n=255&t;255===i?(i=0,255===o?(o=0,255===n?n=0:n+=1):o+=1):i+=1,e=0,e+=i<<16,e+=o<<8,e+=n}else e+=1<<24;return e};
/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
class Bs extends No{}Bs.Encryptor=class extends Bs{processBlock(t,e){const i=t,o=this._cipher,{blockSize:n}=o,s=this._iv;let r=this._counter;s&&(this._counter=s.slice(0),r=this._counter,this._iv=void 0),(t=>{const e=t;e[0]=Hs(e[0]),0===e[0]&&(e[1]=Hs(e[1]))})(r);const a=r.slice(0);o.encryptBlock(a,0);for(let t=0;t<n;t+=1)i[e+t]^=a[t]}},Bs.Decryptor=Bs.Encryptor;class Gs extends No{}Gs.Encryptor=class extends Gs{processBlock(t,e){this._cipher.encryptBlock(t,e)}},Gs.Decryptor=class extends Gs{processBlock(t,e){this._cipher.decryptBlock(t,e)}};class Zs extends No{}Zs.Encryptor=class extends Zs{processBlock(t,e){const i=t,o=this._cipher,{blockSize:n}=o,s=this._iv;let r=this._keystream;s&&(this._keystream=s.slice(0),r=this._keystream,this._iv=void 0),o.encryptBlock(r,0);for(let t=0;t<n;t+=1)i[e+t]^=r[t]}},Zs.Decryptor=Zs.Encryptor;const Ws={pad(t,e){const i=4*e,o=i-t.sigBytes%i;t.concat(so.random(o-1)).concat(so.create([o<<24],1))},unpad(t){const e=t,i=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=i}},Ks={pad(t,e){const i=t,o=4*e;i.clamp(),i.sigBytes+=o-(t.sigBytes%o||o)},unpad(t){const e=t,i=e.words;for(let t=e.sigBytes-1;t>=0;t-=1)if(i[t>>>2]>>>24-t%4*8&255){e.sigBytes=t+1;break}}},Ys={pad(t,e){t.concat(so.create([2147483648],1)),Ks.pad(t,e)},unpad(t){const e=t;Ks.unpad(e),e.sigBytes-=1}},Js={stringify:t=>t.ciphertext.toString(ro),parse(t){const e=ro.parse(t);return Do.create({ciphertext:e})}};var Qs={lib:{Base:no,WordArray:so,BufferedBlockAlgorithm:co,Hasher:ho,Cipher:_o,StreamCipher:To,BlockCipherMode:No,BlockCipher:Oo,CipherParams:Do,SerializableCipher:jo,PasswordBasedCipher:Vo},x64:{Word:vo,WordArray:mo},enc:{Hex:ro,Latin1:ao,Utf8:lo,Utf16:Ro,Utf16BE:Uo,Utf16LE:zo,Base64:go,Base64url:Ho},algo:{HMAC:uo,MD5:Eo,SHA1:Go,SHA224:sn,SHA256:en,SHA384:pn,SHA512:cn,SHA3:En,RIPEMD160:Vn,PBKDF2:Rn,EvpKDF:Mo,AES:is,DES:hs,TripleDES:ps,Rabbit:bs,RabbitLegacy:ks,RC4:Ts,RC4Drop:Is,Blowfish:Vs},mode:{CBC:Ao,CFB:Rs,CTR:zs,CTRGladman:Bs,ECB:Gs,OFB:Zs},pad:{Pkcs7:Lo,AnsiX923:{pad(t,e){const i=t,o=i.sigBytes,n=4*e,s=n-o%n,r=o+s-1;i.clamp(),i.words[r>>>2]|=s<<24-r%4*8,i.sigBytes+=s},unpad(t){const e=t,i=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=i}},Iso10126:Ws,Iso97971:Ys,NoPadding:{pad(){},unpad(){}},ZeroPadding:Ks},format:{OpenSSL:Fo,Hex:Js},kdf:{OpenSSL:$o},MD5:So,HmacMD5:ko,SHA1:Zo,HmacSHA1:Wo,SHA224:rn,HmacSHA224:an,SHA256:on,HmacSHA256:nn,SHA384:vn,HmacSHA384:mn,SHA512:hn,HmacSHA512:un,SHA3:Sn,HmacSHA3:kn,RIPEMD160:Pn,HmacRIPEMD160:Un,PBKDF2:(t,e,i)=>Rn.create(i).compute(t,e),EvpKDF:(t,e,i)=>Mo.create(i).compute(t,e),AES:os,DES:us,TripleDES:vs,Rabbit:ys,RabbitLegacy:Ms,RC4:Ns,RC4Drop:As,Blowfish:Ps};const qs=(t,e=0)=>{try{let i=3735928559^e,o=1103547991^e;for(let e,n=0;n<t.length;n++)e=t.charCodeAt(n),i=Math.imul(i^e,2654435761),o=Math.imul(o^e,1597334677);return i=Math.imul(i^i>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),4294967296*(2097151&o)+(i>>>0)}catch(t){return console.warn("Error in cyrb53: ",t),fr("Error in cyrb53: ",t),0}},Xs=t=>{let e;return e=t.includes("http")?new URL(t):new URL("http://"+t),e.hostname.replace("www.","")};function tr(t){try{const e=localStorage.getItem(t);if(!e)return null;try{return JSON.parse(e)}catch(t){return e}}catch(t){return console.warn("Error in getLocalStorage: ",t),null}}const er=(t,e,i=!1,o="localStorage")=>{try{const n=i?btoa(e):e;"localStorage"===o?localStorage.setItem(t,n):sessionStorage.setItem(t,n)}catch(t){console.warn("Error in setLocalStorage: ",t),fr("Error in setLocalStorage: ",t)}},ir=(t,e=!1,i="localStorage")=>{try{let o=null;return o="localStorage"===i?localStorage.getItem(t):sessionStorage.getItem(t),o&&e?atob(o):o}catch(t){return console.warn("Error in getLocalStorage: ",t),fr("Error in getLocalStorage: ",t),null}},or=(t,e="localStorage")=>{try{"localStorage"===e?localStorage.removeItem(t):sessionStorage.removeItem(t)}catch(t){console.warn("Error in removeLocalStorageData: ",t),fr("Error in removeLocalStorageData: ",t)}},nr=(...t)=>{if(t)switch(t.length){case 1:return r`calc(${t[0]}rem * var(--velt-base-rem-unit, 1))`;case 2:return r`calc(${t[0]}rem * var(--velt-base-rem-unit, 1)) calc(${t[1]}rem * var(--velt-base-rem-unit, 1))`;case 3:return r`calc(${t[0]}rem * var(--velt-base-rem-unit, 1)) calc(${t[1]}rem * var(--velt-base-rem-unit, 1)) 
                calc(${t[2]}rem * var(--velt-base-rem-unit, 1))`;case 4:return r`calc(${t[0]}rem * var(--velt-base-rem-unit, 1)) calc(${t[1]}rem * var(--velt-base-rem-unit, 1))
                calc(${t[2]}rem * var(--velt-base-rem-unit, 1)) calc(${t[3]}rem * var(--velt-base-rem-unit, 1))`}return r`0`},sr=(t,e,i)=>{try{const o=Qs.enc.Utf8.parse(e),n=Qs.enc.Utf8.parse(i);return Qs.AES.encrypt(Qs.enc.Utf8.parse(t),o,{keySize:32,iv:n,mode:Qs.mode.CBC,padding:Qs.pad.Pkcs7}).toString()}catch(e){return console.warn("Error in encrypt: ",e),fr("Error in encrypt: ",e),t}},rr=(t,e,i)=>{try{const o=Qs.enc.Utf8.parse(e),n=Qs.enc.Utf8.parse(i);return Qs.AES.decrypt(t,o,{keySize:32,iv:n,mode:Qs.mode.CBC,padding:Qs.pad.Pkcs7}).toString(Qs.enc.Utf8)}catch(t){return console.warn("Error in decrypt: ",t),fr("Error in decrypt: ",t),null}},ar=()=>{try{const t=ir("_sfut",!0);if(t){const e=rr(t,wt,bt);if(e)return JSON.parse(e);console.warn("Error in getUserFromToken: ","Invalid token."),or("_sfut")}else{const t=ir("snippyly-user",!0);if(t)return lr(),JSON.parse(t)}return null}catch(t){return console.warn("Error in getUserFromToken: ",t),fr("Error in getUserFromToken: ",t),null}},lr=()=>{try{const t=ir("snippyly-user",!0);if(t){const e=sr(t,wt,bt);er("_sfut",e,!0)}or("snippyly-user")}catch(t){console.warn("Error in moveSnippylyUserToST: ",t),fr("Error in moveSnippylyUserToST: ",t)}},dr=(t=!0)=>{try{const e=ir("_sfgut",!0);if(e){const t=rr(e,wt,bt);return t?JSON.parse(t):null}if(t){const t=ft,e=t[Math.floor(Math.random()*t.length)],i=e.name,o=e.photoUrl,n={name:i,email:"guest@usesuperflow.com",userId:Math.floor(1e9*Math.random())+"",photoUrl:o,isGuest:!0},s=JSON.stringify(n),r=sr(s,wt,bt);return er("_sfgut",r,!0),n}return null}catch(t){return console.warn("Error in getGuestUser: ",t),fr("Error in getGuestUser: ",t),null}},cr=t=>{try{const e=t?JSON.stringify(t):"false";er("sfCustomerMetadata",e)}catch(t){console.warn("Error in setCustomerMetadataToStorage: ",t),fr("Error in setCustomerMetadataToStorage: ",t)}},hr=function(t=function(t="[DEFAULT]"){const e=ke.get(t);if(!e&&"[DEFAULT]"===t&&Vt())return Oe();if(!e)throw Ae.create("no-app",{appName:t});return e}(),e="us-central1"){const i=function(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}(Yt(t),"functions"),o=i.getImmediate({identifier:e}),n=$t("functions");return n&&function(t,e,i){!function(t,e,i){t.emulatorOrigin=`http://${e}:${i}`}(Yt(t),e,i)}(o,...n),o}(Oe({apiKey:"AIzaSyD-upDZIcd4inmT2hCbVjN8rMcHqY-j1WE",projectId:"snippyly-sdk-prod",messagingSenderId:"769823558474",appId:"1:769823558474:web:79f3bb0db8fd99f6f58fb3"}));let ur,pr={sourcePlatform:"superflowToolbar"};const vr=(t={})=>{pr={...pr,...t}},mr=t=>{ur=t},fr=(t,e,i={})=>{const o={error:t,message:(null==e?void 0:e.message)||e||t,...i};gr("error",o)},gr=(t,e={},i=!0)=>{try{if(null==ur?void 0:ur.userSnippylyId){e=i?{...pr,...e}:e,e={...e};const o={userId:null==ur?void 0:ur.userSnippylyId,event:t,properties:e,sf:!0};wr("track",o)}else console.warn("Untracked event: ",t,e)}catch(t){console.warn("Error in trackEvent: ",t)}},wr=(t,e)=>{try{ei(hr,yt,{timeout:12e5})({type:t,data:e})}catch(t){console.warn("Error in setAnalytics: ",t)}},br=async(t,e,i,o,n)=>{try{const s=ei(hr,kt,{timeout:12e5}),r=await s({apiKey:t,projectId:e,oldUser:i,newUser:o,deleteGuestUserFlag:n});return null==r?void 0:r.data}catch(t){return console.warn("Error in usermigration: ",t),null}};navigator.language.split("-")[0];const yr=new Map;yr.set("es",{Comment:"Comentario","Commenting is disabled. Contact admin.":"Los comentarios están deshabilitados. Póngase en contacto con el administrador.","Arrow feature is disabled. Contact admin.":"La función de flecha está desactivada. Póngase en contacto con el administrador.","All Comments":"Todos los comentarios","Signing In":"Iniciando sesión","Sign in again!":"¡Inicia sesión de nuevo!","Sign in to comment":"Inicia sesión para comentar",Superflow:"Superflujo","Sign in to comment on this page.":"Inicia sesión para comentar en esta página.","Join Community":"Únete a la comunidad","Open in Mobile":"Abrir en móvil","Exit Review Mode":"Salir del modo de revisión","Sign in":"Iniciar sesión","Try Superflow using the toolbar below.":"Prueba Superflujo usando la barra de herramientas de abajo.","Get ready to drop your first comment!":"¡Prepárate para dejar tu primer comentario!","But before you do that, you definitely deserve a high five!":"¡Pero antes de eso, definitivamente mereces un choca esos cinco!",Done:"Hecho","Sign in on the toolbar below and add":"Inicia sesión en la barra de herramientas de abajo y añade","comments on the design flaws.":"comentarios sobre los defectos de diseño.","Click to add comments on this page.":"Haz clic para añadir comentarios en esta página.",Ok:"Ok",Arrow:"Flecha","Live Huddle":"Encuentro en vivo",Recording:"Grabación","Open Comments":"Abrir comentarios",Views:"Vistas",Internal:"Interno",External:"Externo",All:"Todos",Upgrade:"Actualizar","You don't have access.":"No tienes acceso.","Reach out to the admin of this project.":"Contacta al administrador de este proyecto.","Your plan has expired! Please upgrade.":"¡Tu plan ha caducado! Por favor, actualiza.","Your plan has expired!":"¡Tu plan ha caducado!","Please contact the admin.":"Por favor, contacta al administrador.",Share:"Compartir","Add comments & recordings on this page.":"Añade comentarios y grabaciones en esta página.","Learn more":"Aprender más","View project":"Ver proyecto","Sign Out":"Cerrar sesión","You’re a SuperFlow installation wizard!":"¡Eres un mago de la instalación de Superflujo!",Next:"Siguiente"}),yr.set("fr",{Comment:"Commentaire","Commenting is disabled. Contact admin.":"Les commentaires sont désactivés. Contactez l'administrateur.","Arrow feature is disabled. Contact admin.":"La fonction flèche est désactivée. Contactez l'administrateur.","All Comments":"Tous les commentaires","Signing In":"Connexion en cours","Sign in again!":"Connectez-vous à nouveau!","Sign in to comment":"Connectez-vous pour commenter",Superflow:"Superflux","Sign in to comment on this page.":"Connectez-vous pour commenter sur cette page.","Join Community":"Rejoindre la communauté","Open in Mobile":"Ouvrir sur mobile","Exit Review Mode":"Quitter le mode de révision","Sign in":"Se connecter","Try Superflow using the toolbar below.":"Essayez Superflux en utilisant la barre d'outils ci-dessous.","Get ready to drop your first comment!":"Préparez-vous à laisser votre premier commentaire!","But before you do that, you definitely deserve a high five!":"Mais avant cela, vous méritez certainement un tope-là!",Done:"Terminé","Sign in on the toolbar below and add":"Connectez-vous sur la barre d'outils ci-dessous et ajoutez","comments on the design flaws.":"des commentaires sur les défauts de conception.","Click to add comments on this page.":"Cliquez pour ajouter des commentaires sur cette page.",Ok:"Ok",Arrow:"Flèche","Live Huddle":"Discussion en direct",Recording:"Enregistrement","Open Comments":"Ouvrir les commentaires",Views:"Vues",Internal:"Interne",External:"Externe",All:"Tous",Upgrade:"Mettre à jour","You don't have access.":"Vous n'avez pas accès.","Reach out to the admin of this project.":"Contactez l'administrateur de ce projet.","Your plan has expired! Please upgrade.":"Votre plan a expiré! Veuillez mettre à jour.","Your plan has expired!":"Votre plan a expiré!","Please contact the admin.":"Veuillez contacter l'administrateur.",Share:"Partager","Add comments & recordings on this page.":"Ajoutez des commentaires et des enregistrements sur cette page.","Learn more":"En savoir plus","View project":"Voir le projet","Sign Out":"Se déconnecter","You’re a SuperFlow installation wizard!":"Vous êtes un sorcier d'installation de Superflux!",Next:"Suivant"}),yr.set("hi",{Comment:"टिप्पणी","Commenting is disabled. Contact admin.":"टिप्पणी करना अक्षम है. व्यवस्थापक से संपर्क करें.","Arrow feature is disabled. Contact admin.":"तीर सुविधा अक्षम है. व्यवस्थापक से संपर्क करें.","All Comments":"सभी टिप्पणियाँ","Signing In":"साइन इन कर रहा है","Sign in again!":"फिर से साइन इन करें!","Sign in to comment":"टिप्पणी करने के लिए साइन इन करें",Superflow:"सुपरफ्लो","Sign in to comment on this page.":"इस पृष्ठ पर टिप्पणी करने के लिए साइन इन करें।","Join Community":"समुदाय में शामिल हों","Open in Mobile":"मोबाइल में खोलें","Exit Review Mode":"समीक्षा मोड से बाहर निकलें","Sign in":"साइन इन करें","Try Superflow using the toolbar below.":"टूलबार का उपयोग करके सुपरफ्लो का प्रयास करें।","Get ready to drop your first comment!":"अपनी पहली टिप्पणी डालने के लिए तैयार हो जाओ!","But before you do that, you definitely deserve a high five!":"लेकिन इससे पहले, आपको निश्चित रूप से एक उच्च पांच मिलता है!",Done:"किया हुआ","Sign in on the toolbar below and add":"टूलबार पर साइन इन करें और जोड़ें","comments on the design flaws.":"डिज़ाइन की खामियों पर टिप्पणियाँ।","Click to add comments on this page.":"इस पृष्ठ पर टिप्पणियाँ जोड़ने के लिए क्लिक करें।",Ok:"ठीक",Arrow:"तीर","Live Huddle":"लाइव हडल",Recording:"रेकॉर्डिंग","Open Comments":"टिप्पणियाँ खोलें",Views:"दृश्य",Internal:"आंतरिक",External:"बाहरी",All:"सब",Upgrade:"अपग्रेड","You don't have access.":"आपके पास पहुंच नहीं है।","Reach out to the admin of this project.":"इस परियोजना के व्यवस्थापक से संपर्क करें।","Your plan has expired! Please upgrade.":"आपकी योजना समाप्त हो गई है! कृपया अपग्रेड करें।","Your plan has expired!":"आपकी योजना समाप्त हो गई है!","Please contact the admin.":"कृपया व्यवस्थापक से संपर्क करें।",Share:"शेयर","Add comments & recordings on this page.":"इस पृष्ठ पर टिप्पणियाँ और रिकॉर्डिंग जोड़ें।","Learn more":"और अधिक जानें","View project":"परियोजना देखें","Sign Out":"साइन आउट","You’re a SuperFlow installation wizard!":"आप एक सुपरफ्लो स्थापना विज़ार्ड हैं!",Next:"आगामी"}),yr.set("it",{Comment:"Commento","Commenting is disabled. Contact admin.":"I commenti sono disabilitati. Contatta l'amministratore.","Arrow feature is disabled. Contact admin.":"La funzione freccia è disabilitata. Contatta l'amministratore.","All Comments":"Tutti i commenti","Signing In":"Accesso in corso","Sign in again!":"Accedi di nuovo!","Sign in to comment":"Accedi per commentare",Superflow:"Superflusso","Sign in to comment on this page.":"Accedi per commentare su questa pagina.","Join Community":"Unisciti alla comunità","Open in Mobile":"Apri su mobile","Exit Review Mode":"Esci dalla modalità di revisione","Sign in":"Accedi","Try Superflow using the toolbar below.":"Prova Superflusso utilizzando la barra degli strumenti qui sotto.","Get ready to drop your first comment!":"Preparati a lasciare il tuo primo commento!","But before you do that, you definitely deserve a high five!":"Ma prima di farlo, meriti sicuramente un cinque in alto!",Done:"Fatto","Sign in on the toolbar below and add":"Accedi alla barra degli strumenti qui sotto e aggiungi","comments on the design flaws.":"commenti sui difetti di progettazione.","Click to add comments on this page.":"Clicca per aggiungere commenti su questa pagina.",Ok:"Ok",Arrow:"Freccia","Live Huddle":"Riunione dal vivo",Recording:"Registrazione","Open Comments":"Apri commenti",Views:"Visualizzazioni",Internal:"Interno",External:"Esterno",All:"Tutti",Upgrade:"Aggiorna","You don't have access.":"Non hai accesso.","Reach out to the admin of this project.":"Contatta l'amministratore di questo progetto.","Your plan has expired! Please upgrade.":"Il tuo piano è scaduto! Si prega di aggiornare.","Your plan has expired!":"Il tuo piano è scaduto!","Please contact the admin.":"Si prega di contattare l'amministratore.",Share:"Condividi","Add comments & recordings on this page.":"Aggiungi commenti e registrazioni su questa pagina.","Learn more":"Scopri di più","View project":"Visualizza progetto","Sign Out":"Disconnetti","You’re a SuperFlow installation wizard!":"Sei un mago dell'installazione di Superflusso!",Next:"Avanti"}),yr.set("ru",{Comment:"Комментарий","Commenting is disabled. Contact admin.":"Комментирование отключено. Свяжитесь с админом.","Arrow feature is disabled. Contact admin.":"Функция стрелки отключена. Свяжитесь с администратором.","All Comments":"Все комментарии","Signing In":"Вход в систему","Sign in again!":"Войдите снова!","Sign in to comment":"Войдите, чтобы оставить комментарий",Superflow:"Суперпоток","Sign in to comment on this page.":"Войдите, чтобы оставить комментарий на этой странице.","Join Community":"Присоединиться к сообществу","Open in Mobile":"Открыть на мобильном","Exit Review Mode":"Выйти из режима обзора","Sign in":"Войти","Try Superflow using the toolbar below.":"Попробуйте Суперпоток, используя панель инструментов ниже.","Get ready to drop your first comment!":"Приготовьтесь оставить свой первый комментарий!","But before you do that, you definitely deserve a high five!":"Но перед этим вы определенно заслуживаете пять!",Done:"Сделано","Sign in on the toolbar below and add":"Войдите на панели инструментов ниже и добавьте","comments on the design flaws.":"комментарии об ошибках в дизайне.","Click to add comments on this page.":"Нажмите, чтобы добавить комментарии на этой странице.",Ok:"Ок",Arrow:"Стрелка","Live Huddle":"Прямой сбор",Recording:"Запись","Open Comments":"Открыть комментарии",Views:"Просмотры",Internal:"Внутренний",External:"Внешний",All:"Все",Upgrade:"Обновить","You don't have access.":"У вас нет доступа.","Reach out to the admin of this project.":"Обратитесь к администратору этого проекта.","Your plan has expired! Please upgrade.":"Ваш план истек! Пожалуйста, обновите.","Your plan has expired!":"Ваш план истек!","Please contact the admin.":"Пожалуйста, свяжитесь с администратором.",Share:"Поделиться","Add comments & recordings on this page.":"Добавьте комментарии и записи на этой странице.","Learn more":"Узнать больше","View project":"Посмотреть проект","Sign Out":"Выйти","You’re a SuperFlow installation wizard!":"Вы волшебник установки Суперпотока!",Next:"Далее"}),yr.set("uk",{Comment:"Коментар","Commenting is disabled. Contact admin.":"Коментування вимкнено. Зв'язатися з адміном.","Arrow feature is disabled. Contact admin.":"Функція стрілки вимкнена. Зв'язатися з адміном.","All Comments":"Всі коментарі","Signing In":"Увійти в систему","Sign in again!":"Увійдіть знову!","Sign in to comment":"Увійдіть, щоб залишити коментар",Superflow:"Суперпотік","Sign in to comment on this page.":"Увійдіть, щоб залишити коментар на цій сторінці.","Join Community":"Приєднатися до спільноти","Open in Mobile":"Відкрити на мобільному","Exit Review Mode":"Вийти з режиму огляду","Sign in":"Увійти","Try Superflow using the toolbar below.":"Спробуйте Суперпотік, використовуючи панель інструментів нижче.","Get ready to drop your first comment!":"Приготуйтеся залишити свій перший коментар!","But before you do that, you definitely deserve a high five!":"Але перед тим, як ви це зробите, ви точно заслуговуєте на високу п'ятірку!",Done:"Готово","Sign in on the toolbar below and add":"Увійдіть в панель інструментів нижче і додайте","comments on the design flaws.":"коментарі про помилки в дизайні.","Click to add comments on this page.":"Натисніть, щоб додати коментарі на цій сторінці.",Ok:"Добре",Arrow:"Стрілка","Live Huddle":"Пряма група",Recording:"Запис","Open Comments":"Відкрити коментарі",Views:"Перегляди",Internal:"Внутрішній",External:"Зовнішній",All:"Все",Upgrade:"Оновити","You don't have access.":"У вас немає доступу.","Reach out to the admin of this project.":"Зверніться до адміністратора цього проекту.","Your plan has expired! Please upgrade.":"Термін дії вашого плану закінчився! Будь ласка, оновіть.","Your plan has expired!":"Термін дії вашого плану закінчився!","Please contact the admin.":"Будь ласка, зв'яжіться з адміністратором.",Share:"Поділитися","Add comments & recordings on this page.":"Додайте коментарі та записи на цій сторінці.","Learn more":"Дізнатися більше","View project":"Переглянути проект","Sign Out":"Вийти","You’re a SuperFlow installation wizard!":"Ви чарівник встановлення Суперпотоку!",Next:"Далі"});const Cr=t=>{try{return t}catch(e){return t}},xr=r`

    .wrap {
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px 32px;
    }


    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 1.14em;
    }


    .toolbar {
        padding: 1.14em;
        background: #FFFFFF;
        border: 1px solid #E6E8EC;
        box-shadow: 0px 8px 16px rgba(143, 149, 178, 0.15);
        border-radius: 3.78em;
        display: inline-flex;
        justify-content: left;
        gap: 0.57em;
        flex-basis: auto;
    }

    .toolbar-section,
    .toolbar-avatars,
    .toolbar-actions,
    .toolbar-actions1,
    .toolbar-actions2,
    .action,
    .action-border {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toolbar-icon {
        width: 32px;
        height: 32px;
        border-radius: 50px;
        fill: #8F95B2;
        cursor: pointer;
    }

    .toolbar-icon:hover,
    .action-dropdown:hover {
        background: #EAE8F9;
    }

    .toolbar-icon:active,
    .action-dropdown:active,
    .action-dropdown:active *{
        fill: #FFFFFF !important;
        background: #625DF5;
    }

    .action-dropdown-icon {
        width: 32px;
        height: 32px;
        fill: #8F95B2;
        border-radius: 50px;
    }

    .toolbar-icon-border {
        width: 24px;
        height: 24px;
        fill: #8F95B2;
        cursor: pointer;
    }

    .toolbar-icon-dropdown-arrow {
        width: 16px;
        height: 16px;
        fill: #8F95B2;
        cursor: pointer;
    }

    .toolbar-logo {
        height: 1.82em;
    }

	.toolbar-logo img {
        height: 1.82em;
    }

	.toolbar-logo svg {
		height: 100%;
		width: auto;
	}

    .toolbar-divider {
        width: 1px;
        height: 1.57em;
        flex-grow: 0;
        border-radius: 0.57em;
        background-color: #d4d6df;
    }

    .toolbar-button {
        display: block;
        background: #625DF5;
        border-radius: 4em;
        padding: 0.78em 1.28em;
        text-decoration: none;
        color: #FFFFFF;
    }

    .toolbar-button a {
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.14em;
    }

    .toolbar-avatars {
        margin: 0px 6px;
    }

    .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 35px;
        height: 35px;
        border-radius: 3.42em;
    }

    .avatar.blue {
        border: 2px solid #3772FF;
    }

    .avatar.gray {
        border: 2px solid #B1B5C3;
    }

    .avatar.yellow {
        border: 2px solid #FFD166;
    }

    .avatar-img,
    .avatar-text {
        border-radius: 3.42em;
        width: 32px;
        height: 32px;
    }

    .avatar-text {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        text-align: center;
        font-weight: 500;
        font-size: 0.79em;
        line-height: 1.71em;
    }

    .avatar.overlapped {
        margin: 0px -6px;
    }

    .avatar-text.yellow {
        background-color: #FFD166;

    }

    .avatar-text.more {
        color: #000000 !important;
    }

    .toolbar-actions {
        padding: 0px 4px !important;
        gap: 4px;
    }

    .action-dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 6px;
        border-radius: 50px;
    }

    .toolbar-actions1 {
        padding: 0px 8px !important;
        gap: 8px;
    }

    .toolbar-actions2 {
        gap: 8px;
    }

    .action-border {
        padding: 4px 8px;
        border: 1px solid #D4D6DF;
        border-radius: 50px;
        cursor: pointer;
    }

    .action-border:hover,
    .action-border:hover * {
        background: #EAE8F9;
        border-color: rgba(98, 93, 245, 1);
        color: #625DF5;
        stroke: #625DF5;
    }

    .action-border:active,
    .action-border:active * {
        background: #625DF5;
        border-color: #625DF5;
        color: #FFFFFF;
        fill: #FFFFFF;
    }


    .action-text {
        margin: 0px 8px 0px 4px;
        color: #8F95B2;
    }

    .toolbar-img {
        width: 32px;
        height: 32px;
    }

    /* Tooltip text */
    .tooltip {
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .tooltip-link {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.5em;
    }

    .tooltip-link:hover {}

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        block-size: auto;
        width: max-content;
        bottom: 140%;
        background-color: black !important;
        color: #fff;
        text-align: left;
        padding: 6px 12px;
        border-radius: 6px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 2em;
        display: flex;
        flex-direction: column;
        gap: ${nr(.4)};

        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        bottom: 0;
        right: 50%;
        width: 12px;
        height: 12px;
        background-color: #000;
        border-radius: 4px;
        transform: translate(50%, 41%) rotate(45deg);
        transform-origin: center;
    }

    .tooltip .tour-tooltiptext {
        block-size: auto;
        width: max-content;
        bottom: 140%;
        background-color: #625DF5 !important;
        color: #fff;
        text-align: left;
        padding: 16px;
        border-radius: 6px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 3em;
        max-width: 280px;

        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
        transition: opacity 0.5s;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .tooltip .tour-tooltiptext::after {
        content: " ";
        position: absolute;
        bottom: 0;
        right: 50%;
        width: 12px;
        height: 12px;
        background-color: #625DF5;
        border-radius: 4px;
        transform: translate(50%, 41%) rotate(45deg);
        transform-origin: center;
    }

    .tour-tooltip-content {
        line-height: 1.5em;
    }

    .tour-tooltip-action {
        border-radius: 8px;
        padding: 8px 16px;
        color: white;
        background: #403cab;
        border: 0;
        align-self: end;
        cursor: pointer;
    }
`,Er=r`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }

    .snippyly-plugin-container {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 2147483577;
        margin: ${nr(1.5)};
        margin-bottom: ${nr(3)}; // Added to prevent overlap between plugin UI and webflow badge
        max-width: 100vw !important;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        gap: 1em;
    }

    .snippyly-plugin-container * {
        box-sizing: border-box;
    }

    .toolbar {
        padding: 1em;
        gap: 0.25em;
        max-width: 100vw !important;
        background: white;
        transition: all 0.2s ease-in-out;
    }

    .toolbar.private-comment-mode {
        background: #18173D;
        border: 1px solid rgba(230, 232, 236, 0.12);
        box-shadow: 0px 8px 16px 0px rgba(143, 149, 178, 0.15);
    }

    .toolbar.private-comment-mode .s-more-menu.dropdown .dropdown-content {
        background: #18173D !important;
        border: 1px solid rgba(230, 232, 236, 0.12);
        box-shadow: rgba(143, 149, 178, 0.15) 0px 8px 16px 0px;
    }

    .toolbar.private-comment-mode .s-more-menu.dropdown hr {
        border-top-color: #343354;
    }

    .toolbar.private-comment-mode .toolbar-divider {
        background-color: #343354;
    }

    .toolbar.private-comment-mode .s-more-menu.dropdown .dropdown-content .menu-point,
    .toolbar.private-comment-mode .s-more-menu.dropdown .dropdown-content .menu-point-wrap {
        color: white !important;
    }

    .toolbar.private-comment-mode .s-more-menu.dropdown .dropdown-content .menu-point svg:not(.toolbar-logo) * {
        fill: currentColor;
    }

    .toolbar.private-comment-mode .s-more-menu.dropdown .dropdown-content .menu-point:not(.disable-hover):hover {
        background: var(--primary-6, #625DF5);
    }

    .toolbar.private-comment-mode .toolbar-icon {
        fill: #8F95B2;
    }

    .toolbar.private-comment-mode .toolbar-icon:hover {
        background: #24234C;
    }

    .toolbar.private-comment-mode .toolbar-icon:active {
        fill: #FFFFFF !important;
        background: rgb(98, 93, 245) !important;
    }

    .toolbar.private-comment-mode .action-border {
        border: 1px solid #3F4B6C;
    }

    .toolbar.private-comment-mode .active .toolbar-icon {
        fill: #FFFFFF !important;
        background: #625DF5;
    }

    .toolbar.private-comment-mode .action-dropdown:hover {
        background: #24234C;
    }

    .toolbar.private-comment-mode .action-dropdown:active {
        background: rgb(98, 93, 245) !important;
    }

    .toolbar.private-comment-mode velt-sidebar-button .action-border:hover {
        border: 1px solid #B0AEFA;
        background: #24234C !important;
    }

    .toolbar.private-comment-mode velt-sidebar-button .action-border:hover svg {
        background: #24234C !important;
    }

    .toolbar.private-comment-mode velt-sidebar-button .action-border:hover svg path {
        stroke: #B0AEFA;
    }

    .toolbar.private-comment-mode velt-sidebar-button .action-border:hover .action-text {
        color: #B0AEFA;
        background: #24234C !important;
    }

    .action-border {
        padding: 3px 7px;
    }

    .toolbar-icon.active,
    .action-dropdown.active,
    .action-dropdown.active *{
        fill: #FFFFFF !important;
        background: #625DF5 !important;
    }

    .toolbar-img {
        border-radius: 50px;
    }

    .profile-initial {
        background: #625df5;
        width: 32px;
        height: 32px;
        border-radius: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-transform: uppercase;
    }

    .sign-in-button {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    .sign-in-button.loading {
        cursor: not-allowed;
    }

    .toolbar:not(.expanded) .toolbar-icon-arrow {
        transform: rotate(180deg);
    }

    velt-huddle-tool .action-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    velt-huddle-tool .action-dropdown .mat-menu-trigger {
        display: flex;
    }

    velt-huddle-tool .action-dropdown svg path:first-child {
        stroke: rgb(143, 149, 178); 
        stroke-width: 1.5px;
        fill: none !important;
    }

    velt-huddle-tool .action-dropdown svg path:not(:first-child) {
        fill: rgb(143, 149, 178);
        stroke: rgb(143, 149, 178);
        stroke-width: 0.5px;
    }

    velt-huddle-tool .action-dropdown:active svg path:first-child,
    velt-huddle-tool .action-dropdown.active svg path:first-child  {
        stroke: white;
        fill: transparent !important;
    }

    velt-huddle-tool .action-dropdown:active svg path:not(:first-child),
    velt-huddle-tool .action-dropdown.active svg path:not(:first-child) {
        fill: white;
        stroke: white;
    }

    velt-recorder-tool .action-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    velt-recorder-tool .action-dropdown .mat-menu-trigger {
        display: flex;
    }

    velt-recorder-tool .action-dropdown svg path:first-child {
        fill: rgb(143, 149, 178);
        stroke-width: 1.5px;
    }

    velt-recorder-tool .action-dropdown svg path:not(:first-child) {
        fill: rgb(143, 149, 178);
    }

    velt-recorder-tool .action-dropdown:active svg path:first-child {
        fill: white;
    }

    velt-recorder-tool .action-dropdown:active svg path:not(:first-child) {
        fill: white;
    }

    .d-none {
        display: none !important;
    }

    velt-presence {
        display: flex;

        --velt-presence-avatar-size: 1.5rem;
        --velt-avatar-size: 1.5rem;
        --velt-presence-tooltip-bg-color: var(--velt-bg-color);
        --velt-presence-tooltip-border-color: var(--velt-border-color);
    }

    .s-presence-container {
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .s-presence-avatar {
        position: relative;
        box-shadow: 0px 0px 0px 3px;
        border-radius: 50%;
        overflow: hidden;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        // background-color: white;
    }

    .s-presence-avatar.more-users {
        background: #4578a7;
        box-shadow: 0px 0px 0px 3px #4578a7;
    }

    .s-presence-avatar:not(:last-child):not(.more-users) {
        margin-left: -6px !important;
    }

    .s-presence-avatar-image {
        width: 100%;
        height: auto;
        display: block;
    }

    .s-presence-avatar-image-small {
        width: ${nr(1.6)};
        height: auto;
        display: block;
    }

    .s-presence-avatar-initial {
        color: white;
    }

    .away {
        filter: grayscale(1);
    }

    velt-sidebar-button .action-border path {
        stroke: #8f95b2;
    }

    velt-sidebar-button .action-border {
        padding: 3px 7px 3px 10px;
    }

    .active .action-border,
    .active .action-border * {
        background: #625DF5;
        border-color: #625DF5;
        color: #FFFFFF;
        fill: #FFFFFF;
    }

    .active .toolbar-icon {
        fill: #FFFFFF !important;
        background: #625DF5;
    }

    .toolbar-avatars {
        margin: 0 !important;
    }

    .toolbar-avatars velt-presence:not(:empty) {
        margin: 0px 6px;
    }

    .tooltip {
        justify-content: center;
        align-items: center;
    }

    .cursor-pointer {
        cursor: pointer !important;
    }

    .toolbar-button {
        padding: 0.55em 1.28em;
        white-space: nowrap;
        margin: 0 8px !important;
    }

    .snippyly-logo {
         cursor: pointer; 
		 margin-right: 12px;  
    }

    snippyly-user-avatar.presence-user-avatar {
        box-shadow: 0 0 0 3px!important;
        display: flex!important;
        border-radius: 50%!important;
        z-index: 1!important;
    }

    .s-user-avatar-container {
        width: 28px!important;
        height: 28px!important;
        border-radius: 50%!important;
        overflow: hidden!important;
        display: inline-block!important;
    }

    .s-user-avatar-image {
        object-fit: cover!important;
        width: 100%!important;
        height: 100%!important;
    }

    .s-user-avatar-initial-container {
        width: 100%!important;
        height: 100%!important;
        display: flex!important;
        justify-content: center!important;
        align-items: center!important;
    }

    .s-user-avatar-initial {
        color: black !important;
        font-size: ${nr(.8)} !important;
        position: relative !important;
    }

    .s-user-avatar-initial::after {
        content: attr(data-modal-author-initial);
        position: absolute!important;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .snippyly-plugin-modal-container {
        position: fixed;
        z-index: 2147483647;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw !important;
        height: 100vh !important;
        background: rgb(20 20 22 / 50%);
        backdrop-filter: blur(4px);
    }

    .s-modal,
    .s-modal-text {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: max-content;
        border-radius: 16px;
        padding: ${nr(3)};
        font-size: ${nr(.8)};
        color: #4c5366;
        box-sizing: border-box;
    }

    .s-modal {
        margin: 16px;
        background-size: 100% 100%;
        background-position: 0px 0px, 0px 0px, 0px 0px;
        background-image: radial-gradient(113% 80% at 17% -2%, #625df573 1%, #ff000000 99%),
            radial-gradient(101% 73% at 92% 0%, #625df5 1%, #ff000000 99%),
            radial-gradient(152% 91% at 120% 120%, #ffffffff 0%, #ffffffff 100%);
    }

    .s-modal img {
		padding: ${nr(2,1,0,1)};
        width: ${nr(8)};
    }

    .s-modal-text h1 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #4C5366;
        font-style: normal;
        margin-bottom: ${nr(1)};
    }

    .s-modal-text p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #4C5366;
    }

    .s-button {
        display: flex;
        align-items: center;
        justify-content: center;
		padding: ${nr(1,2.5)};
        border-radius: ${nr(.8)};
        font-size: ${nr(.8)};
        transition: 0.1s ease;
        cursor: pointer;
    }
    .s-primary {
        background: #625df5;
        color: white;
    }
    .s-primary:hover {
        background: #4f4bbf;
    }

    .s-modal-text {
        gap: ${nr(.2)};
        max-width: ${nr(30)};
        text-align: center;
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
    }

    @media only screen and (max-width: 620px) {

        .snippyly-plugin-container {
            left: 50%;
            right: unset !important;
            transform: translate(-50%, 0);
            margin-left: 0;
            margin-right: 0;
        }
        .snippyly-plugin-container .d-sm-none {
            display: none;
        }
        .profile-img {
            margin-left: 8px;
        }

        .comment-tool-container .tour-tooltiptext {
            left: 0 !important;
        }

        .comment-tool-container .tour-tooltiptext::after {
            right: calc(100% - 16px) !important;
        }
    }

    @media only screen and (max-width: 400px) {
        .snippyly-plugin-container .d-xs-none {
            display: none;
        }

        .action-text {
            margin-right: 0 !important;
        }

        .snippyly-plugin-container svg {
            max-width: 28px !important;
            max-height: 28px !important;
        }

        .action-dropdown {
            padding: 0px 2px;
        }
    }

    .s-user-request-tool-button {
        display: flex;
        align-items: center;
        gap: ${nr(1)};
    }

    .s-user-request-tool-button svg {
        width: 20px;
        height: 20px;
    }

    /* Last 3-dot menu options css */

    .s-more-menu hr {
        width: 90%;
        border: 0;
        border-top: ${nr(.01)} solid #D4D6DF;
        margin: 8px auto;
    }

    .toolbar-section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toolbar-icon {
        width: 32px;
        height: 32px;
        border-radius: 50px;
        fill: #80808a;
        cursor: pointer;
    }

    .toolbar-icon:hover {
        background: #625df5;
        fill: white;
    }

    .toolbar-icon:active {
        fill: #ffffff !important;
        background: #625df5;
    }

    .dropdown {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .dropdown .dropdown-content {
        visibility: hidden;
        block-size: auto;
        width: max-content;
        // bottom: 170%;
        bottom: 100%;
        right: 0%;
        background: #141416 !important;
        border: 1px solid #222226;
        border-radius: 8px;
        padding: 4px 0px;
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        min-width: 212px;
        max-width: 212px;
        background: white !important;
        border: 1px solid #D4D6DF;
    }

    .dropdown:hover .dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .dropdown-content .menu-point {
        display: flex;
        align-items: center;
        gap: ${nr(1)};
        padding: ${nr(.5,1)};
        color: #ababb5;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 2em;

        color: #4C5366;
        width: 100%;
    }

    .dropdown-content .menu-point:not(.disable-hover):hover {
        background: #f0f0f0;
        cursor: pointer;
    }
    
    .dropdown-content a {
        color: #FFCB00;
        display: flex;
        align-items: center;
        gap: ${nr(.25)};
        font-size: 12px;
        color: grey;
        text-decoration: none;
    }

    .dropdown-content a:hover {
        color: #625df5;
    }

    .dropdown-content a:hover svg path {
        fill: #625df5 !important;
    }

    .menu-point.header {
        gap: ${nr(.5)};
    }

    .menu-point-wrap {
        display: flex;
        flex-direction: column;
        color: #ababb5;
        font-size: ${nr(.9)};
		padding: ${nr(0,1,.25,1)};
        gap: ${nr(.5)};
        align-items: flex-start;
        width: 100%;
        line-height: ${nr(1.4)};

        color: #4C5366;
    }

    .user-profile-section {
        margin-left: ${nr(.5)};
    }

    .user-invite-tool-container {
        margin-right: 4px;
    }

    .qrcode-container {
        position: absolute;
        bottom: 100%;
        right: 0;
        width: 200px;
        height: 200px;
        border: 1px solid rgb(230, 232, 236);
        box-shadow: rgba(143, 149, 178, 0.15) 0px 8px 16px;
        border-radius: 16px;
        margin-bottom: 16px;
        z-index: 999;
    }

    img.qrcode {
        border-radius: 16px;
        width: 100%;
        height: 100%;
    }

    .qrcode-container-close-btn {
        position: absolute;
        top: -8px;
        right: -8px;
        background: black;
        color: white;
        border: 0;
        font-size: 12px;
        border-radius: 100px;
        line-height: 24px;
        width: 24px;
        height: 24px;
        line-height: 1;
        cursor: pointer;
    }

    .disable-add-comment-button {
        position: relative;
        width: 48px;
        height: 48px;
        background: #625DF5;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        display: none;
    }

    .s-alert-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        border-radius: 16px;
        background: #FFF8E1;
    }

    .s-alert-btn .error-container {
        display: flex;
        gap: 4px;
        align-items: center;
        color: #EDB400;
        padding: 4px 8px;
    }

    .s-alert-btn .error-container .error-message {
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
    }

	.s-password-alert {
		display: flex;
		align-items: center;
		gap: 4px;
		border-radius: 16px;
		background: #FFF8E1;
	}

	.s-password-alert .error-container {
		display: flex;
		padding: 4px 8px;
		align-items: center;
		gap: 4px;
		border-radius: 16px 0px 0px 16px;
		background: #FFF8E1;
	}

	.s-password-alert .error-container .error-message {
		color: #FFCD2E;
		text-align: center;
		font-family: Poppins;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	.s-password-alert .cta-btn {
		cursor: pointer;
		display: flex;
		height: 32px;
		padding: 5.5px 8px;
		align-items: center;
		gap: 8px;
		border-radius: 16px;
		background: var(--Secondary-3, #FFCD2E);
		color: var(--New-Netural-2, #23262F);
		text-align: center;
		font-family: Poppins;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

    .s-cta-btn {
        display: flex;
        padding: 5.5px 8px;
        align-items: center;
        gap: 8px;
        border-radius: 16px;
        background: #FFCD2E;
        color: white;
        height: 100%;
        cursor: pointer;

        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
    }

    .s-alert-btn.danger {
        background: var(--shade-1, #FBE6E7);
    }

    .s-alert-btn.danger .error-container {
        color: #FF7162;
    }

    .s-alert-btn.danger .s-cta-btn {
        background: #FF7162;
    }

    .s-guest-mode-chip {
        display: flex;
        position: fixed;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2147483558;
    }

    .s-guest-mode-chip-title {
        display: flex;
        padding: 6px 16px;
        align-items: center;
        gap: 8px;
        border-radius: 0px 0px 0px 8px;
        background: var(--neutrals-3, #353945);
        color: #FCFCFD;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
    }

	.s-guest-mode-rounded-corners {
		border-radius: 0px 0px 8px 8px;
	}

    .s-guest-mode-chip-action {
        display: flex;
        padding: 6px 16px;
        align-items: center;
        gap: 8px;
        border-radius: 0px 0px 8px;
        border: 1px solid var(--neutrals-3, #353945);
        background: var(--neutrals-1, #141416);
        color: rgb(252, 252, 253);
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        cursor: pointer;
    }

    .s-guest-mode-signin-modal-container .s-modal {
        background: #FFFFFF;
        padding: 48px 96px;
		position: relative;
    }

	.s-password-container .s-modal {
        padding: 52px 40px 40px 40px;
		width: 460px;
    }

    .s-guest-mode-signin-modal-container .s-modal-superflow-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .s-guest-mode-signin-modal-container .s-modal-superflow-logo span {
        color: #141416;
        font-size: 27.068px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.812px;
    }

    .s-guest-mode-signin-modal-container .s-modal-title {
        color: var(--neutrals-1, #141416);
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.32px;
        margin-top: 24px;
    }

    .s-guest-mode-signin-modal-container .s-modal-subtitle {
        color: var(--primary-6, #625DF5);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        margin-top: 16px;

    }

	.s-guest-mode-signin-modal-container .s-modal-secondary-subtitle {
        text-align: center;
        margin-top: 16px;
		color: #000;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
    }

	.s-guest-mode-signin-modal-container .s-modal-secondary-desc {
		text-align: center;
		margin-top: 8px;
		color: var(--New-Netural-4, #777E90);
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
    }

	.s-guest-mode-signin-modal-container .s-modal-secondary-desc-sign-in {
		display: inline;
		cursor: pointer;
		color: var(--Primary-6, #625DF5);
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		text-decoration-line: underline;
    }

	.s-guest-mode-signin-modal-container .s-modal-secondary-actions {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 12px;
		align-self: stretch;
    }

	.s-guest-mode-signin-modal-container .error-message {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 8px;
		color: var(--Primary-3, #FF7162);
		font-family: Poppins;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
    }

	.s-guest-mode-signin-modal-container .s-modal-secondary-actions-submit {
		display: flex;
        padding: 16px 48px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 100px;
        background: var(--primary-6, #625DF5);
		margin-top: 24px;
    }

	.s-guest-mode-signin-modal-container .s-disabled {
        background: var(--neutrals-8, #E6E8EC);
        cursor: not-allowed;
    }    

    .s-guest-mode-signin-modal-container .s-signin-button {
        display: flex;
        padding: 16px 48px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 100px;
        background: var(--primary-6, #625DF5);
        margin-top: 36px;
    }

    .s-guest-mode-signin-modal-container .s-signin-button.s-disabled {
        background: var(--neutrals-8, #E6E8EC);
        cursor: not-allowed;
    }    

    .s-guest-mode-signin-modal-container .s-modal-link-text {
        color: var(--neutrals-6, #8F95B2);
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
        cursor: pointer;
        margin-top: 24px;
    }

	.s-guest-mode-signin-modal-container .s-modal-close-button {
		cursor: pointer;
		position: absolute;
		right: 16px;
		top: 16px;
    }

    .s-guest-mode-signin-modal-container input {
        display: flex;
        padding: 12px 18px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border-radius: 14.325px;
        border: 1.194px solid var(--neutrals-8, #E6E8EC);
        width: 100%;
        margin-top: 24px;
    }

    .s-guest-user-sign-in-button {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 8px;
        border-radius: 16px;
        background: var(--primary-6, #625DF5);
        color: var(--neutrals-13, #FFF);
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 166.667% */
        cursor: pointer;
    }

    .s-guest-mode-banner {
        position: fixed;
        top: 56px;
        max-width: 80vw;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        width: 1000px;
        padding: 20px 40px;
        justify-content: space-between;
        align-items: center;
        border-radius: 16px;
        border: 1px solid var(--primary-6, #625DF5);
        background: var(--primary-6, #625DF5);

        color: var(--neutrals-13, #FFF);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */

        z-index: 2147483558;
    }

    .s-guest-mode-banner button {
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid var(--neutrals-9, #E6E8EC);
        background: var(--primary-7, linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), #625DF5);

        color: var(--neutrals-13, #FFF);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 114.286% */
        letter-spacing: -0.21px;
        cursor: pointer;
    }

    .s-guest-mode-banner .s-guest-mode-banner-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    velt-comment-tool {
        display: flex;
    }

    velt-comment-tool.active {
        --velt-tool-icon-size: var(--velt-tool-active-icon-size);
        --velt-tool-icon-color: var(--velt-tool-active-icon-color);
        --velt-tool-border-radius: var(--velt-tool-active-border-radius);
        --velt-tool-border-color: var(--velt-tool-active-border-color);
        --velt-tool-border: var(--velt-tool-active-border);
        --velt-tool-bg-color: var(--velt-tool-active-bg-color);
    }

    .private-comment-mode-switch-container {
        margin-right: 4px;
    }

    .private-comment-mode-switch {
        display: flex;
        justify-content: flex-start;
        width: 52px;
        height: 32px;
        padding: 4px;
        align-items: center;
        border-radius: 32px;
        border: 1px solid rgba(143, 149, 178, 0.12);
        background: rgba(143, 149, 178, 0.08);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    .private-comment-mode-switch .switch-icon {
        display: flex;
        padding: 4px;
        border-radius: 100%;
    }

    .private-comment-mode-switch-container .tooltiptext {
        padding: 12px;
    }

    .private-comment-mode-switch-container .tooltiptext .title {
        color: var(--neutrals-10, #FFF);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .private-comment-mode-switch-container .tooltiptext .body {
        color: var(--neutrals-8, #D4D6DF);
    }

    .private-comment-mode-switch-container.enabled .private-comment-mode-switch {
        background: var(--primary-6, #625DF5);
        justify-content: flex-end;
    }

    .private-comment-mode-switch-container.enabled .private-comment-mode-switch .switch-icon {
        background: white;
    }

    .notification-container {
        display: flex;
        position: relative;
        cursor: pointer;
    }

    .notification-container .notification {
        border-radius: 100%;
        padding: 2px;
        outline: 2px solid rgb(255, 95, 122);
    }

    .notification-container .notification-badge {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        position: absolute;
        background-color: rgb(255, 95, 122);
        top: 2px;
        right: 4px;
        transform: translate(50%, -50%);
    }

    velt-view-analytics {
        width: 100%;
    }

    velt-view-analytics .menu-point {
        width: 210px !important;
    }

    velt-notifications-tool .menu-point {
        width: 210px !important;
    }

    .velt-tool--action-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--velt-tool-padding);
        border-radius: var(--velt-tool-border-radius);
        border: var(--velt-tool-border);
        background-color: var(--velt-tool-bg-color);
   }
    .velt-tool--action-btn .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-icon-size));
        height: rem_var(var(--velt-tool-icon-size));
        color: var(--velt-tool-icon-color);
        cursor: pointer;
   }
    .velt-tool--action-btn:focus {
        border-radius: var(--velt-tool-focus-border-radius);
        border: var(--velt-tool-focus-border);
        background-color: var(--velt-tool-focus-bg-color);
   }
    .velt-tool--action-btn:focus .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-focus-icon-size));
        height: rem_var(var(--velt-tool-focus-icon-size));
        color: var(--velt-tool-focus-icon-color);
   }
    .velt-tool--action-btn:hover {
        border-radius: var(--velt-tool-hover-border-radius);
        border: var(--velt-tool-hover-border);
        background-color: var(--velt-tool-hover-bg-color);
   }
    .velt-tool--action-btn:hover .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-hover-icon-size));
        height: rem_var(var(--velt-tool-hover-icon-size));
        color: var(--velt-tool-hover-icon-color);
   }
    .velt-tool--action-btn:active, .velt-tool--action-btn.active {
        border-radius: var(--velt-tool-active-border-radius);
        border: var(--velt-tool-active-border);
        background-color: var(--velt-tool-active-bg-color);
   }
    .velt-tool--action-btn:active .velt-tool--action-btn-icon, .velt-tool--action-btn.active .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-active-icon-size));
        height: rem_var(var(--velt-tool-active-icon-size));
        color: var(--velt-tool-active-icon-color);
   }   

   velt-sidebar-button .velt-sidebar-button {
        width: max-content !important;
        --velt-tool-border: var(--velt-tool-focus-border);
        --velt-tool-hover-border: 1px solid #e6e8ec;
    }
    velt-sidebar-button .velt-sidebar-button.dark {
        --velt-tool-hover-border: 1px solid #23262f;
    }
    velt-sidebar-button .velt-tool--action-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        padding: var(--velt-tool-padding);
        padding-left: 8px;
        padding-right: 12px;
        border-radius: var(--velt-tool-border-radius);
        border: var(--velt-tool-border);
        border-width: 1px;
        background-color: var(--velt-tool-bg-color);
        color: var(--velt-tool-icon-color);
        cursor: pointer;
    }
    velt-sidebar-button .velt-tool--action-btn .velt-tool--action-btn-label {
        font-size: rem(0.9);
        font-weight: 500;
        color: currentColor;
    }
    velt-sidebar-button .velt-tool--action-btn .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-icon-size));
        height: rem_var(var(--velt-tool-icon-size));
        color: currentColor;
    }
    velt-sidebar-button .velt-tool--action-btn:focus {
        border-radius: var(--velt-tool-focus-border-radius);
        border: var(--velt-tool-focus-border);
        border-width: 1px;
        background-color: var(--velt-tool-focus-bg-color);
        color: var(--velt-tool-focus-icon-color);
    }
    velt-sidebar-button .velt-tool--action-btn:focus .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-focus-icon-size));
        height: rem_var(var(--velt-tool-focus-icon-size));
    }
    velt-sidebar-button .velt-tool--action-btn:hover {
        border-radius: var(--velt-tool-hover-border-radius);
        border: var(--velt-tool-hover-border);
        border-width: 1px;
        background-color: var(--velt-tool-hover-bg-color);
        color: var(--velt-tool-hover-icon-color);
    }
    velt-sidebar-button .velt-tool--action-btn:hover .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-hover-icon-size));
        height: rem_var(var(--velt-tool-hover-icon-size));
    }
    velt-sidebar-button .velt-tool--action-btn:active, velt-sidebar-button .velt-tool--action-btn.active {
        border-radius: var(--velt-tool-active-border-radius);
        border: var(--velt-tool-active-border);
        border-width: 1px;
        background-color: var(--velt-tool-active-bg-color);
        color: var(--velt-tool-active-icon-color);
    }
    velt-sidebar-button .velt-tool--action-btn:active .velt-tool--action-btn-icon, velt-sidebar-button .velt-tool--action-btn.active .velt-tool--action-btn-icon {
        width: rem_var(var(--velt-tool-active-icon-size));
        height: rem_var(var(--velt-tool-active-icon-size));
    }

    .private-comment-mode {
        --velt-tool-icon-color: #8F95B2;
        --velt-tool-hover-icon-color: #8F95B2;
        --velt-tool-hover-bg-color: #24234C !important;
        --velt-tool-hover-border: 2px solid #24234C !important;
    }

    .private-comment-mode velt-sidebar-button .velt-tool--action-btn, .private-comment-mode velt-sidebar-button::part(button-container) {
        --velt-tool-border: 2px solid #3F4B6C !important;
        --velt-tool-hover-border: 1px solid #B0AEFA !important;
        --velt-tool-hover-bg-color: #24234C !important;
        --velt-tool-hover-icon-color: #B0AEFA !important;
    }

	@media only screen and (max-width: 620px) {
		.disable-add-comment-button {
            display: flex;
        }
		.s-password-alert .error-container .password {
			display: none;
		}
		.s-password-alert .cta-btn {
			width: 110px;
		}

		.s-guest-mode-signin-modal-container .s-modal-secondary-actions {
			flex-direction: column;
			align-items: center;
		}

	}

	@media only screen and (max-width: 400px) {
		.hide-arrow {
			display: none;
		}
	}
`;var Sr=function(t,e,i,o){for(var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};class kr extends q{constructor(){super(),this._loadPlugin=!1,this.comments=[],this.addCommentMode=!1,this.showTourCommentTooltip=!1,this.allFeatureDisabled=!1,this.allFeatureRestricted=!1,this.guestMode=!1,this._expanded=!0,this.loading=!0,this._isPlanExpired=null,this.showOnboardingModal=!0,this.showLiveDemoModal=!1,this.showFigmaDemoModal=!1,this.showGuestModeSignInModal=!1,this.defaultGuestModeSignInModalConfig={title:"Sign in to notify your team",description:"Notify your team about your latest comments.",closeOnClickOutside:!1,showLeaveCommentButton:!0},this.guestModeSignInModalConfig=JSON.parse(JSON.stringify(this.defaultGuestModeSignInModalConfig)),this.showGuestModeNameModal=!1,this.guestModeSignInBannerVisible=!1,this.guestUserNameInput="",this.guestUserModelOpened=!1,this.guestUserNameUpdated=!1,this.guestUserNameUpdateLoading=!1,this.staging=false,this._autoLocation=!0,this.copyLinkTooltip="Copy Link",this.invalidApiKey=!1,this._isUserGlobalContact=!1,this.showQrCode=!1,this.customLoginEnabledLocally=null,this.customLoginEnabled=null,this.exitReviewModeCalled=!1,this.addCommentCount=0,this._privateCommentModeEnabled=!1,this.superflowToolbarMoved=!1,this._darkMode=!1,this.allowGuestModeSignIn=!0,this._queryParamsComments=!1,this.toolbarEnabled=!1,this.toolbarEnabledApiCalled=!1,this.passwordProtected=!1,this.isPasswordValid=!1,this.password="",this.validatingPasswordLoading=!1,this.showPasswordProtectedModal=!1,this.showInvalidPassword=!1,this.skipGuestNameModal=!1,this._totalViews={},this.totalViewsCount=0,this.inviteUrl="",this.showModalOnceCommentIsModeIsOff=!1,this.subscriptions=[],this.onApiKeyChange=()=>{try{this.apiKey&&(null===window||void 0===window?void 0:window.onSuperflowLoad)&&"function"==typeof window.onSuperflowLoad&&window.onSuperflowLoad()}catch(t){console.warn("Error in onApiKeyChange: ",t),fr("Error in onApiKeyChange: ",t)}},this.checkCustomLoginEnabled=async()=>{var t;try{const e=await(t=>{const e={apiKey:t};return ei(hr,Mt,{timeout:12e5})(e)})(this.apiKey);this.customLoginEnabled=!!(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.customLoginEnabled),this.customLoginEnabled&&this.loginWithCustomUser()}catch(t){this.customLoginEnabled=!1,console.warn("Error in checkCustomLoginEnabled: ",t),fr("Error in checkCustomLoginEnabled: ",t)}},this.loginWithCustomUser=()=>{try{this.customLoginEnabled?(or("_sfut"),this.loadPlugin&&this.documentId&&this.identifySnippyly()):console.warn("Identify call not allowed.")}catch(t){console.warn("Error in loginWithCustomUser: ",t),fr("Error in loginWithCustomUser: ",t)}},this.addWindowClickEventListener=()=>{try{this.windowClickEventListener||(this.windowClickEventListener=()=>{this.menuOpenedId&&(this.menuOpenedId=void 0)},window.addEventListener("click",this.windowClickEventListener))}catch(t){console.warn("Error in addWindowClickEventListener: ",t),fr("Error in addWindowClickEventListener: ",t)}},this.removeWindowClickEventListener=()=>{try{window.removeEventListener("click",this.windowClickEventListener),this.windowClickEventListener=void 0}catch(t){console.warn("Error in removeWindowClickEventListener: ",t),fr("Error in removeWindowClickEventListener: ",t)}},this.setWindowEventListner=()=>{try{window.addEventListener("locationchange",(()=>{this.checkUrl()}))}catch(t){console.warn("Error in setWindowEventListner: ",t),fr("Error in setWindowEventListner: ",t)}},this.urlChangeListener=()=>{try{const t=history.pushState;history.pushState=function(){const e=t.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),e};const e=history.replaceState;history.replaceState=function(){const t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))}))}catch(t){console.warn("Error in urlChangeListener: ",t),fr("Error in urlChangeListener: ",t)}},this.checkUrl=()=>{try{this.setInviteUrl();const t=new URL(document.location),e=t.searchParams;if(e.has("scommentId")&&er("review","true",!1),(null==e?void 0:e.has("sprojectInstall"))&&!ir("sprojectInstall")?this.showOnboardingModal=!0:this.showOnboardingModal=!1,null==e?void 0:e.has("sflivedemo"))if(ir("sflivedemo",!1,"sessionStorage")){this.showLiveDemoModal=!1;const t=new URL(document.location);t.searchParams.delete("sflivedemo"),window.history.replaceState({},null===document||void 0===document?void 0:document.title,t.toString())}else this.showLiveDemoModal=!0;else this.showLiveDemoModal=!1;if(null==e?void 0:e.has("sffigmademo"))if(ir("sffigmademo",!1)){this.showFigmaDemoModal=!1;const t=new URL(document.location);t.searchParams.delete("sffigmademo"),window.history.replaceState({},null===document||void 0===document?void 0:document.title,t.toString())}else this.showFigmaDemoModal=!0;else this.showFigmaDemoModal=!1;if(e.has("st")||e.has("snippyly_google_token")){if(e.has("st")){const t=decodeURIComponent(e.get("st")),i=rr(t,wt,bt),o=i&&JSON.parse(i);if(o){const t={};t.userId=o.uid,t.name=o.displayName,t.email=o.email,t.photoUrl=null==o?void 0:o.photoURL;const e=JSON.stringify(t),i=sr(e,wt,bt);er("_sfut",i,!0),or("sfUserAdmin")}}else if(e.has("snippyly_google_token")){const t=JSON.parse(atob(e.get("snippyly_google_token"))),i={};i.userId=t.uid,i.name=t.displayName,i.email=t.email,i.photoUrl=null==t?void 0:t.photoURL,er("snippyly-user",JSON.stringify(i),!0)}e.delete("st"),e.delete("snippyly_google_token"),window.history.replaceState({},document.title,t.href)}e.has("review")?(er("review","true",!1),or("feedback"),e.delete("review"),window.history.replaceState({},document.title,t.href),this.loadPluginUI()):e.has("feedback")||ir("review",!1)&&this.loadPluginUI(),e.has("feedback")?(er("feedback","true",!1),or("review"),e.delete("feedback"),window.history.replaceState({},document.title,t.href),this.loadPluginUI()):e.has("review")||ir("feedback",!1)&&this.loadPluginUI(),this.setVersionInUrl()}catch(t){console.warn("Error in checkUrl: ",t),fr("Error in checkUrl: ",t)}},this.setInviteUrl=()=>{try{const t=new URL(document.location);t.searchParams.has("review")||t.searchParams.set("review","true"),this.inviteUrl=t.toString()}catch(t){console.warn("Error in setInviteUrl: ",t),fr("Error in setInviteUrl: ",t)}},this.detectVersion=()=>{try{if(this.projectVersionKey){const t=new URL(document.location).searchParams;if(t.get(this.projectVersionKey))this.projectVersion=t.get(this.projectVersionKey);else if(window.snippylyInitialLoadUrl){const t=new URL(window.snippylyInitialLoadUrl).searchParams;t.get(this.projectVersionKey)&&(this.projectVersion=t.get(this.projectVersionKey))}this.projectVersion&&er("projectVersion",this.projectVersion,!1,"sessionStorage")}else{const t=new URL(document.location).searchParams;(t.has("review")||t.has("feedback"))&&t.has("sversion")&&(er("projectVersionKey","sversion",!1,"sessionStorage"),this.projectVersion=t.get("sversion"),this.projectVersion&&er("projectVersion",this.projectVersion,!1,"sessionStorage"))}}catch(t){console.warn("Error in detectVersion: ",t),fr("Error in detectVersion: ",t)}},this.setVersionInUrl=()=>{try{const t=this.projectVersionKey||ir("projectVersionKey",!1,"sessionStorage"),e=this.projectVersion||ir("projectVersion",!1,"sessionStorage");if(t&&e){const i=new URL(document.location),o=i.searchParams;o.get(t)||(o.set(t,e),window.history.replaceState({},document.title,i.href))}}catch(t){console.warn("Error in setVersionInUrl: ",t),fr("Error in setVersionInUrl: ",t)}},this.loadPluginUI=async()=>{var t,e,i,o,n,s,r,a;try{if(!this.apiKey)return;if(!this.projectId)return;if(this.loadPlugin)return this.generateLocation(),void this.setLocation();if(this.toolbarEnabledApiCalled||await this.detectToolbarEnabled(),!this.toolbarEnabled)return;const l=ar();if(l&&!(null==l?void 0:l.isAnonymous)&&(this.loading=!0),null===(t=this.getCustomerMetadata())||void 0===t||t.then((t=>{this.customerMetadata=t})).catch((t=>{console.warn("Error in getCustomerMetadata: ",t),fr("Error in getCustomerMetadata: ",t)})),tr("sfPasswordIsValid")&&(this.isPasswordValid=tr("sfPasswordIsValid")),ir("sfGuestMode",!0)&&ir("sfGuestModeAllowSignIn",!0)&&ir("sfPasswordProtected",!0)&&ir("sfQueryParamsComments",!0)?(this.guestMode="true"===ir("sfGuestMode",!0),this.allowGuestModeSignIn="true"===ir("sfGuestModeAllowSignIn",!0),this.passwordProtected="true"===ir("sfPasswordProtected",!0),this.queryParamsComments="true"===ir("sfQueryParamsComments",!0)):(this.projectConfig=await(async(t,e)=>{var i;try{const o=ei(hr,_t,{timeout:12e5}),n=await o({apiKey:t,projectId:e});return null===(i=null==n?void 0:n.data)||void 0===i?void 0:i.data}catch(t){return console.warn("Error in getProjectConfig: ",t),null}})(this.apiKey,this.projectId),this.guestMode=!!(null===(e=this.projectConfig)||void 0===e?void 0:e.guestMode)||this.guestMode,this.allowGuestModeSignIn=!!(null===(o=null===(i=this.projectConfig)||void 0===i?void 0:i.guestModeConfig)||void 0===o?void 0:o.allowSignIn),this.queryParamsComments=!!(null===(n=this.projectConfig)||void 0===n?void 0:n.queryParamsComments),(null===(s=this.projectConfig)||void 0===s?void 0:s.guestModeConfig)||(this.allowGuestModeSignIn=!0),this.passwordProtected=!!(null===(a=null===(r=this.projectConfig)||void 0===r?void 0:r.passwordProtected)||void 0===a?void 0:a.enabled),er("sfGuestMode",this.guestMode+"",!0),er("sfGuestModeAllowSignIn",this.allowGuestModeSignIn+"",!0),er("sfPasswordProtected",this.passwordProtected+"",!0),er("sfQueryParamsComments",this.queryParamsComments+"",!0)),this.loadPlugin=!0,!document.querySelector(pt.VELT_COMMENTS)){const t=document.createElement(pt.VELT_COMMENTS);null==t||t.addEventListener("onSignIn",(()=>{this.loginWithGoogle()})),null==t||t.addEventListener("onUpgrade",(()=>{this.onUpgradePlanClick()})),t.addEventListener("onCommentAdd",(()=>{this.addCommentCount++})),t.addEventListener("onCommentUpdate",(t=>{var e,i;(null===(e=this.snippylyUser)||void 0===e?void 0:e.isGuest)&&"newlyAdded"===(null===(i=null==t?void 0:t.detail)||void 0===i?void 0:i.type)&&(this.addCommentCount>=2&&(this.showModalOnceCommentIsModeIsOff=!0),this.addCommentCount>=5&&!this.showModalOnceCommentIsModeIsOff&&(this.showModalOnceCommentIsModeIsOff=!0))})),window.document.body.appendChild(t)}if(!document.querySelector(pt.VELT_CURSOR)){const t=document.createElement(pt.VELT_CURSOR);window.document.body.appendChild(t)}if(!document.querySelector(pt.VELT_HUDDLE)){const t=document.createElement(pt.VELT_HUDDLE);window.document.body.appendChild(t)}if(!document.querySelector(pt.VELT_RECORDER_NOTES)){const t=document.createElement(pt.VELT_RECORDER_NOTES);window.document.body.appendChild(t)}if(!document.querySelector(pt.VELT_RECORDER_CONTROL_PANEL)){const t=document.createElement(pt.VELT_RECORDER_CONTROL_PANEL);window.document.body.appendChild(t)}if(!document.querySelector(pt.VELT_ARROWS)){const t=document.createElement(pt.VELT_ARROWS);window.document.body.appendChild(t)}try{const t=new URL(document.location),e=t.searchParams;let i=!1;e.has("wireframe")&&"true"===e.get("wireframe")&&(sessionStorage.setItem("velt-wireframe","true"),e.delete("wireframe"),i=!0),e.get("velt-version")&&(sessionStorage.setItem("velt-version",e.get("velt-version")),e.delete("velt-version"),i=!0),e.get("velt-env")&&(sessionStorage.setItem("velt-env",e.get("velt-env")),e.delete("velt-env"),i=!0),i&&window.history.replaceState({},document.title,t.href)}catch(t){}if(this.staging&&"true"===sessionStorage.getItem("velt-wireframe")){const t=document.createElement("velt-wireframe");t.innerHTML='\n                        <style>\n                            .dialog-header-container {\n                                padding: 12px;\n                                background: lightcyan;\n                                margin-top: 8px;\n                                margin-bottom: 8px;\n                                border-radius: 8px;\n                            }\n\n                            .dialog-all-comment-container app-comment-dialog-all-comment > div {\n                                padding: 12px;\n                                background: lightpink;\n                                margin-top: 8px;\n                                margin-bottom: 8px;\n                                border-radius: 8px;\n                            }\n\n                            .sidebar-dialog-header-container {\n                                padding: 12px;\n                                background: lightgreen;\n                                margin-bottom: 8px;\n                                border-radius: 8px;\n                            }\n\n                            .sidebar-dialog-header-block {\n                                display: flex;\n                                align-items: center;\n                                gap: 8px;\n                            }\n                        </style>\n\t\t\t\t\t\t<velt-comment-pin-wireframe>\n\t\t\t\t\t\t\t<div class="custom-comment-pin-container">\n\t\t\t\t\t\t\t\t\t<div style="width: 35px; height: 35px; background-color: blue; border-radius: 12px; border-width: 3px; border-style: solid; border-color: #f00;"></div>\n\t\t\t\t\t\t\t\t\t<velt-comment-pin-unread-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t\t<div class="custom-indicator"></div>\n\t\t\t\t\t\t\t\t\t</velt-comment-pin-unread-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-pin-private-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t\t<span>P</span>\n\t\t\t\t\t\t\t\t\t</velt-comment-pin-private-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-pin-ghost-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t\t<span>G</span>\n\t\t\t\t\t\t\t\t\t</velt-comment-pin-ghost-comment-indicator-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-pin-index-wireframe></velt-comment-pin-index-wireframe>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</velt-comment-pin-wireframe>\n\n\t\t\t\t\t\t<velt-comment-bubble-wireframe>\n\t\t\t\t\t\t\t<div class="custom-comment-bubble">\n\t\t\t\t\t\t\t\t<velt-comment-bubble-avatar-wireframe></velt-comment-bubble-avatar-wireframe>\n\t\t\t\t\t\t\t\t<velt-comment-bubble-comments-count-wireframe></velt-comment-bubble-comments-count-wireframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</velt-comment-bubble-wireframe>\n\n\t\t\t\t\t\t<velt-text-comment-tool-wireframe>\n\t\t\t\t\t\t\t<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t<circle cx="50" cy="50" r="40" fill="red" />\n\t\t\t\t\t\t\t\t<rect x="5" y="5" width="90" height="90" fill="blue" fill-opacity="0.5" />\n\t\t\t\t\t\t\t\t<polygon points="50,5 95,95 5,95" fill="yellow" fill-opacity="0.7" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</velt-text-comment-tool-wireframe>\n\n\t\t\t\t\t\t<velt-text-comment-toolbar-wireframe>\n\t\t\t\t\t\t\t<div style="background-color:violet; display: flex; gap: 8px; border-radius: 12px; padding: 8px; align-items: center;">\n\t\t\t\t\t\t\t\t<velt-text-comment-toolbar-generic-wireframe><p>GPT</p></velt-text-comment-toolbar-generic-wireframe>\n\t\t\t\t\t\t\t\t<velt-text-comment-toolbar-seperator-wireframe><p>Seperator</p></velt-text-comment-toolbar-seperator-wireframe>\n\t\t\t\t\t\t\t\t<velt-text-comment-toolbar-comment-annotation-wireframe><p>Comment</p></velt-text-comment-toolbar-comment-annotation-wireframe>\n\t\t\t\t\t\t\t\t<velt-text-comment-toolbar-copywriter-wireframe><p>Copywriter</p></velt-text-comment-toolbar-copywriter-wireframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</velt-text-comment-toolbar-wireframe>\n\t\t\t\t\t\t<velt-comment-sidebar-wireframe>\n\t\t\t\t\t\t\t<div style="background-color:lightblue; width: 100%; height: 100%;">\n\t\t\t\t\t\t\t\t<velt-comment-sidebar-header-wireframe>\n\t\t\t\t\t\t\t\t\t<div>Custom Header</div>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-close-button-wireframe>\n\t\t\t\t\t\t\t\t\t\t<div style="color:#0d6efd;">Custom Close Button</div>\n\t\t\t\t\t\t\t\t\t</velt-comment-sidebar-close-button-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-search-wireframe></velt-comment-sidebar-search-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-status-wireframe></velt-comment-sidebar-status-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-button-wireframe>\n\t\t\t\t\t\t\t\t\t\t<div style="color:#0d6efd;">Custom Filter Button</div>\n\t\t\t\t\t\t\t\t\t</velt-comment-sidebar-filter-button-wireframe>\n\t\t\t\t\t\t\t\t</velt-comment-sidebar-header-wireframe>\n\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-wireframe>\n\t\t\t\t\t\t\t\t\t<div>Custom Filter</div>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-title-wireframe></velt-comment-sidebar-filter-title-wireframe>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-close-button-wireframe>\n\t\t\t\t\t\t\t\t\t\t<div>Custom CLose filter</div>\n\t\t\t\t\t\t\t\t\t</velt-comment-sidebar-filter-close-button-wireframe>\n\n\t\t\t\t\t\t\t\t\t<div style="background-color: yellow">\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-location-wireframe></velt-comment-sidebar-filter-location-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-people-wireframe></velt-comment-sidebar-filter-people-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-category-wireframe></velt-comment-sidebar-filter-category-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-priority-wireframe></velt-comment-sidebar-filter-priority-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-comment-type-wireframe></velt-comment-sidebar-filter-comment-type-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-versions-wireframe></velt-comment-sidebar-filter-versions-wireframe>\n\t\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-group-by-wireframe></velt-comment-sidebar-filter-group-by-wireframe>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<velt-comment-sidebar-filter-done-button-wireframe>\n\t\t\t\t\t\t\t\t\t\t<div>Custom Done Button</div>\n\t\t\t\t\t\t\t\t\t</velt-comment-sidebar-filter-done-button-wireframe>\n\t\t\t\t\t\t\t\t</velt-comment-sidebar-filter-wireframe>\n\t\t\t\t\t\t\t\t<velt-comment-sidebar-list-wireframe></velt-comment-sidebar-list-wireframe>\n\t\t\t\t\t\t\t\t<velt-comment-sidebar-empty-placeholder-wireframe>\n\t\t\t\t\t\t\t\t\t<div>Empty Placeholder</div>\n\t\t\t\t\t\t\t\t</velt-comment-sidebar-empty-placeholder-wireframe>\n\t\t\t\t\t\t\t\t<velt-comment-sidebar-page-mode-wireframe></velt-comment-sidebar-page-mode-wireframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</velt-comment-sidebar-wireframe>\n                        <velt-comment-dialog-wireframe variant="dialog">\n                            <div class="dialog-all-comment-container">\n                                <velt-comment-dialog-all-comment-wireframe></velt-comment-dialog-all-comment-wireframe>\n                            </div>\n                            <div class="dialog-body-container">\n                                <velt-comment-dialog-body-wireframe></velt-comment-dialog-body-wireframe>\n                            </div>\n                            <div class="dialog-composer-container">\n                                <velt-comment-dialog-composer-wireframe></velt-comment-dialog-composer-wireframe>\n                            </div>\n                            <div class="dialog-header-container">\n                                <velt-comment-dialog-header-wireframe></velt-comment-dialog-header-wireframe>\n                            </div>\n                        </velt-comment-dialog-wireframe>\n                        <velt-comment-dialog-wireframe variant="sidebar">\n                            <div class="sidebar-dialog-header-container">\n                                <velt-comment-dialog-header-wireframe>\n                                    <div class="sidebar-dialog-header-block">\n                                        <velt-comment-dialog-comment-count-wireframe></velt-comment-dialog-comment-count-wireframe>\n                                        <velt-comment-dialog-status-wireframe></velt-comment-dialog-status-wireframe>\n                                        <div style="flex-grow: 1"></div>\n                                        <velt-comment-dialog-comment-category-wireframe></velt-comment-dialog-comment-category-wireframe>\n                                        <velt-comment-dialog-priority-wireframe></velt-comment-dialog-priority-wireframe>\n                                    </div>\n                                </velt-comment-dialog-header-wireframe>\n                            </div>\n                            <div class="sidebar-dialog-body-container">\n                                <velt-comment-dialog-body-wireframe></velt-comment-dialog-body-wireframe>\n                            </div>\n                            <div class="sidebar-dialog-composer-container">\n                                <velt-comment-dialog-composer-wireframe></velt-comment-dialog-composer-wireframe>\n                            </div>\n                        </velt-comment-dialog-wireframe>\n                    ',window.document.body.appendChild(t)}this.initializeSnippyly()}catch(t){this.loading=!1,console.warn("Error in loadPluginUI: ",t),fr("Error in loadPluginUI: ",t)}},this.initializeSnippyly=async()=>{var t,i,o,n,s,r,a,l,d,c,h,u,p,v,m,f,g,w,b,y,C,x,E,S;try{let k=this.staging?"3.0.112":"1.0.120";this.staging||ut.includes(this.apiKey)||(k="latest"),this.veltVersion&&(k=this.veltVersion);let M=this.staging,_=!1;if((null===sessionStorage||void 0===sessionStorage?void 0:sessionStorage.getItem("velt-version"))&&(k=sessionStorage.getItem("velt-version")),null===sessionStorage||void 0===sessionStorage?void 0:sessionStorage.getItem("velt-env")){"staging"===sessionStorage.getItem("velt-env")&&(M=!1,_=!0)}if(await e(this.apiKey,{options:{develop:M,staging:_,version:k,velt:!0,proxyDomain:"https://cdn.velt.dev"}}),!window.Snippyly)return;if(this.autoTranslation&&(null===Snippyly||void 0===Snippyly?void 0:Snippyly.enableAutoTranslation)&&(null===Snippyly||void 0===Snippyly||Snippyly.enableAutoTranslation()),!document.querySelector(pt.VELT_COMMENTS_SIDEBAR)){const t=document.createElement(pt.VELT_COMMENTS_SIDEBAR);t.setAttribute(vt.ENABLE_URL_NAVIGATION,"true"),t.setAttribute(vt.CURRENT_LOCATION_SUFFIX,"true"),window.document.body.appendChild(t)}if(Snippyly){null===Snippyly||void 0===Snippyly||Snippyly.sf(!0);try{window.dispatchEvent(new CustomEvent("onVeltLoad",{detail:{Velt:Snippyly}})),(null===window||void 0===window?void 0:window.onSnippylyLoad)&&(null===window||void 0===window||window.onSnippylyLoad(Snippyly))}catch(t){}document.body.style.setProperty("--velt-default-font-family","'Poppins', sans-serif"),(()=>{try{if(!document.getElementById("superflowFontLink1")){const t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.googleapis.com",t.id="superflowFontLink1",document.head.appendChild(t)}if(!document.getElementById("superflowFontLink2")){const t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous",t.id="superflowFontLink2",document.head.appendChild(t)}if(!document.getElementById("superflowFontLink3")){const t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",t.id="superflowFontLink3",document.head.appendChild(t)}}catch(t){console.warn("Error in loadPoppinsFont: ",t),fr("Error in loadPoppinsFont: ",t)}})()}if(Snippyly&&vr({sdkVersion:null===Snippyly||void 0===Snippyly?void 0:Snippyly.version,sdkType:"client"}),this.documentId=qs(Xs(window.location.origin))+"",this.projectId&&(this.documentId=this.projectId+""),await(null===Snippyly||void 0===Snippyly?void 0:Snippyly.setDocumentId(this.documentId+"")),this.serverDocumentId=(S=this.documentId+"")?`${qs(S)}`:void 0,vr({documentId:this.serverDocumentId,clientDocumentId:this.documentId}),this.generateLocation(),this.setLocation(),this.commentElement=null===Snippyly||void 0===Snippyly?void 0:Snippyly.getCommentElement(),this.contactElement=null===Snippyly||void 0===Snippyly?void 0:Snippyly.getContactElement(),this.rewriterElement=null===Snippyly||void 0===Snippyly?void 0:Snippyly.getRewriterElement(),this.presenceElement=null===Snippyly||void 0===Snippyly?void 0:Snippyly.getPresenceElement(),this.commentElement){this.commentElement.enableTextComments(!0),this.customLoginEnabledLocally||this.commentElement.enableSignInButton(!0),this.commentElement.enableAttachments(!0),(null===(t=this.commentElement)||void 0===t?void 0:t.showScreenSizeInfo)&&this.commentElement.showScreenSizeInfo(!0),(null===(i=this.commentElement)||void 0===i?void 0:i.enableDeviceInfo)&&this.commentElement.enableDeviceInfo(!0),this.commentElement.enableCommentIndex(!0),this.commentElement.onCommentModeChange&&this.commentElement.onCommentModeChange().subscribe((t=>{this.addCommentMode=t,this.addCommentMode||this.showModalOnceCommentIsModeIsOff&&(this.addCommentCount>=2&&!ir("sfGuestUserModelOpened")&&(this.allowGuestModeSignIn?this.openGuestModeSignInModal():this.openGuestModeNameModel(),er("sfGuestUserModelOpened","true"),this.showModalOnceCommentIsModeIsOff=!1),this.addCommentCount>=5&&!this.showGuestModeSignInModal&&!ir("sfGuestUserBannerOpened",!1,"sessionStorage")&&(this.showGuestModeSignInBanner(),er("sfGuestUserBannerOpened","true",!1,"sessionStorage"),this.showModalOnceCommentIsModeIsOff=!1))})),(null===(o=this.commentElement)||void 0===o?void 0:o.enableOrphanComments)&&this.commentElement.enableOrphanComments(),(null===(n=this.commentElement)||void 0===n?void 0:n.enableAutoCategorize)&&this.commentElement.enableAutoCategorize(),(null===(s=this.commentElement)||void 0===s?void 0:s.enablePersistentCommentMode)&&this.commentElement.enablePersistentCommentMode(),(null===(r=this.commentElement)||void 0===r?void 0:r.enableGhostComments)&&this.commentElement.enableGhostComments();const e=null===window||void 0===window?void 0:window.SUPERFLOW_CUSTOM_STATUSES;e&&"object"==typeof e&&(null===(a=this.commentElement)||void 0===a?void 0:a.setCustomStatus)&&this.commentElement.setCustomStatus(e),(null===(l=this.commentElement)||void 0===l?void 0:l.enableMinimap)&&this.commentElement.enableMinimap(),(null===(d=this.commentElement)||void 0===d?void 0:d.setDStrategy)&&(null===(c=this.commentElement)||void 0===c||c.setDStrategy("dynamicId")),(null===(h=this.commentElement)||void 0===h?void 0:h.enableSidebarButtonOnCommentDialog)&&this.commentElement.enableSidebarButtonOnCommentDialog(),(null===(u=this.commentElement)||void 0===u?void 0:u.enableHotkey)&&this.commentElement.enableHotkey(),(null===(p=this.commentElement)||void 0===p?void 0:p.enableDeviceIndicatorOnCommentPins)&&this.commentElement.enableDeviceIndicatorOnCommentPins()}this.selectionElement=Snippyly.getSelectionElement(),this.selectionElement&&this.selectionElement.enableLiveSelection(!0),this.rewriterElement&&(null===(v=this.rewriterElement)||void 0===v||v.enableRewriter()),this.presenceElement&&(null===(m=this.presenceElement)||void 0===m?void 0:m.enableFlockMode)&&(null===(f=this.presenceElement)||void 0===f||f.enableFlockMode(!0)),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getDocElement)&&(this.docElement=Snippyly.getDocElement()),null===(y=(null===(g=this.docElement)||void 0===g?void 0:g.getDocumentMetadata)?null===(w=this.docElement)||void 0===w?void 0:w.getDocumentMetadata():null===(b=null===Snippyly||void 0===Snippyly?void 0:Snippyly.docService)||void 0===b?void 0:b.getDocumentMetadata$())||void 0===y||y.subscribe((t=>{const e=(null==t?void 0:t.versions)?Object.values(null==t?void 0:t.versions):[],i=new URL(document.location).searchParams.get("version");if(i){const t=e.find((t=>t.versionId===i));t&&(this.version={id:t.versionId,name:t.versionName||t.versionId},this.setLocation())}})),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getViewsElement)&&(this.viewsElement=Snippyly.getViewsElement()),(null===(C=this.viewsElement)||void 0===C?void 0:C.getUniqueViewsByUser)&&(null===(E=null===(x=this.viewsElement)||void 0===x?void 0:x.getUniqueViewsByUser())||void 0===E||E.subscribe((t=>{this.totalViews=t}))),this.identifySnippyly()}catch(t){this.loading=!1,console.warn("Error in initializeSnippyly: ",t),fr("Error in initializeSnippyly: ",t)}},this.checkToEnableUpgradeButton=()=>{var t,e;try{this.isPlanExpired&&this.isUserGlobalContact?(null===(t=this.commentElement)||void 0===t?void 0:t.enableUpgradeButton)&&this.commentElement.enableUpgradeButton():(null===(e=this.commentElement)||void 0===e?void 0:e.disableUpgradeButton)&&this.commentElement.disableUpgradeButton()}catch(t){console.warn("Error in checkToEnableUpgradeButton: ",t),fr("Error in checkToEnableUpgradeButton: ",t)}},this.getCustomerMetadata=async()=>{try{let t=(()=>{try{const t=ir("sfCustomerMetadata");return t?"false"===t?JSON.parse(JSON.stringify(mt)):JSON.parse(t):null}catch(t){return console.warn("Error in getCustomerMetadataFromStorage: ",t),fr("Error in getCustomerMetadataFromStorage: ",t),null}})();return t||(t=await(async t=>{try{const e=ei(hr,Et,{timeout:12e5}),i=await e({apiKey:t});return null==i?void 0:i.data}catch(t){return console.warn("Error in getCustomerMetadata: ",t),null}})(this.apiKey),cr(t)),t}catch(t){console.warn("Error in getCustomerMetadata: ",t),fr("Error in getCustomerMetadata: ",t)}},this.setLogos=()=>{var t,e,i,o,n,s,r,a,l,d,c,h;try{let u="light";this.privateCommentModeEnabled&&(u="dark");const p=null===(i=null===(e=null===(t=this.customerMetadata)||void 0===t?void 0:t.customBranding)||void 0===e?void 0:e.logo)||void 0===i?void 0:i.logoMark,v=null===(s=null===(n=null===(o=null==gt?void 0:mt)||void 0===o?void 0:o.customBranding)||void 0===n?void 0:n.logo)||void 0===s?void 0:s.logoMark,m=null===(l=null===(a=null===(r=this.customerMetadata)||void 0===r?void 0:r.customBranding)||void 0===a?void 0:a.logo)||void 0===l?void 0:l.wordMark,f=null===(h=null===(c=null===(d=null==gt?void 0:mt)||void 0===d?void 0:d.customBranding)||void 0===c?void 0:c.logo)||void 0===h?void 0:h.wordMark;switch(u){case"light":this.logoMark=(null==p?void 0:p.lightUrl)||(null==p?void 0:p.darkUrl)||(null==v?void 0:v.lightUrl),this.wordMark=(null==m?void 0:m.lightUrl)||(null==m?void 0:m.darkUrl)||(null==f?void 0:f.lightUrl);break;case"dark":this.logoMark=(null==p?void 0:p.darkUrl)||(null==p?void 0:p.lightUrl)||(null==v?void 0:v.darkUrl),this.wordMark=(null==m?void 0:m.darkUrl)||(null==m?void 0:m.lightUrl)||(null==f?void 0:f.darkUrl)}}catch(t){console.warn("Error in setLogos: ",t),fr("Error in setLogos: ",t)}},this.getLogoMark=()=>{var t;try{return(null===(t=this.logoMark)||void 0===t?void 0:t.includes("<svg"))?O`
					${ct(this.logoMark)}
                `:O`
				<img src=${this.logoMark} />
			`}catch(t){return console.warn("Error in getLogoMark: ",t),O``}},this.getWordMark=()=>{var t;try{return(null===(t=this.wordMark)||void 0===t?void 0:t.includes("<svg"))?O`
					${ct(this.wordMark)}
                `:O`
				<img src=${this.wordMark} />
			`}catch(t){return console.warn("Error in getWordMark: ",t),O``}},this.generateLocation=()=>{try{if(this.autoLocation){const t=new URL(document.location).searchParams,e=new URL(document.location);e.searchParams.delete("review"),e.searchParams.delete("feedback"),e.searchParams.delete("sreviewId"),e.searchParams.delete("scommentId"),e.searchParams.delete("sprojectInstall"),e.searchParams.delete("sflivedemo");const i=t.get("sversion")||this.projectVersion;this.queryParamsComments||(e.search="");let o=(t=>{try{return t.replace(/#.*$/,"")}catch(e){return console.warn("Error in removeHashFromUrl: ",e),fr("Error in removeHashFromUrl: ",e),t}})(e.href);this.projectId&&(o=null==o?void 0:o.replace(window.location.origin,"")),this.location={url:o,version:i}}}catch(t){console.warn("Error in generateLocation: ",t),fr("Error in generateLocation: ",t)}},this.setLocation=()=>{var t,e,i,o;try{if(this.autoLocation&&window.Snippyly&&(null===Snippyly||void 0===Snippyly?void 0:Snippyly.setLocation)){if(this.version?(this.location||(this.location={}),this.location.version=this.version):this.location&&delete this.location.version,this.previousLocation&&(null===(t=this.previousLocation)||void 0===t?void 0:t.url)===(null===(e=this.location)||void 0===e?void 0:e.url)&&(null===(i=this.previousLocation)||void 0===i?void 0:i.version)===(null===(o=this.location)||void 0===o?void 0:o.version))return;null===Snippyly||void 0===Snippyly||Snippyly.setLocation(JSON.parse(JSON.stringify(this.location))),vr({clientLocation:this.location}),this.previousLocation=JSON.parse(JSON.stringify(this.location))}}catch(t){console.warn("Error in setLocation: ",t),fr("Error in setLocation: ",t)}},this.identifySnippyly=async()=>{var t,e;let i="",o="";try{this.invalidApiKey=!1;let e,n,s={name:"Default User",email:"default@usesuperflow.com",userId:"default",isAnonymous:!0};if(e=this.customLoginEnabled&&this.providedUser?this.providedUser:ar(),(null==e?void 0:e.email)&&(s=e),s.isAnonymous)delete s.groupId;else{const t=Snippyly.getDocumentId()||this.serverDocumentId;t&&(s.groupId=t+"")}if(this.customLoginEnabledLocally||(null===(t=null==s?void 0:s.contacts)||void 0===t?void 0:t.length)&&(s.contacts=[]),i=null==s?void 0:s.email,o=null==s?void 0:s.userId,(null==s?void 0:s.isAnonymous)&&this.projectId&&this.guestMode){const t=dr();t&&(s=JSON.parse(JSON.stringify(t)))}(null==s?void 0:s.isAnonymous)||(this.loading=!0),(null==s?void 0:s.groupId)&&(n||(n={}),n.groupId=null==s?void 0:s.groupId);const r=await(async(t,e,i)=>{var o,n;try{const s=ei(hr,St,{timeout:12e5}),r=await s({apiKey:t,userId:e,userProperties:i});return null===(n=null===(o=null==r?void 0:r.data)||void 0===o?void 0:o.data)||void 0===n?void 0:n.token}catch(t){return console.warn("Error in generateSuperflowAuthToken: ",t),null}})(this.apiKey,null==s?void 0:s.userId,n),a={};r&&(a.authToken=r);const l=await Snippyly.identify(s,a);mr(JSON.parse(JSON.stringify(l||{}))),(null==s?void 0:s.isAnonymous)||(this.snippylyUser=JSON.parse(JSON.stringify(s)));const d=JSON.parse(JSON.stringify(l||{}));(null==d?void 0:d.userSnippylyId)&&!(null==d?void 0:d.isGuest)&&this.checkToMigrateGuestUser(d),Snippyly.getUserRole$().subscribe((t=>{var e;this.loading=!1,this.snippylyUserRole=t,"Admin"===this.snippylyUserRole&&this.allFeatureDisabled&&(this.allFeatureDisabled=!1),this.snippylyUserRole||gr(ht.Events.USER_EMAIL_NOT_WHITELISTED),null===(e=this.commentElement)||void 0===e||e.enablePriority(),this.checkPrivateCommentModeFromStorage()})),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getFeaturesAccessLevelIam$)&&this.subscriptions.push(Snippyly.getFeaturesAccessLevelIam$().subscribe((async t=>{var e,i,o,n,s,r,a,l;this.allFeatureDisabled=!!(null===(e=null==t?void 0:t.all)||void 0===e?void 0:e.disabled)&&"Admin"!==this.snippylyUserRole,this.allFeatureRestricted=!!(null===(i=null==t?void 0:t.all)||void 0===i?void 0:i.restricted),this.guestMode=!!(null===(o=null==t?void 0:t.all)||void 0===o?void 0:o.guestMode),this.allowGuestModeSignIn=!!(null===(s=null===(n=null==t?void 0:t.all)||void 0===n?void 0:n.guestModeConfig)||void 0===s?void 0:s.allowSignIn),this.guestMode&&gr(ht.Events.GUEST_MODE_PRESENT),(null===(r=null==t?void 0:t.all)||void 0===r?void 0:r.guestModeConfig)||(this.allowGuestModeSignIn=!0),this.passwordProtected=!!(null===(l=null===(a=null==t?void 0:t.all)||void 0===a?void 0:a.passwordProtected)||void 0===l?void 0:l.enabled),Velt&&(t&&this.passwordProtected&&!this.isPasswordValid?Velt.disableFeatures(["area","arrow","audioHuddle","cursor","huddle","liveStateSync","presence","tag","recorder","comment"]):Velt.disableFeatures([])),er("sfGuestMode",this.guestMode+"",!0),er("sfGuestModeAllowSignIn",this.allowGuestModeSignIn+"",!0),er("sfPasswordProtected",this.passwordProtected+"",!0)}),(t=>{this.loading=!1,console.warn("Error in getFeaturesAccessLevelIam$: ",t),fr("Error in getFeaturesAccessLevelIam$: ",t)}))),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.isPlanExpired$)&&(null===Snippyly||void 0===Snippyly||Snippyly.isPlanExpired$().subscribe((t=>{this.isPlanExpired=t}),(t=>{this.isPlanExpired=!1,console.warn("Error in isPlanExpired$: ",t),fr("Error in isPlanExpired$: ",t)}))),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getCustomerMetadata$)&&(null===Snippyly||void 0===Snippyly||Snippyly.getCustomerMetadata$().subscribe((t=>{cr(t),t&&(this.customerMetadata=t)}),(t=>{console.warn("Error in getCustomerMetadata$: ",t),fr("Error in getCustomerMetadata$: ",t)}))),(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getDocumentMetadata)&&(null===Snippyly||void 0===Snippyly||Snippyly.getDocumentMetadata().subscribe((t=>{var e;t&&(this.queryParamsComments=!!(null===(e=null==t?void 0:t.extraConfig)||void 0===e?void 0:e.queryParamsComments),er("sfQueryParamsComments",this.queryParamsComments+"",!0))}),(t=>{console.warn("Error in getDocumentMetadata: ",t),fr("Error in getDocumentMetadata: ",t)}))),vr({clientUserId:null==s?void 0:s.userId});try{(t=>{var e,i,o,n,s,r,a,l,d,c,h,u;const p={properties:{apiKey:null!==(e=null==pr?void 0:pr.apiKey)&&void 0!==e?e:"",name:null!==(i=null==t?void 0:t.name)&&void 0!==i?i:"",firstName:(null==t?void 0:t.name)?null===(o=null==t?void 0:t.name)||void 0===o?void 0:o.split(" ")[0]:"",lastName:(null==t?void 0:t.name)?null===(n=null==t?void 0:t.name)||void 0===n?void 0:n.split(" ")[1]:"",email:null!==(s=null==t?void 0:t.email)&&void 0!==s?s:"",clientUserId:null!==(r=null==t?void 0:t.userId)&&void 0!==r?r:"",snippylyUserId:null!==(a=null==t?void 0:t.userSnippylyId)&&void 0!==a?a:"",groupId:null!==(l=null==t?void 0:t.groupId)&&void 0!==l?l:"",isOwner:"",plan:"",sdkVersion:null!==(d=null==pr?void 0:pr.sdkVersion)&&void 0!==d?d:"",sdkType:null!==(c=null==pr?void 0:pr.sdkType)&&void 0!==c?c:"",sourcePlatform:null!==(h=null==pr?void 0:pr.sourcePlatform)&&void 0!==h?h:"",website:null===(u=null===window||void 0===window?void 0:window.location)||void 0===u?void 0:u.href},context:{userAgent:null===navigator||void 0===navigator?void 0:navigator.userAgent},userId:null==t?void 0:t.userSnippylyId,sf:!0};wr("identify",p)})(s)}catch(t){console.warn("Error in trackIdentifyEvent: ",t)}this.getComments(),this.checkGlobalUserContact(),setTimeout((()=>{ir("sfTourCommentTooltip")||(this.showTourCommentTooltip=!0)}),2e3)}catch(t){if(this.loading=!1,this.signInError=!0,t&&"string"==typeof t&&(null===(e=null==t?void 0:t.toLowerCase())||void 0===e?void 0:e.includes("invalid"))){this.invalidApiKey=!0,gr(ht.Events.DOMAIN_NOT_WHITELISTED),this.projectId&&(async(t,e)=>{try{const i=ei(hr,Ct,{timeout:12e5});await i({apiKey:t,projectId:e})}catch(t){console.warn("Error in checkDomainWhitelisted: ",t)}})(this.apiKey,this.projectId);if(new URL(document.location).searchParams.has("sprojectInstall"))this.isSigningInUserAdmin=!0;else if(ir("sfUserAdmin"))this.isSigningInUserAdmin="true"===ir("sfUserAdmin",!0);else{const t=await(async(t,e,i,o)=>{try{const n=ei(hr,xt,{timeout:12e5}),s=await n({apiKey:t,projectId:e,email:i,userId:o});return null==s?void 0:s.data}catch(t){return console.warn("Error in iam: ",t),null}})(this.apiKey,this.projectId||"",i,o);this.isSigningInUserAdmin=!!(null==t?void 0:t.isAdmin),er("sfUserAdmin",this.isSigningInUserAdmin+"",!0)}}console.warn("Error in identifySnippyly: ",t),fr("Error in identifySnippyly: ",t)}},this.checkToMigrateGuestUser=async t=>{try{const e=dr(!1);e&&(await br(this.apiKey,this.projectId||"",e,t,!0),or("_sfgut"))}catch(t){console.warn("Error in checkToMigrationGuestUser: ",t),fr("Error in checkToMigrationGuestUser: ",t)}},this.getComments=()=>{try{this.commentElement&&(this.commentSubscription&&this.commentSubscription.unsubscribe(),this.commentSubscription=this.commentElement.getAllCommentAnnotations(this.documentId).subscribe((t=>{this.comments=null==t?void 0:t.filter((t=>{var e;return["open","inProgress"].includes(null==t?void 0:t.status)||["default","ongoing"].includes(null===(e=null==t?void 0:t.status)||void 0===e?void 0:e.type)}))})))}catch(t){console.warn("Error in getComments: ",t),fr("Error in getComments: ",t)}},this.setQueryParamsCommentsInSdk=()=>{var t,e,i,o;try{this.commentElement&&(this.queryParamsComments&&(null===(t=this.commentElement)||void 0===t?void 0:t.enableQueryParamsComments)?null===(e=this.commentElement)||void 0===e||e.enableQueryParamsComments():!this.queryParamsComments&&(null===(i=this.commentElement)||void 0===i?void 0:i.disableQueryParamsComments)&&(null===(o=this.commentElement)||void 0===o||o.disableQueryParamsComments()))}catch(t){console.warn("Error in setQueryParamsCommentsInSdk: ",t),fr("Error in setQueryParamsCommentsInSdk: ",t)}},this.checkGlobalUserContact=()=>{try{this.contactElement&&this.contactElement.isUserGlobalContact().subscribe((t=>{this.isUserGlobalContact=t}))}catch(t){console.warn("Error in checkGlobalUserContact: ",t),fr("Error in checkGlobalUserContact: ",t)}},this.toggleSnippylyPluginToolbar=()=>{try{this.expanded=!this.expanded,this.expanded?gr(ht.Events.TOOLBAR_EXPANDED):gr(ht.Events.TOOLBAR_COLLAPSED)}catch(t){console.warn("Error in toggleSnippylyPluginToolbar: ",t),fr("Error in toggleSnippylyPluginToolbar: ",t)}},this.togglePrivateCommentMode=()=>{try{this.commentElement&&(this.privateCommentModeEnabled?(this.commentElement.disablePrivateCommentMode&&this.commentElement.disablePrivateCommentMode(),this.privateCommentModeEnabled=!1,gr(ht.Events.PRIVATE_MODE_DISABLED)):(this.commentElement.enablePrivateCommentMode&&this.commentElement.enablePrivateCommentMode(),this.privateCommentModeEnabled=!0,gr(ht.Events.PRIVATE_MODE_ENABLED)),er("sfPrivateMode",this.privateCommentModeEnabled.toString()))}catch(t){console.warn("Error in togglePrivateCommentMode: ",t),fr("Error in togglePrivateCommentMode: ",t)}},this.checkPrivateCommentModeFromStorage=()=>{try{this.allFeatureDisabled||"Admin"!==this.snippylyUserRole||ir("sfPrivateMode")&&(this.privateCommentModeEnabled="true"===ir("sfPrivateMode"),this.privateCommentModeEnabled&&this.commentElement.enablePrivateCommentMode&&this.commentElement.enablePrivateCommentMode())}catch(t){console.warn("Error in checkPrivateCommentModeFromStorage: ",t),fr("Error in checkPrivateCommentModeFromStorage: ",t)}},this.loginWithGoogle=()=>{try{if(gr(ht.Events.SIGNIN_CLICKED),this.loading||this.customLoginEnabledLocally)return;window.open(this.signInUrl,"_self")}catch(t){console.warn("Error in loginWithGoogle: ",t),fr("Error in loginWithGoogle: ",t)}},this.getQRCode=async()=>{try{const t=new URL(window.location.href);null==t||t.searchParams.set("review","true");const e=null==t?void 0:t.toString();if(e){const t=sr(e,wt,bt),i=await fetch(`https://us-central1-snippyly-sdk-prod.cloudfunctions.net/getqrcode?text=${encodeURIComponent(t)}`),o=await i.json();(null==o?void 0:o.qrcode)&&(this.qrCode=null==o?void 0:o.qrcode)}}catch(t){console.warn("Error in getQRCode: ",t),fr("Error in getQRCode: ",t)}},this.toggleQRCodeVisibility=async()=>{try{gr(ht.Events.OPEN_MOBILE_CLICKED),this.showQrCode=!this.showQrCode,this.showQrCode&&!this.qrCode&&await this.getQRCode()}catch(t){console.warn("Error in toggleQRCodeVisibility: ",t),fr("Error in toggleQRCodeVisibility: ",t)}},this.onUserInviteToolClick=()=>{var t;(null===(t=this.snippylyUser)||void 0===t?void 0:t.isGuest)&&(this.guestModeSignInModalConfig.title="Sign in to invite others.",this.guestModeSignInModalConfig.description="Invite team members to comment on this project.",this.guestModeSignInModalConfig.showLeaveCommentButton=!1,this.guestModeSignInModalConfig.closeOnClickOutside=!0,this.openGuestModeSignInModal())},this.removeSnippyly=async()=>{try{gr(ht.Events.EXIT_REVIEW_MODE_CLICKED),this.exitReviewModeCalled=!0,or("review"),or("feedback"),or("sreviewId"),or("projectVersionKey","sessionStorage"),or("projectVersion","sessionStorage");const t=new URL(document.location),e=t.searchParams;e.delete("sreviewId"),e.delete("review"),e.delete("scommentId"),e.delete("feedback"),this.projectVersionKey&&e.delete(this.projectVersionKey),e.delete("sversion"),e.delete("sprojectInstall"),e.delete("sflivedemo"),this.projectVersion=void 0,this.projectVersionKey=void 0,delete window.snippylyInitialLoadUrl,window.history.replaceState({},document.title,t.href),window.location.reload()}catch(t){console.warn("Error in removeSnippyly: ",t),fr("Error in removeSnippyly: ",t)}},this.signOutUser=async()=>{try{gr(ht.Events.SIGNOUT_CLICKED),this.subscriptions.forEach((t=>{t&&t.unsubscribe&&(null==t||t.unsubscribe())})),await Snippyly.signOutUser(),or("snippyly-user"),or("_sfut"),or("sfUserAdmin"),or("sfPrivateMode"),this.snippylyUser=void 0,window.open(this.signOutUrl,"_self")}catch(t){console.warn("Error in signOutUser: ",t),fr("Error in signOutUser: ",t)}},this.toggleMenu=(t,e)=>{try{t.stopPropagation(),this.menuOpenedId===e?this.menuOpenedId=void 0:this.menuOpenedId=e}catch(t){console.warn("Error in toggleMenu: ",t),fr("Error in toggleMenu: ",t)}},this.copyLink=()=>{try{navigator.clipboard.writeText(window.location.href),this.copyLinkTooltip="Link copied!",setTimeout((()=>{this.copyLinkTooltip="Copy Link"}),2e3)}catch(t){console.warn("Error in copyLink: ",t),fr("Error in copyLink: ",t)}},this.goToAdminPortal=()=>{try{let t="https://app.usesuperflow.com/";Snippyly&&(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getDocumentId)&&this.serverDocumentId&&(t=`https://app.usesuperflow.com//dashboard/project/comment/${this.apiKey}/${this.serverDocumentId}`),gr(ht.Events.VIEW_PROJECT_CLICKED),window.open(t,"_blank")}catch(t){console.warn("Error in goToAdminPortal: ",t),fr("Error in goToAdminPortal: ",t)}},this.goToAdminPortalDashboard=()=>{try{let t="https://app.usesuperflow.com/";Snippyly&&(null===Snippyly||void 0===Snippyly?void 0:Snippyly.getDocumentId)&&this.serverDocumentId&&(t="https://app.usesuperflow.com//dashboard"),window.open(t,"_blank")}catch(t){console.warn("Error in goToAdminPortalDashboard: ",t),fr("Error in goToAdminPortalDashboard: ",t)}},this.joinCommunity=()=>{try{window.open("https://join.slack.com/t/superflowusers/shared_invite/zt-1q3jzsddt-NEb~uu9RXscLfxOIDGQXJw","_blank")}catch(t){console.warn("Error in joinCommunity: ",t),fr("Error in joinCommunity: ",t)}},this.onboardingNextClick=()=>{try{this.showOnboardingModal=!1,er("sprojectInstall","true");const t=new URL(document.location);t.searchParams.delete("sprojectInstall"),window.history.replaceState({},document.title,t.href)}catch(t){console.warn("Error in onboardingNextClick: ",t),fr("Error in onboardingNextClick: ",t)}},this.onLiveDemoModalNextClick=()=>{try{this.showLiveDemoModal=!1,er("sflivedemo","true",!1,"sessionStorage");const t=new URL(document.location);t.searchParams.delete("sflivedemo"),window.history.replaceState({},document.title,t.href)}catch(t){console.warn("Error in onLiveDemoModalNextClick: ",t),fr("Error in onLiveDemoModalNextClick: ",t)}},this.onFigmaDemoModalNextClick=()=>{try{this.showFigmaDemoModal=!1;const t=new URL(document.location);t.searchParams.delete("sffigmademo"),window.history.replaceState({},document.title,t.href)}catch(t){console.warn("Error in onFigmaDemoModalNextClick: ",t),fr("Error in onFigmaDemoModalNextClick: ",t)}},this.onUpgradePlanClick=()=>{try{window.open("https://app.usesuperflow.com/dashboard/billing","_blank")}catch(t){console.warn("Error in onUpgradePlanClick: ",t),fr("Error in onUpgradePlanClick: ",t)}},this.onTourCommentTooltipClick=()=>{try{this.showTourCommentTooltip=!1,er("sfTourCommentTooltip","true")}catch(t){console.warn("Error in onTourCommentTooltipClick: ",t),fr("Error in onTourCommentTooltipClick: ",t)}},this.onGuestModeChipSignInButtonClick=()=>{try{gr(ht.Events.GUEST_MODE_SIGN_IN_BUTTON_CLICKED),this.loginWithGoogle()}catch(t){console.warn("Error in onGuestModeChipSignInButtonClick: ",t),fr("Error in onGuestModeChipSignInButtonClick: ",t)}},this.openGuestModeSignInModal=()=>{try{this.showGuestModeSignInModal=!0,gr(ht.Events.GUEST_MODE_SIGN_IN_DIALOG_SHOWN)}catch(t){console.warn("Error in openGuestModeSignInModal: ",t),fr("Error in openGuestModeSignInModal: ",t)}},this.closeGuestModeSignInModal=()=>{try{this.showGuestModeSignInModal=!1,this.guestModeSignInModalConfig=JSON.parse(JSON.stringify(this.defaultGuestModeSignInModalConfig))}catch(t){console.warn("Error in closeGuestModeSignInModal: ",t),fr("Error in closeGuestModeSignInModal: ",t)}},this.onGuestModeSignInModalSignInButtonClick=()=>{try{gr(ht.Events.GUEST_MODE_SIGN_IN_BUTTON_CLICKED),this.loginWithGoogle()}catch(t){console.warn("Error in onGuestModeSignInModalSignInButtonClick: ",t),fr("Error in onGuestModeSignInModalSignInButtonClick: ",t)}},this.openGuestModeNameModel=t=>{try{t&&(t.stopPropagation(),t.preventDefault()),this.skipGuestNameModal||(this.showGuestModeNameModal=!0,gr(ht.Events.GUEST_MODE_NAME_NUDGE_SHOWN))}catch(t){console.warn("Error in openGuestModeNameModel: ",t),fr("Error in openGuestModeNameModel: ",t)}},this.closeGuestModeNameModel=()=>{try{this.showGuestModeNameModal=!1}catch(t){console.warn("Error in closeGuestModeNameModel: ",t),fr("Error in closeGuestModeNameModel: ",t)}},this.onGuestModeNameModalSkipButtonClick=()=>{try{gr(ht.Events.GUEST_MODE_SKIP_BUTTON_CLICKED),this.showGuestModeNameModal=!1}catch(t){console.warn("Error in onGuestModeNameModalSkipButtonClick: ",t),fr("Error in onGuestModeNameModalSkipButtonClick: ",t)}},this.onPasswordProtectedModalCloseButtonClick=()=>{try{gr(ht.Events.PASSWORD_PROTECTED_MODAL_CLOSE_BUTTON_CLICKED),this.showPasswordProtectedModal=!1,this.password="",this.showInvalidPassword=!1}catch(t){console.warn("Error in onPasswordProtectedModalCloseButtonClick: ",t),fr("Error in onPasswordProtectedModalCloseButtonClick: ",t)}},this.onPasswordProtectedModalOpenButtonClick=()=>{try{gr(ht.Events.PASSWORD_PROTECTED_MODAL_OPEN_BUTTON_CLICKED),this.showPasswordProtectedModal=!0}catch(t){console.warn("Error in onPasswordProtectedModalOpenButtonClick: ",t),fr("Error in onPasswordProtectedModalOpenButtonClick: ",t)}},this.showGuestModeSignInBanner=()=>{try{this.guestModeSignInBannerVisible=!0,gr(ht.Events.GUEST_MODE_SIGN_IN_NUDGE_SHOWN)}catch(t){console.warn("Error in showGuestModeSignInBanner: ",t),fr("Error in showGuestModeSignInBanner: ",t)}},this.hideGuestModeSignInBanner=()=>{try{this.guestModeSignInBannerVisible=!1}catch(t){console.warn("Error in hideGuestModeSignInBanner: ",t),fr("Error in hideGuestModeSignInBanner: ",t)}},this.onGuestModeBannerSignInButtonClick=()=>{try{gr(ht.Events.GUEST_MODE_SIGN_IN_CLICKED),this.loginWithGoogle()}catch(t){console.warn("Error in onGuestModeBannerSignInButtonClick: ",t),fr("Error in onGuestModeBannerSignInButtonClick: ",t)}},this.updateGuestUserName=async()=>{var t;try{if(!(null===(t=this.guestUserNameInput)||void 0===t?void 0:t.trim()))return;if(this.guestUserNameUpdateLoading)return;const e=dr();if(e){const t=JSON.parse(JSON.stringify(e));e.name=this.guestUserNameInput,e.photoUrl=null,this.guestUserNameUpdateLoading=!0,(t=>{try{const e=JSON.stringify(t),i=sr(e,wt,bt);er("_sfgut",i,!0)}catch(t){console.warn("Error in updateGuestUser: ",t),fr("Error in updateGuestUser: ",t)}})(e),await Snippyly.identify(e),this.snippylyUser=JSON.parse(JSON.stringify(e)),await br(this.apiKey,this.projectId||"",t,e),this.showGuestModeNameModal=!1,this.guestUserNameUpdated=!0,this.guestUserNameUpdateLoading=!1,er("sfGuestUserNameUpdated","true"),gr(ht.Events.GUEST_MODE_NAME_ADDED,{oldName:null==t?void 0:t.name,newName:null==e?void 0:e.name})}this.closeGuestModeNameModel()}catch(t){console.warn("Error in updateGuestUserName: ",t),fr("Error in updateGuestUserName: ",t)}},this.submitPassword=async()=>{var t;try{if(gr(ht.Events.REVIEW_PASSWORD_ADDED),!(null===(t=this.password)||void 0===t?void 0:t.trim()))return;if(this.validatingPasswordLoading)return;this.validatingPasswordLoading=!0,this.isPasswordValid=await(async(t,e,i)=>{var o;try{const n=ei(hr,Tt,{timeout:12e5}),s=await n({apiKey:t,projectId:e,password:i});return null===(o=null==s?void 0:s.data)||void 0===o?void 0:o.data}catch(t){return console.warn("Error in validatePassword: ",t),null}})(this.apiKey,this.projectId,this.password),function(t,e){try{const i="object"==typeof e?JSON.stringify(e):e;localStorage.setItem(t,i)}catch(t){console.warn("Error in setLocalStorage: ",t)}}("sfPasswordIsValid",this.isPasswordValid),this.isPasswordValid?(this.password="",this.onPasswordProtectedModalCloseButtonClick(),this.showInvalidPassword=!1,Velt&&Velt.disableFeatures([]),gr(ht.Events.REVIEW_PASSWORD_ACCEPTED)):(this.showInvalidPassword=!0,gr(ht.Events.REVIEW_PASSWORD_REJECTED)),this.validatingPasswordLoading=!1}catch(t){console.warn("Error in submitPassword: ",t),fr("Error in submitPassword: ",t)}},this.updateUserName=async()=>{var t;try{if(!(null===(t=this.guestUserNameInput)||void 0===t?void 0:t.trim()))return;if(this.guestUserNameUpdateLoading)return;this.guestUserNameUpdateLoading=!0;const e=JSON.parse(JSON.stringify(this.snippylyUser)),i=JSON.parse(JSON.stringify(this.snippylyUser));i.name=this.guestUserNameInput,await br(this.apiKey,this.projectId||"",e,i),await Snippyly.updateUser(i),this.snippylyUser=JSON.parse(JSON.stringify(i));const o=ar();o.name=i.name;const n=JSON.stringify(o),s=sr(n,wt,bt);er("_sfut",s,!0),this.guestUserNameUpdateLoading=!1,this.guestUserNameInput="",this.closeGuestModeNameModel()}catch(t){console.warn("Error in updateUserName: ",t),fr("Error in updateUserName: ",t)}},this.disableCommentMode=()=>{var t;try{(null===(t=this.commentElement)||void 0===t?void 0:t.disableCommentMode)&&this.commentElement.disableCommentMode()}catch(t){console.warn("Error in disableAddCommentMode: ",t),fr("Error in disableAddCommentMode: ",t)}},this.disableCommentModeButton=()=>{try{return this.addCommentMode?O`
                    <div class="disable-add-comment-button" @click=${()=>this.disableCommentMode()}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52861 3.52858C3.78896 3.26823 4.21107 3.26823 4.47141 3.52858L8.00001 7.05717L11.5286 3.52858C11.789 3.26823 12.2111 3.26823 12.4714 3.52858C12.7318 3.78892 12.7318 4.21103 12.4714 4.47138L8.94282 7.99998L12.4714 11.5286C12.7318 11.7889 12.7318 12.211 12.4714 12.4714C12.2111 12.7317 11.789 12.7317 11.5286 12.4714L8.00001 8.94279L4.47141 12.4714C4.21107 12.7317 3.78896 12.7317 3.52861 12.4714C3.26826 12.211 3.26826 11.7889 3.52861 11.5286L7.0572 7.99998L3.52861 4.47138C3.26826 4.21103 3.26826 3.78892 3.52861 3.52858Z" fill="#FAFBFF"/>
                        </svg>
                    </div>
                `:O``}catch(t){return console.warn("Error in disableAddCommentModeButton: ",t),fr("Error in disableAddCommentModeButton: ",t),O``}},this.addStyles=()=>{var t,e;try{const i=document.createElement("style");i.textContent=xr.cssText,null===(t=this.shadowRoot)||void 0===t||t.appendChild(i);const o=document.createElement("style");o.textContent=Er.cssText,null===(e=this.shadowRoot)||void 0===e||e.appendChild(o)}catch(t){console.warn("Error in addStyles: ",t),fr("Error in addStyles: ",t)}},this.guestUserNameUpdated=!!ir("sfGuestUserNameUpdated");const t=new URL(document.location);t.searchParams.has("st")&&t.searchParams.delete("st"),this.signInUrl=`https://app.usesuperflow.com//signin?redirect_url=${encodeURIComponent(null==t?void 0:t.toString())}&source=sf`,this.signOutUrl=`https://app.usesuperflow.com//signout?redirect_url=${encodeURIComponent(null==t?void 0:t.toString())}&source=sf`,window.Superflow={enableCustomLogin:async()=>{this.customLoginEnabledLocally=!0,or("_sfut"),await this.checkCustomLoginEnabled()},identify:async t=>{this.providedUser=t,this.customLoginEnabled&&this.loginWithCustomUser()},signInUrl:this.signInUrl,signOutUrl:this.signOutUrl,openGuestModeSignInModal:t=>{this.skipGuestNameModal=t,this.openGuestModeSignInModal()},onPasswordProtectedModalOpenButtonClick:()=>{this.onPasswordProtectedModalOpenButtonClick()}};try{this.detectVersion(),this.setWindowEventListner(),this.urlChangeListener(),this.checkUrl()}catch(t){console.warn("Error in constructor: ",t),fr("Error in constructor: ",t)}}get loadPlugin(){return this._loadPlugin}set loadPlugin(t){var e,i,o,n,s,r,a,l,d,c;this._loadPlugin=t,this.loadPlugin?(this.classList.add("visible"),null===(i=null===(e=null===document||void 0===document?void 0:document.body)||void 0===e?void 0:e.style)||void 0===i||i.setProperty("transform","none","important"),null===(s=null===(n=null===(o=null===document||void 0===document?void 0:document.body)||void 0===o?void 0:o.parentElement)||void 0===n?void 0:n.style)||void 0===s||s.setProperty("transform","none","important"),null===(a=null===(r=null===document||void 0===document?void 0:document.body)||void 0===r?void 0:r.style)||void 0===a||a.setProperty("perspective","none","important"),null===(c=null===(d=null===(l=null===document||void 0===document?void 0:document.body)||void 0===l?void 0:l.parentElement)||void 0===d?void 0:d.style)||void 0===c||c.setProperty("perspective","none","important")):this.classList.remove("visible")}get expanded(){return this._expanded}set expanded(t){this._expanded=t,this.expanded?this.classList.add("expanded"):this.classList.remove("expanded")}get isPlanExpired(){return this._isPlanExpired}set isPlanExpired(t){this._isPlanExpired=t,this.checkToEnableUpgradeButton()}get apiKey(){return this._apiKey}set apiKey(t){this._apiKey=t,this.onApiKeyChange(),vr({apiKey:this.apiKey}),this.checkUrl()}get projectId(){return this._projectId}set projectId(t){this._projectId=t,this.checkUrl()}get projectVersionKey(){return this._projectVersionKey}set projectVersionKey(t){try{this._projectVersionKey=t,this.projectVersionKey&&er("projectVersionKey",this.projectVersionKey,!1,"sessionStorage"),this.exitReviewModeCalled||this.detectVersion()}catch(t){console.warn("Error in set projectVersionKey: ",t),fr("Error in set projectVersionKey: ",t)}}get autoLocation(){return this._autoLocation}set autoLocation(t){this._autoLocation="true"===t||!0===t}get menuOpenedId(){return this._menuOpenedId}set menuOpenedId(t){this._menuOpenedId=t,this.menuOpenedId?this.addWindowClickEventListener():this.removeWindowClickEventListener()}get isUserGlobalContact(){return this._isUserGlobalContact}set isUserGlobalContact(t){this._isUserGlobalContact=t,this.checkToEnableUpgradeButton()}get privateCommentModeEnabled(){return this._privateCommentModeEnabled}set privateCommentModeEnabled(t){this._privateCommentModeEnabled=t,this.darkMode=!!this.privateCommentModeEnabled}get customerMetadata(){return this._customerMetadata}set customerMetadata(t){this._customerMetadata=t,this.setLogos()}get documentMetadata(){return this._documentMetadata}set documentMetadata(t){this._documentMetadata=t}get darkMode(){return this._darkMode}set darkMode(t){this._darkMode=t,this.setLogos()}get queryParamsComments(){return this._queryParamsComments}set queryParamsComments(t){this._queryParamsComments=t,this.setQueryParamsCommentsInSdk()}get totalViews(){return this._totalViews}set totalViews(t){this._totalViews=t,this.totalViewsCount=Object.keys(this.totalViews||{}).length}connectedCallback(){super.connectedCallback(),this.getAttribute("apiKey")&&!this.getAttribute("projectId")&&(this.projectId=qs(Xs(window.location.origin))+""),this.expanded=!0,this.setAttribute("data-velt-comment-disabled","true"),this.style.zIndex="2147483647",setTimeout((()=>{if(!this.superflowToolbarMoved){this.superflowToolbarMoved=!0,document.body.appendChild(this);const t=document.querySelector(".cdk-overlay-container");t&&document.body.appendChild(t)}}),5e3);const t=document.createElement("style");t.innerHTML='body[data-velt-ongoing-recording="screen"] superflow-toolbar { display: none !important; }',document.head.appendChild(t),this.addStyles(),setTimeout((()=>{const t=document.querySelectorAll('script[src*="snippyly.min.js"]');(null==t?void 0:t.length)>1&&(console.warn("Multiple superflow scripts installed."),gr(ht.Events.DUPLICATE_SCRIPT_INSTALLED))}),1e3)}async detectToolbarEnabled(){try{if(this.projectId&&this.apiKey){this.toolbarEnabledApiCalled=!0;const t=document.location.toString();t.includes("drive.usesuperflow.com")||t.includes("superflow-file-viewer-staging.web.app")?this.toolbarEnabled=!0:this.toolbarEnabled=await(async(t,e,i)=>{var o;try{const n=ei(hr,Nt,{timeout:12e5}),s=await n({apiKey:t,projectId:e,url:i});return null===(o=null==s?void 0:s.data)||void 0===o?void 0:o.data}catch(t){return console.warn("Error in checkToolbarEnabled: ",t),null}})(this.apiKey,this.projectId,t),this.toolbarEnabled||gr(ht.Events.TOOLBAR_DISABLED)}}catch(t){console.warn("Error in detectToolbarEnabled: ",t),fr("Error in detectToolbarEnabled: ",t)}}render(){var t,e,i,o,n,s,r,a,l,d,c,h,u,p,v,m,f,g;return this.loadPlugin&&this.toolbarEnabled?!this.snippylyUser||this.loading||null===this.isPlanExpired?O`
                <div class="snippyly-plugin-container" part="superflow-toolbar-container">
                    <div class="toolbar" id="smallToolbar">
                        <!-- <div class="toolbar-section">
                            <svg class="toolbar-icon-arrow" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.1607 12.4941C13.8353 12.8195 13.8353 13.3472 14.1607 13.6726L16.4882 16L14.1607 18.3274C13.8353 18.6528 13.8353 19.1805 14.1607 19.5059C14.4862 19.8314 15.0138 19.8314 15.3393 19.5059L18.2559 16.5893C18.5814 16.2638 18.5814 15.7362 18.2559 15.4107L15.3393 12.4941C15.0138 12.1686 14.4862 12.1686 14.1607 12.4941Z" />
                            </svg>
                        </div> -->
                        <div class="toolbar-section">
							<div class="toolbar-logo">
                            	${this.getLogoMark()}
							</div>
                        </div>
                        <div class="toolbar-section">
                            <div class="toolbar-divider"></div>
                        </div>
                        ${this.snippylyUserRole&&!this.allFeatureDisabled?O`
                            <div class="toolbar-section comment-viewmode-section ${lt({"d-none":!this.expanded})}">
                                <div class="toolbar-actions1 ${lt({"d-none":!this.commentElement})}">
                                    <div class="tooltip">
                                        <div class="tooltiptext">${Cr("All Comments")}</div>
                                        <velt-sidebar-button></velt-sidebar-button>
                                    </div>
                                </div>
                                <div class="toolbar-section ${lt({"d-none":!this.commentElement})}">
                                    <div class="toolbar-divider"></div>
                                </div>
                            </div>
                            `:null}
                ${!this.customLoginEnabledLocally||this.loading?O`
                        <div class="toolbar-section ${this.invalidApiKey?"d-none":""}" @click=${()=>this.loginWithGoogle()}>
                            <a class="toolbar-button sign-in-button ${lt({loading:this.loading})}">
                                ${this.loading?O`
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                            <g transform="rotate(0 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(30 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(60 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(90 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(120 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(150 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(180 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(210 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(240 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(270 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(300 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(330 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g>
                                        </svg>
                                        ${this.guestMode,""}
                                    `:O`${this.signInError?O`
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64754 5.99921C8.27961 6.01309 7.97008 5.72609 7.95619 5.35816C7.92488 4.5287 7.8809 3.92331 7.83766 3.48926C7.79508 3.06179 7.53702 2.8046 7.1773 2.76063C6.75313 2.70878 6.15477 2.66634 5.33367 2.66634C4.51254 2.66634 3.91418 2.70878 3.49002 2.76063C3.13048 2.80458 2.87229 3.06189 2.8297 3.48946C2.74944 4.29515 2.667 5.68713 2.667 7.99968C2.667 10.3122 2.74944 11.7042 2.8297 12.5099C2.87229 12.9375 3.13048 13.1948 3.49002 13.2387C3.91418 13.2906 4.51254 13.333 5.33367 13.333C6.15477 13.333 6.75313 13.2906 7.1773 13.2387C7.53702 13.1947 7.79508 12.9376 7.83766 12.5101C7.8809 12.076 7.92488 11.4706 7.95619 10.6412C7.97008 10.2733 8.27961 9.98626 8.64754 10.0001C9.01546 10.014 9.30247 10.3236 9.28858 10.6915C9.25644 11.5428 9.21087 12.1761 9.16443 12.6423C9.06679 13.6224 8.38345 14.4345 7.33908 14.5622C6.85294 14.6216 6.19979 14.6663 5.33367 14.6663C4.46752 14.6663 3.81436 14.6216 3.32822 14.5622C2.28377 14.4345 1.60055 13.622 1.50293 12.6421C1.41698 11.7792 1.33367 10.3407 1.33367 7.99968C1.33367 5.65866 1.41698 4.22013 1.50293 3.35729C1.60055 2.37738 2.28377 1.56483 3.32822 1.43715C3.81436 1.37772 4.46752 1.33301 5.33367 1.33301C6.19979 1.33301 6.85294 1.37772 7.33908 1.43714C8.38345 1.56481 9.06679 2.37697 9.16443 3.35709C9.21087 3.8233 9.25644 4.45651 9.28858 5.30786C9.30247 5.67579 9.01546 5.98532 8.64754 5.99921Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1966 6.13807C10.9362 5.87772 10.9362 5.45561 11.1966 5.19526C11.4569 4.93491 11.879 4.93491 12.1394 5.19526L14.4727 7.5286C14.7331 7.78894 14.7331 8.21105 14.4727 8.4714L12.1394 10.8047C11.879 11.0651 11.4569 11.0651 11.1966 10.8047C10.9362 10.5444 10.9362 10.1223 11.1966 9.86193L12.3918 8.66667H6.0013C5.63311 8.66667 5.33463 8.36819 5.33463 8C5.33463 7.63181 5.63311 7.33333 6.0013 7.33333L12.3918 7.33333L11.1966 6.13807Z" fill="white"/>
                        </svg>
                        <span>${Cr("Sign in again!")}</span>
                    `:O`
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64754 5.99921C8.27961 6.01309 7.97008 5.72609 7.95619 5.35816C7.92488 4.5287 7.8809 3.92331 7.83766 3.48926C7.79508 3.06179 7.53702 2.8046 7.1773 2.76063C6.75313 2.70878 6.15477 2.66634 5.33367 2.66634C4.51254 2.66634 3.91418 2.70878 3.49002 2.76063C3.13048 2.80458 2.87229 3.06189 2.8297 3.48946C2.74944 4.29515 2.667 5.68713 2.667 7.99968C2.667 10.3122 2.74944 11.7042 2.8297 12.5099C2.87229 12.9375 3.13048 13.1948 3.49002 13.2387C3.91418 13.2906 4.51254 13.333 5.33367 13.333C6.15477 13.333 6.75313 13.2906 7.1773 13.2387C7.53702 13.1947 7.79508 12.9376 7.83766 12.5101C7.8809 12.076 7.92488 11.4706 7.95619 10.6412C7.97008 10.2733 8.27961 9.98626 8.64754 10.0001C9.01546 10.014 9.30247 10.3236 9.28858 10.6915C9.25644 11.5428 9.21087 12.1761 9.16443 12.6423C9.06679 13.6224 8.38345 14.4345 7.33908 14.5622C6.85294 14.6216 6.19979 14.6663 5.33367 14.6663C4.46752 14.6663 3.81436 14.6216 3.32822 14.5622C2.28377 14.4345 1.60055 13.622 1.50293 12.6421C1.41698 11.7792 1.33367 10.3407 1.33367 7.99968C1.33367 5.65866 1.41698 4.22013 1.50293 3.35729C1.60055 2.37738 2.28377 1.56483 3.32822 1.43715C3.81436 1.37772 4.46752 1.33301 5.33367 1.33301C6.19979 1.33301 6.85294 1.37772 7.33908 1.43714C8.38345 1.56481 9.06679 2.37697 9.16443 3.35709C9.21087 3.8233 9.25644 4.45651 9.28858 5.30786C9.30247 5.67579 9.01546 5.98532 8.64754 5.99921Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1966 6.13807C10.9362 5.87772 10.9362 5.45561 11.1966 5.19526C11.4569 4.93491 11.879 4.93491 12.1394 5.19526L14.4727 7.5286C14.7331 7.78894 14.7331 8.21105 14.4727 8.4714L12.1394 10.8047C11.879 11.0651 11.4569 11.0651 11.1966 10.8047C10.9362 10.5444 10.9362 10.1223 11.1966 9.86193L12.3918 8.66667H6.0013C5.63311 8.66667 5.33463 8.36819 5.33463 8C5.33463 7.63181 5.63311 7.33333 6.0013 7.33333L12.3918 7.33333L11.1966 6.13807Z" fill="white"/>
                            </svg>
                            <span>${Cr("Sign in to comment")}</span>
                    `}`}
                        </a>
                        </div>
                        ${this.invalidApiKey?O`
                            <div class="toolbar-section">
                                <div class="tooltip">
                                    <div class="tooltiptext">
                                        ${this.isSigningInUserAdmin?O`Current URL not added to Superflow <br/> Project. Please add this URL.`:O`Current URL not added to Superflow <br/> Project. Please contact admin.`}
                                    </div>
                                    <div class="s-alert-btn danger">
                                        <div class='error-container'>
                                            <svg class="error-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89471 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9975 9.61382 20.0485 7.3261 18.3612 5.63882C16.6739 3.95154 14.3862 3.00252 12 3ZM12 19.6154C10.4938 19.6154 9.02146 19.1687 7.76912 18.332C6.51678 17.4952 5.5407 16.3058 4.96431 14.9143C4.38792 13.5227 4.23711 11.9916 4.53095 10.5143C4.82479 9.03707 5.55008 7.68014 6.61511 6.61511C7.68014 5.55008 9.03708 4.82478 10.5143 4.53094C11.9916 4.2371 13.5228 4.38791 14.9143 4.9643C16.3058 5.54069 17.4952 6.51677 18.332 7.76912C19.1688 9.02146 19.6154 10.4938 19.6154 12C19.6131 14.019 18.81 15.9547 17.3824 17.3824C15.9547 18.81 14.019 19.6131 12 19.6154ZM11.3077 12.6923V7.84615C11.3077 7.66254 11.3806 7.48645 11.5105 7.35662C11.6403 7.22678 11.8164 7.15385 12 7.15385C12.1836 7.15385 12.3597 7.22678 12.4895 7.35662C12.6194 7.48645 12.6923 7.66254 12.6923 7.84615V12.6923C12.6923 12.8759 12.6194 13.052 12.4895 13.1818C12.3597 13.3117 12.1836 13.3846 12 13.3846C11.8164 13.3846 11.6403 13.3117 11.5105 13.1818C11.3806 13.052 11.3077 12.8759 11.3077 12.6923ZM13.0385 15.8077C13.0385 16.0131 12.9776 16.2139 12.8635 16.3846C12.7493 16.5554 12.5872 16.6885 12.3974 16.7671C12.2076 16.8457 11.9988 16.8663 11.7974 16.8262C11.596 16.7861 11.4109 16.6872 11.2657 16.542C11.1205 16.3968 11.0216 16.2117 10.9815 16.0103C10.9414 15.8088 10.962 15.6 11.0406 15.4103C11.1192 15.2205 11.2523 15.0583 11.4231 14.9442C11.5938 14.8301 11.7946 14.7692 12 14.7692C12.2754 14.7692 12.5396 14.8786 12.7343 15.0734C12.9291 15.2681 13.0385 15.5323 13.0385 15.8077Z" fill="currentColor"/>
                                            </svg>
                                            <div class="error-message">Error</div>                    
                                        </div>
                                        ${this.isSigningInUserAdmin?O`
                                                <div class="s-cta-btn" @click=${()=>this.goToAdminPortalDashboard()}>
                                                    Add URL
                                                </div>
                                                `:null}
                                    </div>
                                </div>
                            </div>
                            `:null}
                        <div class="toolbar-section">
                            <div class="toolbar-divider"></div>
                        </div>`:null}
                        <div class="toolbar-section s-more-menu dropdown">
                            <div class="dropdown-content">
                                <div class="menu-point header disable-hover">
									<div class="toolbar-logo">
										${this.getWordMark()}
									</div>
                                </div>
                                <div class="menu-point-wrap">
                                    ${Cr("Sign in to comment on this page.")}
                                    <a href="https://www.usesuperflow.com/features" target="_blank">
                                        ${Cr("Learn more")}
                                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.30881 1.72602C3.67106 1.86293 3.11953 2.1682 2.64215 2.64149C2.29011 2.99745 2.05915 3.34183 1.89878 3.76037C1.66018 4.37857 1.668 4.08911 1.668 10.0007C1.668 15.9122 1.66018 15.6228 1.89878 16.241C2.29385 17.2699 3.29164 18.0876 4.38704 18.291C4.70779 18.3496 15.2947 18.3496 15.6154 18.291C16.2297 18.1775 16.9494 17.7942 17.3838 17.3481C17.8221 16.8942 18.1506 16.284 18.2797 15.6736C18.3227 15.4702 18.3345 14.8051 18.3345 12.2973V9.17907H17.5129H16.6913V12.1017C16.6913 13.7957 16.6756 15.126 16.6522 15.259C16.5348 15.975 15.9753 16.5343 15.2593 16.6517C14.9503 16.7025 5.05201 16.7025 4.74282 16.6517C4.03857 16.5382 3.48296 15.9944 3.34997 15.2862C3.29912 15.0085 3.29521 5.06326 3.34997 4.74251C3.46731 4.02653 4.02684 3.467 4.74282 3.34966C4.87582 3.32619 6.20609 3.31054 7.90013 3.31054H10.8226V2.48895V1.66735L7.68482 1.67126C5.25184 1.67126 4.48891 1.68691 4.30881 1.72602Z" fill="#4C5366"/>
                                            <path d="M12.5058 2.48917V3.31077H14.0004H15.4988L13.3548 5.45481L11.2148 7.59477L11.7939 8.17385C12.1108 8.49069 12.3887 8.74902 12.4082 8.74902C12.4317 8.74902 13.4019 7.79443 14.5679 6.62845L16.6924 4.50413V6.0026V7.49715H17.514H18.3352V4.58253V1.66791H15.4206H12.5058V2.48917Z" fill="#4C5366"/>
                                        </svg>
                                    </a>
                                </div>
                                <hr />
                                <div class="menu-point" @click=${()=>this.toggleQRCodeVisibility()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                                        <path fill="#777E91" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                                        <path fill="#777E91" d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                                        <path fill="#777E91" d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                                        <path fill="#777E91" d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                                        <path fill="#777E91" d="M12 9h2V8h-2v1Z"/>
                                    </svg>
                                    <p>${Cr("Open in Mobile")}</p>
                                </div>
                                <div class="menu-point" @click=${()=>this.removeSnippyly()}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.0478 4 8.24816 4.161 6.80371 4.35177C5.50372 4.52346 4.52346 5.50372 4.35177 6.80371C4.16101 8.24816 4 10.0478 4 12C4 13.9522 4.161 15.7518 4.35177 17.1963C4.52346 18.4963 5.50372 19.4765 6.80371 19.6482C8.24816 19.839 10.0478 20 12 20C13.9522 20 15.7518 19.839 17.1963 19.6482C18.4963 19.4765 19.4765 18.4963 19.6482 17.1963C19.839 15.7518 20 13.9522 20 12C20 10.0478 19.839 8.24816 19.6482 6.80371C19.4765 5.50372 18.4963 4.52346 17.1963 4.35177C15.7518 4.16101 13.9522 4 12 4ZM6.54184 2.36899C4.34504 2.65912 2.65912 4.34504 2.36899 6.54184C2.16953 8.05208 2 9.94127 2 12C2 14.0587 2.16953 15.9479 2.36899 17.4582C2.65912 19.655 4.34504 21.3409 6.54184 21.631C8.05208 21.8305 9.94127 22 12 22C14.0587 22 15.9479 21.8305 17.4582 21.631C19.655 21.3409 21.3409 19.655 21.631 17.4582C21.8305 15.9479 22 14.0587 22 12C22 9.94127 21.8305 8.05208 21.631 6.54184C21.3409 4.34504 19.655 2.65912 17.4582 2.36899C15.9479 2.16953 14.0587 2 12 2C9.94127 2 8.05208 2.16953 6.54184 2.36899Z" fill="#777E91"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z" fill="#777E91"/>
                                    </svg>

                                    <p>${Cr("Exit Review Mode")}</p>
                                </div>
                                ${!this.customLoginEnabledLocally&&this.allowGuestModeSignIn?O`
                                    <div class="menu-point" @click=${()=>this.loginWithGoogle()}>
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64754 5.99921C8.27961 6.01309 7.97008 5.72609 7.95619 5.35816C7.92488 4.5287 7.8809 3.92331 7.83766 3.48926C7.79508 3.06179 7.53702 2.8046 7.1773 2.76063C6.75313 2.70878 6.15477 2.66634 5.33367 2.66634C4.51254 2.66634 3.91418 2.70878 3.49002 2.76063C3.13048 2.80458 2.87229 3.06189 2.8297 3.48946C2.74944 4.29515 2.667 5.68713 2.667 7.99968C2.667 10.3122 2.74944 11.7042 2.8297 12.5099C2.87229 12.9375 3.13048 13.1948 3.49002 13.2387C3.91418 13.2906 4.51254 13.333 5.33367 13.333C6.15477 13.333 6.75313 13.2906 7.1773 13.2387C7.53702 13.1947 7.79508 12.9376 7.83766 12.5101C7.8809 12.076 7.92488 11.4706 7.95619 10.6412C7.97008 10.2733 8.27961 9.98626 8.64754 10.0001C9.01546 10.014 9.30247 10.3236 9.28858 10.6915C9.25644 11.5428 9.21087 12.1761 9.16443 12.6423C9.06679 13.6224 8.38345 14.4345 7.33908 14.5622C6.85294 14.6216 6.19979 14.6663 5.33367 14.6663C4.46752 14.6663 3.81436 14.6216 3.32822 14.5622C2.28377 14.4345 1.60055 13.622 1.50293 12.6421C1.41698 11.7792 1.33367 10.3407 1.33367 7.99968C1.33367 5.65866 1.41698 4.22013 1.50293 3.35729C1.60055 2.37738 2.28377 1.56483 3.32822 1.43715C3.81436 1.37772 4.46752 1.33301 5.33367 1.33301C6.19979 1.33301 6.85294 1.37772 7.33908 1.43714C8.38345 1.56481 9.06679 2.37697 9.16443 3.35709C9.21087 3.8233 9.25644 4.45651 9.28858 5.30786C9.30247 5.67579 9.01546 5.98532 8.64754 5.99921Z" fill="#777E91"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1966 6.13807C10.9362 5.87772 10.9362 5.45561 11.1966 5.19526C11.4569 4.93491 11.879 4.93491 12.1394 5.19526L14.4727 7.5286C14.7331 7.78894 14.7331 8.21105 14.4727 8.4714L12.1394 10.8047C11.879 11.0651 11.4569 11.0651 11.1966 10.8047C10.9362 10.5444 10.9362 10.1223 11.1966 9.86193L12.3918 8.66667H6.0013C5.63311 8.66667 5.33463 8.36819 5.33463 8C5.33463 7.63181 5.63311 7.33333 6.0013 7.33333L12.3918 7.33333L11.1966 6.13807Z" fill="#777E91"/>
                                        </svg>
                                        <p>${Cr("Sign in")}</p>
                                    </div>
                                    `:null}
                            </div>
                            <svg
                                class="toolbar-icon"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M14 23C14 24.1 14.9 25 16 25C17.1 25 18 24.1 18 23C18 21.9 17.1 21 16 21C14.9 21 14 21.9 14 23ZM14 9C14 10.1 14.9 11 16 11C17.1 11 18 10.1 18 9C18 7.9 17.1 7 16 7C14.9 7 14 7.9 14 9ZM14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14C14.9 14 14 14.9 14 16Z"
                                />
                            </svg>
                        </div>
                    </div>
                    ${this.showQrCode&&this.qrCode?O`
                            <div class="qrcode-container">
                                <img class="qrcode" src=${this.qrCode} />
                                <button class="qrcode-container-close-btn" @click=${()=>this.toggleQRCodeVisibility()}>x</button>
                            </div>
                        `:null}
                </div>
                ${this.showLiveDemoModal?O`
                <div class="snippyly-plugin-modal-container" @click=${()=>this.onLiveDemoModalNextClick()}>
                    <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                        <img src="https://app.usesuperflow.com/assets/party-emoji.svg" />
                        <div class="s-modal-text">
                            <h1>${Cr("Try Superflow using the toolbar below.")}</h1>
                            <p>
                                ${Cr("Get ready to drop your first comment!")} <br/>
                                ${Cr("But before you do that, you definitely deserve a high five!")}
                            </p>
                        </div>
                        <div class="s-button s-primary" @click=${()=>this.onLiveDemoModalNextClick()}>${Cr("Done")}</div>
                    </div>
                </div>
            `:O``}
                ${this.showFigmaDemoModal?O`
                    <div class="snippyly-plugin-modal-container" @click=${()=>this.onFigmaDemoModalNextClick()}>
                        <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                            <img src="https://app.usesuperflow.com/assets/party-emoji.svg" />
                            <div class="s-modal-text">
                                <h1>
                                    ${Cr("Sign in on the toolbar below and add")}<br/>
                                    ${Cr("comments on the design flaws.")}
                                </h1>
                            </div>
                            <div class="s-button s-primary" @click=${()=>this.onFigmaDemoModalNextClick()}>${Cr("Done")}</div>
                        </div>
                    </div>
                `:O``}
            `:O`
        <div class="snippyly-plugin-container" part="superflow-toolbar-container">
            ${this.disableCommentModeButton()}
            <div class="toolbar ${lt({expanded:this.expanded,"add-comment-mode":this.addCommentMode,"private-comment-mode":!!this.privateCommentModeEnabled})}">

                <!-- icon + logo -->
                <div class="toolbar-section toolbar-toggle-icon d-sm-none" @click=${()=>this.toggleSnippylyPluginToolbar()}>
                    <svg class="toolbar-icon toolbar-icon-arrow" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.1607 12.4941C13.8353 12.8195 13.8353 13.3472 14.1607 13.6726L16.4882 16L14.1607 18.3274C13.8353 18.6528 13.8353 19.1805 14.1607 19.5059C14.4862 19.8314 15.0138 19.8314 15.3393 19.5059L18.2559 16.5893C18.5814 16.2638 18.5814 15.7362 18.2559 15.4107L15.3393 12.4941C15.0138 12.1686 14.4862 12.1686 14.1607 12.4941Z" />
                    </svg>
                </div>

                ${!(null===(t=this.snippylyUser)||void 0===t?void 0:t.isGuest)&&!(null===(e=this.snippylyUser)||void 0===e?void 0:e.name)||(null===(i=this.snippylyUser)||void 0===i?void 0:i.isGuest)&&!this.guestUserNameUpdated?O`
                        <div class="toolbar-section snippyly-logo ${lt({"d-xs-none":this.expanded})}" @click=${()=>{gr(ht.Events.TOOLBAR_NOTIFICATION_CLICKED),this.openGuestModeNameModel()}}>

                            <div class="notification-container">
								<div class="notification">
									<div class="toolbar-logo">
										${this.getLogoMark()}
									</div>
								</div>
                                <div class="notification-badge"></div>
                            </div>

                        </div>
                        `:O`
                        <div class="toolbar-section snippyly-logo ${lt({"d-xs-none":this.expanded})}" @click=${()=>this.toggleSnippylyPluginToolbar()}>
							<div class="toolbar-logo">
								${this.getLogoMark()}
							</div>
                        </div>
                        `}

                <!-- Below features should only be allowed if user role is available -->

                ${this.snippylyUserRole&&!this.isPlanExpired&&!this.allFeatureDisabled&&(!this.passwordProtected||this.passwordProtected&&this.isPasswordValid)?O`
                <!-- divider -->
                <div class="toolbar-section d-xs-none ${lt({"d-none":!this.expanded})}">
                    <div class="toolbar-divider"></div>
                </div>

                <!-- avatars -->
                <div class="toolbar-section presence-section d-sm-none ${lt({"d-none":!this.expanded})}">
                    <div class="toolbar-avatars">
                        <velt-presence max-users="4" self="false"></velt-presence>
                        <!-- <div class="avatar blue overlapped">
                            <img class="avatar-img"
                                src="https://drive.google.com/uc?export=view&id=1QHXtKZg8I7-wIapZJDs-x8YenlHMvzP4">
                        </div>
                        <div class="avatar gray overlapped">
                            <img class="avatar-img"
                                src="https://drive.google.com/uc?export=view&id=19Q76zC8mmLXjnMoRqio6EVtfO4AoB-hm">
                        </div>
                        <div class="avatar yellow overlapped">
                            <div class="avatar-text yellow">K</div>
                        </div>
                        <div class="avatar overlapped">
                            <div class="avatar-text more">+2</div>
                        </div> -->
                    </div>
                </div>

                <!-- divider -->
                <!-- <div class="toolbar-section">
                    <div class="toolbar-divider"></div>
                </div> -->

                <!-- actions -->
                <div class="toolbar-section huddle-recorder-section ${lt({"d-none":!this.expanded})}">
                    <div class="toolbar-actions">
                        ${this.allFeatureDisabled||"Admin"!==this.snippylyUserRole?null:O`<div class="action tooltip private-comment-mode-switch-container ${lt({enabled:!!this.privateCommentModeEnabled,"d-none":this.addCommentMode})}" @click=${()=>this.togglePrivateCommentMode()}>
                                <div class="tooltiptext">
                                    <h3 class="title">Private Mode</h3>
                                    <p class="body">By enabling this Only admins <br/> can view your new comment</p>
                                </div>
                                <div class="private-comment-mode-switch">
                                    <div class="switch-icon">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00049 8.25002C7.67105 8.25002 6.48682 8.29844 5.51927 8.35994C4.60152 8.41827 3.89583 9.1185 3.82997 10.0298C3.78311 10.678 3.75049 11.3611 3.75049 12C3.75049 12.639 3.78311 13.322 3.82997 13.9703C3.89583 14.8815 4.60152 15.5818 5.51927 15.6401C6.48682 15.7016 7.67105 15.75 9.00049 15.75C10.3299 15.75 11.5142 15.7016 12.4817 15.6401C13.3995 15.5818 14.1051 14.8815 14.171 13.9703C14.2179 13.322 14.2505 12.639 14.2505 12C14.2505 11.3611 14.2179 10.678 14.171 10.0298C14.1051 9.1185 13.3995 8.41827 12.4817 8.35994C11.5142 8.29844 10.3299 8.25002 9.00049 8.25002ZM5.42412 6.86296C3.76081 6.96868 2.45402 8.25929 2.33387 9.92163C2.28538 10.5926 2.25049 11.3137 2.25049 12C2.25049 12.6863 2.28538 13.4075 2.33387 14.0784C2.45402 15.7407 3.76081 17.0313 5.42412 17.1371C6.41882 17.2003 7.63508 17.25 9.00049 17.25C10.3659 17.25 11.5822 17.2003 12.5769 17.1371C14.2402 17.0313 15.547 15.7407 15.6671 14.0784C15.7156 13.4075 15.7505 12.6863 15.7505 12C15.7505 11.3137 15.7156 10.5926 15.6671 9.92162C15.547 8.25929 14.2402 6.96868 12.5769 6.86296C11.5822 6.79973 10.3659 6.75002 9.00049 6.75002C7.63508 6.75002 6.41882 6.79973 5.42412 6.86296Z" fill="#625DF5"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 12.5493C10.1984 12.29 10.5 11.8052 10.5 11.25C10.5 10.4216 9.82843 9.75 9 9.75C8.17157 9.75 7.5 10.4216 7.5 11.25C7.5 11.8052 7.80165 12.29 8.25 12.5493V13.5C8.25 13.9142 8.58579 14.25 9 14.25C9.41421 14.25 9.75 13.9142 9.75 13.5V12.5493Z" fill="#625DF5"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 4.50002C5.25 2.42895 6.92893 0.750015 9 0.750015C11.0711 0.750015 12.75 2.42895 12.75 4.50002V4.50002C12.75 4.91423 12.4142 5.25002 12 5.25002C11.5858 5.25002 11.25 4.91423 11.25 4.50002V4.50002C11.25 3.25737 10.2426 2.25002 9 2.25002C7.75736 2.25002 6.75 3.25737 6.75 4.50002V7.50002C6.75 7.91423 6.41421 8.25002 6 8.25002C5.58579 8.25002 5.25 7.91423 5.25 7.50002V4.50002Z" fill="#625DF5"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>`}
                        <div class="action tooltip comment-tool-container">
                            <div class="tooltiptext">${this.allFeatureDisabled?Cr("Commenting is disabled. Contact admin."):Cr("Comment (C)")}</div>
                            ${!this.allFeatureDisabled&&this.showTourCommentTooltip?O`
                                    <div class="tour-tooltiptext" @click=${()=>this.onTourCommentTooltipClick()}>
                                        <div class="tour-tooltip-content">${Cr("Click to add comments on this page.")}</div>
                                        <button class="tour-tooltip-action" @click=${()=>this.onTourCommentTooltipClick()}>${Cr("Ok")}</button>
                                    </div>
                                `:null}
                            ${this.allFeatureDisabled?O`
                                    <div class="custom-tool">
                                        <div class="action" slot="button">
                                            <svg class="toolbar-icon"
                                                 viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M17.7608 6.03888C21.6888 6.64595 24.7153 9.3481 25.7503 13.1722C26.0832 14.4028 26.0832 16.5981 25.7503 17.8287C24.8136 21.2897 22.3047 23.7986 18.8437 24.7353C18.1546 24.9217 17.6783 24.9695 16.5154 24.9685C14.9367 24.9672 14.1823 24.8254 12.8496 24.2792L12.1364 23.9869L9.93697 24.5342C7.8786 25.0464 7.71866 25.071 7.44436 24.917C6.90064 24.6118 6.90443 24.3818 7.49147 22.0353L8.03021 19.8823L7.73728 19.1677C7.19053 17.8336 7.04867 17.0796 7.04737 15.5005C7.0464 14.3376 7.09415 13.8613 7.28063 13.1722C8.21127 9.73361 10.737 7.1939 14.1308 6.28405C14.9298 6.06985 17.0392 5.92745 17.7608 6.03888ZM14.2233 8.05664C12.9452 8.46912 12.019 9.04056 11.0373 10.0223C9.57907 11.4805 8.85364 13.0991 8.75174 15.1214C8.68947 16.3572 8.85884 17.3544 9.31582 18.4435C9.47381 18.8201 9.65855 19.2624 9.72624 19.4266C9.82922 19.6761 9.78471 19.9865 9.45432 21.3204C9.23688 22.1979 9.06827 22.9251 9.07953 22.9364C9.09079 22.9476 9.81796 22.779 10.6955 22.5616C12.0294 22.2312 12.3398 22.1867 12.5893 22.2897C12.7535 22.3573 13.1958 22.5421 13.5724 22.7001C14.6615 23.1571 15.6587 23.3264 16.8945 23.2642C18.9168 23.1623 20.5354 22.4368 21.9936 20.9786C22.968 20.0042 23.5361 19.0878 23.9685 17.7926C24.2112 17.0656 24.2457 16.7805 24.2457 15.5005C24.2457 14.2204 24.2112 13.9353 23.9685 13.2083C23.5361 11.9132 22.968 10.9967 21.9936 10.0223C20.3414 8.37025 18.566 7.66777 16.2447 7.74769C15.3595 7.77823 14.8403 7.8575 14.2233 8.05664Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                `:O`
                                    <velt-comment-tool @click=${()=>this.onTourCommentTooltipClick()} class="${lt({active:!this.allFeatureDisabled&&this.showTourCommentTooltip})}"></velt-comment-tool>
                                `}
                        </div>
                        <div class="action tooltip ${lt({"d-none":this.addCommentMode})}">
                            <div class="tooltiptext">${this.allFeatureDisabled?Cr("Arrow feature is disabled. Contact admin."):Cr("Arrow")}</div>
                            ${this.allFeatureDisabled?O`
                            <div class="custom-tool">
                                <div class="action">
                                    <svg class="toolbar-icon" width="32" height="32" viewBox="0 0 32 32"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M22.6315 18.0207C23.3673 17.9913 23.9399 17.371 23.9105 16.6352L23.6567 10.2894C23.6289 9.59486 23.0723 9.03819 22.3778 9.01041L16.0319 8.75654C15.2961 8.7271 14.6758 9.29972 14.6463 10.0355C14.6169 10.7713 15.1895 11.3916 15.9253 11.4211L19.2283 11.5532L10.0679 20.7136C9.54724 21.2343 9.54724 22.0785 10.0679 22.5992C10.5886 23.1199 11.4329 23.1199 11.9536 22.5992L21.1139 13.4389L21.246 16.7418C21.2754 17.4775 21.8957 18.0502 22.6315 18.0207Z"/>
                                    </svg>
                                </div>
                            </div>
                            `:O`
								<div class="hide-arrow">
									<velt-arrow-tool></velt-arrow-tool>
								</div>
                            `}
                        </div>
                        <div class="tooltip cursor-pointer ${lt({"d-none":this.addCommentMode})}">
                            <div class="tooltiptext">${Cr("Live Huddle")}</div>
                            <velt-huddle-tool type="all"></velt-huddle-tool>
                        </div>
                        ${this.staging&&!this.addCommentMode?O`
                                <div class="tooltip cursor-pointer">
                                    <div class="tooltiptext">${Cr("Recording")}</div>
                                    <velt-recorder-tool type="all"></velt-recorder-tool>
                                </div>
                            `:null}
                    </div>
                </div>

                <!-- divider -->
                <div class="toolbar-section ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                    <div class="toolbar-divider"></div>
                </div>

                <!-- actions 1 -->
                <div class="toolbar-section comment-viewmode-section ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                    <div class="toolbar-actions1">
                        <div class="tooltip">
                            <div class="tooltiptext">${Cr("Open Comments")}</div>
                            <velt-sidebar-button></velt-sidebar-button>
                        </div>
                    </div>
                </div>

                <!-- divider -->
                <div class="toolbar-section ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                    <div class="toolbar-divider"></div>
                </div>`:O`
                    ${this.isPlanExpired?O`
                        <div class="tooltip">
                            <div class="tooltiptext">
                                ${this.isUserGlobalContact?O`Your current plan has <br/> expired, please renew <br/> plan to continue.`:O`Your current plan has expired, <br/> please contact admin.`}
                            </div>
                            <div class="s-alert-btn">
                                <div class='error-container'>
                                    <svg class="error-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89471 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9975 9.61382 20.0485 7.3261 18.3612 5.63882C16.6739 3.95154 14.3862 3.00252 12 3ZM12 19.6154C10.4938 19.6154 9.02146 19.1687 7.76912 18.332C6.51678 17.4952 5.5407 16.3058 4.96431 14.9143C4.38792 13.5227 4.23711 11.9916 4.53095 10.5143C4.82479 9.03707 5.55008 7.68014 6.61511 6.61511C7.68014 5.55008 9.03708 4.82478 10.5143 4.53094C11.9916 4.2371 13.5228 4.38791 14.9143 4.9643C16.3058 5.54069 17.4952 6.51677 18.332 7.76912C19.1688 9.02146 19.6154 10.4938 19.6154 12C19.6131 14.019 18.81 15.9547 17.3824 17.3824C15.9547 18.81 14.019 19.6131 12 19.6154ZM11.3077 12.6923V7.84615C11.3077 7.66254 11.3806 7.48645 11.5105 7.35662C11.6403 7.22678 11.8164 7.15385 12 7.15385C12.1836 7.15385 12.3597 7.22678 12.4895 7.35662C12.6194 7.48645 12.6923 7.66254 12.6923 7.84615V12.6923C12.6923 12.8759 12.6194 13.052 12.4895 13.1818C12.3597 13.3117 12.1836 13.3846 12 13.3846C11.8164 13.3846 11.6403 13.3117 11.5105 13.1818C11.3806 13.052 11.3077 12.8759 11.3077 12.6923ZM13.0385 15.8077C13.0385 16.0131 12.9776 16.2139 12.8635 16.3846C12.7493 16.5554 12.5872 16.6885 12.3974 16.7671C12.2076 16.8457 11.9988 16.8663 11.7974 16.8262C11.596 16.7861 11.4109 16.6872 11.2657 16.542C11.1205 16.3968 11.0216 16.2117 10.9815 16.0103C10.9414 15.8088 10.962 15.6 11.0406 15.4103C11.1192 15.2205 11.2523 15.0583 11.4231 14.9442C11.5938 14.8301 11.7946 14.7692 12 14.7692C12.2754 14.7692 12.5396 14.8786 12.7343 15.0734C12.9291 15.2681 13.0385 15.5323 13.0385 15.8077Z" fill="currentColor"/>
                                    </svg>
                                    <div class="error-message">Expired</div>                    
                                </div>
                                ${this.isUserGlobalContact?O`
                                    <div class="s-cta-btn" @click=${()=>this.onUpgradePlanClick()}>
                                        Renew Plan
                                    </div>
                                    `:null}
                            </div>
                        </div>
                        `:null}
                        ${this.snippylyUserRole?null:O`
                            <div class="tooltip ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                                <div class="tooltiptext">
                                    ${this.snippylyUserRole?null:O`${Cr("You don't have access to this project.")} <br/> ${Cr("Please contact admin.")}`}
                                </div>
                                <div class="s-alert-btn">
                                    <div class='error-container'>
                                        <svg class="error-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89471 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9975 9.61382 20.0485 7.3261 18.3612 5.63882C16.6739 3.95154 14.3862 3.00252 12 3ZM12 19.6154C10.4938 19.6154 9.02146 19.1687 7.76912 18.332C6.51678 17.4952 5.5407 16.3058 4.96431 14.9143C4.38792 13.5227 4.23711 11.9916 4.53095 10.5143C4.82479 9.03707 5.55008 7.68014 6.61511 6.61511C7.68014 5.55008 9.03708 4.82478 10.5143 4.53094C11.9916 4.2371 13.5228 4.38791 14.9143 4.9643C16.3058 5.54069 17.4952 6.51677 18.332 7.76912C19.1688 9.02146 19.6154 10.4938 19.6154 12C19.6131 14.019 18.81 15.9547 17.3824 17.3824C15.9547 18.81 14.019 19.6131 12 19.6154ZM11.3077 12.6923V7.84615C11.3077 7.66254 11.3806 7.48645 11.5105 7.35662C11.6403 7.22678 11.8164 7.15385 12 7.15385C12.1836 7.15385 12.3597 7.22678 12.4895 7.35662C12.6194 7.48645 12.6923 7.66254 12.6923 7.84615V12.6923C12.6923 12.8759 12.6194 13.052 12.4895 13.1818C12.3597 13.3117 12.1836 13.3846 12 13.3846C11.8164 13.3846 11.6403 13.3117 11.5105 13.1818C11.3806 13.052 11.3077 12.8759 11.3077 12.6923ZM13.0385 15.8077C13.0385 16.0131 12.9776 16.2139 12.8635 16.3846C12.7493 16.5554 12.5872 16.6885 12.3974 16.7671C12.2076 16.8457 11.9988 16.8663 11.7974 16.8262C11.596 16.7861 11.4109 16.6872 11.2657 16.542C11.1205 16.3968 11.0216 16.2117 10.9815 16.0103C10.9414 15.8088 10.962 15.6 11.0406 15.4103C11.1192 15.2205 11.2523 15.0583 11.4231 14.9442C11.5938 14.8301 11.7946 14.7692 12 14.7692C12.2754 14.7692 12.5396 14.8786 12.7343 15.0734C12.9291 15.2681 13.0385 15.5323 13.0385 15.8077Z" fill="currentColor"/>
                                        </svg>
                                        <div class="error-message">Request Access</div>
                                    </div>
                                </div>
                            </div>
                            `}
                `}

            ${this.allFeatureDisabled?O`
                <div class="s-alert-btn">
                    <div class='error-container'>
                        <svg class="error-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89471 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9975 9.61382 20.0485 7.3261 18.3612 5.63882C16.6739 3.95154 14.3862 3.00252 12 3ZM12 19.6154C10.4938 19.6154 9.02146 19.1687 7.76912 18.332C6.51678 17.4952 5.5407 16.3058 4.96431 14.9143C4.38792 13.5227 4.23711 11.9916 4.53095 10.5143C4.82479 9.03707 5.55008 7.68014 6.61511 6.61511C7.68014 5.55008 9.03708 4.82478 10.5143 4.53094C11.9916 4.2371 13.5228 4.38791 14.9143 4.9643C16.3058 5.54069 17.4952 6.51677 18.332 7.76912C19.1688 9.02146 19.6154 10.4938 19.6154 12C19.6131 14.019 18.81 15.9547 17.3824 17.3824C15.9547 18.81 14.019 19.6131 12 19.6154ZM11.3077 12.6923V7.84615C11.3077 7.66254 11.3806 7.48645 11.5105 7.35662C11.6403 7.22678 11.8164 7.15385 12 7.15385C12.1836 7.15385 12.3597 7.22678 12.4895 7.35662C12.6194 7.48645 12.6923 7.66254 12.6923 7.84615V12.6923C12.6923 12.8759 12.6194 13.052 12.4895 13.1818C12.3597 13.3117 12.1836 13.3846 12 13.3846C11.8164 13.3846 11.6403 13.3117 11.5105 13.1818C11.3806 13.052 11.3077 12.8759 11.3077 12.6923ZM13.0385 15.8077C13.0385 16.0131 12.9776 16.2139 12.8635 16.3846C12.7493 16.5554 12.5872 16.6885 12.3974 16.7671C12.2076 16.8457 11.9988 16.8663 11.7974 16.8262C11.596 16.7861 11.4109 16.6872 11.2657 16.542C11.1205 16.3968 11.0216 16.2117 10.9815 16.0103C10.9414 15.8088 10.962 15.6 11.0406 15.4103C11.1192 15.2205 11.2523 15.0583 11.4231 14.9442C11.5938 14.8301 11.7946 14.7692 12 14.7692C12.2754 14.7692 12.5396 14.8786 12.7343 15.0734C12.9291 15.2681 13.0385 15.5323 13.0385 15.8077Z" fill="currentColor"/>
                        </svg>
                        <div class="error-message">Comments Disabled</div>                    
                    </div>
                </div>
                `:null}

			${this.passwordProtected&&!this.isPasswordValid?O`
                <div class="s-password-alert">
                    <div class='error-container'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.0556 11.2778H6.94444C6.1467 11.2778 5.5 11.9245 5.5 12.7223V17.7778C5.5 18.5756 6.1467 19.2223 6.94444 19.2223H17.0556C17.8533 19.2223 18.5 18.5756 18.5 17.7778V12.7223C18.5 11.9245 17.8533 11.2778 17.0556 11.2778Z" stroke="#FFCD2E" stroke-width="1.44444" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M17.0556 11.2778H6.94444C6.1467 11.2778 5.5 11.9245 5.5 12.7223V17.7778C5.5 18.5756 6.1467 19.2223 6.94444 19.2223H17.0556C17.8533 19.2223 18.5 18.5756 18.5 17.7778V12.7223C18.5 11.9245 17.8533 11.2778 17.0556 11.2778Z" stroke="black" stroke-opacity="0.16" stroke-width="1.44444" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M8.38892 11.2778V8.38894C8.38892 7.43122 8.76937 6.51272 9.44659 5.8355C10.1238 5.15829 11.0423 4.77783 12 4.77783C12.9578 4.77783 13.8763 5.15829 14.5535 5.8355C15.2307 6.51272 15.6111 7.43122 15.6111 8.38894V11.2778" stroke="#FFCD2E" stroke-width="1.44444" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M8.38892 11.2778V8.38894C8.38892 7.43122 8.76937 6.51272 9.44659 5.8355C10.1238 5.15829 11.0423 4.77783 12 4.77783C12.9578 4.77783 13.8763 5.15829 14.5535 5.8355C15.2307 6.51272 15.6111 7.43122 15.6111 8.38894V11.2778" stroke="black" stroke-opacity="0.16" stroke-width="1.44444" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>					
                        <div class="error-message password">Review is Locked</div>               
                    </div>
					<div class="cta-btn" @click=${()=>this.onPasswordProtectedModalOpenButtonClick()}>
						Enter Password
					</div>     
                </div>
                `:null}
                <!-- actions 2 -->
                <div class="toolbar-section user-profile-section ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                    <div class="toolbar-actions2">
                        ${this.isPlanExpired?null:O`
                            <div class="action tooltip cursor-pointer d-sm-none user-invite-tool-container">
                                <div class="tooltiptext">${Cr("Share")}</div>
                                <velt-user-invite-tool disabled=${this.snippylyUser&&!(null===(o=this.snippylyUser)||void 0===o?void 0:o.isGuest)?"false":"true"}
                                    invite-url=${this.inviteUrl}
                                    document-user-access-list=${"Admin"===this.snippylyUserRole?"true":"false"} @click=${()=>this.onUserInviteToolClick()}></velt-user-invite-tool>
                            </div>
                            `}
            ${(null===(n=this.snippylyUser)||void 0===n?void 0:n.isGuest)&&this.allowGuestModeSignIn?O`
                    <div class="s-guest-user-sign-in-button" @click=${()=>this.loginWithGoogle()}>
                        <p>${Cr("Sign in")}</p>
                    </div>
                    `:O`
                    <div class="action">
                        ${(null===(s=this.snippylyUser)||void 0===s?void 0:s.photoUrl)&&!this.avatarFetchFailed?O`<img class="toolbar-img profile-img" src=${null===(r=this.snippylyUser)||void 0===r?void 0:r.photoUrl} referrerpolicy="no-referrer" title=${null===(a=this.snippylyUser)||void 0===a?void 0:a.name} @error=${()=>this.avatarFetchFailed=!0} />`:O`<div class="profile-initial"><span>${(null===(d=null===(l=this.snippylyUser)||void 0===l?void 0:l.name)||void 0===d?void 0:d.charAt(0))||(null===(h=null===(c=this.snippylyUser)||void 0===c?void 0:c.email)||void 0===h?void 0:h.charAt(0))}</span></div>`}
                    </div>
                    `}
                    </div>
                </div>

                <!-- context menu icon -->
                <div class="toolbar-section ${lt({"d-none":!this.expanded||this.addCommentMode})}">
                <div class="toolbar-section s-more-menu dropdown">
                    <div class="dropdown-content">
                        <div class="menu-point header disable-hover">
							<div class="toolbar-logo">
								${this.getWordMark()}
							</div>
                        </div>
                        <div class="menu-point-wrap">
                            ${Cr("Add comments & recordings on this page.")}
                            <a href="https://www.usesuperflow.com/features" target="_blank">
                                ${Cr("Learn more")}
                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.30881 1.72602C3.67106 1.86293 3.11953 2.1682 2.64215 2.64149C2.29011 2.99745 2.05915 3.34183 1.89878 3.76037C1.66018 4.37857 1.668 4.08911 1.668 10.0007C1.668 15.9122 1.66018 15.6228 1.89878 16.241C2.29385 17.2699 3.29164 18.0876 4.38704 18.291C4.70779 18.3496 15.2947 18.3496 15.6154 18.291C16.2297 18.1775 16.9494 17.7942 17.3838 17.3481C17.8221 16.8942 18.1506 16.284 18.2797 15.6736C18.3227 15.4702 18.3345 14.8051 18.3345 12.2973V9.17907H17.5129H16.6913V12.1017C16.6913 13.7957 16.6756 15.126 16.6522 15.259C16.5348 15.975 15.9753 16.5343 15.2593 16.6517C14.9503 16.7025 5.05201 16.7025 4.74282 16.6517C4.03857 16.5382 3.48296 15.9944 3.34997 15.2862C3.29912 15.0085 3.29521 5.06326 3.34997 4.74251C3.46731 4.02653 4.02684 3.467 4.74282 3.34966C4.87582 3.32619 6.20609 3.31054 7.90013 3.31054H10.8226V2.48895V1.66735L7.68482 1.67126C5.25184 1.67126 4.48891 1.68691 4.30881 1.72602Z" fill="#4C5366"/>
                                    <path d="M12.5058 2.48917V3.31077H14.0004H15.4988L13.3548 5.45481L11.2148 7.59477L11.7939 8.17385C12.1108 8.49069 12.3887 8.74902 12.4082 8.74902C12.4317 8.74902 13.4019 7.79443 14.5679 6.62845L16.6924 4.50413V6.0026V7.49715H17.514H18.3352V4.58253V1.66791H15.4206H12.5058V2.48917Z" fill="#4C5366"/>
                                </svg>
                            </a>
                        </div>
                        <hr />
                        ${this.isUserGlobalContact?O`
                                <div class="menu-point" @click=${()=>this.goToAdminPortal()}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.30881 1.72602C3.67106 1.86293 3.11953 2.1682 2.64215 2.64149C2.29011 2.99745 2.05915 3.34183 1.89878 3.76037C1.66018 4.37857 1.668 4.08911 1.668 10.0007C1.668 15.9122 1.66018 15.6228 1.89878 16.241C2.29385 17.2699 3.29164 18.0876 4.38704 18.291C4.70779 18.3496 15.2947 18.3496 15.6154 18.291C16.2297 18.1775 16.9494 17.7942 17.3838 17.3481C17.8221 16.8942 18.1506 16.284 18.2797 15.6736C18.3227 15.4702 18.3345 14.8051 18.3345 12.2973V9.17907H17.5129H16.6913V12.1017C16.6913 13.7957 16.6756 15.126 16.6522 15.259C16.5348 15.975 15.9753 16.5343 15.2593 16.6517C14.9503 16.7025 5.05201 16.7025 4.74282 16.6517C4.03857 16.5382 3.48296 15.9944 3.34997 15.2862C3.29912 15.0085 3.29521 5.06326 3.34997 4.74251C3.46731 4.02653 4.02684 3.467 4.74282 3.34966C4.87582 3.32619 6.20609 3.31054 7.90013 3.31054H10.8226V2.48895V1.66735L7.68482 1.67126C5.25184 1.67126 4.48891 1.68691 4.30881 1.72602Z" fill="#4C5366"/>
                                        <path d="M12.5058 2.48917V3.31077H14.0004H15.4988L13.3548 5.45481L11.2148 7.59477L11.7939 8.17385C12.1108 8.49069 12.3887 8.74902 12.4082 8.74902C12.4317 8.74902 13.4019 7.79443 14.5679 6.62845L16.6924 4.50413V6.0026V7.49715H17.514H18.3352V4.58253V1.66791H15.4206H12.5058V2.48917Z" fill="#4C5366"/>
                                    </svg>
                                    <p>${Cr("View project")}</p>
                                </div>
                                <hr />
                            `:O``}
                        ${this.isUserGlobalContact&&this.staging?O`
                                <velt-view-analytics>
                                    <div class="menu-point" slot="button">
                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.5 9C7.5 9.39782 7.65804 9.77936 7.93934 10.0607C8.22064 10.342 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77936 10.5 9.39782 10.5 9C10.5 8.60218 10.342 8.22064 10.0607 7.93934C9.77936 7.65804 9.39782 7.5 9 7.5C8.60218 7.5 8.22064 7.65804 7.93934 7.93934C7.65804 8.22064 7.5 8.60218 7.5 9Z"
                                                stroke="#777E91" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M15.75 9C13.95 12 11.7 13.5 9 13.5C6.3 13.5 4.05 12 2.25 9C4.05 6 6.3 4.5 9 4.5C11.7 4.5 13.95 6 15.75 9Z"
                                                stroke="#777E91" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>${Cr(this.totalViewsCount+" Total Views")}</p>
                                    </div>
                                </velt-view-analytics>
                            `:O``}
                        ${this.staging?O`
                                <velt-notifications-tool>
                                    <div class="menu-point" slot="button">
                                        <svg part="button-icon" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-btn-icon ng-star-inserted">
                                            <path d="M6.75 12.75V13.5C6.75 14.0967 6.98705 14.669 7.40901 15.091C7.83097 15.5129 8.40326 15.75 9 15.75C9.59674 15.75 10.169 15.5129 10.591 15.091C11.0129 14.669 11.25 14.0967 11.25 13.5V12.75M7.5 3.75C7.5 3.35218 7.65804 2.97064 7.93934 2.68934C8.22064 2.40804 8.60218 2.25 9 2.25C9.39782 2.25 9.77936 2.40804 10.0607 2.68934C10.342 2.97064 10.5 3.35218 10.5 3.75C11.3613 4.15727 12.0956 4.79124 12.624 5.58397C13.1525 6.3767 13.4553 7.29831 13.5 8.25V10.5C13.5564 10.9663 13.7216 11.4128 13.9821 11.8036C14.2426 12.1944 14.5913 12.5186 15 12.75H3C3.4087 12.5186 3.75736 12.1944 4.01789 11.8036C4.27842 11.4128 4.44356 10.9663 4.5 10.5V8.25C4.54467 7.29831 4.84748 6.3767 5.37596 5.58397C5.90445 4.79124 6.63869 4.15727 7.5 3.75Z" stroke="#777E91" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                        <p>Notifications</p>
                                    </div>
                                </velt-notifications-tool>
                            `:O``}
                        <div class="menu-point" @click=${()=>this.toggleQRCodeVisibility()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                                <path fill="#777E91" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                                <path fill="#777E91" d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                                <path fill="#777E91" d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                                <path fill="#777E91" d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                                <path fill="#777E91" d="M12 9h2V8h-2v1Z"/>
                            </svg>
                            <p>${Cr("Open in Mobile")}</p>
                        </div>
                        <div class="menu-point" @click=${()=>this.removeSnippyly()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.0478 4 8.24816 4.161 6.80371 4.35177C5.50372 4.52346 4.52346 5.50372 4.35177 6.80371C4.16101 8.24816 4 10.0478 4 12C4 13.9522 4.161 15.7518 4.35177 17.1963C4.52346 18.4963 5.50372 19.4765 6.80371 19.6482C8.24816 19.839 10.0478 20 12 20C13.9522 20 15.7518 19.839 17.1963 19.6482C18.4963 19.4765 19.4765 18.4963 19.6482 17.1963C19.839 15.7518 20 13.9522 20 12C20 10.0478 19.839 8.24816 19.6482 6.80371C19.4765 5.50372 18.4963 4.52346 17.1963 4.35177C15.7518 4.16101 13.9522 4 12 4ZM6.54184 2.36899C4.34504 2.65912 2.65912 4.34504 2.36899 6.54184C2.16953 8.05208 2 9.94127 2 12C2 14.0587 2.16953 15.9479 2.36899 17.4582C2.65912 19.655 4.34504 21.3409 6.54184 21.631C8.05208 21.8305 9.94127 22 12 22C14.0587 22 15.9479 21.8305 17.4582 21.631C19.655 21.3409 21.3409 19.655 21.631 17.4582C21.8305 15.9479 22 14.0587 22 12C22 9.94127 21.8305 8.05208 21.631 6.54184C21.3409 4.34504 19.655 2.65912 17.4582 2.36899C15.9479 2.16953 14.0587 2 12 2C9.94127 2 8.05208 2.16953 6.54184 2.36899Z" fill="#777E91"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z" fill="#777E91"/>
                            </svg>

                            <p>${Cr("Exit Review Mode")}</p>
                        </div>
                        ${this.customLoginEnabledLocally||(null===(u=this.snippylyUser)||void 0===u?void 0:u.isGuest)?null:O`
                            <div class="menu-point" @click=${()=>this.signOutUser()}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.19107 12.5012C9.65098 12.4839 10.0379 12.8426 10.0552 13.3025C10.0944 14.3394 10.1494 15.0961 10.2034 15.6387C10.2566 16.173 10.5792 16.4945 11.0289 16.5495C11.5591 16.6143 12.307 16.6673 13.3334 16.6673C14.3598 16.6673 15.1078 16.6143 15.638 16.5495C16.0874 16.4945 16.4101 16.1729 16.4634 15.6384C16.5637 14.6313 16.6667 12.8913 16.6667 10.0007C16.6667 7.10997 16.5637 5.36999 16.4634 4.36288C16.4101 3.82842 16.0874 3.50679 15.638 3.45185C15.1078 3.38703 14.3598 3.33398 13.3334 3.33398C12.307 3.33398 11.5591 3.38703 11.0289 3.45184C10.5792 3.50681 10.2566 3.8283 10.2034 4.36263C10.1494 4.90519 10.0944 5.66193 10.0552 6.69875C10.0379 7.15866 9.65098 7.51742 9.19107 7.50006C8.73116 7.4827 8.3724 7.09579 8.38976 6.63588C8.42994 5.57169 8.4869 4.78017 8.54495 4.19741C8.667 2.97227 9.52117 1.95707 10.8266 1.79749C11.4343 1.72321 12.2507 1.66732 13.3334 1.66732C14.4161 1.66732 15.2325 1.72321 15.8402 1.7975C17.1458 1.9571 17.9998 2.97278 18.1218 4.19767C18.2293 5.27622 18.3334 7.07438 18.3334 10.0006C18.3334 12.9269 18.2293 14.7251 18.1218 15.8036C17.9998 17.0285 17.1458 18.0442 15.8402 18.2038C15.2325 18.2781 14.4161 18.334 13.3334 18.334C12.2507 18.334 11.4343 18.2781 10.8266 18.2038C9.52117 18.0442 8.667 17.029 8.54495 15.8039C8.4869 15.2211 8.42994 14.4296 8.38976 13.3654C8.3724 12.9055 8.73116 12.5186 9.19107 12.5012Z"
                                    fill="#4C5366"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.006 12.3274C6.33144 12.6528 6.33144 13.1805 6.006 13.5059C5.68057 13.8314 5.15293 13.8314 4.82749 13.5059L1.91083 10.5893C1.58539 10.2638 1.58539 9.73618 1.91083 9.41074L4.82749 6.49408C5.15293 6.16864 5.68057 6.16864 6.006 6.49408C6.33144 6.81951 6.33144 7.34715 6.006 7.67259L4.51193 9.16667H12.5001C12.9603 9.16667 13.3334 9.53976 13.3334 10C13.3334 10.4602 12.9603 10.8333 12.5001 10.8333L4.51193 10.8333L6.006 12.3274Z"
                                    fill="#4C5366"
                                    />
                                </svg>
                                <p>${Cr("Sign Out")}</p>
                            </div>
                            `}
                    </div>
                    <svg
                        class="toolbar-icon"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M14 23C14 24.1 14.9 25 16 25C17.1 25 18 24.1 18 23C18 21.9 17.1 21 16 21C14.9 21 14 21.9 14 23ZM14 9C14 10.1 14.9 11 16 11C17.1 11 18 10.1 18 9C18 7.9 17.1 7 16 7C14.9 7 14 7.9 14 9ZM14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14C14.9 14 14 14.9 14 16Z"
                        />
                    </svg>
                    </div>
                </div>

            </div>
            ${this.showQrCode&&this.qrCode?O`
                    <div class="qrcode-container">
                        <img class="qrcode" src=${this.qrCode} />
                        <button class="qrcode-container-close-btn" @click=${()=>this.toggleQRCodeVisibility()}>x</button>
                    </div>
                `:null}
        </div>
        ${this.showOnboardingModal?O`
                <div class="snippyly-plugin-modal-container" @click=${()=>this.onboardingNextClick()}>
                    <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                        <img src="https://app.usesuperflow.com/assets/party-emoji.svg" />
                        <div class="s-modal-text">
                            <h1>${Cr("You’re a SuperFlow installation wizard!")}</h1>
                            <p>
                                ${Cr("Get ready to drop your first comment!")} <br/>
                                ${Cr("But before you do that, you definitely deserve a high five!")}
                            </p>
                        </div>
                        <div class="s-button s-primary" @click=${()=>this.onboardingNextClick()}>${Cr("Next")}</div>
                    </div>
                </div>
            `:O``}
            ${this.showLiveDemoModal?O`
                <div class="snippyly-plugin-modal-container" @click=${()=>this.onLiveDemoModalNextClick()}>
                    <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                        <img src="https://app.usesuperflow.com/assets/party-emoji.svg" />
                        <div class="s-modal-text">
                            <h1>${Cr("Try Superflow using the toolbar below.")}</h1>
                            <p>
                                ${Cr("Get ready to drop your first comment!")} <br/>
                                ${Cr("But before you do that, you definitely deserve a high five!")}
                            </p>
                        </div>
                        <div class="s-button s-primary" @click=${()=>this.onLiveDemoModalNextClick()}>${Cr("Done")}</div>
                    </div>
                </div>
            `:O``}
            ${this.showFigmaDemoModal?O`
                <div class="snippyly-plugin-modal-container" @click=${()=>this.onFigmaDemoModalNextClick()}>
                    <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                        <img src="https://app.usesuperflow.com/assets/party-emoji.svg" />
                        <div class="s-modal-text">
                            <h1>
                                ${Cr("Sign in on the toolbar below and add")}<br/>
                                ${Cr("comments on the design flaws.")}
                            </h1>
                        </div>
                        <div class="s-button s-primary" @click=${()=>this.onFigmaDemoModalNextClick()}>${Cr("Done")}</div>
                    </div>
                </div>
            `:O``}
            ${this.showGuestModeNameModal?O`
                    <div class="snippyly-plugin-modal-container s-guest-mode-signin-modal-container">
                        <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}
                            @pointerdown=${t=>null==t?void 0:t.stopPropagation()} 
                            @pointerup=${t=>null==t?void 0:t.stopPropagation()}
                            @mousedown=${t=>null==t?void 0:t.stopPropagation()} 
                            @mouseup=${t=>null==t?void 0:t.stopPropagation()}>
                            <div class="s-modal-superflow-logo">
								${this.getWordMark()}
                            </div>
                            <div class="s-modal-subtitle">Tag your comments with your name!</div>
                            <input id="guestUserName" class="s-guest-user-name" placeholder="Your name" @input=${t=>{var e;return this.guestUserNameInput=null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.value}} />
                            <div class="s-button s-primary s-signin-button ${(null===(p=this.guestUserNameInput)||void 0===p?void 0:p.trim())?"":"s-disabled"}" @click=${()=>{var t;(null===(t=this.snippylyUser)||void 0===t?void 0:t.isGuest)?this.updateGuestUserName():this.updateUserName()}}>
                                ${this.guestUserNameUpdateLoading?O`
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                            <g transform="rotate(0 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(30 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(60 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(90 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(120 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(150 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(180 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(210 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(240 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(270 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(300 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g><g transform="rotate(330 50 50)">
                                            <rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
                                                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                                            </rect>
                                            </g>
                                        </svg>
                                        `:null}
                                ${this.guestUserNameUpdateLoading?"":Cr("Save")}
                            </div>
                            <div class="s-modal-link-text" @click=${()=>this.onGuestModeNameModalSkipButtonClick()}>Skip</div>
                        </div>
                    </div>
                    `:O``}
            ${(null===(v=this.snippylyUser)||void 0===v?void 0:v.isGuest)?O`
                        ${!this.addCommentMode&&this.allowGuestModeSignIn?O`
								<div class="s-guest-mode-chip" part="guest-mode-chip">
									<div class="s-guest-mode-chip-title ${this.allowGuestModeSignIn?"":"s-guest-mode-rounded-corners"}">Guest Mode</div>
									<div class="s-guest-mode-chip-action" @click=${()=>this.onGuestModeChipSignInButtonClick()}>Sign in</div>
								</div>
                            `:O``}
                        ${this.showGuestModeSignInModal?O`
                                <div class="snippyly-plugin-modal-container s-guest-mode-signin-modal-container" @click=${()=>{this.guestModeSignInModalConfig.closeOnClickOutside&&this.closeGuestModeSignInModal()}}>
                                    <div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}>
                                        <div class="s-modal-superflow-logo">
											${this.getWordMark()}
                                        </div>
                                        <div class="s-modal-title">${null===(m=this.guestModeSignInModalConfig)||void 0===m?void 0:m.title}</div>
                                        <div class="s-modal-subtitle">${null===(f=this.guestModeSignInModalConfig)||void 0===f?void 0:f.description}</div>
                                        <div class="s-button s-primary s-signin-button" @click=${()=>this.onGuestModeSignInModalSignInButtonClick()}>${Cr("Sign in")}</div>
                                        ${this.guestModeSignInModalConfig.showLeaveCommentButton?O`
                                                <div class="s-modal-link-text" @click=${t=>{this.closeGuestModeSignInModal(),this.openGuestModeNameModel(t)}}>Leave Comment Anonymously</div>
                                                `:O``}
                                    </div>
                                </div>
                                `:O``}
                        ${this.guestModeSignInBannerVisible?O`
                                    <div class="s-guest-mode-banner">
                                        <span>Notify your team about your comments by signing in.</span>
                                        <div class="s-guest-mode-banner-actions">
                                            <button @click=${()=>this.onGuestModeBannerSignInButtonClick()}>${Cr("Sign in")}</button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-pointer" viewBox="0 0 16 16" @click=${()=>this.hideGuestModeSignInBanner()}>
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                `:O``}
                    `:O``}
			${this.passwordProtected&&this.showPasswordProtectedModal?O`
                    <div class="snippyly-plugin-modal-container s-guest-mode-signin-modal-container s-password-container">
						<div class="s-modal" @click=${t=>null==t?void 0:t.stopPropagation()}
							@pointerdown=${t=>null==t?void 0:t.stopPropagation()} 
							@pointerup=${t=>null==t?void 0:t.stopPropagation()}
							@mousedown=${t=>null==t?void 0:t.stopPropagation()} 
							@mouseup=${t=>null==t?void 0:t.stopPropagation()}>
							<div class="s-modal-close-button" @click=${()=>this.onPasswordProtectedModalCloseButtonClick()}>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13.5 4.5L4.5 13.5" stroke="#B1B5C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M4.5 4.5L13.5 13.5" stroke="#B1B5C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div class="s-modal-superflow-logo">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.3333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V17.3333C28 15.8606 26.8061 14.6667 25.3333 14.6667Z" stroke="#625DF5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M9.33337 14.6667V9.33333C9.33337 7.56522 10.0358 5.86953 11.286 4.61929C12.5362 3.36904 14.2319 2.66666 16 2.66666C17.7682 2.66666 19.4638 3.36904 20.7141 4.61929C21.9643 5.86953 22.6667 7.56522 22.6667 9.33333V14.6667" stroke="#625DF5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>							
							</div>
							<div class="s-modal-secondary-subtitle">Enter password to review</div>
							<div class="s-modal-secondary-desc">
								Contact admin if you need help
							</div>
							<div class="s-modal-secondary-actions">
								<input id="Enter Password" placeholder="Password" @input=${t=>{var e;return this.password=null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.value}} />
								<div class="s-button s-primary s-modal-secondary-actions-submit ${(null===(g=this.password)||void 0===g?void 0:g.trim())?"":"s-disabled"}" @click=${()=>{this.submitPassword()}}>
									${this.validatingPasswordLoading?O`
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
												<g transform="rotate(0 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(30 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(60 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(90 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(120 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(150 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(180 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(210 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(240 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(270 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(300 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
												</rect>
												</g><g transform="rotate(330 50 50)">
												<rect x="47" y="6" rx="3" ry="12" width="6" height="24" fill="white">
													<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
												</rect>
												</g>
											</svg>
											`:null}
									${this.validatingPasswordLoading?"":Cr("Submit")}
								</div>
							</div>
							${this.showInvalidPassword?O`
									<div class="error-message">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_21454_3891)">
										<path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.31809 11.6819 1.33332 8.00004 1.33332C4.31814 1.33332 1.33337 4.31809 1.33337 7.99999C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#FF7162" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M8 5.33332V7.99999" stroke="#FF7162" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M8 10.6667H8.00667" stroke="#FF7162" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
										</g>
										<defs>
										<clipPath id="clip0_21454_3891">
										<rect width="16" height="16" fill="white"/>
										</clipPath>
										</defs>
									</svg>				
									Incorrect Password					
									</div>
								`:null}
						</div>
                    </div>
                    `:O``}
        `:O``}}kr.styles=[xr,Er],Sr([it()],kr.prototype,"loadPlugin",null),Sr([it()],kr.prototype,"comments",void 0),Sr([it()],kr.prototype,"commentElement",void 0),Sr([it()],kr.prototype,"contactElement",void 0),Sr([it()],kr.prototype,"rewriterElement",void 0),Sr([it()],kr.prototype,"presenceElement",void 0),Sr([it()],kr.prototype,"commentSubscription",void 0),Sr([it()],kr.prototype,"selectionElement",void 0),Sr([it()],kr.prototype,"viewsElement",void 0),Sr([it()],kr.prototype,"docElement",void 0),Sr([it()],kr.prototype,"addCommentMode",void 0),Sr([it()],kr.prototype,"showTourCommentTooltip",void 0),Sr([it()],kr.prototype,"allFeatureDisabled",void 0),Sr([it()],kr.prototype,"allFeatureRestricted",void 0),Sr([it()],kr.prototype,"guestMode",void 0),Sr([it()],kr.prototype,"_expanded",void 0),Sr([it()],kr.prototype,"loading",void 0),Sr([it()],kr.prototype,"signInError",void 0),Sr([it()],kr.prototype,"snippylyUser",void 0),Sr([it()],kr.prototype,"snippylyUserRole",void 0),Sr([it()],kr.prototype,"_isPlanExpired",void 0),Sr([it()],kr.prototype,"showOnboardingModal",void 0),Sr([it()],kr.prototype,"showLiveDemoModal",void 0),Sr([it()],kr.prototype,"showFigmaDemoModal",void 0),Sr([it()],kr.prototype,"showGuestModeSignInModal",void 0),Sr([it()],kr.prototype,"guestModeSignInModalConfig",void 0),Sr([it()],kr.prototype,"showGuestModeNameModal",void 0),Sr([it()],kr.prototype,"guestModeSignInBannerVisible",void 0),Sr([it()],kr.prototype,"guestUserNameInput",void 0),Sr([it()],kr.prototype,"guestUserModelOpened",void 0),Sr([it()],kr.prototype,"guestUserNameUpdated",void 0),Sr([it()],kr.prototype,"guestUserNameUpdateLoading",void 0),Sr([et()],kr.prototype,"apiKey",null),Sr([et()],kr.prototype,"projectId",null),Sr([it()],kr.prototype,"staging",void 0),Sr([et()],kr.prototype,"projectVersionKey",null),Sr([it()],kr.prototype,"projectVersion",void 0),Sr([it()],kr.prototype,"version",void 0),Sr([et()],kr.prototype,"veltVersion",void 0),Sr([et()],kr.prototype,"autoLocation",null),Sr([it()],kr.prototype,"_menuOpenedId",void 0),Sr([it()],kr.prototype,"copyLinkTooltip",void 0),Sr([it()],kr.prototype,"invalidApiKey",void 0),Sr([it()],kr.prototype,"documentId",void 0),Sr([it()],kr.prototype,"serverDocumentId",void 0),Sr([it()],kr.prototype,"_isUserGlobalContact",void 0),Sr([it()],kr.prototype,"location",void 0),Sr([it()],kr.prototype,"qrCode",void 0),Sr([it()],kr.prototype,"showQrCode",void 0),Sr([it()],kr.prototype,"customLoginEnabledLocally",void 0),Sr([et()],kr.prototype,"customLoginEnabled",void 0),Sr([it()],kr.prototype,"providedUser",void 0),Sr([it()],kr.prototype,"autoTranslation",void 0),Sr([it()],kr.prototype,"addCommentCount",void 0),Sr([it()],kr.prototype,"isSigningInUserAdmin",void 0),Sr([it()],kr.prototype,"_privateCommentModeEnabled",void 0),Sr([it()],kr.prototype,"superflowToolbarMoved",void 0),Sr([it()],kr.prototype,"_customerMetadata",void 0),Sr([it()],kr.prototype,"logoMark",void 0),Sr([it()],kr.prototype,"wordMark",void 0),Sr([it()],kr.prototype,"_darkMode",void 0),Sr([it()],kr.prototype,"projectConfig",void 0),Sr([it()],kr.prototype,"allowGuestModeSignIn",void 0),Sr([it()],kr.prototype,"_queryParamsComments",void 0),Sr([it()],kr.prototype,"toolbarEnabled",void 0),Sr([it()],kr.prototype,"toolbarEnabledApiCalled",void 0),Sr([it()],kr.prototype,"passwordProtected",void 0),Sr([it()],kr.prototype,"isPasswordValid",void 0),Sr([it()],kr.prototype,"password",void 0),Sr([it()],kr.prototype,"validatingPasswordLoading",void 0),Sr([it()],kr.prototype,"showPasswordProtectedModal",void 0),Sr([it()],kr.prototype,"showInvalidPassword",void 0),Sr([it()],kr.prototype,"skipGuestNameModal",void 0),Sr([it()],kr.prototype,"_totalViews",void 0),Sr([it()],kr.prototype,"totalViewsCount",void 0),Sr([it()],kr.prototype,"inviteUrl",void 0),Sr([it()],kr.prototype,"showModalOnceCommentIsModeIsOff",void 0),(t=>{if(customElements.get("superflow-toolbar")||customElements.get("snippyly-plugin"))return;const e={allow:["sdkUrl","windowVariables","snippylyPlugin"],loaders:{windowVariables:()=>{const t=null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_API_KEY;return{valid:!!t,type:"windowVariables",apiKey:t,staging:!!(null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_STAGING),projectVersionKey:null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_PROJECT_VERSION_KEY,projectId:null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_PROJECT_ID,autoLocation:null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_AUTO_LOCATION,veltVersion:null===window||void 0===window?void 0:window.SUPERFLOW_TOOLBAR_VELT_VERSION}},snippylyPlugin:()=>{const t=document.querySelector("snippyly-plugin");if(!t)return;const e=t.getAttribute("apiKey"),i=!!t.getAttribute("staging"),o=t.getAttribute("projectVersionKey"),n=t.getAttribute("projectId"),s=t.getAttribute("autoLocation"),r=t.getAttribute("veltVersion");return null==t||t.remove(),{valid:!!e,type:"snippylyPlugin",apiKey:e,staging:i,projectVersionKey:o,projectId:n,autoLocation:s,veltVersion:r}},sdkUrl:()=>{const t=document.getElementById("superflowToolbarScript");if(!t)return;const e=null==t?void 0:t.src,i=new URL(e).searchParams,o=i.has("apiKey")?i.get("apiKey"):void 0;return{valid:!!o,type:"sdkUrl",apiKey:o,staging:void 0,projectVersionKey:void 0,projectId:i.has("projectId")?i.get("projectId"):void 0,autoLocation:i.has("autoLocation")?i.get("autoLocation"):void 0,veltVersion:i.has("veltVersion")?i.get("veltVersion"):void 0}}},load:()=>{for(let t=0;t<e.allow.length;t++){const i=e.allow[t],o=e.loaders[i]();if(o&&o.valid)return o}}},i=()=>{try{const i=e.load();if(customElements.define("superflow-toolbar",t),i&&i.valid){(()=>{try{document.querySelectorAll("superflow-toolbar").forEach((t=>{t.remove()})),document.querySelectorAll("snippyly-plugin").forEach((t=>{t.remove()}))}catch(t){console.warn("Error in removeSuperflowToolbarTag: ",t)}})();const t={};return t.apiKey=i.apiKey,i.staging&&(t.staging="true"),i.projectVersionKey&&(t.projectVersionKey=i.projectVersionKey),i.projectId&&(t.projectId=i.projectId),(null==i?void 0:i.autoLocation)&&(t.autoLocation=i.autoLocation),(null==i?void 0:i.veltVersion)&&(t.veltVersion=i.veltVersion),void((t={})=>{try{const e=document.createElement("superflow-toolbar");Object.keys(t||{}).forEach((i=>{e.setAttribute(i,t[i])})),document.body.appendChild(e)}catch(t){console.warn("Error in loadSuperflowToolbarTag: ",t)}})(t)}}catch(t){console.warn("Error in initSuperflow: ",t)}};(null===document||void 0===document?void 0:document.body)?i():null===document||void 0===document||document.addEventListener("DOMContentLoaded",(()=>{i()}))})(kr);class Mr extends q{}customElements.get("snippyly-plugin")||customElements.define("snippyly-plugin",Mr);export{Mr as SnippylyPlugin,kr as SuperflowToolbar};
