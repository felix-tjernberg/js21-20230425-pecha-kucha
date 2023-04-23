<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import simplySrcset from './simply.jpg?&avif&srcset'
    // @ts-ignore
    import simplyMeta from './simply.jpg?&meta'
    // @ts-ignore
    import sandboxSrcset from './sandbox.jpg?&avif&srcset'
    // @ts-ignore
    import sandboxMeta from './sandbox.jpg?&meta'
    // @ts-ignore
    import documentationSrcset from './documentation.jpg?&avif&srcset'
    // @ts-ignore
    import documentationMeta from './documentation.jpg?&meta'
</script>

<svelte:head>
    <meta name="description" content="Why storybook?" />
</svelte:head>

<Layout type="rows" template={['1fr', '70%']}>
    <h1 class="font-size-400">Why storybook?</h1>
    <Layout class="font-size-100 tex" type="columns" numberOfElements={3}>
        <Picture
            sources={[{ type: 'avif', srcset: simplySrcset }]}
            meta={simplyMeta} />
        <Picture
            sources={[{ type: 'avif', srcset: sandboxSrcset }]}
            meta={sandboxMeta} />
        <Picture
            sources={[{ type: 'avif', srcset: documentationSrcset }]}
            meta={documentationMeta} />
    </Layout>
</Layout>
