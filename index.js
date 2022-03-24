function caesarCiper(message,n){
    // 関数を完成させてください
    let check = "";
    let number = 0;
    let answer = ""
    //半角スペースなくす
    let messages = message.replace(/\s+/g, "")
    let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    for (let i = 0; i < messages.length; i++) {
        check = array.indexOf(messages[i])
        number = check + n
        //あまりで計算する
        if (number > 25) {
          number = number % 26;
        }
        answer += array[number]
    }
    return answer; 
}
