import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as d,i as c}from"./assets/vendor-651d7991.js";let r=null;const n={input:document.querySelector("input"),button:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};n.button.setAttribute("disabled","");n.button.addEventListener("click",f);const t={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<t.defaultDate?c.error({message:"Please choose a date in the future",position:"topRight"}):(t.differenceTime=e[0]-t.defaultDate,n.button.removeAttribute("disabled"))}};d(n.input,t);function f(){r=setInterval(()=>{let e=t.differenceTime=`${t.differenceTime-1e3}`;e<1e3&&clearInterval(r),t.differanceObj=l(e),n.days.textContent=o(t.differanceObj.days),n.hours.textContent=o(t.differanceObj.hours),n.minutes.textContent=o(t.differanceObj.minutes),n.seconds.textContent=o(t.differanceObj.seconds)},1e3),n.button.setAttribute("disabled","")}function l(e){const a=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),s=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:u,minutes:s,seconds:i}}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map
