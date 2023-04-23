<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import ccSrcset from './cc.png?&avif&srcset'
    // @ts-ignore
    import ccMeta from './cc.png?&meta'
    // @ts-ignore
    import pSrcset from './p.png?&avif&srcset'
    // @ts-ignore
    import pMeta from './p.png?&meta'
    // @ts-ignore
    import uSrcset from './u.png?&avif&srcset'
    // @ts-ignore
    import uMeta from './u.png?&meta'
</script>

<Layout type="columns" numberOfElements={3}>
    <Picture sources={[{ type: 'avif', srcset: uSrcset }]} meta={uMeta} />
    <Picture sources={[{ type: 'avif', srcset: ccSrcset }]} meta={ccMeta} />
    <Picture sources={[{ type: 'avif', srcset: pSrcset }]} meta={pMeta} />
</Layout>
