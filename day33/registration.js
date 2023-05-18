async function reg(){
var name=document.getElementById('exampleInputtext1').value
var mobile=document.getElementById('exampleInputnumber1').value
var email=document.getElementById('exampleInputEmail1').value
var pwd1=document.getElementById('exampleInputPassword1').value

var url=`${window.backendURL}/register`
var jsonInput={Name:name,MobileNumber:mobile,email:email,password:pwd1}

if(name!=''&&mobile!=''&&email!=''&&pwd1!=''){
    if(!email.includes('@')){
        swal({
            title: 'Message',
            text: 'It is not a valid Email',
            icon: 'error'
        })
    }
    else if(mobile.split('').length!=10){
        swal({
            title: 'Message',
            text: 'It is not a valid Mobile Number',
            icon: 'error'
        })
    }
    else if(pwd1.split('').length<8){
        swal({
            title: 'Message',
            text: 'password should contain minimum 8 characters',
            icon: 'warning'
        })
    }
    else{
let api=await fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify(jsonInput)
    })
    let data=await api.json()
    if(data){
        await swal({
            title: 'Message',
            text: `${data.message}`,
            icon: `${data.icon}`
        }).then(
        function (){
        if(`${data.icon}`=='success'){
            localStorage.setItem('token','yes')
            return window.location.reload()
        }})
    }
}}
else{
    swal({
        title: 'Oops!',
        text: 'All fields are required',
        icon: 'warning',
    })
}
}