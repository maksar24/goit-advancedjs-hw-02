import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-651d7991.js";const t={dater:document.getElementById("datetime-picker"),btnStart:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},h=new Date().getTime();let a=0,s=null;t.btnStart.disabled=!0;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0].getTime(),a<=h?m.show({title:"Alert",message:"Please choose a date in the future",theme:"light",color:"#5aad5e"}):t.btnStart.disabled=!1}};function y(e){const d=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:i,seconds:u}}function o(e){return e.toString().padStart(2,"0")}function S(){t.btnStart.disabled=!0;const e=setInterval(()=>{const r=new Date().getTime();let n=y(a-r);t.days.textContent=o(n.days),t.hours.textContent=o(n.hours),t.minutes.textContent=o(n.minutes),t.seconds.textContent=o(n.seconds),a<=r&&(t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00",clearInterval(s))},0);s=setInterval(e,1e3)}l(t.dater,f);t.btnStart.addEventListener("click",S);
//# sourceMappingURL=commonHelpers2.js.map
