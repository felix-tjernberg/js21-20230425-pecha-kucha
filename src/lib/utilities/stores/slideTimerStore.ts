import { writable } from 'svelte/store'

const DEFAULT_TIMER_LENGTH = 20

function createTimer() {
    const { subscribe, update } = writable(DEFAULT_TIMER_LENGTH)

    let timerId: ReturnType<typeof setTimeout>

    function start() {
        if (timerId) return
        timerId = setInterval(() => {
            tick()
        }, 1000)
    }
    function stop() {
        clearInterval(timerId)
        timerId = 0
    }

    function changeTimer(newTime: number) {
        console.log('changeTimer', newTime)

        update(() => newTime)
    }
    function reset() {
        console.log('reset')

        update(() => DEFAULT_TIMER_LENGTH)
    }
    function tick() {
        update((n) => n - 1)
    }

    return { changeTimer, reset, start, stop, subscribe, tick }
}

export const slideTimer = createTimer()
