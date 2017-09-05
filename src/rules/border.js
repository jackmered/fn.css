exports.border = {
	prefix: 'bd',
  declaration: '\
    border-style:solid;\
    border-width:1px\
  '
}

exports.borderTop = {
  prefix: 'bdt',
  declaration: '\
    border-top-style:solid;\
    border-top-width:1px\
  '
}

exports.borderRight = {
  prefix: 'bdr',
  declaration: '\
    border-right-style:solid;\
    border-right-width:1px\
  '
}

exports.borderBottom = {
  prefix: 'bdb',
  declaration: '\
    border-bottom-style:solid;\
    border-bottom-width:1px\
  '  
}

exports.borderLeft = {
  prefix: 'bdl',
  declaration: '\
    border-left-style:solid;\
    border-left-width:1px\
  '
}

exports.borderWidth = {
  option: 'spacing',
  prefix: 'bdw',
  prop: 'border-width',
  unit: true,
  transform: function (val) {
    return val / 4
  } 
}

exports.borderRadius = {
  prefix: 'bdrd',
  prop: 'border-radius',
  unit: true,
  vals: [
    '0.125',
    '0.25',
    '0.5',
    '0.75',
    '1'
  ]
}

exports.borderRadius100 = {
  prefix: 'bdrd',
  prop: 'border-radius',
  unit: '%',
  vals: [
    '100'
  ] 
}