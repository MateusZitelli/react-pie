(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "d3"], factory);
	else if(typeof exports === 'object')
		exports["Pie"] = factory(require("react"), require("d3"));
	else
		root["Pie"] = factory(root["React"], root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/Pie.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	var React = __webpack_require__(/*! react */ 1);
	var d3 = __webpack_require__(/*! d3 */ 2);
	
	var Pie = React.createClass({displayName: 'Pie',
	  propTypes: {
	    data : React.PropTypes.array.isRequired,
	    colorRange: React.PropTypes.array.isRequired
	  }, 
	
	  getInitialState:function() {
	    return {
	      data: this.props.data,
	      colorRange: this.props.colorRange,
	      arcRadius: Math.min(this.props.width, this.props.height) / 2,
	    };
	  },
	  
	  _me: null,
	
	  _color:function() {
	    var rangeData = [];
	    var dataLength = this.state.data.length;
	    var colorLength = this.state.colorRange.length;
	    for(var i = 0; i < colorLength; i++){
	      rangeData.push(dataLength * i / colorLength);
	    }
	    return d3.scale.linear()
	    .domain(rangeData)
	      .range(this.state.colorRange); 
	  },
	
	  _arc:function() {
	    return d3.svg.arc()
	      .outerRadius(this.state.arcRadius - 10)
	      .innerRadius(0);
	  },
	
	  _pie:function(data) {
	    return d3.layout.pie()
	      .sort(null)
	      .value(function(d) { return d.quantity; }).call(null,data);
	  },
	
	  _renderGraph:function () {
	    var _this = this;
	    // Based in http://bl.ocks.org/mbostock/3887235
	    if(!this._me){ 
	      this._me = d3.select(this.getDOMNode()).append('g')
	      .attr("transform", "translate(" +
	        this.props.width / 2 + "," + this.props.height / 2 + ")"
	      ); 
	    }
	
	    var g = this._me.selectAll(".arc")
	      .data(this._pie(this.state.data))
	      .enter().append("g")
	      .attr("class", "arc");
	
	    g.append("path")
	      .attr("d", this._arc())
	      .style("fill", function(d, i) { 
	        return _this._color().call(null, i);
	      });
	
	    g.append("text")
	      .attr("transform", function(d) {
	        return "translate(" + _this._arc().centroid(d) + ")";
	      })
	      .attr("dy", ".35em")
	      .style("text-anchor", "middle")
	      .text(function(d) { return d.data.text; });
	  },
	
	  componentDidMount:function () {
	    this._renderGraph();
	  },
	
	  shouldComponentUpdate:function (nextProps) {
	    this._renderGraph();
	    return false;
	  },
	
	  render:function() {
	    return (
	      React.DOM.svg({width: "100%", height: this.props.height})
	    );
	  }
	
	});
	
	module.exports = Pie;


/***/ },
/* 1 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!**************************************************************************!*\
  !*** external {"root":"d3","commonjs":"d3","commonjs2":"d3","amd":"d3"} ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});

//# sourceMappingURL=react-pie.js.map