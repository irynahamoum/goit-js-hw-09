import"./assets/modulepreload-polyfill-3cfb730f.js";const l="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("input",()=>{const e=t.elements.email.value,a=t.elements.message.value;o(l,{email:e,message:a})});t.addEventListener("submit",e=>{const a=t.elements.email.value,s=t.elements.message.value;a===""||s===""?(alert("Please fill in all the fields"),e.preventDefault()):(n(l),localStorage.removeItem(l),t.reset())});function o(e,a){const s=JSON.stringify(a);localStorage.setItem(e,s)}function n(e="empty"){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}function m(){const e=n(l)||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}m();
//# sourceMappingURL=commonHelpers2.js.map
