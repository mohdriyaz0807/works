let url = 'https://portfolio-edit-frontend.herokuapp.com/get'

async function get(){
    let api= await fetch(url)
    let res = await api.json()
    console.log(res);
    document.getElementById('Name').innerHTML='<b>'+res.result.Name[0]+" "+res.result.Name[1]+'</b>'
    document.getElementById('bio').innerHTML=res.result.bio
    document.getElementById('linkedin').href=res.result.linkedin
    document.getElementById('github').href=res.result.github
    document.getElementById('twitter').href=res.result.twitter
    document.getElementById('Edu').innerHTML=`<h3><b>Degree</b></h3><br>
    <li>Pursued <b>${res.result.Graduation[0]}</b> in <b>${res.result.Graduation[2]}</b> 
                                                with aggregate of <b>${res.result.Graduation[1]}</b> in <b>${res.result.Graduation[3]}</b> batch.</li><br><br>`
    if(res.result.Hsc){
        document.getElementById('Edu').innerHTML += `<b><h3>HSC</h3></b><br>
        <li>Completed HSC in <b>${res.result.Hsc[1]}</b> at <b>${res.result.Hsc[0]}</b> 
        with aggregate of <b>${res.result.Hsc[2]}%</b> in <b>${res.result.Hsc[3]}</b> batch.</li><br><br>`
    }
    if(res.result.SSLC){
        document.getElementById('Edu').innerHTML += `<h3><b>SSLC</b></h3><br>
        <li>Completed SSLC in <b>${res.result.SSLC[1]}</b> at <b>${res.result.SSLC[0]}</b> 
        with aggregate of <b>${res.result.SSLC[2]}%</b> in <b>${res.result.SSLC[3]}</b> batch.</li><br>`

    }
    res.result.works.forEach(element => {
        document.getElementById('Exp').innerHTML += `<li> Have Expereince in <b>${element.workname}</b> company as <b>${element.workrole}</b> for a period of <b>${element.workyear}</b> year on a CTC of <b>${element.workctc}</b></li><br>`
        
    });
    let skill = res.result.Skills.split(",")
    skill.forEach(ele=>{
        document.getElementById('Skill').innerHTML += `<li>${ele}</li>`
    })
    res.result.Address.forEach(ele=>{
        document.getElementById('address').innerHTML+=`<br>${ele}`
    })
    document.getElementById('others').innerHTML=`<p><b>Gender</b> :${res.result.Gender}</p><br><p><b>Date of Birth</b> :${res.result.DOB}</p><br>
                                                <p><b>Email</b> :${res.result.Email}</p><br><p><b>Mobile</b> :${res.result.Mobile}</p>`

}
get()