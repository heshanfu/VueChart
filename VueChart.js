(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('vue'),require('chart.js')):'function'==typeof define&&define.amd?define(['vue','chart.js'],b):a.VueChart=b(a.Vue,a.Chart)})(this,function(a,b){'use strict';a=a&&a.hasOwnProperty('default')?a['default']:a,b=b&&b.hasOwnProperty('default')?b['default']:b;var c={name:'VueChart',render:function(a){return a('canvas')},props:{type:String,data:Object,options:Object,updateConfig:Object},mounted:function(){this.createChart()},watch:{type:function(){this.recreateChart()},data:{handler:function(a){this.setChartData(a),this.updateChart()},deep:!0},options:{handler:function(){this.recreateChart()},deep:!0}},methods:{recreateChart:function(){this.destroyChart(),this.createChart()},createChart:function(){this.$el&&(this.chart=new b(this.$el,{type:this.type,data:this.data,options:this.options}))},destroyChart:function(){this.chart&&this.chart.destroy()},setChartData:function(a){this.chart&&(this.chart.data=a)},updateChart:function(){this.chart&&this.chart.update(this.updateConfig)}}};return a.component(c.name,c),c});
