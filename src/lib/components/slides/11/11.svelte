<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import agileSrcset from './agile.jpg?&avif&srcset'
    // @ts-ignore
    import agileMeta from './agile.jpg?&meta'
    // @ts-ignore
    import accurateSrcset from './accurate.jpg?&avif&srcset'
    // @ts-ignore
    import accurateMeta from './accurate.jpg?&meta'
    // @ts-ignore
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture sources={[{ type: 'avif', srcset: agileSrcset }]} meta={agileMeta} maxHeight={428} />
    <Picture sources={[{ type: 'avif', srcset: accurateSrcset }]} meta={accurateMeta} maxHeight={428} />
</Layout>
