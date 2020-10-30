
function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
        var rest = new XMLHttpRequest();
        rest.open(method, url);
        rest.send();
        rest.onload = function () {
            if (rest.status == 200) {
                resolve(JSON.parse(rest.response));
            } else {
                reject({
                    message: rest.statusText,});
                }
                }
                
            });
        }


        makeRequest("GET", "https://restcountries.eu/rest/v2/all")
        .then((result) => {
            result.filter(ele=>{
                var div=document.createElement('div')
                div.class='col-3'
            var h4=document.createElement('h4')
            h4.innerHTML=ele.name
            var img=document.createElement('img')
            img.src=ele.flag
            var p=document.createElement('p')
            p.innerHTML=`Capital : ${ele.capital}<br>Region : ${ele.region}<br>LatLng : (${ele.latlng})<br>Currencies : ${ele.currencies[0].code}, ${ele.currencies[0].name}, ${ele.currencies[0].symbol}`
            div.append(h4,img,p)
            document.body.append(div)
        })
    })
        .catch((error) => {
            console.log(error);
        });

