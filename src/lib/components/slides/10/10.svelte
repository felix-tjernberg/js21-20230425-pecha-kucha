<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import agileSrcset from './agile.jpg?&avif&srcset'
    // @ts-ignore
    import agileMeta from './agile.jpg?&meta'
    // @ts-ignore
    import storiesSrcset from './stories.png?&avif&srcset'
    // @ts-ignore
    import storiesMeta from './stories.png?&meta'
    // @ts-ignore
</script>

<Layout type="columns" numberOfElements={2}>
    <Picture sources={[{ type: 'avif', srcset: storiesSrcset }]} meta={storiesMeta} />
    <Picture
        sources={[]}
        meta={{
            src: 'https://i.imgflip.com/7j9m76.gif',
            alt: 'mister bean looking at time in a field',
            height: 203,
            width: 360
        }} />
</Layout>
