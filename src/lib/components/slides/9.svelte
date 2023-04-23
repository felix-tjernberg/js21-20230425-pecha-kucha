<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="Figma showcase" />
</svelte:head>

<Layout type="rows" template={['1fr', '85%']}>
    <h1 class="font-size-400">Figma showcase</h1>
    <Layout class="font-size-100" type="columns" numberOfElements={2}>
        <ul>
            <li>Connect figma in stories file</li>
            <li>Connect storybook in figma file</li>
        </ul>
        <iframe
            title="Storybook demo"
            src="https://www.figma.com/file/D4ytlSaO41unhZYevTXGUQ/Untitled?node-id=0%3A1&t=3cuW6q2msDNRI1gu-0" />
    </Layout>
</Layout>
