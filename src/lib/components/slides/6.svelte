<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="My test writing strategy" />
</svelte:head>

<Layout class="font-size-100" type="rows" template={['1fr', '65%']}>
    <h1 class="font-size-400">My test writing strategy</h1>
    <ul>
        <li>
            What is the behavior we want to achieve?<br />(Page)
        </li>
        <li>
            What is the input and output for the behavior?<br />(Components)
        </li>
        <li>
            Does the behavior include multiple components?<br />(Composition)
        </li>
    </ul>
</Layout>
