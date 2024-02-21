const $userCharacter = document.getElementById('user-character');
const $backgroundImg = document.getElementById('bgImg')  // 정적 속성 제거로 class 처리 가능해짐
// console.log($userCharacter);
// const imgDir = '../img_zeldarink/'
// const postureTypes = ['back', 'front', 'left', 'right']
// document.addEventListener('DOMContentLoaded', () => {
//         // 1-2 캐릭터 이미지 사전로드
//         for (let direction of postureTypes) {
//             let charImgs = Array.from({length: 10},
//                 (_, idx) => {
//                     return `${imgDir}${direction}_walk${idx}.png`
//                 });
//             // console.log(charImgs)
//             charImgs.forEach(imgPath => {
//                 $userCharacter.setAttribute('style', `background-image: url("${imgPath}")`)
//             });
//         }
//         // 1-3. 캐릭터 이미지 최초 포지션 세팅
//         $userCharacter.setAttribute('style', 'background-image: url("../img_zeldarink/front_stand.png")')
//     }
// )

const characterLocation = {
    x: 1500, y: 1500
}
const backgroundLocation = {
    x: 0, y: 0
}
const stepSize = 40;
const allowedKeys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']
const animationKeyMap = {
    ArrowDown: 'forward',
    ArrowUp: 'backward',
    ArrowLeft: 'left',
    ArrowRight: 'right'
}

function characterMove() {
    $userCharacter.setAttribute('style', `transform: translate(${characterLocation.x}px, ${characterLocation.y}px)`)
}
function backgroundMove() {
    console.log(backgroundLocation)
    $backgroundImg.setAttribute('style', `background-position: ${backgroundLocation.x}px ${backgroundLocation.y}px`)
}

// Function Map 사용의 메리트 : 각각의 키에 대한 동작이 복잡해져도, 서로 영향을 주지 않게끔, 분리되는 효과 => 코드가 간결해지고 유지보수성이 상승
const animationFunctionMap = {
    ArrowDown: (function down() {
        // 익명함수를 리턴하는 즉시실행 함수
        return function () {
            // if (backgroundLocation.y >= mapSizeY) {
            //     return;
            // }
            backgroundLocation.y -= stepSize;
            characterMove();
            backgroundMove();
        }
    })(),
    ArrowUp: (function up() {
        // 익명함수를 리턴하는 즉시실행 함수
        return function () {
            // if (backgroundLocation.y <= 0) {
            //     return;
            // }
            backgroundLocation.y += stepSize;
            characterMove();
            backgroundMove();
        }
    })(),
    ArrowLeft: (function left() {
        // 익명함수를 리턴하는 즉시실행 함수
        return function () {
            // if (backgroundLocation.x <= 0) {
            //     return;
            // }
            backgroundLocation.x += stepSize;
            characterMove();
            backgroundMove();
        }
    })(),
    ArrowRight: (function right() {
        // 익명함수를 리턴하는 즉시실행 함수
        return function () {
            // if (backgroundLocation.x >= mapSizeX) {
            //     return;
            // }
            backgroundLocation.x -= stepSize;
            characterMove();
            backgroundMove();
        }
    })()
}

document.addEventListener('keydown', (evt) => {
        if (!allowedKeys.includes(evt.key)) {
            return;
        }
        // pause 가 남아있는 것을 제거해야 함 => 어떤 방향의 pause 가 남아있을 지 알 수가 없음 => 모든 방향의 pause 제거
        for (let direction of Object.values(animationKeyMap)) {
            $userCharacter.classList.remove(`pause-${direction}`)
            // $backgroundImg.classList.remove(`pause-${direction}`);
        }
        // //// 특정 키에 특정 방향 애니메이션 매칭하도록 클래스 추가
        $userCharacter.classList.add(`walking-${animationKeyMap[evt.key]}`);  // 특정 키에 특정 방향 애니메이션 매칭해줄 수 있게 변경
        // $backgroundImg.classList.add(`walking-${animationKeyMap[evt.key]}`);
        animationFunctionMap[evt.key]();


    }
)

document.addEventListener('keyup', (evt) => {
        // 이벤트 키 검사
        if (!allowedKeys.includes(evt.key)) {
            return;
        }
        // 3-2 애니메이션 중단
        $userCharacter.classList.remove(`walking-${animationKeyMap[evt.key]}`);
        // $backgroundImg.classList.remove(`walking-${animationKeyMap[evt.key]}`);
        // 특정 키에 특정 방향 애니메이션 매칭하도록 클래스 추가
        $userCharacter.classList.add(`pause-${animationKeyMap[evt.key]}`);
        // $backgroundImg.classList.add(`pause-${animationKeyMap[evt.key]}`);
    }
)