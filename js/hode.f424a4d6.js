(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hode"],{"12e7":function(t,e,n){"use strict";var o=n("32b3"),i=n.n(o);i.a},"32b3":function(t,e,n){},3563:function(t,e,n){},"3d5a":function(t,e,n){},"5c9c":function(t,e,n){"use strict";var o=n("3563"),i=n.n(o);i.a},"660e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("home-grid")},i=[],a=n("9ab4"),r=n("5038"),s=n("2f62"),c=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-container__home-page"},[t._m(0),n("div",{staticClass:"home-page-grid-item__gallery"},[n("img",{staticClass:"home-page__book__cover",attrs:{src:t.ORIGIN+t.BASE_URL+"assets/images/book-cover-with-ufo.png",alt:"book-cover"}})]),n("div",{staticClass:"home-page-grid-item__social"},[n("share-social-bar")],1),n("div",{staticClass:"home-page-grid-item__control"},[n("button",{staticClass:"home-page__read-button",on:{click:function(e){t.readButton_click()}}},[n("svg-icon",{staticClass:"home-page__read-button__icon",attrs:{name:"iconmonstr-book-17"}}),n("span",{staticClass:"home-page__read-button__label"},[t._v("Читать")])],1)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page-grid-item__title"},[n("div",{staticClass:"home-page__title-group"},[n("span",{staticClass:"title-section"},[n("span",[t._v("TYPESCRIPT")]),n("span",{staticClass:"home-page__title__book-version"},[t._v("3.2")])]),n("span",{staticClass:"title-section"},[t._v("DEFINITIVE")]),n("span",{staticClass:"title-section"},[t._v("GUIDE")])])])}],m={name:"book-grid",components:{},data:function(){return{menuVisible:!0}},computed:a["a"]({},Object(s["c"])(["isAppDrawerToggle","BASE_URL","ORIGIN"])),created:function(){console.log(this.ORIGIN,this.BASE_URL)},methods:{readButton_click:function(){this.$router.push("/book/contents")}}},d=m,p=(n("5c9c"),n("2877")),_=Object(p["a"])(d,u,l,!1,null,"0771aa32",null);_.options.__file="HomeGrid.vue";var h=_.exports,f=n("a42e"),b={name:"home",components:a["a"]({},r["a"],{homeGrid:c["default"].component("home-grid",h),shareSocialBar:c["default"].component("share-social-bar",f["a"])}),beforeRouteEnter:function(t,e,n){console.log("home enter"),n()},beforeRouteLeave:function(t,e,n){this.showGlobalProgressBar(),n()},mounted:function(){this.hideGlobalProgressBar()},computed:{},methods:a["a"]({},Object(s["b"])(["showGlobalProgressBar","hideGlobalProgressBar"]))},g=b,v=g,k=(n("d4ba"),Object(p["a"])(v,o,i,!1,null,"28ad012b",null));k.options.__file="HomePage.vue";e["default"]=k.exports},a42e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-bar__share"},[n("md-button",{staticClass:"interactive-icon-button md-icon-button",on:{click:function(e){t.socialButton_click("telegram")}}},[n("svg-icon",{attrs:{name:"social/iconmonstr-telegram-4"}})],1),n("md-button",{staticClass:"interactive-icon-button md-icon-button",on:{click:function(e){t.socialButton_click("twitter")}}},[n("svg-icon",{attrs:{name:"social/iconmonstr-twitter-4"}})],1),n("md-button",{staticClass:"interactive-icon-button md-icon-button",on:{click:function(e){t.socialButton_click("facebook")}}},[n("svg-icon",{attrs:{name:"social/iconmonstr-facebook-4"}})],1),n("md-button",{staticClass:"interactive-icon-button md-icon-button",on:{click:function(e){t.socialButton_click("vk")}}},[n("svg-icon",{attrs:{name:"social/iconmonstr-vk-4"}})],1)],1)},i=[],a=n("9ab4"),r=n("2f62"),s=function(){function t(){}return t.share=function(e){var n=t.shareUrlBuilders[e],o=t.appUrlBuild(t.getDefaultOptions()),i=n(o),a=t.getPopupOptions();window.open(i,"",a);window.opener=null},t.getDefaultOptions=function(){return{url:"",title:document.title,description:"",image:""}},t.appUrlBuild=function(t){var e="";return""===t.url&&(t.url=location.href),""!==t.utm_source&&(e+="&utm_source="+t.utm_source),""!==t.utm_medium&&(e+="&utm_medium="+t.utm_medium),""!==t.utm_campaing&&(e+="&utm_medium="+t.utm_medium),""!==e&&(t.url=t.url+"?"+e),t},t.shareUrlBuilders={facebook:function(e){var n=e.url;return t.normalize("\n                https://www.facebook.com/sharer/sharer.php?\n                &u="+n+"\n            ")},vk:function(e){var n=e.url,o=e.title,i=e.description,a=e.image;return t.normalize("\n                http://vkontakte.ru/share.php?\n                url="+n+",\n                &title="+o+",\n                &description="+i+",\n                &image="+a+",\n                &noparse=true,\n            ")},twitter:function(e){var n=e.url,o=e.title;return t.normalize("\n                http://twitter.com/share?\n                text="+o+",\n                &url="+n+",\n                &counturl="+n+",\n            ")},telegram:function(e){var n=e.url;return t.normalize("\n                https://telegram.me/share/url?\n                url="+n+"\n            ")}},t.normalize=function(t){return t.replace(/(\n|\s)*/g,"")},t.getPopupOptions=function(){var t=500,e=350,n=window.innerWidth/2-t/2,o=window.innerHeight/2-e/2;return["resizable,scrollbars,status","width="+t,"height="+e,"left="+n,"top="+o].join()},t}(),c=s,u={computed:a["a"]({},Object(r["c"])(["appTelegramChanelLink","yandexDonateLink"])),methods:{socialButton_click:function(t){c.share(t)}}},l=u,m=(n("12e7"),n("2877")),d=Object(m["a"])(l,o,i,!1,null,"0ae022e6",null);d.options.__file="ShareSocialBar.vue";e["a"]=d.exports},d4ba:function(t,e,n){"use strict";var o=n("3d5a"),i=n.n(o);i.a}}]);
//# sourceMappingURL=hode.f424a4d6.js.map