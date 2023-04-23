<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="The 2 parts of a stories file" />
</svelte:head>

<Layout type="rows" template={['1fr', '60%']}>
    <h1 class="font-size-400">The 2 parts of a stories file</h1>
    <Layout class="font-size-300" type="columns" numberOfElements={2}>
        <p>Meta</p>
        <p>Stories</p>
    </Layout>
</Layout>
