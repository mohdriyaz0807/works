const fs=require('fs')
const ex=require('express')
const app=ex()

app.listen(3000)
const path=require('path')

let day=new Date().getDay()
let mon=new Date().getMonth()+1
let year=new Date().getFullYear()
let date=`${day}-${mon}-${year}`

let hr=new Date().getHours()
let stamp=""
if(hr>12)
{
    hour=`${hr-12}`
    stamp="PM"
}else{
    hour=`${hr-12}`
    stamp="AM"
}
let min=new Date().getMinutes()
let sec = new Date().getSeconds()
let time=`${hour}:${min}:${sec}-${stamp}`


fs.writeFile(`${date}.txt`,`${time}`,(err)=>{
    if(err) throw err
    console.log('created');
})


fs.mkdir('./to',(err)=>{
    if(err) throw err
    console.log('folder created');
})

let imgurl='https://www.vippng.com/png/detail/2-26622_jpg-free-library-pictures-images-photos-svg-png.png'
let txturl='https://www.flaticon.com/svg/static/icons/svg/32/32329.svg'
let folderurl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1200px-OneDrive_Folder_Icon.svg.png'
let htmlurl='https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.svg'
let pdfurl='https://cdn.iconscout.com/icon/premium/png-512-thumb/pdf-extension-509633.png'

app.get('/', function (req, res) {
    var arr=""
    var url="./"
    fs.opendir(url,'utf8',async (err,dir)=>{
    if(err) throw err
    for await (const dirent of dir){
        console.log(path.extname(`${url}/${dirent.name}`));
        if(dirent.isDirectory()){
        arr +=`<span><h3><img src=${folderurl} style="width:20px">${dirent.name}</h3></span>`
    }else if((path.extname(`${url}/${dirent.name}`))=='.txt'||(path.extname(`${url}/${dirent.name}`))=='.json'){
        arr +=`<span><h3><img src=${txturl} style="width:20px">${dirent.name}</h3></span>`
    }else if((path.extname(`${url}/${dirent.name}`))=='.jpg'||(path.extname(`${url}/${dirent.name}`))=='.png'){
        arr +=`<span><h3><img src=${imgurl} style="width:20px">${dirent.name}</h3></span>`
    }else if((path.extname(`${url}/${dirent.name}`))=='.html'){
        arr +=`<span><h3><img src=${htmlurl} style="width:20px">${dirent.name}</h3></span>`
    }else if((path.extname(`${url}/${dirent.name}`))=='.pdf'){
        arr +=`<span><h3><img src=${pdfurl} style="width:20px">${dirent.name}</h3></span>`
    }
    else{
        arr +=`<span><h3>${dirent.name}</h3></span>`
    }
}
    res.send(`<div style="display: grid;grid-template-columns: auto auto auto auto">${arr}</div>`)
})
    })