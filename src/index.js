const postcss = require('postcss');

let rtlt = (str) => (str || '').replace(/\\/g, '/').replace(/\/\//g, '/')

module.exports = postcss.plugin('postcss-global-namespace', opts => {

  opts = opts || {};

  return (root) => {
    root.walk((node) => {
      let selectorArr = (node.selector || '').split(',')
      return node.selector = ((selectorArr || []).map((itm) => {
        if (itm.match(/^(\s*)(html|body)(\s*)$/)) {
          return itm
        }

        if (typeof opts.getNameSpace == 'function') {
          let nameSpace = opts.getNameSpace(rtlt(node.source.input.file))
          return (nameSpace ? nameSpace + ' ' : '') + itm
        } else {
          return itm
        }
      }).join(','))
    })

  };

})












