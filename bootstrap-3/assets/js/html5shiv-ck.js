/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/(function(e,t){function n(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[c]];t||(t={},h++,e[c]=h,p[h]=t);return t}function i(e,n,i){n||(n=t);if(d)return n.createElement(e);i||(i=r(n));n=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e);return n.canHaveChildren&&!a.test(e)?i.frag.appendChild(n):n}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag());e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(v,t.frag)}function o(e){e||(e=t);var n=r(e);if(v.shivCSS&&!l&&!n.hasCSS){var i,o=e;i=o.createElement("p");o=o.getElementsByTagName("head")[0]||o.documentElement;i.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";i=o.insertBefore(i.lastChild,o.firstChild);n.hasCSS=!!i}d||s(e,n);return e}var u=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,l,c="_html5shiv",h=0,p={},d;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";l="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();n="undefined"==typeof r.cloneNode||"undefined"==typeof r.createDocumentFragment||"undefined"==typeof r.createElement}d=n}catch(i){d=l=!0}})();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==u.shivCSS,supportsUnknownElements:d,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:o,createElement:i,createDocumentFragment:function(e,i){e||(e=t);if(d)return e.createDocumentFragment();for(var i=i||r(e),s=i.frag.cloneNode(),o=0,u=n(),a=u.length;o<a;o++)s.createElement(u[o]);return s}};e.html5=v;o(t)})(this,document);