(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2906:function(n,t,e){var a=e(13),i=e(3088);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},2907:function(n,t,e){var a=e(13),i=e(3090);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},2908:function(n,t,e){var a=e(13),i=e(3092);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},2935:function(n,t,e){"use strict";e(7),e(20),e(21);var a=e(18),i=e(61);function r(n,t,e,a,i,r,o){try{var s=n[r](o),l=s.value}catch(c){return void e(c)}s.done?t(l):Promise.resolve(l).then(a,i)}var o=e(53).b.ARTICLE_STATUS_TYPES,s={mixins:[a.a,i.mixin],props:{backButtonLabel:{type:String,default:""},isUpdating:{type:Boolean,default:!1},isSaved:{type:Boolean,default:!1},enableOpenSidebarButton:{type:Boolean,default:!1},shouldShowAddLocaleButton:{type:Boolean,default:!1}},data:function(){return{isSidebarOpen:!1,showActionsDropdown:!1,alertMessage:"",ARTICLE_STATUS_TYPES:o}},computed:{statusText:function(){return this.isUpdating?this.$t("HELP_CENTER.EDIT_HEADER.SAVING"):this.$t("HELP_CENTER.EDIT_HEADER.SAVED")},articleSlug:function(){return this.$route.params.articleSlug},currentPortalSlug:function(){return this.$route.params.portalSlug},currentArticleStatus:function(){return this.$store.getters["articles/articleStatus"](this.articleSlug)},isPublishedArticle:function(){return"published"===this.currentArticleStatus},isArchivedArticle:function(){return"archived"===this.currentArticleStatus}},methods:{onClickGoBack:function(){this.$emit("back")},showPreview:function(){this.$emit("show")},onClickAdd:function(){this.$emit("add")},updateArticleStatus:function(n){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("articles/update",{portalSlug:e.currentPortalSlug,articleId:e.articleSlug,status:n});case 3:e.statusUpdateSuccessMessage(n),e.closeActionsDropdown(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.alertMessage=(null===t.t0||void 0===t.t0?void 0:t.t0.message)||e.statusUpdateErrorMessage(n);case 10:return t.prev=10,e.showAlert(e.alertMessage),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})),function(){var n=this,e=arguments;return new Promise((function(a,i){var o=t.apply(n,e);function s(n){r(o,a,i,s,l,"next",n)}function l(n){r(o,a,i,s,l,"throw",n)}s(void 0)}))})()},statusUpdateSuccessMessage:function(n){n===this.ARTICLE_STATUS_TYPES.PUBLISH?this.alertMessage=this.$t("HELP_CENTER.PUBLISH_ARTICLE.API.SUCCESS"):n===this.ARTICLE_STATUS_TYPES.ARCHIVE&&(this.alertMessage=this.$t("HELP_CENTER.ARCHIVE_ARTICLE.API.SUCCESS"))},statusUpdateErrorMessage:function(n){n===this.ARTICLE_STATUS_TYPES.PUBLISH?this.alertMessage=this.$t("HELP_CENTER.PUBLISH_ARTICLE.API.ERROR"):n===this.ARTICLE_STATUS_TYPES.ARCHIVE&&(this.alertMessage=this.$t("HELP_CENTER.ARCHIVE_ARTICLE.API.ERROR"))},openSidebar:function(){this.isSidebarOpen=!0,this.$emit("open")},closeSidebar:function(){this.isSidebarOpen=!1,this.$emit("close")},openActionsDropdown:function(){this.showActionsDropdown=!this.showActionsDropdown},closeActionsDropdown:function(){this.showActionsDropdown=!1}}},l=s,c=(e(3087),e(1)),A=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"header--wrap"},[e("div",{staticClass:"header-left--wrap"},[e("woot-button",{attrs:{icon:"chevron-left",variant:"clear",size:"small","color-scheme":"primary"},on:{click:n.onClickGoBack}},[n._v("\n      "+n._s(n.backButtonLabel)+"\n    ")])],1),n._v(" "),e("div",{staticClass:"header-right--wrap"},[n.isUpdating||n.isSaved?e("span",{staticClass:"draft-status"},[n._v("\n      "+n._s(n.statusText)+"\n    ")]):n._e(),n._v(" "),e("woot-button",{attrs:{"class-names":"article--buttons",icon:"globe","color-scheme":"secondary",variant:"hollow",size:"small"},on:{click:n.showPreview}},[n._v("\n      "+n._s(n.$t("HELP_CENTER.EDIT_HEADER.PREVIEW"))+"\n    ")]),n._v(" "),n.isSidebarOpen?n._e():e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:n.$t("HELP_CENTER.EDIT_HEADER.OPEN_SIDEBAR"),expression:"$t('HELP_CENTER.EDIT_HEADER.OPEN_SIDEBAR')",modifiers:{"top-end":!0}}],attrs:{icon:"pane-open","class-names":"article--buttons",variant:"hollow",size:"small","color-scheme":"secondary","is-disabled":n.enableOpenSidebarButton},on:{click:n.openSidebar}}),n._v(" "),n.isSidebarOpen?e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:n.$t("HELP_CENTER.EDIT_HEADER.CLOSE_SIDEBAR"),expression:"$t('HELP_CENTER.EDIT_HEADER.CLOSE_SIDEBAR')",modifiers:{"top-end":!0}}],attrs:{icon:"pane-close","class-names":"article--buttons",variant:"hollow",size:"small","color-scheme":"secondary"},on:{click:n.closeSidebar}}):n._e(),n._v(" "),e("div",{staticClass:"article--buttons"},[e("div",{staticClass:"button-group"},[e("woot-button",{attrs:{"class-names":"publish-button",size:"small",icon:"checkmark","color-scheme":"primary","is-disabled":!n.articleSlug||n.isPublishedArticle},on:{click:function(t){return n.updateArticleStatus(n.ARTICLE_STATUS_TYPES.PUBLISH)}}},[n._v("\n          "+n._s(n.$t("HELP_CENTER.EDIT_HEADER.PUBLISH_BUTTON"))+"\n        ")]),n._v(" "),e("woot-button",{ref:"arrowDownButton",attrs:{size:"small",icon:"chevron-down","is-disabled":!n.articleSlug||n.isArchivedArticle},on:{click:n.openActionsDropdown}})],1),n._v(" "),n.showActionsDropdown?e("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:n.closeActionsDropdown,expression:"closeActionsDropdown"}],staticClass:"dropdown-pane dropdown-pane--open"},[e("woot-dropdown-menu",[e("woot-dropdown-item",[e("woot-button",{attrs:{variant:"clear","color-scheme":"secondary",size:"small",icon:"book-clock"},on:{click:function(t){return n.updateArticleStatus(n.ARTICLE_STATUS_TYPES.ARCHIVE)}}},[n._v("\n              "+n._s(n.$t("HELP_CENTER.EDIT_HEADER.MOVE_TO_ARCHIVE_BUTTON"))+"\n            ")])],1)],1)],1):n._e()])],1)])}),[],!1,null,"c2ea385c",null);t.a=A.exports},2936:function(n,t,e){"use strict";var a=e(163),i=e(352),r={components:{WootMessageEditor:e(179).a,ResizableTextArea:i.a},props:{article:{type:Object,default:function(){return{}}},isSettingsSidebarOpen:{type:Boolean,default:!1}},data:function(){return{articleTitle:"",articleContent:"",saveArticle:function(){}}},mounted:function(){var n=this;this.articleTitle=this.article.title,this.articleContent=this.article.content,this.saveArticle=Object(a.a)((function(t){n.$emit("save-article",t)}),300,!1)},methods:{onFocus:function(){this.$emit("focus")},onBlur:function(){this.$emit("blur")},onTitleInput:function(){this.saveArticle({title:this.articleTitle})},onContentInput:function(){this.saveArticle({content:this.articleContent})}}},o=(e(3089),e(1)),s=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"edit-article--container"},[e("resizable-text-area",{staticClass:"article-heading",attrs:{type:"text",rows:"1",placeholder:n.$t("HELP_CENTER.EDIT_ARTICLE.TITLE_PLACEHOLDER")},on:{focus:n.onFocus,blur:n.onBlur,input:n.onTitleInput},model:{value:n.articleTitle,callback:function(t){n.articleTitle=t},expression:"articleTitle"}}),n._v(" "),e("woot-message-editor",{staticClass:"article-content",attrs:{placeholder:n.$t("HELP_CENTER.EDIT_ARTICLE.CONTENT_PLACEHOLDER"),"is-format-mode":!0,"override-line-breaks":!0},on:{focus:n.onFocus,blur:n.onBlur,input:n.onContentInput},model:{value:n.articleContent,callback:function(t){n.articleContent=t},expression:"articleContent"}})],1)}),[],!1,null,"607ab47e",null);t.a=s.exports},2937:function(n,t,e){"use strict";e(42),e(24),e(3),e(29),e(6),e(5),e(11),e(8),e(12);var a=e(603),i=e(4),r=e(163),o=e(200);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){c(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var A={components:{MultiselectDropdown:a.a},props:{article:{type:Object,default:function(){return{}}}},data:function(){return{metaTitle:"",metaDescription:"",metaTags:[],metaOptions:[]}},computed:l(l({},Object(i.mapGetters)({categories:"categories/allCategories",agents:"agents/getAgents"})),{},{assignedAuthor:function(){var n;return null===(n=this.article)||void 0===n?void 0:n.author},selectedCategory:function(){var n;return null===(n=this.article)||void 0===n?void 0:n.category},allTags:function(){return this.metaTags.map((function(n){return n.name}))}}),mounted:function(){var n=this;if(!Object(o.f)(this.article.meta||{})){var t=this.article.meta,e=t.title,a=void 0===e?"":e,i=t.description,s=void 0===i?"":i,l=t.tags,c=void 0===l?[]:l;this.metaTitle=a,this.metaDescription=s,this.metaTags=this.formattedTags({tags:c})}this.saveArticle=Object(r.a)((function(){n.$emit("save-article",{meta:{title:n.metaTitle,description:n.metaDescription,tags:n.allTags}})}),1e3,!1)},methods:{formattedTags:function(n){return n.tags.map((function(n){return{name:n}}))},addTagValue:function(n){var t={name:n};this.metaTags.push(t),this.$refs.tagInput.$el.focus(),this.saveArticle()},onClickSelectCategory:function(n){var t=n.id;this.$emit("save-article",{category_id:t})},onClickAssignAuthor:function(n){var t=n.id;this.$emit("save-article",{author_id:t})},onChangeMetaInput:function(){this.saveArticle()},onClickArchiveArticle:function(){this.$emit("archive-article")},onClickDeleteArticle:function(){this.$emit("delete-article")}}},E=(e(3091),e(1)),u=Object(E.a)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"popover-animation"}},[e("div",{staticClass:"article-settings--container"},[e("h3",{staticClass:"block-title"},[n._v("\n      "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.TITLE"))+"\n    ")]),n._v(" "),e("div",{staticClass:"form-wrap"},[e("label",[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.CATEGORY.LABEL"))+"\n        "),e("multiselect-dropdown",{attrs:{options:n.categories,"selected-item":n.selectedCategory,"has-thumbnail":!1,"multiselector-title":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.CATEGORY.TITLE"),"multiselector-placeholder":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.CATEGORY.PLACEHOLDER"),"no-search-result":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.CATEGORY.NO_RESULT"),"input-placeholder":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.CATEGORY.SEARCH_PLACEHOLDER")},on:{click:n.onClickSelectCategory}})],1),n._v(" "),e("label",[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.AUTHOR.LABEL"))+"\n        "),e("multiselect-dropdown",{attrs:{options:n.agents,"selected-item":n.assignedAuthor,"multiselector-title":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.AUTHOR.TITLE"),"multiselector-placeholder":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.AUTHOR.PLACEHOLDER"),"no-search-result":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.AUTHOR.NO_RESULT"),"input-placeholder":n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.AUTHOR.SEARCH_PLACEHOLDER")},on:{click:n.onClickAssignAuthor}})],1),n._v(" "),e("label",[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_TITLE.LABEL"))+"\n        "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.metaTitle,expression:"metaTitle"}],attrs:{rows:"3",type:"text",placeholder:n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_TITLE.PLACEHOLDER")},domProps:{value:n.metaTitle},on:{input:[function(t){t.target.composing||(n.metaTitle=t.target.value)},n.onChangeMetaInput]}})]),n._v(" "),e("label",[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_DESCRIPTION.LABEL"))+"\n        "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.metaDescription,expression:"metaDescription"}],attrs:{rows:"3",type:"text",placeholder:n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_DESCRIPTION.PLACEHOLDER")},domProps:{value:n.metaDescription},on:{input:[function(t){t.target.composing||(n.metaDescription=t.target.value)},n.onChangeMetaInput]}})]),n._v(" "),e("label",[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_TAGS.LABEL"))+"\n        "),e("multiselect",{ref:"tagInput",attrs:{placeholder:n.$t("HELP_CENTER.ARTICLE_SETTINGS.FORM.META_TAGS.PLACEHOLDER"),label:"name",options:n.metaOptions,"track-by":"name",multiple:!0,taggable:!0},on:{tag:n.addTagValue},model:{value:n.metaTags,callback:function(t){n.metaTags=t},expression:"metaTags"}})],1)]),n._v(" "),e("div",{staticClass:"action-buttons"},[e("woot-button",{attrs:{icon:"archive",size:"small",variant:"clear","color-scheme":"secondary"},on:{click:n.onClickArchiveArticle}},[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.BUTTONS.ARCHIVE"))+"\n      ")]),n._v(" "),e("woot-button",{attrs:{icon:"delete",size:"small",variant:"clear","color-scheme":"alert"},on:{click:n.onClickDeleteArticle}},[n._v("\n        "+n._s(n.$t("HELP_CENTER.ARTICLE_SETTINGS.BUTTONS.DELETE"))+"\n      ")])],1)])])}),[],!1,null,"1c129daf",null);t.a=u.exports},3087:function(n,t,e){"use strict";e(2906)},3088:function(n,t,e){(t=e(14)(!0)).push([n.i,".header--wrap[data-v-c2ea385c]{\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  width:100%;\n  height:var(--space-jumbo);\n  padding-top:var(--space-small)\n}\n.header-left--wrap[data-v-c2ea385c]{\n  display:flex;\n  align-items:center\n}\n.header-right--wrap[data-v-c2ea385c]{\n  display:flex;\n  align-items:center\n}\n.article--buttons[data-v-c2ea385c]{\n  position:relative;\n  margin-left:var(--space-smaller)\n}\n.article--buttons .dropdown-pane[data-v-c2ea385c]{\n  position:absolute;\n  right:0\n}\n.draft-status[data-v-c2ea385c]{\n  margin-right:var(--space-smaller);\n  margin-left:var(--space-normal);\n  color:var(--s-400);\n  align-items:center;\n  font-size:var(--font-size-mini);\n  -webkit-animation:fadeIn-data-v-c2ea385c 1s;\n  animation:fadeIn-data-v-c2ea385c 1s\n}\n@-webkit-keyframes fadeIn-data-v-c2ea385c{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-c2ea385c{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}","",{version:3,sources:["/Users/s.dastan/Desktop/chatwoot/chatwoot/app/javascript/dashboard/routes/dashboard/helpcenter/components/Header/EditArticleHeader.vue"],names:[],mappings:"AAiOA;EACE,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,UAAA;EACA,yBAAA;EACA;AAAA;AAEF;EACE,YAAA;EACA;AAAA;AAEF;EACE,YAAA;EACA;AAAA;AAEF;EACE,iBAAA;EACA;AAAA;AACA;EACE,iBAAA;EACA;AAAA;AAGJ;EACE,iCAAA;EACA,+BAAA;EACA,kBAAA;EACA,kBAAA;EACA,+BAAA;EACA,2CAAA;EAAA;AAAA;AACA;AACE;IACE;AAAA;AAEF;IACE;AAAA;AAAA;AALJ;AACE;IACE;AAAA;AAEF;IACE;AAAA;AAAA",file:"EditArticleHeader.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header--wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: var(--space-jumbo);\n  padding-top: var(--space-small);\n}\n.header-left--wrap {\n  display: flex;\n  align-items: center;\n}\n.header-right--wrap {\n  display: flex;\n  align-items: center;\n}\n.article--buttons {\n  position: relative;\n  margin-left: var(--space-smaller);\n  .dropdown-pane {\n    position: absolute;\n    right: 0;\n  }\n}\n.draft-status {\n  margin-right: var(--space-smaller);\n  margin-left: var(--space-normal);\n  color: var(--s-400);\n  align-items: center;\n  font-size: var(--font-size-mini);\n  animation: fadeIn 1s;\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n"]}]),n.exports=t},3089:function(n,t,e){"use strict";e(2907)},3090:function(n,t,e){(t=e(14)(!0)).push([n.i,".edit-article--container[data-v-607ab47e]{\n  margin:var(--space-large) auto;\n  width:640px\n}\n.article-heading[data-v-607ab47e]{\n  font-size:var(--font-size-giga);\n  font-weight:var(--font-weight-bold);\n  min-height:var(--space-jumbo);\n  max-height:64rem;\n  height:auto;\n  border:0px solid transparent;\n  padding:0;\n  color:var(--s-900)\n}\n[data-v-607ab47e] .ProseMirror-menubar-wrapper .ProseMirror-menubar .ProseMirror-menuitem .ProseMirror-icon{\n  margin-right:var(--space-normal);\n  font-size:var(--font-size-small)\n}\n[data-v-607ab47e] .ProseMirror-menubar-wrapper .ProseMirror-woot-style{\n  min-height:var(--space-giga);\n  max-height:100%\n}\n[data-v-607ab47e] .ProseMirror-menubar-wrapper .ProseMirror-woot-style p{\n  font-size:var(--font-size-default);\n  line-height:1.5\n}\n[data-v-607ab47e] .ProseMirror-menubar-wrapper .ProseMirror-woot-style li::marker{\n  font-size:var(--font-size-default)\n}","",{version:3,sources:["/Users/s.dastan/Desktop/chatwoot/chatwoot/app/javascript/dashboard/routes/dashboard/helpcenter/components/ArticleEditor.vue"],names:[],mappings:"AAiFA;EACE,8BAAA;EACA;AAAA;AAGF;EACE,+BAAA;EACA,mCAAA;EACA,6BAAA;EACA,gBAAA;EACA,WAAA;EACA,4BAAA;EACA,SAAA;EACA;AAAA;AAMI;EACE,gCAAA;EACA;AAAA;AAIJ;EACE,4BAAA;EACA;AAAA;AAEA;EACE,kCAAA;EACA;AAAA;AAGF;EACE;AAAA",file:"ArticleEditor.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.edit-article--container {\n  margin: var(--space-large) auto;\n  width: 640px;\n}\n\n.article-heading {\n  font-size: var(--font-size-giga);\n  font-weight: var(--font-weight-bold);\n  min-height: var(--space-jumbo);\n  max-height: 64rem;\n  height: auto;\n  border: 0px solid transparent;\n  padding: 0;\n  color: var(--s-900);\n}\n\n::v-deep {\n  .ProseMirror-menubar-wrapper {\n    .ProseMirror-menubar .ProseMirror-menuitem {\n      .ProseMirror-icon {\n        margin-right: var(--space-normal);\n        font-size: var(--font-size-small);\n      }\n    }\n\n    .ProseMirror-woot-style {\n      min-height: var(--space-giga);\n      max-height: 100%;\n\n      p {\n        font-size: var(--font-size-default);\n        line-height: 1.5;\n      }\n\n      li::marker {\n        font-size: var(--font-size-default);\n      }\n    }\n  }\n}\n"]}]),n.exports=t},3091:function(n,t,e){"use strict";e(2908)},3092:function(n,t,e){(t=e(14)(!0)).push([n.i,".article-settings--container[data-v-1c129daf]{\n  flex:.3 1;\n  min-width:var(--space-giga);\n  max-width:36rem;\n  overflow-y:auto;\n  border-left:1px solid var(--color-border-light);\n  margin-left:var(--space-normal);\n  padding-left:var(--space-normal);\n  padding-top:var(--space-small);\n  padding-bottom:var(--space-small)\n}\n.article-settings--container .form-wrap[data-v-1c129daf]{\n  margin-top:var(--space-normal);\n  margin-bottom:var(--space-medium)\n}\n.article-settings--container .form-wrap textarea[data-v-1c129daf]{\n  font-size:var(--font-size-small)\n}\n.article-settings--container .action-buttons[data-v-1c129daf]{\n  display:flex;\n  flex-direction:column\n}\n[data-v-1c129daf] .multiselect{\n  margin-bottom:0\n}\n[data-v-1c129daf] .multiselect__content-wrapper{\n  display:none\n}\n[data-v-1c129daf] .multiselect--active .multiselect__tags{\n  border-radius:var(--border-radius-normal);\n  padding-right:var(--space-small) !important\n}\n[data-v-1c129daf] .multiselect__placeholder{\n  color:var(--s-300);\n  padding-top:var(--space-small);\n  margin-bottom:0\n}\n[data-v-1c129daf] .multiselect__select{\n  display:none\n}","",{version:3,sources:["/Users/s.dastan/Desktop/chatwoot/chatwoot/app/javascript/dashboard/routes/dashboard/helpcenter/pages/articles/ArticleSettings.vue"],names:[],mappings:"AAqNA;EACE,SAAA;EACA,2BAAA;EACA,eAAA;EACA,eAAA;EACA,+CAAA;EACA,+BAAA;EACA,gCAAA;EACA,8BAAA;EACA;AAAA;AAEA;EACE,8BAAA;EACA;AAAA;AAEA;EACE;AAAA;AAIJ;EACE,YAAA;EACA;AAAA;AAIF;EACE;AAAA;AAEF;EACE;AAAA;AAEF;EACE,yCAAA;EACA;AAAA;AAEF;EACE,kBAAA;EACA,8BAAA;EACA;AAAA;AAEF;EACE;AAAA",file:"ArticleSettings.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.article-settings--container {\n  flex: 0.3;\n  min-width: var(--space-giga);\n  max-width: 36rem;\n  overflow-y: auto;\n  border-left: 1px solid var(--color-border-light);\n  margin-left: var(--space-normal);\n  padding-left: var(--space-normal);\n  padding-top: var(--space-small);\n  padding-bottom: var(--space-small);\n\n  .form-wrap {\n    margin-top: var(--space-normal);\n    margin-bottom: var(--space-medium);\n\n    textarea {\n      font-size: var(--font-size-small);\n    }\n  }\n\n  .action-buttons {\n    display: flex;\n    flex-direction: column;\n  }\n}\n::v-deep {\n  .multiselect {\n    margin-bottom: 0;\n  }\n  .multiselect__content-wrapper {\n    display: none;\n  }\n  .multiselect--active .multiselect__tags {\n    border-radius: var(--border-radius-normal);\n    padding-right: var(--space-small) !important;\n  }\n  .multiselect__placeholder {\n    color: var(--s-300);\n    padding-top: var(--space-small);\n    margin-bottom: 0;\n  }\n  .multiselect__select {\n    display: none;\n  }\n}\n"]}]),n.exports=t}}]);
//# sourceMappingURL=2-9ce480c29f018e93aed2.chunk.js.map