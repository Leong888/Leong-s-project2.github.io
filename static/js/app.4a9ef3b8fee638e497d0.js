webpackJsonp([1],{"/OIr":function(t,e,n){t.exports=n.p+"static/media/阴天快乐 - 陈奕迅.b5e8898.mp3"},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.94b9df5.png"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("qt+V")},null,null).exports,o=n("/ocq"),r={components:{},data:function(){return{center:{lng:0,lat:0},zoom:15,keyword:"",mapStyle:{styleJson:[{featureType:"all",elementType:"geometry",stylers:{hue:"#007fff",saturation:89}},{featureType:"water",elementType:"all",stylers:{color:"#ffffff"}}]}}},methods:{handler:function(t){var e=t.BMap,n=t.map;console.log(e,n),this.center.lng=114.07,this.center.lat=22.62,this.zoom=25}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"box"},[t._m(0),t._v(" "),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Map"}},[t._v("Map")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Music"}},[t._v("Music")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Visualisation"}},[t._v("Data Visualization")])],1)])])]),t._v(" "),n("div",{staticClass:"box"})]),t._v(" "),n("div",{staticClass:"container"},[n("baidu-map",{staticClass:"map",attrs:{center:t.center,zoom:t.zoom,mapStyle:t.mapStyle,"scroll-wheel-zoom":!0},on:{ready:t.handler}},[n("bm-panorama"),t._v(" "),n("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t._v(" "),n("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}}),t._v(" "),n("bm-overview-map",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",isOpen:!0}}),t._v(" "),n("bm-city-list",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),t._v(" "),n("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0,pageCapacity:1}}),t._v(" "),n("bm-view",{staticClass:"map"})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{attrs:{src:n("7Otq")}}),this._v(" "),e("span",[this._v("Leong's project")])])}]};var c=n("VU/8")(r,l,!1,function(t){n("O+k9")},null,null).exports,u={data:function(){var t=this;return{optiontype:["up","play","down"],preload:"auto",Indexsong:0,namesong:"",playButton:"fa fa-play",musicUrl:"",columns:[{type:"index",title:"序号",align:"center",width:100,render:function(t,e){return t("span",e.index)}},{title:"歌曲",key:"song"},{title:"操作",render:function(e,n){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.play(n.row.song,n.index)}}},"播放")])}}],songList:[{song:"因为爱情(电影《将爱情进行到底》主题曲) - 陈奕迅,王菲.mp3"},{song:"阴天快乐 - 陈奕迅.mp3"},{song:"最佳损友 - 陈奕迅.mp3"}],songListhidden:!1}},methods:{up:function(t){var e=this;if(0!==t){e.Indexsong=--t,e.playButton="fa fa-pause",e.namesong=e.songList[e.Indexsong].song,console.log("Indexsong:"+e.Indexsong+",namesong:"+e.namesong);var s=this.$refs.audio;e.musicUrl=n("OxHu")("./"+e.namesong),s.src=e.musicUrl,s.play()}else this.$Message.success({title:"提示",content:"已经到顶了喔"})},down:function(t){var e=this;if(t!==e.songList.length-1){e.Indexsong=++t,e.playButton="fa fa-pause",e.namesong=e.songList[e.Indexsong].song,console.log("Indexsong:"+e.Indexsong+",namesong:"+e.namesong);var s=this.$refs.audio;e.musicUrl=n("OxHu")("./"+e.namesong),s.src=e.musicUrl,s.play()}else this.$Message.success({title:"提示",content:"已经到底了喔"})},play:function(t,e){var s=this;if(s.Indexsong=e,console.log("Indexsong:"+s.Indexsong+",song:"+t+",+playButton:"+s.playButton),s.namesong===t)if("fa fa-play"===s.playButton){s.playButton="fa fa-pause";var a=this.$refs.audio;s.musicUrl=n("OxHu")("./"+s.namesong),a.src=s.musicUrl,a.play()}else s.playButton="fa fa-play",this.$refs.audio.pause();else if(s.namesong!=t){console.log("song:"+t),console.log("playButton:"+s.playButton),s.playButton="fa fa-pause",s.namesong=t;var i=this.$refs.audio;console.log("namesong:"+s.namesong),s.musicUrl=n("OxHu")("./"+s.namesong),i.src=s.musicUrl,i.play()}},IssongListshowhide:function(){this.songListhidden=!this.songListhidden}},created:function(){this.namesong=this.songList[1].song,this.Indexsong=1}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"box"},[t._m(0),t._v(" "),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Map"}},[t._v("Map")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Music"}},[t._v("Music")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Visualisation"}},[t._v("Data Visualization")])],1)])])]),t._v(" "),n("div",{staticClass:"box"})]),t._v(" "),n("Card",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"title",fn:function(){return[n("Icon",{attrs:{type:"ios-musical-notes"}}),t._v("\n           音乐播放器\n        ")]},proxy:!0}])},[t._v(" "),n("audio",{ref:"audio",staticStyle:{width:"100%"},attrs:{controls:"controls",preload:t.preload}},[n("source")]),t._v(" "),n("h4",{staticStyle:{width:"100%",height:"50px","line-height":"50px","text-align":"center"}},[t._v(t._s(t.namesong))]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"150px","line-height":"150px","text-align":"center"},attrs:{wrap:""}},[n("ButtonGroup",{attrs:{shape:"circle"}},[n("Button",{attrs:{type:"info",title:"上一首",size:"large"},on:{click:function(e){return t.up(t.Indexsong)}}},[n("i",{staticClass:"fa fa-backward"})]),t._v(" "),n("Button",{attrs:{type:"info",title:"播放/暂停",size:"large"},on:{click:function(e){return t.play(t.namesong,t.Indexsong)}}},[n("i",{class:t.playButton})]),t._v(" "),n("Button",{attrs:{type:"info",title:"下一首",size:"large"},on:{click:function(e){return t.down(t.Indexsong)}}},[n("i",{staticClass:"fa fa-forward"})]),t._v(" "),n("Button",{attrs:{type:"info",title:"列表",size:"large"},on:{click:t.IssongListshowhide}},[n("i",{staticClass:"fa fa-th-list"})])],1)],1),t._v(" "),n("Table",{directives:[{name:"show",rawName:"v-show",value:t.songListhidden,expression:"songListhidden"}],attrs:{columns:t.columns,data:t.songList},on:{click:t.IssongListshowhide}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{attrs:{src:n("7Otq")}}),this._v(" "),e("span",[this._v("Leong's project")])])}]},d=n("VU/8")(u,p,!1,null,null,null).exports,v={name:"Echarts",methods:{myEcharts:function(){this.$echarts.init(document.getElementById("main")).setOption({title:{text:"2022年卡塔尔世界杯八强球队身价"},tooltip:{},legend:{data:["日期"]},xAxis:{data:["阿根廷","法国","克罗地亚","摩洛哥","英格兰","葡萄牙","巴西","荷兰"]},yAxis:{},series:[{name:"球员身价（亿欧元）",type:"bar",data:[6.45,10.33,3.77,2.41,12.6,8.65,11.42,5.87]}]})}},mounted:function(){this.myEcharts()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"box"},[t._m(0),t._v(" "),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Map"}},[t._v("Map")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Music"}},[t._v("Music")])],1),t._v(" "),n("li",[n("router-link",{attrs:{"active-class":"active",to:"/Visualisation"}},[t._v("Data Visualization")])],1)])])]),t._v(" "),n("div",{staticClass:"box"})]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"main"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{attrs:{src:n("7Otq")}}),this._v(" "),e("span",[this._v("Leong's project")])])}]};var f=n("VU/8")(v,m,!1,function(t){n("c2iI")},null,null).exports;s.default.use(o.a);var g=new o.a({routes:[{path:"/Map",name:"Map",component:c},{path:"/Music",name:"Music",component:d},{path:"/Visualisation",name:"Visualisation",component:f}]}),h=n("dAEq"),_=n.n(h),y=n("mtWM"),x=n.n(y),w=n("zL8q"),O=n.n(w),B=(n("tvR6"),n("XLwt")),I=n("uZOU"),M=n.n(I);s.default.prototype.$ajax=x.a,s.default.prototype.$echarts=B,s.default.config.productionTip=!1,s.default.use(g),s.default.use(M.a),s.default.use(O.a),s.default.use(_.a,{ak:"WbMC9qc2QtiyHFX8XCmZCO80WBOWuHQ0"}),new s.default({el:"#app",router:g,components:{App:i},template:"<App/>"})},"O+k9":function(t,e){},OxHu:function(t,e,n){var s={"./因为爱情(电影《将爱情进行到底》主题曲) - 陈奕迅,王菲.mp3":"r23i","./最佳损友 - 陈奕迅.mp3":"TLjG","./阴天快乐 - 陈奕迅.mp3":"/OIr"};function a(t){return n(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="OxHu"},TLjG:function(t,e,n){t.exports=n.p+"static/media/最佳损友 - 陈奕迅.b3c5827.mp3"},c2iI:function(t,e){},"qt+V":function(t,e){},r23i:function(t,e,n){t.exports=n.p+"static/media/因为爱情(电影《将爱情进行到底》主题曲) - 陈奕迅,王菲.1d9e65a.mp3"},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4a9ef3b8fee638e497d0.js.map