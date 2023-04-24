<script lang="ts">
    import { onMount } from 'svelte'
    import { slideTimer } from '$stores/slideTimerStore'

    onMount(() => {
        slideTimer.changeTimer(160)
    })
</script>

<iframe src="https://felixtjernberg.se" title="Felix tjernberg's cv webpage" />
