document.addEventListener('DOMContentLoaded', function () {
    var checkButton = document.getElementById('check');
    var setBoundsButton = document.getElementById('setBounds');
    var numbers = [];
    for (var i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    var lowBound = 0;
    var upBound = 100;

    setBoundsButton.addEventListener('click', function () {
        numbers = new Array();
        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        lowBound = Number(objects['lowerBound']);
        upBound = Number(objects['upperBound']);
        for (var i = lowBound; i <= upBound; i++) {
            numbers.push(i);
        }
    }, false);

    checkButton.addEventListener('click', function () {

        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        //alert("Repeating Button: " + document.getElementById("myCheck").checked)
        if (document.getElementById("myCheck").checked) {
            if (numbers.length == 0) {
                alert("All numbers have been generated without repetititon")
            }
            else {


                var randomValue = numbers[Math.floor(Math.random() * numbers.length)];
                for (var i = 0; i < numbers.length; i++) {
                    if (numbers[i] == randomValue) {
                        numbers.splice(i, 1);
                        break;
                    }
                }
                alert(randomValue);
                document.getElementById('generatedNum').value = randomValue;
            }
        }
        else {
            var randomValue = Math.floor(Math.random() * (upBound - lowBound + 1) + lowBound);
            document.getElementById('generatedNum').value = randomValue;
        }


        //alert("randomValue = " + randomValue);
    }, false);
}, false);

function copy() {
    let textarea = document.getElementById("textarea");
}