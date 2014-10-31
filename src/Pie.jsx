/**
 * @jsx React.DOM
 */

var React = require('react');
var d3 = require('d3');

var Pie = React.createClass({
  propTypes: {
    data : React.PropTypes.array.isRequired,
    colorRange: React.PropTypes.array.isRequired
  }, 

  getInitialState() {
    return {
      data: this.props.data,
      colorRange: this.props.colorRange,
      arcRadius: Math.min(this.props.width, this.props.height) / 2,
    };
  },
  
  _me: null,

  _color() {
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

  _arc() {
    return d3.svg.arc()
      .outerRadius(this.state.arcRadius - 10)
      .innerRadius(0);
  },

  _pie(data) {
    return d3.layout.pie()
      .sort(null)
      .value(function(d) { return d.quantity; }).call(null,data);
  },

  _renderGraph () {
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

  componentDidMount () {
    this._renderGraph();
  },

  shouldComponentUpdate (nextProps) {
    this._renderGraph();
    return false;
  },

  render() {
    return (
      <svg width="100%" height={this.props.height}></svg>
    );
  }

});

module.exports = Pie;
