
//受信•送信データ
let receivedate = "000"
let protocol = 0
let votedate = 0
let checkID = 0

//内部データ
let group = 25
let canreceive = true
let mode = 0

//選択肢
let qestion = 0
//投票データ
let votelist = [0,0,0,0,0]
let checklist = [0]
let votecount = 0


//受信後に数字型に変換
function changeint (i : string){
    let t : string
    t = receivedate.substr(0,1)
    protocol = parseFloat(t)
    t = receivedate.substr(1,1)
    votedate = parseFloat(t)
    t = receivedate.substr(2,1)
    checkID = parseFloat(t)
}

//コマンド送信関数
function sendradio(a : number , b : number , c : number){
    let send : string
    send = a.toString()+b.toString()+c.toString()
    radio.sendString(send)
}

//送信乱数保管用
function setrand(){
    checklist.push(checkID)
}

//乱数返却
function resend (){
    sendradio(3,checklist.pop(),0)
}

//受信ライン
radio.onReceivedString(function(received: string) {
    if(canreceive){
        changeint(received)
    }

    if (mode == 1){
        if(protocol == 1){
            votelist[votedate]++
            checklist.push(checkID)
        }
    }
})

//送信ライン
function sendline(){
    if (mode == 0){
        sendradio(0,qestion,0)

    }else if(mode = 1){
        resend()
    }
}

//Aを押したとき
input.onButtonPressed(Button.A, function() {
    if (mode==0){
        qestion++
    }else if (mode == 0){

    }
})

input.onButtonPressed(Button.AB,function(){
    if (mode==0){
        mode++
    }else{
        mode--
    }
})

//動作ライン
radio.setGroup(group)
basic.forever(function () {
    while (mode = 0){
        basic.showNumber(qestion)
    }
	
})
