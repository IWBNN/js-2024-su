//숫자 최대값 입력을 받습니다.
let maxNum = prompt("숫자 맞추기 게임입니다. 최대값을 입력하세요! (종료: 'q')");
while (!parseInt(maxNum)) {
    //종료 조건을 먼저 만들어 줘야 편리합니다.
    if (maxNum === 'q') {
        console.log("게임 실행을 취소합니다.")
        break;
    }
    maxNum = prompt("입력 오류, 유효한 숫자 값을 입력해 주세요. (종료: 'q')");
}
if (maxNum === 'q') {
    console.log("게임 종료.")
} else {
    alert(`숫자 맞추기 게임을 시작합니다.\n1 ~ ${maxNum} 사이의 숫자가 랜덤으로 결정됩니다.\n정답보다 고른 숫자가 작을경우 up, 반대의 경우 down이 출력됩니다.`)
    let answer = Math.floor(Math.random() * maxNum) + 1;
    let num = prompt("숫자를 입력해주세요!")
    let count = 1
    while (parseInt(num) !== answer) {
        if (parseInt(num) > answer) {
            num = prompt("down.")
            count++
        } else if (parseInt(num) < answer) {
            num = prompt("up.")
            count++
        } else{
            num=prompt("유효한 입력이 아닙니다. 다시 입력해주세요.")
        }
    }
    console.log(`${count}번 만에 맞추셨습니다!`)
}


// 게임 시작 안내 문구 출력
// let gameQuit = false;
// let gameOver = false;
// let gameInput = '';
// let turnElapsed = 0;
// while (!gameQuit && !gameOver) {
//     // 유저의 인풋을 반복적으로 수신하는 게임 코드 작성
//     gameInput = prompt("게임 조작을 위한 ~~숫자 및 ~~텍스트 입력! (종료: 'q' 입력)");
//     if (gameInput === 'q') {
//         gameQuit = true;
//     } else if (gameOverCondition) {
//         gameOver = true;
//     }
// }
//
// // 게임이 종료된 방식에 따라 적절한 내용 출력
// console.log("~~에 의해 게임이 종료되었습니다.")