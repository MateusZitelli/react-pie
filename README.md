#React-pie
> A simple Pie Chart component in React.js

##Usage
The usage is very simple seeing that this is a very small component,
you just need to pass the data
Seeing that this is a very simple component a example will clarify 
```javascript
var data = [
  { text: '< 6', quantity: 2000 },
  { text: '6-10', quantity: 2500 },
  { text: '6-10', quantity: 3000 },
  { text: '11-15', quantity: 4000 },
  { text: '16-20', quantity: 4000 },
  { text: '21-25', quantity: 5000 },
  { text: '26-30', quantity: 10000 },
  { text: '31-35', quantity: 3000 },
  { text: '36-40', quantity: 7000 },
  { text: '> 40', quantity: 2000 }
];

var colorRange = ["#0b64a0", "#5098d8", "#80b2e0", "#afcfef", "#d4e6f9", 
  "#fcedd6", "#f7e3bf", "#fcce65", "#fec92d", "#f4b425"];

var Index = React.createClass({

  render: function() {
    return (
      <Pie colorRange={colorRange} data={data} width={500} height={500} />
    );
  }

});
```
