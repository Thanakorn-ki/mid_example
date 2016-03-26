/* global describe, it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('Test total', function () {
  it('check sum equal 300', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
    .goto('http://localhost:5000')
    .click('.id0')
    .click('.id0')
    .click('.id1')
    .click('.submit')
      .evaluate(function () {
        return document.querySelector('.sum').innerHTML
      })
    expect(value).to.equal('300')
  })
})
