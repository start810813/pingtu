export const render=(e,t,o="beforeend")=>{e&&t&&o&&e.insertAdjacentElement(o,t)};export const showWhile=e=>{const t=document.querySelector("#"+e);fadeIn(t),window.setTimeout((()=>{fadeOut(t)}),1500)};export const fadeIn=e=>{e.classList.remove("hide"),e.style.opacity=0;let t=+new Date;const o=()=>{e.style.opacity=+e.style.opacity+(new Date-t)/100,t=+new Date,+e.style.opacity<1?window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,1):e.style.opacity=1};o()};export const fadeOut=e=>{e.style.opacity=1;let t=+new Date;const o=()=>{e.style.opacity=+e.style.opacity-(new Date-t)/100,t=+new Date,+e.style.opacity>0?window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,1):(e.style.opacity=0,e.classList.add("hide"))};o()};export const getBase64=e=>new Promise((t=>{const o=new FileReader;o.onload=e=>{t(e.target.result)},o.readAsDataURL(e)}));