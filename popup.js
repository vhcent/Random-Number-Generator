document.addEventListener('DOMContentLoaded', function () {
    var checkButton = document.getElementById('check');

    checkButton.addEventListener('click', function () {
        //alert("Hey your button is working!");
        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        var lowBound = objects['lowerBound'];
        var upBound = objects['upperBound'];
        var randomValue = Math.floor(Math.random() * (upBound - lowBound + 1) + upBound);
        alert("randomValue = " + randomValue);
    }, false);
}, false);

function copy() {
    let textarea = document.getElementById("textarea");
}