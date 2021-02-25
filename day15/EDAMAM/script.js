var carousel=document.createElement('div')
carousel.setAttribute('id','carouselExampleSlidesOnly')
carousel.setAttribute('class','carousel slide')
carousel.setAttribute('data-ride','carousel')
var c=document.createElement('div')
c.setAttribute('class','carousel-inner')
var c1=document.createElement('div')
c1.setAttribute('class','carousel-item active')
var img1=document.createElement('img')
img1.setAttribute('src','https://res.cloudinary.com/sanitarium/image/fetch/q_auto/https://www.sanitarium.com.au/getmedia%2F943d0514-0f7e-473c-989d-fb1d9c34feb3%2FHealth-food_1180.jpg%3Fwidth%3D1180%26height%3D400%26ext%3D.jpg')
img1.setAttribute('class','d-block w-100')
img1.setAttribute('alt','Oops!')
var c2=document.createElement('div')
c2.setAttribute('class','carousel-item')
var img2=document.createElement('img')
img2.setAttribute('src','https://animalbulgaria.com/userfiles/editor/image/Morava%201180x400.jpg')
img2.setAttribute('class','d-block w-100')
img2.setAttribute('alt','Oops!')
var c3=document.createElement('div')
c3.setAttribute('class','carousel-item')
var img3=document.createElement('img')
img3.setAttribute('src','https://res.cloudinary.com/sanitarium/image/fetch/q_auto/https://www.sanitarium.com.au/getmedia%2Fe77d8e92-53a9-49e4-b6cd-3bfa47d41303%2FWeight-loss-burger-image-1180x400.jpg%3Fwidth%3D1180%26height%3D400%26ext%3D.jpg')
img3.setAttribute('class','d-block w-100')
img3.setAttribute('alt','Oops!')

var div1=document.createElement('div')
div1.setAttribute('class','container')
var text1=document.createElement('div')
text1.setAttribute('class','row')
var tex1=document.createElement('div')
tex1.setAttribute('class','col-1')
var text=document.createElement('div')
text.setAttribute('class','col-10')
text.setAttribute('id','text')
text.innerText="Hungry! Find your favorite food"
var tex2=document.createElement('div')
tex2.setAttribute('class','col-1')
var head=document.createElement('div')
head.setAttribute('class','row')
head.setAttribute('id','row1')
var br=document.createElement('br')
var empty=document.createElement('div')
empty.setAttribute('class','col-4')
var input=document.createElement('input')
input.setAttribute('class','col-3')
input.type='search'
input.id='inp'
input.value=''
input.setAttribute('onsearch','my()')
var button=document.createElement('button')
button.setAttribute('class','col-1')
button.id='btn'
button.innerHTML='<i class="fa fa-search" aria-hidden="true"></i>'
button.setAttribute('onclick','my()')


var div2=document.createElement('div')
div2.setAttribute('id','row2')
div2.setAttribute('class','row row-cols-1 row-cols-md-3')


c1.append(img1)
c2.append(img2)
c3.append(img3)
c.append(c1,c2,c3)
carousel.append(c)

text1.append(tex1,text,tex2)
head.append(empty,input,button)
div1.append(text1,head)

