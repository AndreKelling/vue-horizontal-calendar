(function(e){function t(t){for(var n,l,i=t[0],d=t[1],u=t[2],c=0,h=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&h.push(r[l][0]),r[l]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);o&&o(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var d=a[i];0!==r[d]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var o=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0560":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("calendar",{attrs:{"render-days":31,"calendar-data":e.data}})],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outer",style:e.cssVars},[a("input",{attrs:{type:"date"},domProps:{value:e.selectedDate&&e.selectedDate.toISOString().split("T")[0]},on:{input:function(t){e.selectedDate=t.target.valueAsDate}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.monthIndex,expression:"monthIndex"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.monthIndex=t.target.multiple?a:a[0]},function(t){e.setSelectedDate(new Date((new Date).getFullYear(),e.monthIndex,1))}]}},e._l(e.monthNames,(function(t,n){return a("option",{key:t,domProps:{value:n}},[e._v(" "+e._s(t)+" ")])})),0),e._v(" Density: "),a("input",{attrs:{type:"number",min:"10",max:"100"},domProps:{value:e.cellWidth},on:{change:function(t){e.cellWidth=t.target.value}}}),a("div",{staticClass:"wrapper"},[e.calendarData.length>0?a("div",{staticClass:"label"},[e._v("Items")]):e._e(),a("div",{staticClass:"cells"},[e._l(e.dates,(function(t){return a("head-cell",{key:t.getTime(),attrs:{"day-of-month":t.getDate(),"day-name":e.getDayName(t.getDay()),"month-name":e.getMonthName(t.getMonth())}})})),a("date-wheel",{attrs:{selectedDate:e.selectedDate,cellWidth:e.cellWidth},on:{"change:day":e.setSelectedDate}})],2)]),e._l(e.calendarData,(function(t){return a("row",{key:t.id,attrs:{title:t.name,dates:e.datesWithMarks(e.dates,t.marks),occupations:t.occupations,labelWidth:e.labelWidth,cellWidth:e.cellWidth}})}))],2)},i=[],d=(a("4160"),a("b0c0"),a("a9e3"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"date-wheel",on:{mousedown:e.startDrag,mousemove:e.doDrag,mouseup:e.stopDrag,mouseout:e.stopDrag}})}),u=[];function o(e){var t=["So","Mo","Di","Mi","Do","Fr","Sa"];return t[e]}var c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function h(e){return c[e]}function f(e){var t=864e5;return e*t}var p={props:{cellWidth:{type:Number,default:50},selectedDate:{type:Date,default:new Date}},data:function(){return{x:null,pointShift:0}},methods:{startDrag:function(){this.dragging=!0},stopDrag:function(){this.dragging=!1},doDrag:function(e){if(this.dragging){if(null!=this.x){var t=this.x-e.clientX;this.pointShift+=t}this.pointShift>this.cellWidth&&(this.pointShift=0,this.dayJump(1)),-this.pointShift>this.cellWidth&&(this.pointShift=0,this.dayJump(-1)),this.x=e.clientX}},dayJump:function(e){var t=this.selectedDate.getTime()+f(e);this.$emit("change:day",new Date(t))}},mounted:function(){document.addEventListener("pointermove",this.doDrag.bind(this))},destroyed:function(){document.removeEventListener("pointermove",this.doDrag.bind(this))}},D=p,m=(a("bfb3"),a("2877")),g=Object(m["a"])(D,d,u,!1,null,"eda747f8",null),v=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cell cell--header"},[a("div",{staticClass:"day-of-month"},[e._v(e._s(e.dayOfMonth))]),a("div",{staticClass:"day-name"},[e._v(e._s(e.dayName))]),1===e.dayOfMonth?a("div",{staticClass:"month-name"},[e._v(e._s(e.monthName))]):e._e()])},b=[],_={props:{dayOfMonth:{type:Number,required:!0,default:0},dayName:{type:String,required:!1},monthName:{type:String,required:!1}}},S=_,w=Object(m["a"])(S,y,b,!1,null,null,null),W=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"label"},[e._v(e._s(e.title))]),e._l(e.dates,(function(t){return a("div",{key:t.date.getTime(),staticClass:"cell",class:e.cssClass},[t.marking?a("div",[e._v(" "+e._s(t.marking.name)+" ")]):e._e()])})),e._l(e.occupations,(function(t){return a("occupation",{key:t.id,attrs:{name:t.name,startDate:t.startDate,endDate:t.endDate,scheduleStartDate:e.scheduleStartDate,scheduleEndDate:e.scheduleEndDate,background:t.background,labelWidth:e.labelWidth,cellWidth:e.cellWidth}})}))],2)},k=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.valid&&e.isInsideScheduleView(e.scheduleStartDate,e.scheduleEndDate,e.startDate,e.endDate)?a("div",{class:["occupation",!!e.daysBeforeScheduleDateRange(e.startDate,e.scheduleStartDate)&&"occupation--startoff",!!e.daysAfterScheduleDateRange(e.endDate,e.scheduleEndDate)&&"occupation--endoff"],style:"width: "+(e.daysInDateRange(e.startDate,e.endDate)-e.daysBeforeScheduleDateRange(e.startDate,e.scheduleStartDate)+e.daysAfterScheduleDateRange(e.endDate,e.scheduleEndDate))*e.cellWidth+"px;\n           left: "+((e.daysInDateRange(e.scheduleStartDate,e.startDate)-1+e.daysBeforeScheduleDateRange(e.startDate,e.scheduleStartDate))*e.cellWidth+e.labelWidth)+"px;\n           background-color: "+e.background+"\n           "},[a("span",[e._v(" "+e._s(e.name)+" "),a("br"),e._v(" "+e._s(new Date(e.startDate).getDate()+". "+(new Date(e.startDate).getMonth()+1)+".")+" - "+e._s(new Date(e.endDate).getDate()+". "+(new Date(e.endDate).getMonth()+1)+".")+" ")])]):e._e()},N=[],O={props:{name:{type:String,default:""},startDate:{type:Number,default:0},endDate:{type:Number,default:null},scheduleStartDate:{type:Date,default:null},scheduleEndDate:{type:Date,default:null},background:{type:String,default:null},labelWidth:{type:Number,default:200},cellWidth:{type:Number,default:50}},computed:{valid:function(){return this.startDate&&this.endDate},cssClass:function(){return"classi"}},methods:{daysInDateRange:function(e,t){var a=864e5,n=new Date(e);n.setHours(0,0,0,0);var r=new Date(t);r.setHours(12,0,0,1);var s=r-n,l=Math.round(Math.abs(s/a));return s<0?-1*l:l},daysBeforeScheduleDateRange:function(e,t){var a=this.daysInDateRange(e,t)-1;return a<0?0:a},daysAfterScheduleDateRange:function(e,t){var a=this.daysInDateRange(e,t)-1;return a>0?0:a},isInsideScheduleView:function(e,t,a,n){var r=this.daysInDateRange(e,a)+this.daysInDateRange(a,n)>1,s=this.daysInDateRange(n,t)+this.daysInDateRange(a,n)>1;return r&&s}}},C=O,I=Object(m["a"])(C,M,N,!1,null,null,null),E=I.exports,R={components:{Occupation:E},props:{title:{type:String,default:""},dates:{type:Array,default:function(){return[]}},occupations:{type:Array,default:function(){return[]}},labelWidth:{type:Number,default:200},cellWidth:{type:Number,default:50}},computed:{cssClass:function(){return"classi"},scheduleStartDate:function(){return this.dates[0].date},scheduleEndDate:function(){return this.dates[this.dates.length-1].date}},methods:{getDayName:o,getMonthName:h}},j=R,A=Object(m["a"])(j,x,k,!1,null,null,null),P=A.exports,J={components:{DateWheel:v,HeadCell:W,Row:P},props:{renderDays:{type:Number,default:13},date:{type:Date,default:function(){return new Date}},calendarData:{type:Array,default:function(){return[]}}},data:function(){return{selectedDate:new Date,labelWidth:200,cellWidth:50,monthNames:c,monthIndex:this.date.getMonth()}},computed:{cssVars:function(){return{"--label-width":this.labelWidth+"px","--cell-width":this.cellWidth+"px"}},dates:function(){var e=[],t=new Date(this.selectedDate);e.push(new Date(t.setDate(t.getDate())));for(var a=1;a<this.renderDays;a++)e.push(new Date(t.setDate(t.getDate()+1)));return e}},methods:{getDayName:o,getMonthName:h,setSelectedDate:function(e){this.selectedDate=e},datesWithMarks:function(e,t){var a=[];return e.forEach((function(e){var n=null;t&&t.forEach((function(t){var a=new Date(t.date);a.getFullYear()===e.getFullYear()&&a.getMonth()===e.getMonth()&&a.getDate()===e.getDate()&&(n={id:t.id,name:t.name})})),a.push({date:e,marking:n})})),a}}},T=J,$=(a("e611"),Object(m["a"])(T,l,i,!1,null,null,null)),B=$.exports,F=(new Date).getTime(),H={name:"app",components:{Calendar:B},data:function(){return{data:[{id:1,name:"Something Beautiful",occupations:[{id:1,name:"Conference",startDate:F,endDate:F+f(2)},{id:2,name:"Holliday",startDate:F+f(2),endDate:F+f(6),background:"orange"},{id:3,name:"invalid dates",startDate:null,endDate:null,background:void 0}],marks:[{id:1,name:"Arrival",date:F+f(8)},{id:2,name:"Arrival",date:F+f(10)}]},{id:2,name:"Something else",occupations:[{id:1,name:"Lunchparty",startDate:F-f(8),endDate:F,background:"orange"},{id:2,name:"Work",startDate:F+f(1),endDate:F+f(3)}]},{id:3,name:"Super long",occupations:[{id:1,name:"Super Long Booking",startDate:F-f(33),endDate:F+f(33),background:"lightsalmon"}]}]}}},L=H,V=(a("034f"),Object(m["a"])(L,r,s,!1,null,null,null)),q=V.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(q)}}).$mount("#app")},6295:function(e,t,a){},"85ec":function(e,t,a){},bfb3:function(e,t,a){"use strict";var n=a("6295"),r=a.n(n);r.a},e611:function(e,t,a){"use strict";var n=a("0560"),r=a.n(n);r.a}});
//# sourceMappingURL=app.155d50f6.js.map