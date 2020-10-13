var request = new XMLHttpRequest();

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=6cf94e6e8b6989fb5f73be9e812a83b0', true);

request.send();


request.onload=function(){

    var data  = JSON.parse(this.responseText);
    console.log(data)
    
}



var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=1264527&appid=6cf94e6e8b6989fb5f73be9e812a83b0', true);


request.send();

request.onload=function(){

    var data1  = JSON.parse(this.responseText);
    console.log(data1)
    
}

var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=10.80289&lon=78.698753&appid=6cf94e6e8b6989fb5f73be9e812a83b0', true);


request.send();

request.onload=function(){

    var data2  = JSON.parse(this.responseText);
    console.log(data2)
    
}