//model
var resultBox;
//view
updateView(){ 

    document.getElementById('app').innerHTML =`   
    
    
    
    <div class="firstInRow" onclick="addCharacter(7)">7</div>
    <div onclick="addCharacter(8)">8</div>
    <div onclick="addCharacter(9)">9</div>
    <div onclick="addCharacter('÷')">÷</div>
    
    <div class="firstInRow" onclick="addCharacter(4)">4</div>
    <div onclick="addCharacter(5)">5</div>
    <div onclick="addCharacter(6)">6</div>
    <div onclick="addCharacter('×')">×</div>
    
    <div class="firstInRow" onclick="addCharacter(1)">1</div>
    <div onclick="addCharacter(2)">2</div>
    <div onclick="addCharacter(3)">3</div>
    <div onclick="addCharacter('-')">-</div>
    
    <div class="firstInRow" onclick="addCharacter(0)">0</div>
    <div onclick="clearResult();">C</div>
    <div onclick="calculate()">=</div>
    <div onclick="addCharacter('+')">+</div>`;
}      



var resultBox = document.getElementById('resultBox');

function addCharacter(x) {
    resultBox.innerHTML += x;
}

function calculate() {
    var calculation = resultBox
        .innerHTML
        .replace('×', '*')
        .replace('÷', '/');
    resultBox.innerHTML = eval(calculation);
}
function clearResult() {
    resultBox.innerHTML = '';

    updateView();
}