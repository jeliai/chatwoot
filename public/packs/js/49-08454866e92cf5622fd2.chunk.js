(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{3156:function(e,t,r){"use strict";r.r(t);r(6),r(3),r(5),r(11),r(8),r(12);var n=r(4);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={name:"Campaigns",components:{UnreadMessageList:r(2933).a},computed:c(c({},Object(n.mapGetters)({campaign:"campaign/getActiveCampaign"})),{},{messages:function(){var e=this.campaign,t=e.sender,r=e.id;return[{content:e.message,sender:t,campaignId:r}]}})},o=r(1),p=Object(o.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("unread-message-list",{attrs:{messages:e.messages}})}),[],!1,null,null,null);t.default=p.exports}}]);
//# sourceMappingURL=49-08454866e92cf5622fd2.chunk.js.map