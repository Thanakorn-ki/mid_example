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
        var testcheck = true
        var count = []
        $scope.sum = false
        $scope.testclick = function(obj, ids) {
            if (obj.quantity > 0) {
                $scope.buy.push(obj)
                $scope.sum = true
                count.push(ids) // จำนวนหนังสือ
                for (var i = ee; i < $scope.buy.length; i++) {
                    num += $scope.buy[i].quantity
                    ee++
                }
                // รวมทุกเล่ม num 
                var price = 100
                var sell = 0
                var s = num * price // ราคารวม 
                var sumproduct = count.length // จำนวน หนังสือ
                console.log(sumproduct);
                var ssss = Math.ceil(num / sumproduct)

                if (sumproduct == 2) {
                    total = s - ((s * 10) / 100)
                    sell = ((s * 10) / 100)
                } else if (sumproduct == 3) {
                    total = s - ((s * 20) / 100)
                    sell = ((s * 20) / 100)
                } else if (sumproduct == 4) {
                    total = s - ((s * 30) / 100)
                    sell = ((s * 30) / 100)
                } else if (sumproduct == 5) {
                    total = s - ((s * 40) / 100)
                    sell = ((s * 40) / 100)
                } else if (sumproduct == 6) {
                    total = s - ((s * 50) / 100)
                    sell = ((s * 50) / 100)
                } else if (sumproduct == 7) {
                    total = s - ((s * 60) / 100)
                    sell = ((s * 60) / 100)
                } else {
                    total += price
                }


                console.log('product : ' + num);
                console.log('sum : ' + s);
                console.log('sell : ' + sell);
                console.log('Total : ' + total);

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

    })