<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import storybookSrcset from './storybook.png?&avif&srcset'
    // @ts-ignore
    import storybookMeta from './storybook.png?&meta'
    // @ts-ignore
    import svelteKitSrcset from './svelteKit.png?&avif&srcset'
    // @ts-ignore
    import svelteKitMeta from './svelteKit.png?&meta'
    // @ts-ignore
    import figmaSrcset from './figma.png?&avif&srcset'
    // @ts-ignore
    import figmaMeta from './figma.png?&meta'
</script>

<Layout type="columns" numberOfElements={3}>
    <Picture sources={[{ type: 'avif', srcset: figmaSrcset }]} meta={figmaMeta} maxHeight={512} />
    <Picture sources={[{ type: 'avif', srcset: storybookSrcset }]} meta={storybookMeta} maxHeight={512} />
    <Picture sources={[{ type: 'avif', srcset: svelteKitSrcset }]} meta={svelteKitMeta} maxHeight={512} />
</Layout>
