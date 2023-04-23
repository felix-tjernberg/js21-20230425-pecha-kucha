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
    // @ts-ignore
    import cubeSrcset from './cube.png?&avif&srcset'
    // @ts-ignore
    import cubeMeta from './cube.png?&meta'
</script>

<Layout type="columns" numberOfElements={4}>
    <Picture sources={[{ type: 'avif', srcset: uSrcset }]} meta={uMeta} />
    <Picture sources={[{ type: 'avif', srcset: ccSrcset }]} meta={ccMeta} />
    <Picture sources={[{ type: 'avif', srcset: pSrcset }]} meta={pMeta} />
    <Picture sources={[{ type: 'avif', srcset: cubeSrcset }]} meta={cubeMeta} />
</Layout>
