(this["webpackJsonpspace-invaders"]=this["webpackJsonpspace-invaders"]||[]).push([[0],{17:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s,i=a(1),n=a.n(i),o=a(8),r=a.n(o),c=(a(17),a(3)),l=a.n(c),h=a(7),u=a(4),d=a(9),m=a(0),p=function(e){var t=e.videoId;return Object(m.jsx)(d.a,{id:"videoPlayer",className:"row-span-2",videoId:t,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})},f=a(12),g=function(){return Object(m.jsxs)("div",{id:"top",className:"px-10",children:[Object(m.jsxs)("p",{className:"sticky text-6xl",children:["VIDEO",Object(m.jsx)("span",{className:"text-indigo-700 font-bold",children:"gallery"})]}),Object(m.jsx)("h1",{className:"font-light text-indigo-500 ",children:"Get exclusive playlist videos"})]})},b=function(e){var t=e.video,a=e.onChange;return console.log(t),Object(m.jsxs)("div",{className:"flex mt-4 mx-w-auto  rounded-xl shadow-md space-x-4 sm:flex-none",onClick:function(){a(t.snippet.resourceId.videoId,"".concat(t.snippet.title),t.snippet.description),document.getElementById("top").scrollIntoView({behavior:"smooth"})},children:[Object(m.jsx)("img",{className:"h-40 w-40",src:"".concat(t.snippet.thumbnails.high.url),alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"relative mx-w-auto w-full text-xl text-indigo-700 font-medium",children:"".concat(t.snippet.title)}),Object(m.jsx)("p",{className:"text-gray-500",children:"".concat(t.snippet.publishedAt)})]})]})},j=function(e){var t=e.set,a=e.onChange;try{s=t.items.map((function(e){return Object(m.jsx)(b,{video:e,onChange:a})}))}catch(i){}return Object(m.jsx)("div",{id:"videos",className:"flex-none float-right items-center h-full overflow-y-scroll",children:s})},x=function(e){var t=e.videoName,a=e.videoDescription;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"text-xl font-medium text-indigo-700 mt-4",children:t}),Object(m.jsx)("p",{className:"text-gray-500 mt-2 font-light",children:a})]})},v=function(){return Object(m.jsxs)("div",{className:"bg-purple-700 w-full px-10 py-20",children:[Object(m.jsxs)("p",{className:"text-xl text-white",children:["VIDEO",Object(m.jsx)("span",{className:" font-bold",children:"gallery"})]}),Object(m.jsx)("p",{className:"text-gray-100 mt-2 font-light leading-4 text-xl",children:"Get the official YouTube app on Android phones and tablets. See what the world is watching -- from the hottest music videos to what\u2019s popular in gaming, fashion, beauty, news, learning and more. Subscribe to channels you love, create content of your own, share with friends, and watch on any device."}),Object(m.jsx)("p",{className:"text-center text-white mt-4",children:"\xa9 2021 ISHIMWE Bernard"}),Object(m.jsx)("p",{className:"text-center text-indigo-100",children:"All rights reserved"})]})};a.n(f).a.config();var w;var N=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),a=(t[0],t[1]),s=Object(i.useState)("nQWFzMvCfLE"),n=Object(u.a)(s,2),o=n[0],r=n[1],c=Object(i.useState)("What a beautiful Name Hillsong"),d=Object(u.a)(c,2),f=d[0],b=d[1],N=Object(i.useState)("\"What A Beautiful Name\" from the album 'let there be light'' recorded live at \u202aHillsong Conference in Sydney, 2016. ** Scriptural Inspiration Behind the Lyrics** https://goo.gl/N5M5Qh ** Song Story From Brooke Ligertwood** https://goo.gl/OqOJxU **Subscribe to our YouTube channel** http://smarturl.it/HillsongWorshipSub Click here to listen to the latest from Hillsong Worship: https://hillsong.lnk.to/ytplaylist Stay connected: Instagram: https://instagram.com/hillsongworship Facebook: https://facebook.com/hillsongworship Twitter: https://twitter.com/hillsongworship Website: https://hillsong.com/worship What A Beautiful Name Words and Music by Ben Fielding & Brooke Ligertwood \xa9 2016 Hillsong Music Publishing. CCLI: 7068424 VERSE 1: You were the Word at the beginning One with God the Lord Most High Your hidden glory in creation Now revealed in You our Christ CHORUS 1: What a beautiful Name it is What a beautiful Name it is The Name of Jesus Christ my King What a beautiful Name it is Nothing compares to this What a beautiful Name it is The Name of Jesus VERSE 2: You didn\u2019t want heaven without us So Jesus You brought heaven down My sin was great Your love was greater What could separate us now CHORUS 2: What a wonderful Name it is What a wonderful Name it is The Name of Jesus Christ my King What a wonderful Name it is Nothing compares to this What a wonderful Name it is The Name of Jesus What a wonderful Name it is The Name of Jesus BRIDGE: Death could not hold You The veil tore before You You silence the boast of sin and grave The heavens are roaring The praise of Your glory For You are raised to life again You have no rival You have no equal Now and forever God You reign Yours is the kingdom Yours is the glory Yours is the Name above all names CHORUS 3: What a powerful Name it is What a powerful Name it is The Name of Jesus Christ my King What a powerful Name it is Nothing can stand against What a powerful Name it is The Name of Jesus TAGS: What a powerful Name it is The Name of Jesus What a powerful Name it is The Name of Jesus #whatabeautifulname #hillsongworship #lettherebelight"),O=Object(u.a)(N,2),y=O[0],W=O[1];Object(i.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.googleapis.com/youtube/v3/playlistItems","?part=snippet&maxResults=50&playlistId=PLWvahZRxLnLPV5ECCHvmLuus6Tjmv4Oir&key=").concat("AIzaSyDHjgtIu26QSntcZlK82n-peSErLcDNK5U"));case 2:return t=e.sent,e.next=5,t.json();case 5:return w=e.sent,e.abrupt("return",w.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e,t){b(e),W(t)};return Object(m.jsxs)("div",{className:"w-full max-w-full",children:[Object(m.jsx)(g,{className:"header"}),Object(m.jsxs)("div",{id:"app",className:"space-x-4 w-full",children:[Object(m.jsxs)("div",{className:"py-2",children:[Object(m.jsx)(p,{className:"",videoId:o}),Object(m.jsx)(x,{videoName:f,videoDescription:y})]}),Object(m.jsx)(j,{set:w,onChange:function(e,t,a){r(e),C(t,a)}})]}),Object(m.jsx)(v,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),i(e),n(e),o(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.07b7f254.chunk.js.map