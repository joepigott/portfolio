<script lang="ts">
    import Prism from "@magidoc/plugin-svelte-prismjs";
    import 'prismjs/components/prism-rust';
    import 'prismjs/themes/prism-okaidia.css';
    export let src: string;
</script>

<style>
    .container {
        max-width: 60em;
    }

    @media only screen and (max-width: 868px) {
        .container {
            max-width: 40em;
            min-width: 15em;
        }
    }
</style>

<div class="container">
    <Prism language={'rust'} source={src} />
</div>
