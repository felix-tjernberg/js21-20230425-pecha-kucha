<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="Example of storybook structure" />
</svelte:head>

<Layout class="no-padding " type="columns" template={['1fr', '75%']}>
    <Layout class="margin-left" type="rows" template={['1fr', '55%']}>
        <h1 class="font-size-200">Example of storybook structure</h1>
        <ul class="place-self-start font-size-100">
            <li>Design System</li>
            <li>Pages</li>
            <li>Compositions</li>
            <li>Components</li>
        </ul>
    </Layout>
    <iframe
        title="Storybook demo"
        src="http://localhost:6006/?path=/docs/design-system--docs" />
</Layout>

<style>
    :global(.no-padding) {
        padding: 0;
    }
    :global(.margin-left) {
        margin-left: 100px;
    }
    iframe {
        border-radius: 2em 0 0 2em;
    }
</style>
