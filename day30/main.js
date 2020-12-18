let url='https://mentor-assigning.herokuapp.com'

Display('getmentor')
Display('getstudent')

async function Display(route){
    let api = await fetch(`${url}/${route}`)
    let res = await  api.json()
    if(res.data.length!=0){
    res.data.forEach(ele => {
        let eid=(ele._id).slice(20)
        if(route=='getstudent'){
            let mentorids=ele.mentor_id
            let mentor=ele.mentor
            fetch(`${url}/getmentor`)
            .then(res=>{return res.json()})
            .then(rep=>{
                let option ='<option selected hidden>Choose..</option>'
                rep.data.forEach(elem=>{
                    option += `<option value='${elem.name}-${elem._id}'>${elem.name}</option><br>`
                })
                let edit =`<select id='${ele._id}' class="btn btn-secondary" onchange=editMentorforstudent('${ele._id}','${ele.name}')>${option}</select>
                <i class="fa fa-trash btn btn-secondary" aria-hidden="true" onclick="deleteStudent('${ele._id}')"></i>`
                CreateTable(eid,ele.name,mentor,edit,'student')
            })
        }else{
            fetch(`${url}/getstudent`)
            .then(rep=>{return rep.json()})
            .then(res=>{
                let option ='<option selected hidden>Choose..</option>'
                res.data.forEach(elem=>{
                        if(!elem.mentor){
                            option += `<option value='${elem.name}-${elem._id}'>${elem.name}</option><br>`
                        }
                })
            let edit =`<select id='${ele._id}' class="btn btn-secondary" onchange=editstudentforMentor('${ele._id}','${ele.name}')>${option}</select>`
            let stud=`<button type="button" class="btn btn-primary" onclick="viewStudents('${ele._id}','${ele.students}')" >View</button>`
            CreateTable(eid,ele.name,stud,edit,'mentor')
            })
        }
    });
}else{
    swal({
        title:"Please Add data"
    })
}
    console.log(res);
}




function CreateTable(Id,name,data='',btn,role){
    var tr=document.createElement('tr')
    var td1=document.createElement('td')
    td1.innerHTML=Id
    var td2=document.createElement('td')
    td2.innerHTML=name
    var td3=document.createElement('td')
    td3.innerHTML=data
    var td4=document.createElement('td')
    td4.innerHTML=btn
    tr.append(td1,td2,td3,td4)
    document.getElementById(role).append(tr)
}

async function Add(name,person,role,route){
    let inputdata={name:name}

    let api = await fetch(`${url}/${person}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(inputdata)
        })
    let res = await api.json()
        console.log(res)
        document.getElementById('mentor').innerHTML=''
        document.getElementById('student').innerHTML=''
        Display('getmentor')
        Display('getstudent')
    }

function create(person,id,route){
    swal({
        title:`Write a Name to ${person} :`,
        content:"input"
    }).then((value)=>{
        if(value){
        Add(value,person,id,route)
        swal({
            title:`${id} created`,
            text:`Name : ${value}`,
            icon:'success'
        })
    }else{
        swal({
            icon:'warning',
            text:'Input Field is required'
        })
    }
        })
}

async function editstudentforMentor(mentorid,mentorname){
    let optionvalue = document.getElementById(mentorid).value.split("-")
    let optionid = optionvalue[1]
    await AssignmentorTotheStudent(mentorid,mentorname,optionid)
    let inputdata=({studentname:optionvalue[0]})
    let api= await fetch(`${url}/updatementor/${mentorid}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputdata)
    })
    let res = await api.json()
    console.log(res)
    document.getElementById('student').innerHTML=''
    document.getElementById('mentor').innerHTML=''
    Display('getstudent')
    Display('getmentor')
}

async function AssignmentorTotheStudent(mentorid,mentorname,studentid){
    let inputdata=({mentor:mentorname,mentor_id:mentorid})

    let api= await fetch(`${url}/updatestudent/${studentid}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputdata)
    })
    let res = await api.json()
    console.log(res);
}

async function editMentorforstudent(studentid,studentname){
    let optionvalue = document.getElementById(studentid).value.split("-")
    let optionid = optionvalue[1]
    await RemoveStudent(studentid)
    AssignStudentTotheMentor(studentid,studentname,optionid)
    let inputdata=({mentor_id:optionid,mentor:optionvalue[0]})
    let api= await fetch(`${url}/updatestudent/${studentid}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputdata)
    })
    let res = await api.json()
    console.log(res)
    document.getElementById('student').innerHTML=''
    document.getElementById('mentor').innerHTML=''
    Display('getstudent')
    Display('getmentor')
}



async function AssignStudentTotheMentor(studentid,studentname,mentorid){

    let inputdata=({studentname,studentid})

    let api= await fetch(`${url}/updatementor/${mentorid}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputdata)
    })
    let res = await api.json()
    console.log(res);
}

async function RemoveStudent(studentid){
    let api1= await fetch(`${url}/getstudent/${studentid}`)
    let rep = await api1.json()
    if(rep.data.mentor_id){
    let api2 = await fetch(`${url}/removefrommentor/${rep.data.mentor_id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({studentname:rep.data.name})
    })
    let ret = await api2.json()
    }
}

async function viewStudents(id,names){
    let info='',i=1
    let api = await fetch(`${url}/getmentor/${id}`)
    let res = await api.json()
    if(!res.data.students||res.data.students==""){
        await swal({
            text: 'No Student Assigned',
            icon: 'error',
        })
    }else{
        res.data.students.forEach(ele=>{
            info += `<h3 >${i} : ${ele}</h3>`
            i++
        })
        let p = document.createElement('p')
        p.innerHTML=info    
        await swal({
            title: 'List of Assigned Students',
            content:p
        })
    }
}

async function deleteStudent(id){
    await RemoveStudent(id)
    let api =await fetch(`${url}/deletestudent/${id}`,{
        method:'DELETE'
    })
    let res = await api.json()
    swal({
        title:'Deleted',
        icon :'success'
    })
    document.getElementById('student').innerHTML=''
    document.getElementById('mentor').innerHTML=''
    Display('getstudent')
    Display('getmentor')
}
