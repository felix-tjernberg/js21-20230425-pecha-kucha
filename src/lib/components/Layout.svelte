<script lang="ts">
    import { onMount } from 'svelte'
    import { z } from 'zod'

    const TypeSchema = z.enum(['rows', 'columns', 'area'])
    export let type: z.infer<typeof TypeSchema>

    const AreaOptionSchema = z.enum([
        'slash',
        'backslash',
        'middleTop',
        'middleBottom',
        'middleLeft',
        'middleRight',
        'smiley',
        'random'
    ])
    export let areaOption: z.infer<typeof AreaOptionSchema> | false = false

    export let template: string[] | false = false
    export let numberOfElements: number = 3

    let section: HTMLElement

    let classString = `${type} ${$$props.class ? $$props.class : ''}`
    let styleString: string = ''

    if (type === TypeSchema.enum.columns) styleString += `--number-of-columns: ${numberOfElements};`
    if (type === TypeSchema.enum.rows) styleString += `--number-of-rows: ${numberOfElements};`
    if (template)
        styleString += `--grid-template: ${template.reduce(
            (previousValue, currentValue) => previousValue + ' ' + currentValue
        )};`

    switch (areaOption) {
        case false:
            classString += ' cross'
            break
        case AreaOptionSchema.enum.backslash:
            classString += ' backslash'
            break
        case AreaOptionSchema.enum.slash:
            classString += ' slash'
            break
        case AreaOptionSchema.enum.middleTop:
            classString += ' middle-top'
            break
        case AreaOptionSchema.enum.middleBottom:
            classString += ' middle-bottom'
            break
        case AreaOptionSchema.enum.middleRight:
            classString += ' middle-right'
            break
        case AreaOptionSchema.enum.middleLeft:
            classString += ' middle-left'
            break
        case AreaOptionSchema.enum.smiley:
            classString += ' smiley'
            break
        case AreaOptionSchema.enum.random:
            classString += ' random'
            break
    }

    onMount(() => {
        section.scrollTo(section.clientHeight / 2, section.clientWidth / 2)
    })
</script>

<section bind:this={section} class={classString} style={styleString}>
    <slot />
</section>

<style>
    section {
        padding: 5%;
        display: grid;
        height: 100%;
        width: 100%;
        place-items: center;
        gap: 5%;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    section::-webkit-scrollbar {
        display: none;
    }
    .columns {
        --grid-template: repeat(var(--number-of-columns), 1fr);
        grid-template-columns: var(--grid-template);
    }
    .rows {
        --grid-template: repeat(var(--number-of-rows), 1fr);
        grid-template-rows: var(--grid-template);
    }
    .area {
        grid-template-areas: var(--template-areas);
    }
    .cross {
        --template-areas: 'one . two' '. three .' 'four . five';
    }
    .backslash {
        --template-areas: 'one . .' '. two .' '. . three';
    }
    .slash {
        --template-areas: '. . one' '. two .' 'three . .';
    }
    .middle-top {
        --template-areas: '. two .' 'one . three';
    }
    .middle-left {
        --template-areas: 'one .' '. two' 'three .';
    }
    .middle-bottom {
        --template-areas: 'one . three' '. two .';
    }
    .middle-right {
        --template-areas: '.one' 'two .' '. three';
    }
    .smiley {
        --template-areas: '. one . two .' '. . . . .' 'six . . . seven' '. four . five .' '. . three . .';
        grid-template-rows: 15% 2% 10% 5% 10%;
        place-content: center;
    }
    .random {
        --template-areas: '. . one . .' '. two . three .' '. . . . .' '. . four . .' 'five . . . six'
            '. seven . eight .' '. . nine . .';
        grid-template-rows: 2fr 1fr 0.5fr 0.5fr 0.5fr 1fr 2fr;
        place-content: center;
    }
    :global(.area :nth-child(1)) {
        grid-area: one;
    }
    :global(.area :nth-child(2)) {
        grid-area: two;
    }
    :global(.area :nth-child(3)) {
        grid-area: three;
    }
    :global(.area :nth-child(4)) {
        grid-area: four;
    }
    :global(.area :nth-child(5)) {
        grid-area: five;
    }
    :global(.area :nth-child(6)) {
        grid-area: six;
    }
    :global(.area :nth-child(7)) {
        grid-area: seven;
    }
    :global(.area :nth-child(8)) {
        grid-area: eight;
    }
    :global(.area :nth-child(9)) {
        grid-area: nine;
    }
</style>
