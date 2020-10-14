var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload=function(){

    var data  = JSON.parse(this.responseText);
    console.log(data.reduce((n,element)=>{return element.population+n },0))
}
