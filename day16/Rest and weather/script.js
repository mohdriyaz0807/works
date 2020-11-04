var restcountriesapi='https://restcountries.eu/rest/v2/all'
var weatherapi='https://api.openweathermap.org/data/2.5/weather?&appid=6cf94e6e8b6989fb5f73be9e812a83b0'


async function rest(){
    try{
    var response=await fetch(restcountriesapi)
    var ret=await response.json()

    
    
    var div1=document.createElement('div')
    div1.setAttribute('class','container')
    var div2=document.createElement('div')
    div2.setAttribute('class','row')
        
    ret.forEach(async (ele,i)=>{
        var div=document.createElement('div')
            div.class='col-lg-4 col-sm-12'
            div.id="column"
        var div3=document.createElement('div')
            div3.setAttribute('class','card')
        var h4=document.createElement('h4')
            h4.setAttribute('class','card-title')
            h4.innerHTML=ele.name
        var img=document.createElement('img')
            img.setAttribute('id','img')
            img.setAttribute('class','card-img-top')
            img.src=ele.flag
        var div4=document.createElement('div')
            div4.setAttribute('class','card-body')
        var p=document.createElement('p')
            p.setAttribute('class','card-text')
            p.innerHTML=`Capital : ${ele.capital}<br>Region : ${ele.region}<br>Lat : (${parseFloat(ele.latlng[0]).toFixed(2)}),Lng : (${parseFloat(ele.latlng[1]).toFixed(2)})<br>CountryCode : ${ele.alpha3Code}`
        var button=document.createElement('button')
            button.setAttribute('class','btn btn-primary')
            button.innerHTML='Click for Weather'
            button.setAttribute('type','button')
            button.setAttribute('id',`mybtn${i}`)
            button.setAttribute('onclick',`get(${ele.latlng[0]},${ele.latlng[1]}, ${i})`)
            
                
            
        div4.append(p)
        div3.append(h4,img,div4,button)
        div.appendChild(div3)
        div2.appendChild(div)
    })
        div1.appendChild(div2)
        document.body.append(div1)
        console.log(ret)

    }catch(err){
        console.log(err)
    }
}
            async function get(lat,lon,i){
                try{
            var wer=await fetch(weatherapi+'&lat='+lat+'&lon='+lon)
            var dat=await wer.json()
            console.log(dat)
            swal({
                title: "Today's Weather",
                text: `Temperature : ${dat.main.temp}
                        Humidity : ${dat.main.humidity}
                        Pressure : ${dat.main.pressure}`,
              });
            }
            catch(error){
                console.log(error);
            }
}
rest()


