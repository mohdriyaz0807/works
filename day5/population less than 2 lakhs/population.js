var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload=function(){

    var data  = JSON.parse(this.responseText);
    var arr= data.filter(elem => elem.population < 200000)
    console.log(arr)
}
