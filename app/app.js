var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.messages = [
        {
            title: "HIV positive",
            description: "- คุณเป็น HIV",
            active: false
        },
        {
            title: "HIV negative",
            description: "- คุณไม่เป็นเอดส์ เลิกมั่วไม่เลือกได้แล้ว",
            active: false
        },
        {
            title: "หนองใน positive",
            description: "- คุณพบเชื้อหนองใน ให้ไปซื้อยามากิน",
            active: false
        },
        {
            title: "หนองใน negative",
            description: "- คุณไม่ได้เป็นหนองใน",
            active: false
        }
    ]
});