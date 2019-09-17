!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./build/",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,n=e=>"function"==typeof e&&o.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},r={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${d}--\x3e`,h=new RegExp(`${d}|${c}`),p="$lit$";class m{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let s=0,a=-1,r=0;const{strings:l,values:{length:c}}=e;for(;r<c;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)u(t[e].name,p)&&o++;for(;o-- >0;){const t=l[r],i=v.exec(t)[2],o=i.toLowerCase()+p,n=e.getAttribute(o);e.removeAttribute(o);const s=n.split(h);this.parts.push({type:"attribute",index:a,name:i,strings:s}),r+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const o=e.parentNode,n=t.split(h),s=n.length-1;for(let t=0;t<s;t++){let i,s=n[t];if(""===s)i=g();else{const e=v.exec(s);null!==e&&u(e[2],p)&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),i=document.createTextNode(s)}o.insertBefore(i,e),this.parts.push({type:"node",index:++a})}""===n[s]?(o.insertBefore(g(),e),i.push(e)):e.data=n[s],r+=s}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&a!==s||(a++,t.insertBefore(g(),e)),s=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(i.push(e),a--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),r++}}else n.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const u=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},f=e=>-1!==e.index,g=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,a=0,r=0,l=o.nextNode();for(;a<i.length;)if(n=i[a],f(n)){for(;r<n.index;)r++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const s=v.exec(e);t+=null===s?e+(i?d:c):e.substr(0,s.index)+s[1]+s[2]+p+s[3]+d}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let o=0;o<t;o++){i+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(w(e)||!S(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||w(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class _{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)void 0===(i=t[o])&&(i=new _(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class T extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends P{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class I{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new class{handleAttributeExpressions(e,t,i,o){const n=t[0];if("."===n){return new T(e,t.slice(1),i).parts}return"@"===n?[new I(e,t.slice(1),o.eventContext)]:"?"===n?[new k(e,t.slice(1),i)]:new x(e,t,i).parts}handleTextExpression(e){return new _(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(d);return void 0===(i=t.keyString.get(o))&&(i=new m(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const N=new Map,L=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const F=(e,...t)=>new y(e,t,"html",D),q=133;function O(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,q,null,!1);let s=M(o),a=o[s],r=-1,l=0;const d=[];let c=null;for(;n.nextNode();){r++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==a&&a.index===r;)a.index=null!==c?-1:a.index-l,a=o[s=M(o,s)]}d.forEach(e=>e.parentNode.removeChild(e))}const $=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,q,null,!1);for(;i.nextNode();)t++;return t},M=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(f(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const j=e=>t=>{const i=W(t.type,e);let o=N.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},N.set(i,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(d);if(void 0===(n=o.keyString.get(s))){const i=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,e),n=new m(t,i),o.keyString.set(s,n)}return o.stringsArray.set(t.strings,n),n},B=["html","svg"],V=new Set,U=(e,t,i)=>{V.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<s;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{B.forEach(t=>{const i=N.get(W(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),O(e,i)})})})(e);const r=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const s=document.createTreeWalker(o,q,null,!1);let a=M(n),r=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===i&&(r=$(t),i.parentNode.insertBefore(t,i));-1!==a&&n[a].index===l;){if(r>0){for(;-1!==a;)n[a].index+=r,a=M(n,a);return}a=M(n,a)}}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),O(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},K=Promise.resolve(!0),Y=1,Q=4,X=8,Z=16,ee=32,te="finalized";class ie extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const o=this[e];this[i]=t,this._requestUpdate(e,o)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(te)||e.finalize(),this[te]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=G){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||H,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||H.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|X,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~X}}_attributeToProperty(e,t){if(this._updateState&X)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i._classProperties.get(o)||J;this._updateState=this._updateState|Z,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const o=this.constructor,n=o._classProperties.get(e)||J;o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Q;const i=this._updatePromise;this._updatePromise=new Promise((i,o)=>{e=i,t=o});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ie[te]=!0;const oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol();class se{constructor(e,t){if(t!==ne)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ae=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof se)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new se(i,ne)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const re=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let o=0,n=t.length;o<n;o++){const n=t[o];Array.isArray(n)?e(n,i):i.push(n)}return i}(e);class le extends ie{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){re(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}le.finalized=!0,le.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=L.has(t),s=z&&11===t.nodeType&&!!t.host,r=s&&!V.has(o),l=r?document.createDocumentFragment():t;if(((e,t,i)=>{let o=L.get(t);void 0===o&&(a(t,t.firstChild),L.set(t,o=new _(Object.assign({templateFactory:R},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:j(o)},i)),r){const e=L.get(l);L.delete(l);const i=e.value instanceof b?e.value.template:void 0;U(o,l,i),a(t,t.firstChild),t.appendChild(l),L.set(t,e)}!n&&s&&window.ShadyCSS.styleElement(t.host)};const de="custom-theme-name";let ce=!0;function he(e){ce="light"===e,console.log(`Setting ${e} theme`),window.localStorage.setItem(de,ce?"light":"dark")}if(window.localStorage){let e=window.localStorage;if(e.getItem(de)){he(e.getItem(de))}}const pe=ae`
    /* Global variables */
    :host {
        /* section */
        --s1-color: #f79646;
        --s1-color-faded: #f7964655;
        --s2-color: #9e2cf5;
        --s2-color-faded: #9e2cf555;
        --s3-color: #3f902f;
        --s3-color-faded: #3f902f55;
        --s4-color: #1e79e4;
        --s4-color-faded: #1e79e455;

        /* menu */
        --menu-bg: #eee;
        --menu-bg-selected: rgba(0, 112, 192, 0.8);
        --menu-color-selected: #eee;
        --menu-color-text: #333;
        --menu-nav-bg: #fffb;

        /* tab */
        --tab-color: white;
    }

    body {
        font: 16px/1.25 arial, sans-serif;
        height: 100vh;
    }

    hr {
        width: 40%;
        text-align: left;
        position: absolute;
        border-top: 1px solid;
    }

    td {
        vertical-align: top;
    }

    ul {
        margin: 0.5em 0;
    }

    li {
        padding: 0 0 0.5em 0;
    }

    .block {
        margin: 1em 5em 1em 2em;
    }

    .fadeIn {
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }`,me=ae`
    ${pe}
    /* Global variables */
    :host {
        color: white;
        background-color: #17181c;

        /* menu */
        --menu-bg: #222;
        --menu-nav-bg: #17181cbb;
        --menu-color-text: white;

        /* tab */
        --tab-color: #17181c;
    }`,ue=ae`${ce?pe:me}`;customElements.define("title-page",class extends le{render(){return F`

		<style>
			${ue}

			:host { 
				display: block;
				font-family: sans-serif;

				margin: 32px 0 0 0;
			}
			:host([hidden]) { display: none; }

			.container {
				display: flex;
				flex-direction: row;
				padding: 24px 10%;
				box-sizing: border-box;
				position: relative;
				width: 100%;
				justify-content: center;
			}

			.header {
				width: 100%;
				text-align: center;
				align-items: center;
				display: flex;
				color: white;

				flex: 1;

				border-top-left-radius: 16px;
				border-bottom-left-radius: 16px;

				background-color: blue;
				box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
				-moz-box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
				-webkit-box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
			}

			.inner-header {
				padding: 0 32px;
				flex: 1;
			}

			.box {
				width: 50%;
				flex: 1;
				border-top-right-radius: 16px;
				border-bottom-right-radius: 16px;
			}

			.overlay {
				position: absolute;
				bottom: 24px;
				padding: 16px;
				color: black;
				font-weight: bold;
				right: 10%;
				text-align: right;
				background-color: #FED88F;

				border-top-left-radius: 16px;
				border-bottom-right-radius: 16px;
			}

			@media only screen and (max-width: 1220px) {
				.container {
					flex-direction: column;
					align-items: center;
				}

				.box {
					width: 100%;
					border-top-right-radius: 0;
					border-top-left-radius: 0;
					border-bottom-right-radius: 16px;
					border-bottom-left-radius: 16px;
				}

				.header {
					border-top-right-radius: 16px;
					border-top-left-radius: 16px;
					border-bottom-right-radius: 0;
					border-bottom-left-radius: 0;
				}
			}

			@media only screen and (max-width: 600px) {
				:host {
					margin: 64px 0 0 0;
				}

				.container {
					padding: 24px 0;
				}

				.overlay {
					right: 0;
				}
			}

		</style>

		<div class="container">
			<div class="header">
				<div class="inner-header">
					<h1>New Brunswick Provincial Improvement Framework:</h1>
					<h2>A Collaborative Process for Schools, Districts and the Province</h2>
				</div>
			</div>
			<img class="box" src="./manifest/title-page.jpg"/>

			<div class="overlay">
				Department of Education & Early Childhood Development
				<br>
				10-Year Education Implementation Planning Team
				<br>
				DRAFT as of June 20, 2019
			</div>

		</div>
		`}});customElements.define("accordian-section",class extends le{constructor(){super(...arguments),this.color="",this.list=[],this.lastSelectedId=""}static get properties(){return{list:{type:Array},color:{type:String}}}render(){return F`

		<style>
			${ue}

			:host { 
				display: block;
				font-family: sans-serif;
			}
			:host([hidden]) { display: none; }

			.container {
				padding: 1em;
			}

			.nav-section {
				padding: 1em 0;
			}

			.tab {
				cursor: pointer;
				position: relative;
				padding: 10px;

				display: flex;

				border-top: 1px solid ${this.color}55;
			}

			.tab-selected, .tab:hover {
				background-color: ${this.color}55;
				border-top: 2px solid ${this.color};

				padding-top: 9px;

				border-top-right-radius: 5px;
				border-top-left-radius: 5px;
			}

			.tab-content {
				position: relative;
				padding: 10px;

				border-right: 1px solid ${this.color};
				border-bottom: 1px solid ${this.color};
				border-left: 1px solid ${this.color};
				border-bottom-right-radius: 5px;
				border-bottom-left-radius: 5px;
			}

		</style>

		<div class="container">
			${this.list.map(e=>(e.selected&&(this.lastSelectedId=e.id),F`
					<div class="tab ${e.selected?"tab-selected":""}"
							data-tab=${e.id} @click=${t=>this.toggle(e.id)}>
						<div style="flex: 1;">${e.name}</div>
						<div style="flex: 0;">${e.selected?F`-`:F`+`}</div>
					</div>
					${e.selected?F`<div class="tab-content fadeIn">${e.content}</div>`:""}
				`))}
		</div>
		`}toggle(e){if(this.list=this.list.map(e=>(e.selected=!1,e)),this.lastSelectedId===e)return void(this.lastSelectedId="");const t=this.list.find(t=>t.id===e);if(!t)throw new Error("No match tab id found in tab items");t.selected=!0,this.lastSelectedId=t.id}});customElements.define("tabs-section",class extends le{constructor(){super(...arguments),this.list=[],this.currentTab={id:"",name:"",content:F``,selected:!1},this.color=""}static get properties(){return{list:{type:Array},color:{type:String}}}render(){return F`

		<style>
			${ue}

			:host { 
				display: block;
				font-family: sans-serif;
			}
			:host([hidden]) { display: none; }

			.container {
				display: flex;
				flex-direction: column;
			}

			.nav-section {
				padding: 1em 0 0 0;
				display: flex;
				flex-direction: row;
			}

			.tab {
				position: relative;
				z-index: 5;

				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				border: 1px solid #ddd;

				margin: 0 5px 0 0;
				padding: 10pt 25pt;

				background-color: var(--tab-color);
			}

			.tab:hover {
				cursor: pointer;
				padding: 9pt 25pt;
				border-top: 2px solid;
				border-bottom: none;
			}

			.tab-selected {
				border-bottom: 1px solid var(--tab-color);
				border-top-width: 2px;
				border-top-style: solid;
				padding: 9pt 25pt;
			}

			.tab-selected, .tab:hover {
				border-top-color: ${this.color};
			}

			.tab-content {
				position: relative;
				padding: 10px;

				/* hide top of border under tabs */
				margin-top: -1px;

				border: 1px solid #ddd;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}

			@media only screen and (max-width: 900px) {
				.nav-section {
					padding: 0;
				}

				.tab {
					padding: 10px;
				}
				
				.tab:hover {
					padding: 10px;
				}

				.tab-selected {
					padding: 10px;
				}
			}
		</style>

		<div class="container">
			<div class="nav-section">
				${this.list.map(e=>(e.selected&&(this.currentTab=e),F`<div class="tab ${e.selected?"tab-selected":""}"
							data-tab=${e.id} @click=${t=>this.showTab(e.id)}>
						${e.name}
					</div>`))}
			</div>
			<div class="tab-content">
				<div class="content">${this.currentTab.content}</div>
				${this.currentTab.children?F`
					<accordian-section color="#dddddd" .list="${this.currentTab.children}"></accordian-section>
				`:F``}
			</div>
		</div>
		`}selectTab(e){const t=this.list.find(t=>t.id===e);if(!t)throw new Error("No match tab id found in tab items");t.selected=!0,this.currentTab=t}showTab(e){this.list=this.list.map(e=>(e.selected=!1,e)),this.selectTab(e)}});customElements.define("domain-section",class extends le{constructor(){super(...arguments),this.color="",this.colorFaded="",this.tabList=[]}static get properties(){return{color:{type:String},colorFaded:{type:String},tabList:{type:Array}}}render(){return F`

		<style>
			${ue}

			:host { 
				display: block;
				font-family: sans-serif;
			}
			:host([hidden]) { display: none; }

			.domain {
				margin: 1em 7em;
			}
			
			.domain-header {
				margin: 1em 0 0 0;
				padding: 0 0;

				background-color: ${this.colorFaded}; 

				text-align: center;
				border: 1px solid ${this.colorFaded};
				border-top-left-radius: 16px; 
				border-top-right-radius: 16px;

				font-weight: bold;
				font-size: 26px;
			
				height: auto;
				position: relative;
			}

			.container {
				padding: 1em 2em;

				border: 1px solid ${this.colorFaded};
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
				border-top-width: 0;
			}

			.header {
				padding: 0 2em 0 0;
			}

			.tab {
				position: relative;
				padding: 10px;
			}

			.tab-container {
				display: flex;
			}

			@media only screen and (max-width: 900px) {
				.domain {
					margin: 1em 1em;
				}
			}

			@media only screen and (max-width: 600px) {
				.domain {
					margin: 1em 0;
				}

				.container {
					padding: 1em;
				}

				.header {
					padding: 0;
				}
			}

		</style>

		<div class="domain">
			<div class="domain-header">
				<slot name="header"></slot>
			</div>
			<div class="container">
				<div class="header">
					<slot name="overview"></slot>
				</div>
				${this.tabList.length>0?F`<tabs-section .color="${this.color}" .list="${this.tabList}"></tabs-section>`:F``}
			</div>

		</div>
		`}});customElements.define("menu-section",class extends le{constructor(){super(...arguments),this.list=[{id:"anchor_section0",name:"Top",selected:!1,content:F``},{id:"anchor_section1",name:"Framework Overview",selected:!1,content:F``},{id:"anchor_section2",name:"Cycles",selected:!1,content:F``},{id:"anchor_section3",name:"Self-Assessment Instrument",selected:!1,content:F``},{id:"anchor_section4",name:"Appendices and Templates",selected:!1,content:F``}]}static get properties(){return{list:{type:Array}}}static get styles(){return[ue,ae`
		:host { 
			display: block;
			font-family: sans-serif;
		}
		:host([hidden]) { display: none; }

		.container {
			position: fixed;

			top: 0;

			z-index: 10;

			display: flex;
			flex-direction: row;

			width: 100%;
			justify-content: center;
			align-items: center;

			background-color: var(--menu-nav-bg);
		}

		.nav-section {
			padding: 0.5em 0 0 0;
			display: flex;
			flex-direction: row;
		}

		.nav-item {
			cursor: pointer;
			padding: 8px;
			color: var(--menu-color-text);
			background-color: var(--menu-bg);

			border-radius: 3px;
		}

		.right-area {
			margin-right: 4px;
		}

		.nav-item-selected, .nav-item:hover {
			background-color: var(--menu-bg-selected);
			color: var(--menu-color-selected);
		}
		
		.theme {
			position: absolute;
			display: relative;
			cursor: pointer;
			right: 0;
			padding: 0.5em;
			width: 32px;
			height: 32px;
		}

		.theme:hover {
			background-color: var(--menu-bg-selected);
			border-radius: 50%;
		}
		`]}render(){return F`
		<div class="container">
			<div class="nav-section">
				${this.list.map((e,t)=>F`<div class="nav-item 
						${t!==this.list.length-1?"right-area":""} 
						${e.selected?"nav-item-selected":""}"
							@click=${t=>this.selectItem(e.id)}>
						${e.name}
					</div>`)}
			</div>
			<div class="theme" @click="${e=>this.toggleTheme()}">
				<img src="./manifest/${ce?"moon-solid.svg":"sun-solid.svg"}">
			</div>
		</div>
		`}selectItem(e){window.location.hash=e,this.list=this.list.map(e=>(e.selected=!1,e));const t=this.list.find(t=>t.id===e);if(!t)throw new Error("No match tab id found in tab items");t.selected=!0}toggleTheme(){this.dispatchEvent(new CustomEvent("change-theme"))}});const fe=[{id:"item1",name:"Rationale and Consultation",selected:!1,content:F`<p>The desire for a consistent improvement planning framework for schools was identified by means of two major consultations.  The first was a consultation that focused on the 10-year Education Plan implementation.  The 10-year Education Plan implementation committee, which consisted of early childhood educators, representatives from the New Brunswick Teachers’ Association, First Nation educators, families, principals, classroom teachers, and education system leaders, led consultations with over 4800 participants. When the team submitted their recommendations, the overarching request from the system was to establish clear expectations for implementing the 10-year Education Plan.</p>
        <p>The second came from a system-wide consultation that occurred between the dates of November 24th and December 1st, 2017. This took into consideration the views of educators working on the front lines, and included 2497 individual and school submissions. Ongoing consultations, including focus groups and individual dialogues, have occurred regularly following the larger consultations. From these consultations, the desire for a consistent improvement framework, to be used provincially throughout the four Anglophone school districts was identified. Suggestions for content to be included in this framework were also gathered from these systemic consultations.</p>
        <p>Many New Brunswick public school policies indicate the responsibilities of school personnel and others to support effective planning practices. These policies include Policy 322 (Inclusive Education) and Policy 703 (Positive Learning and Working Environment), as well as the <em>Education Act</em> and its supporting regulations. Section 27(1) and section 28(2) of the Act requires that teachers and principals “assist in the development and implementation of the school improvement plan and [cooperate] in the preparation of the school performance report.” The content included in this document offers guidelines to assist schools to do this in an efficient and effective manner.</p>
        <p>Please see <a target="_blank" href="./manifest/Appendix-G.pdf">Appendix G</a> for an elaboration of the obligations associated with improvement planning in New Brunswick schools. </p>`},{id:"item2",name:"The Goals",selected:!1,content:F`<p>The four main goals of the framework are to:</p>
        <ol>
        <li>improve systemic capacity to support the effective implementation of the provincial education plan;</li>
        <li>provide a document which outlines suggested guidelines which assist districts and schools to effectively plan to maximize academic, behavioural and social-emotional outcomes for students;</li>
        <li>provide a framework which balances school autonomy with systemic accountability; and</li>
        <li>collate high-level aggregate data via the Annual School Performance Reports, which will be completed during a provincial School Improvement Plan (SIP) planning day in January. The data from these reports will be shared from schools to the districts and then to the province to better support schools through more effective resource allocation and targeted identification of professional learning (PL) needs for the upcoming school year.</li>
        </ol>`},{id:"item3",name:"10-year Education Plan",selected:!1,content:F`<p>The necessity to align processes and practices are identified in the 10-year Education Plan. The plan notes that we need to:</p>
        <p class="block">&ldquo;work toward developing a cohesive system that is effective and efficient. We must align programs and services, and promote collaborative planning and professional learning. Existing structures, practices and policies must be examined to ensure they are effectively supporting the needs and strengths of our learners&rdquo; (p.19).</p>
        <p><a target="_blank" href="http://www2.gnb.ca/content/dam/gnb/Departments/ed/pdf/K12/EveryoneAtTheirBest.pdf">EveryoneAtTheirBest.pdf</a></p>
        <p>The framework is used to help align all of the components in a complex system. This will include a system-wide approach designed to ensure that we are collectively working to address the objectives outlined in the 10-year Education Plan.&nbsp;</p>
        <p>(See <a target="_blank" href="./manifest/Appendix-A.pdf">Appendix A</a> for a graphic outlining the objectives of the 10-year Ed Plan.)</p>
        <p>The framework will assist districts working with their schools in identifying and working toward these objectives, and will support effective school planning while allowing schools the autonomy to address the specific and varied needs identified at the individual school level.&nbsp;</p>`},{id:"item4",name:"School Self-assessment Tool and Annual School Performance Report",selected:!1,content:F`<p>Feedback from front line educators indicates that a self-assessment tool, based on the school review indicator document originally established by the New Brunswick School Improvement Service, will serve as the self-assessment instrument for use at schools. Schools and districts will use this document, along with school-based evidence (conversations, observations and products), as a mechanism to help identify their particular areas of focus for improvement. Schools and districts may also choose to use other tools to help support the identification of their distinct areas for growth.</p>
        <p>It is important to note that an annual review of the framework and the self-assessment tool will be completed to ensure ongoing alignment with current research and changing systemic needs. These annual updates will be done in consultation with districts and school personnel.</p>
        <p>Schools will be asked to submit an <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Annual School Performance Report</a> to district representatives. This report will outline their strengths and potential areas for growth, as well as their progress toward reaching school goals. Districts will then submit a high-level document to the department outlining the areas of focus they believe need to be prioritized in their district, and suggestions for upcoming resourcing and professional learning needs.</p>`},{id:"item5",name:"Underlying Principles",selected:!1,content:F`<p>The framework is based on the following fundamental principles:</p>
        <ul>
        <li>Student learning is at the center of the framework. All improvement plans should be focused on advancing student outcomes and working with students within their zone of proximal development to grow academically, behaviourally and socially-emotionally.&nbsp;</li>
        <li>The data identified in school plans will be used to inform the district plan(s), which will then be used to drive provincial priorities.</li>
        <li>The indicator document (which will include links to the 10-year Education Plan objectives) will be used as an assessment tool to identify the highest standards of effective practice and will help schools identify baseline objectives.</li>
        <li>The framework will be used to assist schools to plan effectively. The individuality of the districts and schools will be valued.&nbsp; Schools will self-assess and identify their goals, associated strategies and actions based on their local school context, student profiles, staff capacity and what is relevant to address local needs. Autonomy on how these goals are reached will be based on local circumstances. It is recommended schools limit their global priorities to a manageable number.&nbsp; Research indicates that it is beneficial to establish a maximum of five school-wide goals in each improvement plan with three being the preferred number (Duke; Carr; Sterrett, and Wooleyhand, 2014, p.71).<a href="#_ftn1" name="_ftnref1">[1]</a></li>
        </ul>
        <p><a href="#_ftnref1" name="_ftn1">[1]</a> Duke, D. L., Carr, M., Sterrett, W., &amp; Wooleyhand, C. (2014). The School Improvement Planning Handbook: Getting Focused for Turnaround and Transition. <em>Principal, 93, </em>4, 42.</p>`}],ge=[{id:"item1",name:"The Principal/School Administrative Team",selected:!1,content:F`<p>The principal and school administrative team consists of the principal and, depending on the size and configuration of the school, could include vice-principals, department heads and those in supplementary positions of responsibility (SPRs). The principal is ultimately responsible for the overall performance and adherence to standards at the school level and must work with her/his team to ensure that effective school improvement processes are in place.</p>
        <p>The role of the principal and/or designate is to:</p>
        <ul>
        <li>Establish an improvement committee.</li>
        <li>Oversee the improvement process.</li>
        <li>Establish school goals and associated targets.</li>
        <li>Ensure that there is ongoing monitoring of progress.</li>
        <li>Liaise with district staff to source support.</li>
        <li>Ensure school and system alignment.</li>
        <li>Report regularly to the appropriate district personnel on progress and the advancement of student outcomes (academic, behavioural and social-emotional).</li>
        <li>Ensure the Annual School Performance Report is authored and shared with district personnel.</li>
        </ul>`},{id:"item2",name:"The Improvement Committee",selected:!1,content:F`<p>As noted on page 1, the makeup of the improvement committee is a school-based decision and could include any of the following: Core Leadership Team, Distributive Leadership Team, Dedicated School Improvement Planning (SIP) Team, Combined SIP/PLWEP Team, or a Whole School Team depending on the needs, size and configuration of the school.</p>
        <p>The school improvement committee is responsible for supporting the principal and engaging school personnel to conduct the school improvement process, including all of the components listed above with the exception of the establishment of the committee.&nbsp;</p>
        <p>In addition to the components listed above, the role of the school improvement committee is to:</p>
        <ul>
        <li>Conduct the annual self-assessment across the four domains of school improvement (Systemic School Planning, Collaboration, Teaming and Leadership, Learning Environments, and Classroom Practice), while making links to the objectives of the 10-year Education Plan.</li>
        <li>Identify a few key goals.</li>
        <li>Ensure the establishment of strategies and actions to address identified goals.</li>
        <li>Report to the school principal and/or designate and other stakeholders on the progress of the school plan.</li>
        <li>Collate and analyze the evidence required for the Annual School Performance Report.</li>
        <li>Assist with the development, authoring and distribution of the Annual School Performance Report.</li>
        </ul>
        <p>Please note the school-wide goals are very broad. There should be alignment of the school-wide goals with the associated strategies and actions enacted at each level within the school. As we progress from schools, to teams, to classrooms and then to individual students, the strategies and actions, as well as the data used to measure progress, become more targeted.</p>
        <p>The following diagram illustrates that the vision and mission are broad concepts that identify the preferred reality and the broad potential steps which personnel could take to advance outcomes. As we move from broad improvement goals and overall school strategies, we become more targeted. Team and individual strategies and actions should support diverse school goals aligned with the vision and mission of the school. The most targeted actions should occur at the individual student level and should be designed to accomplish two tasks: advance overall school goals and, most importantly, address the needs of the diverse clients (individual students) that we serve.</p>
        <p style="text-align: center;"><img width="50%" src="./manifest/S1-RolesResponsibilities-img.jpg" alt="Roles Responsibilities" /></p>`},{id:"item3",name:"School Personnel",selected:!1,content:F`<p>It is the responsibility of all school personnel to work to advance progress toward the goals outlined in the improvement plan. Teachers, support staff and other school personnel should:</p>
        <ul>
        <li>Develop a working knowledge of the improvement process with the support of the improvement team.</li>
        <li>Participate in the school self-assessment process by examining classroom practices, overall school climate and evidence to help formulate goals and the associated strategies to advance progress towards these goals.</li>
        <li>Make links to the objectives of the 10-year Education Plan.</li>
        <li>Work collaboratively to develop the improvement plan and contribute to the ongoing monitoring of progress through the sharing of evidence.</li>
        <li>Have a working understanding of the improvement plan in relation to their roles and individual contributions to achieve the outcomes identified in the plan.</li>
        <li>Participate in professional learning opportunities designed to advance school goals and student outcomes.</li>
        <li>Work consistently and with fidelity to implement the strategies outlined in the plan.</li>
        <li>Participate in improvement planning meetings as requested.</li>
        </ul>`},{id:"item4",name:"Stakeholders and Partners",selected:!1,content:F`<p>The improvement team should be collaborative and operate in an interdependent manner with stakeholders and potential partners. Although often grouped together and sometimes overlapping, there are often marked differences between stakeholders and partners.</p>
        <p>A <strong>stakeholder</strong> is defined as &ldquo;any group or individual who can affect or is affected by the achievement of the organization&rsquo;s objectives&rdquo; (Freeman 1984)<a href="#_ftn4" name="_ftnref4">[4]</a>. More recently, when defining the term, proponents of change theory have included those who feel they have or will be influenced by an institution (Initiatives Management, EECD, 2017).</p>
        <p>Friedman and Miles (2006)<a href="#_ftn5" name="_ftnref5">[5]</a> provide an exhaustive list of those who may be considered stakeholders. The main groups include customers/clients (students), employees, local communities, suppliers and distributors, and shareholders. Additionally, Friedman offers the media, the public in general, business partners, future generations, past generations (founders of organizations), academics, competitors, NGOs or activists. In addition, stakeholder representatives from trade unions or trade associations, financiers, competitors, government, regulators and policymakers could be considered.&nbsp;</p>
        <p>The school administrative team and improvement committee members should work to identify potential <strong>partners</strong> and actively seek opportunities to communicate with and engage community members, organizations (non-profit), businesses, and other governmental and non-governmental agencies for potential partnerships and support. Many of these partnerships could provide school and community groups with some mutual benefit. For example, students taking Cooperative Education 120 could work with a seniors&rsquo; facility to support online learning for residents as part of their Co-op placement. Opportunities such as these provide practical learning experiences for students while also benefitting the institution hosting the student. It is important that potential partnerships between school and community, which provide the opportunity to advance student outcomes, be examined.&nbsp;</p>
        <p>Regardless of the partner or stakeholders, it is important that team structures are established to promote effective two-way communication between the improvement team and groups with an interest in the improvement plan. To ensure this occurs, improvement teams should solicit feedback from partners and stakeholders prior to generating the plan. Once the improvement plan has been developed in draft form, it is important to communicate the plan to stakeholders for feedback, revisions and support as needed. One goal of this activity would be to examine opportunities for stakeholder support and options for additional partnerships. To accomplish this, schools should:</p>
        <ul>
        <li>Provide a copy of the plan to all relevant stakeholders. (See <a target="_blank" href="./manifest/Appendix-C.pdf">Appendix C</a> for a sample improvement planning template.) This would include teachers, para-professionals (EAs, SIWs, administrative assistants, etc.), external partners, family representatives, District Education Council (DEC) and Parent School Support Committee (PSSC) members.</li>
        <li>Ensure the plan is reviewed at a staff meeting with all staff present. It is recommended this staff meeting take place at the beginning of the school year. During the meeting, demonstrate the alignment of the plan with district and departmental goals, the 10-year Education Plan objectives, and team or teacher growth goals as appropriate.</li>
        <li>Have the improvement planning team or school leaders present the improvement plan to the PSSC and request feedback.</li>
        <li>Consider including a copy of the plan on the school's website. This action may facilitate opportunities for further partnerships.</li>
        </ul>
        <p><a href="#_ftnref4" name="_ftn4">[4]</a> Freeman, R.E (1984). &ldquo;Strategic Management: A stakeholder Approach&rdquo;. Boston, MA: Pitman.</p>
        <p><a href="#_ftnref5" name="_ftn5">[5]</a> Friedman, A. L., &amp; Miles, S. (2006). <em>Stakeholders: Theory and practice</em>. Oxford: Oxford University Press.</p>`},{id:"item5",name:"The District Process and the School Liaison/Critical Friend",selected:!1,content:F`<p><em>The District <br /></em>The work of the district will include helping to promote a culture of self-assessment, evidence-based inquiry and collective responsibility for continuous improvement at district, school and provincial levels. To do this effectively, districts must be collaborative, inclusive and respectful when working with schools. This necessitates a focus on equitable practices while recognizing the distinct nature and needs of each school. Reciprocal communication should be open, honest and focused on a process used primarily for supporting continuous improvement.</p>
        <p>The district processes should:&nbsp;</p>
        <ul>
        <li>Support the notion of continuous improvement for schools and districts.</li>
        <li>Support capacity building and autonomy at the school level.</li>
        <li>Support the self-assessment process at the school level and provide assistance to schools who may need assistance to effectively self-assess.</li>
        <li>Recognize the uniqueness of each school, and work to support the strategies undertaken to address the goals and advance student outcomes.</li>
        <li>Where needed, district staff (school liaisons and/or critical friends) will help schools develop a deeper understanding of the self-assessment process and the evidence which may be used to effectively self-analyze.</li>
        <li>The school liaison can either act as a critical friend or help facilitate links to critical friend(s).</li>
        <li>Critical friends will work with school personnel in a constructive, non-threatening manner.</li>
        <li>Share high level information (e.g., high-level content derived from the schools&rsquo; annual progress reports) to Education and Early Childhood Development (EECD) to help inform long-term provincial planning, goal setting, professional learning and the allocation of supports.</li>
        <li>Support a cycle that helps align the school, district and provincial planning cycles (e.g., three to five years and/or alignment with the 10-year Education Plan).</li>
        <li>Support actions which help reach the objectives identified in the 10-year Education Plan.</li>
        </ul>
        <p><em>School Liaisons/Critical Friends<br /></em>Many of the specific roles and responsibilities of the district staff were previously outlined in this document with the exception of the <em>school liaisons</em> and <em>critical friends</em>. The school liaison is a designated person at the district level who will link schools to critical friends or to act as the critical friend. Critical friends act as a coach, facilitator or challenger and are used to help schools identify needs and build capacity. According to the Glossary of Educational Reform,</p>
        <p class="block">&ldquo;A critical friend is typically a colleague or other educational professional, such as a school coach, who is committed to helping an educator or school improve. A critical friend is someone who is encouraging and supportive, but who also provides honest and often candid feedback that may be uncomfortable or difficult to hear. In short, a critical friend is someone who agrees to speak truthfully, but constructively, about weaknesses, problems, and emotionally charged issues.&rdquo;</p>
        <p>See: <a target="_blank" href="https://www.edglossary.org/critical-friend/">https://www.edglossary.org/critical-friend/</a></p>
        <p>Schools may suggest others to act as critical friends, including colleagues working in like-sized or configured schools, working on similar initiatives or challenges, or those identified by the district using promising or exemplary practices in improvement planning, gathering and analysis of evidence, and ongoing monitoring of progress. District personnel acting as critical friends may refer principals, school administrative teams or improvement committee members to others who have expertise or experience in an area identified as a school improvement goal.&nbsp;</p>`},{id:"item6",name:"The Minister (supported by Education and Early Childhood Education Staff)",selected:!1,content:F`<p>The Minister&rsquo;s primary role is to set provincial parameters and direction in education. Through the Department of Education and Early Childhood Development, the Minister and designates act to:</p>
        <ul>
        <li>Maintain an environment that supports learning.</li>
        <li>Provide funding and other resources.</li>
        <li>Establish a provincial education plan.</li>
        <li>Provide an appropriate legislation and policy framework.</li>
        <li>Identify and communicate provincial expectations to DECs, district staff, families and students.</li>
        <li>Meet with district personnel to discuss data/evidence from their schools and help determine supports to address identified needs.</li>
        <li>Encourage and enable the work of dedicated education professionals.</li>
        </ul>`},{id:"item7",name:"The Superintendent",selected:!1,content:F`<p>The superintendent is the Chief Executive Officer (CEO) of the school district. As such, the superintendent is accountable to the District Education Council for the management of programs and resources, the quality of learning, and the implementation of the district education plan and district expenditure plan. The duties of the superintendent include responsibility for:</p>
        <ul>
        <li>Day-to-day operation of schools.</li>
        <li>Preparing the District Education Plan.</li>
        <li>Preparing the District Performance Report.</li>
        <li>Preparing the District Expenditure Plan.</li>
        <li>Hiring/evaluating district and school staff.</li>
        <li>Managing of budget.</li>
        <li>Operational/administrative decision-making.</li>
        <li>Placement of students.</li>
        <li>Implementing and monitoring provincial and district policies.</li>
        <li>Teacher and teacher-aide assignments.</li>
        <li>Signing agreements.</li>
        </ul>
        <p>Taken from <a target="_blank" href="http://www2.gnb.ca/content/dam/gnb/Departments/ed/pdf/K12/dec-ced/RolesAndResponsibilities.pdf">New Brunswick Public Education: A Shared Responsibility</a></p>
        <p>The superintendent is the sole employee of the DEC and the superintendent&rsquo;s decisions are made on behalf of, and subject to, any policies of the DEC. Superintendents play an important role in school improvement and monitoring of student learning and achievement by supporting policies and processes that promote school self-assessment, ongoing school growth, the adoption and use of promising practices, and by ensuring a focus on academic excellence and ongoing progress toward advancing student outcomes. Follow-up and support may include ensuring that resources are made available to schools to support the initiatives delineated in the improvement plans and ensuring that school, district and departmental plans are aligned to promote ongoing systemic growth.&nbsp;</p>`},{id:"item8",name:"The District Education Council (DEC)",selected:!1,content:F`<p>DECs are responsible for local decision-making in the operation of schools in their district. At the district level, DECs develop broad policies and their superintendents make day- to-day decisions within these policies. In so doing, the superintendent is accountable to the DEC for the management of services, programs and resources, for the quality of learning, and for the implementation of the annual District Education Plan and District Expenditure Plan.</p>`},{id:"item9",name:"Parent School Support Committee",selected:!1,content:F`<p>The Parent School Support Committee (PSSC) is a parent advisory group whose primary responsibility is to advise on school improvement planning. There are several aspects associated with this role including:</p>
        <ul>
        <li>Providing an avenue to access parent voice.</li>
        <li>Advising on school improvement initiatives and helping identify needs.</li>
        <li>Providing input on draft and finalized improvement plans.</li>
        <li>Liaising with District Education Council members through the PSSC chair regarding school strengths and needs.</li>
        <li>Working to strengthen school community communications.</li>
        <li>Providing input on potential partnerships to advance student outcomes.</li>
        </ul>`}],ve=[{id:"item1",name:"School Team",selected:!0,content:F`<p>Each school will have a team focused on continuous improvement. This could be a team dedicated solely to school improvement, a combined school improvement and positive learning environment team, or a different configuration depending on school and district preference. Ultimately, in consultation with staff, the school principal will determine the configuration of the team based on their individual needs.</p>
                      <p>Fullan (2000) notes that one of the core components of the school improvement process is &ldquo;(a) professional learning community in which staff work collaboratively to set clear goals for student learning, assess how well students are doing, develop action plans to increase student achievement, all the while being engaged in inquiry and problem-solving&rdquo;( p. 1).<a href="#_ftn2" name="_ftnref2">[2]</a> The improvement team will facilitate the annual self-assessment process and the ongoing monitoring of strategies and actions within the school year to promote continued growth.</p>
                      <p>Improvement team options include the following:&nbsp;</p>
                      <ol type="A">
                      <li>Core Leadership Team (CLT) and/or Distributive Leadership Team (Kilgore and Reynold, 2011<a href="#_ftn3" name="_ftnref3">[3]</a>)</li>
                      <li>Dedicated School Improvement Planning (SIP) Team</li>
                      <li>Combined Educational Support Services Team (ESST)/School Improvement Team</li>
                      <li>Combined SIP/Positive Learning and Working Environment (PLWEP) Team</li>
                      <li>Whole School Team</li>
                      </ol>
                      <p>Both makeup and number of members on a school team will be at the discretion of the school. Each potential structure is described as follows:</p>
                      <ol type="A">
                      <li>The &ldquo;School Review Indicator Document with Explanatory Notes&rdquo; defines the Core Leadership Team (CLT) as being:
                      <p>Composed of the Principal, Vice-Principal and a selection of key teacher leaders. Like all learning teams in the school, this team should be organized in a very structured manner. Team time should be regularly scheduled; norms should be established; agendas should be created; minutes should be kept and goals and follow-up actions should be developed and monitored. Since the key objective of the CLT is to help facilitate continuous improvement, change and growth, ensuring effective reciprocal communication, reporting to the entire staff, soliciting feedback, monitoring school-based teams and monitoring the Improvement Plan on a routine basis are critical responsibilities of this team. (p. 22).</p>
                      <p>It is noted that a fundamental purpose of the CLT is to help facilitate continuous improvement and monitor the improvement plan on a regular basis. If a school has a number of initiatives and feels the CLT is better served focusing solely on advancing leadership capacity and informing decisions which have school-wide implications, they may choose to have a separate, dedicated, School Improvement Planning (SIP) Team.&nbsp;</p>
                      </li>
                      <li>If a school determines that there should be a dedicated School Improvement Planning Team, separate from the Core Leadership Team, this team should be focused solely on the goals and strategies outlined in the improvement plan. The SIP team would be dedicated to ensuring the consistent implementation of initiatives designed to support the goals established in the improvement plan, monitoring progress, identifying necessary resources and professional learning needs associated with the plan, communicating with stakeholders, and providing an Annual School Performance Report on progress each January. Please see pg. 28 for further information on the Annual School Performance Report.
                      <p>It is important to note that the SIP Team could include membership from the CLT and representation from other groups as appropriate.</p>
                      </li>
                      <li>
                      <p>Combined Educational Support Services Team (ESST) and Improvement Planning Team: It may be beneficial to combine the Education Support Services Team (ESST) and the Leadership Team/Improvement Planning Team, if it is identified that many of the goals are overlapping. This decision should be made in the best interest of the school community in consultation with district personnel.</p>
                      </li>
                      <li>Recognizing that each school is different, the decision to adopt a combined SIP/PLWEP team is entirely the choice of the school in consultation with the district. Recognizing this, when a school chooses to combine the SIP and PLWEP plans, there are key variables to consider:
                      <ul>
                      <li>The plan must align with policy requirements including ensuring adherence to the language established within the <em>Education Act</em> as well as policies 322 and 703 (see <a target="_blank" href="./manifest/Appendix-B.pdf">Appendix B</a> for an elaboration).</li>
                      <li>All combined plans will have a dedicated PLWEP component which is identified specifically by that PLWEP designation.</li>
                      <li>The dedicated PLWEP component of the plan must be able to stand alone in a fully comprehensible manner if removed from the remainder of the combined document.</li>
                      <li>The PLWEP component must be removable in order to comply with Policy 703 and allow for timely replies to Right to Information and Protection of Privacy Act (RTIPPA) requests.</li>
                      <li>In a tiered plan, the PLWEP component should be the first (highest priority) component in the plan if the evidence supports it.</li>
                      </ul>
                      <p>Please note: a wholly combined improvement planning document with no delineation between SIP and PLWEP contravenes the language outlined in Policy 322 and Policy 703.</p>
                      <p>This combined approach can be used to strike a balance between administrative efficiency (combining the documents) and adherence to existing policy while also maintaining a necessary priority on PLWEP planning.&nbsp;</p>
                      </li>
                      <li>Whole School Team &ndash; in a situation where there is the equivalent of eight or fewer full-time teaching staff, schools may choose to adopt a whole school approach to improvement planning teaming. They may also choose to combine other teams which may be focused on similar content, if deemed appropriate.</li>
                      </ol>
                      <p>Schools may choose an atypical configuration if their needs are deemed distinct. Regardless of the preferred structure, the improvement team should be focused on continuous improvement and advancing student outcomes.</p>
                      <p>The following process suggests ways to determine the team configuration and membership:</p>
                      <ol>
                      <li><strong>School size and configuration</strong> &ndash; the size of the team is often dependent on the size and configuration of the school. A small school with a K-5 student population has different needs than a large 6-12 school; consequently, schools need to assess their own distinct needs when determining the size and makeup of the team. In general, those developing an improvement team should consider the following criteria:
                      <ul>
                      <li>Eight to ten members total is suggested, with a recommended minimum of five (depending on school size).</li>
                      <li>Administrative representation.</li>
                      <li>Teacher representation considering grades, levels and overall configuration.</li>
                      <li>Support-staff representation.</li>
                      <li>Representation from school-based teams with a specific focus on having Education Support Teacher-Guidance (EST-G) and Education Support Teacher-Resource (EST-R) representation.</li>
                      <li>A mix of early-career and more experienced teachers.</li>
                      <li>Identification of mechanisms to ensure access to student and parent voice. This could include direct participation on the committee or establishing avenues for formal (student and/or parent) communication with committee representatives to share ideas and/or concerns.</li>
                      </ul>
                      <p>Note: Student feedback could include ongoing consultation depending on the age and maturity of the student population. In the absence of direct attendance at committee meetings, schools could decide to use any of the following feedback mechanisms: through class and/or Student Representative Council (SRC) representatives, assemblies, Principal forums, focus groups, surveys, or any other viable means deemed appropriate and effective by the improvement team.</p>
                      </li>
                      <li>
                      <p>The <strong>guidelines for improvement team members</strong> should include the length of appointment, and an elaboration of the roles and responsibilities associated with membership. For example, the consultative nature of the parent role should be delineated. Meeting norms should be established. Robert&rsquo;s Rules of Order could be applied for this purpose. Norms should include the appointment of a chair and secretary as well as the <strong>generation of agendas and minutes for each meeting</strong>. Schools may also wish to identify individuals with specific expertise to lead and/or support specific initiatives, i.e., Literacy, Math, Data or Resource Support.<br />See: <a target="_blank" href="http://www.robertsrules.org/">http://www.robertsrules.org/</a> for a quick reference to Robert&rsquo;s.</p>
                      </li>
                      <li><strong>Training for improvement team members</strong> - In order for staff, students, families and other stakeholders to understand the process of school improvement, school leaders, with district support where needed, should provide an information session which includes:
                      <ul>
                      <li>An overview of the process.</li>
                      <li>Roles and responsibilities of individual members.</li>
                      </ul>
                      <p>A PowerPoint with notes to support the dialogue will be developed by each district leadership team with all districts represented. School leaders can use this as a guide when administering training sessions.&nbsp;</p>
                      </li>
                      </ol>
                      <p>Note: Team structures should be established to ensure effective two-way communication occurs between improvement teams and stakeholders.</p>
                      <p><a href="#_ftnref2" name="_ftn2">[2]</a> Fullan, M. (2000). <em>The role of the head in school improvement</em>. London, England: National College of School Leadership.&nbsp;</p>
                      <p><a href="#_ftnref3" name="_ftn3">[3]</a> Kilgore, S., &amp; Reynolds, K. J. (2011). From silos to systems: Reframing schools for success. Thousand Oaks, Calif: Corwin.</p>
                      `},{id:"item2",name:"District Team",selected:!1,content:F`<p>Districts will identify a process to provide feedback and support to school staff as needed. Support should be provided through either the school requesting district support or the district offering to provide support. At any time, schools or districts can seek or offer support or counsel. Where a school is accurate in their self-assessment and is attaining the goals outlined in the improvement plan, the request for consultation or support may more often originate from the school.&nbsp;</p>
                      <p>In the event that a school may be struggling to effectively analyze data/evidence or accurately identify specific strengths and needs, district personnel may choose to be proactive and contact school personnel to offer guidance and/or support. Further, if a school has not been able to make progress with the goals identified in the Improvement Plan, schools may seek, or districts may offer, collaborative and constructive support in areas such as:</p>
                      <ul>
                      <li>Data (gathering and analysis).</li>
                      <li>Establishing effective evidence-informed goals.</li>
                      <li>Identifying strategies to facilitate growth.</li>
                      <li>Focusing on student learning and advancing student outcomes.</li>
                      <li>Other areas as determined in collaboration with schools.</li>
                      </ul>
                      <p>Lack of progress may become apparent through the analysis of the Annual School Performance Report or other factors (assessment results, Our School data, Teacher Perception Survey Data or other evidence).</p>
                      <p>As noted, each district is required to establish and communicate a process to support improvement planning in schools. As part of this process, an individual or individuals will be identified to act as <strong>school liaison</strong> to provide resources, process knowledge, and/or support. It has been recommended that the Director of Schools, Director of Curriculum and Instruction, Director of Education Support Services, or the Data and Accountability Supervisor be involved, depending on district and school needs. In collaboration with the principal/school team, district personnel could:&nbsp;</p>
                      <ul>
                      <li>Help schools develop and clarify their vision, mission and value statements, where the latter exist.</li>
                      <li>Assist with the school improvement planning process, the establishment of effective goal setting and development of associated strategies.</li>
                      <li>Facilitate and support ongoing PL.</li>
                      <li>Advance shared leadership and participative decision-making.</li>
                      <li>Help schools to establish and maintain effective teaming and communication structures.</li>
                      <li>Assist schools to build capacity with the gathering, analysis, and use of data/evidence.</li>
                      <li>Identify links to supports and funding opportunities.</li>
                      <li>Assist schools to identify partnerships to help facilitate ongoing school improvement and the advancement of student outcomes.</li>
                      <li>Act as a School Liaison and/or Critical Friend (this will be elaborated upon later in this document in the section, Roles and Responsibilities).</li>
                      </ul>`},{id:"item3",name:"Improvement Planning Process Overview",selected:!1,content:F`<p style="text-align: center;">
                <img width="70%" src="./manifest/S1-ImprovementPlanningProcessOverview-img1.jpg" alt="Improvement Planning Process Overview" />
                <img width="40%" src="./manifest/S1-ImprovementPlanningProcessOverview-img2.jpg" alt="Legend - Improvement Planning Process Overview" />
            </p>
                      <p>The graphic inserted above explains the relationship between individual (e.g. school personnel), groups, districts, and cyclical processes. This graphic can also be used to help explain the interplay between short-term (PDCA) cycles of analysis, which are used to analyze data and help schools adapt to changing circumstances within the school year, and the longer cycles of activity which use data/evidence to track long-term progress toward annual and multi-year goals.&nbsp;</p>`},{id:"item4",name:"Roles and Responsibilities",selected:!1,content:F`<p>Several key individuals and groups are important for the effective implementation of an improvement process at the school level, as outlined below. See also, <a target="_blank" href="http://www2.gnb.ca/content/dam/gnb/Departments/ed/pdf/K12/dec-ced/RolesAndResponsibilities.pdf">Roles and Responsibilities.pdf</a></p>`,children:ge}],be=[{id:"item1",name:"Plan, Do, Check, Act (PDCA) ",selected:!1,content:F`<p>The Plan, Do, Check, Act (PDCA) cycle, or micro cycle, is a recursive cycle of activities that occurs within the school year (Deming, 1986)<a href="#_ftn6" name="_ftnref6">[6]</a>. This cycle is contingent on the use of data/evidence to ensure progress toward ongoing improvement goals. Blink (2016) notes that &ldquo;school improvement is a continuous process&rdquo; (p.11)<a href="#_ftn7" name="_ftnref7">[7]</a>. It is important for schools to understand that the improvement planning cycle is recursive and the gathering of evidence and analysis of progress toward identified goals repeats within the school year.&nbsp;</p>
        <p>It is important for schools to use a variety of evidence to inform planning, including the examination of formative and summative assessments, to ensure their use of evidence/data is effective in identifying the strengths and challenges at all levels. Schools should prioritize high-impact strategies to promote ongoing growth, such as a focus on formative assessment and developing assessment capable learners. Schools could examine the links embedded below for information on balanced and formative assessment. It is recommended that teachers examine page 2 of the Formative Assessment link inserted below for information on the PDCA cycle and triangulation of data related to teaching practice.</p>
        <ul>
            <li><a target="_blank" href="https://collabe.nbed.nb.ca/res/ae/docs/Balanced%20Assessment%20Final%20doc%202014.pdf">Balanced Assessment</a> 
            <li><a target="_blank" href="https://collabe.nbed.nb.ca/res/sa/ela/docs/Formative%20Assessment.pdf">Formative Assessment</a>
        </ul>
        <p>The New Brunswick School Improvement Indicators Document with Explanatory Notes suggests the following guidelines for monitoring of initiatives within the PDCA cycle. When discussing routine monitoring it states,</p>
        <p>&ldquo;although the school improvement plan is reviewed at the beginning and end of the school year, it is imperative that the strategies are monitored on a regular basis. It is suggested that minor interventions are monitored every 2 weeks and major interventions every 4-6 weeks to gauge their effectiveness and progression toward school goals. &ldquo;</p>
        <p>Recognizing that each school will have distinct goals and initiatives, these monitoring guidelines are suggestions. What is imperative is that teams use the PDCA cycle to regularly monitor progress and take action when the data indicates that progress toward identified goals is not occurring.</p>
        <p>School teams are cautioned that there may be an implementation lag when enacting a new program or process. Schools should not abandon an initiative if the initial examination of evidence/data does not indicate growth, but continue to monitor progress and analyze evidence/data to ensure that the program or process is being implemented with fidelity and that it is showing the intended results once staff become familiar and adept with the process. If ongoing analysis of evidence/data indicates that there is little or no growth over two or more cycles of analysis, then school personnel should closely examine the evidence/data to determine if there are issues with the process, the clientele, or the implementation, and make the necessary adjustments.&nbsp;</p>
        <p>There are several key timeframes for activities within the PDCA. Sample cycles are provided as guidelines. The graphics inserted below delineate some of the suggested actions and recommended timeframes for activities.</p>
        <p>The first graphic outlines the PDCA cycle. The second provides some suggested timelines and activities that schools may use to help guide their self-assessment and planning processes.&nbsp;</p>
        <h3>Graphic 1: PDCA Cycle</h3>
        <img width="100%" src="./manifest/S2-PDCACycleGraphic.jpg" alt="PDCA Cycle Graphic">
        <h3>Graphic 2: PDCA Calendar</h3>
        <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/PDCA%20Calendar%20Graphic.pdf?Web=1">PDCA Calendar Graphic</a>
        <br>
        <br>
        <p><a href="#_ftnref6" name="_ftn6">[6]</a> Deming, W. Edwards (1986). <em>Out of the Crisis</em>. Cambridge, MA: Massachusetts Institute of Technology, Center for Advanced Engineering Study.</p>
        <p><a href="#_ftnref7" name="_ftn7">[7]</a> Blink, R. J. (2016). <em>Data-driven instructional leadership</em>. New York: Routledge.</p>`},{id:"item2",name:"Annual Cycle",selected:!1,content:F`<p>The first graphic on the previous page outlines the components of the PDCA cycle. The following are suggested major activities schools and districts could complete within the school year:</p>
        <ul>
        <li>An improvement committee to oversee the school improvement process is established, or the committee membership from the previous school year is reconfirmed.</li>
        <li>Schools use evidence/data (conversations, observations and products) to identify potential areas of focus.</li>
        <li>Schools may use the guiding questions for each of the four domains outlined in the indicator document to assess their performance, prioritize domains, and identify target areas for improvement.</li>
        <li>Schools determine areas of focus, identify goals and associated strategies and actions to address areas for improvement, and identify links to the district and provincial education plans.</li>
        <li>Information from progress monitoring is shared with students, school, staff, stakeholders and partners on an ongoing basis.</li>
        <li>Districts request updates on progress to monitor performance and help schools identify challenges and source needed supports.</li>
        <li>During the January SIP session, schools will assess their performance across any or all four domains as outlined in the improvement plan. During this process, School Improvement Planning Teams will participate in a &ldquo;deep dive&rdquo; using targeted data and evidence to identify progress toward identified goals. They will then author the Annual School Performance Report.</li>
        <li>The Annual School Performance Report will be shared with district personnel. These will identify school goals, progress toward these goals, and identified PL needs to promote ongoing improvement (see the template provided in <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Appendix F</a> for details).</li>
        <li>The process culminates in the generation and distribution of the Annual School Performance Report, noted above, and will inform the identification of long-term (yearly and multi-year) goals.</li>
        </ul>
        <p><strong>In order to ensure that the high-level data is shared from school, to districts and then to the province, and is used to inform long-term provincial planning and fiscal priorities, it is imperative that Annual School Performance Reports be completed during the January professional learning day which is focused on improvement planning</strong>. This school data, in aggregate, is shared with the districts, collated at the district level, and subsequently shared with the province on or before February 1<sup>st</sup>. District and department personnel will continue to collect additional evidence that informs implementation decisions and the allocation of supports.</p>`},{id:"item3",name:"Long-term Cycle (Multi-Year)",selected:!1,content:F`<p>Research has identified that schools improve when they use a collection of data/ evidence (demographic, perception, student learning and school process) derived from a variety of sources (conversations, observations and products) to inform their goal-setting and decision-making processes (Bryk, Gomez, Grunow and LeMahieu, 2015<a href="#_ftn8" name="_ftnref8">[8]</a>; Reeves, 2007<a href="#_ftn9" name="_ftnref9">[9]</a>; DuFour, Dufour and Eaker, 2005<a href="#_ftn10" name="_ftnref10">[10]</a>). The gathering and use of this evidence is a continuous process designed for the adoption of strategies to best meet changing student, school and systemic needs.</p>
        <p>Schools and districts may choose to adopt a one, two, three or four-year timeframe for long-term planning. A sample three-year planning cycle is provided in the table on the following page. It is recommended that the cycle be managed by each school and district to best address their particular needs and contexts. Because the Annual School Performance Report is used to inform systemic needs within a fixed budgetary process timeline, the self-assessment and reporting is slated to occur each January. Each school will be asked to identify long-term goals which will be supported by the strategies and actions outlined in the annual plan.&nbsp;</p>
        <p><strong>Sample Three Year Planning Table</strong></p>
        <p>If the framework is implemented over a three-year cycle, then the following actions could be undertaken each year:</p>
        <table>
        <tbody>
        <tr style="color: #ffffff;">
        <td style="background-color: #4472c4; text-align: center; vertical-align: middle;" width="33%"><strong>Year One</strong></td>
        <td style="background-color: #70ad47; text-align: center; vertical-align: middle;" width="33%"><strong>Year Two</strong></td>
        <td style="background-color: #aeaaaa; text-align: center; vertical-align: middle;" width="33%"><strong>Year Three</strong></td>
        </tr>
        <tr>
        <td style="background-color: #4472c455; vertical-align: top;" width="33%">
        <ul>
        <li>Complete system analysis based on data</li>
        <li>Goal-setting</li>
        <li>Identification of strategies and actions</li>
        <li>Implementation</li>
        <li>Ongoing monitoring</li>
        <li>Annual self-assessment</li>
        <li>Author and share Annual School Performance Report</li>
        <li>Identification of priorities, resources and professional learning needs for upcoming school year</li>
        </ul>
        </td>
        <td style="background-color: #70ad4755; vertical-align: top;" width="33%">
        <ul>
        <li>Complete system analysis based on data</li>
        <li>Goal-setting</li>
        <li>Identification of strategies and actions</li>
        <li>Implementation</li>
        <li>Ongoing monitoring</li>
        <li>Annual self-assessment</li>
        <li>Author and share Annual School Performance Report</li>
        <li>Identification of priorities, resources and professional learning needs for upcoming school year</li>
        </ul>
        </td>
        <td style="background-color: #aeaaaa55; vertical-align: top;" width="33%">
        <ul>
        <li>Complete system analysis based on data</li>
        <li>Goal-setting</li>
        <li>Identification of strategies and actions</li>
        <li>Implementation</li>
        <li>Ongoing monitoring</li>
        <li>Annual self-assessment</li>
        <li>Author and share Annual School Performance Report</li>
        <li>Revisit plan and progress toward long-term targets</li>
        <li>Identification of priorities, resources and professional learning needs for upcoming school year</li>
        </ul>
        </td>
        </tr>
        </tbody>
        </table>
        <p>&nbsp;</p>
        <p>Annual improvement plans should be agile, with adjustments to strategies and actions being made within the school year which are informed by the ongoing monitoring process (Breakspear, 2017)<a href="#_ftn11" name="_ftnref11">[11]</a>. Once a goal has been reached and a practice embedded, this strategy could become part of a work plan rather than a targeted improvement initiative. When walkthroughs and/or other evidence indicates a decline in effective practice or the need to revisit a strategy or action, it may then be reinserted into the plan as needed. For example, a school with an effective Response to Intervention (RTI) strategy may need to revisit PL in this area if there is a sufficient staff turnover to warrant additional training. In the case of a significant change in staff or student clientele, it may be necessary for an extensive revision of the short-term strategies and actions used by a school. For example, a sudden and pronounced influx of newcomers may necessitate that schools re-examine their priorities.</p>
        <p>At the end of each cycle, prior to authoring the Annual School Performance Report in January, each school should do a complete self-assessment using the indicator document as a guide to identify the preferred standard. Following is a brief overview of the purpose for the instrument as well as a primer on using the instrument to self-assess effectively.&nbsp;</p>
        <p><a href="#_ftnref8" name="_ftn8">[8]</a> Bryk, A. S., Gomez, L. M., Grunow, A., &amp; LeMahieu, P. G. (2015). <em>Learning to improve: How America's schools can get better at getting better</em>. Boston: Harvard Education Publishing.</p>
        <p><a href="#_ftnref9" name="_ftn9">[9]</a> Reeves, D. B. (2007). <em>Ahead of the curve: The power of assessment to transform teaching and learning. </em>Bloomington, IN: Solution Tree</p>
        <p><a href="#_ftnref10" name="_ftn10">[10]</a> DuFour, R., Eaker, R. E., &amp; DuFour, R. B. (2005). <em>On common ground: The power of professional learning communities. </em>Bloomington, Ind: National Educational Service.</p>
        <p><a href="#_ftnref11" name="_ftn11">[11]</a> Breakspear, S. (2017). Embracing Agile Leadership for Learning - how leaders can create impact despite growing complexity. <em>Australian Educational Leader</em>, 39, 3, 68-71.</p>`}],ye=[{id:"item1",name:"Cycles",selected:!0,content:F`<p>There are two cycles schools should consider when planning: the Plan, Do, Check, Act (PDCA) and annual/multi-year cycles.</p>
            <p>Long-term cycles can include annual and/or multi-year goals.</p>`,children:be}],we=[{id:"item1",name:"Overview and Purpose",selected:!1,content:F`<p>The indicator document is used at three different levels of the education system for different purposes.</p>
        <p>It is used as a means to identify the <em>highest standards of effective practice </em>for schools based on research.&nbsp;</p>
        <p>It is used as a means to identify the preferred standards for schools and makes links to our current provincial strategy document, the 10-year Education Plan.</p>
        <p>At the school level, the indicator document is to be used to promote effective self-assessment. The document can be used to assist schools in identifying strengths and potential areas of focus. Ultimately, and most importantly, it is a mechanism to assist schools to identify and adopt practices which will help improve academic, behavioural, and social-emotional outcomes for students.</p>
        <p>At the district level, it is used to help determine areas where schools are focusing their energies, and can be used to identify areas where additional resourcing or PL support may be needed.</p>
        <p>At the provincial level, it is used as a vehicle to help understand and inform how well we are doing systemically; the challenges that schools and districts are working to address; and, budgetary processes to allow for effective long-term planning, including informing allocation of resources and PL planning.&nbsp;</p>
        <p>The results from the Annual School Performance Reports will be collated at the district level and shared with the department at a high level. No school-specific identifying information will be shared. Results will be used to help determine progress toward the objectives outlined in the 10-year Education Plan.&nbsp;</p>
        <p>It is important to reiterate that an annual review of the framework and indicator documents, based on current research, will be conducted to ensure ongoing alignment with changing systemic needs. These annual reviews will include input from each of the districts, and will include representation from each of the district staffs, school-based administrative teams and teachers.</p>`},{id:"item2",name:"Self-Assessment Process in Brief",selected:!1,content:F`<p>To ensure understanding at all levels we have broken down the self-assessment process into seven steps. The School Improvement Planning &ldquo;SIP Self-Assessment Process Infographic&rdquo; outlines the seven steps. If school personnel feel they want to examine the process in its entirety they can go to the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/_layouts/15/start.aspx#/">School Self-Assessment Module</a>.</p>
        <p>A general overview of the self-assessment process as follows. Prior to authoring the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Annual School Performance Report</a>, schools will use the indicator document to self-assess.</p>
        <p><u>If a school is in the first year of the improvement planning process</u>, they should examine the indicator document in its entirety to determine priority domains and areas of focus. Each domain includes guiding questions to assist schools to effectively identify target domains and potential areas for growth.&nbsp;</p>
        <p>Other data should be examined to support analysis. This could include:</p>
        <ul>
        <li>Assessment results (formative and summative).</li>
        <li>Teacher Perception Survey Data results.&nbsp;</li>
        <li>Our School data.</li>
        <li>Previous Improvement Plan/PLWEP documents.</li>
        <li>Student profiles.</li>
        <li>Behaviour tracking data.</li>
        <li>PLP analysis.</li>
        <li>Lesson plans.</li>
        <li>Team minutes.</li>
        <li>Teacher/team growth plans.</li>
        <li>Technology plan.</li>
        <li>Website analysis.</li>
        <li>Data dashboards.</li>
        </ul>
        <p>Please note data dashboards or e-binders may be used to assist schools to effectively organize and assess data. When used effectively, data dashboards can help schools be proactive by identifying potential problems and offering interventions before they affect student achievement. In some cases, the introduction of data dashboards and their associated reports helped facilitate schools&rsquo; shift to comprehensive data analysis and continuous school improvement. Suggestions for the effective gathering and use of data/evidence are shared in the following section.</p>
        <p>Once target areas for growth are identified, the Improvement Team may follow the recommended steps outlined on page 8 which include, but are not limited to:&nbsp;</p>
        <ul>
        <li>Analyzing and assessing evidence to determine areas of focus.</li>
        <li>Developing targeted goals for each area of focus.</li>
        <li>Establishing actionable strategies based on evidence/data.</li>
        <li>Communicating the plan.</li>
        <li>Implementing actions.</li>
        <li>Monitoring progress on an ongoing basis.</li>
        <li>Adjusting strategies and actions as needed.</li>
        </ul>
        <p><u>If school teams are using the document to determine progress toward previously identified goals</u>, (for example, they are in the second year of a two-year plan) they can be more targeted in their approach. In these cases, school teams may choose to focus on specific domains and indicators, and the associated measures already delineated in their current improvement plan to identify progress toward specific goals. This information should be analyzed along with a diversity of supporting data/evidence and can be used to provide content for the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Annual School Performance Report</a>. Regardless of where a school is in the process, a focus on using a variety of data/evidence to ensure an effective self-assessment occurs is recommended.</p>`}],Se=[{id:"item1",name:"Conversations, Observations and Products",selected:!1,content:F`<p>We have noted that multiple measures help to provide a clearer picture of how a school is performing. The variety of data/evidence must be collected and analyzed on a regular basis. The key to the collection of the data/evidence is determining how the information relates to school improvement and improved student outcomes.&nbsp;</p>
        <p>Blink notes that, &ldquo;the most important things to remember about the collection of data is that someone needs to be in charge&rdquo; (2016, p.18). In the absence of a responsible individual or team skilled in the use and application of data/evidence, schools should source support and/or PL opportunities to assist with gathering, analysis and application of data to build capacity. Further, every person involved in the collection and use of data should understand what they are responsible for and their role in the improvement process.&nbsp;</p>
        <p>DuFour et al, (2005) and Reeves (2009)<a href="#_ftn12" name="_ftnref12">[12]</a> have both been noted as identifying the problem of being &ldquo;data rich and information poor.&rdquo; All data/evidence should serve a specific purpose. If you are taking pains to collect the data/evidence, then you should work to analyze and act on the results. If you are not acting on the data/evidence, then it is likely that it was not worth collecting.</p>
        <p>If school leaders are unsure about their proficiency with data/evidence, it is recommended that they source district support. District personnel could work with school leaders and teams to examine the following factors and provide support where deemed appropriate:</p>
        <ul>
        <li>Team readiness.</li>
        <li>Identifying data/evidence sources.</li>
        <li>Analysis of evidence.</li>
        <li>Making hypotheses and identifying issues.</li>
        <li>Prioritizing and setting improvement goals.</li>
        <li>Designing objectives and strategies.</li>
        <li>Progress monitoring and evaluation.</li>
        <li>Implementation: making a commitment and planning for &ldquo;roll out&rdquo; (Blink, 2016, p. 26).</li>
        </ul>
        <p>If teams are unsure whether they are effectively using evidence informed decision making, then they should examine whether data/evidence is effectively translating into changes in practice at the school and classroom levels.&nbsp;</p>
        <p>Finally, it is important when using data/evidence to ensure that the team identifies a Present Level of Performance (PLOP). This provides a baseline so teams are able to accurately identify whether they are making progress toward identified goals. The easiest ways to effectively establish a PLOP and monitor progress is to identify baseline measures when first implementing a strategy or when establishing a goal. The essence of creating effective goals and effectively monitoring progress is that it allows teams to not only plan and implement actions strategically but also promotes the importance of close monitoring to ensure teams are moving in the right direction towards achieving the desired results. The cycle for monitoring progress should occur on a regular and ongoing basis throughout the school year.&nbsp;</p>
        <p><a href="#_ftnref12" name="_ftn12">[12]</a> Reeves, D. B. (2009). <em>Assessing educational leaders: Evaluating performance for improved individual and organizational results</em>. Thousand Oaks, Calif: Corwin Press.</p>`}],xe=[{id:"item1",name:"The Self-Assessment Instrument: Indicator Document with Explanatory Notes",selected:!0,content:F`<p>The self-assessment instrument to be used at the school level is the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Improvement%20Indicators%20with%20Explanatory%20Notes%20March%2021%2C%202019.docx?Web=1">New Brunswick Indicator Document with Explanatory Notes</a>, supplemented by the <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/Inclusion%20Look-fors%20June%2011%2C%202019.docx?Web=1">Inclusion Look-For</a> document.</p>`,children:we},{id:"item2",name:"Data/Evidence",selected:!1,content:F`<p>Different schools&rsquo; teams have different levels of proficiency when gathering and analyzing data. If a school leader is new to a school or position, or there is a large change in the makeup of the improvement team, schools should re-examine their proficiency with data and evidence. In it&rsquo;s simplest, data is anything that is quantifiable. Evidence can be considered more subjective, for example, conversations and observations. Once evidence is quantified, it can often be considered data.</p>
        <p>Blink suggests the following guiding questions be used when a school chooses to examine data:</p>
        <ol>
        <li>How and when should data be gathered?</li>
        <li>What data should be included?</li>
        <li>How does using data to drive instructional decisions affect programming?</li>
        <li>How does using data to drive instructional decisions affect staffing?</li>
        <li>How do we find time (school or District provided) for teachers and administrators to evaluate and analyze the data that they have?</li>
        <li>How does using data to drive instructional decisions affect professional learning?</li>
        <li>How does using data to drive instructional decisions affect goal setting? (Blink, 2016, p.1)</li>
        </ol>`,children:Se},{id:"item3",name:"Annual School Performance Report",selected:!1,content:F`<p>Although it has already been mentioned several times throughout this document, the importance of the Annual School Performance Report must be highlighted.&nbsp;</p>
        <ul>
        <li>The Annual School Performance Report is a high-level document that schools would submit to the district in January of each year (See <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1">Appendix F</a>).</li>
        <li>This report will identify overarching school goals and indicate progress toward these goals.</li>
        <li>District will collate this data and author a similar high-level report to be shared with provincial representatives.</li>
        <li>This is a mechanism by which schools and districts will be able to measure progress.</li>
        <li>Most importantly the Annual School Performance Report will allow for the transfer of information from schools, to districts and then to the province. This information will be used to:
        <ul>
        <li>set ongoing provincial priorities,</li>
        <li>inform resource allocation, and inform PL planning.</li>
        </ul>
        </li>
        </ul>`}],Pe=[{id:"item1",name:"Appendices and Templates",selected:!0,content:F`<p>Several Templates are provided to assist schools in monitoring progress. Schools can choose to use these verbatim, modify them, or discard them if they feel they have a more efficient and effective template. The following is a list of the policy content and templates provided in the appendices:</p>
        <p><a href="${"./manifest/"}Appendix-A.pdf" target="_blank"><strong>Appendix A</strong>: 10-year Plan Cluster of Objectives</a></p>
        <p><a href="${"./manifest/"}Appendix-B.pdf" target="_blank"><strong>Appendix B</strong>: Combined SIP/PLWEP, Relevant Legislation</a></p>
        <p><a href="${"./manifest/"}Appendix-C.pdf" target="_blank"><strong>Appendix C</strong>: Sample Improvement Planning Template</a></p>
        <p><a href="${"./manifest/"}Appendix-D.pdf" target="_blank"><strong>Appendix D</strong>: PDCA Template</a></p>
        <p><a href="${"./manifest/"}Appendix-E.pdf" target="_blank"><strong>Appendix E</strong>: Meeting Minute Template</a></p>
        <p><a href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Performance%20Report%20July%2031%2C%202019.docx?Web=1" target="_blank"><strong>Appendix F</strong>: Annual School Performance Report Template</a></p>
        <p><a href="${"./manifest/"}Appendix-G.pdf" target="_blank"><strong>Appendix G</strong>: Policy associated with improvement planning</a></p>
        <p><a href="${"./manifest/"}Appendix-H.pdf" target="_blank"><strong>Appendix H</strong>: Consultations</a></p>
        <p><a href="${"./manifest/"}Appendix-I.pdf" target="_blank"><strong>Appendix I</strong>:  Acronyms</a></p>`}];i.d(t,"MainElement",function(){return _e});class _e extends le{constructor(){super()}scrollToMe(e){const t=this.shadowRoot.getElementById(e.substr(1));t&&t.scrollIntoView()}onChangeTheme(){console.log("isLightTheme: "+ce),he(ce?"dark":"light"),window.location.reload()}static get styles(){return[ue,ae`
		.overview {
			padding: 8px;
		}

		/* move up so the anchor + menu is above the content */
		.anchor-ref {
			position: relative; 
			top: -50px;
		}`]}render(){return F`
		<head>
			<title>NB School Improvement Indicators</title>
			<meta name="viewport" http-equiv="Content-Type" content="text/html; charset=UTF-8 width=device-width,initial-scale=1.0"/>
			<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
		</head>

		<body>

			<menu-section
				@change-theme="${e=>{this.onChangeTheme()}}"></menu-section>

			<a id="anchor_section0" class="anchor-ref"></a>
			<title-page></title-page>

			<a id="anchor_section1" class="anchor-ref"></a>
			<domain-section color="var(--s1-color)" colorFaded="var(--s1-color-faded)" .tabList="${ve}">
				<span slot="header">Section I: Framework Overview</span>

				<div slot="overview">
					<h4>Framework Overview</h4>
					<p>Section I provides a framework overview including an overview of the improvement planning process. This section also includes information identifying the legislated roles and responsibilities of each individual and group stakeholder. These include: School Principal/School Administrative Team, School Improvement Committee, School Personnel, Stakeholders and Partners, District School Liaisons, Critical Friends, the Superintendent, and the District Education Council (DEC). </p>
				
					<div class="overview">
						<em>Overview</em>
						<accordian-section color="#dddddd" .list="${fe}"></accordian-section>
					</div>
				</div>
			</domain-section>

			<a id="anchor_section2" class="anchor-ref"></a>
			<domain-section color="var(--s2-color)" colorFaded="var(--s2-color-faded)" .tabList="${ye}">
				<span slot="header">Section II: Cycles</span>

				<div slot="overview">
					<h4>Cycles</h4>
					<p>Section II identifies the short- and long-term planning and monitoring cycles, including some content and diagrams suggesting content and processes to support effective planning, implementation, and monitoring (PDCA).</p>
				</div>
			</domain-section>

			<a id="anchor_section3" class="anchor-ref"></a>
			<domain-section color="var(--s3-color)" colorFaded="var(--s3-color-faded)" .tabList="${xe}">
				<span slot="header">Section III: Self-Assessment Instrument</span>

				<div slot="overview">
					<h4>Self-Assessment Instrument</h4>
					<p>Section III identifies the process for self-assessment, including the overview and purpose, and the Self-Assessment Process in Brief, including a discussion around the self-assessment instruments and associated documents (<a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Improvement%20Indicators%20only%20document%20August%2027%2C%202019.docx?Web=1">Indicator Document</a>, <a target="_blank" href=" https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/School%20Improvement%20Indicators%20with%20Explanatory%20Notes%20March%2021%2C%202019.docx?Web=1">Explanatory Notes Document</a>, <a target="_blank" href="https://collabe.nbed.nb.ca/sites/10year/nbsip/Shared%20Documents/2.%20Provincial%20Improvement%20Framework%20and%20Associated%20Documents/School%20Self-assessment%20Documents/Inclusion%20Look-fors%20June%2011%2C%202019.docx?Web=1">Inclusion Look-For</a>).  This section also provides a link to the online tiered document which combines all self-assessment documents into a user-friendly drop-down document.  
					This section also includes suggestions for the effective use of data/evidence, including information on the triangulation of data (conversations, observations and products).  An explanation of the intent and utility of the Annual School Performance Report is provided at the end of this section. 
					</p>
				</div>
			</domain-section>

			<a id="anchor_section4" class="anchor-ref"></a>
			<domain-section color="var(--s4-color)" colorFaded="var(--s4-color-faded)" .tabList="${Pe}">
				<span slot="header">Section IV: Appendices and Templates</span>

				<div slot="overview">
					<h4>Appendices and Templates</h4>
					<p>Section IV provides a list of appendices and templates, which can be used in whole or in part to support schools to self-assess, plan, and monitor.  This section also includes an outline of the policies associated with improvement planning and a list of acronyms for user reference.</p>
				</div>
			</domain-section>
		</body>
		`}}customElements.define("main-element",_e)}]);