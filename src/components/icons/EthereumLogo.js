const React = require('react')

function EthereumLogo(props, svgRef) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
      },
      props
    ),
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle id="Oval" fill="#FFFFFF00" cx="10" cy="10" r="10"></circle>
      <polygon id="Fill-4" fill="#63688F" points="10.3735045 0.999994669 10.3735045 7.65250293 15.9962725 10.1649947"></polygon>
      <polygon id="Fill-6" fill="#8A93B2" points="10.3735045 0.999994669 4.75001487 10.1649947 10.3735045 7.65250293"></polygon>
      <polygon id="Fill-8" fill="#63688F" points="10.3735045 14.4760045 10.3735045 18.996272 16.0000123 11.2119992"></polygon>
      <polygon id="Fill-10" fill="#8A93B2" points="10.3735045 18.9962589 10.3735045 14.4752696 4.75001487 11.2120189"></polygon>
      <polygon id="Fill-12" fill="#464A76" points="10.3735045 13.4297545 15.9962725 10.1649947 10.3735045 7.654012"></polygon>
      <polygon id="Fill-14" fill="#63688F" points="4.74999846 10.1650013 10.3734881 13.4297611 10.3734881 7.65398575"></polygon>
    </g>
  )
}

const ForwardRef = React.forwardRef(EthereumLogo)
module.exports = ForwardRef
