<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="Demo writing a test" />
</svelte:head>

<Layout type="rows" template={['1fr', '85%']}>
    <h1 class="font-size-400">Time to write a test</h1>
    <iframe
        title="Storybook demo"
        src="http://localhost:6006/?path=/story/components-counter--story-4" />
</Layout>
