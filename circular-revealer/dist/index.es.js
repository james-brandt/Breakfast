var e=function(e){return e/2},t=function(t,n,o){return"string"==typeof n?function(t,n){var o=document.querySelector(t),r=document.querySelector(n);if(!o)throw new Error("Element with selector "+t+" have not been founded");if(!r)throw new Error("Element with selector "+n+" have not been founded");var i=o.getBoundingClientRect(),u=i.left,l=i.top,c=r.getBoundingClientRect(),a=c.left,d=c.top,f=c.width,h=c.height;return{x:a-u+e(f)+"px",y:d-l+e(h)+"px"}}(t,n):"string"==typeof(null==o?void 0:o.x)&&"string"==typeof(null==o?void 0:o.y)?o:function(t){var n=document.querySelector(t);if(!n)throw new Error("Element with selector "+t+" have not been founded");var o=n.getBoundingClientRect(),r=o.left,i=o.top,u=o.width,l=o.height;return{x:r+e(u)+"px",y:i+e(l)+"px"}}(t)};export default function(e){var n=e.revealElementSelector,o=e.options,r=document.querySelector(n),i=!1,u=null,l=0,c=l,a=t(n,null==o?void 0:o.anchorSelector,null==o?void 0:o.position),d=function(){r.style.clipPath="circle("+c+"px at "+a.x+" "+a.y+")"},f=function(){c+=.08*(l-c)},h=function(){cancelAnimationFrame(u),u=null},v=function(){c=l,d(),h()},p=function(){f();var e=c-l>-2;i||h(),e?v():(d(),u=requestAnimationFrame(p))},w=function(){f();var e=Math.abs(c-l)<2;i&&h(),e?v():(d(),u=requestAnimationFrame(w))};return d(),r.setAttribute("data-active","true"),{isRevealed:function(){return i},reveal:function(){i||(a=t(n,null==o?void 0:o.anchorSelector,null==o?void 0:o.position),l=function(e){var t=window.innerHeight,n=window.innerWidth;if("string"==typeof e){var o=document.querySelector(e).getBoundingClientRect(),r=o.width;t=o.height,n=r}return Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}(n),p(),i=!0)},hide:function(){i&&(l=0,w(),i=!1)}}}