angular.module('midone', [])
    .controller('midonecontron', function($scope) {
        $scope.cart = 0
        $scope.data = [
            { id: 1, name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์', pic: 'images/1.jpg', price: 100, quantity: 0 },
            { id: 2, name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ', pic: 'images/2.jpg', price: 100, quantity: 0 },
            { id: 3, name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน', pic: 'images/3.jpg', price: 100, quantity: 0 },
            { id: 4, name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี', pic: 'images/4.jpg', price: 100, quantity: 0 },
            { id: 5, name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์', pic: 'images/5.jpg', price: 100, quantity: 0 },
            { id: 6, name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม', pic: 'images/6.jpg', price: 100, quantity: 0 },
            { id: 7, name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต', pic: 'images/7.jpg', price: 100, quantity: 0 }
        ]
        $scope.buy = []
        var num = 0
        var total = 0
        var ee = 0
        var btn_confirm = []
        var count = []
        $scope.sum = false
        $scope.testclick = function(obj, ids) {
            if (obj.quantity > 0) {
                btn_confirm.push(obj)
                $scope.buy.push(obj)
                $scope.sum = true

            }
        }
        $scope.clickAdd = function(obj) {
            obj.quantity += 1
        }
        $scope.clickRemove = function(obj) {
            if (obj.quantity > 0) {
                obj.quantity -= 1
                return true
            } else {
                return false
            }
        }
        
        $scope.confirm = function() {
            for (var i = ee; i < btn_confirm.length; i++) {
                num += btn_confirm[i].quantity
                ee++
            }
            // รวมทุกเล่ม num 
            console.log(num);
            var c = 0
            var s = 0
            var ss = 0
            var price = 100
            var sell = 0
            var sumproduct = count.length // จำนวน หนังสือ
            var exit = 0
            do {

                for (var i = 0; i < btn_confirm.length; i++) {
                    if (btn_confirm[i].quantity != 0) {
                        c += 1
                    } else {
                        c += 0
                    }
                }
                if (c == 1) {
                    s = num * 100
                    console.log('1')
                } else if (c == 2) {
                    s = ((num * 100) - ((c * 100) * 0.1))
                    sell += ((c * 100) * 0.1)
                    console.log('2')
                } else if (c == 3) {
                    s = ((num * 100) - ((c * 100) * 0.2))
                    sell += ((c * 100) * 0.2)
                    console.log('3')
                } else if (c == 4) {
                    s = ((num * 100) - ((c * 100) * 0.3))
                    sell += ((c * 100) * 0.3)
                    console.log('4')
                } else if (c == 5) {
                    s = ((num * 100) - ((c * 100) * 0.4))
                    sell += ((c * 100) * 0.4)
                    console.log('5')
                } else if (c == 6) {
                    s = ((num * 100) - ((c * 100) * 0.5))
                    sell += ((c * 100) * 0.5)
                    console.log('6')
                } else if (c == 7) {
                    s = ((num * 100) - ((c * 100) * 0.6))
                    sell += ((c * 100) * 0.6)
                    console.log('7')
                } else if (c == 0) {

                    exit = 1
                    console.log('exit')
                }

                for (var i = 0; i < btn_confirm.length; i++) {
                    btn_confirm[i].quantity -= 1

                }
                c = 0


            } while (exit != 1);
            console.log('product : ' + num);
            console.log('Total : ' + num * 100);
            console.log('sell : ' + sell);
            console.log('To ' + s);
            console.log(btn_confirm);
        }

    })