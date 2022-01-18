document.addEventListener('DOMContentLoaded', function () {
    var checkButton = document.getElementById('check');
    var setBoundsButton = document.getElementById('setBounds');
    var numbers = [];
    for (var i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    var lowBound = 0;
    var upBound = 100;
    var parity = "Both"

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

        parity = document.getElementById("dropdown").value;
        if (parity == "Both") {
            
            if (lowBound < upBound) {
                for (var i = lowBound; i <= upBound; i++) {
                    numbers.push(i);
                }
            }
            else {
                alert("Lower bound must be less than upper bound.");
            }
        }
        else if (parity == "Even") {
            if (lowBound < upBound) {
                if (lowBound % 2==1) {
                    lowBound++;
                }
                for (var i = lowBound; i <= upBound; i = i+2) {
                    numbers.push(i);
                }
            }
            else {
                alert("Lower bound must be less than upper bound.");
            }
        }
        else if (parity == "Odd") {
            if (lowBound < upBound) {
                if (lowBound % 2==0) {
                    lowBound++;
                }
                for (var i = lowBound; i <= upBound; i = i+2) {
                    numbers.push(i);
                }
            }
            else {
                alert("Lower bound must be less than upper bound.");
            }
        }
    }, false);

    checkButton.addEventListener('click', function () {
        parity = document.getElementById("dropdown").value;
        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        lowBound = Number(objects['lowerBound']);
        upBound = Number(objects['upperBound']);
        //alert("Repeating Button: " + document.getElementById("myCheck").checked)
        if (document.getElementById("myCheck").checked) {
            if (numbers.length == 0) {
                alert("All numbers have been generated without repetititon. Please click the Set Bounds/Reset button to reset the numbers.")
            }
            else {


                var randomValue = numbers[Math.floor(Math.random() * numbers.length)];
                for (var i = 0; i < numbers.length; i++) {
                    if (numbers[i] == randomValue) {
                        numbers.splice(i, 1);
                        break;
                    }
                }
                document.getElementById('generatedNum').value = randomValue;
            }
        }
        else {
            var randomValue;
            if(parity == "Both")
            {
                randomValue = Math.floor(Math.random() * (upBound - lowBound + 1) + lowBound);
                document.getElementById('generatedNum').value = randomValue;
            } 
            else if(parity == "Even")
            { 
                randomValue = (Math.floor(Math.random() * (upBound - lowBound + 1) / 2 + lowBound / 2)) * 2;
                document.getElementById('generatedNum').value = randomValue;
            }
            else if (parity == "Odd") {
                randomValue = (Math.floor(Math.random() * (upBound - lowBound + 1) / 2 + lowBound / 2)) * 2 + 1;
                document.getElementById('generatedNum').value = randomValue;
            }
        }


        //alert("randomValue = " + randomValue);
    }, false);
}, false);
