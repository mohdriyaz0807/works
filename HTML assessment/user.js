var nav=create_class('nav','nav')
var reg=create_a('index.html','User Reg')
var lan=create_a('landing.html','Landing page')
var grid=create_a('product.html','Grid view')

nav.append(reg,lan,grid)

var div=create_class('div')
div.setAttribute('id','main')

var form=create_class('form','form')
form.setAttribute('onsubmit','alert("Thankyou")')
var tr1=line('Full Name','<i class="fa fa-user-o" aria-hidden="true"></i> ');
var tr2=line('Address Line 1','<i class="fa fa-address-book" aria-hidden="true"></i> ');
var tr3=line('Address Line 2','<i class="fa fa-address-book" aria-hidden="true"></i> ');
var tr4=line('City','<i class="fa fa-map-marker" aria-hidden="true"></i> </i> ');
var tr5=line('State/province/region','<i class="fa fa-plane" aria-hidden="true"></i> ');
var tr6=line('postal code/zip','<i class="fa fa-user-o" aria-hidden="true"></i> ');
var tr7=line('Country','<i class="fa fa-flag" aria-hidden="true"></i> ');
var tr8=line('Email','<i class="fa fa-envelope" aria-hidden="true"></i> ');
var tr9=line('Phone Number','<i class="fa fa-user-o" aria-hidden="true"></i> ');
var submit=create_class('input','submit')
submit.setAttribute('type','submit')


form.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9,submit)
div.append(form)
document.body.append(nav,div)


function line(name,icon){
    var full=create_class('div','col-12')
        full.setAttribute('id','full')
    var div1=create_class('div','col-6')
        div1.setAttribute('id','ord')
    var n=document.createElement('label')
        n.setAttribute('for','input')
        n.innerHTML=name
    var div2=create_class('div','col-6')
        div2.setAttribute('id','bor')
    var ic=document.createElement('span')
        ic.innerHTML=icon
    var span=document.createElement('span')
    if(name!="Country"){
    var inp=create_class('input','input')
        if(name=="Email"){
            inp.setAttribute('type','email')}
        else if(name=="Phone Number"){
            inp.setAttribute('type','number')}
        else{
        inp.setAttribute('type','text')}
        inp.setAttribute('placeholder',name)
        inp.setAttribute("required", "")
        }
        else{
            var inp=create_class('select','opt')
            var op1=create_class('option','opt')
            op1.setAttribute('value','india')
            op1.innerHTML="india"
            var op2=create_class('option')
            op2.setAttribute('value','japan')
            op2.innerHTML="japan"

            inp.append(op1,op2)
        }



    span.append(inp)
    div1.append(n)
    div2.append(ic,span)
    full.append(div1,div2)
    return full;
}


function create_class(element,className) {
    var elem=document.createElement(element);
    if(className) {
        elem.setAttribute('class',className);
    }
    return elem;
}

function create_a(src,text){
    var tag=create_class('a','tag')
    tag.setAttribute('href',src)
    tag.innerHTML=text


    return tag
}