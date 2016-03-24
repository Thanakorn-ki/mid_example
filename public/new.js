angular.module('midones', [])
    .controller('midonecontrons', function($scope) {
        $scope.data = [
            { id: 1, name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์', pic: 'images/1.jpg', price: 100, quantity: 0, check: true },
            { id: 2, name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ', pic: 'images/2.jpg', price: 100, quantity: 0, check: true },
            { id: 3, name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน', pic: 'images/3.jpg', price: 100, quantity: 0, check: true },
            { id: 4, name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี', pic: 'images/4.jpg', price: 100, quantity: 0, check: true },
            { id: 5, name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์', pic: 'images/5.jpg', price: 100, quantity: 0, check: true },
            { id: 6, name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม', pic: 'images/6.jpg', price: 100, quantity: 0, check: true },
            { id: 7, name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต', pic: 'images/7.jpg', price: 100, quantity: 0, check: true }
        ]
        $scope.cartdata = []
        $scope.num = 0
        $scope.booknum = 0
        $scope.sell = 0
        var tmp = []
        $scope.cart = function(id, index) {

            if ($scope.checkadd(id)) {
                var index_cart = $scope.checkindex(id)
                $scope.cartdata.splice(index_cart, 1, { id: id, quantity: $scope.cartdata[index_cart].quantity += 1 })
                $scope.num++

            } else {
                $scope.cartdata.push({ id: id, quantity: 1 })
                $scope.num++
            }

            ///sort 
            $scope.cartdata.sort(function(a, b) { // เรียงค่ามาก > น้อย
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
            console.log(quantity);
            $scope.callsell(quantity)
        }

        $scope.checkadd = function(id) {
            for (var ch_data = 0; ch_data < $scope.cartdata.length; ch_data++) {
                if ($scope.cartdata[ch_data].id === id) {
                    return true
                }

            }
        }

        $scope.checkindex = function(id) {
            for (var ch_index = 0; ch_index < $scope.cartdata.length; ch_index++) {
                if ($scope.cartdata[ch_index].id === id) {
                    return ch_index
                }
            }
        }

        $scope.callsell = function(amount) {
           
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
                        break
                    }
                }
                // ///// เงื่อนไขลดราคา
                if (countlist === 1) {
                    // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้
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
                // // ลบ จำนวนออกทีละ 1
                for (var o = 0; o < amount.length; o++) {
                    if (amount[o] > 0) {
                        amount[o] -= 1
                        countlist = 0 // รีค่าใหม่
                    }
                }
            } while (exit !== 1)

            console.log($scope.sell)
        }

    })
