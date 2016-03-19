angular.module('midone', [])
    .controller('midonecontron', function($http, $scope) {
        $scope.cart = 0
        $scope.aum = 'thanakorn'
        $scope.data = [
            { id: 1, name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์', pic: 'images/1.jpg', price: 100 },
            { id: 2, name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ', pic: 'images/2.jpg', price: 100 },
            { id: 3, name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน', pic: 'images/3.jpg', price: 100 },
            { id: 4, name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี', pic: 'images/4.jpg', price: 100 },
            { id: 5, name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์', pic: 'images/5.jpg', price: 100 },
            { id: 6, name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม', pic: 'images/6.jpg', price: 100 },
            { id: 7, name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต', pic: 'images/7.jpg', price: 100 }
        ]
        $scope.buy = []
        $scope.sum = false
        var book1 = book2 = book3 = book4 = book5 = book6 = book7 = 0
        $scope.testclick = function(index) {
            var tran = {
                id: $scope.data[index].id,
                name: $scope.data[index].name,
                price: $scope.data[index].price
            }
            $scope.buy.push(tran)
            $scope.cart += 1
            $scope.sum = true
        }
        $scope.remove = function(index){
             $scope.buy[index]={}
        }
    })