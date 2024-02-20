const $runningman = document.querySelector('#runningman')
document.addEventListener(
    'keydown', (event) => {
        if (event.key !== 'ArrowRight') {
            return;
        }
        $runningman.classList.remove('pause-running')
        $runningman.classList.add('play-running')
    }
)

document.addEventListener(
    'keyup', (event) => {
        if (event.key !== 'ArrowRight') {
            return;
        }
        $runningman.classList.remove('play-running')
        $runningman.classList.add('pause-running')
    }
)