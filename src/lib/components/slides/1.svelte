<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import { slideTimer } from '$utilities/stores/slideTimerStore'
    import { onMount } from 'svelte'

    onMount(() => {
        slideTimer.changeTimer(40)
    })
</script>

<svelte:head>
    <meta name="description" content="What we are going to touch on" />
</svelte:head>

<Layout type="rows" template={['1fr', '60%']}>
    <h1 class="font-size-400">What we are going to touch on</h1>
    <Layout class="gap" type="area" areaOption="random">
        <p>Why storybook?</p>
        <p>Example of storybook structure</p>
        <p>Examples of storybook configuration</p>
        <p>The parts of a story</p>
        <p>My test writing strategy</p>
        <p>Storybook addons</p>
        <p>Figma integration</p>
        <p>Chromatic</p>
        <p>Other stuff</p>
    </Layout>
</Layout>

<style>
    p {
        font-size: 18px;
    }
    :global(.gap) {
        gap: 1% !important;
    }
</style>
