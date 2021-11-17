
//受信•送信データ
let receivedate = "000"
let protocol = 0
let votedate = 0
let checkID = 0

//内部データ
let group = 25
let canreceive = false
let mode = 0
let i = 0

//選択肢
let qestion = 1
//投票データ
let votelist = [0,0,0,0,0]
let votename = ["A","B","C","D","E"]
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

//乱数返却
function resend (){
    sendradio(3,checklist.pop(),0)
}

//受信ライン
radio.onReceivedString(function(received: string) {
    if(canreceive){
        changeint(received)
    }

    if (mode == 2){
        if(protocol == 1){
            votelist[votedate]++
            checklist.push(checkID)
        }
    }
})

//結果表示ライン

//Aを押したとき
input.onButtonPressed(Button.A,function(){
    if (mode == 0){
        if (qestion == 4){
            qestion = 1
        }else{
            qestion ++
        }
    }
})

//AB押した時


//動作ライン
radio.setGroup(group)
while(!input.buttonIsPressed(Button.AB)){
    basic.showNumber(qestion + 1)
}
basic.clearScreen()
basic.pause(500)
mode = 1
basic.showString("OK")
basic.pause(500)
basic.showString("START")
basic.clearScreen()
//初期化通信実行
sendradio(0,qestion,0)
mode = 2
canreceive = true
while(!input.buttonIsPressed(Button.AB)){
    i = 0
    while(i<=qestion){
        basic.showString(votename[i])
        basic.pause(1000)
        basic.showNumber(votelist[i])
        basic.pause(1500)
        i++
        resend()
    }
}
basic.clearScreen()
canreceive = false
while(checklist.length != 0){
    resend()
}

mode = 3

basic.showString("END")