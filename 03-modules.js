// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { add } = require('lodash');
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

