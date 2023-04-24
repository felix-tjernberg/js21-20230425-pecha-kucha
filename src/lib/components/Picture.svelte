<script lang="ts">
    export let sources: { srcset: string; type: string; media?: string }[]
    export let meta: {
        src: string
        alt: string
        height: number
        width: number
    }
    export let maxWidth: number | false = false
    export let maxHeight: number | false = false
</script>

<picture style={maxWidth ? `max-width: ${maxWidth}px` : '' || maxHeight ? `max-height: ${maxHeight}px` : ''}>
    {#each sources as source}
        <source srcset={source.srcset} type={source.type} media={source.media} />
    {/each}
    <img
        src={meta.src}
        alt={meta.alt}
        style={maxWidth ? `max-width: ${maxWidth}px` : '' || maxHeight ? `max-height: ${maxHeight}px` : ''} />
</picture>
