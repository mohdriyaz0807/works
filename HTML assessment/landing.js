var nv=create_class('nav','col-12')
var reg=create_a('index.html','User Reg')
var lan=create_a('landing.html','Landing page')
var grid=create_a('product.html','Grid view')

nv.append(reg,lan,grid)


var div=create_class('div','main')

var head=create_class('header','head')
var span1=create_class('span','col-6')
span1.innerHTML="Deployment phase of my 7464"

var span2=create_class('span','col-6')
span2.setAttribute('id','span2')
var nav=create_class('nav','nav')
var btn1=create_class('input','col-2')
btn1.setAttribute('id','btn1')
btn1.setAttribute('type','button')
btn1.setAttribute('value','HOME')
btn1.setAttribute('onclick',"document.location=''")
var btn2=create_class('input','col-2')
btn2.setAttribute('id','btn2')
btn2.setAttribute('type','button')
btn2.setAttribute('value','ABOUT')
btn2.setAttribute('onclick',"document.location=''")
var btn3=create_class('input','col-2')
btn3.setAttribute('id','btn3')
btn3.setAttribute('type','button')
btn3.setAttribute('value','CONTACT')
btn3.setAttribute('onclick',"document.location=''")

var hr=create_class('hr')
hr.setAttribute('noshade','')

var br=create_class('br')


span2.append(nav)
nav.append(btn1,btn2,btn3)
head.append(span1,span2)

var div1=create_class('div','div1')
var h1=create_class('h1',)
    h1.innerHTML="Jumbotron Heading"
var p=create_class('p','p')
    p.innerHTML="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, and an alliteration advocate Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, and an alliteration advocate"
var div11=create_class('div','div11')
var button1=create_class('input','button1')
    button1.setAttribute('type','button')
    button1.setAttribute('value','Sign up today')
    button1.setAttribute('onclick',"document.location=''")
var div12=create_class('div','div12')
var button2=create_class('input','button2')
    button2.setAttribute('type','button')
    button2.setAttribute('value','Launch demo modal')
    button2.setAttribute('onclick',"document.location=''")



div11.append(button1)
div12.append(button2)
div1.append(h1,p,div11,div12)

var div2=create_class('div','col-12')

var div21=create_class('div','col-6')
var s1=create_class('h3')
s1.innerHTML='Subheading'
var p1=create_class('p')
p1.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"
var s2=create_class('h3')
s2.innerHTML='Subheading'
var p2=create_class('p')
p2.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"
var s3=create_class('h3')
s3.innerHTML='Subheading'
var p3=create_class('p')
p3.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"

var div22=create_class('div','col-6')
var s4=create_class('h3')
s4.innerHTML='Subheading'
var p4=create_class('p')
p4.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"
var s5=create_class('h3')
s5.innerHTML='Subheading'
var p5=create_class('p')
p5.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"
var s6=create_class('h3')
s6.innerHTML='Subheading'
var p6=create_class('p')
p6.innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB"

div21.append(s1,p1,s2,p2,s3,p3)
div22.append(s4,p4,s5,p5,s6,p6)

div2.append(div21,div22)

var foot=create_class('footer','foot')
foot.innerHTML="<hr noshade>deployment phase of my 7464"


div.append(head,nav,br,hr,br,div1,div2,foot)
document.body.append(nv,div)




function create_class(element,className) {
    var elem=document.createElement(element);
    if(className) {
        elem.setAttribute('class',className);
    }
    return elem;
}

function create_a(src,text){
    var tag=create_class('a','col-2')
    tag.setAttribute('href',src)
    tag.innerHTML=text


    return tag
}