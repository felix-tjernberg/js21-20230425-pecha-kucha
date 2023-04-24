<script lang="ts">
    import Slide1 from '$components/slides/1/1.svelte'
    import Slide2 from '$components/slides/2/2.svelte'
    import Slide3 from '$components/slides/3/3.svelte'
    import Slide4 from '$components/slides/4/4.svelte'
    import Slide5 from '$components/slides/5/5.svelte'
    import Slide6 from '$components/slides/6/6.svelte'
    import Slide7 from '$components/slides/7/7.svelte'
    import Slide8 from '$components/slides/8/8.svelte'
    import Slide9 from '$components/slides/9/9.svelte'
    import Slide10 from '$components/slides/10/10.svelte'
    import Slide11 from '$components/slides/11/11.svelte'
    import Rest from '$components/slides/Rest.svelte'

    function selectComponent(number: number) {
        switch (number) {
            case 1:
                return Slide1
            case 2:
                return Slide2
            case 3:
                return Slide3
            case 4:
                return Slide4
            case 5:
                return Slide5
            case 6:
                return Slide6
            case 7:
                return Slide7
            case 8:
                return Slide8
            case 9:
                return Slide9
            case 10:
                return Slide10
            case 11:
                return Slide11
            case 12:
                return Rest
        }
    }

    export let data
</script>

<svelte:component this={selectComponent(data.slideNumber)} />
