exports.screenReader = {
  prefix: 'sr',
  declaration: '\
    position:absolute;\
    width:1px;\
    height:1px;\
    padding:0;\
    overflow:hidden;\
    clip: rect(0, 0, 0, 0);\
    white-space:nowrap;\
    -webkit-clip-path:inset(50%);\
    clip-path:inset(50%);\
    border:0\
  '	
}

exports.screenReaderFocus = {
  prefix: 'srf:active,.srf:focus',
  declaration: '\
    position:static;\
    width:auto;\
    height:auto;\
    overflow:visible;\
    overflow: hidden;\
    clip:auto;\
    white-space:normal;\
    -webkit-clip-path:none;\
    clip-path:none\
  '	
}