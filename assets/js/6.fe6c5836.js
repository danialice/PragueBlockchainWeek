(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12],{12:function(e,t,r){"use strict";r.r(t);var n={props:{url:{type:String,required:!0},title:{type:String,required:!1},caption:{type:String,required:!1},indicator:String}},a=r(0),u=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n  "+e._s(e.caption)+"\n  "),e.caption?e._e():e._t("default"),"true"===e.indicator?r("OutboundLink"):e._e()],2)},[],!1,null,null,null);t.default=u.exports},94:function(e,t,r){"use strict";r.r(t);r(23),r(85);var n={components:{ExternalLink:r(12).default},computed:{venues:function(){var e=this.$page.frontmatter.address,t=this.$page.frontmatter.venue;if(Array.isArray(t)){var r=-1;return t.map(function(t){return{name:t,address:e[++r]||null}})}return[{name:t||null,address:e}]}}},a=r(0),u=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.venues,function(t){return r("p",[t.name?r("span",[e._v("\n      "+e._s(t.name)),r("br")]):e._e(),t.address?r("ExternalLink",{attrs:{url:"https://www.google.com/maps/place/"+t.address,caption:t.address,indicator:"true"}}):e._e()],1)}))},[],!1,null,null,null);t.default=u.exports}}]);