const hour= document.getElementById('hours')
const minute= document.getElementById('minutes')
const second= document.getElementById('seconds')
const ampm= document.getElementById('ampm')


function getTime(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let amPm = "AM"

    if(h > 12){
        h= h-12
        amPm = "PM"
    }
    h= h < 10 ? "0" + h : h
    m= m < 10 ? "0" + m : m
    s= s < 10 ? "0" + s : s

    hour.innerText= h
    minute.innerText= m
    second.innerText= s
    ampm.innerText = amPm
    setTimeout(()=>{
        getTime()
    }, 1000)
}

getTime()