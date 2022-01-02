document.addEventListener('DOMContentLoaded', function () {
    var checkButton = document.getElementById('check');
    var setBoundsButton = document.getElementById('setBounds');
    var numbersGenerated = [];
    var numbers = [];
    for (var i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    setBoundsButton.addEventListener('click', function () {
        numbers = new Array();
        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        var lowBound = Number(objects['lowerBound']);
        var upBound = Number(objects['upperBound']);
        for (var i = lowBound; i <= upBound; i++) {
            numbers.push(i);
        }
        /*
        int index = 0;
        for(i of range(lowBound, upBound))
        {
            numbers[index] = i;
            index++;
        }
        */
        //alert(numbers[0]);

    }, false);
    
    checkButton.addEventListener('click', function () 
    {
        var elements = document.getElementById("form").elements;
        var objects = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            objects[item.name] = item.value;
        }
        
        var randomValue = numbers[Math.floor(Math.random() * numbers.length)];

        //alert(numbers);
        numbersGenerated.push(randomValue);
        //numbers = ArrayUtils.removeElement(numbers, randomValue);
        for(var i = 0; i < numbers.length; i++) 
        {
                if(numbers[i] == randomValue) {
                    numbers.splice(i,1);
                    break;
                } 
        }
        alert(randomValue);
        
        //alert("randomValue = " + randomValue);
    }, false);
}, false);

function copy() {
    let textarea = document.getElementById("textarea");
}