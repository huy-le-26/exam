
// bài2
//  merge2String = (s1, s2) => {
//      var j = Math.min(s1.length, s2.length),
//         temp ='';

//     for( a = 0; a < j; a++) {
//         temp += s1[a] + s2[a];
//     }
//     return temp + s1.slice(a) + s2.slice(a);
// }

// console.log(merge2String('abc', '123'));
// console.log(merge2String('abc', '0123'));
// console.log(merge2String('abcd', '123'));


//bài 3 
let count = 0
luckyNumber = () => {
    kp = Math.round(10 * Math.random());
    count++

    number = document.getElementById("Lucky").value;
    console.log(number)

    if (number > 10 || number < 1) {
        console.log(" bạn nhập  số không đủ điều kiện , vui lòng nhập lại")


    } if (count > 3) {
        alert(" chơi lại nhé :))")
    }

} else if (number !== kp) {
    alert(`bạn sai rồi , mời chơi lại  , kết quả đúng là ${kp}`)




}


