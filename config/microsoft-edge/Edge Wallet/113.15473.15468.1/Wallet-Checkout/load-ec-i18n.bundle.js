(()=>{"use strict";const e=e=>{const t=e??"";switch(t){case"en-au":case"en-AU":return"en-GB";case"zh-TW":return"zh-Hant";case"zh-CN":return"zh-Hans"}const s=t.split("-")?.[0];switch(s){case"pt":return"pt-PT";case"zh":return"zh-Hans";default:return`${s}`}};window.loadXpayECI18n=function(t,s){const n=e=>import(`./json/i18n-ec/${e}/strings.json`,{assert:{type:"json"}}),a=e=>import(`./json/i18n-shared-components/${e}/strings.json`,{assert:{type:"json"}}),r=t=>n(t).catch((()=>n(e(t)))).catch((()=>{Promise.resolve({})})),o=t=>a(t).catch((()=>a(e(t)))).catch((()=>{Promise.resolve({})}));return async()=>{const e=window.loadTimeData?.data_?.locale||navigator.language;return"en-US"===(t=e)||"en-us"===t||"en"===t?Promise.resolve():Promise.all([r(e),o(e)]).then((e=>{const t=e[0],s=e[1];let n;if(!n){const{loadTimeData:e}=window;n=e}t&&t.default&&n.overrideValues(t.default),s&&s.default&&n.overrideValues(s.default)}));var t}}()})();