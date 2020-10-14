var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();
request.onload=function(){

    var data  = JSON.parse(this.responseText);
    var cur = data.filter(elem => elem.currencies[0].code =='USD')
    console.log(cur)
}
