(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,r){t.exports=r(28)},26:function(t,e,r){},27:function(t,e,r){},28:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),a=r(3),c=r.n(a),s=r(5),u=r(4),o="TOGGLE_START_STOP_BUTTON",l={currentHr:0,currentMin:0,currentSec:0,currentMillisec:0,intervalId:"",startStopButton:"Start"},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return function(t,e){return Object.assign({},t,{startStopButton:e.payload})}(t,e);default:return t}},p=Object(u.b)(S),m=(r(26),r(27),r(12)),h=r(13),v=r(15),g=r(14),d=r(16);var f=function(t){function e(){var t;return Object(m.a)(this,e),(t=Object(v.a)(this,Object(g.a)(e).call(this))).props={},t.state={currentHr:0,currentMin:0,currentSec:0,currentMillisec:0,intervalId:"",startStopButton:"Start"},t}return Object(d.a)(e,t),Object(h.a)(e,[{key:"timerButton",value:function(){"Start"===this.props.startStopButton?(this.props.toggleStartStopButton("Stop"),this.startTimer()):"Stop"===this.props.startStopButton&&(this.props.toggleStartStopButton("Start"),this.stopTimer())}},{key:"startTimer",value:function(){var t=this,e=setInterval(function(){var e=t.state.currentMillisec+1;if(t.setState({currentMillisec:e}),100===t.state.currentMillisec){t.setState({currentMillisec:0});var r=t.state.currentSec+1;t.setState({currentSec:r})}if(60===t.state.currentSec){t.setState({currentSec:0});var n=t.state.currentMin+1;t.setState({currentMin:n})}if(60===t.state.currentMin){t.setState({currentMin:0});var i=t.state.currentHr+1;t.setState({currentHr:i})}},10);this.setState({intervalId:e})}},{key:"stopTimer",value:function(){clearInterval(this.state.intervalId);var t=this.state.currentMillisec;this.setState({currentMillisec:t})}},{key:"resetTimer",value:function(){this.setState({currentHr:0}),this.setState({currentMin:0}),this.setState({currentSec:0}),this.setState({currentMillisec:0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(M,{hr:this.state.currentHr,min:this.state.currentMin,sec:this.state.currentSec,milliSec:this.state.currentMillisec}),i.a.createElement("button",{onClick:this.timerButton.bind(this)},this.state.startStopButton),i.a.createElement("button",{onClick:this.resetTimer.bind(this)},"Reset"))}}]),e}(n.Component),M=function(t){return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("span",null,t.hr.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})," ")," :",i.a.createElement("span",null,t.min.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})," ")," :",i.a.createElement("span",null," ",t.sec.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}))," :",i.a.createElement("span",null," ",t.milliSec.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})," ")))},b=Object(s.b)(function(t){return{currentHr:t.currentHr,currentMin:t.currentMin,currentSec:t.currentSec,currentMillisec:t.currentMillisec,intervalId:t.intervalId,startStopButton:t.startStopButton}},function(t){return{toggleStartStopButton:function(e){t(function(t){return{type:o,payload:t}}(e))}}})(f);var B=function(){return i.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(s.a,{store:p},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.49720815.chunk.js.map