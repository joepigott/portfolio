<script>
    import Nav from "./Nav.svelte";
    import Footer from "./Footer.svelte";
    import "./global.css";
    import { page } from "$app/stores";

    function capitalize(string) {
        string = string.slice(1);
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    $: title = capitalize($page.url.pathname);
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-content: stretch;
        max-width: 60em;
        padding: 2.5em 1em 1em 1em;
        color: #e5e0c9;
    }

    @media only screen and (max-width: 767px) {
        .content {
            max-width: 25em;
            font-size: 10pt;
        }
    }
</style>

{#if title != ""}
    <title>JP - {title}</title>
{:else}
    <title>JP - Home</title>
{/if}

<Nav />

<div class="container">
    <div class="content">
        <slot />
    </div>
</div>

<Footer />