function my(){
      
      document.getElementById('row2').innerHTML=''

return fetch('https://api.edamam.com/search?&app_id=95c8f0a5&app_key=18c1d9826d50c5996f7372d2296d38d1&q='+document.getElementById('inp').value)

.then((res)=>{
        return res.json()
})

.then((rep)=>{
    
    rep.hits.forEach((elem,index)  => {
    var col=document.createElement('div')
    col.setAttribute('class','col mb-4')
    col.setAttribute('id','cont')
    var div3=document.createElement('div')
    div3.setAttribute('class','card')
    var img=document.createElement('img')
    img.setAttribute('id','img')
    img.setAttribute('class','card-img-top')
    img.src=elem.recipe.image
    var div4=document.createElement('div')
    div4.setAttribute('class','card-body')
    var h3=document.createElement('h3')
    h3.setAttribute('class','card-title')
    h3.innerHTML=elem.recipe.label
    var p1=document.createElement('p')
    p1.setAttribute('class','card-text')
    p1.id='para'
    var pa=document.createElement('p')
    pa.setAttribute('class','pa')
    pa.innerHTML=`<b>Calories</b> : ${elem.recipe.calories.toFixed(2)}kcal<br><b>HealthLabels</b> : ${elem.recipe.healthLabels}`
    
    
    
    var pa2=document.createElement('button')
    pa2.type='button'
    pa2.setAttribute('id','pa2')
    pa2.setAttribute('aria-expanded','false')
    pa2.setAttribute('aria-controls',`divv${index}`)
    pa2.setAttribute('data-placement','top')
    pa2.setAttribute('data-toggle',"collapse")
    pa2.setAttribute('data-target',`#divv${index}`)
    pa2.innerHTML='Nutrients'

    var divv=document.createElement('div')
    divv.setAttribute('id',`divv${index}`)
    divv.setAttribute('class','collapse')
    var table=document.createElement('table')
    table.setAttribute=('class','card card-body')
    var tr1=document.createElement('tr')
    tr1.innerHTML=`<td>${elem.recipe.totalNutrients.VITA_RAE.label}</td><td>${elem.recipe.totalNutrients.VITA_RAE.quantity.toFixed(2)}</td><td>${elem.recipe.totalNutrients.VITA_RAE.unit}</td>`
    var tr2=document.createElement('tr')
    tr2.innerHTML=`<td>${elem.recipe.totalNutrients.VITB6A.label}</td><td>${elem.recipe.totalNutrients.VITB6A.quantity.toFixed(2)}</td><td>${elem.recipe.totalNutrients.VITB6A.unit}</td>`
    var tr3=document.createElement('tr')
    tr3.innerHTML=`<td>${elem.recipe.totalNutrients.VITB12.label}</td><td>${elem.recipe.totalNutrients.VITB12.quantity.toFixed(2)}</td><td>${elem.recipe.totalNutrients.VITB12.unit}</td>`
    var tr4=document.createElement('tr')
    tr4.innerHTML=`<td>${elem.recipe.totalNutrients.VITC.label}</td><td>${elem.recipe.totalNutrients.VITC.quantity.toFixed(2)}</td><td>${elem.recipe.totalNutrients.VITC.unit}</td>`
    var tr5=document.createElement('tr')
    tr5.innerHTML=`<td>${elem.recipe.totalNutrients.VITD.label}</td><td>${elem.recipe.totalNutrients.VITD.quantity.toFixed(2)}</td><td>${elem.recipe.totalNutrients.VITD.unit}</td>`
    table.append(tr1,tr2,tr3,tr4,tr5)


    var p2=document.createElement('p')
    p2.setAttribute('class',"card-text")
    var btn2=document.createElement('button')
    btn2.setAttribute('id','btn2')
    btn2.setAttribute('data-placement','top')
    btn2.setAttribute('data-toggle',"popover")
    btn2.setAttribute('data-trigger',"focus")
    btn2.setAttribute('data-content',elem.recipe.ingredientLines)
    btn2.innerHTML='Ingridients'
    $(function () {
        $('[data-toggle="popover"]').popover()
      })
    var p3=document.createElement('p')
    p3.setAttribute('class','card-text')
      var src=document.createElement('a')
      src.setAttribute('id','src')
      src.innerHTML='Click For more..'
      src.href=elem.recipe.url
      src.setAttribute('target','_blank')

      divv.append(table)
      p1.append(pa,pa2,divv)
      p2.append(btn2)
      p3.append(src)
    div4.append(h3,p1,p2,p3)
    div3.append(img,div4)
    col.append(div3)
    div2.append(col)
    
    })
  
})
.catch((err)=>{
    console.log(err)
})

}

document.body.append(carousel,div1,div2)