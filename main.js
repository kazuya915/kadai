const time = document.getElementById('time')
const start = document.getElementById('start')
// const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let state = 'start'
let timerId;
let elapsedMs = 0;
//＃１２　１；１０あたり　
//（？）elapsedMsを外出し黒変にすることで経過時間を保持できるようにする？？

start.addEventListener('click', ()=> {
    if (state === 'start') {
        state = 'stop';
        start.textContent = 'ストップ';   
        start.classList.add('stop');

        let startMs = Date.now();//　スタートを押した時点の時間取得
        startMs -= elapsedMs;//（？）re tuika止めた位置から再開させるための計算 開始時刻から経
console.log(startMs);


        timerId = setInterval(()=> {
            const nowMs = Date.now();
            elapsedMs = nowMs - startMs; //経過ミリ秒
            
            const ms = elapsedMs % 1000;
            const s = Math.floor(elapsedMs / 1000) % 60;
            const m = Math.floor(elapsedMs / 1000 / 60) % 60;
            const formattedMs = ms.toString().padStart(2,'0');
            const formattedS = s.toString().padStart(2,'0');
            const formattedM = m.toString().padStart(2,'0');
            // console.log(`${m}:${s}.${ms}`);

            time.textContent = `${formattedM}:${formattedS}:${formattedMs}`;
        }, 10);
    } else {
        state = 'start'
        clearInterval(timerId);
        start.textContent = 'リスタート';
        start.classList.remove('stop');
    
    }
});

reset.addEventListener('click',()=> {
    state = 'start'
    clearInterval(timerId);
    start.textContent = 'スタート';
    start.classList.remove('stop');
    elapsedMs = 0;
    time.textContent = '00:00:00';
});




