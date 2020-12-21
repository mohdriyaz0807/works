let url = 'https://portfolio-edit-frontend.herokuapp.com'

let i = 1
function addWork() {
    let row = document.createElement('div')
    row.setAttribute('class','form-row')
    row.setAttribute('id',`row${i}`)
    let div = document.createElement('div')
    div.setAttribute('class', "form-group col-12")
    let inp = document.createElement('input')
    inp.type = "text"
    inp.setAttribute('class', "form-control")
    inp.id = `inputexp${i}`
    inp.placeholder = `Name of Company`
    let div1 = document.createElement('div')
    div1.setAttribute('class', "form-group col-4")
    let inp1 = document.createElement('input')
    inp1.type = "text"
    inp1.setAttribute('class', "form-control")
    inp1.id = `inputrole${i}`
    inp1.placeholder = "Designation"
    let div2 = document.createElement('div')
    div2.setAttribute('class', "form-group col-4")
    let inp2 = document.createElement('input')
    inp2.type = "number"
    inp2.setAttribute('class', "form-control")
    inp2.id = `inputctc${i}`
    inp2.placeholder = "CTC"
    let div3 = document.createElement('div')
    div3.setAttribute('class', "form-group col-4")
    let inp3 = document.createElement('input')
    inp3.setAttribute('class', "form-control")
    inp3.type = "number"
    inp3.id = `inputyear${i}`
    inp3.placeholder = "0"

    div.appendChild(inp)
    div1.appendChild(inp1)
    div2.appendChild(inp2)
    div3.appendChild(inp3)
    row.append(div, div1, div2, div3)
    document.getElementById('Work').append(row)
    i++
}

async function send() {

let dp = document.getElementById('profilepic').src
let fname = document.getElementById('inputfname4').value
let lname = document.getElementById('inputlname4').value
let email = document.getElementById('inputemail4').value
let mobile = document.getElementById('inputnumber').value
let DoB = document.getElementById('inputdob').value
let gender = document.getElementById('gender').value
let Address1 = document.getElementById('inputAddress1').value
let Address2 = document.getElementById('inputAddress2').value
let city = document.getElementById('inputCity').value
let state = document.getElementById('inputState').value
let country = document.getElementById('inputCountry').value
let zip = document.getElementById('inputZip').value
let graduation = document.getElementById('inputedu4').value
let cgpa = document.getElementById('inputedu4marks').value
let course = document.getElementById('inputcourse4').value
let year = document.getElementById('inputedu4year').value
let hscname = document.getElementById('inputedu5').value
let hscmark = document.getElementById('inputedu5marks').value
let hsc = document.getElementById('inputcourse5').value
let hscyear = document.getElementById('inputedu5year').value
let sslcname = document.getElementById('inputedu6').value
let sslcmark = document.getElementById('inputedu6marks').value
let sslc = document.getElementById('inputcourse6').value
let sslcyear = document.getElementById('inputedu6year').value
let works = []
for (id = 1; id < i; id ++) {
    let workname = document.getElementById(`inputexp${id}`).value
    let workrole = document.getElementById(`inputrole${id}`).value
    let workctc = document.getElementById(`inputctc${id}`).value
    let workyear = document.getElementById(`inputyear${id}`).value
    works.push({workname, workrole, workctc, workyear})
}
let skills = document.getElementById('inputskill').value
let linkedin = document.getElementById('linkedin').value
let twitter = document.getElementById('Twitter').value
let github = document.getElementById('GitHub').value
let bio = document.getElementById('bio').value

    let data = ({
        Name: [`${fname}`,`${lname}`],
        Email: email,
        DP: dp,
        Mobile: mobile,
        DOB: DoB,
        Gender: gender,
        Address: [`${Address1}`,`${Address2}`,`${city}`,`${state}`,`${country}`,`${zip}`],
        Graduation: [`${course}`, `${cgpa}`, `${graduation}`,`${year}`] ,
        Hsc: [`${hscname}`, `${hsc}`, `${hscmark}`, `${hscyear}`],
        SSLC: [`${sslcname}`,`${sslc}`, `${sslcmark}`,`${sslcyear}`],
        works: works,
        Skills: skills,
        linkedin: linkedin,
        twitter: twitter,
        github: github,
        bio: bio
    })
    console.log(data);

    let api = await fetch(`${url}/edit`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let res = await api.json()
    console.log(res);
    await swal({
        text:'Saved successfully',
        icon:'success'
    })
    window.location.href='index.html'
}

async function show()
    {
        let api = await fetch(`${url}/get`)
        let res = await api.json()
        console.log(res.result);
        document.getElementById('inputfname4').value= res.result.Name[0],
        document.getElementById('inputlname4').value= res.result.Name[1],
        document.getElementById('inputemail4').value= res.result.Email,
        document.getElementById('profilepic').src= res.result.DP,
        document.getElementById('inputnumber').value= res.result.Mobile,
        document.getElementById('inputdob').value= res.result.DOB,
        document.getElementById('gender').value= res.result.Gender,
        document.getElementById('inputAddress1').value= res.result.Address[0],
        document.getElementById('inputAddress2').value = res.result.Address[1],
        document.getElementById('inputCity').value = res.result.Address[2],
        document.getElementById('inputState').value = res.result.Address[3],
        document.getElementById('inputCountry').value = res.result.Address[4],
        document.getElementById('inputZip').value = res.result.Address[5],
        document.getElementById('inputedu4').value = res.result.Graduation[0],
        document.getElementById('inputedu4marks').value= res.result.Graduation[1],
        document.getElementById('inputcourse4').value = res.result.Graduation[2],
        document.getElementById('inputedu4year').value = res.result.Graduation[3],
        document.getElementById('inputedu5').value = res.result.Hsc[0],
        document.getElementById('inputedu5marks').value = res.result.Hsc[1],
        document.getElementById('inputcourse5').value = res.result.Hsc[2],
        document.getElementById('inputedu5year').value = res.result.Hsc[3],
        document.getElementById('inputedu6').value = res.result.SSLC[0],
        document.getElementById('inputedu6marks').value = res.result.SSLC[1],
        document.getElementById('inputcourse6').value = res.result.SSLC[2],
        document.getElementById('inputedu6year').value = res.result.SSLC[3],
        document.getElementById('inputskill').value= res.result.Skills,
        document.getElementById('linkedin').value= res.result.linkedin,
        document.getElementById('Twitter').value= res.result.twitter,
        document.getElementById('GitHub').value= res.result.github,
        document.getElementById('bio').value= res.result.bio
        let i=1
        res.result.works.forEach(element => {
            addWork()
            document.getElementById(`inputexp${i}`).value=element.workname
            document.getElementById(`inputrole${i}`).value=element.workrole
            document.getElementById(`inputctc${i}`).value=element.workctc
            document.getElementById(`inputyear${i}`).value=element.workyear
            i++
            });
}
show()
