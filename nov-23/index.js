const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var hall = []
var customer = []
let bookings =[]


app.use(bodyparser.json());

app.get('/halls', (req, res) => {
    res.json(hall)
})

app.get('/bookingsarray', (req, res) => {
    res.json(bookings)
})

app.post('/hall', (req, res) => {
    req.body.id = hall.length + 1
    hall.push(req.body)
    res.json({message: 'hall created'})
})

app.get('/hall/:id', (req, res) => {
    let gethall = hall.find(obj => obj.id == req.params.id)
    if (gethall) {
        res.json(gethall)
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.put('/hall/:id',(req,res)=>{
    let hallindex=hall.findIndex(obj=>obj.id==req.params.id)
    if(hallindex!==-1){
    req.body.id=parseInt(req.params.id)
    hall[hallindex]=req.body
    res.json({
        message:'updated successfully'
    })
    }else{
        res.status(404).json({
            message:'error not found'
        })
    }
})

app.delete('/hall/:id', (req, res) => {
    let hallindex = hall.findIndex(obj => obj.id == req.params.id)
    if (hallindex !== -1) {
        hall.splice(hallindex, 1)
        res.json({message: 'deleted successfully'})
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.get('/customers', (req, res) => {
    res.json(customer)
})

app.post('/customer', (req, res) => {
    console.log(req.body);
    req.body.id = customer.length + 1
    customer.push(req.body)
    res.json({message: 'user created'})
})

app.get('/customer/:id', (req, res) => {
    let getcustomer = customer.find(obj => obj.id == req.params.id)
    if (getcustomer) {
        res.json(getcustomer)
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.put('/customer/:id', (req, res) => {
    let customerindex = customer.findIndex(obj => obj.id == req.params.id)
    if (customerindex !== -1) {
        req.body.id = parseInt(req.params.id)
        customer[customerindex] = req.body
        res.json({message: 'updated successfully'})
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.delete('/customer/:id', (req, res) => {
    let customerindex = customer.findIndex(obj => obj.id == req.params.id)
    if (customerindex !== -1) {
        customer.splice(customerindex, 1)
        res.json({message: 'deleted successfully'})
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.post('/book_hall', (req, res) => {
    if(bookings==""){
        bookings.push(req.body)
        res.json({message: 'Hall booked'})
    }else
    {   let hallid = (req.body.Hall_id)
        let newstart=(req.body.start_time).split(':')
        let newend=req.body.end_time.split(':')
        let date=(req.body.date).split('/')
        let starttime=new Date(date[2],(date[1]-1),date[0],newstart[0])
        let endtime=new Date(date[2],(date[1]-1),date[0],newend[0])
    bookings.forEach(ele=>{
        let curdate=(ele.date).split('/')
        let curstart=(ele.start_time).split(':')
        let curend=(ele.end_time).split(':')
        let curstarttime=new Date(curdate[2],(curdate[1]-1),curdate[0],curstart[0])
        let curendtime=new Date(curdate[2],(curdate[1]-1),curdate[0],curend[0])
        if(ele.Hall_id!=hallid){
            bookings.push(req.body)
            res.json({message: 'Hall booked'})
        }else{
            if(ele.date!=date.join('/')){
                bookings.push(req.body)
                res.json({message: 'Hall booked'})
            }else{
                if(starttime.getHours()>24||endtime.getHours()>24){
                    res.json({message: 'Invalid Time'})
                }
                else
                {if((starttime<=curstarttime&&endtime<=curstarttime)||(starttime>=curendtime&&endtime>=curendtime)){
                    console.log(curstarttime,curendtime);
                    res.json({message: 'Hall booked'})
                }else{
                    bookings.push(req.body)
                    res.json({message: 'Hall is Not available'})
                }
            }
            }
        }
    })}
})

app.get('/cus_bill/:id',(req,res)=>{
    let getcustomer = customer.find(obj => obj.id == req.params.id)
    let total=[]
    if (getcustomer) {
        bookings.forEach(ele=>{
            if(getcustomer.id==ele.cus_id){
                let hallindex = hall.find(obj => obj.id == ele.Hall_id)
                let curstart=(ele.start_time).split(':')
                let curend=(ele.end_time).split(':')
                total.push(`${ele.Hall_id}:${hallindex.Price*(curend[0]-curstart[0])}`)
            }
        })
        res.send(total)
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.get('/hall_history/:id',(req,res)=>{
    let gethall = hall.find(obj => obj.id == req.params.id)
    let count=[]
    if (gethall) {
        bookings.forEach(ele=>{
            if(gethall.id==ele.Hall_id){
                let curstart=(ele.start_time).split(':')
                let curend=(ele.end_time).split(':')
                count.push(`${ele.cus_id}:${curstart.join(':')} to ${curend.join(':')}`)
            }
        })
        res.send(count)
    } else {
        res.status(404).json({message: 'error not found'})
    }
})

app.listen(3000, () => {
    console.log('server is live');
})
