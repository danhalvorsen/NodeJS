const { parse, find } = require('abstract-syntax-tree')
const source = 'a*(b+c)'
const tree = parse(source)
console.log(find(tree, 'Literal')) // [ { type: 'Literal', value: 42 } ]
console.log("Hello World");