<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import uSrcset from './u.png?&avif&srcset'
    // @ts-ignore
    import uMeta from './u.png?&meta'
    // @ts-ignore
    import uExampleSrcset from './uExample.png?&avif&srcset'
    // @ts-ignore
    import uExampleMeta from './uExample.png?&meta'
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture
        sources={[{ type: 'avif', srcset: uSrcset }]}
        meta={uMeta}
        maxWidth={300} />
    <Picture
        sources={[{ type: 'avif', srcset: uExampleSrcset }]}
        meta={uExampleMeta}
        maxHeight={720} />
</Layout>
