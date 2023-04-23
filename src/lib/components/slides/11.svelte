<script lang="ts">
    import Layout from '$components/Layout.svelte'
</script>

<svelte:head>
    <meta
        name="description"
        content="Other noteworthy stuff if you are interested" />
</svelte:head>

<Layout type="rows" template={['1fr', '9fr']}>
    <h1 class="font-size-400 text-center">
        Other noteworthy stuff if you are interested :)
    </h1>
    <ul>
        <li>Zod</li>
        <li>Icon gallery and color palette components/addons for storybook</li>
        <li>
            <p>
                How CI/CD is currently dodgy in 7.0 (I could not get it to work,
                the builder seems broken atm), <a
                    href="https://storybook.js.org/blog/framework-api/"
                    >See storybook timeline</a>
            </p>
        </li>
        <li>
            There is LIA spots open on our company if you are interested to be
            my coworker :)
        </li>
        <li>
            Test runner can be run locally with storybook-tests-once or
            storybook-tests-watch commands
        </li>
        <li>How storybook-chromatic command is setup using env-cmd</li>
        <li>
            <p>
                I created <a href="https://github.com/felix-tjernberg/js21-20221220-presentation-demo">js21-20221220-presentation-demo repository</a> that we can do
            a code along in
            </p>
        </li>
        <li>How to setup chromatic zero to hero code along</li>
    </ul>
</Layout>
