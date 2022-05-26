const React = require('react')

function TiktokLogo(props, svgRef) {
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
    ) /*#__PURE__*/,
    React.createElement('path', {
      d: 'M20.0001375,9.9999725 C20.0001375,15.5228231 15.5229421,20 10.0000687,20 C4.47719539,20 0,15.5228231 0,9.9999725 C0,4.47712194 4.47719539,-5.49920399e-05 10.0000687,-5.49920399e-05 C15.5229421,-5.49920399e-05 20.0001375,4.47712194 20.0001375,9.9999725',
      fill: '#000000',
    }),
    React.createElement('path', {
      d: 'M10.9738718,2.70214386 C11.6293796,2.69032058 12.2851624,2.67849729 12.9406702,2.666674 C13.0726517,3.13795578 13.3278158,3.80280954 13.8441932,4.46243906 C14.976209,5.90817979 16.5561368,6.29587367 17.0755388,6.40008359 C17.0703145,7.28820503 17.0650902,8.17632648 17.059591,9.06444792 C16.6380753,9.05894872 16.1101495,9.01110564 15.5214573,8.85822777 C14.5478192,8.60526439 13.8224712,8.17192711 13.3646606,7.84334968 C13.3668603,8.11611019 13.36906,8.52250137 13.3693349,9.01632989 C13.3698849,9.67403468 13.3665853,10.0474306 13.3646606,10.4439232 C13.3539371,12.8951934 13.4147036,13.3686749 13.1991339,14.3379096 C13.1298436,14.6499894 13.0951985,14.8058918 13.0160096,15.0269598 C12.6019179,16.1812428 11.6997697,17.1048341 10.7800241,17.595913 C8.9336587,18.5819203 6.32207596,18.1958761 5.07100189,16.7080665 C4.14190754,15.6032764 3.94036089,13.8644281 3.92083863,13.4225671 C3.91836398,13.3667502 3.91698917,13.3112082 3.91698917,13.3112082 C3.90654064,12.9199398 3.93321189,12.2924807 4.17077848,11.5349653 C4.35665235,10.9418762 4.96844131,9.70235558 6.34324798,8.95033944 C7.55665235,8.28658552 8.71533941,8.36357437 9.14647878,8.41416705 C9.13603025,9.31273698 9.12530675,10.2113069 9.11485822,11.1101518 C9.06014092,11.0961288 7.74362605,10.784324 6.87887266,11.6809692 C6.05618835,12.5338957 6.15737412,13.9469162 6.79940883,14.6623626 C7.11066506,15.0090874 7.50303489,15.1388686 7.77057226,15.2301554 C7.89100533,15.2711245 8.86656814,15.5917281 9.68925245,15.1982601 C10.8550885,14.6409157 10.9991682,13.3318302 11.0054924,13.2636401 C10.9950438,9.74304969 10.9843203,6.22273426 10.9738718,2.70214386',
      fill: '#FD2854',
    }),
    React.createElement('path', {
      d: 'M9.91664547,2.02288219 C10.8080701,2.01765794 11.6997697,2.01270866 12.5911944,2.00748442 C12.5900945,2.26072276 12.6324386,2.46419331 12.6758825,2.61019717 C12.7262004,2.77984762 12.7864169,2.90028018 12.8892524,3.10595041 C12.8980512,3.12382283 13.0341571,3.39465862 13.1829112,3.63057447 C13.3742842,3.93358061 13.7380581,4.51017215 14.2690084,4.93911006 C14.9665853,5.50195359 15.7675477,5.66115555 16.270452,5.70762382 C16.2836501,6.34030724 16.2968483,6.97299066 16.3100464,7.60567408 C15.7603987,7.69338638 14.7463413,7.77697428 13.5799553,7.39890401 C12.8205121,7.15253967 12.2502423,6.79261677 11.8743702,6.50885784 C12.1097371,7.95377369 12.2485925,9.90489127 11.8743702,12.1474667 C11.5081217,14.341924 11.278529,15.7172749 10.0538512,16.5968726 C8.35019075,17.8207205 5.91155869,17.2284562 5.04268087,16.6815603 C4.60054305,16.4030257 4.21807183,16.0260552 4.21807183,16.0260552 C3.76493556,15.5792449 3.50757175,15.1525067 3.41463482,14.9900052 C3.2966764,14.783785 2.8330916,13.934433 2.80147104,12.7276327 C2.79074755,12.3162922 2.82401787,11.6297166 3.11355216,10.8557036 C3.25735693,10.4713093 3.79298161,9.10365725 5.28602165,8.27107776 C6.67182677,7.49788968 8.01226328,7.67138957 8.42058086,7.74012962 C8.4082076,8.40525834 8.39583434,9.07038706 8.38346108,9.73579074 C8.06175632,9.66017669 7.55940196,9.58208799 6.95531191,9.65605229 C6.56899124,9.70334544 6.19366902,9.74788899 5.79360027,9.99947758 C5.00446125,10.4957807 4.81446297,11.295365 4.78201753,11.4424687 C4.72207596,11.6481389 4.66460904,11.9632433 4.73114968,12.3305901 C4.74627256,12.4152779 4.86038151,13.0034178 5.33358996,13.4249317 C5.49251761,13.5662613 5.56070803,13.5723104 5.79360027,13.789529 C5.99872143,13.9811762 6.04903935,14.0735629 6.23766283,14.2335897 C6.23766283,14.2335897 6.44663344,14.411214 6.70454717,14.5462194 C7.17445609,14.7925838 8.01501289,14.818705 8.63202612,14.5189984 C9.48495618,14.1049083 9.95019075,13.1510714 9.94826603,12.5843784 C9.93781749,9.06378802 9.927094,5.54347258 9.91664547,2.02288219',
      fill: '#24F6FA',
    }),
    React.createElement('path', {
      d: 'M10.6919539,2.71094259 C11.3587352,2.6977445 12.0252415,2.68454641 12.6920227,2.67107336 C12.9062176,3.1951475 13.3593538,4.10471584 14.2692009,4.93894509 C15.0203953,5.62772039 15.7842378,5.99066785 16.2802681,6.18039039 C16.2929163,6.90656028 16.3052896,7.6324552 16.3179378,8.35862509 C15.8639766,8.3751227 15.1614504,8.3468018 14.3552638,8.08696441 C13.5771232,7.83592575 13.0054786,7.46747908 12.6496786,7.19691825 L12.6496786,12.8355271 C12.6362055,13.0508209 12.4473071,15.4330761 10.2954597,16.7454611 C8.16450937,18.045198 5.98296615,17.1524022 5.77757003,17.0644149 C5.65301255,17.0231709 5.44871627,16.9456321 5.22269806,16.8059523 C3.70381165,15.868613 3.64359512,13.6362112 3.63507132,13.3200069 C3.62462279,12.9287386 3.65129404,12.3012794 3.88886063,11.543764 C4.10663001,10.8486647 4.75691356,9.67678429 6.06133013,8.95913816 C7.02204502,8.4303897 7.93546658,8.37484774 8.40867503,8.38117183 C8.39795154,9.06004856 8.38722805,9.73892529 8.37677952,10.418077 C8.23874893,10.3806824 7.39406771,10.1684131 6.56890875,10.687538 C5.77976972,11.1838411 5.58977144,11.9834254 5.557326,12.1305291 C5.51690668,12.3155773 5.43441828,12.6254575 5.50645815,13.0186506 C5.59774532,13.5179783 5.87188177,13.8424313 6.00496305,13.9961341 C6.3239182,14.3648557 6.69126654,14.5408302 6.70144011,14.5446797 C6.70226499,14.5449546 6.69924042,14.5430299 6.69924042,14.5430299 C6.69924042,14.5430299 6.7000653,14.5435798 6.70144011,14.5446797 C6.70391476,14.5463294 6.70583949,14.5479792 6.70583949,14.5479792 C6.82544767,14.7234038 7.07181303,15.0316342 7.48865441,15.2389542 C8.18623131,15.585679 8.9379756,15.4317013 9.40733459,15.2070588 C10.5731706,14.6497145 10.7172504,13.3406289 10.7235745,13.2724388 C10.713126,9.75184842 10.7024025,6.23153299 10.6919539,2.71094259',
      fill: '#FFFFFF',
    })
  )
}

const ForwardRef = React.forwardRef(TiktokLogo)
module.exports = ForwardRef
