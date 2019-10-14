const postcss = require('postcss')
const namespace = require('../src')

describe('namespace', () => {

  it('should add Prefix .a', function () {
    let rules = `.b { height:10px; }`
    let expected = `.a .b { height:10px; }`
    let processed = postcss(namespace({
      getNameSpace () {
        return `.a`
      },
    })).process(rules).css

    expect(processed).toBe(expected)

  })

  it('media should add Prefix .a', () => {
    const expected1 = `@media screen and(min-width: 1440px){ .rule { font-size: 16em } }`
    const expected2 = `@media screen and(min-width: 1440px){ .a .rule { font-size: 16em } }`

    const processed = postcss(namespace({
      getNameSpace () {
        return `.a`
      },
    })).process(expected1).css
    expect(processed).toBe(expected2)
  })


})
