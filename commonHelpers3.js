import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as m}from"./assets/vendor-651d7991.js";const l=document.querySelector("form");l.addEventListener("submit",u);function u(i){i.preventDefault();let o=Number(i.target.delay.value),r=Number(i.target.step.value),e=Number(i.target.amount.value);n(1,o),a(e,r,o)}function n(i,o){new Promise((e,t)=>{const s=Math.random()>.3;setTimeout(()=>{s?e({position:i,delay:o}):t({position:i,delay:o})},o)}).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`),m.success({title:"OK",message:`✅ Fulfilled promise ${e} in ${t}ms`,position:"bottomCenter"})}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`),m.error({title:"Error",message:`❌ Rejected promise ${e} in ${t}ms`,position:"bottomCenter"})})}function a(i,o,r){let e=2,t=r+o;for(let s=1;s<i;s+=1)setTimeout(()=>{n(e,t),e+=1,t+=o},o)}
//# sourceMappingURL=commonHelpers3.js.map
