<script lang="ts">
    import { goto } from '$app/navigation'
    import { onDestroy, onMount } from 'svelte'
    import { MAX_SLIDE_NUMBER, MIN_SLIDE_NUMBER } from '$components/slides/numberOfSlides'

    import { autoFullscreen } from '$utilities/stores/fullscreenStore'
    import { slideTimer } from '$stores/slideTimerStore'

    export let data

    let cursorTimeout: ReturnType<typeof setTimeout>
    let showCursor = false

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }

    function gotoSlide(direction: string) {
        if (direction === 'next') {
            if (data.slideNumber >= MAX_SLIDE_NUMBER) return
            goto(`/slide/${data.slideNumber + 1}`)
            slideTimer.reset()
        } else if (direction === 'prev') {
            if (data.slideNumber <= MIN_SLIDE_NUMBER) return
            goto(`/slide/${data.slideNumber - 1}`)
            slideTimer.reset()
        }
    }

    onMount(() => {
        if ($autoFullscreen) document.documentElement.requestFullscreen()
        slideTimer.start()
    })
    onDestroy(() => {
        slideTimer.reset()
        slideTimer.stop()
    })

    $: if ($slideTimer === 0) {
        if (data.slideNumber === MAX_SLIDE_NUMBER) {
            slideTimer.stop()
        }
        slideTimer.reset()
        gotoSlide('next')
    }

    function handleKeydown({ code }: KeyboardEvent) {
        switch (code) {
            case 'ArrowRight':
                return gotoSlide('next')
            case 'ArrowLeft':
                return gotoSlide('prev')
        }
    }
</script>

<svelte:head>
    <title>{`Pecha Kucha 20230425 Slide  ${data.slideNumber}`}</title>
    <meta name="description" content={`Pecha Kucha 20230425 slide ${data.slideNumber}`} />
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<header class="controls-layer">
    <div class="hover-container">
        <div class="container">
            <button on:click={toggleFullScreen}>Toggle fullscreen</button>
            <div>
                <button on:click={() => gotoSlide('prev')}> Previous slide </button>
                <button on:click={slideTimer.start}>start</button>
                <button on:click={slideTimer.stop}>stop</button>
                <button on:click={slideTimer.reset}>reset</button>
                <button on:click={() => gotoSlide('next')}> Next slide </button>
            </div>
            <a href="/">Go to landing page</a>
        </div>
    </div>
</header>

<div class="info-layer">
    <div class="slide-index">
        <p>{data.slideNumber}</p>
    </div>
    <div class="slide-timer">
        <p>{$slideTimer}</p>
    </div>
</div>

<main
    on:mousemove={() => {
        showCursor = true
        cursorTimeout = setTimeout(() => {
            showCursor = false
        }, 500)
    }}
    style={`cursor:${showCursor ? 'auto' : 'none'}`}>
    <slot />
</main>

<style>
    main {
        max-height: 100vh;
    }
    .info-layer,
    .controls-layer {
        display: grid;
    }
    .slide-timer,
    .slide-index {
        position: absolute;
        padding: 1em;
        opacity: 0.5;
    }
    .slide-index {
        animation: rotate-360-reverse 20s linear infinite;
        top: 0;
        left: 0;
    }
    .slide-timer {
        animation: rotate-360 20s linear infinite;
        top: 0;
        right: 0;
    }
    .controls-layer {
        display: grid;
        place-items: start center;
        height: 100%;
        width: 100%;
    }
    .hover-container {
        padding: 1em;
        z-index: 1;
        display: grid;
        place-items: center;
    }
    .container {
        display: grid;
        justify-content: center;
        transition: scale cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.2s;
        scale: 0;
    }
    .hover-container:focus-within .container,
    .hover-container:hover .container {
        scale: 1;
    }
    .container > * {
        margin-top: 1em;
        display: flex;
        justify-content: space-evenly;
    }

    @keyframes rotate-360 {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: 360deg;
        }
    }
    @keyframes rotate-360-reverse {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: -360deg;
        }
    }
    button {
        padding: 1em;
    }
</style>
