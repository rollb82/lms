/*! build from Thu Aug 09 2018 */
var bundle=webpackJsonp_name_([9],{103:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return c});var r="InitActivities",s="ActivityResources",o="data-activity",i="NextGenerationActivities",c=[".focusable","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"INIT_ACTIVITIES","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register("AppActivities","APPLICATION_ACTIVITIES","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register("ActivityProvider","PROVIDER","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register(s,"RESOURCES","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register(o,"ATTRIBUTE_ACTIVITY","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register("data-btn-activity","ATTRIBUTE_BUTTON_ACTIVITY","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register(i,"NEXT_GEN","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"),__REACT_HOT_LOADER__.register(c,"FOCUSABLE_ELEMENTS","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/general.js"))}()},116:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});var r=n(54),s=(n.n(r),new r.EventEmitter),o=function(e){var t=void 0;switch(e.type){case"touchmove":t=e.touches[0];break;case"touchend":case"touchstart":t=e.changedTouches[0];break;default:t=e}return{x:t.pageX,y:t.pageY}};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"EventEmitter","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/event.js"),__REACT_HOT_LOADER__.register(o,"getClientPosition","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/event.js"))}()},120:function(e,t,n){"use strict";var r=n(203),s=n.n(r),o=function(e,t){return function(n){return function(r,s){return e[s.type]?e[s.type](r,s):r||t(n)}}},i=function(e){return s()({model:e},e.get())},c=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"getReducerWrap","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/reducer.js"),__REACT_HOT_LOADER__.register(i,"createEditorState","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/reducer.js"))}(),n(287),n(204)),a=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var o=[e,t];return r.length&&o.push(c.applyMiddleware.apply(void 0,r)),c.createStore.apply(void 0,o)},_=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(a,"store","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/store.js")}(),function(e){var t={},n=void 0,r=void 0;for(r=e.length;r--;)n=e[r],t[n]=n;return t}),u=function(e){for(var t,n,r=e.slice(),s=r.length;s;s--)n=Math.floor(Math.random()*s),t=r[s-1],r[s-1]=r[n],r[n]=t;return r},f=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"arrayToObject","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/object.js"),__REACT_HOT_LOADER__.register(u,"shuffleArray","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/object.js"))}(),function(e,t){for(var n=e.keys(),r={},s=void 0,o=n.length;o--;)s=n[o].split("/"),r[s[t]]=e(n[o]);return r}),l=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(f,"requireAll","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/require.js")}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise(function(t){return setTimeout(t,e)})}),d=function(e,t){return fetch(e).then(function(e){if(e.status>=200&&e.status<300)return Promise.resolve(e);var n=t||e.statusText||""+e.status;return Promise.reject(new Error(n))})},E=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"sleep","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/async.js"),__REACT_HOT_LOADER__.register(d,"sync","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/async.js"))}(),n(205)),h=n.n(E),R=function(e,t,n){var r=t[0].toUpperCase()+t.slice(1),s=t[0].toLowerCase()+t.slice(1);e.style["webkit"+r]=n,e.style["moz"+r]=n,e.style["ms"+r]=n,e.style["o"+r]=n,e.style[s]=n},m=function(e,t,n){var r=e[0].toUpperCase()+e.slice(1),s=e[0].toLowerCase()+e.slice(1);if(n){var o;return o={},h()(o,"Webkit"+r,t),h()(o,"Moz"+r,t),h()(o,"Ms"+r,t),h()(o,"O"+r,t),h()(o,s,t),o}var i;return i={},h()(i,"webkit"+r,t),h()(i,"moz"+r,t),h()(i,"ms"+r,t),h()(i,"o"+r,t),h()(i,s,t),i},p=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"setStyle","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/style.js"),__REACT_HOT_LOADER__.register(m,"getStyle","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/style.js"))}(),n(298)),A=n.n(p),O=function(e){return A.a.createHash("sha256").update(e).digest("hex")},T=function(e){var t=e.replace(/_/g," ");return t[0].toUpperCase()+t.slice(1).toLowerCase()},D=function(e){return e.toUpperCase().split(" ").join("_")},g=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"getHash","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/string.js"),__REACT_HOT_LOADER__.register(T,"translateConstantTypeToCapString","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/string.js"),__REACT_HOT_LOADER__.register(D,"translateCapStringToConstantType","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/string.js"))}(),function(){var e=Date.now();return e+parseInt(Math.random()*Math.pow(10,e.toString().length))}),v=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"uniq","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/number.js")}(),n(116)),L=n(121),C=function(e){var t=L.e.join(",");return Array.from(e.querySelectorAll(t)).filter(function(e){return e.getBBox?e.getBBox().width||e.getBBox().height:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})},y=function(e){var t=C(e.currentTarget);if(t.length){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault())}},H=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"getFocusableChildren","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/accessibility.js"),__REACT_HOT_LOADER__.register(y,"trapTabKey","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/accessibility.js"))}(),function(e,t,n){var r=e;if(!e&&"string"!=typeof e)throw new Error("Block is not defined: "+e);return t&&"string"==typeof t&&(r+="__"+t),n&&"string"==typeof n&&(r+="--"+n),r}),U=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(H,"BEMNormalize","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/bem.js")}(),function(){return window.getSelection?window.getSelection().toString():document.selection.createRange().text}),I=function(e){var t=void 0,n=void 0;document.createRange?(t=document.createRange(),t.selectNode(e),n=window.getSelection(),n.removeAllRanges(),n.addRange(t)):(t=document.body.createTextRange(),t.moveToElementText(e),t.select())},k=function(e,t){if(document.createRange){var n=document.createRange(),r=window.getSelection();n.setStart(e,t),n.setEnd(e,t),r.removeAllRanges(),r.addRange(n)}},w=function(){try{window.getSelection().removeAllRanges()}catch(e){document.selection.empty()}},N=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(U,"getSelectionText","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/selection.js"),__REACT_HOT_LOADER__.register(I,"setSelection","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/selection.js"),__REACT_HOT_LOADER__.register(k,"changeCaretPosition","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/selection.js"),__REACT_HOT_LOADER__.register(w,"clearSelection","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/selection.js"))}(),n(123)),j=n.n(N),S=n(124),P=n.n(S),b=n(202),M=n.n(b),F=this,x=function(e){var t=document.querySelector("."+e.parentClassName);return t||(t=document.createElement("div"),t.className=e.parentClassName,document.body.appendChild(t)),t},B=function(e,t){var n=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div");return n.className=M()(t.className,H(t.className,null,t.type)),r.className=H(t.className,"header"),s.className=H(t.className,"body"),o.className=H(t.className,"close"),r.innerHTML=t.title,s.innerHTML=t.text,o.addEventListener("mouseup",function(){return e.removeChild(n)},!1),r.appendChild(o),n.appendChild(r),n.appendChild(s),e.insertBefore(n,e.firstChild),n},W=function(){var e=P()(j.a.mark(function e(t){var n,r,s,o,i;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=1e3,r={parentClassName:"c-notifications",className:"c-notification",type:W.INFO,title:"",text:"",timeout:W.TIMEOUT},s=Object.assign({},r,t),o=x(s),i=B(o,s),!(Number.isFinite(s.timeout)&&s.timeout>n)){e.next=9;break}return e.next=8,l(s.timeout);case 8:i.parentNode&&o.removeChild(i);case 9:case"end":return e.stop()}},e,F)}));return function(t){return e.apply(this,arguments)}}();W.TIMEOUT=5e3,W.INFO="info",W.SUCCESS="success",W.WARNING="warning",W.ERROR="error";var V=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(x,"getParentEl","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/notification.js"),__REACT_HOT_LOADER__.register(B,"appendNewNotificationEl","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/notification.js"),__REACT_HOT_LOADER__.register(W,"notification","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/notification.js"))}(),n(211)),G=n.n(V),Y=n(163),K=function(e){var t=performance.now(),n=e.timing||function(e){return e},r=e.duration||100;requestAnimationFrame(function s(o){var i=(o-t)/r;i>1&&(i=1);var c=n(i);e.draw(c),i<1&&requestAnimationFrame(s)})},q=function(e){var t={},n=!0,r=!1,s=void 0;try{for(var o,i=Object.entries(e)[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=G()(o.value,2),a=c[0],_=c[1];t[T(a)]=_}}catch(e){r=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}return t[Y.a]=null,t},X=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(K,"animate","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/animation.js"),__REACT_HOT_LOADER__.register(q,"updateKeysInAnimationList","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/animation.js"))}(),function(e){var t=e.getBoundingClientRect();return{top:t.top+pageYOffset,left:t.left+pageXOffset,bottom:t.bottom+pageYOffset,right:t.right+pageXOffset,width:t.width,height:t.height}}),z=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(X,"getBounds","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/bounds.js")}(),function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}),Z=function(){return z()>document.documentElement.clientHeight},J=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(z,"scrollHeight","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scroll.js"),__REACT_HOT_LOADER__.register(Z,"hasScroll","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scroll.js"))}(),function(e){if(!document.querySelector('[src="'+e.replace(/\?.*$/,"")+'"]')){var t=document.createElement("script"),n=new Promise(function(e,n){t["onload"in t?"onload":"onreadystatechange"]=e,t.onerror=n});return t.src=e,document.body.appendChild(t),n}return Promise.resolve()}),Q=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(J,"loadScript","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/load.js")}(),n(119)),$=n.n(Q),ee=n(200),te=n.n(ee),ne=n(201),re=n.n(ne),se=function(e){function t(e,n){$()(this,t);var r=te()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.field=e,r}return re()(t,e),t}(Error),oe=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(se,"ValidationError","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/error.js")}(),function(e){window.scoreData[e.id]={currentScore:e.currentScore,totalScore:e.totalScore,items:e.items}}),ie=function(e){window.scoreData[e.id].currentScore=e.currentScore},ce=function(e){window.scoreData[e.id].items=e.items},ae=function(){window.scoreData={},v.a.on("score:complete",ce),v.a.on("score:init",oe),v.a.on("score:restart",oe),v.a.on("score:change",ie),v.a.on("score:updated",ie)};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(oe,"scoreInit","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scoring.js"),__REACT_HOT_LOADER__.register(ie,"scoreChange","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scoring.js"),__REACT_HOT_LOADER__.register(ce,"activityCompleted","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scoring.js"),__REACT_HOT_LOADER__.register(ae,"scoreSubscription","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/utils/scoring.js"))}();n.d(t,"e",function(){return o}),n.d(t,!1,function(){return i}),n.d(t,"k",function(){return a}),n.d(t,!1,function(){return _}),n.d(t,"j",function(){return u}),n.d(t,"h",function(){return f}),n.d(t,!1,function(){return l}),n.d(t,!1,function(){return d}),n.d(t,!1,function(){return R}),n.d(t,!1,function(){return m}),n.d(t,!1,function(){return O}),n.d(t,!1,function(){return T}),n.d(t,!1,function(){return D}),n.d(t,!1,function(){return g}),n.d(t,"b",function(){return v.a}),n.d(t,"d",function(){return v.b}),n.d(t,"l",function(){return y}),n.d(t,"a",function(){return H}),n.d(t,!1,function(){return U}),n.d(t,!1,function(){return I}),n.d(t,!1,function(){return k}),n.d(t,!1,function(){return w}),n.d(t,"g",function(){return W}),n.d(t,!1,function(){return K}),n.d(t,!1,function(){return q}),n.d(t,"c",function(){return X}),n.d(t,!1,function(){return z}),n.d(t,"f",function(){return Z}),n.d(t,!1,function(){return J}),n.d(t,!1,function(){return se}),n.d(t,"i",function(){return ae})},121:function(e,t,n){"use strict";var r={};r.A=65,r.B=66,r.C=67,r.D=68,r.E=69,r.F=70,r.G=71,r.H=72,r.I=73,r.J=74,r.K=75,r.L=76,r.M=77,r.N=78,r.O=79,r.P=80,r.Q=81,r.R=82,r.S=83,r.T=84,r.U=85,r.V=86,r.W=87,r.X=88,r.Y=89,r.Z=90,r.ZERO=48,r.ONE=49,r.TWO=50,r.THREE=51,r.FOUR=52,r.FIVE=53,r.SIX=54,r.SEVEN=55,r.EIGHT=56,r.NINE=57,r.NUMPAD_0=96,r.NUMPAD_1=97,r.NUMPAD_2=98,r.NUMPAD_3=99,r.NUMPAD_4=100,r.NUMPAD_5=101,r.NUMPAD_6=102,r.NUMPAD_7=103,r.NUMPAD_8=104,r.NUMPAD_9=105,r.NUMPAD_MULTIPLY=106,r.NUMPAD_ADD=107,r.NUMPAD_ENTER=108,r.NUMPAD_SUBTRACT=109,r.NUMPAD_DECIMAL=110,r.NUMPAD_DIVIDE=111,r.F1=112,r.F2=113,r.F3=114,r.F4=115,r.F5=116,r.F6=117,r.F7=118,r.F8=119,r.F9=120,r.F10=121,r.F11=122,r.F12=123,r.F13=124,r.F14=125,r.F15=126,r.COLON=186,r.EQUALS=187,r.UNDERSCORE=189,r.QUESTION_MARK=191,r.TILDE=192,r.OPEN_BRACKET=219,r.BACKWARD_SLASH=220,r.CLOSED_BRACKET=221,r.QUOTES=222,r.LESS_THAN=188,r.GREATER_THAN=190,r.BACKSPACE=8,r.TAB=9,r.CLEAR=12,r.ENTER=13,r.SHIFT=16,r.CONTROL=17,r.ALT=18,r.CAPS_LOCK=20,r.ESC=27,r.SPACEBAR=32,r.PAGE_UP=33,r.PAGE_DOWN=34,r.END=35,r.HOME=36,r.LEFT=37,r.UP=38,r.RIGHT=39,r.DOWN=40,r.INSERT=45,r.DELETE=46,r.HELP=47,r.NUM_LOCK=144;var s=r,o=function(e){return e>=r.LEFT&&e<=r.DOWN},i=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"Keyboard","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/keyboard.js"),__REACT_HOT_LOADER__.register(s,"Key","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/keyboard.js"),__REACT_HOT_LOADER__.register(o,"isArrowKey","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/keyboard.js"))}(),n(103)),c=n(163),a={HIDDEN:"h-hidden",VISIBLE:"h-visible",VISUALLY_HIDDEN:"visually-hidden"},_=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(a,"Classes","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/classes.js")}(),n(277)),u=n.n(_),f=document.documentElement.dataset.lesson,l={editor:{activities:u.a.resolve("http://localhost:8081/","api/"+f+"/activities"),activity:u.a.resolve("http://localhost:8081/","api/"+f+"/activity")}},d=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"lessonId","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/api.js"),__REACT_HOT_LOADER__.register("future","FUTURE","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/api.js"),__REACT_HOT_LOADER__.register(l,"API","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/api.js"))}(),{embedded:{text:"embed in lesson page",settings:{left:"left",center:"center",right:"right"},settingsHeader:"Align:"},icon:{text:"pop-up from icon",settings:{inline:"center","float left":"left","float right":"right"},settingsHeader:"Icon position:"},text:{text:"pop-up from clickable text",settings:"",settingsHeader:"Text:"}}),E=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(d,"displayModes","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/display-modes.js")}(),{ACTIVITY:"ACITIVITY",DIALOG:"DIALOG",IMAGE:"IMAGE"}),h=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"Modals","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/modals.js")}(),n(120)),R={PREVIEW_ERROR:"Can not display the preview. Сheck the correctness of the fields.",SAVE_DATA_ERROR:"Сould not save data. Сheck the correctness of the fields.",UPLOAD_TYPE_FILE_ERROR:"Сould not upload file. Not a valid file type.",UPLOAD_PARSE_FILE_ERROR:"Сould not upload file. An error occurred while parsing the file. Not a valid file format.",UPLOAD_EMPTY_FILE_ERROR:"Сould not upload file. The file is empty.",UPLOAD_READ_FILE_ERROR:"Сould not upload file. An error occurred while reading the file. Check the validity of the imported file.",DISPLAY_SETTING_ERROR:"Write in the text field for Activity Display.",LABELING_LABELS_ERROR:"Add at least one label.",LABELING_IMAGE_ERROR:"Select an image.",LABELING_LABEL_VALUE_ERROR:"Give the name of the label."},m=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(R,"Errors","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/errors.js")}(),{PREVIEW_ERROR:{timeout:1e4,type:h.g.ERROR,title:"Preview error",text:R.PREVIEW_ERROR},SAVE_DATA_ERROR:{timeout:1e4,type:h.g.ERROR,title:"Save error",text:R.SAVE_DATA_ERROR},UPLOAD_TYPE_FILE_ERROR:{type:h.g.ERROR,title:"Upload error",text:R.UPLOAD_TYPE_FILE_ERROR},UPLOAD_PARSE_FILE_ERROR:{type:h.g.ERROR,title:"Upload error",text:R.UPLOAD_PARSE_FILE_ERROR},UPLOAD_EMPTY_FILE_ERROR:{type:h.g.ERROR,title:"Upload error",text:R.UPLOAD_EMPTY_FILE_ERROR},UPLOAD_READ_FILE_ERROR:{type:h.g.ERROR,title:"Upload error",text:R.UPLOAD_READ_FILE_ERROR}}),p=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(m,"Notifications","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/notifications.js")}(),{NEXT:"next",PREV:"prev",FLIP:"flip",SHUFFLE:"shuffle",REMOVE:"remove",REFRESH:"refresh",OPTIONS:"options",EXPORT:"export",NAVIGATION:"navigation",SWITCH:"switch",SHOW_MODAL:"show_modal",CLOSE_MODAL:"close_modal",START_SLIDESHOW:"start_slideshow",STOP_SLIDESHOW:"stop_slideshow",VIEW_TEXT:"view_text",VIEW_SLIDE:"view_slide",RESTART:"restart",SHOW_ANSWERS:"show_answers",CHECK_ANSWERS:"check_answers"}),A=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(p,"Buttons","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/buttons.js")}(),n(54)),O=window.matchMedia("only screen and (max-width: 668px)").matches,T=!!document.documentMode,D=/Edge/.test(navigator.userAgent),g=T||D,v=/Firefox/i.test(navigator.userAgent),L=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),C=L&&O,y=L&&!O,H=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"isPhoneScreen","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(T,"isIE","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(D,"isEdge","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(g,"isMSBrowser","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(v,"isFirefox","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(L,"isMobile","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(C,"isPhone","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"),__REACT_HOT_LOADER__.register(y,"isTablet","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/user-agent.js"))}(),new A.EventEmitter),U=L?"orientationchange":"resize",I=v?"DOMMouseScroll":"mousewheel",k={};"ontouchstart"in document.documentElement?(k.start="touchstart",k.move="touchmove",k.end="touchend"):(k.start="mousedown",k.move="mousemove",k.end="mouseup");var w=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"EventEmitter","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/event.js"),__REACT_HOT_LOADER__.register(U,"orientationChange","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/event.js"),__REACT_HOT_LOADER__.register(I,"mouseWheel","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/event.js"),__REACT_HOT_LOADER__.register(k,"dragEvents","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/event.js"))}(),{THUMBNAILS:"thumbnails",PREVIEW:"preview"}),N={TYPE:"flash-cards",FRONT_MODE:"front",BACK_MODE:"back",HOW_TO_URL:"http://players.brightcove.net/1204622959001/BJefZ0RzZ_default/index.html?directedMigration=true&videoId=1672888621001&autoplay=true&"},j={TYPE:"labeling",LINE_WIDTH_LIST:[1,2,3,4],HOW_TO_URL:"http://players.brightcove.net/1204622959001/BJefZ0RzZ_default/index.html?directedMigration=true&videoId=1672888621001&autoplay=true&"},S=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(w,"ALTERNATIVE_VIEWS","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/activities.js"),__REACT_HOT_LOADER__.register(N,"FlashCards","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/activities.js"),__REACT_HOT_LOADER__.register(j,"Labeling","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/activities.js"))}(),{CKEDITOR:"https://cdn.ckeditor.com/4.8.0/standard/ckeditor.js"});!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(S,"Scripts","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/scripts.js")}();n.d(t,"h",function(){return s}),n.d(t,!1,function(){return o}),n.d(t,"g",function(){return i.c}),n.d(t,!1,function(){}),n.d(t,!1,function(){}),n.d(t,"k",function(){return i.e}),n.d(t,"a",function(){return i.a}),n.d(t,!1,function(){}),n.d(t,"j",function(){return i.d}),n.d(t,"e",function(){return i.b}),n.d(t,!1,function(){return c.a}),n.d(t,"b",function(){return c.b}),n.d(t,"d",function(){return a}),n.d(t,!1,function(){return"future"}),n.d(t,!1,function(){return l}),n.d(t,!1,function(){return d}),n.d(t,"i",function(){return E}),n.d(t,!1,function(){return m}),n.d(t,"c",function(){return p}),n.d(t,!1,function(){return H}),n.d(t,"q",function(){return U}),n.d(t,!1,function(){return I}),n.d(t,"l",function(){return k}),n.d(t,!1,function(){return O}),n.d(t,!1,function(){return T}),n.d(t,!1,function(){return D}),n.d(t,"m",function(){return g}),n.d(t,!1,function(){return v}),n.d(t,"n",function(){return L}),n.d(t,"o",function(){return C}),n.d(t,"p",function(){return y}),n.d(t,!1,function(){return w}),n.d(t,"f",function(){return N}),n.d(t,!1,function(){return j}),n.d(t,!1,function(){return S}),n.d(t,!1,function(){return R})},163:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s});var r="None",s={BOUNCE_OUT:"animated bounceOut",BOUNCE_IN:"animated bounceIn",ROTATE_IN:"animated rotateIn",SWING:"animated swing",ROLL_IN:"animated rollIn",ROLL_OUT:"animated rollOut",BOUNCE_IN_LEFT:"animated bounceInLeft",BOUNCE_IN_RIGHT:"animated bounceInRight",FADE_IN_UP:"animated fadeInUp",FADE_IN_DOWN:"animated fadeInDown",FADE_IN:"animated fadeIn",FADE_OUT:"animated fadeOut",FLIP_IN_X:"animated flipInX",FLIP_IN_Y:"animated flipInY",ZOOM_IN:"animated zoomIn",ZOOM_OUT:"animated zoomOut",SLIDE_IN_UP:"animated slideInUp",SHAKE:"animated shake",PULSE:"animated pulse",HINGE:"animated hinge"};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"AnimationNone","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/animations.js"),__REACT_HOT_LOADER__.register(s,"Animations","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/constants/animations.js"))}()},214:function(e,t,n){e.exports=n(215)},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(119),s=n.n(r),o=n(123),i=n.n(o),c=n(124),a=n.n(c);n(237),n(243),n(244),n(150),n(249),n(251),n(252),n(253),n(254),n(255),n(257),n(263),n(264),n(265),n(269),n(271),n(272),n(273),n(275);!function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=Date.now(),r=Math.max(0,16-(n-e)),s=setTimeout(function(){t(n+r)},r);return e=n+r,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){return clearTimeout(e)})}(),Element.prototype.closest=Element.prototype.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null};var _=(n(276),n(121)),u=n(120),f=n(81),l=n(116);Object(u.h)(n(412),1);var d=function(){function e(){return t.apply(this,arguments)}var t=a()(i.a.mark(function e(){var t,r,s,o,c,a,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelectorAll("*["+_.a+"]"),r={},e.next=4,f.default;case 4:s=e.sent,Object(u.i)(),o=t.length;case 7:if(!o--){e.next=20;break}return l=t[o],c=l.getAttribute(_.a),a=window[_.k][c],a.type in r||(r[a.type]=n(416)("./"+a.type+"/player/Provider")),e.next=14,r[a.type];case 14:e.t0=l,e.t1=a,e.t2=s,e.sent.provider(e.t0,e.t1,e.t2);case 18:e.next=7;break;case 20:case"end":return e.stop()}},e,this)}));return e}(),E=function e(){s()(this,e),this.eventEmitters=l.a};window.manualControl?(console.log("test"),window[_.g]=d):(window[_.j]||(window[_.j]={}),document.addEventListener("DOMContentLoaded",d),window[_.j].players=new E);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"initActivities","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/index.player.js"),__REACT_HOT_LOADER__.register(E,"Players","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/index.player.js"))}()},276:function(e,t){},303:function(e,t){},340:function(e,t){},341:function(e,t){},411:function(e,t,n){function r(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./":[81],"./en":[212,2],"./en.json":[212,2],"./index":[81],"./index.js":[81],"./ru":[213,1],"./ru.json":[213,1]};r.keys=function(){return Object.keys(s)},r.id=411,e.exports=r},412:function(e,t,n){function r(e){return n(s(e))}function s(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./player/fonts/MontserratLight.woff":413,"./player/fonts/icomoon.woff":414,"./player/images/icon-correct.png":415};r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=412},413:function(e,t,n){e.exports=n.p+"fonts/player/MontserratLight.woff?5432a565b94b907b5ff6171488409ee6"},414:function(e,t,n){e.exports=n.p+"fonts/player/icomoon.woff?63bb5dda807ed89832a01e72df38a3eb"},415:function(e,t,n){e.exports=n.p+"images/player/icon-correct.png?a1878c1e06d812cf90f54c53d207c2b0"},416:function(e,t,n){function r(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./drag-and-drop/player/Provider":[427,0,7],"./flash-cards/player/Provider":[428,3,0],"./labeling/player/Provider":[429,0,4],"./slideshow/player/Provider":[430,0,5],"./timeline/player/Provider":[431,0,6]};r.keys=function(){return Object.keys(s)},r.id=416,e.exports=r},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=document.documentElement.getAttribute("lang")||navigator.language||navigator.userLanguage;return n(411)("./"+e)},s=r();t.default=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"locale","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/locale/index.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/christopherseamon/Documents/softchalk-repos/interactives/src/locale/index.js"))}()}},[214]);