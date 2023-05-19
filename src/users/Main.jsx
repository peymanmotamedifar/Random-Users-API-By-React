import React, { Fragment, useContext, useEffect, useState } from 'react'
import './style.css'
import loading from './assets/img/amalie-steiness.gif'


let y = 0
let x = 0
const myContext = React.createContext()
export default function Main() {
    const [data, setData] = useState([])
    const [data1, setData1] = useState(0)




    useEffect(function () {

        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(mydata => {
                setData(mydata.results)
            })


        document.getElementById('b1').onclick = () => {
            x++
            setData1(x);

        }


    }, [data1])



    return (
        <div className='main'>
            <div>
                <myContext.Provider value={data} >
                    <Box />
                </myContext.Provider>
            </div>

            <div>
            </div>
        </div>
    )
}


function Box(_data) {
    return (
        <div className='box'>
            <TopBox />
            <BottomBox />
        </div>
    )
}



let pic
let name, email, age, country, cell, pass,
    myname, myemail, myphone, mylocation, myage, mypass



function TopBox() {
    const x = useContext(myContext)

    if (y === 0) {
        y++
        pic = loading
        name = ''

    } else {


        name = x[0].name.first
        email = x[0].email
        age = x[0].dob.age
        country = x[0].location.country
        cell = x[0].cell
        pass = x[0].login.password
        myname = 'Name :'
        myemail = 'Mail :'
        myphone = 'Phone :'
        mypass = "Password :"
        mylocation = 'Location :'
        myage = 'Age :'


        pic = x[0].picture.large

        y = 0
    }
    document.querySelectorAll('#bottomBox>div>ul>li>span').forEach((val) => {
        let h4 = document.querySelectorAll('#d1>*')
        val.onclick = (e) => {
            let c = e.target.innerHTML
            switch (c) {
                case 'person':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(1)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(1)').style.display = 'flex'
                        break;
                    }
                case 'mail':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(2)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(2)').style.display = 'flex'
                        break;
                    }
                case 'calendar_month':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(3)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(3)').style.display = 'flex'
                        break;
                    }
                case 'map':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(4)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(4)').style.display = 'flex'
                        break;
                    }
                case 'call':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(5)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(5)').style.display = 'flex'
                        break;
                    }
                case 'lock':
                    {
                        h4.forEach(function (val) {
                            val.style.display = 'none'
                        })
                        document.querySelector('#d1>h4:nth-of-type(6)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(6)').style.display = 'flex'
                        break;
                    }


                default:
                    {
                        document.querySelector('#d1>h4:nth-of-type(1)').style.display = 'flex'
                        document.querySelector('#d1>span:nth-of-type(1)').style.display = 'flex'
                    }
            }


        }

    })

    return (
        <>

            <section className='topBox'>
                <div>
                    <figure>
                        <img src={pic}
                            alt="ggg" />
                    </figure>
                </div>

                <div>
                    <div id='d1'>
                        <span>{myname}</span>
                        <span>{myemail}</span>
                        <span>{myage}</span>
                        <span>{mylocation}</span>
                        <span>{myphone}</span>
                        <span>{mypass}</span>
                        <h4>{name}</h4>
                        <h4>{email}</h4>
                        <h4>{age}</h4>
                        <h4>{country}</h4>
                        <h4>{cell}</h4>
                        <h4>{pass}</h4>
                    </div>
                </div>
            </section>
        </>
    )
}





function BottomBox() {

    return (
        <div id='bottomBox' className='bottomBox'>
            <div>
                <ul>
                    <li><span class="material-symbols-outlined">person</span></li>
                    <li><span class="material-symbols-outlined">mail</span></li>
                    <li><span class="material-symbols-outlined">calendar_month</span></li>
                    <li><span class="material-symbols-outlined">map</span></li>
                    <li><span class="material-symbols-outlined">call</span></li>
                    <li><span class="material-symbols-outlined">lock</span></li>
                </ul>
            </div>
            <div>
                <button id='b1'>Random User</button>
            </div>
        </div>
    )
}