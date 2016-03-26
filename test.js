var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:5000')

  .click('.id0')
  .wait(3600)
  .click('.id0')
  .wait(3600)
  .click('.id1')
  .wait(3600)
  .click('.submit')
  .wait(3600)
  .evaluate(function () {
    return document.querySelector('.sum').innerHTML
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
