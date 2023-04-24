<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import aloneSrcset from './alone.jpg?&avif&srcset'
    // @ts-ignore
    import aloneMeta from './alone.jpg?&meta'
    // @ts-ignore
    import storiesSrcset from './stories.jpg?&avif&srcset'
    // @ts-ignore
    import storiesMeta from './stories.jpg?&meta'
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture sources={[{ type: 'avif', srcset: storiesSrcset }]} meta={storiesMeta} maxHeight={666} />
    <Picture sources={[{ type: 'avif', srcset: aloneSrcset }]} meta={aloneMeta} />
</Layout>
