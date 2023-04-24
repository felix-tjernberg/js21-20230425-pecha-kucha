<script lang="ts">
    import Layout from '$components/Layout.svelte'
    import Picture from '$components/Picture.svelte'
    // @ts-ignore
    import pExampleSrcset from './pExample.png?&avif&srcset'
    // @ts-ignore
    import pExampleMeta from './pExample.png?&meta'
    // @ts-ignore
    import pSrcset from './p.png?&avif&srcset'
    // @ts-ignore
    import pMeta from './p.png?&meta'
</script>

<Layout type="columns" template={['1fr', '2fr']}>
    <Picture
        sources={[{ type: 'avif', srcset: pSrcset }]}
        meta={pMeta}
        maxWidth={300} />
    <Picture
        sources={[{ type: 'avif', srcset: pExampleSrcset }]}
        meta={pExampleMeta} />
</Layout>
