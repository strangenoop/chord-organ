(this["webpackJsonpchord-organ"]=this["webpackJsonpchord-organ"]||[]).push([[0],{11:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(2),o=t.n(r),d=(t(11),t(4)),f=t(5),i=function(e){var n=e.freqs;return c.a.createElement(c.a.Fragment,null,n.map((function(e){return c.a.createElement(u,{freq:e})})))},u=function(e){var n=e.freq,t=e.waveform,r=void 0===t?"sine":t,o=e.detune,d=void 0===o?0:o;return Object(a.useEffect)((function(){var e=l.createOscillator();return e.connect(g),e.type=r,e.frequency.value=n,e.detune.value=d,e.start(),function(){e.stop()}})),c.a.createElement("div",null,n.toFixed(2))},l=new AudioContext,g=l.createGain();g.connect(l.destination);var s=t(3),v=Math.pow(2,1/12),m=function(e){return 440*Math.pow(v,e)},w=function(e,n){return[{c:0,cc:0,d:0,dd:0,e:0,f:0,ff:0,g:0,gg:0,a:m(-36),aa:m(-35),b:m(-34)},{c:m(-33),cc:m(-32),d:m(-31),dd:m(-30),e:m(-29),f:m(-28),ff:m(-27),g:m(-26),gg:m(-25),a:m(-24),aa:m(-23),b:m(-22)},{c:m(-21),cc:m(-20),d:m(-19),dd:m(-18),e:m(-17),f:m(-16),ff:m(-15),g:m(-14),gg:m(-13),a:m(-12),aa:m(-11),b:m(-10)},{c:m(-9),cc:m(-8),d:m(-7),dd:m(-6),e:m(-5),f:m(-4),ff:m(-3),g:m(-2),gg:m(-1),a:m(0),aa:m(1),b:m(2)},{c:m(3),cc:m(4),d:m(5),dd:m(6),e:m(6),f:m(8),ff:m(9),g:m(10),gg:m(11),a:m(12),aa:m(13),b:m(14)},{c:m(15),cc:m(16),d:m(17),dd:m(18),e:m(19),f:m(20),ff:m(21),g:m(22),gg:m(23),a:m(24),aa:m(25),b:m(26)},{c:m(27),cc:m(28),d:m(29),dd:m(30),e:m(31),f:m(32),ff:m(33),g:m(34),gg:m(35),a:m(36),aa:m(37),b:m(38)},{c:m(39),cc:0,d:0,dd:0,e:0,f:0,ff:0,g:0,gg:0,a:0,aa:0,b:0}][e][n]},b=function(){var e=Object(a.useState)(new Set),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(e){var n=e.key;t.has(n)||r((function(e){return new Set(e).add(n)}))},n=function(e){var n=e.key;r((function(e){var t=new Set(e);return t.delete(n),t}))};return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,t),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement(i,{freqs:Object(s.compact)(Object(d.a)(t).map(E))})))},E=function(e){return p[e]||null},p={a:w(4,"c"),s:w(4,"d"),d:w(4,"e"),f:w(4,"f"),g:w(4,"g"),h:w(4,"a"),j:w(4,"b"),k:w(5,"c"),l:w(5,"d"),";":w(5,"e")},h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,n,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.affb0782.chunk.js.map