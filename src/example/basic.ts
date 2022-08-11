const { parse, find } = require('abstract-syntax-tree')
const source = 'a*(b+c)'
const tree = parse(source)
const node = find(tree, '+')
console.log(find(tree, 'Literal')) // [ { type: 'Literal', value: 42 } ]
