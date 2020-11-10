var div=document.createElement('div')
    div.setAttribute('class','container')
    var div1=document.createElement('div')
    div1.setAttribute('class','row')
            
    var div2=document.createElement('div')
    div2.setAttribute('class','col-12')
            
    var form1=document.createElement('form')
    form1.setAttribute('class','form-group')
    var inp=document.createElement('input')
    inp.setAttribute('type','number')
    inp.setAttribute('id','inp')
    inp.setAttribute('class','inpp')
    form1.appendChild(inp)
    div2.appendChild(form1)

    
    class Customer{
            id : number
            name : string
            discount : number

            constructor(ID : number, Name : string, Disc : number) {
                this.id = ID
                this.name = Name
                this.discount = Disc
            }
            getid() : number {
                return this.id

            }
            getname() : string {
                return this.name

            }
            getdisc() : number {
                return this.discount
            }
            setdisc(disc : number) {
                return this.discount = disc
            }
        }

            class invoice{
            id : number
            customer : Customer
            amount : number

            constructor(ID : number, customer : Customer, amount : number) {
                this.id = ID
                this.customer = customer
                this.amount = amount
            }
            getid() : number {
                return this.id
            }
            getcustomer() : Customer {
                return this.customer
            }
            setcustomer(customer : Customer) {
                return this.customer = customer
            }
            getamount() : number {
                return this.amount
            }
            setamount(amount : number) {
                return this.amount = amount
            }
            getcustomername() : string {
                return this.customer.name
            }
            getamountafterdisc() : number {
                return this.amount
            }
        }

            class CusAccount{
            id : number
            customer : Customer
            balance : number

            constructor(ID : number, customer : Customer, balance : number) {
                this.id = ID
                this.customer = customer
                this.balance = balance
            }
            account(id : number, customer : Customer) {
                this.id = id
                this.customer = customer
            }
            getid() : number {
                return this.id
            }
            getcustomer() : Customer {
                return this.customer
            }
            getbalance() : number {
                return this.balance
            }
            setbalance(balance : number) {
                return this.balance = balance
            }
            tostring() {
                return `Name : ${
                    this.customer.name
                } , Balance : ${
                    this.getbalance()
                }`
            }
            getcustomername() : Customer {
                return this.customer
            }
            deposit(updbal : number) {
                this.balance += updbal
                return updbal+" "+'credit'
            }
            withdraw(redbal : number) {
                if (this.balance >= redbal) {
                    this.balance -= redbal
                    return redbal+" "+'debit'
                } else {
                    alert('no sufficient balance')
                    return 0
                }
            }
        }

            let cus=new Customer(1001,'joey',10)
            let inv=new invoice(1,cus,1000)
            console.log('discount :'+inv.getamountafterdisc()*(cus.getdisc()/100));
            console.log('name :'+inv.getcustomer().name);
            console.log(inv.setcustomer(cus))
            console.log('setamount :'+inv.setamount(50000));
            let acc=new CusAccount(1001,cus,5000)
            console.log('balance :'+acc.getbalance());
            console.log('details :'+acc.tostring());
            console.log('after deposit :'+acc.deposit(10000));
            console.log('after withdraw :'+acc.withdraw(2000));
            
            var div4=document.createElement('div')
                div4.setAttribute('class','col-12')
                var table =document.createElement('table')
                table.setAttribute('id','tbl')
                var tr1=document.createElement('tr')
                tr1.setAttribute('id','tr1')
                var th1=document.createElement('th')
                th1.setAttribute('id','th1')
                th1.innerHTML='ID'
                var th2=document.createElement('th')
                th2.setAttribute('id','th2')
                th2.innerHTML='Name'
                var th3=document.createElement('th')
                th3.setAttribute('id','th3')
                th3.innerHTML='Transactions'
                var th4=document.createElement('th')
                th4.setAttribute('id','th4')
                th4.innerHTML='Balance'
                tr1.append(th1,th2,th3,th4)
                table.append(tr1)

                
                

                    var br3=document.createElement('br')
                    var div3=document.createElement('div')
                    div3.setAttribute('class','col-12')
                    var btn1=document.createElement('button')
                    btn1.setAttribute('id','wd')
                    btn1.setAttribute('class','btn btn-secondary')
                    btn1.setAttribute('type','button')
                    btn1.innerHTML='Withdraw'
                    btn1.addEventListener('click',()=>{
                        if((<HTMLInputElement>document.getElementById('inp')).value!==""){
                        var tr2=document.createElement('tr')
                        tr2.setAttribute('id','tr2')
                        var td1=document.createElement('td')
                        td1.setAttribute('id','td1')
                        td1.innerHTML=cus.getid()
                        var td2=document.createElement('td')
                        td2.setAttribute('id','td2')
                        td2.innerHTML=cus.getname()
                        var td3=document.createElement('td')
                        td3.setAttribute('id','td3')
                        td3.innerHTML=acc.withdraw(+(<HTMLInputElement>document.getElementById('inp')).value)
        
                        var td4=document.createElement('td')
                        td4.setAttribute('id','td4')
                        td4.innerHTML=`${acc.getbalance()}`

                        tr2.append(td1,td2,td3,td4)
                        return table.append(tr2)
                        }
                    })
                    var br=document.createElement('br')
                    var br1=document.createElement('br')
                var btn2=document.createElement('button')
                btn2.setAttribute('id','dep')
                btn2.setAttribute('class','btn btn-secondary')
                btn2.type='button'
                btn2.innerHTML='Deposit'
                btn2.addEventListener('click',()=>{
                    if((<HTMLInputElement>document.getElementById('inp')).value!==""){
                    var tr2=document.createElement('tr')
                        tr2.setAttribute('id','tr2')
                        var td1=document.createElement('td')
                        td1.setAttribute('id','td1')
                        td1.innerHTML=cus.getid()
                        var td2=document.createElement('td')
                        td2.setAttribute('id','td2')
                        td2.innerHTML=cus.getname()
                        var td3=document.createElement('td')
                        td3.setAttribute('id','td3')
                        td3.innerHTML=acc.deposit(+(<HTMLInputElement>document.getElementById('inp')).value)
        
                        var td4=document.createElement('td')
                        td4.setAttribute('id','td4')
                        td4.innerHTML=`${acc.getbalance()}`

                        tr2.append(td1,td2,td3,td4)
                        return table.append(tr2)
                    }
        })
                div3.append(btn1,br,br1,btn2)
                div4.append(table)
                div1.append(div2,br3,div3,div4)
                div.appendChild(div1)
                document.body.append(div)
