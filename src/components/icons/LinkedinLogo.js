const React = require("react");

function LinkedinLogo(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.4179383,0.29934207 C17.7763067,1.63513409 21.0362037,7.06159919 19.7008682,12.4187515 C18.3649245,17.7765117 12.9384516,21.0360388 7.58008324,19.7008548 C2.22414718,18.3650628 -1.03696603,12.9385977 0.299585682,7.58205343 C1.63492124,2.22368515 7.06139415,-1.03644995 12.4179383,0.29934207 Z M7.23694131,8.32034204 L5.16439039,8.32034204 L5.16439039,15 L7.23694131,15 L7.23694131,8.32034204 Z M12.5145554,8.1541534 C11.7658123,8.12635923 11.0594332,8.48565117 10.6390051,9.09802745 L10.5533789,9.23307584 L10.5255696,9.23307584 L10.5255696,8.32034204 L8.53795367,8.32034204 L8.53795367,14.9997255 L10.6084497,14.9997255 L10.6084497,11.6954398 C10.6084497,10.8241502 10.773388,9.98030717 11.8517885,9.98030717 C12.6490815,9.98030717 12.8561105,10.5411166 12.9097943,11.1482807 L12.9226087,11.3516798 L12.9283988,11.6539544 L12.928545,15 L14.9990411,15 L15,11.3357532 C15,9.53690874 14.6129978,8.1541534 12.5145554,8.1541534 Z M6.20128231,5 C5.5378304,5.00013731 4.99986309,5.53918683 5,6.20394139 C5.00013707,6.86855871 5.53824137,7.407471 6.20183028,7.40733385 C6.86541919,7.40719654 7.40324951,6.86814701 7.40311259,6.20339246 C7.40297552,5.5386379 6.86487122,4.99986285 6.20128231,5 Z"
  }));
}

const ForwardRef = React.forwardRef(LinkedinLogo);
module.exports = ForwardRef;