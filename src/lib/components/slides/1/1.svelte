<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import whatSrcset from './what.jpg?&avif&srcset'
    // @ts-ignore
    import whatMeta from './what.jpg?&meta'
    // @ts-ignore
    import foreverAloneSrcset from './foreverAlone.png?&avif&srcset'
    // @ts-ignore
    import foreverAloneMeta from './foreverAlone.png?&meta'
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture
        sources={[{ type: 'avif', srcset: foreverAloneSrcset }]}
        meta={foreverAloneMeta} />
    <Picture sources={[{ type: 'avif', srcset: whatSrcset }]} meta={whatMeta} />
</Layout>
