(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),u=(n(34),n(22)),i=n(23),s=n(26),l=n(24),m=n(6),h=n(27),f=(n(35),n(25)),d=n.n(f);function g(e){var t=e.id,n=e.source;return r.a.createElement("article",{id:t},r.a.createElement(d.a,{source:n}))}var k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={page:"general",general:"",church:"",combat:"",courtOffices:"",merchantry:"",navy:"",skills:"",townManagement:""},e.setPage=e.setPage.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("./markdown/General.md").then(function(e){return e.text()}).then(function(t){return e.setState({general:t})}),fetch("./markdown/Church.md").then(function(e){return e.text()}).then(function(t){return e.setState({church:t})}),fetch("./markdown/Combat.md").then(function(e){return e.text()}).then(function(t){return e.setState({combat:t})}),fetch("./markdown/Court-Offices.md").then(function(e){return e.text()}).then(function(t){return e.setState({courtOffices:t})}),fetch("./markdown/Merchantry.md").then(function(e){return e.text()}).then(function(t){return e.setState({merchantry:t})}),fetch("./markdown/Navy.md").then(function(e){return e.text()}).then(function(t){return e.setState({navy:t})}),fetch("./markdown/Skills.md").then(function(e){return e.text()}).then(function(t){return e.setState({skills:t})}),fetch("./markdown/Town-Management.md").then(function(e){return e.text()}).then(function(t){return e.setState({townManagement:t})})}},{key:"setPage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.page,a=t.general,c=t.church,o=t.combat,u=t.courtOffices,i=t.merchantry,s=t.navy,l=t.skills,m=t.townManagement;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("button",{onClick:function(){return e.setPage("general")}},"General"),r.a.createElement("button",{onClick:function(){return e.setPage("church")}},"Church"),r.a.createElement("button",{onClick:function(){return e.setPage("combat")}},"Combat"),r.a.createElement("button",{onClick:function(){return e.setPage("courtOffices")}},"Court Offices"),r.a.createElement("button",{onClick:function(){return e.setPage("merchantry")}},"Merchantry"),r.a.createElement("button",{onClick:function(){return e.setPage("navy")}},"Navy"),r.a.createElement("button",{onClick:function(){return e.setPage("skills")}},"Skills"),r.a.createElement("button",{onClick:function(){return e.setPage("townManagement")}},"Town Management")),"general"===n&&r.a.createElement(g,{id:"general",source:a}),"church"===n&&r.a.createElement(g,{id:"church",source:c}),"combat"===n&&r.a.createElement(g,{id:"combat",source:o}),"courtOffices"===n&&r.a.createElement(g,{id:"courtOffices",source:u}),"merchantry"===n&&r.a.createElement(g,{id:"merchantry",source:i}),"navy"===n&&r.a.createElement(g,{id:"navy",source:s}),"skills"===n&&r.a.createElement(g,{id:"skills",source:l}),"townManagement"===n&&r.a.createElement(g,{id:"townManagement",source:m}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,n){e.exports=n(118)},34:function(e,t,n){},35:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.5bbb51ee.chunk.js.map