<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta name="description" content="Chromatic showcase" />
</svelte:head>

<Layout type="rows" template={['1fr', '85%']}>
    <h1 class="font-size-400">Chromatic showcase</h1>
    <Layout class="font-size-100" type="columns" numberOfElements={2}>
        <ul>
            <li>WTF is chromatic?</li>
            <li>Visual testing</li>
            <li>Automatic snapshots</li>
            <li>Builds</li>
            <li>Pull Requests</li>
            <li>Library</li>
        </ul>
        <a
            class="text-center"
            href="https://www.chromatic.com/builds?appId=63987b02d55774cd124f7f2f">
            This site was also not able to be ran as a iframe :(</a>
    </Layout>
</Layout>
