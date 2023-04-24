<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import storiesEverywhereSrcset from './storiesEverywhere.png?&avif&srcset'
    // @ts-ignore
    import storiesEverywhereMeta from './storiesEverywhere.png?&meta'
    // @ts-ignore
    import storiesSrcset from './stories.png?&avif&srcset'
    // @ts-ignore
    import storiesMeta from './stories.png?&meta'
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture sources={[{ type: 'avif', srcset: storiesEverywhereSrcset }]} meta={storiesEverywhereMeta} />
    <Picture sources={[{ type: 'avif', srcset: storiesSrcset }]} meta={storiesMeta} />
</Layout>
