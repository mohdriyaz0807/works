var container=document.createElement('container')
container.setAttribute('id','container')
var calculator=document.createElement('div')
calculator.setAttribute('id','calculator')
var result=document.createElement('div')
result.setAttribute('id','result')
var history1=document.createElement('div')
history1.setAttribute('id','history1')
var history_value=document.createElement('p')
history_value.setAttribute('id','history_value')
history1.append(history_value);
var output=document.createElement('div')
output.setAttribute('id','output')
var output_value=document.createElement('p')
output_value.setAttribute('id','output_value')
output.append(output_value)
result.append(history1,output)
var keyboard=document.createElement('div')
keyboard.setAttribute('id','keyboard')
var clear=document.createElement('button')
clear.setAttribute('id','clear')
clear.setAttribute('class','operator')
clear.innerText="C";
var backspace=document.createElement('button')
backspace.setAttribute('id','backspace')
backspace.setAttribute('class','operator')
backspace.innerText="CE";
var modulus=document.createElement('button')
modulus.setAttribute('id','%')
modulus.setAttribute('class','operator')
modulus.innerText="%";
var divide=document.createElement('button')
divide.setAttribute('id','/')
divide.setAttribute('class','operator')
divide.innerText="/";
var seven=document.createElement('button')
seven.setAttribute('id','7')
seven.setAttribute('class','number')
seven.innerText="7";
var eight=document.createElement('button')
eight.setAttribute('id','8')
eight.setAttribute('class','number')
eight.innerText="8";
var nine=document.createElement('button')
nine.setAttribute('id','9')
nine.setAttribute('class','number')
nine.innerText="9";
var asterisk=document.createElement('button')
asterisk.setAttribute('id','*')
asterisk.setAttribute('class','operator')
asterisk.innerText="*";
var four=document.createElement('button')
four.setAttribute('id','4')
four.setAttribute('class','number')
four.innerText="4";
var five=document.createElement('button')
five.setAttribute('id','5')
five.setAttribute('class','number')
five.innerText="5";
var six=document.createElement('button')
six.setAttribute('id','6')
six.setAttribute('class','number')
six.innerText="6";
var minus=document.createElement('button')
minus.setAttribute('id','-')
minus.setAttribute('class','operator')
minus.innerText="-";
var one=document.createElement('button')
one.setAttribute('id','1')
one.setAttribute('class','number')
one.innerText="1";
var two=document.createElement('button')
two.setAttribute('id','2')
two.setAttribute('class','number')
two.innerText="2";
var three=document.createElement('button')
three.setAttribute('id','3')
three.setAttribute('class','number')
three.innerText="3";
var plus=document.createElement('button')
plus.setAttribute('id','+')
plus.setAttribute('class','operator')
plus.innerText="+";
var dot=document.createElement('button')
dot.setAttribute('id','.')
dot.setAttribute('class','operator')
dot.innerText="."
var zero=document.createElement('button')
zero.setAttribute('id','0')
zero.setAttribute('class','number')
zero.innerText="0";
var equal=document.createElement('button')
equal.setAttribute('id','equal')
equal.setAttribute('class','operator')
equal.innerText="=";
keyboard.append(clear,backspace,modulus,divide,seven,eight,nine,asterisk,four,five,six,minus,one,two,three,plus,dot,zero,equal)
calculator.append(result,keyboard)
container.append(calculator)
document.body.append(container)




function getHistory() {
    return document.getElementById("history_value").innerText;
  }
  function printHistory(num) {
    document.getElementById("history_value").innerText = num;
  }
  function getOutput() {
    return document.getElementById("output_value").innerText;
  }
  function printOutput(num) {
    if (num == "") {
      document.getElementById("output_value").innerText = num;
    } else {
      document.getElementById("output_value").innerText = stringFormat(num);
    }
  }
  function stringFormat(num) {
    if (num == "-") {
      return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
  }
  function numberFormat(num) {
    return Number(num.replace(/,/g, ""));
  }
  var operator = document.getElementsByClassName("operator");
  for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
      if (this.id == "clear") {
        printHistory("");
        printOutput("");
      } else if (this.id == "backspace") {
        var output = numberFormat(getOutput()).toString();
        if (output) {
          //if output has a value
          output = output.substr(0, output.length - 1);
          printOutput(output);
        }
      } else {
        var output = getOutput();
        var history = getHistory();
        if (output == "" && history != "") {
          if (isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
          }
        }
        if (output != "" || history != "") {
            if(output==""||output=="."){
                output=output;
              }else{
                  numberFormat(output)
              }
          history +=  output;
          if (this.id == "equal") {
            var result = eval(history);
            printOutput(result);
            printHistory("");
          } else {
            history += this.id;
            printHistory(history);
            printOutput("");
          }
        }
      }
    });
  }
  
  var number = document.getElementsByClassName("number");
  for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
      var output = numberFormat(getOutput());
      if (output != NaN) {
        output  += this.id;
        printOutput(output);
      }
    });
  }
  
    document.addEventListener("keypress", function (e) {
        if (e.keyCode === 96 || e.keyCode === 48 ) {
            b='0'
        }else if (e.keyCode === 97 || e.keyCode === 49 ) {
          b='1'
      }else if (e.keyCode === 98 || e.keyCode === 50 ) {
        b='2'
    }else if (e.keyCode === 99 || e.keyCode === 51 ) {
      b='3'
  }else if (e.keyCode === 100 || e.keyCode === 52 ) {
    b='4'
  }else if (e.keyCode === 101 || e.keyCode === 53 ) {
    b='5'
  }else if (e.keyCode === 102 || e.keyCode === 54 ) {
    b='6'
  }else if (e.keyCode === 103 || e.keyCode === 55 ) {
    b='7'
  }else if (e.keyCode === 104 || e.keyCode === 56 ) {
    b='8'
  }
  else if (e.keyCode === 105 || e.keyCode === 57 ) {
    b='9'
  }
  else{
    alert("invalid input")
  } var output = numberFormat(getOutput());
  if (output != NaN) {
    output = output + b;
    printOutput(output);
  }
    });
  