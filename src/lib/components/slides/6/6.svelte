<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import ccSrcset from './cc.png?&avif&srcset'
    // @ts-ignore
    import ccMeta from './cc.png?&meta'
    // @ts-ignore
    import ccExampleSrcset from './ccExample.png?&avif&srcset'
    // @ts-ignore
    import ccExampleMeta from './ccExample.png?&meta'
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture
        sources={[{ type: 'avif', srcset: ccSrcset }]}
        meta={ccMeta}
        maxWidth={300} />
    <Picture
        sources={[{ type: 'avif', srcset: ccExampleSrcset }]}
        meta={ccExampleMeta}
        maxHeight={720} />
</Layout>
