import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",a=document.querySelector(".feedback-form");a.querySelector(".textarea");a.addEventListener("input",()=>{const e=a.elements.email.value,t=a.elements.message.value;r(s,{name:e,message:t})});a.addEventListener("submit",e=>{e.preventDefault();const t=n(s)||{};console.log(t),localStorage.removeItem(s),a.reset()});function r(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function n(e="empty"){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function l(){const e=n(s)||{};a.elements.email.value=e.email||"",a.elements.message.value=e.message||""}l();
//# sourceMappingURL=commonHelpers2.js.map
