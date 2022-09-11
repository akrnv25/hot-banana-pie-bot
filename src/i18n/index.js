const isNil = require('../utilities/is-nil');
const ru = require('./langs/ru.json');
const en = require('./langs/en.json');

module.exports = key => {
  return !isNil(ru[key] && !isNil(en[key])) ? `${ru[key]} / ${en[key]}` : '';
};
