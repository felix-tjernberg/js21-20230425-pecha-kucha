<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="Examples of storybook configuration" />
</svelte:head>

<Layout type="rows" template={['1fr', '60%']}>
    <h1 class="font-size-400">Examples of storybook configuration</h1>
    <Layout
        class="font-size-100 text-center"
        type="columns"
        numberOfElements={4}>
        <p>How to create the folder structure</p>
        <p>layout: 'centered'</p>
        <p>Global styling of storybook</p>
        <p>How to hook into storybook context</p>
    </Layout>
</Layout>
