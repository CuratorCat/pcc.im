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
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <circle id="Oval" fill="#FFFFFF" cx="10" cy="10" r="10"></circle>
      <g transform="translate(5.000000, 2.000000)">
          <polygon id="Fill-4" fill="#63688F" points="4.9986659 0 4.9986659 5.91456389 9.99667569 8.14835191"></polygon>
          <polygon id="Fill-6" fill="#8A93B2" points="4.9986659 0 1.45802987e-05 8.14835191 4.9986659 5.91456389"></polygon>
          <polygon id="Fill-8" fill="#63688F" points="4.9986659 11.9811532 4.9986659 16 10 9.07921504"></polygon>
          <polygon id="Fill-10" fill="#8A93B2" points="4.9986659 15.9999883 4.9986659 11.9804999 1.45802987e-05 9.07923254"></polygon>
          <polygon id="Fill-12" fill="#464A76" points="4.9986659 11.0509609 9.99667569 8.14835191 4.9986659 5.91590555"></polygon>
          <polygon id="Fill-14" fill="#63688F" points="0 8.14835774 4.99865132 11.0509668 4.99865132 5.91588222"></polygon>
      </g>
    </g>
    
  )
}

const ForwardRef = React.forwardRef(EthereumLogo)
module.exports = ForwardRef
