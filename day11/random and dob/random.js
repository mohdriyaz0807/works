var div1=create_class('div','div1')
        div1.innerHTML="Unique 8 digit number:"
        var num=create_class('input','num')
        num.setAttribute('type','text')
        var btn1=create_class('button','btn1')
        btn1.setAttribute('type','button')
        btn1.innerHTML="Click here"
        btn1.setAttribute('onclick','getdata(min,max)')
        var br1=document.createElement('br')
        var br2=document.createElement('br')


        var min=10000000;
        var max=99999999;
        function getdata(min,max){
            var value=Math.floor(Math.random()*(max-min)+min)
            var temp=value.toString().split('')
            if(new Set(temp).size!=temp.length){
                getdata(min,max)
            }
            else{
                num.setAttribute('value',value)
            }
        }



        
        var div2=create_class('div','div2')
        div2.innerHTML="Date of Birth Count"
        var dob=create_class('input','dob')
        dob.setAttribute('id','dateofbirth')
        dob.setAttribute('type','date')
        var btn2=create_class('button','btn2')
        btn2.innerHTML="Click Here"
        btn2.type="button"
        btn2.setAttribute('onclick','showdata()')


        var div3=create_class('div','data')



        document.body.append(div1,num,br1,btn1,div2,dob,br2,btn2,div3)
      



function showdata(){
    var data=document.getElementById('dateofbirth').value
        if(Date.parse(data)){
            var inputdate= new Date(data);
            var currentdate=new Date();
            var ms=parseInt(currentdate.getTime())-parseInt(inputdate.getTime())
            var sec=Math.floor(ms/1000)
            var min=Math.floor(sec/60)
            var hours=Math.floor(min/60)
            var days=Math.floor(hours/24)
            var weeks=Math.floor(days/7)
            var year=currentdate.getFullYear()-inputdate.getFullYear()
            var month=(year*12)+currentdate.getMonth()-inputdate.getMonth()
                
            div3.innerHTML=`Year   :   ${year}<br>Month   :   ${month}<br>Weeks   :   ${weeks}<br>Days   :   ${days}<br>Hours   :   ${hours}<br>Minutes   :   ${min}<br>Seconds   :   ${sec}<br>MilliSeconds   :   ${ms}`
            }
        else{
            div3.innerHTML="Not a valid input"
            }
}




        function create_class(element,className) {
    var elem=document.createElement(element);
    if(className) {
        elem.setAttribute('class',className);
    }
    return elem;
    }