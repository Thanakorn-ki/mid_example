/* global describe, it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect

describe('Run test ', function () {
  it('test 1 check sum book equal 300', function * () {
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

  it('test 2 Test check discount equal 80 buy harry 1 (3) , harry 2 (2) and harry 3 (1)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.id1')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('80')
  })

  it('test 3 Test check discount equal 20 buy harry 1 (2) and harry 2 (1) ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('20')
  })

  it('test 4 Test check discount equal 80 buy harry 1 (3) , harry 2 (2) and harry 3 (1)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.id1')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('80')
  })

  it('test 5 Test check discount equal 60 buy harry 1 (3)  and harry 3 (3)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.id1')
      .click('.id1')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('60')
  })

  it('test 6 Test check discount equal 60 buy harry 1 (1) , harry 2 (1) and harry 3 (1)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id1')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('60')
  })

  it('test 7 Test check discount equal 0 buy harry 1 (3)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id0')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.discount').innerHTML
      })
    expect(value).to.equal('0')
  })

  it('test 8 Test check Total  equal 240 buy harry 1 (1) , harry 2 (1) and harry 3 (1)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id1')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.sumall').innerHTML
      })
    expect(value).to.equal('240')
  })

  it('test 9 Test check Total  equal 480 buy harry 1 (2) , harry 2 (2) and harry 3 (2)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.id1')
      .click('.id2')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.sumall').innerHTML
      })
    expect(value).to.equal('480')
  })

  it('test 10 Test check Total equal 600 buy harry 1 (3) , harry 2 (1) and harry 3 (3)', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var value = yield nightmare
      .goto('http://localhost:5000')
      .click('.id0')
      .click('.id0')
      .click('.id0')
      .click('.id1')
      .click('.id2')
      .click('.id2')
      .click('.id2')
      .click('.submit')
      .evaluate(function () {
        return document.querySelector('.sumall').innerHTML
      })
    expect(value).to.equal('600')
  })
})
