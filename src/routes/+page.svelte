<script lang="ts">
    import { audioVolume } from '$utilities/stores/audioVolumeStore'
    import { autoFullscreen } from '$utilities/stores/fullscreenStore'

    let audioPlayer: HTMLAudioElement

    $: if (audioPlayer) audioPlayer.volume = $audioVolume
</script>

<svelte:head>
    <title>Pecha Kucha 2023 04 25</title>
    <meta name="description" content="Pecha Kucha 2023 04 25 presentation" />
</svelte:head>

<audio bind:this={audioPlayer} src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast.mp3" />
<header class="controls-layer">
    <div class="hover-container">
        <div class="container">
            <button on:click={() => ($autoFullscreen = !$autoFullscreen)}>
                Auto fullscreen {$autoFullscreen ? 'on' : 'off'}
            </button>
            <button
                style="margin-top: 1em;"
                on:click={() => {
                    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause()
                }}>
                Toggle music
            </button>
            <input type="range" bind:value={$audioVolume} step="0.01" min="0" max="1" />
            <p style="font-size: 0.5em;">
                Local Forecast- Elevator Kevin MacLeod (incompetech.com)<br />
                Licensed under Creative Commons: By Attribution 3.0<br />
                creativecommons.org/licenses/by/3.0/<br />
            </p>
        </div>
    </div>
</header>
<div>
    <section class="glass-background">
        <h1>Pecha Kucha 2023 04 25</h1>
        <a href="/slide/1">Start slides</a>
    </section>
</div>

<style>
    .controls-layer {
        display: grid;
        place-items: end center;
        height: 100%;
        width: 100%;
    }
    div {
        display: grid;
        place-content: center;
        text-align: center;
    }
    .hover-container {
        padding: 1em;
        z-index: 1;
        display: grid;
        place-items: center;
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
</style>
