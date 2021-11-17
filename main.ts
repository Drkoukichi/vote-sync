
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
        setrand()
    }

    if (mode == 2){
        if(protocol == 1){
            votelist[votedate]++
            checklist.push(checkID)
        }
    }
})

//送信ライン
function sendline(){
    if (mode == 1){
        sendradio(0,qestion,0)

    }else if(mode = 2){
        resend()
    }
}

//結果表示ライン

//Aを押したとき
input.onButtonPressed(Button.A, function() {
    if (mode==0){
        if(qestion<5){
            qestion++
        }else if(qestion==5){
            qestion = 2
        }
    }
})
//AB押した時


//動作ライン
radio.setGroup(group)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)==true){
        basic.showNumber(qestion)
    }
	basic.showString("VOTE ST")
    basic.clearScreen()
    mode = 1
    if(mode==1){
        sendline()
        mode++
        canreceive=true
        basic.pause(2000)
        mode = 2
    }
    while(input.buttonIsPressed(Button.B)==false){
        mode
        let i = 0
        sendline()
        while (qestion >= i+1){
            basic.showString(votename[i])
            basic.pause(1000)
            basic.showNumber(votelist[i])
            basic.pause(1500)
            i++
            
        }
        mode = 3
        basic.showString("VT END")
    
    }

})
