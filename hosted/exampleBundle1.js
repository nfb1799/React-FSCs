"use strict";

//React components have to start with capital
//FSC - Functional Stateless Component
var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React.createElement("div", null, "Hello World!");
};

var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.getElementById('app'));
};

window.onload = init;
