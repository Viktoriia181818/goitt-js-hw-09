var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequireaca4;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequireaca4=r);var i=r("iQIUW");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault()}));let a=Number(e.target.delay.value),l=Number(e.target.step.value),u=Number(e.target.amount.value);function s(e,t){const o=Math.random()>.3,n={position:e,delay:t};return new Promise(((e,t)=>{o&&e(n),t(n)}))}for(let e=1;e<=u;e+=1)s(2,1500).then((({position:e,delay:t})=>{setTimeout((()=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{useIcon:!1})}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{useIcon:!1})}),t)})),a+=l;
//# sourceMappingURL=03-promises.5ccdc633.js.map
