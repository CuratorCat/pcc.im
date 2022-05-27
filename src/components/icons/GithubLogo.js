const React = require("react");

function GithubLogo(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10,0 C4.47753906,0 0,4.36119417 0,9.74015884 C0,14.0442818 2.865,17.6944634 6.83898437,18.9821238 C7.33886719,19.0713071 7.52136719,18.7704846 7.52136719,18.513664 C7.52136719,18.2818025 7.51220703,17.5137378 7.50732422,16.7004725 C4.7265625,17.2890102 4.13878906,15.5519138 4.13878906,15.5519138 C3.68347656,14.4271347 3.02855469,14.1275107 3.02855469,14.1275107 C2.11974609,13.5235067 3.0975,13.5353965 3.0975,13.5353965 C4.10152344,13.6031591 4.63011719,14.5388992 4.63011719,14.5388992 C5.52246094,16.0275075 6.97142578,15.5970952 7.54027344,15.3474085 C7.63117187,14.7196248 7.88996094,14.2892125 8.17503906,14.0466597 C5.95519531,13.8005495 3.62,12.9646841 3.62,9.23245306 C3.62,8.16830266 4.01001953,7.30036319 4.6484375,6.61847598 C4.54650391,6.37116726 4.20226562,5.38014414 4.74730469,4.03957869 C4.74730469,4.03957869 5.5859375,3.77800216 7.49753906,5.03832544 C8.29464844,4.82134058 9.14976563,4.714332 9.99998047,4.71075553 C10.8495898,4.714332 11.705293,4.82252005 12.5036523,5.03950492 C14.4116211,3.77800216 15.2514648,4.04075816 15.2514648,4.04075816 C15.7983398,5.38252211 15.4541016,6.37234673 15.3515625,6.61847598 C15.9924219,7.30036319 16.3793945,8.16832168 16.3793945,9.23245306 C16.3793945,12.974196 14.0405273,13.7981525 11.8127539,14.0395258 C12.1728711,14.3415278 12.4914648,14.933642 12.4914648,15.8420259 C12.4914648,17.1439732 12.4780273,18.1938367 12.4780273,18.5148625 C12.4780273,18.774061 12.6599023,19.0772425 13.1665039,18.9821238 C17.1374609,17.6920854 20,14.0419038 20,9.74015884 C20,4.36119417 15.5224609,0 10,0 Z"
  }));
}

const ForwardRef = React.forwardRef(GithubLogo);
module.exports = ForwardRef;