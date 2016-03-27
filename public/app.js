/* global angular */
angular.module('midone', [])
  .controller('midonecontron', function ($scope) {
    $scope.cart = 0
    $scope.data = [
      { id: 1, name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์', pic: 'images/1.jpg', price: 100, quantity: 1 },
      { id: 2, name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ', pic: 'images/2.jpg', price: 100, quantity: 1 },
      { id: 3, name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน', pic: 'images/3.jpg', price: 100, quantity: 1 },
      { id: 4, name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี', pic: 'images/4.jpg', price: 100, quantity: 1 },
      { id: 5, name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์', pic: 'images/5.jpg', price: 100, quantity: 1 },
      { id: 6, name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม', pic: 'images/6.jpg', price: 100, quantity: 1 },
      { id: 7, name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต', pic: 'images/7.jpg', price: 100, quantity: 1 }]
    $scope.cartdata = []
    $scope.num = 0
    $scope.show = false
    $scope.booknum = 0
    $scope.sell = 0
    $scope.tmp = []

    $scope.cart = function (id, obj) {
      if ($scope.checkadd(id)) {
        var index_cart = $scope.checkindex(id)
        $scope.cartdata[index_cart].quantity++
        $scope.num++
      } else {
        $scope.cartdata.push({
          id: obj.id,
          name: obj.name,
          pic: obj.pic,
          price: obj.price,
          quantity: obj.quantity
        })
        $scope.num++
        $scope.show = true
      }

      $scope.cartdata.sort(function (a, b) { // เรียงค่ามาก > น้อย
        if (a.quantity > b.quantity) return -1
        if (a.quantity < b.quantity) return 1
        return 0
      })
      var quantity = []
      for (var i = 0; i < $scope.cartdata.length; i++) {
        if (quantity !== null) {
          quantity.push($scope.cartdata[i].quantity)
        }
      }
      $scope.callsell(quantity)
    }

    $scope.recal = function () {
      var quantity = []
      for (var i = 0; i < $scope.cartdata.length; i++) {
        if (quantity !== null) {
          quantity.push($scope.cartdata[i].quantity)
        }
      }
      var temp = 0
      for (var j = 0; j < quantity.length; j++) {
        temp += quantity[j]
      }
      $scope.num = temp
      $scope.callsell(quantity)
      return temp
    }

    $scope.delete = function (index) {
      $scope.cartdata.splice(index, 1)
      var check = $scope.recal()
      console.log(check)
      if (check === 0) {
        $scope.show = false
      }
    }

    $scope.checkadd = function (id) {
      for (var ch_data = 0; ch_data < $scope.cartdata.length; ch_data++) {
        if ($scope.cartdata[ch_data].id === id) {
          return true
        }
      }
    }

    $scope.checkindex = function (id) {
      for (var ch_index = 0; ch_index < $scope.cartdata.length; ch_index++) {
        if ($scope.cartdata[ch_index].id === id) {
          return ch_index
        }
      }
    }
    $scope.plus = function (index) {
      $scope.cartdata[index].quantity += 1
      $scope.recal()
    }
    $scope.del = function (index) {
      if ($scope.cartdata[index].quantity > 1) {
        $scope.cartdata[index].quantity -= 1
        $scope.recal()
      } else if ($scope.cartdata[index].quantity === 0) {
        return false
      }
    }
    $scope.callsell = function (amount) {
      $scope.sell = 0
      var countlist = 0 // เช็ครอบเข้า เงื่อนไขลดราคา
      var exit = 0
      do {
        // /////// for เช็ค จำนวนเล่มหนังสือ
        for (var i = 0; i < amount.length; i++) {
          if (amount[i] !== 0) {
            countlist += 1
          }
          if (amount[i] === 0) {
            countlist += 0
          }
        }
        if (countlist === 1) {
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }
        for (var o = 0; o < amount.length; o++) {
          if (amount[o] > 0) {
            amount[o] -= 1
            countlist = 0 // รีค่าใหม่
          }
        }
      } while (exit !== 1)
    }
  })
