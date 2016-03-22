angular.module('midone', [])
    .controller('midonecontron', function($scope) {
        $scope.cart = 0
        $scope.data = [
            { id: 1, name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์', pic: 'images/1.jpg', price: 100, quantity: 0 ,check:true},
            { id: 2, name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ', pic: 'images/2.jpg', price: 100, quantity: 0 ,check:true },
            { id: 3, name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน', pic: 'images/3.jpg', price: 100, quantity: 0  ,check:true},
            { id: 4, name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี', pic: 'images/4.jpg', price: 100, quantity: 0  ,check:true},
            { id: 5, name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์', pic: 'images/5.jpg', price: 100, quantity: 0 ,check:true},
            { id: 6, name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม', pic: 'images/6.jpg', price: 100, quantity: 0 ,check:true},
            { id: 7, name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต', pic: 'images/7.jpg', price: 100, quantity: 0 ,check:true }
        ]
        $scope.buy = []
        var checkbtn = []
        var num = 0
        var total = 0
        $scope.shownum=0
        var ee = 0
        $scope.btn_check = true
        $scope.sum = false
        var btn_confirm = []
        $scope.testclick = function(obj,index) {
            ///// รีค่าใหม่ 
          $scope.data[index].check = false
          checkbtn.push(index)
           console.log(checkbtn);
            if ($scope.sum != true) {
                $scope.buy=[]
                btn_confirm = []
                
            }
            if (obj.quantity > 0) {
                $scope.buy.push(obj)
                btn_confirm.push(obj)
                $scope.shownum++
               
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
            /// max to min
            btn_confirm.sort(function(a, b) {
                if (a.quantity > b.quantity) {
                    return -1;
                }
                if (a.quantity < b.quantity) {
                    return 1;
                }
                return 0;
            });
            ///////////////////////
            /* นับจำนวนหนังสือทั้งหมด */
            for (var i = ee; i < btn_confirm.length; i++) {
                num += btn_confirm[i].quantity
                ee++
            }
            /////////////////////// /
            var countlist = 0  // เช็ครอบเข้า เงื่อนไขลดราคา
            var s = 0  
            var sell = 0 // ส่วนลด
            var exit = 0
            do {
                ///////// for เช็ค จำนวนเล่มหนังสือ
                for (var i = 0; i < btn_confirm.length; i++) {
                    if (btn_confirm[i].quantity != 0) {
                        countlist += 1
                    }
                    if (btn_confirm[i].quantity == 0) {
                        countlist += 0
                        break
                    }
                }
                /////// เงื่อนไขลดราคา
                if (countlist == 1) {
                        // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้ 
                    console.log('1')
                } if (countlist == 2) {
                    
                    sell += ((countlist * 100) * 0.1)
                    console.log('2')
                } else if (countlist == 3) {
                  
                    sell += ((countlist * 100) * 0.2)
                    console.log('3')
                } else if (countlist == 4) {
                 
                    sell += ((countlist * 100) * 0.3)
                    console.log('4')
                } else if (countlist == 5) {
                
                    sell += ((countlist * 100) * 0.4)
                    console.log('5')
                } else if (countlist == 6) {
                   
                    sell += ((countlist * 100) * 0.5)
                    console.log('6')
                } else if (countlist == 7) {
                   
                    sell += ((countlist * 100) * 0.6)
                    console.log('7')
                } else if (countlist == 0) {
                    exit = 1
                    console.log('exit')
                }
                //// ลบ จำนวนออกทีละ 1 
                for (var i = 0; i < btn_confirm.length; i++) {
                    if (btn_confirm[i].quantity > 0) {
                        btn_confirm[i].quantity -= 1
                        countlist = 0 // รีค่าใหม่
                    }
                }

            } while (exit != 1);
            $scope.sumall = [{
                'product': num,
                'total': (num * 100),
                'sell': sell,
                'sum': ((num * 100) - sell)
            }]
            $scope.sum = false
            $scope.shownum=0
            for (var i = 0; i < checkbtn.length; i++) {
                  $scope.data[checkbtn[i]].check = true  
            }

        }
    })