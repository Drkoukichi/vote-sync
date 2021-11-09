let receivedate = "000"
let protocol = 0
let votedate = 0
let reserve = 0
let votecount = [0]
let ansno = 2

function changeint (i : string){
    let t : string
    t = receivedate.substr(0,1)
    protocol = parseFloat(t)
    t = receivedate.substr(1,1)
    votedate = parseFloat(t)
    t = receivedate.substr(2,1)
    reserve = parseFloat(t)
}

function sendradio()

function setans(){
    
}

basic.forever(function () {
	
})
