import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const n=document.querySelector("body"),e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");t.setAttribute("disabled","");e.addEventListener("click",o);t.addEventListener("click",a);let r=null;function o(){r=setInterval(()=>{n.style.backgroundColor=`${d()}`},1e3),e.setAttribute("disabled",""),t.removeAttribute("disabled")}function a(){clearInterval(r),t.setAttribute("disabled",""),e.removeAttribute("disabled")}function d(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map
