try{

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();
request.onload=function(){

    var data  = JSON.parse(this.responseText);
    for(i in data){
    console.log(data[i].flag)
    }
}
flag; //not defined
}
catch(err)
{
    alert('flag is not defined - error occured')
}
