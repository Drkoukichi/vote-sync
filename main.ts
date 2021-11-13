
//受信•送信データ
let receivedate = "000"
let protocol = 0
let votedate = 0
let checkID = 0

//内部データ
let group = 25
let canreceive = false
let mode = 0

//選択肢
let qestion = 2
//投票データ
let votelist = [0,0,0,0,0]
let votename = ["A","B","C","D"]
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
    bluetooth.uartWriteLine(send)
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
function getnewinfo(){
    bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
}

//送信ライン
function sendline(){
    if (mode == 1){
        sendradio(0,qestion,0)

    }else if(mode = 2){
        resend()
    }
}

//Aを押したとき
input.onButtonPressed(Button.A, function() {
    if (mode==0){
        if(qestion<5){
            qestion++
        }else if(qestion==5){
            qestion = 2
        }
    }else if (mode == 0){

    }
})
//AB押した時
function makeAB(){
    if (mode == 0) {
        mode++
    } else if (mode == 3) {
        canreceive = false
        basic.showString("END VOTE")
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB,function(){
    makeAB()
})


//動作ライン
bluetooth.startUartService()
basic.forever(function () {
    while (mode == 0){
        basic.showNumber(qestion)
    }
	basic.showString("START VOTE")
    basic.clearScreen()
    if(mode==1){
        sendline()
        mode++
        canreceive=true
    }
    while(mode == 2){
        let i = 0
        sendline()
        while (qestion >= i+1){
            basic.showString(votename[i])
            basic.pause(1000)
            basic.showNumber(votelist[i])
            basic.pause(1500)
            i++
            if(input.buttonIsPressed(Button.AB)){
            break;
            }
        }
    }
    makeAB()

})
