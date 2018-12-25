(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{186:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("在 "),s("router-link",{attrs:{to:"/zh/guide/"}},[t._v("介绍")]),t._v(" 部分, 我们提到了在 crawler.config.yml 文件中的可配置项:")],1),t._v(" "),t._m(1),s("p",[t._v("本文会着重讲解各个配置项的定义以及使用方式.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("声明爬行的平台类型.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("android, ios (大小写无差异)")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("ocr (otherwise dont speicy this attribute to use NoSmoke V 1)")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("声明在遍历页面元素中的高优先级文本，当页面存在高优先级文本时，其他文本内容相关的交互将被忽略, 大小写不敏感，空格不敏感.")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("高优先级的文本数列，用于执行点击操作 (大小写无差异)")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("声明在遍历元素中，需要规避的文本信息，可以是某些文本的片段，当扫描出的文本含有exclue 数列中特定的值时，整段文本将被忽略.")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("会被屏蔽掉的文本数列，用于执行点击操作 (大小写无差异)")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置项")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("crawlingConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  strategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ocr'")]),t._v("\n  platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" platforms to run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  triggers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" specifies click events which needs to be specifically conducted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Allow'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cancel'")]),t._v("\n  exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" specifies patterns which can be excluded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'View Detail'")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-参数-platform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-参数-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 参数:  platform")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("platform:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("values:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-参数-strategy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-参数-strategy","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 参数:  strategy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("strategy:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("声明本次爬虫运行的策略, 默认为NoSmoke 1.0 版本实现. "),e("strong",[this._v("Note :")]),this._v(" 为了使用NoSmoke 2.0, strategt 值需要为ocr. 否则内部将会运行老版本的NoSmoke 实现.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("values:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-参数-triggers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数-triggers","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 参数:  triggers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("triggers:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("values:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-参数-exclude"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-参数-exclude","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 参数:  exclude")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("exclude:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("values:")])])}],!1,null,null,null);a.options.__file="configuration.md";e.default=a.exports}}]);