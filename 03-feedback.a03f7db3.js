!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=a.test(e);return f||u.test(e)?l(e.slice(2),f?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,l,f,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function S(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){var n=e-f,i=e-c;return void 0===f||n>=t||n<0||d&&i>=a}function j(){var e,n,i,o=g();if(h(o))return O(o);l=setTimeout(j,(e=o-f,n=o-c,i=t-e,d?v(i,a-n):i))}function O(e){return(l=void 0,b&&o)?S(e):(o=r=void 0,u)}function T(){var e,n=g(),i=h(n);if(o=arguments,r=this,f=n,i){if(void 0===l)return c=e=f,l=setTimeout(j,t),s?S(e):u;if(d)return l=setTimeout(j,t),S(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:O(g())},T}(e,t,{leading:o,maxWait:t,trailing:r})},document.addEventListener("DOMContentLoaded",function(){var e;let n=document.querySelector(".feedback-form"),i=document.querySelector('input[name="email"]'),o=document.querySelector('textarea[name="message"]'),r="feedback-form-state",a=JSON.parse(localStorage.getItem(r));a&&(i.value=formState.email,o.value=formState.message),console.log(localStorage);let u=((e=t)&&e.__esModule?e.default:e)(function(){let e={email:i.value,message:o.value};localStorage.setItem(r,JSON.stringify(e))},500);i.addEventListener("input",u),o.addEventListener("textarea",u),n.addEventListener("submit",function(e){if(e.preventDefault(),""===i.value.trim()||""===o.value.trim()){alert("Form can not be submitted with empty fields!");return}console.log({email:i.value,message:o.value}),localStorage.removeItem(r),i.value="",o.value=""})})}();
//# sourceMappingURL=03-feedback.a03f7db3.js.map