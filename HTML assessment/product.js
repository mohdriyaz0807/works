var nav=create_class('nav','col-12')
var reg=create_a('index.html','User Reg')
var lan=create_a('landing.html','Landing page')
var grid=create_a('product.html','Grid view')

nav.append(reg,lan,grid)


var div=create_class('div','grid-container')

var div1=create_grid("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","Headphones","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$50","grid-item")
var div2=create_grid("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80","watch","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$70","grid-item")
var div3=create_grid("https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80","shoes","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$80","grid-item")
var div4=create_grid("https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80","table","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$60","grid-item")
var div5=create_grid("https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","camera","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$120","grid-item")
var div6=create_grid("https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80","handbag","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$90","grid-item")
var div7=create_grid("https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80","Bicycle","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$40","grid-item")
var div8=create_grid("https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80","cool-Glass","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$110","grid-item")
var div9=create_grid("https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80","CarToys","ve optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, ","$50","grid-item")



div.append(div1,div2,div3,div4,div5,div6,div7,div8,div9)
document.body.append(nav,div)


function create_grid(image,h1,p,price,classN)
    {
        var ele=document.createElement('div')
        ele.setAttribute('class',classN)
        var img=create_class('img','grid-img')
        img.setAttribute('src',image)
        var head=create_class('h1','head')
        head.innerHTML=h1
        var para=create_class('p','para')
        para.innerHTML=p
        var div=create_class('div','div22')
        var pr=create_class('span','pr')
        pr.innerHTML=price
        var add=create_class('span','ad')
        add.innerHTML='<input type="button" class="add" value="AddtoCart">'
        
        div.append(pr,add)
        ele.append(img,head,para,div)
        
        return ele


    }



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