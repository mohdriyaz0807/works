type pettypes = 'dog'|'cat'|'parrot'

interface pets{
    pettype:pettypes
    petcolor:string
    petcount:number
}

class availablity{
    typeofpet:pettypes
    petcolor:string
    petcount:number

    constructor(typeofpet:pettypes){
            this.typeofpet=typeofpet
    }
    insert(typeofpet:pettypes,petcolor:string,petcount:number){
        this.typeofpet=typeofpet;
        this.petcolor=petcolor;
        this.petcount=petcount
        return {'Typeofpet':typeofpet,'Colorofpet':petcolor,'number':petcount}
    }
}
let Petlist=[]
let reqlist=[]
class request extends availablity{

    constructor(request:pets){
        super(request.pettype)
    }
    insertreq(typeofpet:pettypes,petcolor:string,petcount:number){
        return{'Typeofpet':typeofpet,'Colorofpet':petcolor,'number':petcount}
    }
    count(){
        let result={}
        for(let i=0;i<Petlist.length;i++){
            if(Petlist[i].typeofpet==undefined){
                result[Petlist[i].typeofpet]=0
            }
            result[Petlist[i].typeofpet]++
        }return result
    }
}

var req=new request({
    pettype:"dog",
    petcolor:'yellow',
    petcount:5
})

Petlist.push(req.insert('dog','yellow',5),req.insert('cat','black',6),req.insert('parrot','green',2))

reqlist.push(req.insertreq('dog','yellow',1),req.insertreq('cat','black',2),req.insertreq('parrot','green',4))

console.log(Petlist);
console.log(reqlist);
